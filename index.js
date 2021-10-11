const slides = document.getElementsByClassName('mySlides')
const videoCards = document.querySelectorAll(".video-card");
const img1 = document.querySelector("#disney")

const btn = document.querySelector("#subscribe");
const cardContainers = document.querySelectorAll('.card-container');
const preBtns = document.querySelectorAll('.pre-btn');
const nxtBtns = document.querySelectorAll('.nxt-btn');

var slideIndex = 0;


showSlides();

//Next/previous Control
/*
function plusSlides(n){
    showSlides(slideIndex+=n);
}
*/



function showSlides(){
    var i;
    
    /*if(slideIndex<1){
        slideIndex=slides.length;
    }
    */
    //This for loop is to hide the other slides fron displaying all at once
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
        
    }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex=1;
    }
    //This only displays the current slide
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides,2000);

}

/*

The forEach() method executes a provided function once for each array element.
using for each we are selecting video element and
adding two event listners to it

.children :-
The children property returns a collection of an element's child elements, as an HTMLCollection object.

The elements in the collection are sorted as they appear in the source code and can be accessed by index numbers. The index starts at 0.
As in our video card first element is image([0])
and second element is video([1])





*/

videoCards.forEach(item=> {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave',() => {
        let video = item.children[1];
        video.pause();
    })
})

cardContainers.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click',()=> {
        item.scrollLeft+=containerWidth-200;
    })

    preBtns[i].addEventListener('click',()=> {
        item.scrollLeft-=containerWidth+200;
    })
})




