function showpopup(content)
{
    document.getElementById('popup').innerHTML = content;
    document.getElementById('popup').style.display = "block";
    document.getElementById('popup').classList.remove("hidden");
}

function hidepopup()
{
    document.getElementById('popup').classList.add("hidden");
}