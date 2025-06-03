document.addEventListener("DOMContentLoaded", () => {
var 정답리스트 = ['field', 'apple', 'grape', 'melon', 'water', 'force', 'stone', 'guess', 'crane', 'audio', 'fires', 'motif', 'cross', 'paper', 'photo', 'bread', 'fruit', 'mouth', 'boost', 'event', 'fries', 'stamp', 'lunch', 'flame', 'clash', 'start', 'cloud', 'limit', 'music', 'starw', 'hello', 'world', 'cream', 'mouse', 'chair', 'table', 'speed', 'robot', 'plant', 'brick', 'quiet', 'blend', 'track', 'night', 'spine'];
var 답 = 정답리스트[Math.floor(Math.random() * 정답리스트.length)];
var input = document.querySelectorAll('.input');
var checkAnswer = 0
let correctAnswer = 0

function bindInputEvents(inputList) {
    for (var i = 0; i < inputList.length; i++) {
      (function(index) {
        inputList[index].addEventListener('input', function() {
          if (this.value.length >= this.maxLength) {
            var nextInput = inputList[index + 1];
            if (nextInput) {
              nextInput.focus();
            }
          }
        });
  
        inputList[index].addEventListener('keydown', function(e) {
          if (e.key === 'Backspace' && this.value === '') {
            var prevInput = inputList[index - 1];
            if (prevInput) {
              prevInput.focus();
            }
          }
        });
      })(i);
    }
  }
  
  bindInputEvents(input);
document.getElementById('submit').addEventListener('click',
function(){
    for (let i = 0; i < 5; i++) {
        if (input[i].value == 답[i]){
            input[i].style.background = 'green';
            correctAnswer++
        } else if(답.includes(input[i].value)) {
            input[i].style.background = 'yellow';
        } else {
            input[i].style.background = 'lightgrey';
        }

        input[i].classList.remove('input');
    }
    
    if (correctAnswer === 5){
        alert('You Win')
        checkAnswer = 100
    }
    if (checkAnswer > 5){
        if (correctAnswer < 5){
            alert('You Lose')
            alert('it was ['+ 답 +']')
            checkAnswer = 100
        }
    }
    if (checkAnswer < 5) {
    var tempalet = '<div> <input class="input" maxlength="1"> <input class="input" maxlength="1"> <input class="input" maxlength="1"> <input class="input" maxlength="1"> <input class="input" maxlength="1"> </div>';
    document.querySelector('body').insertAdjacentHTML
    ('beforeend', tempalet);

  var newInputs = document.querySelectorAll('.input');
  bindInputEvents(newInputs);

  input = newInputs;
    }
    checkAnswer++
    correctAnswer = 0
})
  document.getElementById('reset').addEventListener('click', function() {
    location.reload();
  });
});