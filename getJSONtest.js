$(document).ready(function(){

 $.getJSON('http://en.wikipedia.org/w/api.php?action=parse&page=montana&prop=text&format=json&callback=?', function(json) { 
    $('.wiki-block').html(json.parse.text['*']); 
    $('.wiki-block').find("a:not(.references a)").attr("href", function(){ return "http://www.wikipedia.org" + $(this).attr("href");}); 
    $('.wiki-block').find("a").attr("target", "_blank"); 
  });


//taken from http://www.bauer-power.net/2010/09/use-jquery-to-add-wikipedia-content-to.html#.VDl8gtTF9y8

});//jQuery