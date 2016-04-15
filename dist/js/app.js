(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

document.querySelector("#button").addEventListener("click", function (e) {
  var textinput = document.querySelector("#textfield");
  console.log(textinput);
});

function Todo(item) {
  this.item = item;
  this.completed = false;
  this.todoarray = [];
}

document.querySelector("#textfield").addEventListener("click", function (e) {
  this.todoarray.push(textinput);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxTQUNHLGFBREgsQ0FDaUIsU0FEakIsRUFFRyxnQkFGSCxDQUVvQixPQUZwQixFQUU2QixVQUFTLENBQVQsRUFBWTtBQUN2QyxNQUFJLFlBQVksU0FBUyxhQUFULENBQXVCLFlBQXZCLENBQVosQ0FEbUM7QUFFdkMsVUFBUSxHQUFSLENBQVksU0FBWixFQUZ1QztDQUFaLENBRjdCOztBQVNBLFNBQVMsSUFBVCxDQUFjLElBQWQsRUFBb0I7QUFDbEIsT0FBSyxJQUFMLEdBQVksSUFBWixDQURrQjtBQUVsQixPQUFLLFNBQUwsR0FBaUIsS0FBakIsQ0FGa0I7QUFHbEIsT0FBSyxTQUFMLEdBQWlCLEVBQWpCLENBSGtCO0NBQXBCOztBQU9BLFNBQ0csYUFESCxDQUNpQixZQURqQixFQUVHLGdCQUZILENBRW9CLE9BRnBCLEVBRTZCLFVBQVMsQ0FBVCxFQUFZO0FBQ3JDLE9BQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsU0FBcEIsRUFEcUM7Q0FBWixDQUY3QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJkb2N1bWVudCBcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIjYnV0dG9uXCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICBsZXQgdGV4dGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXh0ZmllbGRcIik7XG4gIGNvbnNvbGUubG9nKHRleHRpbnB1dCk7XG4gIH0pO1xuXG5cblxuZnVuY3Rpb24gVG9kbyhpdGVtKSB7XG4gIHRoaXMuaXRlbSA9IGl0ZW07XG4gIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIHRoaXMudG9kb2FycmF5ID0gW107XG5cbn1cblxuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIjdGV4dGZpZWxkXCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIHRoaXMudG9kb2FycmF5LnB1c2godGV4dGlucHV0KTtcbiAgfSk7XG4iXX0=
