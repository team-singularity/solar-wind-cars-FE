function postData() {
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
}

function getData(id) {
    var date = document.getElementById(id).value;
    return date.replaceAll("-", "");
}
