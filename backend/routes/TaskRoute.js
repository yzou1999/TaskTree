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
    const tasks = await Task.find({
        title: {$gte: moment(req.query.start).toString() } 
    });

    res.send(tasks);
});

module.exports=router;