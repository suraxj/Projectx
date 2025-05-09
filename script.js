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
// openFeatures()
localStorage.clear
 var currentTask = []

 if(localStorage.getItem('currentTask')){

 currentTask = JSON.parse(localStorage.getItem('currentTask'))
 }else{
    console.log('Task list is empty');
    
 }
    
function renderTask(){
localStorage.setItem('currentTask', JSON.stringify(currentTask))
var allTask = document.querySelector('.allTask')

var sum = ''
 
currentTask.forEach(function(elem,idx){
    sum = sum + `<div class="task">
    <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
    <button id=${idx}>Mark as Completed</button>
    </div>`
})
allTask.innerHTML = sum

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

    taskInput.value = ''
    taskDetailsInput.value = ''
    taskCheckbox.checked = false
 })
  
 var markCompletedBtn = document.querySelectorAll('.task button')

 markCompletedBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
             console.log(btn.id);
             

 })
 
})