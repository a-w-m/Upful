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

