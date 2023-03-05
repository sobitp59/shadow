const offsetX = document.querySelector('#offsetx');
const offsetY = document.querySelector('#offsety');
const blur = document.querySelector('#blur');
const spread = document.querySelector('#spread');
const color = document.querySelector('#color');
const learnButton = document.querySelector('.learn-button');
const learnShadowContent = document.querySelector('.learn-shadow-content');
const copyMessage = document.querySelector('.copymessage');

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
  let copyText = shadowBox.innerText;
  navigator.clipboard.writeText(copyText)
  .then(() => {
    console.log(copyMessage)
    copyMessage.classList.remove('hideCopy')
    setInterval(() => {
      copyMessage.classList.add('hideCopy')
    }, 1500)
    console.log(copyText)
  })
})


learnButton.addEventListener('click', ()=> {
  learnShadowContent.classList.toggle('hide')
  console.log('hello')
})