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

cl = Clap().fx.add( Reverb() )
    .trigger.seq(0.6, 1, 0, 1/4)

c = Clave().fx.add( Reverb() )
    .trigger.seq( sine(0.2, 0.1, 0.4), Euclid(6, 16) )
    .note.seq( sine(5.01, 4,5), Euclid(6, 16) )

b = FM('bass')
    .note.seq(-7, 1/16)
    .index.seq( [2,3,4,5,6], 1/16)