var input = document.querySelector('input');
var btn = document.querySelector('.addTask > button');

var notCompleted = document.querySelector('.notCompleted');
var Completed = document.querySelector('.Completed');



function addList(){


    var newLi = document.createElement('li');
    var edit = document.createElement('button');
    var delBtn = document.createElement('button');

    edit.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';


    if(input.value !==''){
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(edit);
        newLi.appendChild(delBtn);
    }

    checkBtn.addEventListener('click', function(){
        var parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        edit.style.display = 'none';
    });

    delBtn.addEventListener('click', function(){
        var parent = this.parentNode;
        parent.remove();
    });
}

function del(){
    notCompleted.innerHTML = "";
}