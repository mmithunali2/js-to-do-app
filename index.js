var taskContainer=document.querySelector('.task-container');
var inputBox=document.getElementById('inputBox');
var msg=document.querySelector('.message')

// add list
function addToDo(){
    const textValue=inputBox.value;
    if (inputBox.value==="") {
        alert("Please input something!");
    }
    else if(inputBox.value){
        var list=document.createElement('li');
        list.innerHTML=textValue;
        list.style.textTransform="capitalize"
        taskContainer.appendChild(list)
        const span=document.createElement('span');
        span.innerHTML=`<i class="fas fa-trash-alt"></i>`;
        span.classList.add('icon');
        list.appendChild(span);
        setData();
        console.log(textValue);
    }
    inputBox.value="";
    timer("Task added successfully","added")
}

// if complete
taskContainer.addEventListener('click',(mithun)=>{
    if (mithun.target.tagName==="LI") {
        mithun.target.classList.toggle("complete")
        setData();
    }
    else if(mithun.target.tagName==="I"){
        mithun.target.parentElement.parentElement.remove();
        timer("Task was deleted","delete")
        setData();
        
    }
    
    
})

// store data

function setData(){
    localStorage.setItem("data",taskContainer.innerHTML)
}

//get Data

function getData(){
    var data=localStorage.getItem('data')
    taskContainer.innerHTML=data;
}
getData()


function timer(msgTxt,c) {
    msg.classList.add(c);
    msg.innerHTML=msgTxt;
    setTimeout(() => {
        msg.classList.remove(c)
    }, 1000);

}