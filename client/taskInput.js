import { question } from 'readline-sync';

/**
 * @returns name of task received from the user
 */
export function getTaskName() {
    const taskName = question("Pleas enter the task name.\n> ");

    return taskName;
}

/**
 * @returns description of task received from the user
 */
export function getTaskDescription() {
    const taskDescription = question("Enter the task description.\n> ");

    return taskDescription;
}




