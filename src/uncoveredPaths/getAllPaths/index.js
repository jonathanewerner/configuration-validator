import {isPlainObject, isEmpty, flatten, includes} from 'lodash'

export default getAllPaths

function getAllPaths(object, base = '', visited = []) {
  if (!isPlainObject(object) || isEmpty(object)) {
    return []
  }
  const paths = Object.keys(object).map(key => {
    const val = object[key]
    const alreadyVisited = includes(visited, val)
    if (alreadyVisited) {
      return key
    }
    const path = base ? `${base}.${key}` : key
    if (!isPlainObject(val)) {
      return path
    }

    visited.push(val) // only add visited to plain objects
    return getAllPaths(object[key], path, visited)
  })
  return flatten(paths)
}


