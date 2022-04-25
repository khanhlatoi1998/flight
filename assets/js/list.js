// SHOW INFO-DETAIL
const flight1 = document.querySelector(".flight--1"); 
const flight2 = document.querySelector(".flight--2"); 
const flight3 = document.querySelector(".flight--3"); 
const flight4 = document.querySelector(".flight--4"); 

const btnDetail1 = document.querySelector(".btn__detail--1"); 
const btnDetail2 = document.querySelector(".btn__detail--2"); 
const btnDetail3 = document.querySelector(".btn__detail--3"); 
const btnDetail4 = document.querySelector(".btn__detail--4"); 

const btnInfo1 = document.querySelector(".btn__info--1");
const btnInfo2 = document.querySelector(".btn__info--2");
const btnInfo3 = document.querySelector(".btn__info--3");
const btnInfo4 = document.querySelector(".btn__info--4");

const detail1 = document.querySelector(".flight__collapse-detail--1");
const detail2 = document.querySelector(".flight__collapse-detail--2");
const detail3 = document.querySelector(".flight__collapse-detail--3");
const detail4 = document.querySelector(".flight__collapse-detail--4");

const info1 = document.querySelector(".flight__collapse-info--1");
const info2 = document.querySelector(".flight__collapse-info--2");
const info3 = document.querySelector(".flight__collapse-info--3");
const info4 = document.querySelector(".flight__collapse-info--4");

btnDetail1.onclick = () => {
    detail1.hidden = !detail1.hidden;
    info1.hidden = true;
};

btnInfo1.onclick = () => {
    info1.hidden = !info1.hidden;
    detail1.hidden = true;
}

btnDetail2.onclick = () => {
    detail2.hidden = !detail2.hidden;
    info2.hidden = true;
};

btnInfo2.onclick = () => {
    info2.hidden = !info2.hidden;
    detail2.hidden = true;
}

btnDetail3.onclick = () => {
    detail3.hidden = !detail3.hidden;
    info3.hidden = true;
};

btnInfo3.onclick = () => {
    info3.hidden = !info3.hidden;
    detail3.hidden = true;
}

btnDetail4.onclick = () => {
    detail4.hidden = !detail4.hidden;
    info4.hidden = true;
};

btnInfo4.onclick = () => {
    info4.hidden = !info4.hidden;
    detail4.hidden = true;
}