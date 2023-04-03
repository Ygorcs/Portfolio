
const botao = document.getElementById("botao");
const conteudo = document.getElementById("sobremim");

botao.addEventListener("click", () => {
  conteudo.scrollIntoView({ behavior: "smooth" });
});



// 



const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';


function animeScroll(){
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4 );
  target.forEach(function(element){
    if((windowTop) > element.offsetTop){
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
window.addEventListener('scroll', function(){
  animeScroll();
})
}


// 


