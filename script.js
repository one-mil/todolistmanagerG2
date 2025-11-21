const form = document.getElementById('form')
const submitBtn = document.getElementById('submitBtn')
const clearBtn = document.getElementById('clearBtn')
const input = document.getElementById('input')
let ul = document.getElementById('ul')
let wrapper = document.getElementById('wrapper')
// const toDoList = ['sister', 'mother', 'son']
const toDoList = []



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
            itemDescription.style.textDecorationThickness = '5x'

        } else {
            itemDescription.style.textDecoration = ''
        }

    })
    const actions = document.createElement('div')
    actions.classList.add('actions')
    actions.appendChild(completedBtn)

    // adding edit button to edit list rather than deleting
const editBtn = document.createElement('button');
editBtn.textContent = 'Edit';
editBtn.classList.add('button', 'editBtn');

editBtn.addEventListener('click', () => {
    if (taskItem.classList.contains('editing')) return; 
    taskItem.classList.add('editing');

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = itemDescription.textContent;
    editInput.classList.add('editInput');

    
    taskItem.replaceChild(editInput, itemDescription);
    editInput.focus();

    const saveChanges = () => {
        const trimmedValue = editInput.value.trim();
        if (trimmedValue) {
            itemDescription.textContent = trimmedValue;
        }
        taskItem.replaceChild(itemDescription, editInput);
        taskItem.classList.remove('editing');
    };

    editInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') saveChanges();
    });

    editInput.addEventListener('blur', saveChanges);
});


actions.appendChild(editBtn);

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

