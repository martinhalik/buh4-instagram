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

***********************/

var api = 'https://api.instagram.com/v1/';
var clientId = 'fbd20b88d2ab49b7acc2f9732a03e525';

console.log('56');

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


// Get an Instagram API client.
var instagram = new Instagram(clientId);

// Get tagged media
instagram.getTaggedImages( function(images) {

  for (var i = 0, len = images.length; i < len; i++) {
    var img = document.createElement('img');
    img.src = images[i].imageUrl;
    document.body.appendChild(img);
  }

}, true);
