module.exports = {
  prototypes:  {
    graphics:  require('./gibber.graphics.lib/defs/prototypes_defs.js'),
    audio:     require('./gibber.audio.lib/defs/audio/prototypes_defs.js'),
  },
  common:      require('./common.js' ),
  effects:     require('./gibber.audio.lib/defs/audio/effects_defs.js'),
  instruments: require('./gibber.audio.lib/defs/audio/instruments_defs.js'),
  audioMisc:   require('./gibber.audio.lib/defs/audio/misc.js'),
  mixins:      require('./gibber.audio.lib/defs/mixins_defs.js'),
  misc:        require('./gibber.graphics.lib/defs/misc_defs.js'),
  geometries:  require('./gibber.graphics.lib/defs/geometries_defs.js'),
  postprocessing:  require('./gibber.graphics.lib/defs/postprocessing.js'),
}
