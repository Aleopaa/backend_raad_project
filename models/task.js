const {init} = require("../initdb")

module.exports = class Task {
    constructor(data){
        this.id = data.id;
        this.habit = data.habit;
        this.comment = data.comment;
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                const taskData = await init();
                let tasks = taskData.rows.map(b => new Task(b));
                resolve (tasks);
            } catch (err) {
                reject('Task not found');
            }
        });
    };
}
