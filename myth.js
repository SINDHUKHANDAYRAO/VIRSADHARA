// myth.js

// Array of myths related to Indian tradition and culture
const myths = [
    "The Kumbh Mela is said to cleanse the soul, but it's also rumored that one can get lost in the crowd forever.",
    "If you see a black cat crossing your path, it is considered bad luck, especially during Diwali.",
    "It is believed that if you visit a ghost temple at midnight, you will hear whispers from the spirits.",
    "Some say that the ancient practice of yoga can unlock supernatural abilities, but only if performed in sacred locations.",
    "Drinking water from a particular well in Kerala is believed to cure any ailment, yet few return unchanged.",
    "It's said that if you disturb a snake's den, you may invoke the wrath of the Naga, leading to severe misfortune.",
    "The tales of the Chudail, a spirit of a woman wronged, suggest she can take revenge on men during the full moon.",
    "The legend of the Haunted Fort of Bhangarh warns that those who enter after dark will never return."
];

// Function to select a random myth
function getRandomMyth() {
    const randomIndex = Math.floor(Math.random() * myths.length);
    return myths[randomIndex];
}

// Display the random myth in the designated paragraph
document.getElementById("myth").textContent = getRandomMyth();
