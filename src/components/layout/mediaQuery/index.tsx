type Device =
  | "mobileS"
  | "mobileM"
  | "mobileL"
  | "tablet"
  | "laptop"
  | "laptopL"
  | "desktop"

type Breakpoints = { [k in Device]: string }

const breakPoints: Breakpoints = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "411px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

function createMinWidthMediaQuery(breakPoints: Breakpoints): Breakpoints {
  let res = breakPoints
  ;(Object.keys(breakPoints) as Array<keyof Breakpoints>).forEach(key => {
    res[key] = `(min-width: ${breakPoints[key]})`
  })
  return res
}

const device = createMinWidthMediaQuery(breakPoints)

export default device
