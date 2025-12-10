import { tasks } from "../db/tasks.js";

/**
 * pushes a task into tasks list
 * @param {object} task Complete task object
 */
export function addTask(task) {
    tasks.push(task);
}