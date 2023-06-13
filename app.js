let input = document.querySelector("#input-area");
let btnTranslate = document.querySelector("#translate-btn");
let output = document.querySelector("#output-area");


let url = "https://api.funtranslations.com/translate/minion.json"

function get_url(text) {
    return url + "?text="+text
}



function btnEvent(){
    fetch(get_url(input.value))
    .then(response => response.json())
    .then(json => output.innerText = (json.contents.translated))
}

btnTranslate.addEventListener("click", btnEvent)