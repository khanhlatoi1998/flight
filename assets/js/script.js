const btnMenuElemnet = document.querySelector('.button__menu');
const navCollapseElemnt = document.querySelector('.navbar__collapse');
const inputDateElemnt = document.querySelectorAll('.form__search-date');
let checkBtnMenu = false; 

btnMenuElemnet.addEventListener('click', () => {   
    if (!checkBtnMenu) {
        navCollapseElemnt.style.display = "block"; 
        checkBtnMenu = !checkBtnMenu;

    } else {
        navCollapseElemnt.style.display = "none";
        checkBtnMenu = !checkBtnMenu;
    }
});

const disablePastDate = () => {
    let dtToday = new Date();
    let day = dtToday.getDate();
    let month = dtToday.getMonth() + 1;
    let year = dtToday.getUTCFullYear();
    if (month < 10)
        month = "0" + month.toString();
    if (day < 10)
        day = "0" + day.toString();
    let minDay = year + '-' + month + '-' + day;
    for (let i in Array.from(inputDateElemnt)) {
        Array.from(inputDateElemnt)[i].setAttribute("min", minDay);
    }
};

disablePastDate();

// SELECT VALUE PERSON

const personElement = document.querySelector('.search__room');
const collapseInput = document.querySelector('.room__collapse');
const adultElement = document.querySelector('.adult');
const childrenElement = document.querySelector('.children');
const inputAdult = document.querySelector('#input-adult');
const inputChildren = document.querySelector('#input-children');

let defaultValAdult = 2;
let defaultValChildren = 1; 
let showInput = false;

adultElement.textContent = defaultValChildren;
childrenElement.textContent = defaultValAdult;

personElement.onclick = (e) => {
    if  (!showInput) {
        collapseInput.style.display = "block" ;
        showInput = true;
    } else {
        collapseInput.style.display = "none" ;
        showInput = false;
    }
}

collapseInput.onclick = (e) => {
    e.stopPropagation();
}

inputAdult.oninput = (e) => {
    adultElement.textContent = e.target.value ;
}

inputChildren.oninput = (e) => {
    childrenElement.textContent = e.target.value;
}