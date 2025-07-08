Clock.bpm = 120
Theory.root = 'c5'
Theory.mode = 'aeolian'

s = Synth("bleep").fx.add(Reverb())
s.note.seq(sine(btof(7.6),7,0), Euclid(5,16))

k = Kick()
k.notef.seq(70, 1/4)

h = Hat()
h.trigger.seq(sine(3,0.6,0.05) , [1/16,1/8].rnd())
h.tune.seq(Rndf(0.5,0.6), 1/16)

cl = Clap().fx.add(Reverb())
cl.trigger.seq(0.6,1,0,1/4)

c = Clave().fx.add(Reverb())
c.trigger.seq(sine(0.2,.1,.4), Euclid(6,16))
c.note.seq(sine(5.01,4,5), Euclid(6,16))

b = FM('bass')
b.note.seq(-7,1/16)
b.index.seq([2,3,4,5,6],1/16)

// stop all
s.stop() 
k.stop()
h.stop()
c.stop()
b.stop()
cl.stop()