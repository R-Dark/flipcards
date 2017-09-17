
function loginUser(username, password) {
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
}


var loginButton = document.querySelector("#loginButton")

var redirectFunction = function redirection(){
      window.location.href='file:///Users/robdark/Documents/flipcards/client/html/index.html';
   }

loginButton.addEventListener("click", function() {
  let username = document.querySelector("#usernameLogin").value
  let password = document.querySelector("#passwordLogin").value

  loginUser(username, password)
  // redirectFunction()
})
