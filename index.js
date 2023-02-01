// Your code goes here

function changeParagraph() {
    const theParagraph = document.getElementById('text')
    theParagraph.textContent = "This is really cool!"
}


document.addEventListener('DOMContentLoaded', changeParagraph);