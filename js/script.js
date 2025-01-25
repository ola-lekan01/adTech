
const defaultSet = document.querySelector("#default-set");
const adventureSet = document.querySelector("#adventure-set");
const relaxationSet = document.querySelector("#relaxation-set");
const cultureSet = document.querySelector("#culture-set");

adventureSet.style.display = "none";
relaxationSet.style.display = "none";
cultureSet.style.display = "none";

const adventureButton = document.querySelector(".adventure-button");
const relaxationButton = document.querySelector(".relaxation-button");
const cultureButton = document.querySelector(".culture-button");
const exploreButtons = document.querySelectorAll(".explore-button");
console.log(exploreButtons)

const defaultPage = document.querySelector(".default-page");
const adventurePage = document.querySelector(".adventure-page");
const culturePage = document.querySelector(".culture-page");
const relaxationPage = document.querySelector(".relaxation-page");

const leftArrows = document.querySelectorAll(".left-arrow");
const rightArrows = document.querySelectorAll(".right-arrow");
const carousel = document.querySelectorAll(".carousel");

adventurePage.style.display = "none"
culturePage.style.display = "none"
relaxationPage.style.display = "none"


rightArrows.forEach(arrow => arrow.addEventListener("click", () => {
    carousel.forEach(c => c.scrollBy({
        left: 100,
        behavior: 'smooth'
    }));
}));


leftArrows.forEach(arrow => arrow.addEventListener("click", () => {
    carousel.forEach(c => c.scrollBy({
        left: -100,
        behavior: 'smooth'
    }));
}));


exploreButtons.forEach(btn => btn.addEventListener("click", (e) => {
    window.open("https://www.emirates.com/us/english/discover-dubai/", "_blank")
}))


adventureButton.addEventListener("click", (e) => {
    defaultPage.style.display = "none";
    adventurePage.style.display = "block";
})

relaxationButton.addEventListener("click", (e) => {
    defaultPage.style.display = "none";
    relaxationPage.style.display = "block";
})

cultureButton.addEventListener("click", (e) => {
    defaultPage.style.display = "none";
    culturePage.style.display = "block";
})



adventureButton.addEventListener("mouseover", (e) => {
    adventureSet.style.display = "flex";
    defaultSet.style.display = "none"
})

adventureButton.addEventListener("mouseout", (e) => {
    adventureSet.style.display = "none";
    defaultSet.style.display = "flex";
})

relaxationButton.addEventListener("mouseover", (e) => {
    relaxationSet.style.display = "flex";
    defaultSet.style.display = "none"
})

relaxationButton.addEventListener("mouseout", (e) => {
    relaxationSet.style.display = "none";
    defaultSet.style.display = "flex";
})

cultureButton.addEventListener("mouseover", (e) => {
    cultureSet.style.display = "flex";
    defaultSet.style.display = "none"
})

cultureButton.addEventListener("mouseout", (e) => {
    cultureSet.style.display = "none";
    defaultSet.style.display = "flex";
})


adventureButton.addEventListener("click", () => {

    fetch("https://pullman.onrender.com/pullman/adventure/counter", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

})

relaxationButton.addEventListener("click", () => {

    fetch("https://pullman.onrender.com/pullman/relaxation/counter" ,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

})

cultureButton.addEventListener("click", () => {

    fetch("https://pullman.onrender.com/pullman/culture/counter" ,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
})

function cycleButtons() {
    setTimeout(() => {
        adventureButton.classList.add("scale-up-center-button");
        setTimeout(() => {
            adventureButton.classList.remove("scale-up-center-button");
        }, 5000); // Adjust the timing (in ms) for how long the class remains scale-up-center-button
    }, 0); // Start immediately

    setTimeout(() => {
        relaxationButton.classList.add("scale-up-center-button");
        setTimeout(() => {
            relaxationButton.classList.remove("scale-up-center-button");
        }, 5000); // Adjust the timing for removal
    }, 500); // Delay after the first button

    setTimeout(() => {
        cultureButton.classList.add("scale-up-center-button");
        setTimeout(() => {
            cultureButton.classList.remove("scale-up-center-button");
        }, 5000); // Adjust the timing for removal
    }, 1000); // Delay after the second button
}

setInterval(cycleButtons, 15000);

function cycleButtonExplore() {
    setTimeout(() => {
        exploreButton.classList.add("scale-up-center-explore");
        setTimeout(() => {
            exploreButton.classList.remove("scale-up-center-explore");
        }, 5000);
    }, 0);

}

setInterval(cycleButtonExplore, 15000);


