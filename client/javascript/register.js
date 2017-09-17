
function saveNewUser(username, password) {
  fetch("http://localhost:3000/users", {
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


var newUserBtn = document.querySelector("#newUserButton")

var redirectFunction = function redirection(){
      window.location.href='file:///Users/robdark/Documents/flipcards/client/html/index.html';
   }

newUserBtn.addEventListener("click", function() {
  let username = document.querySelector("#usernameInputField").value
  let password = document.querySelector("#passwordInputField").value

  saveNewUser(username, password)
  // redirectFunction()
})
