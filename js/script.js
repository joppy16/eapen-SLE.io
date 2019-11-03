function textAppear(){
  var text = document.querySelector('#para1');

  var textPosition = text.getBoundingClientRect().top;

  var screenHeight = window.innerHeight;

  if(textPosition < (screenHeight-(screenHeight/4))){
    text.classList.add('appear');
  }
}
function textAppear2(){
  var text = document.querySelector('#para2');

  var textPosition = text.getBoundingClientRect().top;

  var screenHeight = window.innerHeight;

  if(textPosition < (screenHeight-(screenHeight/4))){
    text.classList.add('appear2');
  }
}

function navbarAppear(){
  
}

window.addEventListener('scroll', textAppear);
window.addEventListener('scroll', textAppear2);
