const urlParams = new URLSearchParams(window.location.search);
const search = urlParams.get('q');
const zeroes = "00000000000000";
var quickCopyOnSearch = "YES"
var fuse;
var db;
if (search !== null && search !== "") {
    document.getElementById("searchbar").value = search;
}
var searchBar = document.getElementById("searchbar");
var timeout = null;
searchBar.addEventListener('keyup', (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        updateSearch(searchBar.value);
        }, 1000);
});
updateList();

function updateList() {
    updateSearch(document.getElementById("searchbar").value);
}

function updateSearch(searchTerm) {
    document.getElementById("barcode").value = "";
    if (searchTerm == "") {
    	JsBarcode("#barcode", "00000000000000", {
  format: "ITF",
  text: "EMPTY/WRONG CODE",
  width: 4,
  height: 40,
  displayValue: true
});
    } else {
    prezeroes = zeroes.substr(0, (14 - searchTerm.length));
    str = prezeroes + searchTerm
        JsBarcode("#barcode", str, {
  format: "ITF",
  width: 4,
  height: 40,
  displayValue: true
});
    }
}
