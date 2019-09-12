const descripcion = {
    demand: false,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion,
        completado
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'listar un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'borrar un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}