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
const PETS = [];
for (let obj of JSON) {
  obj["id"] = JSON.indexOf(obj);
  PETS.push(obj);
}
let PETS48IDIES = createArrayOfPets(PETS);
const CARDS_BLOCK = document.querySelector(".ourpets-content__cards");
const BURGER = document.querySelector(".burger");
const MENU = document.querySelector(".header__menu");
const PAGINATION_PAGE_NUMBER = document.querySelector(".page-number");
const PAGINATION_LEFT_DOUBLEARROW = document.querySelector("._left-arrows");
const PAGINATION_LEFT_ARROW = document.querySelector("._left-arrow");
const PAGINATION_RIGHT_DOUBLEARROW = document.querySelector("._right-arrows");
const PAGINATION_RIGHT_ARROW = document.querySelector("._right-arrow");
// =====================================================================
let numOfPages;
switch (CARDS_BLOCK.offsetWidth) {
  case 1200:
    numOfPages = PETS48IDIES.length / 8;
    createContent(numOfPages, 8);
    break;
  case 708:
    numOfPages = PETS48IDIES.length / 6;
    createContent(numOfPages, 6);
    break;
  case 300:
    numOfPages = PETS48IDIES.length / 3;
    createContent(numOfPages, 3);
    break;
}
// =======================================================================

function createContent(amountPages, amountOfCards) {
  for (let i = 1; i <= amountPages; i++) {
    let items = getUniqueCards(amountOfCards);
    createPaginationPage(items);
  }
}
function createPaginationPage(itemsArray) {
  let cards_block_wrapper = document.createElement("div");
  cards_block_wrapper.classList.add("ourpets-content__cards-wrapper");
  for (let item of itemsArray) {
    let obj = PETS.find((pet) => pet.id == item);
    cards_block_wrapper.innerHTML += createPetCard(obj);
    // arrayOfIdies = [
    //   ...arrayOfIdies.slice(0, arrayOfIdies.indexOf(item)),
    //   ...arrayOfIdies.slice(arrayOfIdies.indexOf(item) + 1),
    // ];
  }
  CARDS_BLOCK.append(cards_block_wrapper);
}
function createPetCard(obj) {
  return `<div id="${obj.id}"class="ourpets-content__card card">
  <img
    class="card__img"
    src="../../assets/images/${obj.name}.png"
    alt="${obj.name} photo"
  />
  <h5 class="card__name">${obj.name}</h5>
  <a class="card__btn button colorless-button" href=""
    >Learn more</a
  >
</div>`;
}

function getUniqueCards(count) {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(getId(result));
  }
  return result;
}

function getId(arr) {
  let num = Math.floor(Math.random() * 8);
  return arr.includes(num) ? getId(arr) : num;
}
function createArrayOfPets(arr) {
  let result = [];
  arr.forEach((element) => {
    for (let i = 1; i <= 6; i++) {
      result.push(element.id);
    }
  });
  return result;
}
let i = 0;
PAGINATION_PAGE_NUMBER.innerText = `${i + 1}`;
PAGINATION_LEFT_DOUBLEARROW.classList.add("disabled");
PAGINATION_LEFT_ARROW.classList.add("disabled");

function rightClick(event) {
  event.preventDefault();
  PAGINATION_LEFT_DOUBLEARROW.classList.remove("disabled");
  PAGINATION_LEFT_ARROW.classList.remove("disabled");
  let pages = document.querySelectorAll(".ourpets-content__cards-wrapper");
  if (i < pages.length - 1) {
    pages[i].style.display = "none";
    i++;
    switch (CARDS_BLOCK.offsetWidth) {
      case 1200:
        pages[i].style.display = "grid";
        break;
      case 708:
        pages[i].style.display = "flex";
        break;
      case 300:
        pages[i].style.display = "flex";
        break;
    }
    PAGINATION_PAGE_NUMBER.innerText = `${i + 1}`;
    if (i === pages.length - 1) {
      PAGINATION_RIGHT_DOUBLEARROW.classList.add("disabled");
      PAGINATION_RIGHT_ARROW.classList.add("disabled");
    }
  }
}
function leftClick(event) {
  event.preventDefault();
  PAGINATION_RIGHT_DOUBLEARROW.classList.remove("disabled");
  PAGINATION_RIGHT_ARROW.classList.remove("disabled");
  let pages = document.querySelectorAll(".ourpets-content__cards-wrapper");
  if (i > 0) {
    pages[i].style.display = "none";
    i--;
    switch (CARDS_BLOCK.offsetWidth) {
      case 1200:
        pages[i].style.display = "grid";
        break;
      case 708:
        pages[i].style.display = "flex";
        break;
      case 300:
        pages[i].style.display = "flex";
        break;
    }
    PAGINATION_PAGE_NUMBER.innerText = `${i + 1}`;
    if (i === 0) {
      PAGINATION_LEFT_DOUBLEARROW.classList.add("disabled");
      PAGINATION_LEFT_ARROW.classList.add("disabled");
    }
  }
}
function rightToEnd(event) {
  event.preventDefault();
  let pages = document.querySelectorAll(".ourpets-content__cards-wrapper");
  pages[i].style.display = "none";
  i = pages.length - 1;
  switch (CARDS_BLOCK.offsetWidth) {
    case 1200:
      pages[i].style.display = "grid";
      break;
    case 708:
      pages[i].style.display = "flex";
      break;
    case 300:
      pages[i].style.display = "flex";
      break;
  }
  PAGINATION_PAGE_NUMBER.innerText = `${i + 1}`;
  PAGINATION_LEFT_DOUBLEARROW.classList.remove("disabled");
  PAGINATION_LEFT_ARROW.classList.remove("disabled");
  PAGINATION_RIGHT_DOUBLEARROW.classList.add("disabled");
  PAGINATION_RIGHT_ARROW.classList.add("disabled");
}
function leftToStart(event) {
  event.preventDefault();
  let pages = document.querySelectorAll(".ourpets-content__cards-wrapper");
  pages[i].style.display = "none";
  i = 0;
  switch (CARDS_BLOCK.offsetWidth) {
    case 1200:
      pages[i].style.display = "grid";
      break;
    case 708:
      pages[i].style.display = "flex";
      break;
    case 300:
      pages[i].style.display = "flex";
      break;
  }
  PAGINATION_PAGE_NUMBER.innerText = `${i + 1}`;
  PAGINATION_RIGHT_DOUBLEARROW.classList.remove("disabled");
  PAGINATION_RIGHT_ARROW.classList.remove("disabled");
  PAGINATION_LEFT_DOUBLEARROW.classList.add("disabled");
  PAGINATION_LEFT_ARROW.classList.add("disabled");
}
// =================================================================================
BURGER.addEventListener("click", function () {
  BURGER.classList.toggle("burger-rotate");
  MENU.classList.toggle("visible");
});
PAGINATION_RIGHT_ARROW.addEventListener("click", rightClick);
PAGINATION_LEFT_ARROW.addEventListener("click", leftClick);
PAGINATION_RIGHT_DOUBLEARROW.addEventListener("click", rightToEnd);
PAGINATION_LEFT_DOUBLEARROW.addEventListener("click", leftToStart);
