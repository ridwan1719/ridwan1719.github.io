let value_click = 0


let submited = (event) =>{
    
    let task_text = document.querySelector("#floatingInputGroup1").value;
    if (task_text){
        value_click += 1
        //let checkbox_var = `<input class="form-check-input ms-auto" type="checkbox" value="">`
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `${value_click}) ${task_text}.`
        document.querySelector("#floatingInputGroup1").value = '';
        document.querySelector(".list-group").appendChild(listItem);
        let check_box_var = document.createElement('input');
        check_box_var.className = "form-check-input ms-auto"
        check_box_var.type = "checkbox"
        check_box_var.dataset.listItemIndex = value_click;
        check_box_var.addEventListener('change', check_click);
        listItem.append(check_box_var);        
    }
}
let check_click = (event)=>{
    let checkbox =event.target;
    
    let listItem = checkbox.closest(".list-group-item");

    if(event.target.checked){
        listItem.classList.add('strikethrough');
    }else{
        listItem.classList.remove('strikethrough')
    }
    
}
let clearit = (event)=>{
    document.querySelector(".list-group").innerHTML = '';
    value_click = 0;
}

let searchTasks = (event) => {
    let query = event.target.value.toLowerCase();
    let tasks = document.querySelectorAll('.list-group-item');

    tasks.forEach((task) => {
        let taskText = task.innerText.toLowerCase();
        if (taskText.includes(query)) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}
let triggerSubmitOnEnter = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default action (form submission)
        document.querySelector("#submit-btn-task").click();
    }
}

document.querySelector("#submit-btn-task").addEventListener('click', submited);
document.querySelector("#clear-btn-task").addEventListener('click', clearit);
document.querySelector(".form-control[type='search']").addEventListener('input', searchTasks);
document.querySelector("#floatingInputGroup1").addEventListener('keydown', triggerSubmitOnEnter);



