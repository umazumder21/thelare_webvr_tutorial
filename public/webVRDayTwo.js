var vrImageOne = vRViewPlayer('#vr-picture-1', {
    image: 'http://googlevr.github.io/vrview/examples/hotspots/walrus.jpg',
    is_stereo: true,
    is_autopan_off: true,
});

// when you're ready
vrImageOne.on('ready', function(event) {
  // add first hotspot
  vrImageOne.addHotspot('this-is-a-hotspot-name', {
    pitch: 0,
    yaw: 0,
    radius: 0.05,
    distance: 1
  });

  // add second hotspot
  vrImageOne.addHotspot('this-is-another-hotspot', {
    pitch: 0,
    yaw: 10,
    radius: 0.05,
    distance: 1
  });

  // add second hotspot
});

// when you click
vrImageOne.on('click', function(event) {
  // if you are hotspot named 'this-is-a-hotspot-name', print alert
  if (event.id == 'this-is-a-hotspot-name') {
    alert('I CLICKED!');
  }

  // if you are a hotspot named 'this-is-another-hotspot', set new picture
  if (event.id == 'this-is-another-hotspot') {
    vrImageOne.setContent({
      image: 'http://googlevr.github.io/vrview/examples/hotspots/dolphins.jpg',
      is_stereo: true,
      is_autopan_off: true,
    });
  }
});

vrImageOne.on('error', function(event) {
  console.log('there was an error', event);
});

// every time you load 'vr-picture-1' you will call the function vrViewPlayer
window.addEventListener('load', vrImageOne);
