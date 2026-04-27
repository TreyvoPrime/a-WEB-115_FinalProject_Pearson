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
typing_test = document.getElementById("typing_text")
typing_test.textContent = text
typingBox.addEventListener("input", () => {

    const currentValue = typingBox.value; 

    for (let i = 0; i < currentValue.length; i++) {
        console.log(`Char ${i}: ${currentValue[i]}`)
        singular_letter =  `${currentValue[i]}`
        console.log("my singular letter is", singular_letter)
        for  (let i = 0; i < currentValue.length; i++) {

        }
    }
})
