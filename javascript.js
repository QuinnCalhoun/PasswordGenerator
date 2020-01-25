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
    // var passLength = 8
    // var charTypes = {letters:'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', numbers:'0123456789', specialChar: '!@#$%^&*,.<>'}
    // console.log(charTypes)
    if (document.querySelector('#customPass').textContent === 'Custom Password') {

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
        if (parseInt(lengthChoice) > 7 && parseInt(lengthChoice) < 129) {
        document.querySelector('.confirmer').disabled = true
        localStorage.setItem('passwordLength', lengthChoice)
        charChoices()
    }else {
        alert('Must input numerals. (1, 2, 3, etc...')
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
            document.querySelector('.confirm2').disabled = true
            document.querySelector('.negater').disabled = true
        }
        })
        document.querySelector('.negater').addEventListener('click', function(){
            var noNumbers = true
            console.log(noNumbers)
            if (noNumbers == true) {
            localStorage.setItem('Numbers', 'false')
            charChoices2()
            document.querySelector('.confirm2').disabled = true
            document.querySelector('.negater').disabled = true
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
            confirm.setAttribute('class', 'confirm3')
            confirm.setAttribute('value', 'Yes')
            var targetArea = document.querySelector('.background')
            targetArea.insertBefore(confirm, targetArea.children[9])
        
            var negate = document.createElement('input')
            negate.setAttribute('type', 'submit')
            negate.setAttribute('class', 'negater2')
            negate.setAttribute('value', 'No')
            var targetArea = document.querySelector('.background')
            targetArea.insertBefore(negate, targetArea.children[10])

            document.querySelector('.confirm3').addEventListener('click', function() {
                var yesSpecials = true
                console.log(yesSpecials)
                if (yesSpecials) {
                    localStorage.setItem('Specials', 'true')
                    makePass()
                }
                document.querySelector('.confirm3').disabled = true
                document.querySelector('.negater2').disabled = true
            })
            document.querySelector('.negater2').addEventListener('click', function(){
                var noSpecials = true
                console.log(noSpecials)
                if (noSpecials){
                    localStorage.setItem('Specials', 'false')
                    makePass()
                }
                document.querySelector('.confirm3').disabled = true
                document.querySelector('.negater2').disabled = true
            })
            function makePass() {
                var thankYou = document.createElement('h2')
                thankYou.setAttribute('class', 'pClass')
                thankYou.textContent = 'Thanks! Your password is: '
                var targetArea = document.querySelector('.background')
                targetArea.insertBefore(thankYou, targetArea.children[11])



                var numNum = ['0','1','2','3','4','5','6','7','8','9']
                var charChar = [',','.','!','@','#','$','%','^','&','*','(',')']
                var pL = JSON.parse(localStorage.getItem('passwordLength'))
                console.log(pL)
                var num = localStorage.getItem('Numbers')
                console.log(num)
                var spe = localStorage.getItem('Specials')
                console.log(spe)
                var usables2 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
                
                if (num == 'true') {
                for (x =0; x < numNum.length; x++) {
                    usables2.push(numNum[x])
                }}else {
                    usables2 = usables2
                }
                console.log(usables2)

                if (spe == 'true') {
                    for (i = 0; i < charChar.length; i++) {
                        usables2.push(charChar[i])
                    }
                }else {
                    usables2 = usables2
                }
                console.log(usables2)

                var thisIsIt = []

                for (i = 0; i < pL; i++) {
                    var digit2 = Math.floor(Math.random() * usables2.length)
                    console.log(digit2)
                    thisIsIt.push(digit2)
                }
                console.log(thisIsIt)

                var finalForm = []

                for (i = 0; i < thisIsIt.length; i++) {
                    var pleaseGod2 = usables2[thisIsIt[i]]
                    finalForm.push(pleaseGod2)
                }
                console.log(finalForm)
                var finalShow = document.createElement('h2')
                finalShow.setAttribute('class', 'convenientClass')
                finalShow.setAttribute('id', 'copyTarget')
                finalShow.textContent = finalForm.join('')
                var targetArea = document.querySelector('.background')
                targetArea.insertBefore(finalShow, targetArea.children[12])

                var copyPass = document.createElement('input')
                copyPass.setAttribute('type', 'submit')
                copyPass.setAttribute('value', 'Copy Password to Clipboard')
                var targetArea = document.querySelector('.background')
                targetArea.insertBefore(copyPass, targetArea.children[13])

                var resetFinal = document.createElement('input')
                resetFinal.setAttribute('type', 'submit')
                resetFinal.setAttribute('value', 'Reset')
                var targetArea = document.querySelector('.background')
                targetArea.insertBefore(resetFinal, targetArea.children[14])

                copyPass.addEventListener('click', function() {
                    var copyText = document.getElementById("copyTarget");
                    copyText.select();
                    document.execCommand("copy");
                  })

                resetFinal.addEventListener('click', function(){
                    location.reload()
                })
                
                 
                
            }

            

        }
        
        
    }
})}
})

