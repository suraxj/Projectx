function openFeatures(){
    var allElems = document.querySelectorAll('.elem')
var allFullElemPage = document.querySelectorAll('.fullElem')
var allFullElemPgeBackBtn = document.querySelectorAll('.fullElem .back')

allElems.forEach(function(elem){
    elem.addEventListener('click',function(){
        allFullElemPage[elem.id].style.display = 'block'
    })
})

allFullElemPgeBackBtn.forEach(function(back){
back.addEventListener('click',function(){
    allFullElemPage[back.id].style.display = 'none'
})
})
}
openFeatures()
 
function todoList (){
    var currentTask = []

 if(localStorage.getItem('currentTask')){

 currentTask = JSON.parse(localStorage.getItem('currentTask'))
 }else{
    console.log('Task list is empty');
    
 }
    
function renderTask(){
var allTask = document.querySelector('.allTask')

var sum = ''
 
currentTask.forEach(function(elem,idx){
    sum = sum + `<div class="task">
    <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
    <button id=${idx}>Mark as Completed</button>
    </div>`
})
allTask.innerHTML = sum
localStorage.setItem('currentTask', JSON.stringify(currentTask))
document.querySelectorAll('.task button').forEach(function(btn){
    btn.addEventListener('click', function(){
        currentTask.splice(btn.id,1)
             renderTask()
             
             })
        })
}
renderTask()
 
let form = document.querySelector('.addTask form')
let taskInput = document.querySelector('.addTask form input')
let taskDetailsInput = document.querySelector('.addTask form textarea')
let taskCheckbox = document.querySelector('.addTask form #check')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    currentTask.push(
        {
        task: taskInput.value, 
        details: taskDetailsInput.value,
        imp: taskCheckbox.checked
        }
    )
    renderTask()

    taskCheckbox.checked = false
    taskInput.value = ''
    taskDetailsInput.value = ''
 })
  
 
}
todoList()
function dailyPlanner(){
    var dayPlanData = JSON.parse(localStorage.getItem('dayPlanData'))||{}

var dayPlanner = document.querySelector('.day-planner')

var hours = Array.from({length:18},(_,idx) =>`${6+idx}:00 - ${7+idx}:00`)
 
var wholeDaySum = ''
hours.forEach(function(elem,idx){

    var savedData = dayPlanData[idx]||''
  wholeDaySum = wholeDaySum + ` <div class="day-planner-time">
                    <p>${elem}</p>
                    <input id=${idx} type="text" in placeholder="..." value = ${savedData}>
                </div>`
})

dayPlanner.innerHTML = wholeDaySum

var dayPlannerInput = document.querySelectorAll('.day-planner input')

dayPlannerInput.forEach(function(elem){
    elem.addEventListener('input', function(){
        
    dayPlanData[elem.id] = elem.value
    
    localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData))
    
    })
      })
}
dailyPlanner()

function motivationalQuote(){
    var motivationQuoteContent = document.querySelector('.motivation-2 h1')
var motivationAuthor = document.querySelector('.motivation-3 h2')

async function fetchQuote(){
 let response = await fetch('https://api.quotable.io/random')
 console.log(response.json());
 
 motivationQuoteContent.innerHTML = data.content
 motivationAuthor.innerHTML = data.author 
 
}
fetchQuote()

}
motivationalQuote()

function pomodoroTimer(){
    let timer = document.querySelector('.pomo-timer h1')
var startBtn = document.querySelector('.pomo-timer .start-timer')
var pauseBtn = document.querySelector('.pomo-timer .pause-timer')
var resetBtn = document.querySelector('.pomo-timer .reset-timer')
var session = document.querySelector('.pomodoro-fullpage .session')
var isworkSession = true


let totalSeconds = 25*60
let timerInterval = null

function upDateTimer(){
    let minutes = Math.floor(totalSeconds/60)
    let seconds = totalSeconds%60

    timer.innerHTML = `${String(minutes).padStart('2','0')}:${String(seconds).padStart('2','0')}`
    
}
function startTimer(){
    clearInterval(timerInterval)

   if(isworkSession){
     timerInterval = setInterval(function(){
     if (totalSeconds > 0){
        totalSeconds--
        upDateTimer()
    }else{
        isworkSession = false
        clearInterval(timerInterval)
        timer.innerHTML = '05:00'
        session.innerHTML = 'take a break'
        session.style.background = 'var(--blue)'
        totalSeconds = 5 * 60
    }
}, 10)
   }else{
    timerInterval = setInterval(function(){
     if (totalSeconds > 0){
        totalSeconds--
        
    }else{
        isworkSession = true
        clearInterval(timerInterval)
        timer.innerHTML = '25:00'
        session.innerHTML = 'Work Session'
        session.style.background = 'var(--green)'
         totalSeconds = 25*60
    }
    upDateTimer()
}, 10)
   }
     
   }

function pauseTimer(){
    clearInterval(timerInterval)
}

function resetTimer(){
    totalSeconds = 25*60
    clearInterval(timerInterval)
    upDateTimer()
}
startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)
resetBtn.addEventListener('click', resetTimer)
}
pomodoroTimer()

var apiKey = 'ca8c2af98d044559803175511252404'
var city = 'Bhopal'

var data = null
async function weatherAPICall(){
var response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)

data = await response.json()   
}
weatherAPICall()

function timeDate(){
    const totalDaysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
    var date = new Date()
    var dayOfWeek = totalDaysOfWeek[date.getDay()];
    var hours = date.getHours()
    var minutes = date.getMinutes()
    header1Date.innerHTML = `${dayOfWeek}, ${hours}:${minutes} pm`;
}
timeDate()
