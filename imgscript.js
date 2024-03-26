let currentQuest = 1;
const totalQuest = document.querySelectorAll('.question').length;
let quizMode = false;
let currentPopupIndex = 0;

const bugData = [
    { name: "No Bugs!", information: "There are no bugs to see here. Please try another location!" },
    { name: "Crawfish", image: "images/SCEC_crayfish.jpeg", information: "Crawfish can shed (molt) their shells up to 15 times and they double in size with each molt. Crawfish are also called crawdads, crayfish and mudbugs. Crawfish can live up to 30 years in the wild. Crawfish can drown without access to fresh air. Crawfish walk forward and swim backward." },
    { name: "Mayfly Larva", image: "images/SCEC_mayfly_larva.jpeg", information: "Mayflies have been around for more than 300 million years. Can only live in clean water and good habitat. They eat tiny living plants and tiny pieces of dead plants and animals. Mayflies live underwater in streams for most of their lives (as larvae). Transform into adult insects that are able to fly."},
    { name: "Stonefly Larva", image: "images/SCEC_stonefly_larva.jpeg", information: "The stonefly ranges in size from 6 to more than 60 mm (1/4 to 3 inches). Each female may produce as many as 6,000 eggs, which are dropped in masses into a stream. Feed on plants, decaying organic matter, and other insects. Important biotic indicators of water quality. The nymphal stage lasts from one to four years, and the adults live several weeks."},
    { name: "Dragonfly", image: "images/dragonfly.png", information: "Modern dragonflies have wingspans of about two to five inches. Dragonflies undergo incomplete metamorphosis, including three stages of development (egg, larva and adult). Having a dragonfly land on your head is considered good luck. Their muscles are attached directly to their wings which allows them to fly faster than other insects. They are one of the most accurate hunters as they can fly forward, backward, and upside-down." },
    { name: "Backswimmer", image: "images/Backswimmer.png", information: "Name is given to them because they swim on their backs. Eats aquatic plants and small aquatic insects. Usually complete their lifecycle in 6 months. They have the ability to shoot out of water at once and start flying. There are about 125 species in North America." },
    { name: "Leech", image: "images/leech.png", information: "Has 10 pairs of eyes. They live for about 10 years. Leeches are usually between ½ inch to 18 inches. Live in freshwater ponds and lakes. Not all leeches suck blood. Surgeons keep them on hand in the operating room and use them as mini vacuums to clean up blood." }
    // Add more bug objects as needed
];

//Shows popup of bug information
function showpopup(content)
{
    quizMode = false;
    currentPopupIndex = content;
    const bug = bugData[content];
    // Need to check to make sure index is in list
    document.getElementById('popup-title').innerHTML = bug.name;
    document.getElementById('popup-image').src = bug.image;
    document.getElementById('popup-content').innerHTML = createInformationHtml(bug.information);
    var popup = document.getElementById('popup')
    popup.style.display = "block";
    popup.classList.remove("hidden");

    window.onclick = function(event) {
        if (event.target == document.getElementById('main-img')) {
            popup.style.display = "none";
        }
    }
}

function hidepopup()
{
    document.getElementById('popup-image').src = '';
    document.getElementById('popup').style.display = "none";
}

// Show popup quiz
function showquiz()
{
    quizMode = true;
    document.getElementById('popup-title').innerHTML = "What is this bug?";
    document.getElementById('popup-image').src = "";
    document.getElementById('popup-content').innerHTML = createquiz();
    document.getElementById('popup').style.display = "block";
    document.getElementById('popup').classList.remove("hidden");
}

let currentQuestionIndex = 0;
let previousQuestions = [] // {index, selected}

// Create popup quiz
function createquiz() {
    console.log(previousQuestions);
    // Select a random bug from bugData
    const randomBugIndex = Math.floor(Math.random() * (bugData.length - 1)) + 1; // Exclude the first item ("No Bugs!")
    const selectedBug = bugData[randomBugIndex];

    // Generate HTML for the quiz with the selected bug
    let quizHTML = `<div class="quiz-container">
                        <img id="popup-image" src="${selectedBug.image}" alt="Quiz Image" class="quiz-image">
                        <div class="answer-container">`;

    // Generate answer options
    const correctAnswerIndex = Math.floor(Math.random() * 4) + 1; // Randomize the position of the correct answer
    const uniqueBugIndices = [randomBugIndex]; // Array to store indices of unique bugs
    for (let i = 1; i <= 4; i++) {
        let bugIndex;
        if (i === correctAnswerIndex) {
            bugIndex = randomBugIndex;
        } else {
            // Select a random bug index that is not already chosen
            do {
                bugIndex = Math.floor(Math.random() * (bugData.length - 1)) + 1;
            } while (uniqueBugIndices.includes(bugIndex));
        }
        uniqueBugIndices.push(bugIndex);
        quizHTML += `<div id="ans${i}" class="answer-option" onclick="checkAnswer(${i}, ${correctAnswerIndex})">${bugData[bugIndex].name}</div>`;
    }

    // Close the answer container and quiz container
    quizHTML += `</div></div>`;

    // previousQuestions[currentQuestionIndex] = {index: randomBugIndex}

    // Return the combined HTML for the quiz and the next button
    return quizHTML;
    
    // return quizHTML;
}

function nextQuestion() {
    if (quizMode){
        // Increment the current question index
        currentQuestionIndex++;

        // Regenerate the quiz with the next question
        document.getElementById('popup-content').innerHTML = createquiz();
    } else {
        if (currentPopupIndex == bugData.length - 1){
            currentPopupIndex = 1;
        } else {
            currentPopupIndex++;
        }
        showpopup(currentPopupIndex);
    }
    
}

function goBack() {
    if (quizMode){
        if(currentQuestionIndex > 0){
            currentQuestionIndex--;
            document.getElementById('popup-content').innerHTML = createquiz();
        }
    } else {
        if (currentPopupIndex == 1){
            currentPopupIndex = bugData.length - 1;
        } else {
            currentPopupIndex--;
        }
        showpopup(currentPopupIndex);
    }
    
}

function checkAnswer(selectedOption, correctOption) {
    // Implement logic to check the selected answer
    console.log(`Selected option: ${selectedOption}`);
    if (selectedOption == correctOption){
        // var elements = document.getElementsByClassName('answer-option');
        // for (var i = 0; i < elements.length; i++) {
        //     elements[i].style.backgroundColor = '#3498db';
        // }
        document.getElementById('ans' + selectedOption).style.backgroundColor = 'green';
    } else {
        // var elements = document.getElementsByClassName('answer-option');
        // for (var i = 0; i < elements.length; i++) {
        //     elements[i].style.backgroundColor = '#3498db';
        // }
        document.getElementById('ans' + selectedOption).style.backgroundColor = 'red'
    }
}

function createInformationHtml(inputString) {
    // Split the input string by periods to get an array of sentences
    const sentences = inputString.split('.').filter(sentence => sentence.trim() !== '');

    // Start the unordered list
    let informationHtml = '<ul style="padding-right: 40px;">';

    // Loop through the sentences and add each as a list item
    sentences.forEach(sentence => {
        informationHtml += '<li>' + sentence.trim() + '.</li>';
    });

    // Close the unordered list
    informationHtml += '</ul>';

    // Return the constructed HTML
    return informationHtml;
}

function zoomin()
{
    console.log("Zooming in");
    document.getElementById('zoom-container').style.transform = "scale(1)";
}

function showimage(content)
{
    document.getElementById('zoom-image').src = bugData[content].image;
}

function zoomout()
{
    console.log("Zooming out");
    document.getElementById('zoom-container').style.transform = "scale(0)";
}

function closezoom()
{
    console.log("Closing zoom");
    document.getElementById('zoom-container').style.display = "none";
}

/*
function goBack()
{
    if (currentQuest > 1) {
        currentQuest--;
        updateProgress()
    }
}

function nextQuestion() 
{
    if (currentQuest < totalQuest) {
        currentQuest++;
        updateProgress()
    }
}

function updateProgress()
{
    const progressBar = document.getElementById('progressBar');
    const progress = (currentQuest / totalQuest) * 100;
    progressBar.style.width = '${progress}%';
}
*/

// function showpopup() {
//     // Get the popup element
//     const popup = document.getElementById("popup");
  
//     // Get the element containing the point information
//     const popupText = document.getElementById("popup-text");
  
//     // Update the popup text with the provided content
//     // popupText.innerHTML = content;
  
//     // Remove the "hidden" class to show the popup
//     popup.classList.remove("hidden");

//     console.log("show popup");
//   }
  
//   function hidepopup() {
//     // Get the popup element
//     const popup = document.getElementById("popup");
  
//     // Add the "hidden" class to hide the popup
//     popup.classList.add("hidden");

//     console.log("hide popup");
//   }