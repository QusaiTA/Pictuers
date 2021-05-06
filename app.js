

alert('Welcome dear\'s');


var pictureType = prompt('what type of pirctures do u like,  Wild Animals, Toursim Area, Football Staduim, or Rain Forset ');
if(pictureType == 'Wild Animals'){

  document.write('<img src="https://images.theconversation.com/files/134652/original/image-20160818-12312-4dyz0u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip">');

}else if(pictureType == "Toursim Area"){
  document.write('<img src="https://www.overseaspropertyalert.com/wp-content/uploads/2019/08/tourist-town.jpg">');

}else if(pictureType == "Football Staduim"){
  document.write('<img src="football.png">');
  

}else if(pictureType == "Rain Forset"){
  document.write('<img src="rainForest.jpg" width="250px">');

}else {
document.write("<p> u need to identify one of the 4 type's i mention before please " );
}


var name = prompt('hey, i want to know your name ');
alert('My name is : ' + name);