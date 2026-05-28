import product_main, {loadSection} from "./product_description.js";
import { SAVON_CURCUMA } from "./liste_produits.js";


product_main(SAVON_CURCUMA)


document.addEventListener("DOMContentLoaded", () => {loadSection('#naturel100', './sections/100naturel.html')});
document.addEventListener("DOMContentLoaded", () => {loadSection('#elimineTache', './sections/elimineTache.html')});
document.addEventListener("DOMContentLoaded", () => {loadSection('#eclaircitUnifie', './sections/eclaircitUnifie.html')});
document.addEventListener("DOMContentLoaded", () => {loadSection('#apaiseIrritations', './sections/apaiseIrritations.html')});
document.addEventListener("DOMContentLoaded", () => {loadSection('#releveEclat', './sections/releveEclat.html')});   
document.addEventListener("DOMContentLoaded", () => {loadSection('#b2bcontainer', './sections/b2bcontainer.html')});   
document.addEventListener("DOMContentLoaded", () => {loadSection('#nosProduits', './sections/nosProduits.html')});
document.addEventListener("DOMContentLoaded", () => {loadSection('#engagement', './sections/engagement.html')});