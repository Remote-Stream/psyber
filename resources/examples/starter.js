/* 
BASIC COMMANDS

Execute line of code:    CTRL+ENTER
Execute block of code:   ALT+ENTER
Execute page code:       CTRL+A then CTRL+ENTER
Stop all:                CTRL+.
Save code:               SHIFT+CTRL+S
Load code:               SHIFT+CTRL+S
Zoom in:                 SHIFT+CTRL++
Zoom out:                SHIFT+CTRL+-
Toggle code background:  SHIFT+ALT+B
Free camera (3D mode):   SHIFT+CTRL+C
Toggle code visibility:  CTRL+H
*/

Clock.bpm = 140
 
bass = Monosynth('bass.stab')
.note.seq( 
  gen( beats(8) * 4 ), 
  Euclid(5,16) 
)

k = Kick().trigger.seq( 1, 1/4 )

// video
mat1 = Material( 'phong', Vec3(.05), Vec3(.5), Vec3(1), 8, Vec3(1,4,1) )
Light( Vec3(2,2,3), Vec3(1) )
Light( Vec3(-2,2,3), Vec3(1,0,0) )
Background( Vec3(0) )
Fog( .5, Vec3(0) )
 
Repeat(
  Sphere( .25 ).material( mat1 ),
  Vec3( .75)
).render()