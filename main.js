// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const error = document.getElementById("modal");
error.className = "hidden";

const hearts = document.querySelectorAll(".like-glyph")

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    if (heart.className === "like-glyph") {
    mimicServerCall()
    .then(() => {
      heart.className = "activated-heart";
      heart.innerText = `${FULL_HEART}`      
    })
    .catch((message) => {      
      error.className = "";
      error.innerText = `${message}`;
      setTimeout(() => error.className = "hidden", 3000);
    })
  } else if (heart.className === "activated-heart") {
    mimicServerCall()
    .then(() => {
      heart.className = "like-glyph";
      heart.innerText = `${EMPTY_HEART}`      
    })
    .catch((message) => {
      error.className = "";
      error.innerText = `${message}`;
      setTimeout(() => error.className = "hidden", 3000);
    })
  }
}) 
  }
)

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
