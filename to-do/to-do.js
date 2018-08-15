const fs = require('fs');

let listTodo = require('../db/data.json');



const saveDB = () => {
    let data = JSON.stringify(listTodo);

    fs.writeFile('db/data.json', data, function(err) {
        if (err) throw err;
        console.log('Saved!');
    });
}


const create = (desc) => {

    let todo = {
        description: desc,
        finished: false
    }

    listTodo.push(todo);

    saveDB();
    return todo;
}


const getList = () => {

    return listTodo;
}

const update = (describe, finished = true) => {

    let index = listTodo.findIndex(task => {
        return task.description === describe
    });
    console.log(listTodo);
    if (index >= 0) {
        listTodo[index].finished = finished;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const del = (describe) => {

    let index = listTodo.findIndex(task => {
        return task.description === describe
    });
    //console.log(listTodo);
    if (index >= 0) {
        listTodo.splice(index, 1);
        saveDB();
        return true;
    } else {
        return false;
    }
}


module.exports = {
    create,
    getList,
    update,
    del
}