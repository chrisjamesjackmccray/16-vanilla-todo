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

    if (todo.completed == true) {
      div.classList.add("completed");
    }

    div.addEventListener("click", function () {
      togglecompleted(todo);
      render();
      console.log(todo);
    });

    document.querySelector("#todos").appendChild(div);

    console.log(div);
  });
}

function togglecompleted(todo) {
  todo.completed = !todo.completed;
}

// document
//   .querySelector("#textfield")
//   .addEventListener("click", function(e) {
//   });

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFFBQVEsRUFBUjs7QUFFSixTQUNHLGFBREgsQ0FDaUIsU0FEakIsRUFFRyxnQkFGSCxDQUVvQixPQUZwQixFQUU2QixVQUFTLENBQVQsRUFBWTtBQUNyQyxNQUFJLFlBQVksU0FBUyxhQUFULENBQXVCLFlBQXZCLENBQVosQ0FEaUM7QUFFckMsTUFBSSxPQUFPLElBQUksSUFBSixDQUFTLFVBQVUsS0FBVixDQUFoQixDQUZpQztBQUdyQyxRQUFNLElBQU4sQ0FBVyxJQUFYLEVBSHFDO0FBSXJDLFVBQVEsR0FBUixDQUFZLEtBQVosRUFKcUM7QUFLckMsV0FMcUM7Q0FBWixDQUY3Qjs7QUFXQSxTQUFTLElBQVQsQ0FBYyxJQUFkLEVBQW9CO0FBQ2xCLE9BQUssSUFBTCxHQUFZLElBQVosQ0FEa0I7QUFFbEIsT0FBSyxTQUFMLEdBQWlCLEtBQWpCLENBRmtCO0NBQXBCOztBQU1BLFNBQVMsTUFBVCxHQUFrQjtBQUNqQixXQUFTLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUMsU0FBakMsR0FBNkMsRUFBN0MsQ0FEaUI7O0FBR2pCLFFBQU0sT0FBTixDQUFjLFVBQUMsSUFBRCxFQUFVO0FBQ3RCLFFBQUksTUFBTSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBTixDQURrQjtBQUV0QixRQUFJLFNBQUosQ0FBYyxHQUFkLENBQWtCLE1BQWxCLEVBRnNCO0FBR3RCLFFBQUksU0FBSixHQUFnQixLQUFLLElBQUwsQ0FITTs7QUFLdEIsUUFBSSxLQUFLLFNBQUwsSUFBa0IsSUFBbEIsRUFBd0I7QUFDMUIsVUFBSSxTQUFKLENBQWMsR0FBZCxDQUFrQixXQUFsQixFQUQwQjtLQUE1Qjs7QUFJQSxRQUFJLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQVc7QUFDdkMsc0JBQWdCLElBQWhCLEVBRHVDO0FBRXZDLGVBRnVDO0FBR3ZDLGNBQVEsR0FBUixDQUFZLElBQVosRUFIdUM7S0FBWCxDQUE5QixDQVRzQjs7QUFldEIsYUFBUyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLFdBQWpDLENBQTZDLEdBQTdDLEVBZnNCOztBQWlCdEIsWUFBUSxHQUFSLENBQVksR0FBWixFQWpCc0I7R0FBVixDQUFkLENBSGlCO0NBQWxCOztBQXdCQSxTQUFTLGVBQVQsQ0FBeUIsSUFBekIsRUFBK0I7QUFDN0IsT0FBSyxTQUFMLEdBQWlCLENBQUMsS0FBSyxTQUFMLENBRFc7Q0FBL0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IHRvZG9zID0gW107XG5cbmRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvblwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgdGV4dGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXh0ZmllbGRcIik7XG4gICAgbGV0IHRvZG8gPSBuZXcgVG9kbyh0ZXh0aW5wdXQudmFsdWUpO1xuICAgIHRvZG9zLnB1c2godG9kbyk7XG4gICAgY29uc29sZS5sb2codG9kb3MpO1xuICAgIHJlbmRlcigpO1xuICB9KTtcblxuXG5mdW5jdGlvbiBUb2RvKGl0ZW0pIHtcbiAgdGhpcy5pdGVtID0gaXRlbTtcbiAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbn1cblxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2Rvc1wiKS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgZGl2LmlubmVySFRNTCA9IHRvZG8uaXRlbTtcblxuICAgaWYgKHRvZG8uY29tcGxldGVkID09IHRydWUpIHtcbiAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gICB9XG5cbiAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHRvZ2dsZWNvbXBsZXRlZCh0b2RvKTtcbiAgICAgcmVuZGVyKCk7XG4gICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuICAgfSk7XG5cbiAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb3NcIikuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgY29uc29sZS5sb2coZGl2KTtcbiB9KVxufVxuXG5mdW5jdGlvbiB0b2dnbGVjb21wbGV0ZWQodG9kbykge1xuICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBkb2N1bWVudFxuLy8gICAucXVlcnlTZWxlY3RvcihcIiN0ZXh0ZmllbGRcIilcbi8vICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4vLyAgIH0pO1xuIl19
