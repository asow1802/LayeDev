const nav = document.querySelector("#navbar");
navPos = nav.getBoundingClientRect();
const Sections = document.querySelectorAll("#conteneur");
const links = document.querySelectorAll('.link');



// scrollTop => la partie scroller depuis le haut de la page
// scrollHeight => hauteur de la partie visible
// clientHeight => hauteur séparant le haut de l'élément et le haut de la partie visible
window.addEventListener('scroll',()=>{
    const {scrollTop,scrollHeight,clientHeight} = document.documentElement;
    if(scrollTop>1700 && scrollTop<2100){
        const hash = links[1].getAttribute("href");
        links[1].classList.add('active')  
        window.history.replaceState(null,null,hash)
    }else{
        links[1].classList.remove('active')
    }
  })
  window.addEventListener('scroll',()=>{
    const {scrollTop,scrollHeight,clientHeight} = document.documentElement;
    if(scrollTop>20 && scrollTop<50){
        const hash = links[0].getAttribute("href");
        links[0].classList.add('active')  
        window.history.replaceState(null,null,hash)
    }else{
        links[0].classList.remove('active')
    }
  })