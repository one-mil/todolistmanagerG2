const form = document.getElementById('form')
const submitBtn = document.getElementById('submitBtn')
const clearBtn = document.getElementById('clearBtn')
const input = document.getElementById('input')
let ul = document.getElementById('ul')
let wrapper = document.getElementById('wrapper')
// const toDoList = ['sister', 'mother', 'son']
const toDoList = []

const anyItems = () => {
    if (toDoList.length > 0) {
        clearBtn.classList.add('show')
    }
}
// anyItems()
input.focus()


console.log(toDoList)


clearBtn.addEventListener('click', () => {
    // toDoList.splice(0)
    wrapper.innerHTML = ''
    wrapper.classList.remove('show')

    console.log('clear clicked')
})


const createItems = (e) => {
    e.preventDefault()
    toDoList.push(input.value)

    const taskItem = document.createElement(`div`)
    taskItem.classList.add('taskItem')

    const itemDescription = document.createElement('li')
    itemDescription.textContent = `${input.value}`


    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('button', 'deleteBtn')
    deleteBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove()

        if (ul.children.length == 0) {
            wrapper.classList.remove('show')

        }
    })
    const completedBtn = document.createElement('input')
    completedBtn.type = 'checkbox'
    completedBtn.classList.add('checked')
    
    completedBtn.addEventListener('click', () => {
        if (completedBtn.checked) {
            itemDescription.style.textDecoration = 'line-through'
            itemDescription.style.textDecorationThickness = '10px'

        } else {
            itemDescription.style.textDecoration = ''
        }

    })
    const actions = document.createElement('div')
    actions.appendChild(completedBtn)
    actions.appendChild(deleteBtn)

    taskItem.appendChild(itemDescription)
    taskItem.appendChild(actions)

    ul.appendChild(taskItem)
    wrapper.classList.add('show')


    input.value = ''

}

form.addEventListener('submit', createItems)
clearBtn.addEventListener('click', () => {
    ul.innerHTML = ''
    wrapper.classList.remove('show')

    
})




