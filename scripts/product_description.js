import description from "./carousel.js";
import insert_product_description from "./description.js";
import observer from "./observeform.js";
import submit_sell from "./formulaire.js";


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

const productDescription = document.querySelector('#product_description');


const product_main = async (produit) => {

    if(productDescription){
        await loadSection('#product_description', './composants/product_description.html');
    }else{
        window.location.assign("./erreur.html")
    }
// ************************************** contenue de la description du produit Debut *************************************
    
    description(produit);
    insert_product_description(produit)
    
// ************************************** contenue de la description du produit Fin *************************************




// ****************************** OBSERVER ****************************
    observer();
// ****************************** OBSERVER FIN ****************************

// **************************** Soumission du formulaire ***************************
    submit_sell()
// **************************** Soumission du formulaire ***************************

}

export default product_main;
