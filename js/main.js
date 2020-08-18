---
---

// FORM INPUT BEHAVIOR

// var input = document.querySelector("input[type='tel']");

// if (input && input.value) {
//   input.classList.add('filled');
// } // for Firefox that keeps form input values on reload

// input.addEventListener('blur', function() {
//   if (input && input.value) {
//     input.classList.add('filled');
//   }
//   else {
//     input.classList.remove('filled');
//   }
// });

// // CLEAR ERROR STATE WHEN CLICKING INPUTS

// input.addEventListener('click', function() {
//     input.classList.remove('error');
// });

// input.addEventListener('keyup', function() {
//     input.classList.remove('error');
// });

var timer;
var current;
var stopped = false;


function animateValue(id, start, end, duration) {
  clearInterval(timer);
  var range = end - start;
  current = start;
  var increment = end > start? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current.toLocaleString('us-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0,
      maximumFractionDigits: 0});;
      // if (current == end) {
      //     clearInterval(timer);
      // }
  }, stepTime);
}

function stop(element) {
  clearInterval(timer);
  stopped = true;
}



function toggle(element) {
  if (stopped) {
    resume(element);
  }
  else {
    stop(element);
    }
}

function resume(element) {
  stopped = false;
  millisecondsSinceStart = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);  
  timeTillEnd = fullYear - millisecondsSinceStart;
  animateValue("fraudCounter", current, 27000000000, timeTillEnd);
}

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var millisecondsSinceStart = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var fullYear = oneDay * 365;
var moneyPerMillisecond = 27000000000 / fullYear;

var startDollar = Math.floor(millisecondsSinceStart * moneyPerMillisecond);
var timeTillEnd = fullYear - millisecondsSinceStart;
animateValue("fraudCounter", startDollar, 27000000000, timeTillEnd);