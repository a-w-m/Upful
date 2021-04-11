import { P } from "../components/interfaces"

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

export function filterProductById<T extends {id: string}>(products: T[], id: string): T[] {
  return products.filter(product=>{
      return product.id === id
  })
}


export const getStock = (stockArray:{id:string, stock: number}[], id:string): number => {
  const match = filterProductById(stockArray, id)
  if (match.length > 0) {
    return match[0].stock
  } else return 0
}