console.log('Hello World!');

  let noclicks= 0;
var copied=false;
const button = document.getElementById('random-button');
var msg=document.querySelector('.message');
var done=document.querySelector('.done');
const img = document.querySelector('#img')
button.addEventListener('click', () => {
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const buttonWidth = button.offsetWidth;
const buttonHeight = button.offsetHeight;

const x = Math.floor(Math.random() * (screenWidth - buttonWidth));
const y = Math.floor(Math.random() * (screenHeight - buttonHeight));

button.style.position = 'absolute';
button.style.left = `${x}px`;
button.style.top = `${y}px`;

  const messages = [
    "",
    "Are you sure? 😜",
    "Think again! 🤔",
    "Pls I love you 🥲",
    "Don't be so mean! 😭",
    "Come on, just click yes! 🤗",
    "Not the 'No' again! 🤧",
    "Pls now, Don't do like this... 🥺",
    "Fine, I give up... 😔",
    "I guys I'll do my val without you!😤",
    "byee¡ 😞",
    
  ];
const src = [
    "",
    "20250210_122803.gif",
    "muach.gif",
   "kiss-i-love-you.gif",
   "Snapchat-835346411.jpg",
   '/cat.gif',
   '/giphy (1).gif',
   '/goma-cat-fall-backwards.webp',
   '/cat-graycat.webp',
   '/20250210_122803.gif',
   '/besito-catlove.webp'
  ]
    if (noclicks <=9) {
      noclicks=noclicks + 1;
      msg.innerHTML=messages[noclicks];
img.src=src[noclicks]
    }
    else{
      button.style.display='none'
    }

//
//  const handleSureClick = () => {
//    setShowCard(true);
 // };

//  const handleDoneClick = () => {
   // 
 //   setShowCard(false);
//  };

/*
  const handleCopy = () => {
    const accountNumber = "0086622465";
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  */
console.log(noclicks)
});

var yesbn=document.querySelector('.yesbn');
yesbn.addEventListener('click',()=>{
  alert("Thanks for Clicking Yes! I Love You❤️");
  img.src='/giphy.gif';
  msg.innerText='Hurray!! I Love You So Much!🥰'
  //document.querySelector('.card').style.display='flex';
  const accountNumber = "0939884141";
});







const toastNotification = document.getElementById('toast-notification');
const toastMessage = document.getElementById('toast-message');


function showToast() {
toastNotification.classList.remove('toast-hidden');
toastNotification.classList.add('toast-visible');
copied=true;
// Hide the toast after 2 seconds
navigator.clipboard.writeText("0939884141")
setTimeout(() => {
  toastNotification.classList.remove('toast-visible');
  toastNotification.classList.add('toast-hidden');
}, 2000);



// Example usage:

}

/*navigator.clipboard.writeText("Text to copy").then(() => {
showToast("Copied to clipboard!");
}).catch((error) => {
console.error("Error copying text: ", error);
});*/
done.onclick=()=>{
  if (copied===true) {
  document.querySelector('.card').style.display='none';
  alert('Thanks for the funds💸, I Really appreciate🙏');
 // msg.innerHTML='Thanks For The Funds😁🙏';
  
  }
  else{
    alert('You Can Not Decieve Me😂, Copy the Account No First. Thanks🙏')
  }
}