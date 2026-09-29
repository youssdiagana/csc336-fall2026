
const rooms = {
  foodCourt: {
    name: "Food Court",
    description: "The smell of food fills the air. You are supposed to meet friends here, but everything seems empty.",
    linkedRooms: [
      { label: "Walk to the fountain", destination: "fountain" },
      { label: "Follow the beeping sounds", destination: "arcade" }
    ]
  },
  arcade: {
    name: "Arcade",
    description: "Flashing lights and loud music. A kid on the racing game yells that he saw someone leave through the parking lot.",
    linkedRooms: [
      { label: "Head back to the food court", destination: "foodCourt" },
      { label: "Run through to the fountain", destination: "fountain" }
    ]
  },
  bookstore: {
    name: "Bookstore",
    description: "Quiet and cozy. The cashier says the exit is past the fountain, through the big glass doors.",
    linkedRooms: [
      { label: "Leave the bookstore", destination: "fountain" }
    ]
  },
  fountain: {
    name: "Fountain",
    description: "Coins shine at the bottom of a fountain. Paths go off in every direction.",
    linkedRooms: [
      { label: "Go toward the food court", destination: "foodCourt" },
      { label: "Go toward the arcade", destination: "arcade" },
      { label: "Browse the bookstore", destination: "bookstore" },
      { label: "Push through the glass doors", destination: "parkingLot" }
    ]
  },
  parkingLot: {
    name: "Parking Lot",
    description: "Fresh air at last! You spot your friends waving next to the car. You escaped the mall!",
    linkedRooms: [
      { label: "Go back inside (why would you?)", destination: "fountain" }
    ]
  }
};

let currentRoom = "foodCourt";
const container = document.querySelector("#game");

function render(room) {
  container.innerHTML = "";

  const heading = document.createElement("h2");
  heading.innerHTML = room.name;

  const description = document.createElement("p");
  description.innerHTML = room.description;

  const exits = document.createElement("div");
  exits.className = "exits";

  for (let i = 0; i < room.linkedRooms.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = room.linkedRooms[i].label;
    // the label is just for reading, so store the destination in the id
    button.id = room.linkedRooms[i].destination;
    button.addEventListener("click", handleClick);
    exits.append(button);
  }

  container.append(heading);
  container.append(description);
  container.append(exits);
}

function handleClick(e) {
  currentRoom = e.target.id;
  render(rooms[currentRoom]);
}

render(rooms[currentRoom]);