"use strict";
const urlParams = new URLSearchParams(window.location.search);
const search = urlParams.get('q');
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
    if (searchTerm == "") {
        JsBarcode("#barcode", "EMPTY", {
               format: "ITF-14",
               width:4,
               height:40,
               font: "monospace",
               displayValue: true,
               lineColor: "#000000"
           });
    } else {
        JsBarcode("#barcode", searchTerm, {
               format: "ITF-14",
               width:4,
               height:40,
               font: "monospace",
               displayValue: false,
               lineColor: "#000000"
           });
    }
}
  
