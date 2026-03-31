const load = async (id, url) => {
    try{
        response = await fetch(url);
        if(!response.ok){
            throw new Error('Echec de telechargement du header')
        }
        data = await response.text();
        document.querySelector(id).innerHTML = data;
        
    }catch(error){
        window.location.assign("./erreur.html")
        console.log('error : ',error)

    }
};


document.addEventListener("DOMContentLoaded", () => {load('#header', './composants/header.html')});
document.addEventListener("DOMContentLoaded", () => {load('#footer', './composants/footer.html')});
// document.addEventListener("DOMContentLoaded", () => {load('#header', 'http://127.0.0.1:5500/vitrine/composants/header.html')});
// document.addEventListener("DOMContentLoaded", () => {load('#footer', 'http://127.0.0.1:5500/vitrine/composants/footer.html')});
