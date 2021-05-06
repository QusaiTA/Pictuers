

alert('Welcome dear\'s');

/*var pictureType = prompt('what type of pirctures do u like,  Wild Animals, Toursim Area, Football Staduim, or Rain Forset ');
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
}*/

var favouritePicture = prompt('What do u love more, Wild Animals, Toursim Area, Football Staduim, Rain Forset .. ? ');

while(favouritePicture != 'Wild Animals' && favouritePicture != 'Toursim Area' && favouritePicture != 'Football Staduim' && favouritePicture != 'Rain Forset'){

  favouritePicture = prompt('Please Choose One of the 4 type i have mentioned');
}

  if( favouritePicture == 'Wild Animals'){

  document.write('<img src="https://images.theconversation.com/files/134652/original/image-20160818-12312-4dyz0u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" width="100px">  ');


}else if(favouritePicture == "Toursim Area"){
  document.write('<img src="https://www.overseaspropertyalert.com/wp-content/uploads/2019/08/tourist-town.jpg" width ="50px" >');

}else if(favouritePicture == "Football Staduim"){
  document.write('<img src="football.png" width ="50px">');
  

}else if(favouritePicture == "Rain Forset"){
  document.write('<img src="rainForest.jpg" width="50px">');

}else {
document.write("<p> u need to identify one of the 4 type's i mention before please " );
}

var loveRating = prompt('How Much u Love My Gallery Pictuers  From 10 ?' );
var love = Number(loveRating);
console.log(typeof love);
for( var i=0; i<love; i++){
 document.write('<img src="https://image.shutterstock.com/image-vector/heart-love-emoji-icon-object-260nw-1578259714.jpg" width="30px">');
}



var name = prompt('hey, i want to know your name ');
alert('My name is : ' + name);

