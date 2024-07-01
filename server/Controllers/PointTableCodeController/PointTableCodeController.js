const PointTableFormModel = require("../../Model/PointTableFormModel/PointTableFormModel");

const getPointTable = async (req, res) => {
    try {
        let dataQuery = PointTableFormModel.find({});

        // Search bar
        if (req.query && req.query.q) {
            const q = req.query.q;
            dataQuery = dataQuery.find({ nameOfTheTeam: { $regex: q, $options: "i" } });
        }
 
        const data = await dataQuery.exec();

        if (!data || data.length === 0) {
            return res.json({ success: false, data: [] });
        }

        // Aggregating rows by event name and team name
        const aggregatedData = data.reduce((acc, curr) => {
            const key = `${curr.nameOfTheMatch}_${curr.nameOfTheTeam}`;
            if (!acc[key]) {
                acc[key] = { 
                    ...curr._doc, 
                    totalRunsEachTeamMatches: curr.totalRunsEachTeamMatches, 
                    totalMarksForEachTeam: curr.totalMarksForEachTeam,
                    totalOversEachTeam: curr.totalOversEachTeam,
                    wonMatches: curr.wonMatches, 
                    lostMatches: curr.lostMatches 
                };
            } else {
                acc[key].totalRunsEachTeamMatches += curr.totalRunsEachTeamMatches;
                acc[key].totalMarksForEachTeam += curr.totalMarksForEachTeam;
                acc[key].totalOversEachTeam += curr.totalOversEachTeam;
            }
            return acc;
        }, {});

        let finalData = Object.values(aggregatedData).map((r) => {
            const nrr = ((r.totalRunsEachTeamMatches / r.totalOversEachTeam) - (
                r.totalMarksForEachTeam / r.totalOversEachTeam
            )).toFixed(2);

            return { ...r, nrr: parseFloat(nrr) };
        });

        // Sort data by NRR in ascending order for negative values, and then ascending for positive values
        finalData.sort((a, b) => {
            if (a.nrr < 0 && b.nrr < 0) {
                return a.nrr - b.nrr; // Ascending order for negative values
            } else if (a.nrr >= 0 && b.nrr >= 0) {
                return a.nrr - b.nrr; // Ascending order for positive values
            } else if (a.nrr < 0 && b.nrr >= 0) {
                return -1; // Negative values come before positive values
            } else {
                return 1; // Positive values come after negative values
            }
        });

        res.json({
            success: true,
            data: finalData
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error while getting point table',
            error
        });
    }
}

module.exports = { getPointTable };
