function validation() {
    var radio = false;
    

    var array = ["name", "email", "age", "dropdown", "down"];
    /* Checking condition for input fields */
    for (var ids = 0; ids < array.length; ids++) {
        if (document.getElementById(array[ids]).value == "") {
            document.getElementById(array[ids]).style.backgroundColor = "red";
            document.getElementById(array[ids]).focus();
            return false;
        }
    }

    /*    Checking condition for radio button */
    if (document.getElementById("Definitely").checked) {
        radio = true;
    } else if (document.getElementById("Maybe").checked) {
        radio = true;
    } else if (document.getElementById("Not sure").checked) {
        radio = true;
    }
    else {
        alert(" Please recommend freeCodeCamp to a friend? ")
        return false;
    }
    if((!document.getElementById("Front-end-Projects").checked) && (!document.getElementById("Back-end-Projects").checked) && (!document.getElementById("Data-Visualization").checked) && (!document.getElementById("Challenges").checked) && (!document.getElementById("Open-Source-Community").checked)){
        alert("What would you like to see improved?");
        return false;
    }
    alert("successful");
}


