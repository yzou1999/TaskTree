const router = require("express").Router();
const Task = require("../schemas/Task");
const moment = require("moment")

router.route("/create-task").post((req, res) => {
    const title = req.body.title
    const newTask = new Task({
        title
    });
    newTask.save();

})

router.get("/get-tasks", async(req,res) => {
    const events = await Task.find({
        start: {$gte: moment(req.query.start).toDate() }, 
        end: { $lte: moment(req.query.end).toDate() },
    });

    res.send(tasks);
});

module.exports=router;