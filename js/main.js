function hideGameComponents() {
    document.getElementById("endGame").style.display = "none";
    document.getElementById("gameIframe").style.display = "none";
}

function startGame() {
    // Get date from user input
    var date1 = getData("date1");

    var date2 = getData("date2");
    // ?date1=20221001&date2=20220925

    var queryParams = "?date1=" + date1 + "&date2=" + date2;
    var iframe = document.getElementById("gameIframe");
    var iframeSrc = iframe.getAttribute("src");
    var newIframeSrc = iframeSrc + queryParams;
    console.log(newIframeSrc);

    iframe.setAttribute("src", newIframeSrc);

    // Hide play button, show iframe and end game button
    iframe.style.display = "block";
    document.getElementById("startGame").style.display = "none";
    document.getElementById("endGame").style.display = "block";
}

function getData(id) {
    var date = document.getElementById(id).value;
    return date.replaceAll("-", "");
}

function endGame() {
    // Hide iframe and end game button, show play button
    document.getElementById("endGame").style.display = "none";
    document.getElementById("gameIframe").style.display = "none";
    document.getElementById("startGame").style.display = "block";

    document.getElementById("gameIframe").setAttribute("src")
}
