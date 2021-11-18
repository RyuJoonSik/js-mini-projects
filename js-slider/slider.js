var sliderButtonGroup = document.querySelector('.image-slider__buttons');
var sliderButtons = document.querySelectorAll('.image-slider__button');
var sliderButtonCount = sliderButtonGroup.children.length;
var slideCount = sliderButtons.length;
var sliderImages = document.querySelectorAll('.image-slider__slide');
var currentIndex;
var previousIndex;
var slideOrder;
var sliderTimer;
var loadingTimer;
var slideIndex = 0;
var slideInertval= 1000;
var loadingBar = document.querySelector('.image-slider__loading-bar');

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
  for(let i=0; i<slideCount; i++) {
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
  for(let i=0; i<slideCount; i++) {
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
    for(let i=2; i<slideCount; i++) {
      sliderImages[i].classList.add('image-slider__slide--third')
    }
    buttonControl(sliderButtonGroup.children[0]);
    loadingBar.style.width = 0 + '%';
    currentIndex = 0;
    previousIndex = 0;
}

function isLastButton(numberOfIndex){
  if(numberOfIndex === sliderButtons.length -1){
    return true
  } else {
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

// loadingBar.style.animation = 'loading 2s infinite';
// console.log('loading' + (slideInertval/1000) + 's infinite');


function autoSlide() {
  if(loadingBar.style.animation === ''){
    // loadingBar.style.animation = 'none ';
    loadingBar.style.animation = 'loading ' + (slideInertval/1000) + 's infinite';
  }
  slideIndex++;
  slideIndex = slideIndex % sliderImages.length;
  moveSlide(slideIndex);
  buttonControl(sliderButtonGroup.children[slideIndex]);
  // loadingBar.style.animation = 'loading' + slideInertval + 's infinite';
  // loadingBar.classList.add('image-slider__loading-bar--active');
  // loadingTimer = setInterval(activateLoading, 10);
}

function activateButton(button) {
  button.classList.add('image-slider__button--active');
}

function deactivateButton() {
  for(var i=0; i<sliderButtonCount; i++){
    if(sliderButtonGroup.children[i].classList.contains('image-slider__button--active')) {
      sliderButtonGroup.children[i].classList.remove('image-slider__button--active');
    }
  }
}

function buttonControl(button) {
  deactivateButton();
  activateButton(button);
}
// sliderButtons.forEach(function(sliderButton, sliderButtonIndex){
//   sliderButton.addEventListener('click', function(){
//     clearInterval(sliderTimer);
//     moveSlide(sliderButtonIndex);
//   });
// });

function activateLoading() {
  loadingBar.style.width = loadingCount + "%";
  loadingCount++;
  if(loadingCount === 101) {
    loadingCount = 0;
    deactivateLoading();
  }
}

function deactivateLoading() {
  clearInterval(loadingTimer);
}

var loadingCount = 0;


sliderButtonGroup.addEventListener('click', function(e){
  if(e.target.nodeName !== "BUTTON"){
    return
  }

  for(var i=0; i<sliderButtonCount; i++){
    if(sliderButtonGroup.children[i] === e.target) {
      clearInterval(sliderTimer);
      loadingBar.classList.remove('image-slider__loading-bar--active');
      loadingTimer = setInterval(activateLoading, 10);
      console.log(loadingBar.style);
      // console.log(e.target);
      // console.log(sliderButtons.children[i])
      buttonControl(e.target)
      moveSlide(i);
      slideIndex = i;
      // sliderTimer = setInterval(autoSlide, 1000);
      break;
    }
  }
})

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

sliderTimer = setInterval(autoSlide, slideInertval);
// loadingTimer = setInterval(activateLoading, 10);