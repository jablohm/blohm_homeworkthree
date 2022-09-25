export function changePage(pageID, subPageID) {
  console.log("sub" + subPageID);
  console.log("page" + pageID)

  if(subPageID  == undefined) {


    $.get(`pages/${pageID}/${pageID}.html`, function(data){
      // console.log(data);
      $("#app").html(data);

  }).fail((error) => {
    if(error.status == "404"){
      // alert("Please check your URL.");
    }
    console.log("error" + error.status);
  });

  } else {
        $.get(`pages/${pageID}/${subPageID}.html`, function(data){
      // console.log(data);
      $("#app").html(data);
  }).fail((error) => {

  })
}
}