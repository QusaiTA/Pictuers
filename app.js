var pictureType = prompt('what type of pirctures do u like?');
if(pictureType == 'Wild Animals'){

  document.write('<img src="https://images.theconversation.com/files/134652/original/image-20160818-12312-4dyz0u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip">');

}else if(pictureType == "Toursim Area"){
  document.write('<img src="https://www.overseaspropertyalert.com/wp-content/uploads/2019/08/tourist-town.jpg">');

}else if(pictureType == "Football Staduim"){
  document.write('<img src="football.png">');
  

}else if(pictureType == "Rain Forest"){
  document.write('<img src="rainForest">');

}else 
document.write("<p> u need to identify one of the 4 type's i mention before please " );

var name = prompt('hey, i want to know your name ');
document.write('my name is'+name);