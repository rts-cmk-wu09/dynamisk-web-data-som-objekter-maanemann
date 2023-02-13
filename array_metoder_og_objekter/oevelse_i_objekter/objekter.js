let computerspil = {
    genrer: {
        platformers: ["VVVVVV", "Gato Roboto", "I Wanna Be The Guy"],
        puzzle: ["Myst", "Cocoon", "Full Pipe"],
        walking_sims: ["Dear Ester", "Going Home", "Firewatch"]
    }
};

console.log(computerspil.genrer.platformers[2]);

computerspil.genrer.puzzle.forEach(function(puzzle) {
    console.log(puzzle)
})

const platf = document.querySelector("#platf");
const puzzle = document.querySelector("#puzzle");
const walking = document.querySelector("#walking");

// for (let i=0; i < computerspil.genrer.platformers.length; i++) {
//     platformspil += computerspil.genrer.platformers[i];
// }

// platf.innerHTML = platformspil;

computerspil.genrer.platformers.forEach(function(platformersFX) {
    platf.innerHTML += platformersFX + ", ";
})

computerspil.genrer.puzzle.forEach(function(puzzleFX) {
    puzzle.innerHTML += puzzleFX + ", ";
})

computerspil.genrer.walking_sims.forEach(function(walkingFX) {
    walking.innerHTML += walkingFX + ", ";
})

