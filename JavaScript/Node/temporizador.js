const schedule = require('node-schedule')

// De 5 em 5 segundos, em qualquer minuto, às 10:00 horas, ignorando o dia do mês e o próprio mês, executando na terça-feira.
const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 2', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // Segunda a Sexta
regra.hour = 10
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})