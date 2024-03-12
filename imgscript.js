const bugData = [
    { name: "No Bugs!", information: "There are no bugs to see here. Please try another location!" },
    { name: "Dragonfly", image: "images/dragonfly.png", information: "Modern dragonflies have wingspans of about two to five inches. Dragonflies undergo incomplete metamorphosis, including three stages of development (egg, larva and adult). Having a dragonfly land on your head is considered good luck. Their muscles are attached directly to their wings which allows them to fly faster than other insects. They are one of the most accurate hunters as they can fly forward, backward, and upside-down." },
    { name: "Backswimmer", image: "images/Backswimmer.png", information: "Name is given to them because they swim on their backs. Eats aquatic plants and small aquatic insects. Usually complete their lifecycle in 6 months. They have the ability to shoot out of water at once and start flying. There are about 125 species in North America." },
    { name: "Crawfish", image: "images/crawfish.png", information: "Crawfish can shed (molt) their shells up to 15 times and they double in size with each molt. Crawfish are also called crawdads, crayfish and mudbugs. Crawfish can live up to 30 years in the wild. Crawfish can drown without access to fresh air. Crawfish walk forward and swim backward." },
    { name: "Leech", image: "images/leech.png", information: "Has 10 pairs of eyes. They live for about 10 years. Leeches are usually between ½ inch to 18 inches. Live in freshwater ponds and lakes. Not all leeches suck blood. Surgeons keep them on hand in the operating room and use them as mini vacuums to clean up blood." }
    // Add more bug objects as needed
];

function showpopup(content)
{
    const bug = bugData[content];
    // check to make sure index is in list
    document.getElementById('popup-title').innerHTML = bug.name;
    document.getElementById('popup-image').src = bug.image;
    document.getElementById('popup-content').innerHTML = createInformationHtml(bug.information);
    document.getElementById('popup').style.display = "block";
    document.getElementById('popup').classList.remove("hidden");
}

function hidepopup()
{
    document.getElementById('popup').style.display = "none";
}

function createInformationHtml(inputString) {
    // Split the input string by periods to get an array of sentences
    const sentences = inputString.split('.').filter(sentence => sentence.trim() !== '');

    // Start the unordered list
    let informationHtml = '<ul>';

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