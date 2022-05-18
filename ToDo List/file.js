

function addTodo()
{
    let inputId = document.getElementById('todo')
    let item = document.createElement('p')
    let tasks = document.getElementById('tasks')
    const value = inputId.value
    item.innerHTML = '<em>' + value + '</em>'
    tasks.appendChild(item)
    addStyle(item)
    item.onclick = function(){
	item.style.cursor = 'pointer'
        if(item.style.textDecoration == 'none')
        {
            item.style.textDecoration = 'line-through'
            item.style.color = 'grey'
        }
        else
        {
            item.style.textDecoration = 'none'
            item.style.color = 'black'
        }

    }

}

function addStyle(item)
{
    const cStyle = item.style
    cStyle.borderBottom = '1px solid gray'
    cStyle.padding = '10px'
    cStyle.fontSize = '20px'
}

