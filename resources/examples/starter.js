/* 
BASIC COMMANDS

Execute line of code:    CTRL+ENTER
Execute block of code:   ALT+ENTER
Execute page code:       CTRL+A then CTRL+ENTER
Stop all:                CTRL+.
Stop all immediately:    SHIFT+CTRL+.
Save code:               SHIFT+CTRL+S
Load code:               SHIFT+CTRL+S
Zoom in:                 SHIFT+CTRL++
Zoom out:                SHIFT+CTRL+-
Toggle code background:  CRTL+ALT+B
Free camera (3D mode):   SHIFT+CTRL+C
Toggle code visibility:  CTRL+H
*/

// execute this line of code with CTRL+ENTER
kick = Kick().trigger.seq( 1, 1/4 )

// execute this block of code with ALT+ENTER
hat = Hat({ gain:.075 })
hat.trigger.seq( [1,.5], [1/8, 1/16] )
hat.decay = gen( .02 + cycle( beats(16) * 4 ) * .0125 )
hat.fx.add( Distortion({ pregain:100, postgain:.1 }) )

// execute this block of code with ALT+ENTER
bass = Monosynth('bass.stab')
  .note.seq( 
    gen( beats(8) * 4 ), 
    Euclid(5,16) 
  )

// execute this block of code with ALT+ENTER
// then press SHIFT+CTRL+C to toggle free camera mode (use WASD and arrow keys to direct camera)
material = Material( 'phong', Vec3(.05), Vec3(.5), Vec3(1), 8, Vec3(1,4,1) )

Light( Vec3(-2,2,3), Vec3(1,0,0) )
Background( Vec3(0) )
Fog( .5, Vec3(0) )
 
Repeat(
 	s = Sphere( .25 ).material( material ),
  Vec3( .75)
  ).render()

// add some interactivity
s.radius = kick

//use CTRL+SHIFT+C to toggle camera and start moving around scene with WASD, Alt for speed and arrow keys

// Press CTRL+. anytime to stop audio and video! Checkout other tutorials!