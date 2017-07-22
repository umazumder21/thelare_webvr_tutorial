function onVrViewLoad() {
  let vrView = new VRView.Player('#vrview', {
    image: 'https://i.imgur.com/L9FeGZI.jpg',
  });

  let vrViewTwo = new VRView.Player('#vrview-two', {
    image: 'http://raw.githubusercontent.com/jsala1990/thelare_webvr_tutorial/master/public/assets/room-2.jpg',
  });

  let vrViewThree = new VRView.Player('#vrview-three', {
    image: 'http://raw.githubusercontent.com/jsala1990/thelare_webvr_tutorial/master/public/assets/room-5.jpg',
  });

  // vrView.addHotspot('dining-room', {
  //   pitch: 30, // In degrees. Up is positive.
  //   yaw: 20, // In degrees. To the right is positive.
  //   radius: 0.05, // Radius of the circular target in meters.
  //   distance: 2, // Distance of target from camera in meters.
  // });

  // vrView.on('click', function(event) {
  //   if (event.id == 'dining-room') {
  //     // Handle hotspot click.
  //   }
  // });
}

window.addEventListener('load', onVrViewLoad);
