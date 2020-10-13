    //Arrays of character types
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const otherChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    //This function checks which arrays to include in the final password
    const checkOptions = () => {
      let confirmSpecialCharacters = confirm('Do you want to include special characters?')
      let confirmNumbers = confirm('Do you want to include numbers?')
      //We start the options array with letters since we are always going to include at least those
      let optionsArr = [letters,]
      if (confirmSpecialCharacters) {
        optionsArr.push(otherChar)
      }
      if (confirmNumbers) {
        optionsArr.push(number)
      }
      console.log(optionsArr)
      return optionsArr
    }
    //This is an array shuffling function I got off the internet
    const shuffle = (array) => {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
    //This function is the bulk of the logic, but could be broken into smaller chunks if need be.
    const passWordGen = () => {
      //prompt for length of password
      let passLength = prompt('How many digits would you like your password to be? 1 - 100')
      if (parseInt(passLength) > 101) {
        alert('Passwords must be 100 characters at most!')
        return
      }
      //call the options function(line 6) here
      let options = checkOptions()
      //empty array for the password we create
      let generatedPassword = []
      //I apologize for the horrible variable naming
      for (let i = 0; i <= passLength; i++) {
        //This if sets a 50% weight for letters as a baseline, choosing a random index and pushing it to the generated password array.
        if (i <= Math.floor(passLength * .5)) {
          let choice = Math.floor(Math.random() * (letters.length))
          generatedPassword.push(letters[choice])
          //this next if sets a 25% weight for other characters as a baseline.
        } if (i > Math.floor(passLength * .5) && i < Math.ceil(passLength * .75)) {
          //this if-else just ensures that other characters are included, and if not just adds more letters instead.
          if (options.includes(otherChar)) {
            console.log('We are including others')
            let choice = Math.floor(Math.random() * (otherChar.length))
            generatedPassword.push(otherChar[choice])
          } else {
            console.log('We are not including others')
            let choice = Math.floor(Math.random() * (letters.length))
            generatedPassword.push(letters[choice])
          }
          //Same idea, set a 25% weight for numbers as a baseline
        } if (i > Math.floor(passLength * .75) && i < Math.ceil(passLength * 1)) {
          //ensure numbers are supposed to be included, choosing more letters if not. 
          if (options.includes(number)) {
            console.log('We are including numbers')
            let choice = Math.floor(Math.random() * (number.length))
            generatedPassword.push(number[choice])
          } else {
            console.log('We are not including numbers')
            let choice = Math.floor(Math.random() * (letters.length))
            generatedPassword.push(letters[choice])
          }
        }
        //this sets the text of the output-input (HA!) to be equal to the shuffled version of our password.
        document.querySelector('#password').value = shuffle(generatedPassword).join('')
      }
    }
    //This little function just attaches to a button and allows us to copy our created password. 
    const copyPass = () => {
      let target = document.querySelector('#password')
      target.select()
      document.execCommand("copy")
      alert('Copied Password')
    }
    document.querySelector('#copyPass').addEventListener('click', passWordGen)
    document.querySelector('#copyText').addEventListener('click', copyPass);