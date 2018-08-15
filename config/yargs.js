const describe = {
    demand: true,
    alias: 'd',
    desc: 'Describe the to-do'
};

const finished = {
    default: true,
    alias: 'c',
    desc: 'Flag the to-do as finished'
};

const argv = require('yargs')
    .command('create', 'Create an element TO-DO', {
        describe
    })
    .command('update', 'Updates the state of the TO-DO to finished', {
        describe,
        finished
    })
    .command('delete', 'Delete an element TO-DO', {
        describe
    })
    .help()
    .argv;



module.exports = {
    argv
}