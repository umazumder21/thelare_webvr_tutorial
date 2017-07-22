var onVrViewLoad = function() {
  var vrView = new VRView.Player('#web-vr-example-view', {
    image: 'http://i.imgur.com/L9FeGZI.jpg',
    width: '100%',
    height: '100%',
  });
}

window.addEventListener('load', onVrViewLoad);
