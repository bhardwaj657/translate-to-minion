var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#input-txt")
var outputDiv = document.querySelector("#output-div")
var serverURL ="https://api.funtranslations.com/translate/minion.json";
function getTranslatedURL(text){
    return serverURL + "?" + "text=" + text
}
function errorHandler(){
    console.log("error",error)
    alert("Ooops! something went wrong")
}
function clickHandler(){
fetch(getTranslatedURL(inputText))
.then(response => response.json)
.then(json =>{
    var translatedText=json.contents.translated
    outputDiv.value = translatedText
})
.catch(errorHandler)
}
btnTranslate.addEventListener("click",clickHandler);