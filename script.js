typingBox = document.getElementById("typingBox")
button = document.getElementById("testing")

let SentenceBank = [
    { text: "Hello, I am Gurt and I am super cool. Being a Gurt is so awesome and I would not want to change it for the world. I love being a gurt, gurt, gurt. SYBAU GURT", 
     },
    { text: "Greetings  I am not your Gurt you sneaky Gurty" }
];

function RandomSentence() {
    const keys = Object.keys(SentenceBank)

    const randomIndex = Math.floor(Math.random() * SentenceBank.length)
    return SentenceBank[randomIndex].text;

}
function WordSplitter() {
    text = RandomSentence(SentenceBank)
    const splitted_text = text.split("")
    console.log(splitted_text)

}
const text = RandomSentence(SentenceBank)
const splitted_text = text.split("")

typing_test = document.getElementById("typing_text")
typing_test.textContent = text
typingBox.addEventListener("input", () => {

    const currentValue = typingBox.value; 

    for (let i = 0; i < currentValue.length; i++) {
        console.log(`Char ${i}: ${currentValue[i]}`)
        let singular_letter = `${currentValue[i]}`;
        console.log("my singular letter is", singular_letter)
        if (currentValue[i] !== splitted_text[i]) {
            console.log("That is the incorrect letter")
            let WPM = (splitted_text.length - 1)
            console.log([i])
        } else {
            console.log("That is the correct letter")
            console.log([i])

        }
    }
})
//timer function section
let timeLeft = 30;
let timerId = null
function myTimer() {
    document.getElementById("wpm-display").textContent = timeLeft;
    timeLeft--;
    console.log("Input detected")
    if (timeLeft < 0) {
      clearInterval(timerId);
      document.getElementById("wpm-display").textContent = "Typing test over";
    }
  }
  myTimer, { once: true }
  typingBox.addEventListener("input", function () {
    if (timerId === null) { 
        timerId = setInterval(myTimer, 1000);
        console.log("Timer started");
    }
}, { once: true });
