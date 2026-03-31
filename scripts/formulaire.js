
const CallToAction = document.getElementById("paiement");


CallToAction.addEventListener('submit', (e)=>{
    e.preventDefault();
    window.location.assign("./merci.html");
})