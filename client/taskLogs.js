import { keyInSelect } from "readline-sync";
/**
 * @returns number representing the user's selection from possible actions.
 */
export function getUserActionChoice() {
    const options = [
        "Add a new task",
        "Delete an existing task",
        "See the tasks"
    ]

    const choice = keyInSelect(options, 'Select an action');

    return choice;
}


export function printWelcomeMessage() {
    console.log("~~~~~Welcome to TODO System~~~~~\n\n");
}