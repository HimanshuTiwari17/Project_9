document.addEventListener("DOMContentLoaded", function () {
  var meaningContainerEl = document.querySelector(".meaning-container");
  var titleEl = document.querySelector("#title");
  var meaningEl = document.querySelector(".meaning");
  var audioEl = document.querySelector("#audio");
  var butnEl = document.querySelector(".butn");
  var wordEl = document.querySelector(".word");

  var apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  meaningContainerEl.classList.add("noDisplay");

  async function fetchApi(wordToSearch) {
    const response = await fetch(`${apiUrl}${wordToSearch}`);
    const data = await response.json();
    butnEl.classList.add("noDisplay");
    titleEl.innerText = wordToSearch;
    meaningEl.innerText = data[0].meanings[0].definitions[0].definition;
    audioEl.src = data[0].phonetics[0].audio;
    meaningContainerEl.classList.remove("noDisplay");
    console.log(data);
  }

  wordEl.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
      fetchApi(e.target.value);
    }
  });
});
