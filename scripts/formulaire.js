(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "jOnwt3bI3QtZ0LEte",
    });
})();


export default function submit_sell(){

    const formSubmit = document.getElementById("paiement");
    const radio1 = document.getElementById("radioDefault1")
    const radio2 = document.getElementById("radioDefault2")
    const radio3 = document.getElementById("radioDefault3")

    
    
    formSubmit.addEventListener('submit', (e)=>{
        e.preventDefault();
        let prix = 0;
        let quantite = 0;
        if(radio1.checked){
            prix = radio1.value;
            quantite = 1;
        }
        else if(radio2.checked){
            prix = radio2.value;
            quantite = 2;
        }else{
            prix = radio3.value;
            quantite = 3;
        }
        const name = e.currentTarget.nom.value;
        const phone = e.currentTarget.phone.value;
        const adresse = e.currentTarget.adresse.value;
        const ville = e.currentTarget.ville.value;
        const data = {prix:prix, quantite:quantite, name:name, phone:phone, adresse:adresse, ville:ville };

        emailjs.send('service_pjvo43a', 'template_thc80lx', data)
        .then((succes) =>{
            console.log(succes)
            history.replaceState(null, '', "./merci.html");
            window.location.assign("./merci.html");
        }, (error) =>{
            console.log(error)
            history.replaceState(null, '', "./erreur.html");
            window.location.assign("./erreur.html");
        })
    })
}
