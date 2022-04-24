
//Crane's
function ti(){
    document.getElementById('title').style.color="gold";
}
function surprise(){
    var ans = prompt('Do you remember one of the 3 main types of guitar?')
    if (ans == 'classical guitar'||ans =='electric guitar'||ans =='Hawaiian guitar'||ans =='steel-string acoustic guitar'){
        alert('Congratulations, your answer is right!');
    }
    else {
        alert('Oops, not this one, go back and check it.');
    }
}
function read1(){
    document.getElementById('ctxt1').style.color = 'wheat'
}
function read2(){
    document.getElementById('ctxt2').style.color = 'wheat'
}
function read3(){
    document.getElementById('ctxt3').style.color = 'wheat'
}
function read4(){
    document.getElementById('ctxt4').style.color = 'wheat'
}
function read5(){
    document.getElementById('ctxt5').style.color = 'wheat'
}
function read6(){
    document.getElementById('ctxt6').style.color = 'wheat'
}
function read7(){
    document.getElementById('ctxt7').style.color = 'wheat'
}
function read8(){
    document.getElementById('ctxt8').style.color = 'wheat'
}
function prt(){
    var names = ['Headstock','Nut','Machine head','Frets','Truss rod','Inlays','Neck','Heel(acoustic)Neckjoint(electric)','Body','Pickups','Electronics','Bridge','Pickguard','back','Soundboard','Body sides','Sound hole','Strings','Saddle','Fretboard/Fingerboard'];
    var request = parseInt(prompt('Please enter the number in picture to know the name of it'));
    alert('The component is called '+ names[request-1]);
}

function transport() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function cchange(){
    document.getElementById('cppic1').scr = "homepageStill.jpg";
}

function ctable(){
    document.getElementById('tb1'). style.display="block";
    document.getElementById('cbt'). style.display='none';
}

function purch(){
    var dep10 = 626;
    var dep20 = 468;
    var gx7 = 111200;
    var money = parseFloat(prompt('How much budget do you have?'));
    
    if (money < dep20) {
        alert('Sorry,we recommend you to get more budget');
    }
    else if (money >= dep20 && money < dep10) {
        alert('We recommend Donner Dep-20 to you');
    }
    else if (money >= dep10 && money< gx7){
        alert('We recommend Donner Dep-10 to you');
    }
    else{
        alert('GX7 will be a nice choice for Gentlemen/ladies like you, trust me. God, you are rich!')
    }
}
//Mabel's

function shop1(){
    document.getElementById('ss1').innerHTML="$875";
}

function shop2(){
    document.getElementById('ss2').innerHTML="$1999.9";
}

function shop3(){
    document.getElementById('ss3').innerHTML="$25";
}

function shop4(){
    document.getElementById('ss4').innerHTML="$145";
}

function shopp(){
    var a = parseFloat(prompt('please enter price 1'));
    var b = parseFloat(prompt('please enter price 2'));
    alert("Your Price is $" + (a+b)*0.8);
}

function hang(){
    var a = parseFloat(prompt('Please enter price whole number! your want to pay'));
    if(a < 1900 || a == 1900){
    alert("Sorry! That is too low😭");
    }
    else{
        alert("You can pay for $"+ a + "🥳");
    }
}