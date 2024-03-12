const bugData = [
    { name: "No Bugs!", information: "There are no bugs to see here. Please try another location!" },
    { name: "Dragonfly", image: "images/dragonfly.png", information: "This should be an unordered list" },
    { name: "Backswimmer", image: "images/Backswimmer.png", information: "This should be an unordered list" },
    { name: "Crawfish", image: "images/crawfish.png", information: "This should be an unordered list" },
    { name: "Leech", image: "images/leech.png", information: "This should be an unordered list" }
    // Add more bug objects as needed
];

function showpopup(content)
{
    const bug = bugData[content];
    // check to make sure index is in list
    document.getElementById('popup-title').innerHTML = bug.name;
    document.getElementById('popup-image').src = bug.image;
    document.getElementById('popup-content').innerHTML = bug.information;
    document.getElementById('popup').style.display = "block";
    document.getElementById('popup').classList.remove("hidden");
}

function hidepopup()
{
    document.getElementById('popup').style.display = "none";
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