module.exports = function( Marker ) {

  let counter = 0

  const Mapping = function( left, right, expression, state ) {
    const src = window[ right.object.name ]
    if( src.mappings === undefined ) src.mappings = []
    const mappingName = `${left.object.name}-${left.property.name}`

    const cm = state.cm

    const start = left.loc.start, end = expression.loc.end
    start.line += Marker.offset.vertical - 1
    end.line += Marker.offset.vertical - 1
    start.ch = start.column
    end.ch   = end.column

    const marker = cm.markText( start, end, { 
      className : mappingName + ' mapping', 
      //css:'text-decoration: underline; text-decoration-color:green; text-decoration-thickness:10%',
      startStyle: `mapping-start ms-${counter++}`
      //inclusiveLeft: true,
      //inclusiveRight: true
    })
    
  }

  return Mapping 
}
