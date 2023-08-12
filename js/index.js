const form = document.querySelector ('#github-form')
const userList = document.querySelector ('#user-list')
const userInput = document.querySelector ('#search')


userInput.addEventListener ('input', (event) => {
    event.preventDefault()
    userList.innerHTML = " "
    input = event.target.value
    fetch (`https://api.github.com/search/users?q=${input}`)
    .then (response => response.json())
    .then (data => {
        renderResults (data.items)
    }).catch (error => error)
})

form.addEventListener ('submit', (event) => {
    event.preventDefault()
    userList.innerHTML = " "
    input = event.target.querySelector('#search').value
    fetch (`https://api.github.com/search/users?q=${input}`)
    .then (response => response.json())
    .then (data => {
        renderResults (data.items)
    }).catch (error => error)
    form.reset()
})


function renderResults (datas) {
     for (const data of datas) {
        let li = document.createElement ('li')
        li.innerHTML = `<img src = ${data.avatar_url} style = 'width: 15px'/> ${data.login}`
        li.id = data.id
        userList.append (li)
    }
}


userList.addEventListener ('click', (event) => {
    console.log (event.target.textContent)
    userList.innerHTML = " "
    // fetch (`https://api.github.com/users/${event.target.textContent}/repos`)
    // .then (response => response.json())
    // .then (data => console.log(data))
    // .catch (error => error)
})

