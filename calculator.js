const display = document.querySelector('#calc-display');
let buttons = Array.from(document.getElementsByClassName('keys'));

buttons.map(button => {
 button.addEventListener('click', (e) =>{
     console.log(e.target);
  switch(e.target.innerText){
    case 'CE': 
        display.innerText = '';
        break;
    case '←':
        if(display.innerText){
         display.innerText = display.innerText.slice(0, -1);
        }
        break;
    case '=':
        try{
            display.innerText = eval(display.innerText);
        } catch{
            display.innerText = 'Error';
        }
        break;        
    default:
        display.innerText += e.target.innerText;
  }
 });
});

