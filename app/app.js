import * as MODEL from "./model.js";

function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    let pageIDArray = pageID.split("/");
    pageID = pageIDArray[0];
    let subPageID = pageIDArray[1];
    // console.log("sub" + subPageID);

    if(pageID == ""){
        MODEL.changePage("home");
    } else {
        if (pageID == subPageID) {
            MODEL.changePage(pageID)
        } else {
            MODEL.changePage(pageID, subPageID);
        }
    }
}

function initListeners() {
    $("nav a").click((e) => {
    // e.preventDefault();
    // let btnID = e.currentTarget.id;
    // console.log("click" + btnID);

    // MODEL.setCurrentPageContent(btnID);

    });
}

function initApp(){
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    // MODEL.setCurrentPageContent("home");

    initApp();
    initListeners();
});
