import { printWelcomeMessage, getUserActionChoice } from "./client/taskLogs.js";
import { getTaskName, getTaskDescription } from "./client/taskInput.js";
import { createTask } from "./models/task.js";
import { addTask } from "./services/taskService.js";

/**
 * calls functions to get input from user for task name and description,
 * then calls a function to create a valid task object,
 * then calls a service function to insert task into db.
 */
function handleAddTask() {
    const name = getTaskName();
    const description = getTaskDescription();
    const task = createTask(name, description);
    addTask(task);
}


/**
 * calls getUserActionChoice()
 * and then calls the appropriate function 
 * for each choice.
 */
function handleUserChoice() {
    const choice = getUserActionChoice();
    
    switch (choice) {

        case 0:
            handleAddTask();
            break;
    
        default:
            break;
    }
}