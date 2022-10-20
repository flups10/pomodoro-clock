// Get Elements
breakTime = document.querySelector('#break-time')
breakMin = document.querySelector('#break-min')
breakPlus = document.querySelector('#break-plus')
workTime = document.querySelector('#work-time')
workMin = document.querySelector('#work-min')
workPlus = document.querySelector('#work-plus')
start = document.querySelector('#start')
stop = document.querySelector('#stop')
timerMin = document.querySelector('#timer-min')
timerSec = document.querySelector('#timer-sec')
reset = document.querySelector('#reset')



// events listener
// Plus and minus events
breakMin.addEventListener('click', ()=> breakTime.innerHTML > 1 ? breakTime.innerHTML-- : null)
breakPlus.addEventListener('click', ()=> breakTime.innerHTML++)
workMin.addEventListener('click', ()=> workTime.innerHTML > 1 ? workTime.innerHTML-- : null)
workPlus.addEventListener('click', ()=> workTime.innerHTML++)

start.addEventListener('click', timer)
reset.addEventListener('click', resetFunction)

// Timer function
function timer(){

    // Make sure not multiple timer run at the same time and reset
    start.removeEventListener('click', timer)
    timerMin.innerHTML = workTime.innerHTML
    timerSec.innerHTML = '00';
    myInterval = setInterval(function(){
    
        if (timerSec.innerHTML == 00 && timerMin.innerHTML == 00){
            alert('Times up')
            start.addEventListener('click', timer)
            clearInterval(myInterval)
        } else if (timerSec.innerHTML == 0) {
            timerSec.innerHTML = 59
            timerMin.innerHTML--
        } else if (timerSec.innerHTML <= 59){
            timerSec.innerHTML--
        }
    }, 1000)

    //Stop
    stop.innerHTML = 'Stop'
    stop.addEventListener('click', stopTimer)

    function stopTimer(){
        start.addEventListener('click', timer)
        clearInterval(myInterval)
    }
}

function resetFunction(){
    timerMin.innerHTML = workTime.innerHTML
    timerSec.innerHTML = '00';
}