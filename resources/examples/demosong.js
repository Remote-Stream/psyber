// by charlesmartin

// Select all and hit Control+Enter to run, or alt (option on mac) + enter
// Ctrl+. to stop

Clock.bpm = 120

Theory.root = 'c5'
Theory.mode = 'aeolian'

s = Synth("bleep").fx.add(Reverb() )
    .note.seq( sine( btof(7.6),7,0 ), Euclid(5, 16) )

k = Kick()
    .notef.seq( 70, 1/4 )

h = Hat()
    .trigger.seq( sine(3, 0.6, 0.05) , [1/16, 1/8].rnd() )
    .tune.seq( Rndf(0.5, 0.6), 1/16)

cl = Clap()
    .trigger.seq(0.6, 1/2, 0, 1/4)

b = FM('bass')
    .note.seq(-7, 1/16)
    .index.seq( [2,3,4,5,6], 1/16)

c = Clave().fx.add( Reverb() )
    .trigger.seq( sine(0.2, 0.1, 0.4), Euclid(6, 16) )
    .note.seq( sine(5.01, 4,5), Euclid(6, 16) )

// execute this code below then press SHIFT+CTRL+C to toggle free camera mode (use WASD and arrow keys to direct camera)
material = Material( 'phong', Vec3(.05), Vec3(.5), Vec3(1), 8, Vec3(1,4,1) )

Light( Vec3(-2,2,3), Vec3(1,0,0) )
Background( Vec3(0) )
Fog( .5, Vec3(0) )
 
Repeat(
   sphere = Sphere( .25 ).material( material ),
    Vec3( .75)
  ).render()

// add some interactivity
sphere.radius = cl

sphere.radius.multiplier = 4