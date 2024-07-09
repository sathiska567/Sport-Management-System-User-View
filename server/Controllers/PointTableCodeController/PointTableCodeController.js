const PointTableFormModel = require("../../Model/PointTableFormModel/PointTableFormModel");

const getPointTable = async (req, res) => {
    try {
        let dataQuery = PointTableFormModel.find({});

        if (req.query && req.query.event) {
            const event = req.query.event;
            dataQuery = dataQuery.find({ nameOfTheMatch: { $regex: event, $options: "i" } });
        }

        const data = await dataQuery.exec();

        if (!data || data.length === 0) {
            return res.json({ success: false, data: [] });
        }

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

        finalData.sort((a, b) => b.totalMarksForEachTeam - a.totalMarksForEachTeam);

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
