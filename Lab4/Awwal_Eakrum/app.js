const {
  createTask,
  getAllTasks,
  getTask,
  completeTask,
  removeTask
} = require("./todo");

const task1 = {
  title: "Ponder Dinosaurs",
  description:
    "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"
};

const task2 = {
  title: "Play Pokemon with Twitch TV",
  description: "Should we revive Helix?"
};

//TODO: how do we dynamically get the task ID without hardcoding it into args?
async function main() {
  insertTask1 = await createTask(task1.title, task1.description).catch(err => {
    console.log("Something went wrong: ", err);
  });
  console.log(insertTask1);
  insertTask2 = await createTask(task2.title, task2.description).catch(err => {
    console.log("Something went wrong: ", err);
  });

  queryAll = await getAllTasks().catch(err => {
    console.log("something went wrong: ", err);
  });
  console.log(queryAll);
  await removeTask("firstTaskID").catch(err => {
    console.log("something went wrong: ", err);
  });

  queryAll2 = await getAllTasks().catch(err => {
    console.log("Something went wrong: ", err);
  });

  completedTask = await completeTask("secondTaskID").catch(err => {
    console.log("Something went wrong: ", err);
  });
  logCompletedTask = await getTask("completedTaskID").catch(err => {
    console.log("Something went wrong: ", err);
  });

  console.log("done");
}

main();
