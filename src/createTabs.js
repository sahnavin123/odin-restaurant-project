import home from "./home";
import menu from "./menu";
import contact from "./contact";

const createTabs = () => {
  const content = document.getElementById("content");
  const navContainer = document.createElement("nav");
  const navList = document.createElement("ul");

  const createNavItem = (text, action) => {
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");
    navLink.textContent = text;
    navItem.appendChild(navLink);
    navList.appendChild(navItem);

    navLink.addEventListener("click", () => {
      clearContent();
      action();
      setActiveTab(navLink);
    });
  };

  const setActiveTab = (selectedTab) => {
    const navLinks = navList.getElementsByTagName("a");
    for (let i = 0; i < navLinks.length; i++) {
      if (navLinks[i] === selectedTab) {
        navLinks[i].style.backgroundColor = "rgb(241, 241, 108)";
      } else {
        navLinks[i].style.backgroundColor = "rgb(239, 179, 179)";
      }
    }
  };

  createNavItem("Home", home);
  createNavItem("Menu", menu);
  createNavItem("Contact", contact);

  const defaultTab = navList.getElementsByTagName("a")[0];
  setActiveTab(defaultTab);

  navContainer.appendChild(navList);
  content.appendChild(navContainer);
};

const clearContent = () => {
  const content = document.querySelector("#content");
  const mainContainer = document.querySelector(".main-container");
  content.removeChild(mainContainer);
};

export default createTabs;
