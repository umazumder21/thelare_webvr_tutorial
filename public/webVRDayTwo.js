var vrHomePage = vRViewPlayer('#vr-homepage', {
  image: 'assets/jesus-room.jpg',
  is_stereo: false,
  is_autopan_off: true,
});

// create function setReady Events
var setReadyEvents = function(event) {
  console.log('adding on "ready" events');

  // add first hotspot
  vrHomePage.addHotspot('hotspot-1', {
    pitch: 0,
    yaw: 0,
    radius: 0.10,
    distance: 1
  });

  // add second hotspot
  vrHomePage.addHotspot('hotspot-2', {
    pitch: 0,
    yaw: 10,
    radius: 0.10,
    distance: 1
  });
};

// create function on click, pass in event
var setOnClickEvents = function(event) {
  // if you are a hotspot named 'hotspot-1', call alert
  if (event.id == 'hotspot-1') {
    alert('I CLICKED!');
  }

  // if you are a hotspot named 'hotspot-2', set new picture
  if (event.id == 'hotspot-2') {
    vrHomePage.setContent({
      image: 'assets/dolphins.jpg',
      is_stereo: true,
      is_autopan_off: true,
    });

    vrHomePage.on('ready', function(event) {
      vrHomePage.addHotspot('hotspot-back', {
        pitch: 0,
        yaw: 0,
        radius: 0.10,
        distance: 1
      });
    });
  }
};

// when the page is ready, do these events
vrHomePage.on('ready', function(event) {
  setReadyEvents(event);
});

// when you click, do these events
vrHomePage.on('click', function(event) {
  setOnClickEvents(event);
});

// when there is an error, do these events
vrHomePage.on('error', function(errorEvent) {
  console.log('there was an error', errorEvent);
});

var onGetPosition = function(coordinates) {
  console.log(coordinates);
}

// when you finished loading the page, run VR code
window.addEventListener('load', vrHomePage);
