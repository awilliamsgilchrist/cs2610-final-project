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
                            if(input[i] === checkedInput[k])
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
    };
    
    var decode = function(message, key)
    {
        var checkedKey = inputChecker(key, ALPHABET, true);
        var cipherAlphabet = [];
        var decodedMessage = "";
        
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
    };
    
    var btnHandler = function()
    {
        var messageField = document.querySelector("pre").textContent;
        messageField = decode(messageField, document.querySelector("input").value);
    };
    
    
    
    document.querySelector("button").addEventListener("click", btnHandler());