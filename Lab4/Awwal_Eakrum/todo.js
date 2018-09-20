const mongoCollection = require("./mongoCollection");
const todos = mongoCollection.todos;
const uuidv4 = require("uuid/v4");

async function createTask(title, description) {
  if (!title) throw "You must provide a title";
  if (!description) throw "You must provide a description";

  const todoCollection = await todos();

  let newToDo = {
    _id: uuidv4(),
    title: title,
    description: description,
    completed: false,
    completedAt: null
  };

  const newTodo = await todoCollection.insertOne(newToDo);
  if (newTodo.insertedCount === 0) throw "Unable to create Task";

  return newToDo;
}

async function getAllTasks() {
  const todoCollection = await todos();
  return await todoCollection.find({}).toArray();
}

async function getTask(id) {
  const todoCollection = await todos();
  const todo = await todoCollection.findOne({ _id: id });
  if (todo === null) throw "Task with that id could not be found";
  return todo;
}

async function completeTask(taskId) {
  const todoCollection = await todos();
  const updatedTask = await todoCollection.updateOne(
    { _id: taskId },
    {
      completed: true,
      completedAt: "time placeholder"
    }
  );

  if (updatedTask.modifiedCount === 0) {
    throw "unable to update task";
  }

  return await getTask(taskId);
}

async function removeTask(id) {
  if (!id) throw "You must provide a task ID to remove a task";
  const todoCollection = await todos();
  const removeTodo = await todoCollection.removeOne({ _id: id });
  if (removeTodo.deletedCount === 0) {
    throw "Unable to remove task";
  }
}

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  completeTask,
  removeTask
};
