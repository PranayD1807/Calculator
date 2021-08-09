let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

// run loop for all buttons
let valueonscreen = '';
for (item of buttons) {
    // adding event listener to item(each button)
    // (e) is function name
    item.addEventListener('click', (e)=>{
        // saving received text in buttontext
        buttonText = e.target.innerText;
        console.log('button text:', buttonText);
        if (buttonText == '×'){
            buttonText = '*';
            valueonscreen += buttonText;
            screen.value = valueonscreen;
            // screen.value is function
            // valueonscreen is variable
        }
        else if (buttonText == '÷'){
            buttonText = '/';
            valueonscreen += buttonText;
            screen.value = valueonscreen;
            // screen.value is function
            // valueonscreen is variable
        }
            // slice() method of the string, passing 2 parameters. THe first is 0, the starting point. 
            // The second is the number of items to remove.
            // Passing a negative number will remove starting from the end.
        else if (buttonText == '«') {
            editedvalue = valueonscreen.slice(0, -1);
            valueonscreen = editedvalue;
            screen.value = valueonscreen;
            // console.log(valueonscreen)
        }
        else if (buttonText == 'C') {
            valueonscreen = "";
            screen.value = valueonscreen;
        }
        else if (buttonText == '=') {
            // eval function to evaluate
            screen.value = eval(valueonscreen);
            valueonscreen = screen.value; 
        }
        else {
            valueonscreen += buttonText;
            screen.value = valueonscreen;
        }
    
    })
}