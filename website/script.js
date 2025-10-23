const navDialog = document.getElementById('nav-dialog');

function handleMenu() {
  navDialog.classList.toggle('hidden');
}

const statements = ["Himanshu. ", "a Programmer. ", "a Cloud Enthu. ", "a Designer. "];
let index = 0;
let isDeleting = false;
let charIndex = 0;

function typeEffect() {
    const dynamicText = document.getElementById("dynamic-text");
    const currentStatement = statements[index];
    
    if (isDeleting) {
        dynamicText.textContent = currentStatement.substring(0, charIndex--);
    } else {
        dynamicText.textContent = currentStatement.substring(0, charIndex++);
    }
    
    let delay = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentStatement.length) {
        delay = 1000; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % statements.length;
    }
    
    setTimeout(typeEffect, delay);
}

typeEffect();

const intialTranslateLTR=-48*4;
const intialTranslateRTL=36*4;

function setupObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        console.log(element, isIntersecting);
        if (isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
    };

    const observerNew = new IntersectionObserver(intersectionCallback);
    observerNew.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        let totalTranslate=0;
        if(isLTR){
            totalTranslate=translateX+intialTranslateLTR;
        } else{
            totalTranslate=-(translateX+intialTranslateRTL);
        }
        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
setupObserver(line1, true, 0.15);
setupObserver(line2, false, 0.15);
setupObserver(line3, false, 0.15);

function showDiv() {
    const realdiv = document.getElementById("real-skills");
    const demodiv = document.getElementById("demo-skills");

    demodiv.classList.remove("flex");
    demodiv.classList.add("hidden");
    realdiv.classList.remove("hidden");
    realdiv.classList.add("flex");
}

function hideDiv() {
    const realdiv = document.getElementById("real-skills");
    const demodiv = document.getElementById("demo-skills");

    demodiv.classList.remove("hidden");
    demodiv.classList.add("flex");
    realdiv.classList.remove("flex");
    realdiv.classList.add("hidden");
}

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://dtt4q46gup6ql2qffjiv5d2qza0ernnr.lambda-url.ca-central-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Total Website Views: ${data}`;
}

updateCounter();
