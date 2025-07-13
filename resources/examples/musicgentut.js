// don't have samples at hand or just want try some other sounds to mangle?

musicgen("90s RnB drum loop 120 bpm", "beat")

s = Sampler('beat.gen')
s.rate = 0.65 // musicgen produces samples at 32khz so we need to slow down the rate :(
s.gain = 1.2    

// trigger the sample
s.trigger()

// playback at normal rate
s.note(0.65)

// playback at 3x speed
s.note(1.95)

// playback in reverse
s.note(-0.65)

// sequence
s.note.seq( [3,3,-1],[1/4,1/4,1/2] )

// sequence rate
s.rate.seq( [-1,1,2,-2,4,-4], Euclid(3,8) )

//trigger sequence
s.trigger.seq( 1,1/16 )

//pick random
s.pick.seq( Rndi(0,3) )

// List generated files so far
musicgen.list()
