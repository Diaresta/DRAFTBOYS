// ---------------------- testing ----------------------
var submitButton = document.getElementById('contact-submit');
var formLabels = document.getElementsByTagName('label');
var formInputs = document.getElementsByTagName('input');
var formTextArea = document.getElementsByTagName('textarea');
// ---------------------- testing ----------------------

submitButton.onclick = () => messageSent();

function messageSent(){
    submitButton.value = 'Message Sent!';
    console.log('reee');
}