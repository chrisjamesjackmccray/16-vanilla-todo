document 
  .querySelector("#button")
  .addEventListener("click", function(e) {
  let textinput = document.querySelector("#textfield");
  console.log(textinput);
  });



function Todo(item) {
  this.item = item;
  this.completed = false;
  this.todoarray = [];

}

document
  .querySelector("#textfield")
  .addEventListener("click", function(e) {
    this.todoarray.push(textinput);
  });
