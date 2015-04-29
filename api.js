
$(document).ready(function(){


$('#submit').click( function(event){
  
  $('#list').html('');
  // get the value of the tags the user submitted
  var tags = $("#name").val();
  artistName(tags);

 });
});

/*var showSong =  function(album){

  var result = $('#result').clone();

  var albumElem = result.find('#result');
  albumElem.attr('href', album.link);
  albumElem.text(album.title);


 var hidden = result.find('.hidden');
  hidden.html('<p><a target="_blank" ' + tracks.items.album.external_urls.spotify + ' >' +
                         
                        '</a>' +
              '</p>' 
  );;
// songElem.attr('href', song.link);
// songElem.text(song.title);


// var viewed= result.find('.viewed');
// viewed.text(song.viewed_count); 

return result;
 return "";

} 


var showSearchResult = function(query, resultNum)
{

 var results = resultNum + 'results of <strong>' + query ;

 return results;
};

var artistName = function(tags) {

 var request = {'q':'artist:' + tags,type:'track'};


    var res = $.getJSON("https://api.spotify.com/v1/search", request, function(result){

  var searchResult = showSearchResult(tags, result.tracks.items.length);

  //$('#search').html(searchResult);

  $.each(result.tracks.items, function(i, item){
   var song = showSong(item);
   $('#list').append(song);
  });
 });
 
};*/

function artistName(tags){

  var params = {'q':'artist:' + tags,type:'album'};

  var res = $.getJSON("https://api.spotify.com/v1/search", params, function(result){

    showResult(result.albums.items);
  });


}

function showResult(result){

    var html="";
    
    $.each(result,function(index,value){

      html+='<p>'+ 
      '<a target="_blank" href = "https://open.spotify.com/album/'+value.id+'">'+value.name+'</a>' +'</p>';
      
      });


    $('#list').html(html);

  };



