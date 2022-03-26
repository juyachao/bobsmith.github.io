let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
}

let myButton = document.querySelector('button#qhyh');
let myButton1 = document.querySelector('button#qcyh');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  let myName1 = localStorage.getItem('name');
  if (!myName || myName === null) {
    if (!myName1 || myName1 === null) {
      myHeading.innerHTML = 'Mozilla 酷毙了';
    } else {
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName1;
    }
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}



function clearUserName() {
  let myName1 = localStorage.getItem('name');
  if (myName1) {
    localStorage.setItem('name', "");
    myHeading.innerHTML = 'Mozilla 酷毙了';
  }
}



if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function () {
  setUserName();
}

myButton1.onclick = function () {
  clearUserName();
}