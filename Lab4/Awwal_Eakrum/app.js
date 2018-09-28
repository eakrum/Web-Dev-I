const {
  createTask,
  getAllTasks,
  getTask,
  completeTask,
  removeTask,
  deleteAll
} = require("./todo");

const connection = require("./mongoConnection");

const task1 = {
  title: "Ponder Dinosaurs",
  description:
    "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"
};

const task2 = {
  title: "Play Pokemon with Twitch TV",
  description: "Should we revive Helix?"
};

async function main() {
  insertTask1 = await createTask(task1.title, task1.description);
  insertTask2 = await createTask(task2.title, task2.description);

  queryAll = await getAllTasks();
  console.log(queryAll);
  await removeTask(insertTask1._id);

  queryAll2 = await getAllTasks();

  completedTask = await completeTask(insertTask2._id);
  logCompletedTask = await getTask(insertTask2._id);
  console.log(logCompletedTask);

  console.log("done");
  const db = await connection();
  await db.serverConfig.close();
  console.log("database closed.");
}

main().catch(err => {
  console.log(err);
});
