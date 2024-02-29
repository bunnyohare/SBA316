// Menu data structure
var menuLinks = [
  { text: "Home", href: "#" },
  {
    text: "Baby Animals",
    href: "#",
    subLinks: [
      { text: "Bunnies", href: "#" },
      { text: "Kitties", href: "#" },
      { text: "Baby Lambs", href: "#" },
    ],
  },
  {
    text: "Dragons",
    href: "#",
    subLinks: [
      { text: "Red Dragons", href: "#" },
      { text: "Green Dragons", href: "#" },
      { text: "Black Dragons", href: "#" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "#" },
      { text: "sign out", href: "#" },
    ],
  },
];

// Reused code from lab
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

const nav = document.querySelector("nav");

menuLinks.forEach((item) => {
  menuItem = document.createElement("a");
  menuItem.textContent = item.text;
  menuItem.href = item.href;
  nav.appendChild(menuItem);
});

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

const topMenuLinks = document.querySelectorAll("a");

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  // Check if the clicked element is an <a> tag and does not have class "active"
  if (
    event.target.tagName.toLowerCase() === "a" &&
    !event.target.classList.contains("active")
  ) {
    // Remove "active" class from all links
    topMenuLinks.forEach((link) => link.classList.remove("active"));

    // Add "active" class to the clicked link
    event.target.classList.add("active");

    // Check if the corresponding item in menuLinks has subLinks
    const index = Array.from(topMenuLinks).indexOf(event.target);
    if (index >= 0 && menuLinks[index].subLinks) {
      // Set the CSS top property of subMenuEl to 100%
      subMenuEl.style.top = "100%";

      // Build submenu based on the clicked link's subLinks
      buildSubmenu(menuLinks[index].subLinks);
    }
  } else {
    // If there are no subLinks, hide the sub menu
    subMenuEl.style.top = "0";
  }
});

function buildSubmenu(subLinks) {
  // Clear the current contents of subMenuEl
  subMenuEl.innerHTML = "";

  // Iterate over the subLinks array adding subMenuItems to subMenu
  subLinks.forEach((link) => {
    const subMenuItem = document.createElement("a");
    subMenuItem.href = link.href;
    subMenuItem.textContent = link.text;
    subMenuEl.appendChild(subMenuItem);
  });
}

// Attach a delegated 'click' event listener to subMenuEl
subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName.toLowerCase() !== "a") {
    return;
  }
  // Set the CSS top property of subMenuEl to 0
  subMenuEl.style.top = "0";

  // Remove the active class from each <a> element in topMenuLinks
  topMenuLinks.forEach((link) => link.classList.remove("active"));

  // Update the contents of mainEl within an <h1> to the contents of the <a> element clicked within subMenuEl
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});

//  ****  PREVENT CAPS   ******

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.classList.add("flex-left");

const htmlValidation = document.getElementById("html-validation");
htmlValidation.classList.add("purple-letters");

const kittens = [];
kittens.push("60", "70", "80", "90", "100", "110", "120", "130");

const kittenDiv = document.getElementById("kittens");
kittens.forEach((kittenSize, i) => {
  const animalSection = document.createElement("section");
  animalSection.innerHTML = `<img src="https://placekitten.com/${kittenSize}/${kittenSize}" alt="Kitten">`;
  animalSection.style.order = i;
  animalSection.id = `meow${i}`;
  kittenDiv.append(animalSection);
});

const babyAnimalProzacDiv = document.getElementById("baby-animal-prozac");
const babyAnimalSection = document.createElement("section");
babyAnimalSection.innerHTML = `<p>Click on the rabbit to see a lamb!</p<br /><img src="images/pexels-frank-cone-2439784-400w.jpg" alt="Rabbit">`;
babyAnimalSection.id = `cutie`;
babyAnimalProzacDiv.appendChild(babyAnimalSection);

babyAnimalSection.onclick = function () {
  babyAnimalSection.innerHTML = `<img src="images/pexels-kat-smith-568022-400w.jpg" alt="Lamb">`;
};
// babyAnimalSection.innerHTML = `<img src="images/pexels-kat-smith-568022-400w.jpg">`;
// babyAnimalSection.innerHTML = `<img src="images/pexels-pixabay-45201-400w.jpg">`;

const container = document.getElementsByClassName("container")[0];
const firstChild = container.firstElementChild;
firstChild.innerHTML = "Please enter your name using lowercase letters only.";

const myTextbox = document.getElementById("my-textbox");
myTextbox.addEventListener("keypress", checkName, false);

let warningTimeout;
const warningBox = document.createElement("div");
warningBox.className = "warning";

function checkName(evt) {
  const charCode = evt.charCode;
  if (charCode !== 0) {
    if (charCode < 97 || charCode > 122) {
      evt.preventDefault();
      displayWarning("Please use lowercase letters only.");
    }
  }
}

function displayWarning(msg) {
  warningBox.innerHTML = msg;

  if (document.body.contains(warningBox)) {
    clearTimeout(warningTimeout);
  } else {
    // insert warningBox after myTextbox
    myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
  }

  warningTimeout = setTimeout(() => {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}
