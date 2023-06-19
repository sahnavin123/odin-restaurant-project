const home = () => {
  const content = document.getElementById("content");

  //main container is created under content
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const heading = document.createElement("h2");
  heading.innerText = "Foddie Restaurent";
  heading.classList.add("heading-text");
  mainContainer.appendChild(heading);

  // description container is created, it containins description of restaurant
  const descContainer = document.createElement("div");
  descContainer.classList.add("child-container");
  const descText = document.createElement("p");
  descText.classList.add("text");
  descText.innerText =
    "Experience a culinary paradise of vegetarian delights at Foodie Veg Restro, where exquisite flavors and a vibrant ambiance come together for an unforgettable dining experience. Indulge in thoughtfully crafted dishes that ignite your taste buds and create cherished moments with loved ones.";
  descContainer.appendChild(descText);

  //Opening hour continer is created, it contains opening our of the restaurant
  const openingHourContainer = document.createElement("div");
  openingHourContainer.classList.add("child-container");

  const hourText = document.createElement("h4");
  hourText.classList.add("sub-heading");
  hourText.innerText = "Hour";

  const scheduleElement = document.createElement("div");
  scheduleElement.classList.add("time-table");
  const schedule = {
    Sunday: "8am - 8pm",
    Monday: "6am - 6pm",
    Tuesday: "6am - 6pm",
    Wednesday: "6am - 6pm",
    Thursday: "6am - 10pm",
    Friday: "6am - 10pm",
    Saturday: "8am - 10pm",
  };

  for (const day in schedule) {
    const scheduleItem = document.createElement("p");
    scheduleItem.style.fontWeight = "bold";
    scheduleItem.textContent = `${day}: ${schedule[day]}`;
    scheduleElement.appendChild(scheduleItem);
  }
  openingHourContainer.appendChild(hourText);
  openingHourContainer.appendChild(scheduleElement);

  //location container contains address of the restaurant
  const locationContainer = document.createElement("div");
  locationContainer.classList.add("child-container");

  const locationHeadingText = document.createElement("h4");
  locationHeadingText.classList.add("sub-heading");
  locationHeadingText.innerText = "Location";

  const addressText = document.createElement("p");
  addressText.classList.add("text");
  addressText.innerText = "Bangalore, India";
  locationContainer.appendChild(locationHeadingText);
  locationContainer.appendChild(addressText);

  // all the container are appended to mainContainer and then to content container
  mainContainer.appendChild(descContainer);
  mainContainer.appendChild(openingHourContainer);
  mainContainer.appendChild(locationContainer);
  content.appendChild(mainContainer);
};

export default home;
