console.log("hello mamun you do it");

const chack = document.getElementById('travel');
chack.style.textAlign = 'center';
chack.style.color = 'red';


function makeRead() {
    document.body.style.backgroundColor = 'red';
}

const blueButton = document.getElementById('make-blue');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}