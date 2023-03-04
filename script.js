const offsetX = document.querySelector('#offsetx');
const offsetY = document.querySelector('#offsety');
const blur = document.querySelector('#blur');
const spread = document.querySelector('#spread');
const color = document.querySelector('#color');
const learnButton = document.querySelector('.learn-button');
const learnShadowContent = document.querySelector('.learn-shadow-content');

const shadowBox = document.querySelector('#shadow-box')


const render = () => {
  
    const result = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value};`;
  
    shadowBox.innerHTML = `${result}`;
    shadowBox.setAttribute('style', result);
  };
  
[offsetX, offsetY, blur, spread, color].forEach(input =>
  input.addEventListener('input', render)
);
   
render();



shadowBox.addEventListener('click', ()=>{
  navigator.clipboard
    .readText()
    .then((clipText) => clipText);
  console.log('hell')
})


learnButton.addEventListener('click', ()=> {
  learnShadowContent.classList.toggle('hide')
  console.log('hello')
})