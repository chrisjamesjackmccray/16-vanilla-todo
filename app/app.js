let todos = [];

document
  .querySelector("#button")
  .addEventListener("click", function(e) {
    let textinput = document.querySelector("#textfield");
    let todo = new Todo(textinput.value);
    todos.push(todo);
    console.log(todos);
    render();
  });


function Todo(item) {
  this.item = item;
  this.completed = false;
}


function render() {
 document.querySelector("#todos").innerHTML = "";

 todos.forEach((todo) => {
   let div = document.createElement('div');
   div.classList.add("todo");
   div.innerHTML = todo.item;

   if (todo.completed == true) {
     div.classList.add("completed");
   }

   div.addEventListener("click", function() {
     togglecompleted(todo);
     render();
     console.log(todo);
   });

   document.querySelector("#todos").appendChild(div);

   console.log(div);
 })
}

function togglecompleted(todo) {
  todo.completed = !todo.completed;
}














// document
//   .querySelector("#textfield")
//   .addEventListener("click", function(e) {
//   });
