let location;

if (typeof document !== "undefined") {
  location = document.location;
}
/* ES5 */
var htmlToImage = require('html-to-image');
var node = document.getElementById('./template_blue_2column.html');

htmlToImage.toPng(node)
  .then(function (dataUrl) {
    var img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
  })
  .catch(function (error) {
    console.error('oops, something went wrong!', error);
  });
htmlToImage.toPng(document.getElementById('my-node'))
  .then(function (dataUrl) {
    download(dataUrl, 'my-node.png');
  });