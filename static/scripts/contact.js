var submitButton = document.getElementById('contact-submit');

submitButton.onclick = () => messageSent();

function messageSent(){
    submitButton.value = 'Message Sent!';
    console.log('reee');
}