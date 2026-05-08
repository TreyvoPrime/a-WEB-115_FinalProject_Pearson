# TeloType typing speed test
**WEB-115 Final Project Proposal**
Student: [Treyvon Pearson ] | Repo: `WEB-115_FinalProject_[Pearson]`
Live Site - https://treyvoprime.github.io/a-WEB-115_FinalProject_Pearson/
---

## Overview
This is a web application that allows users to test their typing speeds and accuracy. The application would include random sentences that are given for the user to type. The user is graded on their WPM, and accuracy after the test is over.
With Local Storage user attempts and best accuracy is saved acrossed sessions. 

---

## Features

- timed typing test
- accuracy results
- WPM results
- accuracy and WPM saving across sesssions
- highest WPM and Accuracy displayed
- specific letters that are either correct or incorrect will have be noted as accurate or inaccurate. 

---

## Core Requirements Coverage

| Requirement | Implementation |
|---|---|
| **If Statements & Loops** | loop through user inputted text and compare it to the sentence text to see if the text aligns correctly either marking incorrect or correct. If statements used to detect if a letter aligns with the letter of the sentence needing to be typed.|
| **Event Listeners** | input eventListener to take inputs of text from textarea and process it to detect it's alignment to the sentance origianlly generated to be typed.  |
| **DOM Element Creation** |The text that needs to be typed will be randomly grabbed from the array of sentences. It will be displayed in a header element and text that is typed in the textarea below it will update each letter of how the header looks depending if it's correct or incorrect. |
| **Classes & Subclasses** | A class for creating the results elements.  A subclass for displaying LocalStorage previous accuracy and WPM. |

---

## DLC — Additional Topics

### JSON & Local Storage
WPM and accuracy will be saved across sessions for localStorage. The user can return back to the web application and see their previous accuracy and typing speed.


---

## Tech Stack

- HTML, CSS,  JavaScript
- `localStorage` for saving WPM and accuracy stats. 
- HTML Canvas for bracket rendering
- VS Code and Github
