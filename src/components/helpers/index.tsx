import { P } from "../interfaces"

export const createOptionsString = (values: P.Values[]) => {
  if (values.length > 0) {
    return values
      .map(value => {
        return value.name
      })
      .join("|")
  } else {
    return
  }
}

export const createFluidArray = (edges: P.ImageNode[]) => {
  return edges.map(edge => {
    return edge.node
  })
}
