//HTML ID CALLS
const typingBox = document.getElementById("typingBox")
button = document.getElementById("testing")
const WPM_stat = document.getElementById("WPM_stat")
const ParentDiv = document.getElementById("statistics")

//bank of sentences
let SentenceBank = [
    { text: "Hello, I am Gurt and I am super cool. Being a Gurt is so awesome and I would not want to change it for the world. I love being a gurt, gurt, gurt. SYBAU GURT" },
    { text: "Greetings I am not your Gurt you sneaky Gurty." },
    { text: "Hello The Big Bird. The Big Bird is immaculate I love flying next to the big bird as he is a amazing figure. " },
    { text: "are you, are you coming to the tree? They strung up a man, they say who murdered three Strange things did happen here, no stranger would it be if we met at midnight in the hanging tree " },

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

// prevents duplicate results
let testFinished = false

typingBox.addEventListener("input", () => {
    let correctChars = 0;
    //getting the current value of the typing box
    //changes each time a letter is typed into the box
    const currentValue = typingBox.value;

    for (let i = 0; i < currentValue.length; i++) {
        console.log(`Char ${i}: ${currentValue[i]}`)

        let singular_letter = `${currentValue[i]}`;
        console.log("my singular letter is", singular_letter)
        //detect if a letter is incorrect or correct for further process 
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
    if (
        !testFinished &&
        (
            currentValue.length >= text.length ||
            timeLeft == 0
        )
    ) {

        testFinished = true

        console.log("Finished typing");
        console.log("Time taken:", timeUser, "seconds");

        clearInterval(timerId);
        clearInterval(countUpTimerId);

        timerId = null;
        countUpTimerId = null;

        // calculate WPM
        let wordsTyped = text.trim().split(" ").length;
        let minutes = timeUser / 60;

        // prevents divide by 0
        if (minutes === 0) {
            minutes = 1 / 60;
        }

        let WPM = Math.round(wordsTyped / minutes);

        // calculating the accuracy
        console.log("WPM:", WPM);
        console.log("Accuracy", accuracy)

        const stats = new TypingResults(WPM, accuracy.toFixed(1));
        stats.display(ParentDiv);

        let previousWPM = localStorage.getItem("WPM");
        let previousAccuracy = localStorage.getItem("Accuracy");
        
        // display previous WPM 
        if (previousWPM !== null) {
        
            const stats = new ExtendedResults(WPM, accuracy.toFixed(1), previousWPM);

        }
        
        // display previous accuracy 
        if (previousAccuracy !== null) {
        
            const stats = new ExtendedResults(WPM, accuracy.toFixed(1), previousAccuracy);

        }
        
        // NOW save the new stats
        localStorage.setItem("WPM", WPM);
        localStorage.setItem("Accuracy", accuracy.toFixed(1));
        

    stats.displayDetailed(ParentDiv);
    }
})
class TypingResults {
    constructor(wpm, accuracy) {
        this.wpm = wpm;
        this.accuracy = accuracy;
    }

    display(ParentDiv) {
        // Create WPM paragraph
        let WPM_p = document.createElement("p");
        WPM_p.classList.add("wpm-result"); 
        WPM_p.textContent = `Your WPM: ${this.wpm}`;
        ParentDiv.appendChild(WPM_p);

        // Create accuracy paragraph
        let accuracy_p = document.createElement("p");
        accuracy_p.classList.add("accuracy-result"); 
        accuracy_p.textContent = `Your accuracy ${this.accuracy}%`;
        ParentDiv.appendChild(accuracy_p);
    }
}
class ExtendedResults extends TypingResults {
    constructor(wpm, accuracy, prevWpm, prevAcc) {
        // super calls the constructor of TypingResults
        super(wpm, accuracy); 
        this.prevWpm = prevWpm;
        this.prevAcc = prevAcc;
    }

    displayDetailed(ParentDiv) {
        this.display(ParentDiv);
        //display the previous results on Words per minute
        if (this.prevWpm) {
            let prevWpm_p = document.createElement("p");
            prevWpm_p.classList.add("previous-stat");
            prevWpm_p.textContent = `Previous WPM: ${this.prevWpm}`;
            ParentDiv.appendChild(prevWpm_p);
        }
        //display the previous results for accuracy
        if (this.prevAcc) {
            let prevAcc_p = document.createElement("p");
            prevAcc_p.classList.add("previous-stat");
            prevAcc_p.textContent = `Previous Accuracy: ${this.prevAcc}%`;
            ParentDiv.appendChild(prevAcc_p);
        }
    }
}
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

        document.getElementById("wpm-display").textContent =
            "Typing test over";

        // triggers finish if timer ends first
        if (!testFinished) {
            typingBox.dispatchEvent(new Event("input"));
        }
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
