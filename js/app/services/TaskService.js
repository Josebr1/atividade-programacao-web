class TaskService {

    constructor() {

    }

    all() {
        var items = [];
        var keys = Object.keys(localStorage);
        var size = keys.length;
        while (size--) {
            items.push(localStorage.getItem(keys[size]));
        }
        return items;
    }

    add(task) {
        console.log("task");
        localStorage.setItem(localStorage.length + 1, task);
    }

    delete(id) {
        localStorage.removeItem(id);
    }

    clear() {
        localStorage.clear();
    }

}