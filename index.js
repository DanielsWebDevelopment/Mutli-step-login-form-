var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var form3 = document.getElementById('form3');

var back1 = document.getElementById('back1');
var next1 = document.getElementById('next1');
var back2 = document.getElementById('back2');
var next2 = document.getElementById('next2');

next1.onclick = function(){
  form1.style.left = '-660px';
  form2.style.left = '-86%';
}

back2.onclick = function(){
  form1.style.left = '13%';
  form2.style.left = '450px';
}

back1.onclick = function(){
  form1.style.left = '650px';
  form3.style.left = '112%';
}

next2.onclick = function(){
  form1.style.left = '12%';
  form3.style.left = '-450px';
}