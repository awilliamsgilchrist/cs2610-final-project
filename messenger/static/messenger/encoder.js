    var ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var INPUT_CHECKER = [' ', '.', '?', '!', '\n'];
    for(var i = 0; i < ALPHABET.length; i++)
    {
        INPUT_CHECKER.push(ALPHABET[i]);
    }
    
    //Ensures that an input string or array has only entries that appear in a string or array to be checked against. If exclusive, ensures no duplicate characters
    var inputChecker = function(input, checkAgainst, exclusive = false)
    {
        var checkedInput = "";
        for(var i = 0; i < input.length; i++)
        {
            var checker = false;
            for(var j = 0; j < checkAgainst.length; j++)
            {
                if(input[i] === checkAgainst[j] && !exclusive)
                {
                    if(exclusive)
                    {
                        var exclusiveChecker = true;
                        for(var k = 0; k < checkedInput.length; k++)
                        {
                            if(input[i] === checkedInput[k]);
                            {
                                exclusiveChecker = false;
                                break;
                            }
                        }
                        
                        if(exclusiveChecker)
                        {
                            checker = true;
                            break;
                        }
                    }
                    else
                    {
                        checker = true;
                        break;
                    }
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
        var checkedKey = inputChecker(key, ALPHABET, true);
        var cipherAlphabet = [];
        var cipheredMessage = "";
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
            for(var j = 0; j < ALPHABET.length; j++)
            {
                if(checkedMessage[i] === ALPHABET[j])
                {
                    cipheredMessage += cipherAlphabet[j];
                    break;
                }
            }
        }
        
        return cipheredMessage;
    }
    
    var btnHandler = function()
    {
        var messageField = document.querySelector("form");
        messageField.querySelector(".msg").value = encode(messageField.querySelector(".msg").value, messageField.querySelector(".key").value);
    }
    
    document.querySelector("#submit").addEventListener("click", btnHandler());