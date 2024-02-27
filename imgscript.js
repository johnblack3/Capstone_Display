function showpopup(content)
{
    document.getElementById('popup-title').innerHTML = "popup";
    document.getElementById('popup-content').innerHTML = content;
    document.getElementById('popup').style.display = "block";
    document.getElementById('popup').classList.remove("hidden");
}

function hidepopup()
{
    console.log("Hiding popup");
    document.getElementById('popup').style.display = "none";} 

var content1 = "<h1>Popup</h1><p>This is a popup</p>";
var content2 = "<h1>Popup</h1><p>This is another popup</p>";

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