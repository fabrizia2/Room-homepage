const mainImage = document.querySelector(".main-image");
const navLinks = document.querySelectorAll(".nav-items li a");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-items li a");
const hoverLines = document.querySelectorAll(".hover-line");
const mobileHoverLines = document.querySelectorAll(".mobile-hover-line");
const desktopSlider = document.querySelector(".desktop-slider");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const previousBtnMobile = document.querySelector(".previous-btn-mobile");
const nextBtnMobile = document.querySelector(".next-btn-mobile");
const aboutImages = document.querySelectorAll(".image");
const aboutSection = document.querySelector(".about-section");

const toggleMenu = document.querySelector(".toggle-menu");
const overlay = document.querySelector(".overlay");
const mobileNavigation = document.querySelector(".mobile-navigation");
const closeMenu = document.querySelector(".close-menu");

if (window.innerWidth >= 810) {
  aboutImages.forEach((image) => {
    image.style.width = `${
      window.innerWidth - (mainImage.clientWidth + desktopSlider.clientWidth)
    }px`;
    aboutSection.style.width = `${
      aboutImages[0].clientWidth + desktopSlider.clientWidth
    }px`;
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("mouseover", () => {
    hoverLines[i].style.display = "block";
  });

  navLinks[i].addEventListener("mouseout", () => {
    hoverLines[i].style.display = "none";
  });

  mobileNavLinks[i].addEventListener("mouseover", () => {
    mobileHoverLines[i].style.display = "block";
  });

  mobileNavLinks[i].addEventListener("mouseout", () => {
    mobileHoverLines[i].style.display = "none";
  });
}

toggleMenu.addEventListener("click", () => {
  overlay.style.display = "block";
  mobileNavigation.style.display = "flex";
});

closeMenu.addEventListener("click", () => {
  overlay.style.display = "none";
  mobileNavigation.style.display = "none";
});

function hideMobileMenu() {
  if (window.innerWidth >= 810) {
    overlay.style.display = "none";
    mobileNavigation.style.display = "none";
  }
}

window.addEventListener("resize", hideMobileMenu);

let index = 1;

function changeImage() {
  switch (index) {
    case 1:
      if (window.innerWidth >= 810) {
        mainImage.style.background =
          'url("images/desktop-image-hero-1.jpg") no-repeat center center/cover';
      } else if (window.innerWidth < 810) {
        mainImage.style.background =
          'url("images/mobile-image-hero-1.jpg") no-repeat center bottom/cover';
      }
      break;
    case 2:
      if (window.innerWidth >= 810) {
        mainImage.style.background =
          'url("images/desktop-image-hero-2.jpg") no-repeat center center/cover';
      } else if (window.innerWidth < 810) {
        mainImage.style.background =
          'url("images/mobile-image-hero-2.jpg") no-repeat center center/cover';
      }
      break;
    case 3:
      if (window.innerWidth >= 810) {
        mainImage.style.background =
          'url("images/desktop-image-hero-3.jpg") no-repeat center center/cover';
      } else if (window.innerWidth < 810) {
        mainImage.style.background =
          'url("images/mobile-image-hero-3.jpg") no-repeat center center/cover';
      }
      break;
  }

  if (index > 3) {
    index = 1;
    if (window.innerWidth >= 810) {
      mainImage.style.background =
        'url("images/desktop-image-hero-1.jpg") no-repeat center center/cover';
    } else if (window.innerWidth < 810) {
      mainImage.style.background =
        'url("images/mobile-image-hero-1.jpg") no-repeat center bottom/cover';
    }
  } else if (index < 1) {
    index = 3;
    if (window.innerWidth >= 810) {
      mainImage.style.background =
        'url("images/desktop-image-hero-3.jpg") no-repeat center center/cover';
    } else if (window.innerWidth < 810) {
      mainImage.style.background =
        'url("images/mobile-image-hero-3.jpg") no-repeat center center/cover';
    }
  }
}

nextBtn.addEventListener("click", () => {
  index++;
  changeImage();
});

previousBtn.addEventListener("click", () => {
  index--;
  changeImage();
});

nextBtnMobile.addEventListener("click", () => {
  index++;
  changeImage();
});

previousBtnMobile.addEventListener("click", () => {
  index--;
  changeImage();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    index++;
    changeImage();
  } else if (e.key === "ArrowLeft") {
    index--;
    changeImage();
  }
});