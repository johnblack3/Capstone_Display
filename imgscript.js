const bugData = [
    { name: "No Bugs!", information: "There are no bugs to see here. Please try another location!" },
    { name: "Bug Name 1", image: "images/crawfish.png", information: "This is bug 1 information" },
    { name: "Bug Name 2", image: "images/crawfish1.png", information: "This is bug 2 information" },
    { name: "Bug Name 3", image: "images/crawfish.png", information: "This is bug 3 information" },
    { name: "Bug Name 4", image: "images/crawfish1.png", information: "This is bug 4 information" },
    { name: "Bug Name 5", image: "pillbugsslugs01.jpg", information: "This is bug 5 information" },
    // Add more bug objects as needed
];

function showpopup(content)
{
    // check to make sure index is in list
    document.getElementById('popup-title').innerHTML = bugData[content].name;
    document.getElementById('popup-image').src = bugData[content].image;
    document.getElementById('popup-content').innerHTML = bugData[content].information;
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