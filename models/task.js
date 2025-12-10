import { customAlphabet } from "nanoid";

/**
 * @param {string} name The name of the task
 * @param {string} description task description
 * @returns a complete task object 
 */
export function createTask(name, description) {
    const date = new Date().toLocaleDateString();
    const nanoid = customAlphabet('0123456789', 6);

    return {
        id: nanoid(),
        date: date,
        name: name,
        description: description,
        status: "todo"
    }
}