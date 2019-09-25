

$(document).ready(function(){

 var superheroes = ['batman','superman','hulk','iron man','spiderman','poison ivy','wonder woman'];

 for (var i = 0; i < superheroes.length; i++){
        var buttonElement = $('<button>');
        buttonElement.addClass('superhero-buttons');
        buttonElement.text(superheroes[i]);
        buttonElement.css({"background-color":"midnightblue","color":"white"});
        buttonElement.attr('id',superheroes[i]);
        buttonElement.attr('data-name', superheroes[i])

        var buttonDiv = $('#button-div')
        buttonDiv.append(buttonElement)
 }
//toDo read documentation for jquery .attr() and .on()

 $('#button-div').on('click','button', function(){


    var hero = $(this).attr('data-name');

    Getgiphydata(hero);


 })



function Getgiphydata(someSuperhero) {
    // Fetch Giphy data from APi
    var url = 'https://api.giphy.com/v1/gifs/search?q='+ someSuperhero +'&api_key=rUyl7e5bY5irIMtfOFuQJqi7NvabGHmQ&q=superheroes'

    console.log("url" + url)
    //AJAX call


    $.get(url).done(function(response){
var data = response.data


for (var j = 0; j < data.length; j++){

    var imageElement = $('<img>');
    imageElement.addClass('superhero-images');
    imageElement.attr('src',data[j].images.fixed_height_small_still.url);
    imageElement.attr('data-animate', 'still' );
    imageElement.attr('data-still', data[j].images.fixed_height_small_still.url );
    imageElement.attr('data-moving',data[j].images.fixed_height.url );


    var heroDiv = $('#hero-div')
    heroDiv.append(imageElement)
}

$('#hero-div').on('click','img', function(){

    var toggleAnimation = $(this).attr('data-animate');
   

    if(toggleAnimation === "still"){
        $(this).attr('src', $(this).attr('data-moving'));
        $(this).attr('data-animate', 'animated');

    }

    if(toggleAnimation === "animated"){
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-animate', 'still');

    }

 })












        console.log(response.data)
    })

} 
  
});