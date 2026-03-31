const callToAction = document.querySelector("#call-to-action");
const linkToForm = document.querySelector(".link-to-call");


const observer1 = new IntersectionObserver(
    ([entry]) => {
        if(linkToForm.classList.value.includes("d-none")){
            linkToForm.classList.remove("d-none");
            linkToForm.classList.add("fix-bottom");
        }else{
            linkToForm.classList.remove("fix-bottom");
            linkToForm.classList.add("d-none");
        }
    },
    {
        threshold: [0.9]
    }
);


observer1.observe(callToAction);
