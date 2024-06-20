document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var title = document.querySelector("title").innerText;
      alert("Заголовок документа: "+ title)
    }, 2000);
  });

  function addNewElement() {
    var newElement = document.createElement("p");
    newElement.innerText = "Дата рождения: 29.07.2006";
    var element1 = document.getElementById("element1");
    element1.parentNode.insertBefore(newElement, element1.nextSibling);
  }

  function applyStyles() {
    var element = document.getElementById("element1");
    element.style.color = "red";
    element.style.backgroundColor = "blue";
    element.style.fontFamily = "Arial";
    element.style.border = "1px solid green";
  }

  function openUserInfoWindow() {
    var browserInfo = navigator.userAgent;
    var osInfo = navigator.platform;
    var userInfoText = "Браузер: " + browserInfo + "\n" + "Операционная система: " + osInfo;
    var userInfoWindow = window.open("", "_blank", "width=1400,height=300");
    userInfoWindow.document.write("<pre>" + userInfoText + "</pre>");
    setTimeout(function() {
      userInfoWindow.close();
    }, 5000);
  }