const date = require("../getDate.js");
const Task = require("../models/task");
let toDoList = [];

exports.getMainPage = (req, res) => {
  let today = date.getTodayDateLong();
  //let today = date.getTodayDateShort();
  // console.log(today);
  res.render("index.ejs", { date: today, myToDo: toDoList });
};

exports.postNewTask = (req, res) => {
  const newTask = new Task(req.body.newTask);
  newTask.saveTask();

  /*let userTask = req.body.newTask;
  toDoList.push(userTask);
  console.log(toDoList);*/
  res.redirect("/");
};

exports.deleteTask = (req, res) => {
  let itemToDelete = req.body.checkbox;
  //console.log(req.body.checkbox);
  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i] === itemToDelete) {
      //kontrollime nii tüüpi kui ka sisu
      toDoList.splice(i, 1);
    }
  }
  res.redirect("/");
};
