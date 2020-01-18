document.querySelector('#easyPass').addEventListener('click', function(){
    var passLength = 8
    var password = []
    var usables = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9]
    console.log(usables)
        for (i = 1; i <= passLength; i++) {
            var digit = Math.floor(Math.random() * 36)
            console.log(digit)
            password.push(digit)

        }
    var realPass = []
    console.log(password)
        for (i = 0; i < password.length; i++) {
            var pleaseGod = usables[password[i]]
            console.log(pleaseGod)
            realPass.push(pleaseGod)
        }
    console.log(realPass)
    console.log(realPass.join(''))
    
    var passBox = document.createElement('h1')
    passBox.textContent = 'Your password is ' + realPass.join('')
    document.querySelector('.content-box').appendChild(passBox)
    })  
document.querySelector('#customPass').addEventListener('click', function() {

})