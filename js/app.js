const item1=document.querySelector(".slider__item__1");
const item2=document.querySelector(".slider__item__2");
const item3=document.querySelector(".slider__item__3");
const slider=document.querySelector(".slider");

console.log(`hs`)
console.log(item3)
console.log(slider)
slider.addEventListener("scroll",()=>{
    // item3.classList.add("show-up");
    item3.classList.remove("faded");
});



// **NOTE:Still working on building a item slider**

// const nextBtn=document.querySelector(".card__button-next");
// nextBtn.addEventListener(`click`,()=>{

//     const card_side_1=document.querySelector(".card__front");
//     const  card_side_2=document.querySelector(".card__back");
//       console.log(card_side_2);

//     card_side_1.classList.add("card__back");


//     if(card_side_1.classList.contains("card__front")){
//         card_side_1.classList.add("card__back");
//         card_side_1.classList.remove("card__front");
    
//         }
//         else{
//             card_side_1.classList.add("card__front");
//             card_side_1.classList.remove("card__back");
//         }
    
//     if(card_side_2.classList.contains("card__front")){
//     card_side_2.classList.add("card__back");
//     card_side_2.classList.remove("card__front");

//     }
//     else{
//         card_side_2.classList.add("card__front");
//         card_side_2.classList.remove("card__back");
//     }
   



// });