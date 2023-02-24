let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

/* JS for All menu in nav bar */

function openNav() {
  document.getElementById("mySidenav").style.animation = "expand 0.3s forwards";
  //closeBtn
  document.getElementById("closeBtn").style.display = "block";
  document.getElementById("closeBtn").style.animation = "show 0.3s";
  //Overlay
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay").style.animation = "show 0.3s";

}

function closeNav() {
  document.getElementById("mySidenav").style.animation = "collapse 0.3s forwards";
  //closeBtn
  document.getElementById("closeBtn").style.animation = "hide 0.3s";
  //Overlay
  document.getElementById("overlay").style.animation = "hide 0.3s";

  setTimeout(() => {
      document.getElementById("closeBtn").style.display = "none";
      document.getElementById("overlay").style.display = "none";
      //Reset Menus
      document.getElementById("main-container").style.animation = "";
      document.getElementById("main-container").style.transform = "translateX(0px)";
      document.getElementById("sub-container").style.animation = "";
      document.getElementById("sub-container").style.transform = "translateX(380px)";
  }, 300)
}

let firstDropdownOpen = false;

function firstDropDown() {
  firstDropdownOpen = !firstDropdownOpen;
  if(firstDropdownOpen) {
      document.querySelector("#firstDropDown i").setAttribute("class", "fas fa-chevron-up");
      document.querySelector("#firstDropDown div").innerHTML = "See Less";
      //Handle Container
      document.getElementById("firstContainer").style.display = "block";
      document.getElementById("firstContainer").style.animation = "expandDropDown 0.3s forwards";
      document.getElementById("firstContainer").style.transition = "height 0.3s";
      document.getElementById("firstContainer").style.height = "410px";
  }else{
      document.querySelector("#firstDropDown i").setAttribute("class", "fas fa-chevron-down");
      document.querySelector("#firstDropDown div").innerHTML = "See More";
      //Handle Container
      document.getElementById("firstContainer").style.animation = "collapseDropDown 0.2s forwards";
      document.getElementById("firstContainer").style.transition = "height 0.2s";
      document.getElementById("firstContainer").style.height = "0px";
      setTimeout(() => {
          document.getElementById("firstContainer").style.display = "none";
      }, 200)
      
  }
}

let secondDropDownOpen = false;

function secondDropDown() {
  secondDropDownOpen = !secondDropDownOpen;

  if(secondDropDownOpen) {
      document.querySelector("#secondDropDown i").setAttribute("class", "fas fa-chevron-up");
      document.querySelector("#secondDropDown div").innerHTML = "See Less";
      //Handle Container
      document.getElementById("secondContainer").style.display = "block";
      document.getElementById("secondContainer").style.animation = "expandDropDown 0.3s forwards";
      document.getElementById("secondContainer").style.transition = "height 0.3s";
      document.getElementById("secondContainer").style.height = "260px";
  }else{
      document.querySelector("#secondDropDown i").setAttribute("class", "fas fa-chevron-down");
      document.querySelector("#secondDropDown div").innerHTML = "See More";
      //Handle Container
      document.getElementById("secondContainer").style.animation = "collapseDropDown 0.2s forwards";
      document.getElementById("secondContainer").style.transition = "height 0.2s";
      document.getElementById("secondContainer").style.height = "0px";
      setTimeout(() => {
          document.getElementById("secondContainer").style.display = "none";
      }, 200)
      
  }
}

document.querySelectorAll(".sidenavRow").forEach(row => {
  row.addEventListener("click", () => {
      document.getElementById("main-container").style.animation = "mainAway 0.3s forwards";
      document.getElementById("sub-container").style.animation = "subBack 0.3s forwards";
  });
});

document.getElementById("mainMenu").addEventListener("click", () => {
  document.getElementById("main-container").style.animation = "mainBack 0.3s forwards";
  document.getElementById("sub-container").style.animation = "subPush 0.3s forwards";
})

//subNavContent

function openPrimeVideo() {
  document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Prime Video</div>
  <a href="#"><div class="sidenavContent">All Videos</div></a>`;
}

function openAmazonMusic() {
  document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Amazon Music</div>
  <a href="#"><div class="sidenavContent">All Music</div></a>`;
}