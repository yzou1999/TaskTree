const router = require("express").Router();
const Task = require("../schemas/Task");
const moment = require("moment")

router.route("/create-task").post((req, res) => {
    const text = req.body.text
    const id = req.body.id
    const username = req.body.username
    const isComplete = req.body.isComplete
    const newTask = new Task({
        id,
        text,
        username,
        isComplete

    });
    newTask.save();

})

router.get("/get-tasks", async(req,res) => {
     Task.find().then((tasks) => res.json(tasks));


});

router.route("/changeCompletion").post((req, res) => {
  Task.findOneAndUpdate({ id: req.body.id}, {$set: {isComplete: true}
  }).then(result => {
    res.status(200).json({
      updated_completion:result
    })
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      error:err
    })
  })
});

router.route("/deleteTask").post((req, res) => {
  Task.deleteOne({ id: req.body[0].id}).then(result => {
    res.status(200).json({
      updated_tasks:result
    })
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      error:err
    })
  })
});

router.route("/changeText").post((req, res) => {
  Task.findOneAndUpdate({ id: req.body.id}, {$set: {text: req.body.text}
  }).then(result => {
    res.status(200).json({
      updated_text:result
    })
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      error:err
    })
  })
});

module.exports=router;