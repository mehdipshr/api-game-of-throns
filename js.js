const container = document.getElementById('container');
const gotBtn = document.getElementById('got-btn');
const jsonBtn = document.getElementById('json-btn');

// GOT API
gotBtn.addEventListener('click', function() {
    container.innerHTML = '';
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://thronesapi.com/api/v2/Characters/')
    myRequest.responseType = 'json'
    myRequest.onreadystatechange = function(){
        if( myRequest.readyState === 4 && myRequest.status === 200 ){
            printData(myRequest.response)
        }
    }
    myRequest.send()
})
// Print the GOT data
function printData(data){
    for(var i=0; i<data.length; i++){
        let newUser = document.createElement("div")
        newUser.setAttribute('class', 'character')
        
        let userImage = document.createElement('img')
        userImage.setAttribute('src', data[i].imageUrl)
        userImage.setAttribute('alt', data[i].fullName)
        userImage.setAttribute('class', 'character-image')

        let userFamily = document.createElement('h1')
        userFamily.innerText = data[i].family

        let userTitle = document.createElement('h3')
        userTitle.innerText = data[i].title
        
        newUser.appendChild(userImage)
        newUser.appendChild(userFamily)
        newUser.appendChild(userTitle)
        container.appendChild(newUser)
    }
}


// JSON API
jsonBtn.addEventListener('click', function(){
    container.innerHTML = '';
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://jsonplaceholder.typicode.com/users')
    myRequest.responseType = 'json'
    myRequest.onreadystatechange = function(){
        if( myRequest.readyState === 4 && myRequest.status === 200 ){
            printJsonData(myRequest.response)
        }
    }
    myRequest.send()
})
// Print the JSON user data
function printJsonData(data){
    for( var i=0; i<data.length; i++){
        let newUser = document.createElement("div")
        newUser.setAttribute('class', 'character')

        let userName = document.createElement('h1')
        userName.innerText = data[i].name

        let userPhone = document.createElement('h3')
        userPhone.innerText = data[i].phone

        newUser.appendChild(userName)
        newUser.appendChild(userPhone)
        container.appendChild(newUser)
    }
}
