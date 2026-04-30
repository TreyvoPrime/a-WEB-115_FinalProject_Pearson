const typingBox = document.getElementById("typingBox")
button = document.getElementById("testing")
const WPM_stat = document.getElementById("WPM_stat")
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
//split the randomized selected word. 
const text = RandomSentence(SentenceBank)
const splitted_text = text.split("")

typing_test = document.getElementById("typing_text")
typing_test.textContent = text
//detect text input and arrange all processes to get ot the final outputs.
typingBox.addEventListener("input", () => {
    function userTimed() {
        timeUser++;
        console.log("user being timed");
        console.log(timeUser)
    }
    timerId = setInterval(userTimed, 1000);
    const currentValue = typingBox.value; 
    userTimed()
    for (let i = 0; i < currentValue.length; i++) {
        console.log(`Char ${i}: ${currentValue[i]}`)
        let singular_letter = `${currentValue[i]}`;
        console.log("my singular letter is", singular_letter)
        if (currentValue[i] !== splitted_text[i]) {
            console.log("That is the incorrect letter")
            console.log(currentValue.length)
            console.log(splitted_text.length)
            console.log([i])
            let WPM = (splitted_text.length / 1)

    
        } else{
            console.log("That is the correct letter")
            console.log([i])
        }
        if (currentValue[i] == splitted_text[i])  {

        }
      
            
        
    }
})
let timeLeft = 30;
let timerId = null
let timeUser = 0
//timer section
function myTimer() {
    timeLeft--;
    document.getElementById("wpm-display").textContent = timeLeft;
    console.log("Input detected");

    if (timeLeft < 0) {
        clearInterval(timerId);
        document.getElementById("wpm-display").textContent = "Typing test over";
        window.location.href = "completion.html"
  

    }

}


typingBox.addEventListener("input", function () {
    if (timerId === null) {
        timerId = setInterval(myTimer, 1000);
        console.log("Timer started");
    }
}, { once: true }); 
function display_results() {
    WPM_stat.textContent = "gurt"
}
