(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var todos = [];

document.querySelector("#button").addEventListener("click", function (e) {
  var textinput = document.querySelector("#textfield");
  var todo = new Todo(textinput.value);
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

  todos.forEach(function (todo) {
    var div = document.createElement('div');
    div.classList.add("todo");
    div.innerHTML = todo.item;
    document.querySelector("#todos").appendChild(div);

    console.log(div);
  });
}

// document
//   .querySelector("#textfield")
//   .addEventListener("click", function(e) {
//   });

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFFBQVEsRUFBUjs7QUFFSixTQUNHLGFBREgsQ0FDaUIsU0FEakIsRUFFRyxnQkFGSCxDQUVvQixPQUZwQixFQUU2QixVQUFTLENBQVQsRUFBWTtBQUNyQyxNQUFJLFlBQVksU0FBUyxhQUFULENBQXVCLFlBQXZCLENBQVosQ0FEaUM7QUFFckMsTUFBSSxPQUFPLElBQUksSUFBSixDQUFTLFVBQVUsS0FBVixDQUFoQixDQUZpQztBQUdyQyxRQUFNLElBQU4sQ0FBVyxJQUFYLEVBSHFDO0FBSXJDLFVBQVEsR0FBUixDQUFZLEtBQVosRUFKcUM7QUFLckMsV0FMcUM7Q0FBWixDQUY3Qjs7Ozs7Ozs7Ozs7OztBQXVCQSxTQUFTLElBQVQsQ0FBYyxJQUFkLEVBQW9CO0FBQ2xCLE9BQUssSUFBTCxHQUFZLElBQVosQ0FEa0I7QUFFbEIsT0FBSyxTQUFMLEdBQWlCLEtBQWpCLENBRmtCO0NBQXBCOztBQU1BLFNBQVMsTUFBVCxHQUFrQjtBQUNqQixXQUFTLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUMsU0FBakMsR0FBNkMsRUFBN0MsQ0FEaUI7O0FBR2pCLFFBQU0sT0FBTixDQUFjLFVBQUMsSUFBRCxFQUFVO0FBQ3RCLFFBQUksTUFBTSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBTixDQURrQjtBQUV0QixRQUFJLFNBQUosQ0FBYyxHQUFkLENBQWtCLE1BQWxCLEVBRnNCO0FBR3RCLFFBQUksU0FBSixHQUFnQixLQUFLLElBQUwsQ0FITTtBQUl0QixhQUFTLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUMsV0FBakMsQ0FBNkMsR0FBN0MsRUFKc0I7O0FBTXRCLFlBQVEsR0FBUixDQUFZLEdBQVosRUFOc0I7R0FBVixDQUFkLENBSGlCO0NBQWxCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCB0b2RvcyA9IFtdO1xuXG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIiNidXR0b25cIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgbGV0IHRleHRpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGV4dGZpZWxkXCIpO1xuICAgIGxldCB0b2RvID0gbmV3IFRvZG8odGV4dGlucHV0LnZhbHVlKTtcbiAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICAgIGNvbnNvbGUubG9nKHRvZG9zKTtcbiAgICByZW5kZXIoKTtcbiAgfSk7XG5cbiAvLyBjbGFzcyBhbGx0b2RvcyA9IHtcbiAvLyAgIGxldCB0b2Rvb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAvLyAgIGxpc3QuaW5uZXJIVE1MID0gaW5uZXJIVE1MICsgJ0JhZydcbiAvL1xuIC8vICAgbGV0IHRvZG90d28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuIC8vICAgbGlzdC5pbm5lckhUTUwgPSBpbm5lckhUTUwgKyAnT3JhbmdlJ1xuIC8vXG4gLy8gICBsZXQgdG9kb3RocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAvLyAgIGxpc3QuaW5uZXJIVE1MID0gaW5uZXJIVE1MICsgJ0ZydWl0J1xuIC8vIH1cblxuXG5cbmZ1bmN0aW9uIFRvZG8oaXRlbSkge1xuICB0aGlzLml0ZW0gPSBpdGVtO1xuICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xufVxuXG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9zXCIpLmlubmVySFRNTCA9IFwiXCI7XG5cbiB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICBkaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICBkaXYuaW5uZXJIVE1MID0gdG9kby5pdGVtO1xuICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2Rvc1wiKS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICBjb25zb2xlLmxvZyhkaXYpO1xuIH0pXG59XG5cblxuXG5cblxuXG5cbi8vIGRvY3VtZW50XG4vLyAgIC5xdWVyeVNlbGVjdG9yKFwiI3RleHRmaWVsZFwiKVxuLy8gICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbi8vICAgfSk7XG4iXX0=
