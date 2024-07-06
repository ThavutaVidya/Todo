const todoList=[{
  name:'learn',
  dueDate:'2024-07-23'
},
{
  name:'Cook',
  dueDate:'2024-07-24'
}];

renderTodo();

function renderTodo(){

  let todoListHtml='';
  for(let i=0;i<todoList.length;i++){
    const todoObj=todoList[i];
    const name=todoObj.name;
    const dueDate=todoObj.dueDate;

    const html=`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick=" 
        todoList.splice(${i},1);
        renderTodo();
      " class="delete-btn">delete</button>`;
    todoListHtml+=html;
    
  }
 
  document.querySelector('.js-todo-list')
   .innerHTML= todoListHtml;
}
function addTodo(){
  const inputNameEl=document.querySelector('.js-input-name');
  const  name=inputNameEl.value;
  const inputDateEl=document.querySelector('.js-duedate-input');
  const dueDate=inputDateEl.value;
 
  todoList.push({
    name:name,
    dueDate:dueDate
  });
 
  inputNameEl.value='';
  inputDateEl.value='';

  renderTodo();
}



