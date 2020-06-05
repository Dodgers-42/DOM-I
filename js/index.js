const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

document.getElementsByTagName('nav');
  console.log(document.getElementsByTagName("img"))

const nav = document.querySelectorAll('a');
  console.log(nav);

 nav[0].textContent = siteContent["nav"]["nav-item-1"]  

 nav[1].textContent = siteContent["nav"]["nav-item-2"]

 nav[2].textContent = siteContent["nav"]["nav-item-3"]

 nav[3].textContent = siteContent["nav"]["nav-item-4"]

 nav[4].textContent = siteContent["nav"]["nav-item-5"]

 nav[5].textContent = siteContent["nav"]["nav-item-6"]


 
 for (let i=0; i<nav.length; i++){
  nav[i].style.color = 'green' 
 }




//  const navigation = document.querySelector('nav')
//   navigation.appendChild(newContent)

 const newContent = document.createElement('nav[a]');
 newContent.textContent = "Home";
 newContent.style.color = "green";

 const navigation = document.querySelector('nav')
  navigation.appendChild(newContent)

//  const body = document.querySelector('body');
//  nav.append(newContent);


//  const newNav = document.createElement('nav[a]');
//  newNav.textContent = "Back";
//  newNav.style.color = "green";

//  const body = document.querySelector('body');
//  nav.append(newContent);








//  siteContent.nav.appendChild(Home);

//  siteContent.nav.appendChild(Landing);



// document.querySelector('Site');

// document.querySelector('a [1]');

// document.querySelector('a [2]');

// document.querySelector('a [3]');

// document.querySelector('a [4]');

// document.querySelector('a [6]');

document.querySelector('#logo-img');

// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaH1 = document.querySelector('.cta h1');
// console.log(cta);
ctaH1.textContent = siteContent["cta"]["h1"];

// document.getElementsByTagName('h1');
//   console.log(document.getElementsByTagName('h1'))

const button = document.querySelector('.cta button');
  // console.log(button);
button.textContent = siteContent['cta']['button'];


const ctaImg = document.getElementById("cta-img");
  // console.log(cta-img);
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

  // let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

const mainContent = document.querySelectorAll('.main-content');
  console.log(mainContent);


const textH4 = document.querySelectorAll('h4');
  console.log(textH4);
  textH4[0].textContent = siteContent["main-content"]["features-h4"];
  textH4[1].textContent = "About";
  textH4[2].textContent = "Services";
  textH4[3].textContent = "Product";
  textH4[4].textContent = "Visions";
  textH4[5].textContent = "Contact";
// textH4.textContent = siteContent['main-content']['features-h4'];

const featuresP = document.querySelectorAll('p');
featuresP[0].textContent = siteContent["main-content"]["features-content"];
featuresP[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
featuresP[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
featuresP[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
featuresP[4].textContent = "Visions content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
featuresP[5].textContent = "123 Way 456 Street Somewhere, USA"
featuresP[6].textContent = "1 (888) 888-8888"
featuresP[7].textContent = "sales@greatidea.io"
featuresP[8].textContent =  "Copyright Great Idea! 2018"
  // console.log(featuresP);

document.querySelector('.main-content about-content');

// document.querySelector('about-h4');



const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"]

 // let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])


// document.querySelector('services-h4');

// document.querySelector('services-content');

// document.querySelector('product-h4');

// document.querySelector('product-content');

// document.querySelector('vision-h4');

// document.querySelector('vision-content');

const contact = document.querySelectorAll('.contact');
  console.log(contact);

// const contactH4 = document.querySelector('.contact h4');
// ctaH1.textContent = siteContent["contact"]["h4"];

// const ctaH1 = document.querySelector('.cta h1');
// console.log(cta);
// ctaH1.textContent = siteContent["cta"]["h1"];
// const contactAdd = document.querySelector('.contact address');
// // contactAdd.textContent = siteContent["contact"]["address"];
// document.querySelector('.contact phone');

// document.querySelector('.contact email');



// const footer = document.querySelector('footer');
//   console.log(footer);

// const copyright = document.querySelector('copyright');
// // document.querySelector('nav');

// document.getElementsByTagName('h1');
//   console.log(document.getElementsByTagName('h1'))

