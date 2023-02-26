window.onscroll = function() {scrollFunction()};

      window.onscroll = function() {myFunction()};
      
      var navbar = document.getElementById("navbar");
      var sticky = navbar.offsetTop;
      
      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      }
      //


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
  }
}

const cercle2=document.getElementById("cercle2");

window.addEventListener('scroll',()=>{
    const {scrollTop,scrollHeight,clientHeight} = document.documentElement;
    if(scrollTop>50){
        cercle2.classList.add('cerl1');
        cercle2.classList.remove('cerl2');

    }else{
        cercle2.classList.add('cerl2');
        cercle2.classList.remove('cerl1');

    }
})

const cercle1=document.getElementById("cercle1");
const section1=document.getElementById("section1")
const section3=document.getElementById("section3")


window.addEventListener('scroll',()=>{
    const {scrollTop,scrollHeight,clientHeight} = document.documentElement;
    if(scrollTop>60){
        section1.classList.add('section1-vue')
        section3.classList.add('section3-vue')

    }else{
        section1.classList.remove('section1-vue')
        section3.classList.remove('section3-vue')


    }
})


window.addEventListener('scroll',()=>{
  const {scrollTop,scrollHeight,clientHeight} = document.documentElement;
  if(scrollTop>80){
      cercle1.classList.add('cerle1');
      cercle1.classList.remove('cerle2');
      
  }else{
      cercle1.classList.add('cerle2');
      cercle1.classList.remove('cerle1');

  }
})




