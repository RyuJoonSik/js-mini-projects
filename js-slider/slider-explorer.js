'use strict';

var sliderButtons = document.querySelector('.image-slider__buttons');
var sliderImages = document.querySelectorAll('.image-slider__slide');
var slideCount = sliderImages.length;
var currentIndex;
var previousIndex;
var slideOrder;
var sliderTimer;
var slideIndex = 0;
var i;
function removeSlideScale(numberOfIndex){
  // sliderImages[numberOfIndex].classList.remove('image-slider__slide--first', 'image-slider__slide--second', 'image-slider__slide--third');
  sliderImages[numberOfIndex].classList.remove('image-slider__slide--first');
  sliderImages[numberOfIndex].classList.remove('image-slider__slide--second');
  sliderImages[numberOfIndex].classList.remove('image-slider__slide--third');
}

function removeAllSlideScale(){
  // sliderImages.forEach(function(slideImage){
  //   slideImage.classList.remove('image-slider__slide--first', 'image-slider__slide--second', 'image-slider__slide--third');
  // });
  for(let i=0; i<sliderImages.length; i++) {
    // sliderImages[i].classList.remove('image-slider__slide--first', 'image-slider__slide--second', 'image-slider__slide--third');
    sliderImages[i].classList.remove('image-slider__slide--first');
    sliderImages[i].classList.remove('image-slider__slide--second');
    sliderImages[i].classList.remove('image-slider__slide--third');
  }
}

function hideSlides(){
  // sliderImages.forEach(function(slideImage){
  //   slideImage.classList.add('image-slider__slide--third');
  // });
  for(let i=0; i<sliderImages.length; i++) {
    sliderImages[i].classList.add('image-slider__slide--third');
  }
}

function isOpened(slideImage){
  if(slideImage.classList.contains('image-slider__slide--first')){
    return true;
  }
}

function showSlide(numberOfIndex){
  removeSlideScale(numberOfIndex);
  sliderImages[numberOfIndex].classList.add('image-slider__slide--first');
}

function showThumbnail(numberOfIndex){
  removeSlideScale(numberOfIndex+1);
  sliderImages[numberOfIndex+1].classList.add('image-slider__slide--second');
}

function resetSlider(){
    sliderImages[0].classList.add('image-slider__slide--first');
    sliderImages[1].classList.add('image-slider__slide--second')
    for(let i=2; i<sliderImages.length; i++) {
      sliderImages[i].classList.add('image-slider__slide--third')
    }
    currentIndex = 0;
    previousIndex = 0;
}

function isLastButton(numberOfIndex){
  if(numberOfIndex === slideCount -1){
    return true;
  }
  else {
    return false;
  }
}

function moveSlide(numberOfIndex){
  if(numberOfIndex === previousIndex) {
    return;
  }
  currentIndex = numberOfIndex;
  removeAllSlideScale();
  hideSlides();

  if(!isLastButton(numberOfIndex)) {
    showSlide(numberOfIndex);
    showThumbnail(numberOfIndex);
  }

  else if (isLastButton(numberOfIndex)){
    showSlide(numberOfIndex);
  }

  previousIndex = currentIndex;
}

function autoSlide() {
  slideIndex++;
  slideIndex = slideIndex % sliderImages.length;
  moveSlide(slideIndex);
}

// sliderButtons.forEach(function(sliderButton, sliderButtonIndex){
//   sliderButton.addEventListener('click', function(){
//     clearInterval(sliderTimer);
//     moveSlide(sliderButtonIndex);
//   });
// });


// Array.prototype.forEach.call(sliderButtons,function(slideButton, buttonIndex){
//   slideButton.addEventListener('click', function(){
//     moveSlide(buttonIndex);
//   })
// });

// sliderButtons.forEach(function(slideButton, buttonIndex){
//   slideButton.addEventListener('click', function(){
//     moveSlide(buttonIndex);
//   })
// });
resetSlider();

// sliderTimer = setInterval(autoSlide, 2000);
sliderButtons.addEventListener('click', function(e){
  if(e.target.nodeName !== "BUTTON"){
    return
  }

  for(i=0; i<sliderButtons.children.length; i++){
    if(sliderButtons.children[i] === e.target) {
      // console.log(e.target);
      // console.log(sliderButtons.children[i])
      console.log(e.target);
      moveSlide(i);
      // break;
    }
  }
})
// function resetSlider(){
//     sliderImages[0].classList.add('image-slider__slide--first');
//     sliderImages[1].classList.add('image-slider__slide--second')
//     for(let i=2; i<sliderImages.length; i++) {
//       sliderImages[i].classList.add('image-slider__slide--third')
//     }
//     currentIndex = 0;
//     previousIndex = 0;
//     console.log(currentIndex, previousIndex);
// }

// resetSlider();
// function removeAllScale(){
//   for(let j=0; j<sliderImages.length; j++) {
//     sliderImages[j].classList.remove('image-slider__slide--first');
//     sliderImages[j].classList.remove('image-slider__slide--second');
//     sliderImages[j].classList.remove('image-slider__slide--third');
//   }
// }
// function hideSlides(){
//   for(let i=0; i<sliderImages.length; i++) {
//     sliderImages[i].classList.add('image-slider__slide--third');
//   }
// }

//   sliderButtons[1].addEventListener('click', function(){

    
    
//     removeAllScale();
//     hideSlides();
//     sliderImages[1].classList.remove('image-slider__slide--first');
//     sliderImages[1].classList.remove('image-slider__slide--second');
//     sliderImages[1].classList.remove('image-slider__slide--third');
//     sliderImages[1].classList.add('image-slider__slide--first');

//     previousIndex = currentIndex;
//   // });
// });

// sliderButtons[2].addEventListener('click', function(){

    
    
//   removeAllScale();
//   hideSlides();
//   sliderImages[2].classList.remove('image-slider__slide--first');
//   sliderImages[2].classList.remove('image-slider__slide--second');
//   sliderImages[2].classList.remove('image-slider__slide--third');
//   sliderImages[2].classList.add('image-slider__slide--first');
  
//   previousIndex = currentIndex;
// // });
// });

// sliderButtons[0].addEventListener('click', function(){

    
    
//   removeAllScale();
//   hideSlides();
//   sliderImages[0].classList.remove('image-slider__slide--first');
//   sliderImages[0].classList.remove('image-slider__slide--second');
//   sliderImages[0].classList.remove('image-slider__slide--third');
//   sliderImages[0].classList.add('image-slider__slide--first');
  
//   previousIndex = currentIndex;
// // });
// });

// sliderButtons[3].addEventListener('click', function(){

    
    
//   removeAllScale();
//   hideSlides();
//   // sliderImages[3].classList.remove('image-slider__slide--first','image-slider__slide--first', 'image-slider__slide--third');
//   sliderImages[3].classList.remove('image-slider__slide--first');
//   sliderImages[3].classList.remove('image-slider__slide--second');
//   sliderImages[3].classList.remove('image-slider__slide--third');
//   sliderImages[3].classList.add('image-slider__slide--first');
  
//   previousIndex = currentIndex;
// // });
// });

// sliderButtons[4].addEventListener('click', function(){

    
    
//   removeAllScale();
//   hideSlides();
//   sliderImages[4].classList.remove('image-slider__slide--first');
//   sliderImages[4].classList.remove('image-slider__slide--second');
//   sliderImages[4].classList.remove('image-slider__slide--third');
//   sliderImages[4].classList.add('image-slider__slide--first');
  
//   previousIndex = currentIndex;
// // });
// });