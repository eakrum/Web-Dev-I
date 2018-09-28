const mongoCollection = require("./mongoCollection");
const todos = mongoCollection.todos;
const uuidv4 = require("uuid/v4");

checkString = arg => {
  if (typeof arg != "string") throw "Argument must be a string";
};

async function createTask(title, description) {
  if (!title) {
    throw "No title was provided";
  }

  if (!description) {
    throw "No description was provided";
  }

  const task = {
    _id: uuidv4(),
    title: title,
    description: description,
    completed: false,
    completedAt: null
  };

  const todoCollection = await todos();

  const newTask = await todoCollection.insertOne(task);
  if (newTask.insertedCount === 0) throw "Could not create the task";

  const newId = newTask.insertedId;
  return await getTask(newId);
}

async function getAllTasks() {
  const todoCollection = await todos();
  return await todoCollection.find({}).toArray();
}

async function getTask(id) {
  if (!id) throw "You must provide a task ID";
  checkString(id);
  const todoCollection = await todos();
  const todo = await todoCollection.findOne({ _id: id });
  if (todo === null) throw "Task with that id could not be found";
  return todo;
}

async function completeTask(taskId) {
  if (!taskId) throw "Task ID missing";
  checkString(taskId);
  const todoCollection = await todos();
  let time = new Date();

  let update = {
    completed: true,
    completedAt: time
  };

  const updatedTask = await todoCollection.updateOne(
    { _id: taskId },
    { $set: update }
  );

  if (updatedTask.modifiedCount === 0) {
    throw "unable to update task";
  }

  return await getTask(taskId);
}

async function removeTask(id) {
  if (!id) throw "You must provide a task ID to remove a task";
  checkString(id);
  const todoCollection = await todos();
  const removeTodo = await todoCollection.removeOne({ _id: id });
  if (removeTodo.deletedCount === 0) {
    throw "Unable to remove task";
  }
}

//not part of assignment just used this for debugging
async function deleteAll() {
  const todoCollection = await todos();
  return await todoCollection.deleteMany({});
}

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  completeTask,
  removeTask,
  deleteAll
};
