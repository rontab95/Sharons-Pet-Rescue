const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,

    sleep: function () {
      console.log(`${name} needs a nap`);
      this.isTired = 1;
    },
    play: function () {
      if (pet.isTired >= 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`Yay! ${name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "Rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("francine", "turtle");

// console.log(sora, clover, baxter, cleo, francine);
// clover.play();
// console.log(clover.isTired);
// baxter.sleep();
// console.log(baxter.isTired);
clover.isTired = 8;
francine.isTired = 9;

let allPets = [sora, clover, baxter, cleo, francine];
// console.log(allPets);

let showPets = function (petArray) {
  pets.innerHTML = "";

  for (let pet of allPets) {
    if (pet.isTired >= 7) {
      pets.status = "Sleeping";
    } else {
      pets.status = "Ready to Play";
    }

    var li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${pets.status}`;

    console.log(li);
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});
