console.log('Hello Console!');


/*******************
*
*
*  BUH 4 instagram feed
*
*
* token: https://api.instagram.com/v1/tags/brno/media/recent?client_id=fbd20b88d2ab49b7acc2f9732a03e525

* clientid
fbd20b88d2ab49b7acc2f9732a03e525

TODO
1. nastylovat
2. pridat refresh scriptu.

***********************/

var api = 'https://api.instagram.com/v1/';
var clientId = 'fbd20b88d2ab49b7acc2f9732a03e525';

var column = document.getElementById('column');
var size = window.innerHeight + 'px';

var a = 0;
var b = 0;

column.style.width = window.innerWidth - window.innerHeight + 'px';


/*var getPhotos = function (callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', api + 'tags/brno/media/recent?client_id=' + clientId);
  xhr.setRequestHeader('X-Insta-Forwarded-For', );
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var json = JSON.parse(xhr.responseText),
        photos = json.results.photos.data;
      // window.friends = friends; not working :(
      callback(photos);
    }
  };
  xhr.send();
};

getPhotos( function(photos) {

  console.log(photos);

  });
*/

var zobrazDiv = function () {


  document.getElementById(b).style.opacity = 1;
  b = b + 1;
  setTimeout( zobrazDiv, 2500);

}

// Get an Instagram API client.
var instagram = new Instagram(clientId);


// Get tagged media
window.onload = function () {
  var getTaggedPhotos = function() {
    instagram.getTaggedImages( function(images) {

      for (var i = 0, len = images.length; i < len; i++) {
        var div = document.createElement('div');
        div.style.backgroundImage = 'url(' + images[i].imageUrl + ')';
        div.className = 'photo';
        div.style.width = size;
        div.style.height = size;
        div.id = a;
        a = a + 1;
        document.body.appendChild(div);
      }

      if (b == 0) {
        setTimeout( zobrazDiv, 0);
      }

      setTimeout( loadPhotosAgain, 10000)


    }, true);
  };


  var loadPhotosAgain = function () {
    console.log('loading photos');
    getTaggedPhotos();

  }

  getTaggedPhotos();



};
