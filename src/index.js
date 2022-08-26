const section = document.querySelector("section");
const body = document.querySelector("body");
const boxes = document.getElementsByClassName("wrap_box");
const textboxes = document.getElementsByClassName("text");
const rodapes = document.getElementsByClassName("rodapes");

var nav = document.querySelector("nav");
const top_nav_height = nav.offsetHeight;
var screenWidth = window.innerWidth;

// FIRST DEVICE CHECK FOR SANDWICH
if(screenWidth < 550){
  SandwichOn();
}else{
  SandwichOff();
}

// FIRST DEVICE CHECK FOR WRAP OR NOWRAP
// MOBILE
if(screenWidth < 1000){
  Array.from(boxes).forEach((element) => {
    element.style.flexWrap = "wrap";
    element.style.margin = "0em 0em";
      element.style.padding = "2em 1em";
  });
  Array.from(textboxes).forEach((element) => {
    element.style.padding = "0em 0em";
    element.style.margin = "0em 0em";

  });
  Array.from(rodapes).forEach((element) => {
    element.style.display = "flex";
    element.style.justifyContent = "center";
  });
}
//DESTOP E TABLET
else{
  Array.from(boxes).forEach((element) => {
    element.style.flexWrap = "nowrap";
  });
  Array.from(textboxes).forEach((element) => {
    element.style.padding = "1em 1em";
  });
  Array.from(rodapes).forEach((element) => {
    element.style.display = "";
    element.style.justifyContent = "";
  });
}

window.addEventListener("resize", function() {
  var screenWidth = window.innerWidth;
  // MOBILE
  if(screenWidth < 1000){
    Array.from(boxes).forEach((element) => {
      element.style.flexWrap = "wrap";
      element.style.margin = "0em 0em";
        element.style.padding = "2em 1em";
    });
    Array.from(textboxes).forEach((element) => {
      element.style.padding = "0em 0em";
      element.style.margin = "0em 0em";
    });
    Array.from(rodapes).forEach((element) => {
      element.style.display = "flex";
      element.style.justifyContent = "center";
    });
  }
  //DESTOP E TABLET
  else{
    Array.from(boxes).forEach((element) => {
      element.style.flexWrap = "nowrap";
    });
    Array.from(textboxes).forEach((element) => {
      element.style.padding = "1em 1em";
    });
    Array.from(rodapes).forEach((element) => {
      element.style.display = "";
      element.style.justifyContent = "";
    });
  }

  //SandwichMenu
  if(screenWidth < 550){
    SandwichOn();
  }else{
    SandwichOff();
  }
});

var top_page_btn = document.createElement("a");
top_page_btn.classList.add("top_page_btn");
top_page_btn.href = "#"
top_page_btn.style.fill = "white";
var sandwichmenu;

window.addEventListener("scroll", function(){
  var banner = document.querySelector(".main_banner_container");
  if (window.scrollY + top_nav_height > banner.offsetTop + banner.offsetHeight + top_nav_height){
  var result = nav.offsetHeight;
  section.style.marginTop = result + "px";
  nav.classList.add("top_fixed");
  nav.style.width = "100%";
  nav.appendChild(top_page_btn);

  top_page_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 384 500"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"/></svg>';

  }
  else{
    section.style.marginTop = "0.2em";
    nav.classList.remove("top_fixed");
    top_page_btn.remove();
  }
})

function SandwichOn(){
  nav.innerHTML = '<div class="sandwich_menu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg></div>';
  var sandwichmenu = document.querySelector(".sandwich_menu");
  sandwichmenu.addEventListener("click", OpenSandwichMenu);
}
function SandwichOff(){
  nav.innerHTML = '<div style="list-style-type: none;display: flex;justify-content: space-between;"><a class="header_link" href="index.html" target="">Início</a><a class="header_link" href="servicoseprodutos.html" target="">Serviços</a><a class="header_link" href="sobre.html" target="">Sobre</a><a class="header_link" href="contactos.html" target="">Contactos</a></div>';
}
function OpenSandwichMenu(){
  nav.innerHTML = '<div class="sandwichmenuopen"><div class="close_btn">X</div><a class="sandwichlink" href="index.html" target="">Início</a><a class="sandwichlink" href="servicoseprodutos.html" target="">Serviços</a><a class="sandwichlink" href="sobre.html" target="">Sobre</a><a class="sandwichlink" href="contactos.html" target="">Contactos</a></div>';
  var sandwichmenu = document.querySelector(".close_btn");
  sandwichmenu.addEventListener("click", CloseSandwichMenu);
}
function CloseSandwichMenu(){
  nav.innerHTML = '<div class="sandwich_menu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg></div>';
  var sandwichmenu = document.querySelector(".sandwich_menu");
  sandwichmenu.addEventListener("click", OpenSandwichMenu);
}


// EXPAND CARDS
const allExpandMore = document.querySelectorAll("[expand-more]");

function expand() {
  const showContent = document.getElementById(this.dataset.target);
  if (showContent.classList.contains("expand-active")) {
    this.innerHTML = this.dataset.showtext;
    scroll();
  } else {
    this.innerHTML = this.dataset.hidetext;
  
  }
  showContent.classList.toggle("expand-active");
}

allExpandMore.forEach((expandMore) => {
  expandMore.addEventListener("click", expand);
});

function scroll(){
  var getMeTo = document.getElementById("workshopID");
  getMeTo.scrollIntoView({behavior: 'smooth'}, true);
}
