# Make your own static page!
- [Join Github!](https://github.com/join)
- [Create a new Application](https://guides.github.com/features/pages/)
```html
  <div id="description-of-the-image"></div>
```

# Let's look at public/index.html
``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>WebVR Example</title>
  </head>

  <!-- This loads the google sdk -->
  <script src="//storage.googleapis.com/vrview/2.0/build/vrview.min.js"></script>
  <body>
    Hello this is your first application!!!

    <div id="first-vr-example"></div>
    Museum Example!
    <div id="second-vr-example"></div>
    Hand drawn Example!
    <div id="third-vr-example"></div>
    Hand drawn template Example!
    <!-- This loads your local javascript file -->
    <script src="./theLareCommonCode.js"></script>
  </body>
</html>
```
# Lets add our javascript!
``` javascript
var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  // image: 'assets/dolphins.jpg',
  image: 'https://raw.githubusercontent.com/jsala1990/thelare_webvr_tutorial/master/public/assets/dolphins.jpg',
  is_stereo: true,
});

window.addEventListener('load', drawingRoom);
```

# Lets draw our own rooms!
Look at assets/example-rectangular-room.png

# Take a picture and upload!!

Take a picture using your phone, and then upload the picture to Pasteboard.

- Visit https://pasteboard.co/
- Tap Upload, allow permissions to look at Images, and then upload. 
- You'll see an ad and then see your uploaded image at a URL - https://pasteboard.co/something.jpg
- Copy the URL over to your laptop, and change the URL to insert "/images/" at the beginning of the URL and add "/download" at the end of the URL - https://pasteboard.co/images/something.jpg/download
- Use that URL when you add your picture to this project

# Edit ./theLareCommonCode.js to use your own photo!
