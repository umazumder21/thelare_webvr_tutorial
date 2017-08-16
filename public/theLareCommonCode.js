var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var theLareAlert = function(alertText) {
    document.getElementById("vr-jesus-room").contentWindow.alert()
    setTimeout(function() {
        location.reload();
    }, 2000 );
}
