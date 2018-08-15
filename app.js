const argv = require('./config/yargs').argv;

const colors = require('colors');

const todos = require('./to-do/to-do.js');


let comand = argv._[0];

switch (comand) {
    case 'create':
        //console.log(todos);
        let task = todos.create(argv.describe);
        console.log(task);
        break;

    case 'list':

        let listed = todos.getList();
        console.log(listed);
        for (let task of listed) {
            console.log(task);
            console.log('========TO-DOs==========='.green);
            console.log('#########################'.green);
            console.log('Descripcion: ' + task.description);
            console.log('Status: ' + task.finished);
        }

        //console.log('show all to-dos');
        break;

    case 'update':

        let updated = todos.update(argv.describe, argv.finished);

        console.log('to-dos to update: ' + updated);
        break;

    case 'delete':

        let deleted = todos.del(argv.describe);

        console.log('to-dos delete: ' + deleted);
        break;



    default:
        break;
}