const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 4', function() {    // '*/5 * 14 * * 4' => Executa a cada 5s, todos os min, às 14 horas, todos os dias do mês, todos os meses, nas quinta-feiras.
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 14
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})