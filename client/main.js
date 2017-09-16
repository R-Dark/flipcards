let usersBtn = document.querySelector('#usersBtn')




function loadFlipUsers() {
  fetch("http://localhost:3000/users")
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      let users = json
      let usersList = document.querySelector('#usersList')
      for (var i = 0; i < users.length; i++) {
        let li = document.createElement("li")
        li.innerHTML = users[i].username
        usersList.appendChild(li)
      }
    }).catch(function(error) {
      console.log('parsing failed', error)
    })
}

usersBtn.addEventListener('click', function(){
  loadFlipUsers()
})
