// Create your HTML Page via DOM Methods here!
let header = document.createElement('h1')
let subHeader = document.createElement('h2')
let image = document.createElement('img')
let favsList = document.createElement('ul')
let listItem = document.createElement('li')

document.querySelector('body').style.textAlign = 'center'
header.innerHTML = 'Welcome to my site'
subHeader.innerHTML = 'My name is Quinn'
image.src = 'https://images.unsplash.com/photo-1602035971890-9f6e58ce008f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
listItem.innerHTML = 'Ice Cream'

document.body.appendChild(header)
document.body.appendChild(subHeader)
document.body.appendChild(image)
document.body.appendChild(favsList)
favsList.innerHTML = 'My favorite foods:'
favsList.append(listItem)
