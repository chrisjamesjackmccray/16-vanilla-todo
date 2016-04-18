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

 // class alltodos = {
 //   let todoone = document.createElement("div");
 //   list.innerHTML = innerHTML + 'Bag'
 //
 //   let todotwo = document.createElement("div");
 //   list.innerHTML = innerHTML + 'Orange'
 //
 //   let todothree = document.createElement("div");
 //   list.innerHTML = innerHTML + 'Fruit'
 // }



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
   document.querySelector("#todos").appendChild(div);

   console.log(div);
 })
}







// document
//   .querySelector("#textfield")
//   .addEventListener("click", function(e) {
//   });
