let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "Firefox_logo.png") {
    myImage.setAttribute("src", "Firefox2.png");
  } else {
    myImage.setAttribute("src", "Firefox_logo.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字。");
  localStorage.setItem("name", myName);
  myHeading.textContent = "你真牛逼，" + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "你真牛逼，" + storedName;
}

myButton.onclick = function () {
  setUserName();
};

function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "你真牛逼，" + myName;
  }
}
