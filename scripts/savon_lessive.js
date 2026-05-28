import product_main, {loadSection} from "./product_description.js";
import { SAVON_LESSIVE } from "./liste_produits.js";


product_main(SAVON_LESSIVE)


// document.addEventListener("DOMContentLoaded", () => {loadSection('#naturel100', './sections/100naturel.html')});   
document.addEventListener("DOMContentLoaded", () => {loadSection('#elimineTache', './sections/less_elimineTache.html')});   
document.addEventListener("DOMContentLoaded", () => {loadSection('#douxMains', './sections/less_douxMains.html')});   
document.addEventListener("DOMContentLoaded", () => {loadSection('#nettoyageProfond', './sections/less_nettoyageProfond.html')});   
document.addEventListener("DOMContentLoaded", () => {loadSection('#b2bcontainer', './sections/b2bcontainer.html')});   
document.addEventListener("DOMContentLoaded", () => {loadSection('#nosProduits', './sections/nosProduits.html')});
document.addEventListener("DOMContentLoaded", () => {loadSection('#engagement', './sections/engagement.html')});
