function displayDate(){
	document.getElementById('date').innerHTML = Date();
}

function newImage(){
	document.getElementById('img1').src = "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=";
}

function changeContent(){
	document.getElementById('content').innerHTML = "Content Changed";
}

function alertKey() {  
  alert('key');  
}
document.onKeyDown = alertKey;

function changeText(){
var select = document.getElementById('change');
  select.style.backgroundColor = 'yellow';
  select.style.fontFamliy = 'arial';
  select.style.textAlign = 'center';
}

function rtrn(f){
	return (f-32) * 5/9
}

function temp(){
	var c = rtrn(20)
	document.getElementById('cal').innerHTML = rtrn(20);
}

function sum(){
	var a =  parseFloat(prompt('number 1: '));
  var b =  parseFloat(prompt('number 2: '));
  document.getElementById('sum1').innerHTML = a+b
}

function sum2(){
	var a = prompt('first name');
	var b = prompt('last name');
	var c = "Nice to meet you ";
	document.getElementById('sum2').innerHTML = c+a+b;
}



