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
    document.getElementById('popup').style.display = "none";
}

var content1 = "<h1>Popup</h1><p>This is a popup</p>";
var content2 = "<h1>Popup</h1><p>This is another popup</p>";