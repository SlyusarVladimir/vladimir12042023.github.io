
var myHTML = document.querySelector('h1');
myHTML.onclick = function() {
	alert('Да здравствует его Величество!')
	};
	var myImage = document.querySelector('img');// замена фотографий
	myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'queen.jpg') {
      myImage.setAttribute ('src','queen2.jpg');
    } else if (mySrc === 'queen2.jpg') {
	myImage.setAttribute ('src','queen1.jpg')
	} else {
      myImage.setAttribute ('src','queen.jpg');
    } 
};
var myButton = document.querySelector('button'); 
var myHeading = document.querySelector('p1');
function setUserSong() {
  var newSong = prompt('Please enter the best new song Queen.');
  localStorage.setItem('name', newSong);
  myHeading.textContent = 'Самой узнаваемой песней группы является : ' + newSong;
}
if(!localStorage.getItem('name')) {
  setUserSong();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Самой узнаваемой песней группы является : ' + storedName;
}
myButton.onclick = function() {
  setUserSong();
}
