export const loadSection = async (id, url) => {
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Echec de telechargement du header')
        }
        const data = await response.text();
        document.querySelector(id).innerHTML = data;
        
    }catch(error){
        window.location.assign("./erreur.html")
        console.log('error : ',error)

    }
};

document.addEventListener("DOMContentLoaded", () => {loadSection('#nosProduits', './sections/nosProduits.html')});
