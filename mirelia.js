/*
-----------------------------------------------------------------------------------------
///                                 +++ MIRELIA +++                                   \\\
                              (C) 2020 Tadeusz Lorkowski

AN OPEN SOURCE JAVASCRIPT FRONTEND FRAMEWORK. USED FOR MAKING BEAUTIFUL WEB APPLICATIONS.
 COMPATIBLE WITH MOST DESKTOP WEB BROWSERS, INCLUDING BUT NOT LIMITED TO GOOGLE CHROME,
                    OPERA, MOZILLA FIREFOX, AND MICROSOFT EDGE.
				   
                      SOURCE: www.epejsodion.com/mirelia.js
                             WRITTEN BY TADEUSZ LORKOWSKI
-----------------------------------------------------------------------------------------
*/

//You may comment these logs if you don't wish them to appear. Showing them is appreciated though.
console.log("Mirelia 1.0 © 2020 Tadeusz Lorkowski. Last update 11-27-2020");
console.log("This is an open source framework. Feel free to customize it to your liking.");

//control variables - should not be changed nor refered to 
npvisjzbmpifxkmb = false;
jbvgis9r0fudihvg = false;
bs9cd7nsdv7o9fdv = true;
htsmf9ibhnsadufi = 0;
nigfopsgbkmjtgmb = 0;
v5b78oemunvcdsin = 0;

//Library

//Please ignore the class name. It should not be re-used.
//This is the main body of the Mirelia class containing most of the library's functions.
class G13653FASBX35B1ZX3B54 {
	constructor() {
		this.appType = 0;
		this.appName = "Mirelia Application";
		this.appDescription = "This app has no description.";
		this.appCreator = "";
		this.appVersion = "1.0";
		//The Keyset contains more friendly names for the KeyCodes.
		this.Keyset = {
		key_up : 38,
		key_down : 40,
		key_left : 37,
		key_right : 39,
		key_tab : 9,
		key_caps : 20,
		key_shift : 16,
		key_ctrl : 17,
		key_alt : 18,
		key_space : 32,
		key_enter : 13,
		key_return : 13,
		key_none : 0,
		key_PR : 0,
		key_RL : 0,
		key_GET : 0,
		t_PR : 0,
		t_RL : 0,
		t_GET : 0
		}
		//A structure of key schemes for MireliaGameObject.moveWithScheme()
		this.Schemes = {
		controlWS: [87, 83, 0, 0],
		controlAD: [0, 0, 65, 68],
		controlWSAD: [87, 83, 65, 68],
		controlY: [38, 40, 0, 0],
		controlX: [0, 0, 37, 39],
		controlArrows: [38, 40, 37, 39]
		};
		this.Elements = {
		div: "div",
		d: "div",
		b: "b",
		bold: "b",
		i: "i",
		italic: "i",
		u: "u",
		underline: "u",
		s: "s",
		strike: "s",
		canvas: "canvas",
		table: "table",
		tr: "tr",
		td: "td",
		a: "a",
		
		}
		this.Pos = {
			x : 0,
			y : 0,
			limitx : 0,
			limity : 0,
			limit : false
		}
		this.checkEnd = false;
		this.bvfdsboigvlz = 0;
		this.bpiusdvzkvib = 0;
		this.instList = [];
		this.sceneList = [];
		this.bpList = [];
		this.currentScene = 0;
		this.defCtx = null;
		this.masterVolume = 1;
		this.mouseX = 0;
		this.mouseY = 0;
		this.appBkg = null;
		this.appBkgX = 0;
		this.appBkgY = 0;
		this.appBkgStretch = false;
		this.sceneid = 0;
		this.appSpeed = 1;
		this.instanceNumber = 0;
		this.sceneNumber = 0;
		this.bpNumber = 0;
		this.loadFrames = 0;
		this.cList = [];
		this.cNumber = 0;
		this.mList = [];
		this.mNumber = 0;
		this.hList = [];
		this.hNumber = 0;
		this.sList = [];
		this.sNumber = 0;
		this.aList = [];
		this.aNumber = 0;
		this.rsList = [];
		this.rsNumber = 0;
	}
	//alert app info
	infoAlert() {
			alert(this.appName+" "+this.appVersion+"\nby "+this.appCreator+"\n"+this.appDescription);
	}
	//change app parameters
	setDesc(a2, a3, a4, a5, a6) {
		this.appName = a2;
		this.appDescription = a3;
		this.appCreator = a4;
		this.appVersion = a5;
		if(a6) {
			this.infoAlert();
		}
	}
	
	//DRAWING FUNCTIONS
	
	//set the default (defCtx) context from ID
	setCanvas(_canvas) {
		this.defCtx = _canvas;
		this.appBkgX = document.getElementById(_canvas).width;
		this.appBkgY = document.getElementById(_canvas).height;
	}
	
	//draw a circle
	circle(a, x, y, d, c) {
	var canvas = document.getElementById(a);
	if (canvas.getContext) {
    this.ctx = canvas.getContext('2d');
	}
	this.ctx.fillStyle = c;
	this.ctx.arc(x, y, d, 0, Math.PI*2, false);
    this.ctx.fill();
	}
	//draw a ring
	ring(a, x, y, d, t, c) {
		var canvas = document.getElementById(a);
		if (canvas.getContext) {
		this.ctx = canvas.getContext('2d');
		}
		for(this.i=0; this.i<t; this.i++) {
		this.ctx.strokeStyle = c;
		this.ctx.arc(x, y, d+this.i, 0, Math.PI*2, false);
		this.ctx.stroke();
		}
	}
	//draw a sprite
	sprite(c, x, y, gfx) {
		var canvas = document.getElementById(c);
		if (canvas.getContext) {
		this.ctx = canvas.getContext('2d');
		}
		this.currentImage = 0;
		this.ctx.drawImage(gfx, x, y);
	}
	//draw a stretched sprite
	spriteStretch(c, x, y, w, h, gfx) {
		var canvas = document.getElementById(c);
		if (canvas.getContext) {
		this.ctx = canvas.getContext('2d');
		}
		this.currentImage = 0;
		this.ctx.drawImage(gfx, x, y, w, h);
	}
	//draw part of a sprite
	spritePartial(c, x, y, xp, yp, w, h, gfx) {
		var canvas = document.getElementById(c);
		if (canvas.getContext) {
		this.ctx = canvas.getContext('2d');
		}
		this.currentImage = 0;
		this.ctx.drawImage(gfx, xp, yp, w, h, x, y, w, h);
	}
	//draw rotated sprite
	spriteRotated(c, x, y, r, gfx) {
	var degs = (r*Math.PI)/180;
	var canvas = document.getElementById(c);
	if (canvas.getContext) {
	this.ctx = canvas.getContext('2d');
	}
	this.ctx.translate(document.getElementById(c).width/2, document.getElementById(c).height/2);
	this.ctx.rotate(degs);
	this.ctx.drawImage(gfx, -x/2, -y/2);
	this.ctx.rotate(-degs);
	this.ctx.translate(-document.getElementById(c).width/2, -document.getElementById(c).height/2);
	}
	//draw a stretched and rotated sprite
	spriteTransform(c, x, y, w, h, r, gfx) {
	var degs = (r*Math.PI)/180;
	var canvas = document.getElementById(c);
	if (canvas.getContext) {
	this.ctx = canvas.getContext('2d');
	}
	this.currentImage = 0;
	this.ctx.translate(document.getElementById(c).width/2, document.getElementById(c).height/2);
	this.ctx.rotate(degs);
	this.ctx.drawImage(gfx, -x/2, -y/2, w, h);
	this.ctx.rotate(-degs);
	this.ctx.translate(-document.getElementById(c).width/2, -document.getElementById(c).height/2);
	}
	//draw sprite with all functions
	spriteComplete(c, x, y, w, h, xp, yp, wp, hp, r, gfx) {
	var degs = (r*Math.PI)/180;
	var canvas = document.getElementById(c);
	if (canvas.getContext) {
	this.ctx = canvas.getContext('2d');
	}
	this.ctx.translate(x, y);
	this.ctx.rotate(degs);
	this.ctx.drawImage(gfx, xp, yp, w, h, -x/2, -y/2, w, h);
	this.ctx.rotate(-degs);
	this.ctx.translate(-x, -y);
	}
	
	//draw text
	drawText(c, font, str, x, y, align) {
		var canvas = document.getElementById(c);
		if (canvas.getContext) {
		this.ctx = canvas.getContext('2d');
		}
	this.ctx.font = font;
	this.ctx.textAlign = align;
	this.ctx.fillText(str, x, y);
	this.ctx.textAlign = "start";
	}
	
	//draw colorful text
	drawTextColor(c, font, str, x, y, _color, align) {
		var canvas = document.getElementById(c);
		if (canvas.getContext) {
		this.ctx = canvas.getContext('2d');
		}
	this.ctx.fillStyle = _color;
	this.ctx.font = font;
	this.ctx.textAlign = align;
	this.ctx.fillText(str, x, y);
	this.ctx.textAlign = "start";
	}
	
	//draw stroke text
	drawTextStroke(c, font, str, x, y, align) {
		var canvas = document.getElementById(c);
		if (canvas.getContext) {
		this.ctx = canvas.getContext('2d');
		}
	this.ctx.font = font;
	this.ctx.textAlign = align;
	this.ctx.strokeText(str, x, y);
	this.ctx.textAlign = "start";
	}
	
	//draw colorful stroke text
	drawTextStrokeColor(c, font, str, x, y, _color, align) {
		var canvas = document.getElementById(c);
		if (canvas.getContext) {
		this.ctx = canvas.getContext('2d');
		}
	this.ctx.strokeStyle = _color;
	this.ctx.font = font;
	this.ctx.textAlign = align;
	this.ctx.strokeText(str, x, y);
	this.ctx.textAlign = "start";
	}
	
	//draw progress bar
	drawProgBar(c, _horizontal, _c1, _c2, _x, _y, _len, _width, _prog) {
		var canvas = document.getElementById(c);
		if (canvas.getContext) {
			this.ctx = canvas.getContext('2d');
		}
		if(_horizontal == true) {
			this.ctx.strokeStyle = _c2;
			this.ctx.strokeRect(_x, _y, _len, _width);
			this.ctx.strokeRect(_x+1, _y+1, _len-1, _width-1);
			this.ctx.fillStyle = _c1;
			this.ctx.fillRect(_x+2, _y+2, Math.floor(_len*(_prog/100))-2, _width-3);
		} else {
			this.ctx.strokeStyle = _c2;
			this.ctx.strokeRect(_x, _y, _width, _len);
			this.ctx.strokeRect(_x+1, _y+1, _width-1, _len-1);
			this.ctx.fillStyle = _c1;
			this.ctx.fillRect(_x+2, _y+2, _width-3, Math.floor(_len*(_prog/100))-2);
		}
	}
	
	//refresh screen
	refresh(_canvas) {
		var canvas = document.getElementById(_canvas);
		if (canvas.getContext) {
		this.ctx = canvas.getContext('2d');
		this.ctx.clearRect(0, 0, document.getElementById(_canvas).width, document.getElementById(_canvas).height);
		}
		this.checkEnd = false;
	}
	
	//sets the default background for the application. Will be drawn automatically.
	setBackground(_image, _stretch) {
		this.appBkg = _image;
		this.appBkgStretch = _stretch;
	}
	
	//AUDIO FUNCTIONS
	//WARNING: Due to an autoplay policy, these functions may not be called before the user had "interacted"
	//with the page (e. g. clicked something). This will result in a browser-implemented exception.
	
	//plays a sound loaded with either HTML or loadSound()
	playSound(_sndid) {
		_sndid.play();
	}
	
	//pauses a sound
	pauseSound(_sndid) {
		_sndid.pause();
	}
	
	//stops a sound. If _replay is true, plays the sound all over again.
	stopSound(_sndid, _replay) {
		_sndid.pause();
		_sndid.load();
		if(_replay) {
			_sndid.play();
		}
	}
	
	//see if a sound is playing. It returns false if it had either paused or ended.
	soundIsPlaying(_sndid) {
		if(_sndid.paused || _sndid.ended)
			return false;
		else
			return true;
	}
	
	//see if a sound is looping
	soundIsLoop(_sndid) {
		return _sndid.loop;
	}
	
	//set whether a sound should loop or not
	soundLoop(_sndid, _loop) {
		_sndid.loop = loop;
	}
	
	//returns the position of a sound (in seconds)
	soundPos(_sndid) {
		return _sndid.currentTime;
	}
	
	//jumps to position specified in seconds. If the position is higher than the duration, it will jump to the remainder.
	soundJump(_sndid, _time) {
		if(_time >= _sndid.duration)
			_sndid.currentTime = _time%_sndid.duration;
		else
			_sndid.currentTime = _time;
	}
	
	//changes the volume of a sound, in range 0-1. If lower than 0, the sound is muted and if higher than 1, will work like 1.
	soundVolume(_sndid, _vol) {
		if(_vol < 0)
			_vol = 0;
		else if(_vol > 1)
			_vol = 1;
		_sndid.volume = _vol*this.masterVolume;
	}
	
	//CAMERA FUNCTIONS
	
	//pans the camera
	pan(_x, _y) {
		if(this.Pos.limit) {
			if(this.Pos.x+_x > this.Pos.limitx || this.Pos.x+_x < 0)
				this.Pos.x += _x;
			if(this.Pos.y+_y > this.Pos.limity || this.Pos.y+_y < 0)
				this.Pos.y += _y;
		} else {
			this.Pos.x += _x;
			this.Pos.y += _y;
		}
	}
	
	//set the camere position
	setCam(_x, _y) {
		this.Pos.x = _x;
		this.Pos.y = _y;
	}
	
	//reset the camere position
	resetCam() {
		this.Pos.x = 0;
		this.Pos.y = 0;
	}
	
	//toggle and/or set the camera boundaries
	setLimit(_limit, _x, _y) {
		this.Pos.limit = _limit;
			this.Pos.limitx = _x;
			this.Pos.limity = _y;
	}
	
	//EVENT SIMPLIFICATION FUNCTIONS
	
	//if key is pressed
	keyPress(key) {
	document.addEventListener("keydown", event => {
		this.Keyset.key_PR = event.keyCode;
	});
			if (this.Keyset.key_PR == key && !this.checkEnd) {
				this.checkEnd = true;
				return true;
			} else {
				return false;
			}
	}
	
	//if key is released
	keyRelease(key) {
	document.addEventListener("keyup", event => {
		this.Keyset.key_RL = event.keyCode;
	});
			if (this.Keyset.key_RL == key && !this.checkEnd) {
				this.checkEnd = true;
				return true;
			} else {
				return false;
			}
	}
	
	//get pressed key
	getInput() {
		document.addEventListener('keydown', event => {
	this.Keyset.key_GET = event.keyCode;
	});
	if(this.checkEnd)
	return 0;
	this.checkEnd = true;
	return this.Keyset.key_GET;
	}
	
	//if mouse pressed
	getMouse() {
		if(htsmf9ibhnsadufi == 0)
			this.npvisjzbmpifxkmb = false;
		else
			htsmf9ibhnsadufi--;
		document.addEventListener('click', event => {
			this.npvisjzbmpifxkmb = true;
			htsmf9ibhnsadufi = 2;
		});
		return this.npvisjzbmpifxkmb;
	}
	
	//get mouse position in canvas
	getMousePos(_canvas) {
		this.gvjp9ifdxknbgfx = document.getElementById(_canvas).getBoundingClientRect();
		document.addEventListener('mousemove', event => {
		this.npvisjzbmpifxkmb = false;
		bs9cd7nsdv7o9fdv = true;
		this.gvjp9ifdxknbgfx = document.getElementById(_canvas).getBoundingClientRect();
		this.posX = Math.floor((event.clientX - this.gvjp9ifdxknbgfx.left)/(this.gvjp9ifdxknbgfx.right - this.gvjp9ifdxknbgfx.left)*document.getElementById(_canvas).width),
		this.posY = Math.floor((event.clientY - this.gvjp9ifdxknbgfx.top)/(this.gvjp9ifdxknbgfx.bottom - this.gvjp9ifdxknbgfx.top)*document.getElementById(_canvas).height)
		});
		return {x:this.posX, y:this.posY};
	}
	
	//MISC. DATA FUNCTIONS
	
	//Reverse a string.
	reverseString(_str) {
		this._str2 = "";
		for(this.i=0; this.i<_str.length; this.i++)
			this._str2 += _str.charAt(_str.length-this.i-1);
		return this._str2;
	}
	
	//Insert sort algorithm. Works for number and string arrays.
	sort(_array) {
		for(this.i=0; this.i<_array.length; this.i++) {
			if(this.i > 0) {
				if(this.itype != typeof(_array[this.i]))
					return _array;
			}
			this.itype = typeof(_array[this.i]);
		}
		if(this.itype == "number") {
		for(this.i=_array.length-2; this.i>=0; this.i--) {
			this.a = _array[this.i];
			this.j = this.i+1;
			while(this.j<_array.length && this.a > _array[this.j]) {
				_array[this.j-1] = _array[this.j];
				this.j++;
			}
		_array[this.j-1] = this.a;
		}
		} else if(this.itype == "string") {
		for(this.i=_array.length-2; this.i>=0; this.i--) {
			this.a = _array[this.i];
			this.j = this.i+1;
			while(this.j<_array.length && this.a.localeCompare(_array[this.j]) == 1) {
				_array[this.j-1] = _array[this.j];
				this.j++;
			}
		_array[this.j-1] = this.a;
		}
		}
		return _array;
	}
	
	//Sums all elements of a numerical array
	sum(_array) {
		this.a = 0;
		for(this.i=0; this.i<_array.length; this.i++)
			this.a += _array[this.i];
		return this.a;
	}
	
	//Sums only a part of a numberical array
	sumPart(_array, _i1, _i2) {
		this.a = 0;
		if(_array.length <= _i2)
			_i2 = _array.length-1;
		for(this.i=_i1; this.i<_i2+1; this.i++) {
			this.a += _array[this.i];
		}
		return this.a;
	}
	
	//RNG
	randomInt(x) {
		return Math.floor(Math.random()*x)+1;
	}
	
	//Range RNG
	randomIntRange(x, y) {
		return x+Math.floor(Math.random()*(y-x))+1;
	}
	
	//Range RNG
	randomRange(x, y) {
		return x+(Math.random()*(y-x))+1;
	}
	
	//radians to degrees
	radToDeg(_a) {
		return (_a/Math.PI)*180;
	}
	
	//degrees to radians
	degToRad(_a) {
		return (_a*Math.PI)/180;
	}
	
	//WEB DOM FUNCTIONS
	
	createHeading(priority, title, content) { //writes a heading of size priority
		if(priority == 1 || priority == 2 || priority == 3 || priority == 4 || priority == 5) {
		document.write("<h"+priority.toString()+">"+title+"</h"+priority.toString()+"><p>"+content+"</p>");
		} else {
		document.write("<h6>"+title+"</h6><p>"+content+"</p>");
		}
	}
	
	createButton(_id, _text, _img) { //creates a button of text _text and image _img. Type _img = null for no image.
		if(_img == null) {
			document.write('<button id='+_anim+';text='+_text+';></button>');
		} else {
			document.write('<button id='+_anim+';text='+_text+';style="background-image:'+_img+'"></button>');
		}
	}
	
	createLink(_url) { //creates a link of URL _url.
		document.write('<a href='+_link+'></a>');
	}
	
	createCanvas(_id, _w, _h) { //creates a canvas of id _id, width _w and height _h.
		document.write('<canvas id='+_id+'; width='+_w+'; height='+_h+'></canvas>');
	}
	
	createCanvasReady(_id, _w, _h) { //creates a canvas of id _id, width _w and height _h, and sets it as the application's default canvas.
		document.write('<canvas id='+_id+'; width='+_w+'; height='+_h+'></canvas>');
		this.defCtx = _id;
		this.setCanvas(_id);
	}
	
	loadImage(_imgid, _imgpath) { //load an image from the file system
		document.write('<img style="display:none" id="'+_imgid+'"; src="'+_imgpath+'">');
		return document.getElementById(_imgid);
	}
	
	loadSound(_sndid, _sndpath, _loop) { //load a sound from the file system, and loop it if _loop is true.
		if(_loop)
			document.write('<audio id="'+_sndid+'"; src="'+_sndpath+'"; loop=true>');
		else
			document.write('<audio id="'+_sndid+'"; src="'+_sndpath+'"; loop=false>');
		return document.getElementById(_sndid);
	}
	
	loadJS(_file) { //Loads a JS file.
		document.write("<script src=\""+_file+"\";type=javascript></script>");
	}
	
	fromID(_str) { //alternate, easier spelling of document.getElementById
		return document.getElementById(_str);
	}
	
	include(_id, _file, _w, _h) { //includes HTML text of set width and height (works like a single-address framework).
		document.write("<iframe id=\""+_id+"\"; src=\""+_file+"\"; width=\""+_w+"\"; height=\""+_h+"\"></iframe>");
	}
	
	reinclude(_id, _file) { //re-includes HTML text in an iframe.
		document.getElementById(_id).src = _file;
	}
	
	redirect(_link, _newtab) { //redirects you to the specified link
		var newpage = document.createElement("a");
		newpage.href = _link;
		if(_newtab)
			newpage.target="_blank";
        document.body.appendChild(newpage);
        newpage.click();
	}
	
	openTag(_tag, _attr) { //opens a HTML element with attributes
		if(_attr == null || _attr == "")
			document.write("<"+_tag+">");
		else
			document.write("<"+_tag+" "+_attr+">");
	}
	
	closeTag(_tag) { //closes a HTML element
		document.write("</"+_tag+">");
	}
	
	createTag(_tag, _attr, _innerHTML) { //creates a new HTML element with attributes and innerHTML
		this.openTag(_tag, _attr);
		if(_innerHTML != null && _innerHTML != "")
			document.write(_innerHTML);
		this.closeTag(_tag);
	}
	
	createTagRaw(_tag, _attr, _innerHTML) { //returns a HTML element with attributes and innerHTML, useful for MireliaComponent.sub
		return "<"+_tag+" "+_attr+">"+_innerHTML+"</"+_tag+">";
	}
	
	//WEB CLIENT FUNCTIONS
	
	receive(_url) { //receives data from the server
		RDH435H14GC5N23 = new WebSocket(_url);
		dat = null;
		RDH435H14GC5N23.onmessage = function(rec) {
		dat = rec.data;
		}
		RDH435H14GC5N23.close();
		return dat;
	}
	send(_url, _data) { //sends data to the server
		RDH435H14GC5N23 = new WebSocket(_url);
		success = false;
		RDH435H14GC5N23.onopen = function() {
		RDH435H14GC5N23.send(_data);
		success = true;
		};
		RDH435H14GC5N23.close();
		return success;
	}
	
	//GAME/REAL TIME APPLICATION FUNCTIONS
	
	//pauses the application. When the application is paused, all MireliaGameObject updates and __APPLICATIONCONTENT() are not running.
	pause(_pause) {
		jbvgis9r0fudihvg = _pause;
	}
	
	//loads a MireliaGameScene, replacing the background, speed, waking all objects on the list and unwaking all objects not on the list.
	//awoken() and asleep() will not be executed.
	loadScene(_MireliaGameScene) {
		if(this.loadFrames > 0)
			return;
		var awokenIndices = [];
		this.sceneList[this.currentScene].ended();
		for(var i in this.instList) {
			for(var j in _MireliaGameScene.objects) {
				if(_MireliaGameScene.objects[j].instanceIndex == this.instList[i].instanceIndex) {
					if(!this.instList[i].awake) {
						this.instList[i].awake = true;
						awokenIndices.push(i);
					}
				}
			}
		}
		var nvupfdgfsnidvg = false;
		for(var i in this.instList) {
			for(var j in _MireliaGameScene.objects) {
				for(var k in awokenIndices)
					if(awokenIndices[k] == i) {
						nvupfdgfsnidvg = true;
					} else {
					}
				if(_MireliaGameScene.objects[j].instanceIndex != this.instList[i].instanceIndex && !nvupfdgfsnidvg) {
					if(this.instList[i].awake) {
						this.instList[i].awake = false;
					}
				}
				nvupfdgfsnidvg = false;
			}
		}
		this.loadFrames = 10;
		for(var i in this.sceneList)
			if(_MireliaGameScene.sceneIndex == this.sceneList[i].sceneIndex)
				this.currentScene = i;
		this.sceneList[this.currentScene].loaded();
	}
	
	//loads a MireliaGameScene, replacing the background, speed, waking all objects on the list and unwaking all objects not on the list.
	//awoken() and asleep() will not be executed. This will also apply blueprints to all the awaken objects.
	loadScene2(_MireliaGameScene, _blueprints) {
		var k = 0;
		if(this.loadFrames > 0)
			return;
		var awokenIndices = [];
		this.sceneList[this.currentScene].ended();
		for(var i in this.instList) {
			for(var j in _MireliaGameScene.objects) {
				if(_MireliaGameScene.objects[j].instanceIndex == this.instList[i].instanceIndex) {
					if(!this.instList[i].awake) {
						this.instList[i].awake = true;
						if(_blueprints[i] != null)
							this.instList[i].applyBlueprint(_blueprints[i]);
						awokenIndices.push(i);
					}
				}
			}
		}
		var nvupfdgfsnidvg = false;
		for(var i in this.instList) {
			for(var j in _MireliaGameScene.objects) {
				for(var k in awokenIndices)
					if(awokenIndices[k] == i) {
						nvupfdgfsnidvg = true;
					} else {
					}
				if(_MireliaGameScene.objects[j].instanceIndex != this.instList[i].instanceIndex && !nvupfdgfsnidvg) {
					if(this.instList[i].awake) {
						this.instList[i].awake = false;
					}
				}
				nvupfdgfsnidvg = false;
			}
		}
		this.loadFrames = 10;
		for(var i in this.sceneList)
			if(_MireliaGameScene.sceneIndex == this.sceneList[i].sceneIndex)
				this.currentScene = i;
		this.sceneList[this.currentScene].loaded();
	}
	
	//check if a MireliaGameScene is currently active
	onScene(_MireliaGameScene) {
		return _MireliaGameScene.sceneIndex == this.currentScene;
	}
	
	//all for Mirelia
}

//Refer to this! (e.g. Mirelia.functionname();)
let Mirelia = new G13653FASBX35B1ZX3B54();

//An animation class used solely for MireliaGameObject. If you are not into it, ignore this class.

class MireliaAnimation {
	
	//EVENTS
	
	created() {
		//This will be executed on every instatiation. It is empty on default and is made to be overrided when a custom MireliaAnimation
		//derivative is created.
	}
	
	visible() {
		//This will be executed every frame if the animation is playing. It is empty on default and is made to be overrided
		//when a custom MireliaAnimation derivative is created.
	}
	
	ended() {
		//This will be executed every frame when the animation is over. It is empty on default and is made to be overrided
		//when a custom MireliaAnimation derivative is created.
	}
	
	//takes an array of images collected with document.getElementById() or Mirelia.fromID()
	constructor(_imgs) {
		this.animframes = _imgs.length;
		this.animframe = [];
		this.animfr = 0;
		this.animspd = 10;
		this.animindex = 0;
		this.plays = false;
		this.createEV = false;
		for(var i=0; i<this.animframes; i++) {
			this.animframe[i] = _imgs[i];
		}
		this.aIndex = Mirelia.aNumber;
		Mirelia.aNumber++;
		
		Mirelia.aList.push(this);
	}
	
	reverse() { //reverses the animation
		this.animframe.reverse();
	}
	
	alter(_imgs) { //overwrite the list of images
		this.animframes = _imgs.length;
		this.animframe = [];
		this.animfr = 0;
		for(var i=0; i<this.animframes; i++) {
			this.animframe[i] = _imgs[i];
		}
	}
	
	play(_c, _x, _y, _willplay, _spd) { //test the animation
		this.plays = _willplay;
		this.animspd = _spd;
		if(this.plays) {
			Mirelia.sprite(_c, _x, _y, this.animframe[this.animindex]);
			this.animfr++;
			if(this.animfr >= this.animspd) {
				if(this.animindex == this.animframes-1) {
					this.animindex = 0;
					this.ended();
				} else {
					this.animindex++;
				}
				this.animfr = 0;
			}
		}
	}
	
	playStretched(_c, _x, _y, _xscale, _yscale, _willplay, _spd) { //test the animation
		this.plays = _willplay;
		this.animspd = _spd;
		if(this.plays) {
			Mirelia.spriteStretch(_c, _x, _y, _xscale, _yscale, this.animframe[this.animindex]);
			this.animfr++;
			if(this.animfr >= this.animspd) {
				if(this.animindex == this.animframes-1) {
					this.animindex = 0;
					this.ended();
				} else {
					this.animindex++;
				}
				this.animfr = 0;
			}
		}
	}
}

//Mirelia doubles up as a simple game engine. Create MireliaGameObjects with custom events.
//You can also extend them for more personalized use.
class MireliaGameObject {
	
	//EVENTS
	
	created() {
		//This will be executed on every instatiation. It is empty on default and is made to be overrided when a custom MireliaGameObject
		//derivative is created.
	}
	
	updated() {
		//This will be executed on every browser frame. It is empty on default and is made to be overrided when a custom MireliaGameObject
		//derivative is created.
	}
	
	fore() {
		//This will be executed on every browser frame, but after drawing and moving. It is empty on default and is made to be overrided
		//when a custom MireliaGameObject derivative is created.
	}
	
	background() {
		//This will be executed on every browser frame, even if the object is asleep. It is empty on default and is made to be overrided
		//when a custom MireliaGameObject derivative is created.
	}
	
	clicked() {
		//This will be executed when its MireliaAnimation is clicked. It is empty on default and is made to be overrided when a custom MireliaGameObject
		//derivative is created.
	}
	
	asleep() {
		//This will be executed when the object is put to sleep. It is empty on default and is made to be overrided when a custom MireliaGameObject
		//derivative is created.
	}
	
	awoken() {
		//This will be executed when the object is awoken. It is empty on default and is made to be overrided when a custom MireliaGameObject
		//derivative is created.
	}
	
	hits() {
		//This will be executed when the object's hitbox hits another object's hitbox. It is empty on default and is made to be overrided 
		//when a custom MireliaGameObject derivative is created.
	}
	
	hitsGroup() {
		//This will be executed when the object's hitbox hits another object's hitbox, and the colission groups are the same. 
		//It is empty on default and is made to be overrided when a custom MireliaGameObject derivative is created.
	}
	
	outside() {
		//This will be executed when the object is outside the drawing area. It is empty on default and is made to be overrided 
		//when a custom MireliaGameObject derivative is created.
	}
	
	destroyed() {
		//This will be executed when the object is destroyed. It is empty on default and is made to be overrided 
		//when a custom MireliaGameObject derivative is created.
	}
	
	//Please do not override the constructor - it has many vital parameters in it. Use the custom created() instead.
	//This applies ALSO to to the super() version.
	constructor(_awake, _canvas) {
		this.x = 0; //the x position of the object
		this.y = 0; //the y position of the object
		this.xspeed = 0; //the horizontal speed of the object
		this.yspeed = 0; //the vertical speed of the object
		this.speed = 0; //the speed of the object; read-only. Writing it has no effect.
		this.visual = false; //if the object has a MireliaAnimation.
		this.animation = []; //the object's animation. Requires a MireliaAnimation to be loaded.
		this.animspd = 10; //the speed of the object's animation. Requires a MireliaAnimation to be loaded.
		this.animfr = 0; //animation frame. Should not be changed.
		this.animfrn = 1; //the number of animation frame. Requires a MireliaAnimation to be loaded. Changing it can cause errors.
		this.animindex = 0; //the speed of the object's animation. Requires a MireliaAnimation to be loaded.
		this.animStrX = 0; //the animation width.
		this.animStrY = 0; //the animation height.
		this.animRot = 0; //the animation rotation.
		this.awake = _awake; //if false, the object will not react.
		this.canvas = _canvas; //the canvas to draw on. If null, the drawing funcions will not work.
		this.canvasw = 800; //the canvas width. Defaults to 800. Should be set manually.
		this.canvash = 600; //the canvas height. Defaults to 600. Should be set manually.
		this.canOB = true; //if the object can go out of bounds.
		this.isOB = false; //if the object is out of bounds.
		this.createEvt = false; //Checks if a the object has finished instatiation.
		//Colissions
		this.colType = 0; //colission type, 0 - none, 1 - rectangle, 2 - circle
		this.colRectx = 0; //width of rectangle colission
		this.colRecty = 0; //height of rectangle colission
		this.colDiameter = 0; //diameter of circle colission
		this.colGroup = 0; //colission group
		//Other
		this.createEV = false; //changing this only fires the Create() method again.
		this.instanceIndex = Mirelia.instanceNumber;
		this.tempStatus = true;
		this.clickable = true;
		Mirelia.instanceNumber++;
		
		Mirelia.instList.push(this);
	}
	
	//ACTIVE GAME METHODS. They can activate only if the object is awake.
	
	//sets the horizontal (x) and vertical(y) speed of the object
	setMotion(xs, ys) {
		if(!this.awake)
			return;
		this.xspeed = xs;
		this.yspeed = ys;
	}
	//stops the object
	stop() {
		if(!this.awake)
			return;
		this.xspeed = 0;
		this.yspeed = 0;
	}
	//moves towards point (x,y)
	moveTo(_x, _y, _spd) {
		if(!this.awake)
			return;
		this.xspeed = _spd*Math.cos(this.x/_x);
		this.yspeed = _spd*Math.sin(this.y/_y);
	}
	//moves with a list of four inputs: [up, down, left, right]
	moveWithScheme(_scheme, _spd) {
		if(!this.awake)
			return;
		if(Mirelia.keyPress(_scheme[0]) && _scheme[0] > 0)
			this.setMotion(this.xspeed, _spd)
		if(Mirelia.keyPress(_scheme[1]) && _scheme[1] > 0)
			this.setMotion(this.xspeed, -_spd)
		if(Mirelia.keyPress(_scheme[2]) && _scheme[2] > 0)
			this.setMotion(-_spd, this.yspeed)
		if(Mirelia.keyPress(_scheme[3]) && _scheme[3] > 0)
			this.setMotion(_spd, this.yspeed)
		if(Mirelia.keyRelease(_scheme[0]) && _scheme[0] > 0)
			this.setMotion(this.xspeed, 0)
		if(Mirelia.keyRelease(_scheme[1]) && _scheme[1] > 0)
			this.setMotion(this.xspeed, 0)
		if(Mirelia.keyRelease(_scheme[2]) && _scheme[2] > 0)
			this.setMotion(0, this.yspeed)
		if(Mirelia.keyRelease(_scheme[3]) && _scheme[3] > 0)
			this.setMotion(0, this.yspeed)
	}
	//draws a sprite relative to the coordinates
	spriteRelate(_x, _y, _spr) {
		if(!this.awake)
			return;
		Mirelia.sprite(this.canvas, this.x+_x-Mirelia.Pos.x, this.y+_y-Mirelia.Pos.y, _spr);
	}
	
	//move the camera with the object
	panWithSelf() {
		if(!this.awake)
			return;
		Mirelia.pan(this.xspeed, -this.yspeed);
	}
	
	//move the camera with the object's coordinates
	setCamWithSelf() {
		if(!this.awake)
			return;
		Mirelia.setCam(this.x, this.y);
	}
	
	//PASSIVE GAME METHODS. They can activate regardless of the awake property.
	
	//changes the position of an object
	setPos(_x, _y) {
		this.x = _x;
		this.y = _y;
	}
	//binds an animation to the object
	setAnimation(_wyrmwindanimation) {
		this.animation = [];
		this.an = _wyrmwindanimation.animframes;
		this.animfrn = this.an;
		for(this.i=0; this.i<this.an; this.i++) {
			this.animation[this.i] = _wyrmwindanimation.animframe[this.i];
		}
		this.animindex = 0;
		this.visual = true;
	}
	//sets the drawing canvas, its width and height.
	setCanvas(c) {
		this.canvas = c;
		this.canvasw = document.getElementById(c).width;
		this.canvash = document.getElementById(c).height;
	}
	//sets the animation transform
	setVisuals(_sx, _sy) {
		this.animStrX = _sx;
		this.animStrY = _sy;
	}
	//prevents the object from doing anything
	sleep() {
		this.asleep();
		this.awake = false;
	}
	//makes the object able to react
	wake() {
		this.awoken();
		this.awake = true;
	}
	//disables the hitbox
	removeHitbox() {
		this.colType = 0;
	}
	//sets a rectangular hitbox of desired width and height
	setHitboxRect(_x, _y) {
		this.colType = 1;
		this.colRectx = _x;
		this.colRecty = _y;
	}
	//sets a circular hitbox of desired diameter
	setHitboxCircle(_d) {
		this.colType = 2;
		this.colDiameter = _d; //diameter of circle colission
	}
	
	//sets the hitbox group
	setHitboxGroup(_a) {
		this.colGroup = _a;
	}
	
	//applies a MireliaBlueprint
	applyBlueprint(_MireliaBlueprint) {
		this.x = _MireliaBlueprint.x;
		this.y = _MireliaBlueprint.y;
		this.animation = _MireliaBlueprint.animation;
		this.colType = _MireliaBlueprint.colType;
		this.colRectx = _MireliaBlueprint.colRectx;
		this.colRecty = _MireliaBlueprint.colRecty;
		this.colDiameter = _MireliaBlueprint.colDiameter;
		this.colGroup = _MireliaBlueprint.colGroup;
		if(this.awake) {
			this.xspeed = _MireliaBlueprint.xspeed;
			this.yspeed = _MireliaBlueprint.yspeed;
		}
	}
	
	//sets if the object should be clickable or not
	setClickable(_clickable) {
		this.clickable = _clickable;
	}
	
	//deletes the current instance
	destroy() {
		destroyed();
		for(var i in Mirelia.instList)
			if(i == this.instanceIndex)
				Mirelia.instList.splice(i, 1);
		delete this;
	}
	
	//The following function is auto-called each browser frame, if the object is awake. Please do not call it manually.
	hbf34rb4561g3n65() {
		if(!this.awake)
			return;
		//move with xspeed/yspeed
		if(!this.canOB) {
			if(this.x + this.xspeed > 0 && this.x + this.xspeed < this.canvasw)
				this.x += this.xspeed;
			if(this.y + this.yspeed > 0 && this.y + this.yspeed < this.canvash)
				this.y -= this.yspeed;
		} else {
			this.x += this.xspeed;
			this.y -= this.yspeed;
		}
		
		//animation/visuals
		if(this.visual) {
			Mirelia.spriteStretch(this.canvas, this.x-Mirelia.Pos.x-this.animStrX/2, this.y-Mirelia.Pos.y-this.animStrY/2, this.animStrX, this.animStrY, this.animation[this.animindex]);
			this.animfr++;
			if(this.animfr >= this.animspd) {
				if(this.animindex == this.animfrn-1) {
					this.animindex = 0;
				} else {
					this.animindex++;
				}
				this.animfr = 0;
			}
		}
	}
}

//A MireliaGameScene acts like a "room" - it has its speed, background, and a list of objects. All objects that are not on the list
//will be set as asleep.
class MireliaGameScene {
	
	created() {
		//This will be executed on every instatiation. It is empty on default and is made to be overrided when a custom MireliaGameObject
		//derivative is created.
	}
	
	updated() {
		//This will be executed on every browser frame. It is empty on default and is made to be overrided when a custom MireliaGameObject
		//derivative is created.
	}
	
	loaded() {
		//This will be executed when the scene is loaded. It is empty on default and is made to be overrided when a custom MireliaGameObject
		//derivative is created.
	}
	
	ended() {
		//This will be executed when the scene is over. It is empty on default and is made to be overrided when a custom MireliaGameObject
		//derivative is created.
	}
	
	constructor(_objects, _bkg, _speed) {
		this.objects = _objects;
		this.bkg = _bkg;
		this.createEV = false;
		if(_speed >= 1)
			this.speed = Math.floor(_speed);
		else
			this.speed = 1;
		this.sceneIndex = Mirelia.sceneNumber;
		Mirelia.sceneNumber++;
		
		Mirelia.sceneList.push(this);
	}
}

//The MireliaBlueprint objects are used to set the MireliaGameObject properties: position, speed and MireliaAnimation. A hitbox can be set manually.
class MireliaBlueprint {
	
	created() {
		//This will be executed on every instatiation. It is empty on default and is made to be overrided when a custom MireliaGameObject
		//derivative is created.
	}
	
	//Please do not override the constructor - it has many vital parameters in it. 
	constructor(_x, _y, _xspeed, _yspeed, _anim) {
		this.x = _x;
		this.y = _y;
		this.xspeed = _xspeed;
		this.yspeed = _yspeed;
		this.animation = _anim;
		this.bpIndex = Mirelia.instanceNumber;
		this.colType = 0;
		this.colRectx = 0;
		this.colRecty = 0;
		this.colDiameter = 0;
		this.colGroup = 0;
		this.createEV = false;
		this.bpIndex = Mirelia.bpNumber;
		Mirelia.bpNumber++;
		
		Mirelia.bpList.push(this);
	}
	
	//alter the blueprint
	alter(_x, _y, _xspeed, _yspeed, _anim) {
		this.x = _x;
		this.y = _y;
		this.xspeed = _xspeed;
		this.yspeed = _yspeed;
		this.animation = _anim;
	}
	
	//alter the position
	alterPos(_x, _y) {
		this.x = _x;
		this.y = _y;
	}
	
	//alter the speed
	alterSpeed(_xspeed, _yspeed) {
		this.xspeed = _xspeed;
		this.yspeed = _yspeed;
	}
	
	//alter the animation
	alterAnimation(_anim) {
		this.animation = _anim;
	}
	
	//remove the hitbox
	removeHitbox() {
		this.colType = 0;
	}
	
	//set and alter the rectangular hitbox
	alterHitboxRect(_x, _y, _group) {
		this.colType = 1;
		this.colRectx = _x;
		this.colRecty = _y;
		this.colGroup = _group;
	}
	
	//set and alter the circular hitbox
	alterHitboxCircle(_d, _group) {
		this.colType = 2;
		this.colDiameter = _d;
		this.colGroup = _group;
	}
	
	//alter with the properties of an instance of MireliaGameObject. Also works with dictionaries.
	alterFromObj(_MireliaGameObject) {
		this.x = _MireliaGameObject.x;
		this.y = _MireliaGameObject.y;
		this.xspeed = _MireliaGameObject.xspeed;
		this.yspeed = _MireliaGameObject.yspeed;
		this.animation = _MireliaGameObject.animation;
		this.colType = _MireliaGameObject.colType;
		this.colRectx = _MireliaGameObject.colRectx;
		this.colRecty = _MireliaGameObject.colRecty;
		this.colDiameter = _MireliaGameObject.colDiameter;
		this.colGroup = _MireliaGameObject.colGroup;
	}
}

//game/application quasi-framework control functions

//This code will be executed after the application has been loaded, on condition an __APPLICATIONLOOP() was called.
//Empty on default, should be re-defined.
function __APPLICATIONBEGIN() {
	return;
}

//This code will be executed at each browser frame, on condition an __APPLICATIONLOOP() was called and the application is not paused.
//Empty on default, should be re-defined.
function __APPLICATIONCONTENT() {
	return;
}

//This code will be executed at each browser frame, on condition an __APPLICATIONLOOP() was called. Will run regardless of pause status.
//Runs on every frame, regardless of the MireliaGameScene speed.
//Empty on default, should be re-defined.
function __APPLICATIONBACKGROUND() {
	return;
}

let __APPLICATIONCONTENT_ORIGINAL = __APPLICATIONCONTENT;

//Call __APPLICATIONLOOP once at the end of the code. It will serve as a main loop and will execute iterated
//__APPLICATIONCONTENT as well as check events of all instances of MireliaGameObject.
let nvdux9pvsivn9ucspuj = 0;
let jbvizobpmjixjow7re8 = true;
function __APPLICATIONLOOP(_nvdux9pvsivn9ucspuj) {
	let delta = _nvdux9pvsivn9ucspuj - _nvdux9pvsivn9ucspuj;
	nvdux9pvsivn9ucspuj = _nvdux9pvsivn9ucspuj;
	if(Mirelia.defCtx != null) {
		Mirelia.refresh(Mirelia.defCtx);
		if(Mirelia.appBkg != null) {
			if(Mirelia.appBkgStretch)
				Mirelia.spriteStretch(Mirelia.defCtx, 0, 0, Mirelia.appBkgX, Mirelia.appBkgY, Mirelia.appBkg);
			else if(Mirelia.appBkg.width > 0 && Mirelia.appBkg.height > 0) {
				for(var i = -1; i<(Mirelia.appBkgX/Mirelia.appBkg.width)+2; i++) {
					for(var j = -1; j<(Mirelia.appBkgY/Mirelia.appBkg.height)+2; j++) {
						Mirelia.sprite(Mirelia.defCtx, i*Mirelia.appBkg.width-Mirelia.Pos.x%Mirelia.appBkg.width, j*Mirelia.appBkg.height-Mirelia.Pos.y%Mirelia.appBkg.height, Mirelia.appBkg);
					}
				}
			}
		}
	}
	
	if(jbvizobpmjixjow7re8) {
		__APPLICATIONBEGIN();
		jbvizobpmjixjow7re8 = false;
	}
	
	if(Mirelia.loadFrames > 0)
		Mirelia.loadFrames--;
	
	if(!jbvgis9r0fudihvg) {
		if(nigfopsgbkmjtgmb <= 0) {
			__APPLICATIONCONTENT();
	
			for(i in Mirelia.instList) {
				if(!Mirelia.instList[i].createEvt) {
					Mirelia.instList[i].created();
					Mirelia.instList[i].createEvt = true;
				}
					Mirelia.instList[i].tempStatus = true;
				if(Mirelia.instList[i].awake) {
					Mirelia.instList[i].updated();
					if(Mirelia.defCtx != null) {
						if(Mirelia.instList[i].clickable && bs9cd7nsdv7o9fdv && Mirelia.instList[i].visual && Math.abs(Mirelia.getMousePos(Mirelia.defCtx).x-Mirelia.instList[i].x) < Mirelia.instList[i].animStrX/2 && Math.abs(Mirelia.getMousePos(Mirelia.defCtx).y-Mirelia.instList[i].y) < Mirelia.instList[i].animStrY/2 && Mirelia.getMouse()) {
							Mirelia.instList[i].clicked();
							bs9cd7nsdv7o9fdv = false;
							v5b78oemunvcdsin = 50;
						}
					}
				}
				Mirelia.instList[i].hbf34rb4561g3n65();
				Mirelia.instList[i].background();
				if(Mirelia.instList[i].awake)
					Mirelia.instList[i].fore();
				for(j in Mirelia.instList) {
					if(i != j && Mirelia.instList[i].colType != 0 && Mirelia.instList[j].colType != 0) {
						if(Mirelia.instList[i].colType == 1 && Mirelia.instList[j].x > Mirelia.instList[i].x-Mirelia.instList[i].colRectx/2 && Mirelia.instList[j].x > Mirelia.instList[i].x+Mirelia.instList[i].colRectx/2 &&
							Mirelia.instList[j].y > Mirelia.instList[i].y-Mirelia.instList[i].colRecty/2 && Mirelia.instList[j].y > Mirelia.instList[i].y+Mirelia.instList[i].colRecty/2) {
							if(Mirelia.instList[j].colType == 1 && (Mirelia.instList[i].x > Mirelia.instList[j].x-Mirelia.instList[j].colRectx/2 && Mirelia.instList[i].x > Mirelia.instList[j].x+Mirelia.instList[j].colRectx/2 &&
							Mirelia.instList[i].y > Mirelia.instList[j].y-Mirelia.instList[j].colRecty/2 && Mirelia.instList[i].y > Mirelia.instList[j].y+Mirelia.instList[j].colRecty/2)) {
								Mirelia.instList[i].hits();
								Mirelia.instList[j].hits();
								if(Mirelia.instList[i].colGroup == Mirelia.instList[j].colGroup) {
									Mirelia.instList[i].hitsGroup();
									Mirelia.instList[j].hitsGroup();
								}
							}
							if(Mirelia.instList[j].colType == 2 && Math.sqrt(Math.pow(Mirelia.instList[i].x-Mirelia.instList[j].x, 2)-Math.pow(Mirelia.instList[i].y-Mirelia.instList[j].y, 2)) < Mirelia.instList[j].colDiameter) {
								Mirelia.instList[i].hits();
								Mirelia.instList[j].hits();
								if(Mirelia.instList[i].colGroup == Mirelia.instList[j].colGroup) {
									Mirelia.instList[i].hitsGroup();
									Mirelia.instList[j].hitsGroup();
								}
							}
						}
						if(Mirelia.instList[j].colType == 2 && Math.sqrt(Math.pow(Mirelia.instList[j].x-Mirelia.instList[i].x, 2)-Math.pow(Mirelia.instList[j].y-Mirelia.instList[i].y, 2)) < Mirelia.instList[i].colDiameter) {
							if(Mirelia.instList[j].colType == 1 && Mirelia.instList[i].x > Mirelia.instList[j].x-Mirelia.instList[j].colRectx/2 && Mirelia.instList[i].x > Mirelia.instList[j].x+Mirelia.instList[j].colRectx/2 &&
							Mirelia.instList[i].y > Mirelia.instList[j].y-Mirelia.instList[j].colRecty/2 && Mirelia.instList[i].y > Mirelia.instList[j].y+Mirelia.instList[j].colRecty/2) {
								Mirelia.instList[i].hits();
								Mirelia.instList[j].hits();
								if(Mirelia.instList[i].colGroup == Mirelia.instList[j].colGroup) {
									Mirelia.instList[i].hitsGroup();
									Mirelia.instList[j].hitsGroup();
								}
							}
							if(Mirelia.instList[j].colType == 2 && (Math.sqrt(Math.pow(Mirelia.instList[i].x-Mirelia.instList[j].x, 2)-Math.pow(Mirelia.instList[i].y-Mirelia.instList[j].y, 2)) < Mirelia.instList[j].colDiameter)) {
								Mirelia.instList[i].hits();
								Mirelia.instList[j].hits();
								if(Mirelia.instList[i].colGroup == Mirelia.instList[j].colGroup) {
									Mirelia.instList[i].hitsGroup();
									Mirelia.instList[j].hitsGroup();
								}
							}
						}
					}
				}
			}
			
			for(i in Mirelia.aList) {
				if(Mirelia.aList[i].plays)
					Mirelia.aList[i].visible();
			}
			
			for(i in Mirelia.sList) {
				if(Mirelia.sList[i].time <= 0)
					Mirelia.sList[i].setSession(false);
				else
					Mirelia.sList[i].time--;
				if(Mirelia.sList[i].getSession())
					Mirelia.sList[i].running();
			}
			
			for(i in Mirelia.mList) {
				if(!Mirelia.mList[i].createEvt) {
					Mirelia.mList[i].created();
					Mirelia.mList[i].createEvt = true;
				}
				if(Mirelia.mList[i].runs)
					Mirelia.mList[i].ongoing();
			}
			
			for(i in Mirelia.sceneList) {
				if(!Mirelia.sceneList[i].createEvt) {
					Mirelia.sceneList[i].created();
					Mirelia.sceneList[i].createEvt = true;
				}
			}
			if(Mirelia.sceneList.length > 0)
				Mirelia.sceneList[Mirelia.currentScene].updated();
			
			for(i in Mirelia.bpList) {
				if(!Mirelia.bpList[i].createEvt) {
					Mirelia.bpList[i].created();
					Mirelia.bpList[i].createEvt = true;
				}
			}
			
			for(i in Mirelia.cList) {
				if(!Mirelia.cList[i].createEvt) {
					Mirelia.cList[i].created();
					Mirelia.cList[i].createEvt = true;
				}
				if(Mirelia.cList[i].visible)
					Mirelia.cList[i].shown();
				else
					Mirelia.cList[i].hidden();
				Mirelia.cList[i].background();
			}
			
			for(i in Mirelia.rsList) {
				if(!Mirelia.rsList[i].createEvt) {
					Mirelia.rsList[i].created();
					Mirelia.rsList[i].createEvt = true;
				}
				if(Mirelia.rsList[i].active) {
					Mirelia.rsList[i].timer--;
					if(Mirelia.rsList[i].timer <= 0) {
						Mirelia.rsList[i].rs();
						Mirelia.rsList[i].timer = Mirelia.rsList[i].interval;
					}
				}
			}
			
		}
		nigfopsgbkmjtgmb -= Mirelia.appSpeed;
		if(v5b78oemunvcdsin > 0)
			v5b78oemunvcdsin--;
	}
	
	__APPLICATIONBACKGROUND();
	
	Mirelia.Keyset.key_GET = 0;
	Mirelia.Keyset.key_PR = 0;
	Mirelia.Keyset.key_RL = 0;
requestAnimationFrame(__APPLICATIONLOOP);
}

//COMPONENTS

//MireliaSessions are used for session control and they will expire over time.
class MireliaSession {
	
	//EVENTS
	
	created() {
		//This will be executed on every instatiation. It is empty on default and is made to be overrided when a custom MireliaGameObject
		//derivative is created.
	}
	
	started() {
		//This will be executed when the session begins. It is empty on default and is made to be overrided when a custom MireliaSession
		//derivative is created.
	}
	
	ended() {
		//This will be executed when the session ends. It is empty on default and is made to be overrided when a custom MireliaSession
		//derivative is created.
	}
	
	running() {
		//This will be executed when the session is active. It is empty on default and is made to be overrided when a custom MireliaSession
		//derivative is created.
	}
	
	authOk() {
		//This will be executed when the authentication succeds. It is empty on default and is made to be overrided when a custom MireliaSession
		//derivative is created.
	}
	
	authFail() {
		//This will be executed when the authentication fails. It is empty on default and is made to be overrided when a custom MireliaSession
		//derivative is created.
	}
	
	constructor(_strings, _maxTime) {
		if(_strings == null)
			this.strings = [];
		else
			this.strings = _strings;
		this.maxTime = _maxTime*60;
		this.time = 0;
		this.active = false;
		this.sIndex = Mirelia.sNumber;
		this.createEV = false;
		Mirelia.sNumber++;
		
		Mirelia.sList.push(this);
	}
	
	//write new credentials. Removes all the old ones.
	write(_strings) {
		if(_strings == null)
			this.strings = [];
		else
			this.strings = _strings;
	}
	
	//sets the maximum time for the object's session (in seconds)
	setSec(_sec) {
		this.maxTime = _sec*60;
	}
	
	//sets the maximum time for the object's session (in minutes)
	setMin(_min) {
		this.maxTime = _min*3600;
	}
	
	//reset the timer
	resetTime() {
		this.time = this.maxTime;
	}
	
	//gets time left to the end of the session (in seconds)
	getTimeLeft() {
		return this.time/60;
	}
	
	//sets the timer to position (in seconds)
	setTimeLeft(_pos) {
		this.time = _pos*60;
	}
	
	//determine if this session is running
	getSession() {
		return this.active;
	}
	
	//activate or deactivate the session
	setSession(_active) {
		this.active = _active;
		if(_active) {
			this.started();
			this.time = this.maxTime;
		} else
			this.ended();
	}
	
	//authenicate by equals
	authenicate(_correct) {
		this.okay = false;
		for(var i in _correct) {
			for(var j in this.strings) {
				if(this.strings[j].localeCompare(_correct[i]))
					this.okay = true;
				else
					this.okay = false;
			}
			if(this.okay) {
				this.authOk();
				this.setSession(true);
				return true;
			}
		}
		this.authFail();
		return false;
	}
	
	//authenticate with a boolean function
	authenicateCustom(_correct, _fn) {
		this.okay = false;
		for(var i in _correct) {
			for(var j in this.strings) {
				if(_fn.apply([_correct[i], this.strings[j]]))
					this.okay = true;
				else
					this.okay = false;
			}
			if(this.okay) {
				this.authOk();
				this.setSession(true);
				return true;
			}
		}
		this.authFail();
		return false;
	}
	
}

//A MireliaComponent is a traditional web component, with the option of adding elements to it.
class MireliaComponent {
	
	//EVENTS
	
	created() {
		//This will be executed on every instatiation. It is empty on default and is made to be overrided when a custom MireliaComponent
		//derivative is created.
	}
	
	hidden() {
		//This will be executed when the component is hidden. It is empty on default and is made to be overrided when a custom MireliaComponent
		//derivative is created.
	}
	
	onHide() {
		//This will be executed when the component starts being hidden. It is empty on default and is made to be overrided when a custom MireliaComponent
		//derivative is created.
	}
	
	shown() {
		//This will be executed when the component is shown. It is empty on default and is made to be overrided when a custom MireliaComponent
		//derivative is created.
	}
	
	onShow() {
		//This will be executed when the component stops being hidden. It is empty on default and is made to be overrided when a custom MireliaComponent
		//derivative is created.
	}
	
	background() {
		//This will be executed on every browser frame, even if the component is hidden. It is empty on default and is made to be overrided
		//when a custom MireliaComponent derivative is created.
	}
	
	//Please do not override the constructor - it has many vital parameters in it. Use the custom created() method instead.
	constructor(_contents, _visible) {
		this.cIndex = Mirelia.cNumber;
		this.visible = _visible;
		this.createEV = false;
		Mirelia.cNumber++;
		if(_contents == null) {
			this.contents = [];
			this.amount = 0;
			this.ids = [];
			this.lastDisplay = [];
		} else {
			this.contents = _contents;
			this.ids = [];
			this.amount = _contents.length;
			this.lastDisplay = [];
			for(var i=0; i<this.amount; i++) {
				this.ids.push("MIRELIA_C_"+this.cIndex.toString()+"_EL_"+i.toString());
				Mirelia.createTag(_contents[i], "id=\""+this.ids[i]+"\"", null);
			}
			for(var i=1; i<this.amount+1; i++) {
				this.lastDisplay.push(Mirelia.fromID("MIRELIA_C_"+this.cIndex.toString()+"_EL_"+(i-1).toString()).style.display);
				if(!_visible)
					Mirelia.fromID("MIRELIA_C_"+this.cIndex.toString()+"_EL_"+(i-1).toString()).style.display = "none";
			}
		}
		
		Mirelia.cList.push(this);
	}
	
	//hides all elements of the component
	hide() {
		for(var i in this.ids) {
			this.lastDisplay[i] = Mirelia.fromID(this.ids[i]).style.display;
			Mirelia.fromID(this.ids[i]).style.display = "none";
		}
		this.visible = false;
		this.onHide();
	}
	
	//shows all elements of the component
	show() {
		for(var i in this.ids) {
			Mirelia.fromID(this.ids[i]).style.display = this.lastDisplay[i];
		}
		this.visible = true;
		this.onShow();
	}
	
	//adds a new element to the component
	add(_tag, _visible, _attr, _innerHTML) {
		this.ids.push("MIRELIA_C_"+this.cIndex.toString()+"_EL_"+this.amount.toString());
		Mirelia.createTag(_tag, "id=\""+this.ids[this.amount]+"\"; "+_attr, _innerHTML);
		this.lastDisplay.push(Mirelia.fromID("MIRELIA_C_"+this.cIndex.toString()+"_EL_"+this.amount.toString()).style.display);
		if(!_visible)
			Mirelia.fromID("MIRELIA_C_"+this.cIndex.toString()+"_EL_"+this.amount.toString()).style.display = "none";
		this.amount++;
	}
	
	//applies innerHTML to an element
	sub(_id, _innerHTML) {
		Mirelia.fromID("MIRELIA_C_"+this.cIndex.toString()+"_EL_"+_id.toString()).innerHTML = _innerHTML;
	}
	
	//deletes one element by ID
	wipe(_id) {
		for(var i in this.ids)
			if(this.ids[i] == "MIRELIA_C_"+this.cIndex.toString()+"_EL_"+_id.toString())
				this.ids.splice(i, 1);
		Mirelia.fromID("MIRELIA_C_"+this.cIndex.toString()+"_EL_"+_id.toString()).remove();
	}
	
	//deletes the entire component
	destroy() {
		for(var i in this.ids)
			Mirelia.fromID("MIRELIA_C_"+this.cIndex.toString()+"_EL_"+i.toString()).remove();
		for(var i in Mirelia.cList)
			if(i == this.cIndex)
				Mirelia.cList.splice(i, 1);
		delete this;
	}
}

//Missions are used to execute sets of functions in order.
class MireliaMission {
	
	//EVENTS
	
	created() {
		//This will be executed on every instatiation. It is empty on default and is made to be overrided when a custom MireliaGameObject
		//derivative is created.
	}
	
	started() {
		//This will be executed when a mission is started. It is empty on default and is made to be overrided when a custom MireliaMission
		//derivative is created.
	}
	
	ongoing() {
		//This will be executed when a mission is in progress. It is empty on default and is made to be overrided when a custom MireliaMission
		//derivative is created.
	}
	
	finished() {
		//This will be executed when a mission ends. It is empty on default and is made to be overrided when a custom MireliaMission
		//derivative is created.
	}
	
	completed() {
		//This will be executed when a mission is finished successfully. It is empty on default and is made to be overrided when a custom MireliaMission
		//derivative is created.
	}
	
	failed() {
		//This will be executed when a mission fails. It is empty on default and is made to be overrided when a custom MireliaMission
		//derivative is created.
	}
	
	//Please do not override the constructor - it has many vital parameters in it. 
	constructor(_functions, _params) {
		this.functions = _functions;
		this.params = _params;
		this.skipOnFail = false;
		this.errorOnFail = false;
		this.fail = false;
		this.mstep = 0;
		this.msteps = _functions.length;
		this.runs = false;
		this.mIndex = Mirelia.mNumber;
		this.createEV = false;
		Mirelia.mNumber++;
		
		Mirelia.mList.push(this);
	}
	
	//start/restart the mission
	start() {
		this.mstep = 0;
		this.runs = true;
		this.fail = false;
		this.started();
	}
	
	//execute next function on the list
	step() {
		if(this.runs) {
			try {
				if(this.params[mstep] != null)
					this.functions[mstep].apply(this, this.params[mstep]);
				else
					this.functions[mstep]();
			} catch(e) {
				this.fail = true;
				this.failed();
				if(this.errorOnFail)
					throw "A MireliaMission failed: " + e.toString();
			} finally {
				this.mstep++;
				if(this.mstep >= this.msteps || (this.fail && !this.skipOnFail)) {
					this.finished();
					if(!this.failed)
						this.completed();
					this.runs = false;
				}
				
			}
		}
	}
	
	//Execute one function
	stepOne(_pos) {
		try {
			if(this.params[_pos] != null)
				this.functions[_pos].apply(this, this.params[_pos]);
			else
				this.functions[_pos]();
		} catch(e) {
			this.fail = true;
			this.failed();
			if(this.errorOnFail)
				throw "A MireliaMission failed: " + e.toString();
		}
	}
	
	//jump to a position
	jump(_pos) {
		this.mstep = _pos;
	}
	
	//end the mission
	abort(_success) {
		this.runs = false;
		if(_success)
			this.completed();
		else
			this.failed();
	}
	
	//execute all functions now
	stepAuto() {
		this.fail = false;
		for(var i in this.functions) {
			try {
				if(this.params[i] != null)
					this.functions[i].apply(this, this.params[i]);
				else
					this.functions[i]();
			} catch(e) {
				this.fail = true;
				this.failed();
				if(this.errorOnFail)
					throw "A MireliaMission failed: " + e.toString();
			} finally {
				if(this.fail && !this.skipOnFail) {
					this.finished();
					return;
				}
			}
		}
		if(!this.fail)
			this.completed();
	}
	
	//execute a subset of the functions now
	stepAutoPart(_start, _end) {
		this.fail = false;
		for(var i=_start; i<_end+1; i++) {
			try {
				if(this.params[i] != null)
					this.functions[i].apply(this, this.params[i]);
				else
					this.functions[i]();
			} catch(e) {
				this.fail = true;
				this.failed();
				if(this.errorOnFail)
					throw "A MireliaMission failed: " + e.toString();
			} finally {
				if(this.fail && !this.skipOnFail) {
					this.finished();
					break;
				}
			}
		}
	}
	
	//set if the mission should end on fail or not.
	setFailEnd(_end) {
		this.skipOnFail = !_end;
	}
	
	//set if the mission should raise and exception on fail or not.
	setFailError(_error) {
		this.errorOnFail = _error;
	}
	
	//append one function
	append(_function, _params) {
		this.functions.push(_function);
		this.params.push(_params);
	}
	
	//remove one function
	wipe(_id) {
		this.functions.splice(_id, 1);
		this.params.splice(_id, 1);
	}
	
	//overwrite the function set
	alter(_functions, _params) {
		this.functions = _functions;
		this.params = _params;
		this.mstep = 0;
		this.msteps = _functions.length;
		this.runs = false;
	}
	
	//overwrite a part of the function set
	alterPart(_functions, _params, _start) {
		for(i=_start; i<_start+_functions.length; i++) {
			this.functions[_start] = _functions[_start];
			this.params[_start] = _params[_start];
		}
		this.mstep = 0;
		this.msteps = _functions.length;
		this.runs = false;
	}
}

//Hexals are secure logical objects used for storing six values of consistent type. [UPCOMING]
class MireliaHexal {
	
	//EVENTS
	
	breached() {
		//This will be executed when a hexal's health gets questioned. It is empty on default and is made to be overrided when a custom MireliaHexal
		//derivative is created.
	}
	
	//Please do not override the constructor - it has many vital parameters in it. 
	constructor(_len, _hide) {
		this.len = _len;
		this.checksum = "";
		this.sign = [];
		this.values = ["", "", "", "", "", ""];
		for(var i=0; i<_len; i++) {
			this.checksum += String.fromCharCode(Mirelia.randomIntRange(1024,2048));
			this.sign.push(Mirelia.randomIntRange(1024,2048)&1);
			for(var j=0; j<6; j++) {
				this.values[j] += String.fromCharCode(Mirelia.randomIntRange(1024,2048)+this.sign[i]*this.checksum.charCodeAt(i));
			}
		}
		this.breached = false;
		this.errorOnBreach = false;
		this.hide = _hide;
		this.hIndex = Mirelia.hNumber;
		Mirelia.hNumber--;
		
		Mirelia.hList.push(this);
	}
}

class jge9rvndus9ejm0 {
	constructor() {
		this.file = "";
		this.used = false;
	}
	
	//PLEASE DO NOT CALL THESE METHODS WITH EVERY BROWSER FRAME. This will slow down/crash the website and make it unusable.
	
	//Change the source file or URL of the Stem
	set(_src) {
		Mirelia.fromID("__STEM").src = _src;
	}
	
	//Remove the Stem's source page or URL
	clear() {
		Mirelia.fromID("__STEM").src = null;
	}
	
	//Resize the Stem
	resize(_w, _h) {
		Mirelia.fromID("__STEM").width = _w;
		Mirelia.fromID("__STEM").height = _h;
	}
	
	//Hide or show the Stem
	visible(_visible) {
		if(!visible)
			Mirelia.fromID("__STEM").style.display = "none";
		else
			Mirelia.fromID("__STEM").style.display = "inline";
	}
}

let Stem = new jge9rvndus9ejm0();

//The stem is the main "play place" of the application, containing the framework controller and an __APPLICATIONLOOP().
//It should be always called LAST.
function STEM() {
	document.write("<div><iframe id=\"__STEM\"; src=\"\"; width=\"400px\"; height=\"400px\" style=\"border:none;\"></iframe></div>");
	__APPLICATIONLOOP(0);
}

//MireliaRS alternate at some interval.
class MireliaRS {
	
	//EVENTS
	
	created() {
		//This will be executed on every instatiation. It is empty on default and is made to be overrided when a custom MireliaRS
		//derivative is created.
	}
	
	active() {
		//This will be executed when the MireliaRS is active. It is empty on default and is made to be overrided when a custom MireliaRS
		//derivative is created.
	}
	
	unactive() {
		//This will be executed when the MireliaRS is unactive. It is empty on default and is made to be overrided when a custom MireliaRS
		//derivative is created.
	}
	
	activated() {
		//This will be executed when the MireliaRS is activated. It is empty on default and is made to be overrided when a custom MireliaRS
		//derivative is created.
	}
	
	deactivated() {
		//This will be executed when the MireliaRS is deactivated. It is empty on default and is made to be overrided when a custom MireliaRS
		//derivative is created.
	}
	
	//Please do not override the constructor - it has many vital parameters in it. 
	constructor(_function1, _function2, _params1, _params2) {
		this.function1 = _function1;
		this.function2 = _function2;
		this.params1 = _params1;
		this.params2 = _params2;
		this.change = true;
		this.active = true;
		this.interval = 1;
		this.timer = 1;
		this.createEV = false;
		Mirelia.rsNumber++;
		
		Mirelia.rsList.push(this);
	}
	
	//Alters the entire RS
	alter(_function1, _function2, _params1, _params2) {
		this.function1 = _function1;
		this.function2 = _function2;
		this.params1 = _params1;
		this.params2 = _params2;
	}
	
	//Alters the functions/methods
	alterFunctions(_function1, _function2) {
		this.function1 = _function1;
		this.function2 = _function2;
	}
	
	//Alters the parameters
	alterParams(_params1, _params2) {
		this.params1 = _params1;
		this.params2 = _params2;
	}
	
	//executes the RS
	rs() {
		if(this.change) {
			this.function1.apply(this.params1);
			this.change = false;
		} else {
			this.function2.apply(this.params2);
			this.change = true;
		}
	}
	
	//executes the RS, but w/o changing
	rsStay() {
		if(this.change) {
			this.function1.apply(this.params1);
		} else {
			this.function2.apply(this.params2);
		}
	}
	
	//executes one function of the RS
	rsOne(_fn) {
		if(_fn) {
			this.function1.apply(this.params1);
		} else {
			this.function2.apply(this.params2);
		}
	}
	
	//activates the RS
	activate() {
		this.activated();
		this.active = true;
	}
	
	//deactivates the RS
	deactivate() {
		this.deactivated();
		this.active = false;
	}
	
	//sets the interval (activates 60/interval times per second).
	setInterval(_interval) {
		this.interval = _interval;
	}
	
}