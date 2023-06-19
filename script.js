const inputTask = document.getElementById("input-task")
const inputBtn = document.getElementById("input-btn")
const tasks = document.getElementById('tasks')

if (localStorage.getItem("tasksHTML")) {
    tasks.innerHTML = localStorage.getItem("tasksHTML")
}

let tasksHTML = tasks.innerHTML
let checkContent = document.querySelectorAll(".check-content")
let taskBox = document.querySelectorAll('.task')

const handelCross = () => {
    taskBox = document.querySelectorAll('.task')
    taskBox.forEach(element => {
        const cross = element.querySelector('.cross')
        cross.addEventListener("click", () => {
            element.classList.add("none")
            tasksHTML = tasks.innerHTML
            localStorage.setItem("tasksHTML", tasksHTML)
        })
    })
}


const handelCheckbox = () => {
    checkContent = document.querySelectorAll(".check-content")
    checkContent.forEach(contentBox => {
        const checkbox = contentBox.querySelector(".check")
        const content = contentBox.querySelector(".content")
        checkbox.addEventListener('click', () => {
            if (checkbox.classList.contains("fa-square")) {
                checkbox.classList.remove("fa-square")
                checkbox.classList.add("fa-square-check")
                content.classList.add("line-through")
            } else if (checkbox.classList.contains("fa-square-check")) {
                checkbox.classList.remove("fa-square-check")
                checkbox.classList.add("fa-square")
                content.classList.remove("line-through")
            }
            tasksHTML = tasks.innerHTML
            localStorage.setItem("tasksHTML", tasksHTML)
        })
    })
}

const handelTask = () => {
    const task = inputTask.value
    if (task) {
        tasks.innerHTML += `
        <div class="task flex justify-space-between pd-medium">
            <div class="check-content">
                <i class="check fa-regular fa-square"></i>
                <span class="content">${task}</span>
            </div>
            <i class="cross fa-solid fa-xmark"></i>
        </div>
    `
        checkContent = document.querySelectorAll(".check-content")
        inputTask.value = ""
        handelCheckbox()
        handelCross()
        tasksHTML = tasks.innerHTML
        localStorage.setItem("tasksHTML", tasksHTML)
    }
}

inputBtn.addEventListener('click', () => {
    handelTask()
})
inputTask.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        handelTask()
    }
})

handelCheckbox()
handelCross()