var str = "R12 N LB115 N";
var commandChar = " ";
var mySplitResult = str.split(commandChar);

var code;
var string_number;

var matches;


for(i = 0; i < mySplitResult.length; i++) {
    console.log("Element: " + i + " of the array list is ", mySplitResult[i]);

    code = mySplitResult[i].match(/\D/g);
    string_number = mySplitResult[i].match(/\d/g);
    if(code != null){
        code = code.join("");
        console.log("Code is: " + code);
    }

    if(string_number != null){
        string_number = string_number.join("");
        console.log("String Number is: " + string_number);
    }
    
    if(mySplitResult[i] == "N"){
        console.log("Command Code: " +  mySplitResult[i] + " for new string detected.");
    }
    console.log("");
}

