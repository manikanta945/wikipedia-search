let searchInputEl = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");


function desplayResult(search_results) {
    for (let i of search_results) {
        createAndAppendSearchResult(i);
    }


}

function createAndAppendSearchResult(result) {
    let {
        title,
        link,
        description
    } = result;
    let div = document.createElement("div");
    div.classList.add("result-item");
    searchResults.appendChild(div);

    let ancerEle = document.createElement("a");
    ancerEle.classList.add("result-title");
    ancerEle.href = link;
    ancerEle.target = "_blank";
    ancerEle.textContent = title;
    div.appendChild(ancerEle);

    let br1 = document.createElement("br");
    div.appendChild(br1);

    let ancerEle2 = document.createElement("a");
    ancerEle2.classList.add("result-url");
    ancerEle2.href = link;
    ancerEle2.target = "_blank";
    //ancerEle2.textContent=;
    div.appendChild(ancerEle2);

    let br2 = document.createElement("br");
    div.appendChild(br2);

    let p = document.createElement("p");
    p.classList.add("link-description");
    p.textContent = description;
    div.appendChild(p);

}





function keypressEl(event) {
    if (event.key === "Enter") {
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;

        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(responce) {
                return responce.json()
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                desplayResult(search_results);
            });
    }
}


searchInputEl.addEventListener("keydown", keypressEl)
