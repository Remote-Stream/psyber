# Dilber | Live audio-visual coding in Javascript for the browser
![demo](https://omodaka9375.github.io/portfolio/static/media/dilber.41183029efc67eadec68.gif)
## Video



https://github.com/user-attachments/assets/d01a258c-34f4-4e3b-8bd5-1b9b1aaee542



## Features
- Audio synthesys via multiple engines ([Monosynth](https://dilber.io/docs/index.html#instruments-monosynth), [Polysynth](https://dilber.io/docs/index.html#instruments-synth), [FM synth](https://dilber.io/docs/index.html#instruments-fm) ...)
- Video synthesys using [Hydra Video Synth](https://hydra.ojack.xyz/), [P5.js](https://p5js.org/) and [marching.js](https://github.com/charlieroberts/marching)
- Audio and video sequencing (step sequencing, TydalCycles / Strudel notation ...)
- Sample mangling (see [sampler docs](https://dilber.io/docs/index.html#instruments-sampler))
- Edit sequences while running
- Audio effects <i>(BitCrusher, Delay, Filter, Distortion, Flanger, Reverb, RingMod, Vibrato, Tremolo, Wavefolder)</i>
- Video effects <i>(Antialiasing, Bloom, Blur, Brightness, Contrast, Edges, Focus, Godrays, Motion Blur, Hue, Invert)</i>
- Camera control <i>(WASD, arrows)</i>
- Live perform with friends: P2P realtime collaboration with shared editor and chat over secure sockets
- Saving and loading your dilber files from computer
- MIDI out for your external or hardware synths
- Render canvas to video with rec() command
- Works offline, too


<br>

## Where to start

1. Go to [dilber.io](https://dilber.io) and start <i>dilbering</i>!

2. Or clone this repo and run it locally in VS Code using [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

<br>

## Commands
```
Execute line of code:       CTRL+ENTER
Execute block of code:      ALT+ENTER
Execute page code:          CTRL+A (then CTRL+ENTER)
Stop all:                   CTRL+.
   
Save code:                  SHIFT+CTRL+S
Load code:                  SHIFT+CTRL+L
   
Zoom in:                    SHIFT+CTRL++
Zoom out:                   SHIFT+CTRL+-
   
Edit pattern:               ALT + click on the pattern (crosshair cursor will show)
   
Toggle code background:     SHIFT+ALT+B
Toggle code visibility:     CTRL+H
Toggle free camera (3D):    SHIFT+CTRL+T (you will see 📹 icon at metronome when camera mode is active)
```
## Instruments
     - FM
     - Pluck
     - Monosynth
     - Synth
     - Clap
     - Cowbell
     - Kick
     - Snare
     - Hat
     - Drums
     - EDrums
     - Sampler

## Use online samples with Sampler instrument

```
- Use a direct link to your sample as a parameter: Sampler('https://somewebsite.come/awesomesample.wav')

- Use any sound from [Freesound.org]('https://freesound.org/') library by ID: 
     Freesound(4048)

- Download samples by query: 
     Freesound('crickets')

- Get random samples:
     Freesound({ 
          query:'drums +90 +bpm', // search for drums, 90, and bpm
          max:5, 				 // max of five seconds in length
          single:false, 		 // files do not have to contain single sounds / notes
          filename:false,         // do not require query terms to be present in filename
          count:5,			 // load five samples...
          maxVoices:1			 // ... but only play one at a time
     })
```

## Use local samples with Sampler
```
For local samples:
 - Clone this repo and put your samples in `samples` folder
 - Open index.html on your local machine (you can use http-server or LiveServer in VS Code)
 - Use it in your code like a normal instrument: Sampler('yoursample.wav')
```

## Sequence external synths
```
 - Click on `midi out` button in top menu and select MIDI out device 
 - Send a MIDI NoteOn message with a value of 60 to channel 0: channels[0].midinote(60)
 - See MIDI Out tutorial in Dilber for more!
```

## Audio FX
     - BitCrusher
     - Delay
     - Distortion
     - Filter
     - Flanger
     - Freeverb
     - RingMod
     - Vibrato
     - Tremolo
     - Wavefolder

## Geometries
     - Box
     - Capsule
     - Cone
     - Cylinder
     - HexPrism
     - Julia
     - Mandelbulb
     - Mandelbox
     - Plane
     - Sphere
     - Torus
     - Torus82
     - Torus88

## Camera FX
     - Antialias
     - Bloom
     - Blur
     - Brightness
     - Contast
     - Edge
     - Focus
     - Godrays
     - Hue
     - Invert
     - MotionBlur

## Changes
```
- MIDI out support - controll your external synths with Dilber via WebMIDI
- Folder structure:
  ./docs
  ./samples    <-- your samples go here
  ./resources  <-- all other files
   index.html  <-- Main page

- UI fixes for popups and notifications
- Removed all redundant code and unnecesary files
- P2P WebSockets now works properly over wss server
- Added Load and Save functionality so you can export or load dilber files from your computer
- Improved error catching and logging
- Fixed audio when switching between examples
- Added missing sounds from examples
- Added rec(param) command to record canvas in video mode
     - rec() - records until you press CTRL+.
     - rec(5) - e.g. records for 5 seconds
```

## Where to find out more
- Open [dilber.io](https://dilber.io) and take a look at examples/tutorial list (instructions are commented)
- Read the full [documentation](https://dilber.io/docs/index.html)


Dilber is based on [Gibber](https://github.com/gibber-cc/gibber), which is the work of [Charlie Roberts](https://github.com/charlieroberts).
