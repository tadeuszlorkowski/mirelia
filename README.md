# What is Mirelia?

Mirelia is an open-source micro-framework for web development, available for use wiht or without download. It can be used
for component site building, session control, real-time site update and HTML5 game development. It only uses JavaScript.

[Example game made with Mirelia](http://www.epejsodion.com/swimming-game)

# Adding Mirelia to your site

## From the EPEJSODION Online website

In order to use the script without download, all you need to do is to add the script from the EPEJSODION Online page, by setting
it as the script's source in a script element between the head tags of the site's HTML document:

```html
<script src="http://www.epejsodion.com/mirelia.js"></script>
```

This is more secure due to the fact that he script cannot be changed on the page, as it is downloaded directly from the EPEJSODION
Online page and is automatically updated. However, if EPEJSODION Online is down, the script may not be loaded.

## Stand-alone

Mirelia can also be added to your site by downloading the source code and adding it to your page's files, and then adding it as a
script in a script element between the head tags.

```html
<script src="mirelia.js"></script>
```

If you use the stand-alone version, you will need to update the script manually, but it is now editable and not dependent on EPEJSODION
Online's health.

If the script is added sucessfully, you should see the following in the console.

```
Mirelia 1.0 (C) year Tadeusz Lorkowski. Last update last update
This is an open source framework. Feel free to customize it to your liking.
```

# Usage

The usage of the framework very simple and uses only JavaScript, and makes it possible to fit the entire webpage's content into a single page,
while loading only the resources you need.

This framework uses the following classes:

1. Mirelia
2. MireliaAnimation
3. MireliaGameObject
4. MireliaGameScene
5. MireliaBlueprint
6. MireliaComponent
7. MireliaMission
8. MireliaSession
9. Stem

It is also supplied with some non-class functions.

The classes have the following use:

Class name | Static?\* | Purpose
------------ | ------------- | -------------
Mirelia | Yes | General
Stem | Yes | Real-time site update
MireliaAnimation | No | Displaying animated images
MireliaGameObject | No | Making games
MireliaGameScene | No | Determining the game content
MireliaBlueprint | No | Setting a MireliaGameObject's properties
MireliaComponent | No | Managing groups of HTML elements
MireliaMission | No | Executing series of functions
MireliaSession | No | Session management

\*The classes are not really programmed as static; in this context, it means that they are not made for replication.

# Reference

## Mirelia

The Mirelia class contains most of the methods used by the framework. Thay are called with Mirelia.methodname(parameters),
e.g. Mirelia.infoAlert().

Its attributes should only be changed with its methods, with the exception of Mirelia.defCtx and Mirelia.Keyset.

## Mirelia Information Methods

Used to set/display the application information.

```javascript
Mirelia.infoAlert()
```
Returns none.
Alerts the application information.

```javascript
Mirelia.setDesc(appname, appdesc, appcreator, appversion, alert)
```
Parameter | Type | Description
------------ | ------------- | -------------
appname | string | Change the name of the application.
appdesc | string | Change the description of the application.
appcreator | string | Change the name of the application's developer.
appversion | string | Change the version string of the application.
alert | boolean | If it's true, the new information will be alerted.

Returns none.
Displays the application information.


## Mirelia Graphics Methods

These methods are used to draw shapes and images on HTML5 canvas.

```javascript
Mirelia.setCanvas(id)
```
Parameter | Type | Description
------------ | ------------- | -------------
id | string | The id of the canvas HTML tag.

Returns none.
Sets the default canvas for drawing. Takes the canvas tag's ID.

```javascript
Mirelia.circle(canvas, x, y, diameter, color)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The id of the canvas HTML tag.
x | number | x position on the canvas.
y | number | y position on the canvas.
diameter | number | The diameter of the circle.
color | string | The hex color string of the circle.

Returns none.
Draws a filled circle on canvas, with the center being on the x,y coordinates.

```javascript
Mirelia.ring(canvas, x, y, diameter, thickness, color)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The id of the canvas HTML tag.
x | number | x position on the canvas.
y | number | y position on the canvas.
diameter | number | The diameter of the ring.
thickness | number | The thickness of the ring.
color | string | The hex color string of the ring.

Returns none.
Draws a ring on canvas, with the center being on the x,y coordinates.

```javascript
Mirelia.sprite(canvas, x, y, image)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The id of the canvas HTML tag.
x | number | x position on the canvas.
y | number | y position on the canvas.
image | img element | The image, stored in a variable.

Returns none.
Draws an image on the canvas.

```javascript
Mirelia.spriteStretch(canvas, x, y, w, h, image)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The id of the canvas HTML tag.
x | number | x position on the canvas.
y | number | y position on the canvas.
w | number | Width in pixels.
h | number | Height in pixels.
image | img element | The image, stored in a variable.

Returns none.
Draws a stretched image on the canvas.

```javascript
Mirelia.spritePartial(canvas, x, y, xp, yp, w, h, image)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The id of the canvas HTML tag.
x | number | x position on the canvas.
y | number | y position on the canvas.
xp | number | x position on the image to cut from.
yp | number | y position on the image to cut from.
w | number | Part width in pixels.
h | number | Part height in pixels.
image | <img> element | The image, stored in a variable.

Returns none.
Draws a part of an image on the canvas.

```javascript
Mirelia.spriteRotated(canvas, x, y, rotation, image)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The id of the canvas HTML tag.
x | number | x position on the canvas.
y | number | y position on the canvas.
rotation | number | The rotation of the image in degrees.
image | img element | The image, stored in a variable.

Returns none.
Draws a rotated image on the canvas.

```javascript
Mirelia.spriteTransform(canvas, x, y, width, height, rotation, image)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The id of the canvas HTML tag.
x | number | x position on the canvas.
y | number | y position on the canvas.
w | number | Part width in pixels.
h | number | Part height in pixels.
rotation | number | The rotation of the image in degrees.
image | img element | The image, stored in a variable.
Returns none.
Draws a rotated and stretched image on the canvas.

```javascript
Mirelia.spriteComplete(canvas, x, y, width, height, xp, yp, wp, hp, rotation, image)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The id of the canvas HTML tag.
x | number | x position on the canvas.
y | number | y position on the canvas.
w | number | Part width in pixels.
h | number | Part height in pixels.
xp | number | x position on the image to cut from.
yp | number | y position on the image to cut from.
wp | number | Part width in pixels.
hp | number | Part height in pixels.
rotation | number | The rotation of the image in degrees.
image | img element | The image, stored in a variable.

Returns none.
Draws a rotated and stretched part of an image on the canvas.

```javascript
Mirelia.drawText(canvas, font, text, x, y, align)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The id of the canvas HTML tag.
font | string | The font of the text, in HTML style (e. g. "32px Arial").
text | string | The string to be drawn.
x | number | x position on the canvas.
y | number | y position on the canvas.
align | string | The align of the text, in HTML style ("left", "center", "right").

Returns none.
Draws text on the canvas.

```javascript
Mirelia.drawTextColor(canvas, font, text, x, y, color, align)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The id of the canvas HTML tag.
font | string | The font of the text, in HTML style (e. g. "32px Arial").
text | string | The string to be drawn.
x | number | x position on the canvas.
y | number | y position on the canvas.
color | string | The hex color string of the circle.
align | string | The align of the text, in HTML style ("left", "center", "right").

Returns none.
Draws a colorful text on the canvas.

```javascript
Mirelia.drawTextStroke(canvas, font, text, x, y, align)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The id of the canvas HTML tag.
font | string | The font of the text, in HTML style (e. g. "32px Arial").
text | string | The string to be drawn.
x | number | x position on the canvas.
y | number | y position on the canvas.
align | string | The align of the text, in HTML style ("left", "center", "right").

Returns none.
Draws stroke text on the canvas.

```javascript
Mirelia.drawTextStrokeColor(canvas, font, text, x, y, color, align)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The id of the canvas HTML tag.
font | string | The font of the text, in HTML style (e. g. "32px Arial").
text | string | The string to be drawn.
x | number | x position on the canvas.
y | number | y position on the canvas.
color | string | The hex color string of the circle.
align | string | The align of the text, in HTML style ("left", "center", "right").

Returns none.
Draws colorful stroke text on the canvas.

```javascript
Mirelia.drawProgBar(canvas, horizontal, color1, color2, x, y, length, width, progress)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The id of the canvas HTML tag.
horizontal | boolean | If true, the bar will appear horizontally, and if false - vertically.
color1 | string | The hex color string of the progress.
color2 | string | The hex color string of the outline.
x | number | x position on the canvas.
y | number | y position on the canvas.
length | number | The length of a horizontal bar or width of a vertical one.
width | number | The length of a vertical bar or width of a horizontal one.
progress | number | The percentage of progress (0-100).

Returns none.
Draws a progress bar on the canvas.

```javascript
Mirelia.refresh(canvas)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The id of the canvas HTML tag.

Returns none.
Prepares the canvas for re-drawing objects. Must be used in loops. It is auto-called each frame of
the application loop, on condition a default canvas is set.

```javascript
Mirelia.setBackground(image)
```
Parameter | Type | Description
------------ | ------------- | -------------
image | img element | The image, stored in a variable.

Returns none.
Sets a default background image to be drawn on the canvas, on condition a default canvas is set.

## Mirelia Sound Methods

The following methods are used to play sounds directly with JavaScript. Especially useful when used to
make games.
**WARNING: Due to a browser-implemented policy, the user must "interact" with the page, e.g. click something.**
**Otherwise, a browser-implemented exception will occur.**

```javascript
Mirelia.playSound(sound)
```
Parameter | Type | Description
------------ | ------------- | -------------
sound | audio element | The sound, stored in a variable.

Returns none.
Plays or unpauses the sound stored in the variable.

```javascript
Mirelia.pauseSound(sound)
```
Parameter | Type | Description
------------ | ------------- | -------------
sound | audio element | The sound, stored in a variable.

Returns none.
Pauses the sound stored in the variable.

```javascript
Mirelia.pauseSound(sound, replay)
```
Parameter | Type | Description
------------ | ------------- | -------------
sound | audio element | The sound, stored in a variable.
replay | boolean | If true, the sound will start playing all over again.

Returns none.
Sets the sound's position to zero and can replay it too.

```javascript
Mirelia.soundIsPlaying(sound)
```
Parameter | Type | Description
------------ | ------------- | -------------
sound | audio element | The sound, stored in a variable.

Returns boolean.
Checks if the tested audio is currnetly playing.

```javascript
Mirelia.soundLoop(sound, replay)
```
Parameter | Type | Description
------------ | ------------- | -------------
sound | audio element | The sound, stored in a variable.
replay | boolean | If true, the sound will start playing all over again.

Returns none.
Set whether a given sound should loop or not.

```javascript
Mirelia.soundPos(sound)
```
Parameter | Type | Description
------------ | ------------- | -------------
sound | audio element | The sound, stored in a variable.

Returns number.
Gets the current position of a sound.

```javascript
Mirelia.soundJump(sound, time)
```
Parameter | Type | Description
------------ | ------------- | -------------
sound | audio element | The sound, stored in a variable.
time | number | Time in seconds of the sound to jump to.

Returns none.
Jumps to the specitied time of the sound. If it is longer that the sound, it will jump
to the reminder.

```javascript
Mirelia.soundVolume(sound, volume)
```
Parameter | Type | Description
------------ | ------------- | -------------
sound | audio element | The sound, stored in a variable.
volume | number | The new volume of the track. (0-1)

Returns none.
Sets the volume of a sound. If it is negative, it will be set to 0 and if over 1, it
will be set to 1

## Mirelia Camera Methods

These methods deal with the application's camera, scrolling the default canvas. Mostly
used with video games, but are usable in other implemenations too.

```javascript
Mirelia.pan(x, y)
```
Parameter | Type | Description
------------ | ------------- | -------------
x | number | Number of pixels to translate the camera horizontally.
y | number | Number of pixels to translate the camera vertically.

Returns none.
Translates the default canvas camera by (x,y). Will not work if the camera limits are on
and excedded.

```javascript
Mirelia.setCam(x, y)
```
Parameter | Type | Description
------------ | ------------- | -------------
x | number | The new x coordinate of the camera.
y | number | The new y coordinate of the camera.

Returns none.
Sets the default canvas camera by (x,y) immediately.

```javascript
Mirelia.resetCam(x, y)
```
Returns none.
Sets the default canvas camera back to (0,0).

```javascript
Mirelia.setLimit(on, x, y)
```
Parameter | Type | Description
------------ | ------------- | -------------
on | boolean | Toggles the limits on and off.
x | number | The new maximum x of the camera.
y | number | The new maximum y of the camera.

Returns none.
If the limits are on, the camera cannot be translated below 0 or above the
(x,y) limits.

## Mirelia Event Methods

```javascript
Mirelia.keyPress(key)
```
Parameter | Type | Description
------------ | ------------- | -------------
key | number | The JavaScript KeyCode to be tested.

Returns boolean.
Returns true if the tested key is pressed or false if it is not.

```javascript
Mirelia.keyRelease(key)
```
Parameter | Type | Description
------------ | ------------- | -------------
key | number | The JavaScript KeyCode to be tested.

Returns boolean.
Returns true if the tested key is released or false if it is not.

```javascript
Mirelia.getInput()
```
Returns number.
Returns the KeyCode of the currently pressed key.

```javascript
Mirelia.getMouse()
```
Returns number.
Returns true if the left mouse button is pressed or false if it is not.

```javascript
Mirelia.getMousePos(canvas)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The ID of the canvas HTML tag.

Returns dictionary {x: number, y:number}.
Gets the mouse position in the selected condo as a dictionary of x,y coordinates.

## Mirelia Data Methods

These methods deal with some operations and data processing that is not present in the
vanilla JavaScript.

```javascript
Mirelia.reverseString(string)
```
Parameter | Type | Description
------------ | ------------- | -------------
string | string | The string to be reversed.

Returns string.
Returns the reversed version of the passed string.

```javascript
Mirelia.sort(list)
```
Parameter | Type | Description
------------ | ------------- | -------------
list | number or string list | The list to be sorted.

Returns number or string list.
Insert-sorts the passed list. Works with both number and string lists.

```javascript
Mirelia.sum(list)
```
Parameter | Type | Description
------------ | ------------- | -------------
list | number list | The list to be sorted.

Returns number.
Sums all elements of the passed list.

```javascript
Mirelia.sumPart(list, start, end)
```
Parameter | Type | Description
------------ | ------------- | -------------
list | number list | The list to be sorted.
start | number | The first index of the sorting range.
end | number | The last index of the sorting range.

Returns number.
Sums all elements of the passed list, in a set range. If end is higher than the list length, it will
be changed automatically.

```javascript
Mirelia.randomInt(max)
```
Parameter | Type | Description
------------ | ------------- | -------------
max | number | The maximum number.

Returns number.
Generates a random integer in range 0-max.

```javascript
Mirelia.randomIntRange(min, max)
```
Parameter | Type | Description
------------ | ------------- | -------------
max | number | The minimum number.
max | number | The maximum number.

Returns number.
Generates a random integer in range min-max.

```javascript
Mirelia.randomRange(min, max)
```
Parameter | Type | Description
------------ | ------------- | -------------
max | number | The minimum number.
max | number | The maximum number.

Returns number.
Generates a random number in range min-max.

```javascript
Mirelia.radToDeg(n)
```
Parameter | Type | Description
------------ | ------------- | -------------
n | number | The radian value to be converted.

Returns number.
Converts radians to degrees.

```javascript
Mirelia.degToRad(n)
```
Parameter | Type | Description
------------ | ------------- | -------------
n | number | The degree value to be converted.

Returns number.
Converts degrees to radians.

## Mirelia Web DOM Methods

These methods deal with the site's design and loading "invisible" resources for canvas applications.

```javascript
Mirelia.createHeading(size, title, content)
```
Parameter | Type | Description
------------ | ------------- | -------------
size | number | The size of the new paragraph (1-6).
title | string | The title of the new heading.
content | string | The content of the new paragraph.

Returns none.
Writes a new heading and paragraph. If the number does not fit, it defaults fo h6.

```javascript
Mirelia.createHeading(size, title, content)
```
Parameter | Type | Description
------------ | ------------- | -------------
size | number | The size of the new paragraph (1-6).
title | string | The title of the new heading.
content | string | The content of the new paragraph.

Returns none.
Creates a new heading and paragraph. If the number does not fit, it defaults fo h6.

```javascript
Mirelia.createButton(id, text, image)
```
Parameter | Type | Description
------------ | ------------- | -------------
id | string | The ID of the new button.
text | string | The display text of the new button.
image | img element | The image of the new button. Type null for none.

Returns none.
Writes a new button.

```javascript
Mirelia.createLink(url)
```
Parameter | Type | Description
------------ | ------------- | -------------
url | string | The URL of the new link.

Returns none.
Writes a new anchor with a link.

```javascript
Mirelia.createCanvas(id, width, height)
```
Parameter | Type | Description
------------ | ------------- | -------------
id | string | The ID of the new canvas.
width | number | The width of the new canvas.
height | number | The height of the new canvas.

Returns none.
Writes a new canvas.

```javascript
Mirelia.createCanvasReady(id, width, height)
```
Parameter | Type | Description
------------ | ------------- | -------------
id | string | The ID of the new canvas.
width | number | The width of the new canvas.
height | number | The height of the new canvas.

Returns none.
Writes a new canvas and makes them the application's default canvas.

The following functions write "invisible" elements and return them to later refer to them in the application.

```javascript
Mirelia.loadImage(id, path)
```
Parameter | Type | Description
------------ | ------------- | -------------
id | string | The ID of the new image.
path | string | The path of the new image.

Returns img element.
Adds a new hidden image and returns it.

```javascript
Mirelia.loadSound(id, path, loop)
```
Parameter | Type | Description
------------ | ------------- | -------------
id | string | The ID of the new image.
path | string | The path of the new image.
loop | boolean | If it is true, the sound will loop.

Returns audio element.
Adds a new hidden sound and returns it.

```javascript
Mirelia.loadJS(path)
```
Parameter | Type | Description
------------ | ------------- | -------------
path | string | The path of the .JS code file.

Returns none.
Executes JavaScript from file.

```javascript
Mirelia.fromID(id)
```
Parameter | Type | Description
------------ | ------------- | -------------
id | string | The element's ID.

Returns HTML element.
An alternate spelling of document.getElementById.

```javascript
Mirelia.include(id, path, width, height)
```
Parameter | Type | Description
------------ | ------------- | -------------
id | string | The ID of the new include.
path | string | The path of a HTML document.
width | number | The width of the new include.
height | number | The height of the new include.

Returns none.
Creates an iframe element and loads a HTML document into it.

```javascript
Mirelia.reinclude(id, path)
```
Parameter | Type | Description
------------ | ------------- | -------------
id | string | The ID of an include.
path | string | The path of the new HTML document.

Returns none.
Assigns a new HTML document to an iframe element.

```javascript
Mirelia.redirect(url, newtab)
```
Parameter | Type | Description
------------ | ------------- | -------------
url | string | The URL of the redirect page.
newtab | boolean | If true, the URL will open in a new tab.

Returns none.
Redirects to another webpage (like clicking an anchor).

```javascript
Mirelia.openTag(tag, attributes)
```
Parameter | Type | Description
------------ | ------------- | -------------
tag | string | The HTML tag to be opened, like "a" or "h1".
attributes | string | The attributes of the new tag.

Returns none.
Opens a HTML tag, but does not close it.

```javascript
Mirelia.closeTag(tag)
```
Parameter | Type | Description
------------ | ------------- | -------------
tag | string | The HTML tag to be closed, like "a" or "h1".

Returns none.
Closes a HTML tag.

```javascript
Mirelia.createTag(tag, attributes, innerHTML)
```
Parameter | Type | Description
------------ | ------------- | -------------
tag | string | The HTML tag to be created, like "a" or "h1".
attributes | string | The attributes of the new tag.
innerHTML | string | The contents of the new tag.

Returns none.
Creates a new HTML element.

```javascript
Mirelia.createTagRaw(tag, attributes, innerHTML)
```
Parameter | Type | Description
------------ | ------------- | -------------
tag | string | The HTML tag to be created, like "a" or "h1".
attributes | string | The attributes of the new tag.
innerHTML | string | The contents of the new tag.

Returns string.
Creates a new HTML element, but does not write it, and returns it as string instead.

## Mirelia WebSocket methods

These methods are used to exchange data with server applications (like Node.js) using WebSockets.

```javascript
Mirelia.receive(url)
```
Parameter | Type | Description
------------ | ------------- | -------------
URL | string | The URL of the server.

Return type depends on the server.
Receives data of any type from the websocket (wss://) URL.

```javascript
Mirelia.send(url, data)
```
Parameter | Type | Description
------------ | ------------- | -------------
URL | string | The URL of the server.
data | any | The data to be sent.

Returns boolean.
Sends data of any type to the websocket (wss://) URL. Returns true if it succeded
or false if failed.

## Mirelia class dictionaries

Mirelia uses several dictionaries containing useful constants: Mirelia.Keyset, Mirelia.Schemes and Mirelia.Tags.

### Mirelia.Keyset

Mirelia.Keyset is a dictionary of KeyCodes.

Name | KeyCode | Name on Keyboard
------------ | ------------- | ------------- 
Mirelia.Keyset.key_up | 38 | Up Arrow
Mirelia.Keyset.key_down | 40 | Down Arrow
Mirelia.Keyset.key_left | 37 | Left Arrow
Mirelia.Keyset.key_right | 39 | Right Arrow
Mirelia.Keyset.key_tab | 9 | Tab
Mirelia.Keyset.key_caps | 20 | Caps Lock
Mirelia.Keyset.key_shift | 16 | Shift
Mirelia.Keyset.key_ctrl | 17 | Ctrl
Mirelia.Keyset.key_alt | 18 | Alt
Mirelia.Keyset.key_space | 32 | Space
Mirelia.Keyset.key_enter | 13 | Enter
Mirelia.Keyset.key_return | 13 | Enter
Mirelia.Keyset.key_none | 0 | None

### Mirelia.Schemes

Mirelia.Schemes is a dictionary of four-element KeyCode lists, used mainly for games.

Name | KeyCodes | Scheme on Keyboard
------------ | ------------- | ------------- 
Mirelia.Schemes.controlWS | 87, 83, 0, 0 | Move with WS (Y-axis only)
Mirelia.Schemes.controlAD | 0, 0, 65, 68 | Move with AD (X-axis only)
Mirelia.Schemes.controlWSAD | 87, 83, 65, 68 | Move with WSAD
Mirelia.Schemes.controlY | 38, 40, 0, 0 | Move with the up and down arrow keys (Y-axis only)
Mirelia.Schemes.controlX | 0, 0, 37, 39 | Move with the left and right arrow keys (X-axis only)
Mirelia.Schemes.controlArrows | 38, 40, 37, 39 | Move with the arrow keys

### Mirelia.Elements

Mirelia.Schemes is a dictionary of HTML tags, stored as strings.

Name | String | HTML Tag
------------ | ------------- | ------------- 
Mirelia.Elements.Mirelia.Elements.div | "div" | div
d | "div" | div
Mirelia.Elements.b | "b" | b
Mirelia.Elements.bold | "b" | b
Mirelia.Elements.i | "i" | i
Mirelia.Elements.italic | "i" | i
Mirelia.Elements.u | "u" | u
Mirelia.Elements.underline | "u" | u
Mirelia.Elements.s | "s" | s
Mirelia.Elements.strike | "s", | s
Mirelia.Elements.canvas | "canvas" | canvas
Mirelia.Elements.table | "table" | table
Mirelia.Elements.a | "a" | a

# Mirelia Resource Classes

The Mirelia framework makes use of some "resource classes". Unlike the Mirelia class, they are made for replication and inheritance.
They also make use of real-time events.

## Resource Class Events

The events for inherited classes are defined by overriding empty, pre-defined methods of their parent. They don't return anything and
won't accept any parameters. They all require the application loop, too.
**WARNING: Please DO NOT override their constructors. Please edit the Created() event method in lieu of a constructor.**

# MireliaAnimation

```javascript
animation = new MireliaAnimation(images)
```
Parameter | Type | Description
------------ | ------------- | -------------
images | List of img elements | The images to show.

This will create a new MireliaAnimation with a list of images.

A MireliaAnimation is the first replicable and extendable class of the Mirelia framework. It is used to draw animations on canvas
and can be applied to game objects as sprites.

## Events

```javascript
created()
```
Fires once when the object is created.

```javascript
visible()
```
Fires every frame when the object is visible.

```javascript
ended()
```
Fires once when the animation ends.

## Methods

```javascript
animation.reverse()
```

Returns none.
Reverses the animation.

```javascript
animation.alter(images)
```
Parameter | Type | Description
------------ | ------------- | -------------
images | List of img elements | The new images to show.

Returns none.
This will overwrite the MireliaAnimation's list of images.

```javascript
animation.play(canvas, x, y, play, speed)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The ID of the canvas element.
x | number | The x position to draw the animation on.
y | number | The y position to draw the animation on.
play | boolean | Type true to play or false not to play.
speed | number | The animation's speed, once per (speed) frames.

Returns none.
This will start or stop playing the animation on HTML5 canvas.

```javascript
animation.play(canvas, x, y, w, h, play, speed)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | string | The ID of the canvas element.
x | number | The x position to draw the animation on.
y | number | The y position to draw the animation on.
w | number | The width of the animation.
h | number | The height of the animation.
play | boolean | Type true to play or false not to play.
speed | number | The animation's speed, once per (speed) frames.

Returns none.
This will start or stop playing the stretched animation on HTML5 canvas.

# MireliaGameObject

```javascript
gameObject = new MireliaGameObject(awake, canvas)
```
Parameter | Type | Description
------------ | ------------- | -------------
awake | boolean | Does the object start functioning from the beginning?
canvas | canvas element | The canvas to bind the object to.

This will create a new MireliaGameObject.

Mirelia doubles up as a simple game engine, and supplies the MireliaGameObjects to make game development easier. The HTML canvas element
may be used as a game window, and makes use of backgrounds, scenes and camera as well.
**Please note that you may want to delete objects from memory. Do not use var. It will make it impossible to delete the objects.**

## Events

```javascript
created()
```
Fires once when the object is created.

```javascript
updated()
```
Fires on every browser frame if the object is awake, before moving and drawing the object.

```javascript
fore()
```
Fires on every browser frame if the object is awake, after moving and drawing the object.

```javascript
background()
```
Fires on every browser frame, whether the object is awake or not.

```javascript
clicked()
```
Fires when the object is clickable and clicked.

```javascript
asleep()
```
Fires when the object stops being awake.

```javascript
awoken()
```
Fires when the object starts being awake.

```javascript
hits()
```
Fires when the object hits another object's hitbox.

```javascript
hitsGroup()
```
Fires when the object hits another object's hitbox, and both objects belong to the same colission group.

```javascript
outside()
```
Fires when the object is outside the drawing area.

```javascript
destroyed()
```
Fires when the object is deleted.

## Active MireliaGameObject methods

These methods are available only if the object is awoken.

```javascript
gameObject.setMotion(xspeed, yspeed)
```
Parameter | Type | Description
------------ | ------------- | -------------
xspeed | number | The new horizontal speed.
yspeed | number | The new vertical speed.

Returns none.
Sets the new speed per frames of the object.

```javascript
gameObject.stop()
```

Returns none.
Sets the speed per frames of the object to 0,0. This will cause the object to stop.

```javascript
gameObject.moveTo(x, y, speed)
```
Parameter | Type | Description
------------ | ------------- | -------------
x | number | The x position to move the object to.
y | number | The y position to move the object to.
speed | number | The speed in pixels per frame to move the object with.

Returns none.
Moves the object towards point (x,y) with speed.

```javascript
gameObject.moveWithScheme(scheme, speed)
```
Parameter | Type | Description
------------ | ------------- | -------------
scheme | 4-element number list | The list of keys (up, down, left, right) to be pressed.
speed | number | The speed in pixels per frame to move the object with.

Returns none.
Moves the object with the desired direction if a one of the supplied keys is pressed.

```javascript
gameObject.spriteRelate(x, y, image)
```
Parameter | Type | Description
------------ | ------------- | -------------
x | number | The difference of the object's x position and the image's x position.
y | number | The difference of the object's y position and the image's y position.
image | img element | The image to draw.

Returns none.
Draws a new image with its position relative to the object's (x,y) position.

```javascript
gameObject.panWithSelf()
```

Returns none.
Translates the camera position by the object's speed.

```javascript
gameObject.setCamWithSelf()
```

Returns none.
Sets the camera position with the object's (x,y) position.

## Passive MireliaGameObject methods

These methods are available at any time.

```javascript
gameObject.setPos(x, y)
```
Parameter | Type | Description
------------ | ------------- | -------------
x | number | The new horizontal position.
y | number | The new vertical position.

Returns none.
Sets the new (x,y) position of the object.

```javascript
gameObject.setAnimation(animation)
```
Parameter | Type | Description
------------ | ------------- | -------------
animation | MireliaAnimation | The new MireliaAnimation to draw.

Returns none.
Sets or overwrites the object's MireliaAnimation. Should be called at least once.

```javascript
gameObject.setCanvas(canvas)
```
Parameter | Type | Description
------------ | ------------- | -------------
canvas | canvas element | The new canvas to bind the object to.

Returns none.
Sets or overwrites the object's canvas.

```javascript
gameObject.setVisuals(w, h)
```
Parameter | Type | Description
------------ | ------------- | -------------
w | number | The new animation width.
h | number | The new animation height.

Returns none.
Sets the new width and height of the object's drawing animation. Should be called at least once.

```javascript
gameObject.sleep()
```
Returns none.
Puts the object to sleep and fires the asleep() event.

```javascript
gameObject.wake()
```
Returns none.
Wakes the object and fires the awoken() event.

```javascript
gameObject.setHitboxRect(w, h)
```
Parameter | Type | Description
------------ | ------------- | -------------
w | number | The new hitbox width.
h | number | The new hitbox height.

Returns none.
Sets the object's hitbox to a rectangle.

```javascript
gameObject.setHitboxCircle(d)
```
Parameter | Type | Description
------------ | ------------- | -------------
d | number | The new hitbox diameter.

Returns none.
Sets the object's hitbox to a circle.

```javascript
gameObject.setHitboxGroup(gropu)
```
Parameter | Type | Description
------------ | ------------- | -------------
group | number | The new hitbox group.

Returns none.
Sets the object's hitbox group.

```javascript
gameObject.removeHitbox(d)
```

Returns none.
Removes the object's hitbox.

```javascript
gameObject.setBlueprint(blueprint)
```
Parameter | Type | Description
------------ | ------------- | -------------
blueprint | MireliaBlueprint | The MireliaBlueprint to apply.

Returns none.
Sets the object's properties from a MireliaBlueprint.

```javascript
gameObject.setClickable(clickable)
```
Parameter | Type | Description
------------ | ------------- | -------------
clickable | boolean | Decide if the object is clickable or not.

Returns none.
Sets the object clickable or unlickable. If the object is not clickable, the clicked() event won't fire.

```javascript
gameObject.destroy()
```

Returns none.
Removes the object safely from the memory, and the instance list (simply using delete causes problems).
Also fires destroyed(). Cannot be used with objects declared with var.

# MireliaGameScene

```javascript
gameScene = new MireliaGameScene(objects, background, speed)
```
Parameter | Type | Description
------------ | ------------- | -------------
objects | MireliaGameObject list | The list of objects to become awake.
background | img element | The new background image.
speed | number | The speed of the room, 60/speed frames per second.

This will create a new MireliaGameScene. All MireliaGameObject and their derivatives on the list will become awake and the ones not
on the list will become asleep, but their asleep() and awoken() events will not fire. A new background and scene speed will be set.

## Events

```javascript
created()
```
Fires once when the scene is created.

```javascript
updated()
```
Fires on every browser frame, if the scene is active.

```javascript
loaded()
```
Fires when the scene is loaded.

```javascript
ended()
```
Fires when a different scene is loaded.

MireliaGameScene has no methods.

# MireliaBlueprint

```javascript
blueprint = new MireliaBlueprint(x, y, xspeed, yspeed, animation)
```
Parameter | Type | Description
------------ | ------------- | -------------
x | number | The x position.
y | number | The y position.
xspeed | number | The horizontal speed.
yspeed | number | The vertical speed.
objects | MireliaAnimation | The animation.

The MireliaBlueprint is a structural class containing basic parameters of a MireliaGameObject. They can be assigned
to them.

## Events

```javascript
created()
```
Fires once when the blueprint is created.

## Methods

```javascript
blueprint.alter(x, y, xspeed, yspeed, animation)
```
Parameter | Type | Description
------------ | ------------- | -------------
x | number | The new x position.
y | number | The new y position.
xspeed | number | The new horizontal speed.
yspeed | number | The new vertical speed.
objects | MireliaAnimation | The new animation.

Overwrites attributes of the blueprint, excluding the hitbox.

```javascript
blueprint.alterPos(x, y)
```
Parameter | Type | Description
------------ | ------------- | -------------
x | number | The new x position.
y | number | The new y position.

Overwrites the (x,y) position of the blueprint.

```javascript
blueprint.alterSpeed(xspeed, yspeed)
```
Parameter | Type | Description
------------ | ------------- | -------------
xspeed | number | The new horizontal speed.
yspeed | number | The new vertical speed.

Overwrites the horizontal and vertical speed of the blueprint.

```javascript
blueprint.alterAnimation(animation)
```
Parameter | Type | Description
------------ | ------------- | -------------
objects | MireliaAnimation | The new animation.

Overwrites the animation of the blueprint.

```javascript
blueprint.alterHitboxRect(w, h)
```
Parameter | Type | Description
------------ | ------------- | -------------
w | number | The new hitbox width.
h | number | The new hitbox height.
group | number | The new hitbox group.

Returns none.
Overwrites the rectangular hitbox of the blueprint.

```javascript
blueprint.alterHitboxCircle(d)
```
Parameter | Type | Description
------------ | ------------- | -------------
d | number | The new hitbox diameter.
group | number | The new hitbox group.

Returns none.
Overwrites the circular hitbox of the blueprint.

```javascript
blueprint.removeHitbox(d)
```
Returns none.
Removes hitbox of the blueprint.

```javascript
blueprint.alterFromObj(object)
```
Parameter | Type | Description
------------ | ------------- | -------------
object | MireliaGameObject | A MireliaGameObject to alter the blueprint from.

Returns none.
Overwrites the attributes with the specified MireliaGameObject's.

# Mirelia Game/Real-time Methods

Some methods are executed from the Mirelia class.

```javascript
Mirelia.pause(pause)
```
Parameter | Type | Description
------------ | ------------- | -------------
pause | boolean | If true, the application will pause. If false, it will be resumed.

Returns none.
Pauses the real-time application. During this time, it will not continue working.

```javascript
Mirelia.loadScene(scene)
```
Parameter | Type | Description
------------ | ------------- | -------------
scene | MireliaGameScene | The MireliaGameScene to load.

Returns none.
This will load the specified MireliaGameScene. All objects on its list will be awake, these not on the list will not,
and a new background and application speed will be set.

```javascript
Mirelia.loadScene2(scene, blueprints)
```
Parameter | Type | Description
------------ | ------------- | -------------
scene | MireliaGameScene | The MireliaGameScene to load.
blueprints | list of MireliaBlueprints | The list of MireliaBlueprints to apply to the objects, must be the same length as the MireliaGameScene's object list.

Returns none.
This will load the specified MireliaGameScene. All objects on its list will be awake, these not on the list will not,
and a new background and application speed will be set. The objects will also get blueprints assigned.
If any object doesn't need a blueprint, type null in the blueprint list.

```javascript
Mirelia.onScene(scene)
```
Parameter | Type | Description
------------ | ------------- | -------------
scene | MireliaGameScene | The MireliaGameScene to compare.

Returns boolean.
Returns true if the tested scene is active, and false if it is not.

# MireliaSession

```javascript
session = new MireliaSession(credentials, time)
```
Parameter | Type | Description
------------ | ------------- | -------------
credentials | list of strings | The credentials to write. Select null for none.
time | number | The maximum time of the session.

The MireliaSession is used for authentication and session management, and it will expire over time.

## Events

```javascript
created()
```
Fires once when the session is created.

```javascript
started()
```
Fires when the session begins.

```javascript
ended()
```
Fires when the session ends.

```javascript
running()
```
Fires every frame if the session is active.

```javascript
authOk()
```
Fires once when the blueprint is created.

```javascript
authFail()
```
Fires once when the blueprint is created.

## Methods

```javascript
session.write(credentials)
```
Parameter | Type | Description
------------ | ------------- | -------------
credentials | list of strings | The credentials to write. Select null for none.

Returns none.
Overwrites the session credentials.

```javascript
session.setSec(time)
```
Parameter | Type | Description
------------ | ------------- | -------------
time | number | The new maximum session time (in seconds).

Returns none.
Overwrites the maximum time by the new value in seconds.

```javascript
session.setMin(time)
```
Parameter | Type | Description
------------ | ------------- | -------------
time | number | The new maximum session time (in minutes).

Returns none.
Overwrites the maximum time by the new value in minutes.

```javascript
session.resetTime(time)
```

Returns none.
Sets the session time back to the maximum time.

```javascript
session.getTimeLeft()
```
Returns number.
Returns the remaining time of the session (in seconds).

```javascript
session.setTimeLeft(time)
```
Parameter | Type | Description
------------ | ------------- | -------------
time | number | The new remaining session time (in minutes).

Returns none.
Sets new remaining time of the session (in seconds).

```javascript
session.authenticate(correct)
```
Parameter | Type | Description
------------ | ------------- | -------------
correct | array of strings | The array of correct credentials. Must be the same length as the session credentials.

Returns boolean.
Checks if the session credentials are the same as the correct credentials. If they are, the session begins, the authOk() event fires,
and the function returns true. If not, the authFail() event fires and the function returns false.

```javascript
session.authenticateCustom(correct, function)
```
Parameter | Type | Description
------------ | ------------- | -------------
correct | array of strings | The array of correct credentials. Must be the same length as the session credentials.
function | function or method taking exactly two string parameters and returning boolean | The function or method to compare the session credentials and correct credentials.

Returns boolean.
Checks if the passed function or method with session credentials and correct credentials as parameter returns true. If it does, the session
begins, the authOk() event fires, and the function returns true. If it doesn't, the authFail() event fires and the function returns false.

# MireliaComponent

```javascript
component = new MireliaComponent(contents, visible)
```
Parameter | Type | Description
------------ | ------------- | -------------
credentials | list of strings | The HTML tag types to create (like "a" or "h1").
visible | boolean | If true, the component will be visible from the very beginning, and hidden if false.

The MireliaComponents are groups of multiple HTML elements with events and references. New elements can be added
or deleted on the go.

## Events

```javascript
created()
```
Fires once when the session is created.

```javascript
hidden()
```
Fires on every browser frame if the component is hidden.

```javascript
shown()
```
Fires on every browser frame if the component is visible.

```javascript
onHide()
```
Fires when the component stops being visible.

```javascript
onShow()
```
Fires when the component starts being visible.

```javascript
background()
```
Fires on every browser frame regardless of visibility.

## Methods

```javascript
component.hide()
```
Returns none.
Hides the entire component.

```javascript
component.show()
```
Returns none.
Shows the entire component. Retains the old style.display of every element.

```javascript
component.add(tag, visible, attributes, innerHTML)
```
Parameter | Type | Description
------------ | ------------- | -------------
tag | string | The HTML tag type to create (like "a" or "h1").
visible | boolean | If true, the new element will be visible from the very beginning, and hidden if false.
attributes | string | The string of HTML attributes, e.g. "\"width="200px"; height="200px""\".
innerHTML | string | The innerHTML (element content) of the new element. Works well with the Mirelia.createTagRaw method.

Returns none.
Adds a new element to the component.

```javascript
component.sub(id, innerHTML)
```
Parameter | Type | Description
------------ | ------------- | -------------
id | number | The numeric ID of the supplied tag. The ID's start at 0. Even if the elements are wiped, the ID's don't change!
innerHTML | string | The innerHTML (element content) of the supplied element. Works well with the Mirelia.createTagRaw method.

Returns none.
Sets the innerHTML of a component's element.

```javascript
component.wipe(id)
```
Parameter | Type | Description
------------ | ------------- | -------------
id | number | The numeric ID of the supplied tag. The ID's start at 0. Even if the elements are wiped, the ID's don't change!

Returns none.
Deletes the selected element. The ID's of the other elements **DON'T** change.

```javascript
component.destroy()
```

Returns none.
Removes the component safely from the memory, and the instance list (simply using delete causes problems).
Also fires destroyed(). Cannot be used with components declared with var.


# MireliaAnimation

```javascript
mission = new MireliaAnimation(functions, parameters)
```
Parameter | Type | Description
------------ | ------------- | -------------
functions | list of functions or methods | The functions or methods to execute.
parameters | list of lists | The list of arguments lists for each function or method in order. If a function or method doesn't take them, type null.

This will create a new MireliaMission with a list of functions or methods to execute with parameters.

A MireliaMission can execute a group of functions in order.

## Events

```javascript
created()
```
Fires once when the mission is created.

```javascript
started()
```
Fires when the mission begins.

```javascript
ongoing()
```
Fires when the mission is in progress.

```javascript
finished()
```
Fires once when the mission ends.

```javascript
completed()
```
Fires once when the mission is completed succesfully (no exceptions caught).

```javascript
failed()
```
Fires once when the mission fails (catches an exception).

## Methods

```javascript
mission.start()
```

Returns none.
Starts the mission.

```javascript
mission.step()
```

Returns none.
Executes the next function on the list.

```javascript
mission.stepOne(id)
```
Parameter | Type | Description
------------ | ------------- | -------------
id | number | The ID of the function on the list to execute.

Returns none.
Executes one function (specified by ID).

```javascript
mission.stepAuto()
```

Returns none.
Executes all functions now.

```javascript
mission.stepAutoPart(first, last)
```
Parameter | Type | Description
------------ | ------------- | -------------
first | number | The first function on the list to execute.
last | number | The last function on the list to execute.

Returns none.
Executes all functions in certain range now.

```javascript
mission.jump(position)
```
Parameter | Type | Description
------------ | ------------- | -------------
position | number | The ID of the function on the list to jump to.

Returns none.
Jumps the mission progress to a position.

```javascript
mission.abort(success)
```
Parameter | Type | Description
------------ | ------------- | -------------
success | boolean | Is the mission considered successful?

Returns none.
Ends the mission. Fires completed() if it is successful or failed() otherwise.

```javascript
mission.setFailEnd(end)
```
Parameter | Type | Description
------------ | ------------- | -------------
end | boolean | Is the mission fails, will it end?

Returns none.
Sets if the mission should end on fail or not. False on default.

```javascript
mission.setFailError(error)
```
Parameter | Type | Description
------------ | ------------- | -------------
error | boolean | Is the mission fails, will it raise an exception?

Returns none.
Sets if the mission should raise an exception on fail or not. False on default.

```javascript
mission.alter(functions, parameters)
```
Parameter | Type | Description
------------ | ------------- | -------------
functions | list of functions or methods | The functions or methods to execute to overwrite.
parameters | list of lists | The list of arguments lists for each function or method in order to overwrite. If a function or method doesn't take them, type null.

Returns none.
Overwrites the entire mission.

```javascript
mission.alterPart(functions, parameters, position)
```
Parameter | Type | Description
------------ | ------------- | -------------
functions | list of functions or methods | The functions or methods to execute to overwrite.
parameters | list of lists | The list of arguments lists for each function or method in order to overwrite. If a function or method doesn't take them, type null.
position | number | The position of the first function to overwrite.

Returns none.
Overwrites a part of the mission, starting from a specified position.

```javascript
mission.append(function, parameters)
```
Parameter | Type | Description
------------ | ------------- | -------------
functions | function | The function or method to execute to append.
parameters | list | The list of arguments for the function or method to overwrite. If the function or method doesn't take them, type null.

Returns none.
Adds a new function and its parameters to the list.

```javascript
mission.wipe(id)
```
Parameter | Type | Description
------------ | ------------- | -------------
id | number | The function's ID to remove from the list.

Returns none.
Removes the IDth function and its parameters from the list.

# Application loop

In order to execute any real-time operation on the site, you need to supply an infinite loop. As the traditional infinite loop would crash the site,
Mirelia supplies a browser-friendly loop, called simply the "Application loop".

During its execution, the following things will happen in this specified order:

1. The default canvas will be refreshed automatically.
2. The default canvas background will be drawn.
3. The current MireliaGameScene update will happen.
4. The application update will happen.
5. The awake MireliaGameObject updates will happen.
6. The MireliaAnimations will be drawn.
7. The MireliaSessions will check if they didn't expire.
8. The MireliaMissions updates will happen.
9. The MireliaComponents updates will happen.
10. The application background update will be happen.

The application loop should be called as the **LAST** snippet of the page's JavaScript, and is called simply by typing
```javascript
__APPLICATIONLOOP(0)
```
into the definitive script element.

## Application content

Of course, you aren't forced to make a game or canvas application - you might want to update the other elements of the site, such as sessions.
In order to update the site on the go, you have to override the empty-on-default aplication content function called "Application content".

The content to be called each browser frame (if the application is not paused) can be changed by doing the following override:
```javascript
function __APPLICATIONCONTENT() {
	/*
	every function, method and operation to be executed in real time
	*/
}
```
This function's code will most likely be very long, as you will need to include EVERYTHING to be done in real time.

This will only be executed if the application is not paused. There is a second one, which will update regardless of the pause status, the "Application
background".

The content to be called each browser frame, regardless of the pause status, can be changed by doing the following override:
```javascript
function __APPLICATIONBACKGROUND() {
	/*
	every function, method and operation to be executed in real time
	*/
}
```

When the application is loaded, you might want to do something at the beginning. Use the "Application Begin" to do so.

The content to be called only at the beginning can be changed by doing the following override:
```javascript
function __APPLICATIONBEGIN() {
	/*
	every function, method and operation to be executed at the beginning
	*/
}
```

All of these is called automatically - there is no need to call these functions manually.

# Application stem

This is the most complete model of the framework, which contains not only a complete Application loop, but also a "framework controller"
which manages an iframe to load more HTML.
**Note: The files loaded into the Stem must include Mirelia as well if they make use of the Mirelia functions and classes.**
**They may not use Application loops and stems of their own.**

Just like the Application loop, it should be called as the **LAST** snippet of the page's JavaScript, and is called simply by typing
```javascript
STEM()
```
into the definitive script element. Another Application Loop should **NOT** be called.
This will write the stem as the next HTML element, as an iframe inside an unstyled div.
From now on, only HTML (except for the script tags) may be written.

## Stem class

There is a static class which manages the application stem, called simply Stem. It has a few methods used to manage the application stem.
**WARNING: These changes should not be called in the frame updates, as this would lead to massive slowdowns and ugly effects.**
**They also may not be called directly from the script tags, as the stem is defined as the last function.**

```javascript
Stem.set(file)
```
Parameter | Type | Description
------------ | ------------- | -------------
file | string | The name of the .html file to be loaded into the stem.

Returns none.
Changes the document to be visible in the stem.

```javascript
Stem.clear()
```

Returns none.
Removes the document visible in the stem.

```javascript
Stem.resize(width, height)
```
Parameter | Type | Description
------------ | ------------- | -------------
width | number | The new width of the stem.
height | number | The new height of the stem.

Returns none.
Resizes the stem.

```javascript
Stem.visible(visible)
```
Parameter | Type | Description
------------ | ------------- | -------------
visible | boolean | Is the stem visible?

Returns none.
Shows or hides the stem.

## Usage and license

* The Mirelia Framework is open-source and it may be modified to suit the developer's needs.
* The pull requests are allowed and welcome. Feel free to express your work with the framework. Please contact me before commiting a major change.
* The framework may be redistributed for free, but never for money.
* Contact available through email: tadek2001@gmail.com.

Licensed upon [the MIT license](https://en.wikipedia.org/wiki/MIT_License/).

Tadeusz Lorkowski
Tadeusz Lorkowski
ul. Jana Winieckiego 4/1
81-710 Sopot, Pomorskie, Poland
NIP: 5851491822
REGON: 386678929

Phone number: 792092832