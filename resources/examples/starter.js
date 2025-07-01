// To run a line of code, you can do the following:
// 1. Place your cursor in the line you'd like to execute and hit `Control+Enter`.
// 2. Select the entire line of code with your mouse or keyboard shortcuts and hit `Control+Enter`.
// 3. Hit `Alt+Enter` to execute block of code.

Clock.bpm = 140
 
bass = Monosynth('bass.stab')
  .note.seq( 
    gen( beats(8) * 4 ), 
    Euclid(5,16) 
  )

k = Kick().trigger.seq( 1, 1/4 )