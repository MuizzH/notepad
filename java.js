function changeFont(font) {
document.getElementById('contentArea').style.fontFamily=font.value;
}

function changeSize(n) {
var s=document.getElementById('contentArea')
s.style.fontSize=n.value+'px';
}

function Bold(){

var bol=document.getElementById('contentArea').style.fontWeight;
if(bol=='normal'){
    document.getElementById('contentArea').style.fontWeight='bold';
}
else{
    document.getElementById('contentArea').style.fontWeight='normal';
}
}

function italic(){

var bol=document.getElementById('contentArea').style.fontStyle;
if(bol=='normal'){
document.getElementById('contentArea').style.fontStyle='Italic';
}
else{
document.getElementById('contentArea').style.fontStyle='normal';
}
}

function underline(){

var bol=document.getElementById('contentArea').style.textDecoration;
if(bol !=='underline'){
document.getElementById('contentArea').style.textDecoration='underline';
}
else{
document.getElementById('contentArea').style.textDecoration='none';
}
}

function reset(){
document.getElementById("contentArea").style.fontStyle="Normal";
document.getElementById("contentArea").style.textDecoration="none";
document.getElementById("contentArea").style.fontWeight="normal";

}

function remove() {
document.getElementById("contentArea").value="";
}

function check_web_storage_support() {
    if(typeof(Storage) !== "undefined") {
        return(true);
    }
    else {
        alert("Web storage unsupported!");
        return(false);
    }
}

function display_saved_note() {
    if(check_web_storage_support() == true) {
        result = localStorage.getItem('note');
    }
    if(result === null) {
        result = "No note saved";
    }
    document.getElementById('area').value = result;
}

function save() {
    if(check_web_storage_support() == true) {
        var area = document.getElementById("contentArea");
        if(area.value != '') {
            localStorage.setItem("note", contentArea.value);
        }
        else {
            alert("Nothing to save");
        }
    }
}