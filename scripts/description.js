
export default function insert_product_description(produit){

    document.getElementById("title").textContent = produit.title;
    document.getElementById("prix_promotion").textContent = produit.promotion;
    document.getElementById("ancien_prix").textContent = produit.oldPrix;
    document.getElementById("subtitle").textContent = produit.subtitle;
    document.getElementById("offre1_qte").textContent = produit.offre1.qte;
    document.getElementById("offre1_percent").textContent = produit.offre1.percent;
    document.getElementById("offre1_prix").textContent = produit.offre1.prix;
    document.getElementById("offre2_qte").textContent = produit.offre2.qte;
    document.getElementById("offre2_percent").textContent = produit.offre2.percent;
    document.getElementById("offre2_prix").textContent = produit.offre2.prix;
    document.getElementById("offre3_qte").textContent = produit.offre3.qte;
    document.getElementById("offre3_percent").textContent = produit.offre3.percent;
    document.getElementById("offre3_prix").textContent = produit.offre3.prix;

    document.getElementById("radioDefault1").value = produit.offre1.prix;
    document.getElementById("radioDefault2").value = produit.offre2.prix;
    document.getElementById("radioDefault3").value = produit.offre3.prix;

    console.log(document.getElementById("radioDefault1").value);

}