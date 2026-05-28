
const loadSection = async (id, url) => {
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


document.addEventListener("DOMContentLoaded", () => {loadSection('#nosProduits', './sections/nosProduits.html')});
document.addEventListener("DOMContentLoaded", () => {loadSection('#naturel100', './sections/100naturel.html')});
document.addEventListener("DOMContentLoaded", () => {loadSection('#b2bcontainer', './sections/b2bcontainer.html')});   
document.addEventListener("DOMContentLoaded", () => {loadSection('#engagement', './sections/engagement.html')});