const imageCarousel = ["./medias/images/femme-savon-teint-eclatant.jpeg", "./medias/images/mon-savon-100-naturelle.jpeg", "./medias/images/mon-savon-dimension.jpeg", "./medias/images/mon-savon-eclat-peau.jpeg","./medias/images/mon-savon-image.jpeg","./medias/images/mon-savon-linge-eclatant.jpeg", "./medias/images/mon-savon-linge.jpeg"]




const carouselInner = document.querySelector(".catalogue-description .img-group .carousel-inner");
const carouselIndicators = document.querySelector(".catalogue-description .img-group .carousel-indicators");
const imgCardGroup = document.querySelector(".catalogue-description .img-card-group");


imageCarousel.forEach((url, key) =>{
    const divCarousel = document.createElement('div');
    const imgCarousel = document.createElement('img');
    const boutonIndicator = document.createElement('button');
    const imgCardDiv = document.createElement('div');

    imgCardDiv.style.backgroundImage = `url(${url})`
    imgCardDiv.style.backgroundSize = "cover";
    imgCardDiv.style.backgroundPosition = "center";
    imgCardDiv.style.backgroundRepeat = "no-repeat";

    divCarousel.classList.add("carousel-item")
    if (key===0){
        divCarousel.classList.add("active")
    }
    imgCarousel.src = url;
    imgCarousel.classList.add("d-block", "w-100")

    boutonIndicator.setAttribute("data-bs-target", "#carouselIndicators");
    boutonIndicator.setAttribute("data-bs-slide-to", `${key}`);
    boutonIndicator.setAttribute("aria-label", `Slide ${key+1}`);
    
    divCarousel.appendChild(imgCarousel);
    carouselInner.appendChild(divCarousel);
    imgCardGroup.appendChild(imgCardDiv);
    carouselIndicators.appendChild(boutonIndicator)
    
    
});

const elements = imgCardGroup.querySelectorAll("div");
const carouselItems = carouselInner.querySelectorAll(".carousel-item")
const carouselElement = document.querySelector(".catalogue-description .img-group .carousel");

const carousel = new bootstrap.Carousel(carouselElement);

elements.forEach((element, key) =>{
    element.addEventListener("click", (e)=>{
        elements.forEach((elmnt) =>{
            elmnt.style.border = "none";
        })

        carousel.to(key)
        console.log('pas d\'erreur')
        e.target.style.border = "solid 1px black";

    })
})