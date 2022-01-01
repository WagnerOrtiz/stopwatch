const timerItself = document.querySelector('#timer-itself')
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const reset = document.querySelector('#reset')
let timer
let s = 0


function getTimeFromSeconds(s){
    const data = new Date(s*1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'UTC'
    })
}

function startTimer(){
    timer = setInterval(function(){ 
        s++
        timerItself.innerHTML = getTimeFromSeconds(s)
    },1000)
}

document.addEventListener('click', (e) => {
    clickedElement = e.target

    if(clickedElement.id === 'start') {
        startTimer()
        start.disabled = true
        start.setAttribute('id', 'disabled')
        timerItself.style.color = 'white'
    }
    
    if(clickedElement.id === 'pause'){
        clearInterval(timer)
        start.disabled = false
        start.setAttribute('id', 'start')
        timerItself.style.color = 'red'
    }

    if(clickedElement.id === 'reset'){
        clearInterval(timer)
        timerItself.innerHTML = '00:00:00'
        s = 0
        start.disabled = false
        start.setAttribute('id', 'start')
        timerItself.style.color = 'white'
    }
})  
