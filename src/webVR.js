function onVrViewLoad() {
  let vrView = new VRView.Player('#vrview', {
    image: 'http://media.mnn.com/assets/images/2013/02/grumpycat.jpg',
  });

  vrView.addHotspot('dining-room', {
    pitch: 30, // In degrees. Up is positive.
    yaw: 20, // In degrees. To the right is positive.
    radius: 0.05, // Radius of the circular target in meters.
    distance: 2, // Distance of target from camera in meters.
  });

  vrView.on('click', function(event) {
    if (event.id == 'dining-room') {
      // Handle hotspot click.
    }
  });
}

window.addEventListener('load', onVrViewLoad);
