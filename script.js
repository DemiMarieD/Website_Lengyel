function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function menuFunction(mId, zId) {
    menu = document.getElementsByClassName("mp");
    for (var i = 0; i < menu.length; i++) {
        menu[i].style.backgroundColor = "transparent";
    }
    document.getElementById(mId).style.backgroundColor = "rgba(236, 103, 26, 0.61)";

    zitat = document.getElementsByClassName("zitat");
    for (var j = 0; j < zitat.length; j++) {
        zitat[j].style.display = "none";
    }
    document.getElementById(zId).style.display = "block";
}


/*Kontakt form*/
function liveTestName() {
    var name = document.getElementById("name");
    validateUsername(name);
}
function liveTestMail() {
    var email = document.getElementById("email");
    validateEmail(email);
}
function liveTestMessage() {
    var message = document.getElementById("message");
    validateEmpty(message);
}


function validateFormOnSubmit(theForm) {
    var reason = "";

    reason += validateEmpty(theForm.message);
    reason += validateEmail(theForm.email);

    if (reason != "") {
        //alert("Einige Felder sind noch nicht korrekt ausgefüllt:\n" + reason);
        return false;
    }else {
        sendFunction();
    }

    return true;
}

function sendFunction() {
    document.getElementById('send').style.display = "block";
    document.getElementById('tohide').style.display = "none";
}

function validateEmpty(fld) {
    var error = "";

    if (fld.value.length == 0) {
        fld.style.background = 'rgba(236, 103, 26, 0.7)';
        error = "Bitte schreiben Sie eine Nachricht.\n"
    } else {
        fld.style.background = 'rgba(255, 255, 255, 0.71)';
    }
    return error;
}

function validateUsername(fld) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if (fld.value == "") {
        fld.style.background = 'rgba(236, 103, 26, 0.7)';
        error = "Bitte geben Sie einen Namen an.\n";
    }else if (illegalChars.test(fld.value)) {
        fld.style.background = 'rgba(236, 103, 26, 0.7)';
        error = "Bitte geben Sie einen gültigen Namen an. (es sind keine Sonderzeichen erlaubt)\n";
    }else{
        fld.style.background = 'rgba(255, 255, 255, 0.71)';
    }
    return error;
}

function trim(s)
{
    return s.replace(/^\s+|\s+$/, '');
}

function validateEmail(fld) {
    var error="";
    var tfld = trim(fld.value);                        // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
    var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/ ;

    if (fld.value == "") {
        fld.style.background = 'rgba(236, 103, 26, 0.7)';
        error = "Bitte geben Sie eine Email Adresse an.\n";
    } else if (!emailFilter.test(tfld)) {              //test email for illegal characters
        fld.style.background = 'rgba(236, 103, 26, 0.7)';
        error = "Bitte geben Sie eine gültige Email Adresse an.\n";
    } else if (fld.value.match(illegalChars)) {
        fld.style.background = 'rgba(236, 103, 26, 0.7)';
        error = "Die Email Adresse beinhaltet ungültige Zeichen.\n";
    } else {
        fld.style.background = 'rgba(255, 255, 255, 0.71)';
    }
    return error;
}

