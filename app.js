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
document.getElementById("message").style.visibility = "hidden"

function updateList() {
    updateSearch(document.getElementById("searchbar").value);
}

function updateSearch(searchTerm) {
    if (searchTerm == "") {
         document.getElementById("result").innerHTML = "";
    } else {
         document.getElementById("result").innerHTML = "";
    }
}
  
