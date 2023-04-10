// Testing different ways to work with the dates

const x = new Date()
const day = x.getUTCDate()
const month =x.getUTCMonth()+1
const year = x.getUTCFullYear()

const ms = Date.UTC(year, month-1, day)
let newMs

//edd using 280 day method
function edd(ms){
    newMs = ms + 24192000000 
    return newMs
}

edd(ms)

//edd using -3 mon, +1 year + 7 days
function altEdd(day, month, year){
    const newDay = day+7
    const newMonth = month - 3 < 0? month+9 : month-3

    const newYear = month > 3 ? year + 1 : year
    console.log("new day " + newDay + " new Month " + newMonth + " new Year "+ newYear)
}
altEdd(day, month, year)

const eddDate = new Date(newMs).toDateString()

console.log(x)
console.log(day)
console.log(month)
console.log(year)
console.log(ms)
console.log(newMs)
console.log(eddDate)


function weeks(){
    const oneWeek = 604800000
    const todayObj = new Date()
    const today = todayObj.valueOf()
    const lmpObj = new Date(Date.UTC(2022, 4, 25))
    const lmp = lmpObj.valueOf()
    const numWeeks = Math.floor((today - lmp)/oneWeek)
    
    console.log(`Number of weeks are ${numWeeks}`)
}
weeks(ms)