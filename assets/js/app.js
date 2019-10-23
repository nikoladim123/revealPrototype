var box = document.getElementsByClassName('box');

function boxLoadFun() {
  box[0].style.width = '33.333%';
  setTimeout(function () {
    box[1].style.width = '33.333%';
  }, 1500);
}


window.onload = ()=>{
  setTimeout(function () {
    boxLoadFun();
  }, 500);
}
