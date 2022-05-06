function gdr(){
    var gdr = prompt('plz enter first gender(M OR F)');
    var day = new Date().getHours();
    if(gdr == "M" && 6< day <12 ){
        alert('Hi Sir! Good Morning!');
    }
    else if(gdr == "M" && 12< day <18 ){
        alert('Hi Sir! Good Afternoon!');
    }
    else if(gdr == "M" && day>18 ){
        alert('Hi Sir! Good Night!');
    }
    else if(gdr == "M" && day<6 ){
        alert('Hi Miss! Good Night!');
    }
    else{
        if(gdr == "F" && 6< day <12 ){
        alert('Hi Miss! Good Morning!');
    }
    else if(gdr == "F" && 12< day <18 ){
        alert('Hi Miss! Good Afternoon!');
    }
    else if(gdr == "F" && day>18 ){
        alert('Hi Miss! Good Night!');
    }
    else if(gdr == "F" && day<6 ){
        alert('Hi Miss! Good Night!');
    }
    else{
        alert('Welcome!');
    }}
    
}
gdr()

var day = new Date().getDay();
switch(day){
    case 1:
        alert('Happy Monday!');
        break;
    case 2:
        alert('Happy Tuesday');
        break;
    case 3:
        alert('Happy Wednesday!');
        break;
    case 4:
        alert('Happy Thursday!');
        break;
    case 5:
        alert('Happy Friday!');
        break;
}

function game() {
    function getRandom(min, max){ 
        return Math.floor(Math.random() * (max + min + 1)) + min;
    }
    var fir = 1, fin = 10;
    var countStart = 1;
    var a = getRandom(fir, fin);
    while (true) {
    var num = prompt('Guess a integer from' + fir + ' to ' + fin);
    if (num > a) {
        alert('Sorry! Your guess should be less than' + num);
    } 
    else if (num < a) {
        alert('Sorry! Your guess should be greater than' + num);
    } 
    else {
        alert('The integer is' + num + 'You are correct!');
    break;
    } 
    }
}
game()


function psww(){
   var psw=prompt('enter your password, it should have less than 10 characters, no ? ! $ # and your first character should not be *')
   if(psw.length<=10 && psw.indexOf('!') == -1 && psw.length>0 && psw.indexOf('*') != 0 && psw.indexOf('?') == -1 && psw.indexOf('#') == -1 && psw.indexOf('$') == -1){
    alert('That is a good password');
   }
     else{
         alert('please enter the correct password');
     }
}




