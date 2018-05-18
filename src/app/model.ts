// var model = {
//     user: "Adam",
//     items: [{ action: "Buy Flowers", done: false },
//     { action: "Get Shoes", done: false },
//     { action: "Collect Tickets", done: true },
//     { action: "Call Joe", done: false }]
// };

export class Model {
    user;
    items;
    constructor() {
        this.user = "Andrey";
        this.items = [new TodoItem("Angular", false),
                        new TodoItem("React", false),
                        new TodoItem("Vue", false),
                        new TodoItem("Backbone", false)]

} }

export class TodoItem {
    action;
    done;
    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}
