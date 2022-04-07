
// Create a Scope to limit my variables

{
    // Set the navbark to dark by replacing the word light with dark in className
    let body = document.body;
    let children = body.children;
    let navBar = children[0];
    navBar.className = navBar.className.replaceAll('light', 'dark');

    // Set the buttons to be bootstrap style with colors
    let myButtonColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info']

    let myButtons = document.querySelectorAll('.col-2 > button')
    
    // Loop through buttons and apply class name
    for (let i = 0; i < myButtons.length; i++){
        myButtons[i].className = `btn btn-${myButtonColors[i]} w-100`
    }

    // Add a header under the buttons in the container
    // First create the header
    let newHeader = document.createElement('h4');
    newHeader.id = 'myHeader';
    newHeader.className = 'text-center mt-3';
    newHeader.innerHTML = 'Created by Brian with the help of JavaScript';

    // Get the row of buttons
    let buttonRow = document.getElementsByClassName('row')[0];
    // Add the new header after the button row
    buttonRow.after(newHeader);

}


// Create a new scope
{
    // Get the header
    let myHeader = document.getElementById('myHeader');
    console.log(myHeader);

    // Create a function to execute when the event is triggered
    function handleHeaderEvent(e){
        let elementToChange = e.target;
        if (elementToChange.style.color === 'black'){
            elementToChange.style.color = 'purple';
        } else {
            elementToChange.style.color = 'black';
        }
    }

    // Add event listener
    myHeader.addEventListener('click', handleHeaderEvent);

}