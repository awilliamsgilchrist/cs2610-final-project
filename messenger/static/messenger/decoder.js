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
    
    var decode = function(message, key)
    {
        var sanKey = inputChecker(key, ALPHABET);
        var cipherAlphabet = [];
        var decodedMessage = "";
        
        var checkedKey = "";
        
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
        
        for(var i = 0; i < message.length; i++)
        {
            var checker = false;
            for(var j = 0; j < cipherAlphabet.length; j++)
            {
                if(message[i] === cipherAlphabet[j])
                {
                    checker = true;
                    decodedMessage += ALPHABET[j];
                    break;
                }
            }
            
            if(!checker)
            {
                decodedMessage += message[i];
            }
        }
        
        return decodedMessage;
    };
    
    var btnHandler = function()
    {
        var messageField = document.querySelector("pre");
        messageField.textContent = decode(messageField.textContent, document.querySelector("input").value);
    };
    
    
    
    document.querySelector("button").addEventListener("click", btnHandler);