import { P } from "../interfaces"

/*
  - receives array of options and returns a string formatted for Snipcart's custom-options API
*/

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

/*
  - receives array of productOptions and the selected options object from state
  - returns an object that contains the data for Snipcart custom option API
*/
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

/*
  - receives array of productOptions
  - returns an object that describes the product options that the user selects
*/

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

/*
  - receives object containing the options the user selects
  - returns the total value of the product's price change
*/
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


/*
  -convert html to plain text
*/

export function convertHTMLtoPlaintext(html:string): string {
  return html.replace(/<[^>]+>/g, '');
}