const scroller = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var container = document.querySelector("#prdct-container");
var images = document.querySelectorAll(".item");
var prdct = document.querySelector("#prdcts");
prdct.style.width =
  images[0].getBoundingClientRect().width * [images.length + 3] +
  images[0].getBoundingClientRect().left * [images.length - 16] +
  "px";
var current = prdct.getBoundingClientRect().left;
container.addEventListener("scroll", function () {
  var newposn = prdct.getBoundingClientRect().left;
  var diff = newposn - current;
  var speed = Math.floor(diff / 20);
  current = newposn;
  images.forEach(function (elem) {
    elem.style.transform = `skewX(${speed}deg) skewY(${speed}deg)`;
  });
});
var menubtn = document.querySelector("#icn");
var nav2 = document.querySelector("#nav2");
menubtn.addEventListener("click", function () {
  nav2.style.left = "0%";
});
var closebtn = document.querySelector("#cbtn");
cbtn.addEventListener("click", function () {
  nav2.style.left = "100%";
});

var arr = [
  "https://images.unsplash.com/photo-1611524091519-8ac49cb18eeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1613467590059-6f7ca215c61b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80",
  "https://images.unsplash.com/photo-1601276869861-8602a77c6871?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1576561409251-f176dc6aee00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
];
var link = document.querySelectorAll(".links");

link.forEach(function (elem) {
  elem.addEventListener("mousemove", function (dets) {
    elem.children[1].style.opacity = "1";
    elem.children[1].style.transform = `translate(${dets.clientX - 150}px,${
      dets.clientY / 13
    }px) rotate(${dets.clientX / 13}deg)`;
    document.querySelector("#photo").style.backgroundImage = `url(${
      arr[elem.dataset.index]
    })`;
  });
  elem.addEventListener("mouseout", function (dets) {
    elem.children[1].style.opacity = "0";
    document.querySelector("#photo").style.backgroundImage =
      'url("https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60")';
  });
});
