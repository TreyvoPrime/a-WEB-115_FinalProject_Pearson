//HTML ID CALLS
const typingBox = document.getElementById("typingBox")
button = document.getElementById("testing")
const WPM_stat = document.getElementById("WPM_stat")
const ParentDiv = document.getElementById("statistics")
//bank of sentences
let SentenceBank = [
    { text: "Hello, I am Gurt and I am super cool. Being a Gurt is so awesome and I would not want to change it for the world. I love being a gurt, gurt, gurt. SYBAU GURT" },
    { text: "Greetings  I am not your Gurt you sneaky Gurty" },
    { text: "Hello The Big Bird. The Big Bird is immaculate I love flying next to the big bird as he is a amazing figure. " },
];
//function to pull a random sentence from the sentence bank
function RandomSentence() {
    const randomIndex = Math.floor(Math.random() * SentenceBank.length)
    return SentenceBank[randomIndex].text;
}
//Split the text into a iterable list
const text = RandomSentence()
const splitted_text = text.split("")

typing_test = document.getElementById("typing_text")
typing_test.textContent = text
let accuracy = 100
typingBox.addEventListener("input", () => {
    let correctChars = 0;

    const currentValue = typingBox.value; 

    for (let i = 0; i < currentValue.length; i++) {
        console.log(`Char ${i}: ${currentValue[i]}`)

        let singular_letter = `${currentValue[i]}`;
        console.log("my singular letter is", singular_letter)

        if (currentValue[i] !== splitted_text[i]) {
            console.log("That is the incorrect letter")
        } else {
            console.log("That is the correct letter")
            correctChars++
        }
    }
    // calculating the accuracy

    if (currentValue.length > 0) {
        accuracy = (correctChars / currentValue.length) * 100;

    } else {
        accuracy = 100
    }

    // finish condition
    if (currentValue.trim().length === text.trim().length || currentValue.trim().length >= text.trim().length  || timeLeft ==0) {
        console.log("Finished typing");
        console.log("Time taken:", timeUser, "seconds");

        clearInterval(timerId);
        clearInterval(countUpTimerId);

        timerId = null;
        countUpTimerId = null;

        // calculate WPM
        let wordsTyped = text.trim().split(" ").length;
        let minutes = timeUser / 60;
        let WPM = Math.round(wordsTyped / minutes);
        // calculating the accuracy

        console.log("WPM:", WPM);
        console.log("Accuracy", accuracy)
        document.getElementById("wpm").textContent =  `Your WPM: ${WPM}`
        accuracy_p = document.createElement("p")
        accuracy_p.textContent = `Your accuracy ${accuracy}$`
        ParentDiv.appendChild(accuracy_p)
        localStorage.setItem("WPM", WPM);
     
        let savedUser = Number(localStorage.getItem("WPM"));
        console.log(savedUser); 
        document.getElementById("prev_wpm").textContent =  `Your Previous WPM: ${savedUser}`


    }
})

let timeLeft = 30;
let timerId = null
let timeUser = 0
let countUpTimerId = null
//countdown timer function
function myTimer() {
    timeLeft--;
    document.getElementById("wpm-display").textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timerId);
        clearInterval(countUpTimerId);

        timerId = null;
        countUpTimerId = null;

        document.getElementById("wpm-display").textContent = "Typing test over";
    }
}
//user timer to see how much time it takes the user
function userTimed() {
    timeUser++;
    console.log("Seconds typed:", timeUser)
}

typingBox.addEventListener("input", function () {
    if (timerId === null) {
        timerId = setInterval(myTimer, 1000);
        countUpTimerId = setInterval(userTimed, 1000);
        console.log("Timer started");
    }
}, { once: true }); 

function display_results() {
    wpm.textContent =  `Your WPM: ${WPM}`
}
