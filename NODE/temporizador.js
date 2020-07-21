const schedule = require('node-schedule')

//2 = terça
const tarefa1 = schedule.scheduleJob('*/3 * * * * *', function() {
    console.log('Executando Tarefa 1', new Date().getSeconds())
})

setTimeout(() => {
   tarefa1.cancel() 
   console.log('Cancelando Tarefa')
}, 10000);

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1 , 5)]
regra.second = 10

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2' , new Date().getSeconds())
})


