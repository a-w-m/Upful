import { P } from "../components/interfaces"

export const createOptionsString = (options: P.Options[]) => {
  if (options.length > 0) {
    return options
      .map(({ option, priceChange }) => {
        const priceChangeString =
          priceChange === 0
            ? ""
            : priceChange > 0
            ? `[+${priceChange.toFixed(2)}]`
            : `[-${priceChange.toFixed(2)}]`
        return `${option}${priceChangeString}`
      })
      .join("|")
  } else {
    return ""
  }
}

export const createCustomOptionsProps = (
  productOptions: P.ProductOption[],
  optionsSelected: P.State["optionsSelected"]
) => {
  let res: { [data: string]: string | P.Options } = {}
  if (optionsSelected) {
    productOptions.forEach((ele, index) => {
      const num = index + 1
      res[`data-item-custom${num}-name`] = ele.customField
      res[`data-item-custom${num}-value`] = optionsSelected[ele.customField].option
      res[`data-item-custom${num}-options`] = createOptionsString(ele.options)
    })
  }
  return res
}

export const createOptionsSelected = (productOptions: P.ProductOption[]) => {
  let res: { [name: string]: { option: string; priceChange: number } } = {}
  if (productOptions.length > 0) {
    productOptions.forEach(ele => {
      res[ele.customField] = { option: "", priceChange: 0 }
    })
  } else if (productOptions.length === 0) {
    return null
  }
  return res
}

export const calculateTotalPriceChange = (
  optionsSelected: P.State["optionsSelected"]
) => {
  if (optionsSelected) {
    const keys = Object.keys(optionsSelected)
    return keys
      .map(key => {
        return optionsSelected[key].priceChange
      })
      .reduce((previousValue, currentValue) => {
        return previousValue + currentValue
      })
  }

  return 0
}
