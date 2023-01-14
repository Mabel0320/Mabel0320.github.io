const html = (id) => document.getElementById(id);

const css = (id) => document.getElementById(id).style;

// const NumFun = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)

function show(x){
  if (html("preview").classList=='pre' || html("preview").classList=='preview2') {
    html("preview").classList='preview';
  }else{html("preview").classList='preview2';
  }
}

// html("arr-li").addEventListener("click", function(e) {
//   const tg = e.target;
//   if (tg.classList=='arrow-down') {
//     tg.classList='arrow-flip';
//     show('preview');
//   }else{tg.classList='arrow-down';
//     show('preview');)
// }});

// html("contactPage").addEventListener('click', arrowFlip());

requiredField = (id) => {
  css(id).border="1px solid #ad1be0";
}

function arrowFlip(){
  if (html("arrow1").classList=='arrow-down') {
    html("arrow1").classList='arrow-flip';
    show('preview');
  }else{html("arrow1").classList='arrow-down';
    show('preview');
  }
}

html("submit_button").addEventListener('click', function(e){
  var fName_value = html("fName-input").value;
  var email_value = html("email-input").value;
  var ques_value = html("textarea-ques").value;
  if(!fName_value || !email_value || !ques_value){
    html("alert-null-str").innerHTML="Please complete all required fields."
  }else{
    html("fName-input").classList='form_input';
    html("email-input").classList='form_input';
    html("textarea-ques").classList='textarea-ques';
    setTimeout(submitSuccess, 1000)   
  }
  if(!fName_value){
    html("fName-input").classList='input-invalid-fName';
  }else{
    html("fName-input").classList='form_input';
  }
  if(!email_value){
    html("email-input").classList='input-invalid-mail';
  }else{
    html("email-input").classList='form_input';
  }
  if(!ques_value){
    html("textarea-ques").classList='input-invalid';
  }else{
    html("textarea-ques").classList='textarea-ques';
  }
});

function submitSuccess(){
  window.alert("We received your question!")
}

//game
var ob1 = html('ob1');
var speedVer = 0;
var speedHor = 0;
//direction = down
var flagVer = true;
//direction = right
var flagHor = true;
const randomDirect = () => {
  let delta = Math.random()
  if(delta < 0.5){
    return true
  }else{
    return false
  }
}
 
function movement(){
  var spaceHor = document.body.clientWidth;
  var spaceVer = document.body.scrollHeight;
  var X = ob1.getBoundingClientRect().right;
  var Y = ob1.getBoundingClientRect().bottom;
  var speedVer = Math.floor(Math.random() * 6)+10;
  var speedHor = Math.floor(Math.random() * 6)+10;
  //console.log(typeof mL)→string
  let mT_str = getComputedStyle(html('ob1'),null).marginTop;
  let mT_Len = mT_str.length;
  let mT = parseInt(mT_str.slice(0, mT_Len-2));
  let mL_str = getComputedStyle(html('ob1'),null).marginLeft
  let mL_Len = mL_str.length;
  let mL = parseInt(mL_str.slice(0, mL_Len-2));
  //vertical
  //touch side function
  if(speedVer > spaceVer-Y){
    for (let i = speedVer; i > spaceVer-Y; i--) {
      speedVer--
    }
  }else if(speedVer > Y-77){
    for (let i = speedVer; i > Y-77; i--) {
      speedVer--
  }
  }

  flagVer? ob1.style.marginTop=(mT+speedVer)+'px':ob1.style.marginTop=(mT-speedVer)+'px';
  
  //turn upward when touch bottom
  if((spaceVer-Y)-speedVer < 1){
    flagVer = false
    flagHor = randomDirect()
  }else if(Y-77 < 1){
    flagVer = true
    flagHor = randomDirect()
  }

  //horizontal
  //touch side function
  if(speedHor > spaceHor-X){
    for (let i = speedHor; i > spaceHor-X; i--) {
      speedHor--
    }
  }else if(speedHor > X-100){
    for (let i = speedHor; i > X-100; i--) {
      speedHor--
  }
  }

  flagHor? ob1.style.marginLeft=(mL+speedHor)+'px':ob1.style.marginLeft=(mL-speedHor)+'px';
  
  //turn left when touch right
  if((spaceHor-X)-speedHor < 1){
    flagHor = false
    flagVer = randomDirect()
  }else if(X-100 < 1){
    flagHor = true
    flagVer = randomDirect()
  }
  requestAnimationFrame(movement);
}
requestAnimationFrame(movement);
// setTimeout(movement(),10)


// function followMouse(e) {
//   var x = e.pageX;
//   var y = e.pageY;
//   html('net').style.left = x-55+'px';
//   html('net').style.top = y-730+'px';
// }

//可恶，全是bug，不过能运行一半我就不计较了。。。
var drag = false;
//为什么都用不了click啊。。。
html('net').addEventListener('mousedown', function(){
  drag = true;
  html('net').classList="net-drag";
})
//bug了。。。
html('net').addEventListener('mouseup', function(){
  drag = false;
  //回不去了
  html('net').classList="net";
})
//这地方为什么不设全局监听mousemove不连续啊。。。
document.addEventListener('mousemove', function(e) {
  if (drag) {
    var x = e.pageX;
    var y = e.pageY;
    html('net').style.left = x-55+'px';
    html('net').style.top = y-730+'px';
  }
})
//attach another image with exact area of the net would be better...
html('ob1').addEventListener('mouseover', function(){
  if (drag) {
    css('ob1').display="none";
    setTimeout(capture, 500);
  }
})

function capture(){
  alert('Congratulation');
}

/* Scroll to Top */
let mybutton = document.getElementById("top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
}
function toTop() {
  document.documentElement.scrollTop = 0; 
}



/* Review Gryffindor*/
const reviews = [
  {
    id: 1,
    name: "Neville Longbottom",
    house: "Gryffindor",
    img:
      "https://helios-i.mashable.com/imagery/articles/03OiILlUISZMahF1OS4aqeI/hero-image.fill.size_1200x1200.v1623370930.jpg",
    quote:
      "The thing is, it helps when people stand up to them, it gives everyone hope."
  },
  {
    id: 2,
    name: "Rubeus Hagrid",
    house: "Gryffindor",
    img:
      "https://i.insider.com/5637b27abd86ef195c8bb63d?width=1300&format=jpeg&auto=webp",
    quote:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Albus Dumbledore",
    house: "Gryffindor",
    img:
      "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgwODc3NzY0MTQyOTcy/dumbledore-quotes.jpg",
    quote:
      'It does not do to dwell on dreams, Harry, and forget to live.',
  },
  {
    id: 4,
    name: "Minerva McGonagall",
    house: "Gryffindor",
    img:
      "https://static.wikia.nocookie.net/harrypotter/images/9/96/Mcgonagall.png/revision/latest?cb=20151025165508&path-prefix=zh",
    quote:
      "Welcome to Hogwarts!",
  },
];

const img = document.getElementById("person-img");
const name = document.getElementById("name");
const house = document.getElementById("house");
const quote = document.getElementById("quote");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  house.textContent = item.house;
  quote.textContent = item.quote;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  name.textContent = item.name;
  house.textContent = item.house;
  quote.textContent = item.quote;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});





const Gry = 0;
const Sly = 0;
const Huff = 0;
const Rav = 0;

//Switch 
function sort(){
  var Gry = 0;
  var Rav = 0;
  var Huff = 0;
  var Sly = 0;

  var A = prompt('Which word best describes you? a)Brave b)Wit c)Empathetic d)Ambitious?')
  switch(A){
    case 'a':
      Gry+=3;
      break;
    case 'b':
      Rav+=3;
      break;
    case 'c':
      Huff+=3;
      break;
    case 'd':
      Sly+=3;
      break;
    }

  var B = prompt('At Hogwarts, you would want to study: a)Everything b)Jinxes c)Creatures d)Secrets about Castle')
  switch(B){
    case 'a':
      Gry+=3;
      Sly+=2;
      Huff+=1;
      Rav+=2;
      break;
    case 'b':
      Sly+=3;
      Gry+=1;
      break;
    case 'c':
      Huff+=3;
      Rav+=2;
      break;
    case 'd':
      Sly+=3;
      Gry+=2;
      break;
  }

  var C = prompt('What is most appealing to you: a)Home b)Parchment c)The sea d)Log Fire')
  switch(C){
    case 'a':
      Gry+=2;
      Huff+=2;
      break;
    case 'b':
      Gry+=2;
      Rav+=3;
      break;
    case 'c':
      Huff+=3;
      Rav+=2;
      break;
    case 'd':
      Sly+=3;
      Huff+=2;
      break;
  }

  var D = prompt('Which animal do you like the best: a)Lion b)Snake c)Badger d)Eagle ')
  switch(D){
    case 'a':
      Gry+=3;
      break;
    case 'b':
      Sly+=3;
      break;
    case 'c':
      Huff+=3;
      break;
    case 'd':
      Rav+=3;
      break;
  }

    if (Gry>Sly && Gry>Huff && Gry>Rav){
      alert('You are a Gryffindor!')
    }
    else if (Sly>Gry && Sly>Huff && Sly>Rav){
      alert('You are a Slytherin!')
    }
    else if (Huff>Gry && Huff>Sly && Huff>Rav){
      alert('You are a Hufflepuff!')
    }
    else if(Rav>Gry && Rav>Sly && Rav>Huff){
      alert('You are a Ravenclaw!')
    }  
    else{
      alert('Please take the quiz again')
    }
}

function muggle(){
  var a = prompt('Do you have magical ability? Answer YES or NO!');
  var b = prompt('Are you born in a magical family Answer YES or NO!');
  if(a === 'YES' || b === 'YES'){
    alert('Congratulation, you are admitted!');
  }
  else{
    alert('Sorry, you are not admitted because you are a muggle!');
  }
}
function Mguess(){
  document.getElementById('Mguess').innerHTML = 'The primary mode of transport to Hogwarts is the Hogwarts Express which students take at the start of each school year. The train arrives at Hogsmeade station near Hogwarts.';
  document.getElementById('Mpic').style.display = 'block';
}

function hpc(){
  var getstyle = document.getElementById('hpc').style;
  document.getElementById('hpcc').style.display = 'inline'; 
  document.getElementById('hpc').innerHTML = 'Harry Porter: "You need to go to the Hogsmeade Post Office for delivery a post."';
  getstyle.display = "block";
  getstyle.textAlign = 'center';
}

function chp(){
  var a = prompt('Which street should you go?');
  var b = prompt('Who is responsible for local delivery?')
  if(a === 'High Street' && b === 'scops owls'){
    alert('You have complete the case correctly!');
  }
  else{
    if(a === 'High Street'){
    alert('You fail to complete the case, scops owls are responsible for local deliveries!');
    }
    else if(b === 'scops owls'){
    alert('You fail to complete the case, the Hogsmeade Post Office is on High Street!');
    }
    else{
    alert('You fail to complete the case, scops owls are responsible for local deliveries and the Hogsmeade Post Office is on High Street!')
  }
 }
}

function hgc(){
  document.getElementById('phg').style.display = 'inline';
  document.getElementById('hgc').innerHTML = 'Hermione Granger: "I want to buy Quills! The shop can give me a 10% off discount if the money I need to pay exceeds $120 and 20% off if exceed $150. Can you help me to choose two quills and find out the money I need to pay?"';
  document.getElementById('thg').style.display = 'block';
  document.getElementById('shg').style.display = "block";
}

function hgg(){
  var a = parseInt(prompt('enter the price of your first choice'));
  var b = parseInt(prompt('enter the price of your second choice'));
  let c = a + b;
    if(c > 150){
    alert('You complete the case successfully, because Hermione will get a dsicount of 20% off! The final price is ' + (a + b) *0.8);
  }
  else if(c < 150 && c > 120){
    alert('You complete the case successfully, because Hermione will get a dsicount of 20% off! The final price is ' + (a + b) *0.9);
  }
  else{
    alert('You complete the case successfully, however Hermione will not get a dsicount.The final price is ' + (a + b));
  }

}

//slide show
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}//onlick the dot go to the slide

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("gpc");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }//make the previous not display
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


