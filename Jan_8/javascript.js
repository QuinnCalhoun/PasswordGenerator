document.querySelector('#easyPass').addEventListener('click', function(){
    var passLength = 8
    var password = []
    var usables = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9]
    console.log(usables)
        for (i = 0; i <= passLength; i++) {
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
    passBox.setAttribute('class', 'convenientClass')
    passBox.textContent = 'Your password is ' + realPass.join('')
    document.querySelector('.content-box').appendChild(passBox)

    var resetBut = document.querySelector('#customPass')
    resetBut.textContent = "Reset"
        if (resetBut.textContent === "Reset") {
            resetBut.addEventListener('click', function(){
                location.reload()
            })
            var offSwitch = document.querySelector('#easyPass')
            offSwitch.disabled = true
        }
    })

document.querySelector('#customPass').addEventListener('click', function() {
    var passLength = 8
    var charTypes = {letters:'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', numbers:'0123456789', specialChar: '!@#$%^&*,.<>'}
    console.log(charTypes)

    var newTitle = document.createElement('h1')
    newTitle.textContent = 'Lets Make a Password!'
    newTitle.setAttribute('class', 'convenientClass')
    var targetArea = document.querySelector('.background')
    targetArea.insertBefore(newTitle, targetArea.children[1])

    var goodBye = document.querySelector('.content-box')
    goodBye.style.display = 'none'

    var charCount = document.createElement('h2')
    charCount.textContent = 'How many characters should your password be?'
    charCount.setAttribute('class', 'pClass')
    var targetArea = document.querySelector('.background')
    targetArea.insertBefore(charCount, targetArea.children[2])

    var count = document.createElement('input')
    count.setAttribute('class', 'lengthInput')
    count.setAttribute('placeholder', 'From 8 - 128 Digits')
    var targetArea = document.querySelector('.background')
    targetArea.insertBefore(count, targetArea.children[3])

    var confirm = document.createElement('input')
    confirm.setAttribute('type', 'submit')
    confirm.setAttribute('class', 'confirmer')
    confirm.textContent = 'Confirm'
    var targetArea = document.querySelector('.background')
    targetArea.insertBefore(confirm, targetArea.children[4])
    
    document.querySelector('.confirmer').addEventListener('click', function() {
    var lengthChoice = document.querySelector('.lengthInput').value
    console.log(lengthChoice)
    if (parseInt(lengthChoice) > 7 && parseInt(lengthChoice) < 128) {
        localStorage.setItem('passwordLength', lengthChoice)
        charChoices()
    }else {
        return
    }
    function charChoices() {
        var alf = document.createElement('h2')
        alf.setAttribute('class', 'pClass')
        alf.textContent = 'Would you like to include numbers?'
        var targetArea = document.querySelector('.background')
        targetArea.insertBefore(alf, targetArea.children[5])

        var confirm = document.createElement('input')
        confirm.setAttribute('type', 'submit')
        confirm.setAttribute('class', 'confirm2')
        confirm.setAttribute('value', 'Yes')
        var targetArea = document.querySelector('.background')
        targetArea.insertBefore(confirm, targetArea.children[6])
        
        var negate = document.createElement('input')
        negate.setAttribute('type', 'submit')
        negate.setAttribute('class', 'negater')
        negate.setAttribute('value', 'No')
        var targetArea = document.querySelector('.background')
        targetArea.insertBefore(negate, targetArea.children[7])

        document.querySelector('.confirm2').addEventListener('click', function(){
            var yesNumbers = true
            console.log(yesNumbers)
            if (yesNumbers == true) {
            localStorage.setItem('Numbers', 'true')
            charChoices2()
        }
        })
        document.querySelector('.negater').addEventListener('click', function(){
            var noNumbers = true
            console.log(noNumbers)
            if (noNumbers == true) {
            localStorage.setItem('Numbers', 'false')
            charChoices2()
        }
        })
        
        function charChoices2() {
            var specialChar = document.createElement('h2')
            specialChar.setAttribute('class', 'pClass')
            specialChar.textContent = 'Would you like to include special characters?'
            var targetArea = document.querySelector('.background')
            targetArea.insertBefore(specialChar, targetArea.children[8])

            var confirm = document.createElement('input')
            confirm.setAttribute('type', 'submit')
            confirm.setAttribute('class', 'confirm2')
            confirm.setAttribute('value', 'Yes')
            var targetArea = document.querySelector('.background')
            targetArea.insertBefore(confirm, targetArea.children[9])
        
            var negate = document.createElement('input')
            negate.setAttribute('type', 'submit')
            negate.setAttribute('class', 'negater')
            negate.setAttribute('value', 'No')
            var targetArea = document.querySelector('.background')
            targetArea.insertBefore(negate, targetArea.children[10])

            document.querySelector('.confirm2').addEventListener('click', function() {
                var yesSpecials = true
                console.log(yesSpecials)
            })

            

        }
        
        
    }
})
})

