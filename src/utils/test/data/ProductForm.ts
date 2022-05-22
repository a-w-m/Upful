import { P } from "src/interfaces"
const getProductFormData: () => P.ProductOption[] = () => {
  return [
    {
      customField: "Size",
      options: [
        {
          option: "Extra Small",
          priceChange: 0,
        },
        {
          option: "Small",
          priceChange: 0,
        },
        {
          option: "Medium",
          priceChange: 0,
        },
        {
          option: "Large",
          priceChange: 0,
        },
      ],
    },
  ]
}

export {getProductFormData}