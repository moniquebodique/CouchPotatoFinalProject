let showImage;
let showName;
let showGenre;
let showArray = [];
$(document).ready(function() {

  console.log("hihhhhhhhhhhhhhhhhhhhhhhh")
  // Getting the intiial list of tv shows
  getRecommendations();
 recommendationsList=[];
 
  // Function for retrieving tv shows and getting them ready to be rendered to the page
  function getRecommendations() {


    $.get("/api/shows", function(data) {
      recommndationsList=data
      console.log("test"+ data[1]);
      var rowsToAdd = [];

// Loop through and provide the tv shows
     for (var i = 0; i < data.length; i++) {
      console.log(data[i].name)
      console.log(data[i].genres)
    // rowsToAdd.push(createtvshows(data[i]));
      showImage = data[i].image;
      showArray.push(showImage);

      showName = data[i].name;
      showArray.push(showName);

      showGenres = data[i].genres;
      showArray.push(showGenres);
      var animalDiv = $("<div>");
        var pBlank=$("<p>").text("");
        var p = $("<p>").text("Name: " + data[i].name);
        if (data[i].genres=="[]"){
          var pGenres = $("<p>").text("Genres: Not Categorized");
        } else{
          var pGenres = $("<p>").text("Genres: " + data[i].genres);
        }

        // Creating and storing an image tag
        
        var animalImage = $("<img>");
        // Setting the src attribute of the image to a property pulled off the result item
        animalImage.attr("src", data[i].image);
        animalDiv.append(pBlank);
        animalDiv.append(pBlank);
        animalDiv.append(p);
        animalDiv.append(pGenres);
        animalDiv.append(animalImage);
      $("#tvshows").prepend(animalDiv);
      }


       //$("#tvshows").append("<p>" + showArray + "</p>");
      // rendertvshows(rowsToAdd);
      // nameInput.val("");
    });
  }

 
 });




// new try with another example
// function runQuery(data){
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).done(function(tvshows) {
//     var results = response.data;
//     for (var i = 0; i < numArticles; i++) {
  
//       var tvshows = $("<div>");
//       tvshows.addClass("tv");
//       tvshows.attr("id", "article-well-");
//       $("#tv-shows").append(tvshows);

// }



// // METHODS
// $("#run-search").on("click", function(event) {
//   event.preventDefault();


//   // Empties the region associated with the articles
//   $("#well-section").empty();


  // $(function(){
  //   var jsonObj = $.parseJSON('{"a":1,"b":3,"ds":4}');
  //   var html = '<table border="1">';
  //   $.each(jsonObj, function(key, value){
  //      html += '<tr>';
  //     html += '<td>' + key + '</td>';
  //     html += '<td>' + value + '</td>';
  //     html += '</tr>'; });
  //     html += '</table>';
  //     $('div').html(html);
  //   });