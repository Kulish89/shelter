const JSON = [
  {
    name: "Jennifer",
    img: "../../assets/images/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];
const BURGER = document.querySelector(".burger");
const MENU = document.querySelector(".header__menu");
const MAIN_BLOCK = document.querySelector(".main-block");
const OUR_PETS_CARDS = document.querySelector(".friends-block__cards");
const OUR_PETS_CARD = document.querySelector(".friends-block__item");
const CARROUSEL_CENTER_BLOCK = document.querySelector(".block-center");
const CARROUSEL_LEFT_BLOCK = document.querySelector(".block-left");
const CARROUSEL_RIGHT_BLOCK = document.querySelector(".block-right");
const CARROUSEL = document.querySelector(".carrousel__wrapper");
const LEFT_ARROW_CARROUSEL = document.querySelector("._left-arrow");
const RIGHT_ARROW_CARROUSEL = document.querySelector("._right-arrow");
const CARROUSEL_BLOCK = document.querySelector(".carrousel");
const POPUP = document.getElementById("popup");
const CLOSE_POPUP = document.querySelector(".popup__close");
const POPUP_CONTENT = document.querySelector(".popup__content");

const PETS = [];
for (let obj of JSON) {
  obj["id"] = JSON.indexOf(obj);
  PETS.push(obj);
}
switch (CARROUSEL_BLOCK.offsetWidth) {
  case 990:
    createCarrouselContent(3);
    break;
  case 580:
    createCarrouselContent(2);
    break;
  case 270:
    createCarrouselContent(1);
    break;
}

// =====================================================================
BURGER.addEventListener("click", function () {
  BURGER.classList.toggle("burger-rotate");
  MENU.classList.toggle("transition-menu");
});

LEFT_ARROW_CARROUSEL.addEventListener("click", moveLeft);

RIGHT_ARROW_CARROUSEL.addEventListener("click", moveRight);

CARROUSEL.addEventListener("animationend", (event) => {
  CARROUSEL.classList.remove("transition-left");
  CARROUSEL.classList.remove("transition-right");
  if (event.animationName === "move-left") {
    CARROUSEL_RIGHT_BLOCK.innerHTML = CARROUSEL_CENTER_BLOCK.innerHTML;
    CARROUSEL_CENTER_BLOCK.innerHTML = CARROUSEL_LEFT_BLOCK.innerHTML;
    let idiesCentralBlock = [];
    for (let pet of CARROUSEL_CENTER_BLOCK.children) {
      idiesCentralBlock.push(+pet.id);
    }
    createCarrouselBlock(
      CARROUSEL_LEFT_BLOCK,
      getUniqueCards(CARROUSEL_CENTER_BLOCK.children.length, idiesCentralBlock)
    );
  } else if (event.animationName === "move-right") {
    CARROUSEL_LEFT_BLOCK.innerHTML = CARROUSEL_CENTER_BLOCK.innerHTML;
    CARROUSEL_CENTER_BLOCK.innerHTML = CARROUSEL_RIGHT_BLOCK.innerHTML;
    let idiesCentralBlock = [];
    for (let pet of CARROUSEL_CENTER_BLOCK.children) {
      idiesCentralBlock.push(+pet.id);
    }
    createCarrouselBlock(
      CARROUSEL_RIGHT_BLOCK,
      getUniqueCards(CARROUSEL_CENTER_BLOCK.children.length, idiesCentralBlock)
    );
  }
});

// =====================================================================

function createCarrouselContent(amount) {
  let cardsforCentralblock = getUniqueCards(amount, []);
  createCarrouselBlock(CARROUSEL_CENTER_BLOCK, cardsforCentralblock);
  createCarrouselBlock(
    CARROUSEL_LEFT_BLOCK,
    getUniqueCards(amount, cardsforCentralblock)
  );
  createCarrouselBlock(
    CARROUSEL_RIGHT_BLOCK,
    getUniqueCards(amount, cardsforCentralblock)
  );
}

function createCarrouselBlock(block, items) {
  block.innerHTML = "";
  for (let item of items) {
    let obj = PETS.find((pet) => pet.id == item);
    block.innerHTML += createPetCard(obj);
  }
}

function getUniqueCards(count, pets) {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(getId([...pets, ...result]));
  }
  return result;
}

function getId(arr) {
  let num = Math.floor(Math.random() * 8);
  return arr.includes(num) ? getId(arr) : num;
}

function createPetCard(obj) {
  return `<div id = ${obj.id} class="friends-block__item item" onclick="openPopup(event, ${obj.id})"><img class="item__img"
  src="../../assets/images/${obj.name}.png"
  alt="${obj.name} photo"/>
<h5 class="item__name">${obj.name}</h5>
<a class="item__btn _button colorless-button" href="#"
  >Learn more</a>
</div>`;
}

function moveLeft(event) {
  event.preventDefault();
  CARROUSEL.classList.add("transition-left");
}

function moveRight(event) {
  event.preventDefault();
  CARROUSEL.classList.add("transition-right");
}

function openPopup(event, id) {
  event.preventDefault();
  let obj = PETS.find((pet) => pet.id == id);
  POPUP_CONTENT.innerHTML = createPopupContent(obj);
  POPUP.classList.add("open");
  document.documentElement.classList.add("blocking");
  POPUP.addEventListener("click", function (e) {
    if (!e.target.closest(".popup__content")) {
      POPUP.classList.remove("open");
      document.documentElement.classList.remove("blocking");
    }
  });
}
function closePopup(event) {
  event.preventDefault();
  POPUP.classList.remove("open");
  document.documentElement.classList.remove("blocking");
}
function createPopupContent(obj) {
  return `<div class="pet__image">
  <img src="../../assets/images/${
    obj.name
  }.png" alt="" /></div><div class="pet__about">
  <div>
    <h3 class="pet__name">${obj.name}</h3>
    <h5 class="pet__breed">${obj.type}-${obj.breed}</h5>
  </div> <p class="pet__description">${obj.description}</p>
  <ul class="pet__others others-list">
    <li class="pet__age others-list__item">
      <strong>Age:</strong>${obj.age}</li>
    <li class="pet__inoculations others-list__item">
      <strong>Inoculations:</strong>${obj.inoculations.join(", ")}</li>
    <li class="pet__diseases others-list__item">
      <strong>Diseases:</strong>${obj.diseases.join(", ")}</li>
    <li class="pet__parasites others-list__item">
      <strong>Parasites:</strong>${obj.parasites.join(", ")}</li>
  </ul>
</div>
<a href="#" class="popup__close" onclick = "closePopup(event)"
  ><img src="../../assets/icons/modal-close-vector.svg" alt=""
/></a>`;
}
