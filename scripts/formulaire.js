
const formSubmit = document.getElementById("paiement");


formSubmit.addEventListener('submit', (e)=>{
    e.preventDefault();
    window.location.assign("./merci.html");
})