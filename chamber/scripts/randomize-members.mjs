/**
 * This function gets a list and the legth of the memebrs list that
 * we have in the chamber.
 */

export default async function randomizeMembers(data) {

    const list = []

    // Add members to a list
    data.forEach(member => {
        list.push(member);
    });

    // Loops through the list and randomize it.
    for(let i = 0; i <= list.length; i++) {
        // get 0 or 1 and times it to the length - the number on i
        let number = Math.random() * (list.length - i);

        // Deletes the item closed to the number generated and store it into a varible called deletedItem
        const deletedItem = list.splice(number, 1);

        // Insert the deleted item at the end of the array.
        list.push(deletedItem[0]);
    }
    
    // return randomized list
    return list;
} 