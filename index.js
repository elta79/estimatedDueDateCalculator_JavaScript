const messageEl= document.getElementById("message-el")
const numWeeksEl = document.getElementById("numWeeks-el")
const messageContainer = document.getElementById("message-container")



function calcButton(){  
    //get date selected, save date selected as an obj
    const dateSelectedEl = document.getElementById("date").value
    const dateSelected = new Date(dateSelectedEl)
    const day = dateSelected.getUTCDate()
    const month = dateSelected.getUTCMonth()
    const year = dateSelected.getUTCFullYear()
    const dateSelectedMs = Date.UTC(year, month, day+1)

    messageContainer.style.display="block"

    function edd(ms){
        const oneDay = 86400000
        const oneWeek = 604800000
        const avgPregMs = 24192000000
        const todayObj = new Date()
        const today = todayObj.valueOf()
        let eddMs
        let edd
        let numWeeks
        
        
        if(document.getElementById('lmp').checked){
            eddMs = ms + avgPregMs 
            edd = new Date(eddMs).toLocaleDateString()
            numWeeks = Math.floor((today - ms)/oneWeek)
            messageEl.innerHTML = `Your estimated due date is <br> <span id="message-date"> ${edd} </span>`
            numWeeksEl.innerHTML = `You are <span id="message-weeks">${numWeeks}</span> weeks pregnant!`
        } else if (document.getElementById('conception').checked){
            eddMs = ms + avgPregMs -(2 * oneWeek)
            edd = new Date(eddMs).toLocaleDateString()
            numWeeks = Math.floor((today -( ms - (2* oneWeek)))/oneWeek)
            messageEl.innerHTML= `Your estimated due date is <br> <span id="message-date"> ${edd} </span>`
            numWeeksEl.innerHTML = `You are <span id="message-weeks">${numWeeks}</span> weeks pregnant!`
        } else {
            eddMs = ms
            edd = new Date(eddMs).toLocaleDateString()
            numWeeks = Math.floor((today + oneDay - (eddMs - avgPregMs))/oneWeek)
            messageEl.innerHTML = `Your estimated due date is <br> <span id="message-date"> ${edd} </span>`
            numWeeksEl.innerHTML = `You are <span id="message-weeks">${numWeeks}</span> weeks pregnant!`
        }        
    }
    
    edd(dateSelectedMs)
}
