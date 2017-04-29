    var ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var INPUT_CHECKER = [' ', '.', '?', '!', '\n'];
    for(var i = 0; i < ALPHABET.length; i++)
    {
        INPUT_CHECKER.push(ALPHABET[i]);
    }
    
    //Ensures that an input string or array has only entries that appear in a string or array to be checked against. If exclusive, ensures no duplicate characters
    var inputChecker = function(input, checkAgainst)
    {
        var checkedInput = "";
        for(var i = 0; i < input.length; i++)
        {
            var checker = false;
            for(var j = 0; j < checkAgainst.length; j++)
            {
                if(input[i] === checkAgainst[j])
                {
                    checker = true;
                    break;
                }
                
            }
            
            if(checker)
            {
                checkedInput += input[i];
            }
        }
        
        return checkedInput;
    }
    
    //Sanitizes a message and a key, then uses the key to create an alternative alphabet and replaces all the characters with their alternative character
    var encode = function(message, key)
    {
        var checkedMessage = inputChecker(message, INPUT_CHECKER);
        var sanKey = inputChecker(key, ALPHABET);
        var checkedKey = "";
        
        var cipherAlphabet = [];
        var cipheredMessage = "";
        
        for(var i = 0; i < sanKey.length; i++)
        {
            var checker = false;
            for(var j = 0; j < checkedKey.length; j++)
            {
                if(sanKey[i] === checkedKey[j])
                {
                    checker = true;
                    break;
                }
            }
            
            if(!checker)
            {
                checkedKey += sanKey[i];
            }
        }
        
        console.log(checkedKey);
        
        for(var i = 0; i < checkedKey.length; i++)
        {
            cipherAlphabet.push(checkedKey[i]);
        }
        
        for(var i = 0; i < ALPHABET.length; i++)
        {
            var checker = false;
            for(var j = 0; j < cipherAlphabet.length; j++)
            {
                if(cipherAlphabet[j] === ALPHABET[i])
                {
                    checker = true;
                    break;
                }
            }
            
            if(!checker)
            {
                cipherAlphabet.push(ALPHABET[i]);
            }
        }
        
        for(var i = 0; i < checkedMessage.length; i++)
        {
            checker = false;
            for(var j = 0; j < ALPHABET.length; j++)
            {
                if(checkedMessage[i] === ALPHABET[j])
                {
                    cipheredMessage += cipherAlphabet[j];
                    checker = true;
                    break;
                }
            }
            if(!checker)
            {
                cipheredMessage += checkedMessage[i];
            }
        }
        
        return cipheredMessage;
    }
    
    var btnHandler = function()
    {
        var messageField = document.querySelector("form");
        messageField.querySelector(".msg").value = encode(messageField.querySelector(".msg").value, messageField.querySelector(".key").value);
    }
    
    document.getElementById("submitTest").addEventListener("click", btnHandler);