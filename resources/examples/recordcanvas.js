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

// record and render our canvas to video for 5 seconds
rec(5)

// or record until you stop the music - pressing CRTL+.
//rec()