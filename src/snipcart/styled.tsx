import { css } from "styled-components"

export const snipcart = css`
  :root {
    --cart-billing-verification-bg: #f9f5f5;
    --cart-main-brown: #81550d;
    --cart-secondary-brown: #704a0b;
    --cart-main-white: #fff;
    --cart-link-color: #845270;
    --cart-link-bgColor: transparent;
    --cart-badge-borderColor: transparent;
    --cart-input-borderColor: rgb(217, 217, 217);
    --cart-input-checked-bgColor: #00beff;
    --cart-disabled-bgColor: #d1d2da;
    --cart-disabled-color: #8f99a3;
    /* Snipcart Theming css variables: https://docs.snipcart.com/v3/setup/theming
    */

    /* Buttons */

    /* Primary */

    /* Default */
    --color-buttonPrimary: var(--cart-main-white);
    --borderColor-buttonPrimary: var(--cart-main-brown);
    --bgColor-buttonPrimary: var(--cart-main-brown);

    /* Hover */
    --color-buttonPrimary-hover: var(--cart-main-white);
    --borderColor-buttonPrimary-hover: var(--cart-secondary-brown);
    --bgColor-buttonPrimary-hover: var(--cart-secondary-brown);
    --shadow-buttonPrimary-hover: var(--cart-secondary-brown);

    /* Active */
    --color-buttonPrimary-active: var(--cart-main-white);
    --borderColor-buttonPrimary-active: var(--cart-secondary-brown);
    --bgColor-buttonPrimary-active: var(--cart-secondary-brown);
    --shadow-buttonPrimary-active: var(--cart-secondary-brown);

    /* Focus */
    --color-buttonPrimary-focus: var(--cart-main-white);
    --borderColor-buttonPrimary-focus: var(--cart-secondary-brown);
    --bgColor-buttonPrimary-focus: var(--cart-secondary-brown);
    --shadow-buttonPrimary-focus: var(--cart-secondary-brown);

    /* Disabled */
    --borderColor-buttonPrimary-disabled: var(--cart-disabled-bgColor);
    --bgColor-buttonPrimary-disabled: var(--cart-disabled-bgColor);

    /* Secondary */

    /* Default */

    --color-buttonSecondary: var(--cart-main-white);
    --borderColor-buttonSecondary: var(--cart-main-brown);
    --bgColor-buttonSecondary: var(--cart-main-brown);
    /* Hover */
    --color-buttonSecondary-hover: var(--cart-main-white);
    --borderColor-buttonSecondary-hover: var(--cart-secondary-brown);
    --bgColor-buttonSecondary-hover: var(--cart-secondary-brown);
    --shadow-buttonSecondary-hover: var(--cart-secondary-brown);

    /* Active */
    --color-buttonSecondary-active: var(--cart-main-white);
    --borderColor-buttonSecondary-active: var(--cart-secondary-brown);
    --bgColor-buttonSecondary-active: var(--cart-secondary-brown);
    --shadow-buttonSecondary-active: var(--cart-secondary-brown);

    /* Focus */
    --color-buttonSecondary-focus: var(--cart-main-white);
    --borderColor-buttonSecondary-focus: var(--cart-secondary-brown);
    --bgColor-buttonSecondary-focus: var(--cart-secondary-brown);
    --shadow-buttonSecondary-focus: var(--cart-secondary-brown);
    /* Disabled */
    --color-buttonSecondary-disabled: var(--cart-disabled-color);
    --borderColor-buttonSecondary-disabled: var(--cart-disabled-bgColor);
    --bgColor-buttonSecondary-disabled: var(--cart-disabled-bgColor);

    /* ----------------------- 
        PART: Input
    ----------------------- */

    --borderColor-input: var(--cart-input-borderColor);
    --bgColor-input: var(--cart-main-white);

    /* Hover */
    --borderColor-input-hover: var(--header-nav-link-hover);

    /* Focus */

    --borderColor-input-focus: var(--header-nav-link-hover);

    /* Checked */
    --bgColor-input-checked: var(--cart-input-checked-bgColor);

    /* Autofill */
    --bgColor-input-autofill: var(--cart-input-checked-bgColor);

    /*Links*/

    /* Default */
    --color-link: var(--cart-link-color);
    --borderColor-link: var(--cart-link-bgColor);
    --bgColor-link: var(--cart-link-bgColor);

    /* Hover */
    --color-link-hover: var(--header-nav-link-hover);
    --borderColor-link-hover: var(--header-nav-link-hover);
    --bgColor-link-hover: var(--cart-link-bgColor);

    /* Active */
    --color-link-active: var(--header-nav-link-hover);
    --borderColor-link-active: var(--header-nav-link-hover);
    --bgColor-link-active: var(--cart-link-bgColor);

    /* Focus */
    --color-link-focus: var(--header-nav-link-hover);
    --borderColor-link-focus: var(--header-nav-link-hover);
    --bgColor-link-focus: var(--cart-link-bgColor);
    --shadow-link-focus: var(--cart-link-bgColor);

    /*Badges*/

    /* Default (completed) */
    --color-badge: var(--cart-main-white);
    --borderColor-badge: var(--cart-badge-borderColor);
    --bgColor-badge: var(--cart-main-brown);

    /* Active */
    --color-badge-active: var(--cart-main-white);
    --borderColor-badge-active: var(--cart-badge-borderColor);
    --bgColor-badge-active: var(--cart-main-brown);

    /*Globals*/

    --color-icon: var(--cart-main-brown);
    --bgColor-default: var(--cart-main-white);
    --bgColor-modal: var(--cart-main-white);

    & .snipcart-overwrite #snipcart::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0;
    pointer-events: none;
    transition: opacity 150ms ease-out;
    }

   .snipcart-sidecart--opened #snipcart::before {
    opacity: 0.6;
  }
  }

  /*remove item custom element*/
  .snipcart-overwrite .snipcart-remove-item {
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: var(--header-nav-link-hover);
    }
  }

  /*/cart header*/
  .snipcart-overwrite .snipcart-cart__secondary-header {
    background-color: var(--main-bg);
    border-bottom: 0.1rem solid var(--cart-input-borderColor);
  }
  .snipcart-overwrite
    .snipcart-cart__secondary-header
    .snipcart-cart__secondary-header-title {
    background-color: var(--main-bg);
    text-align: center;
  }

  /*item-line*/
  .snipcart-overwrite .snipcart-item-line {
    border-bottom: 0.1rem solid var(--cart-input-borderColor);
  }

  /* item-line title */
  .snipcart-overwrite .snipcart-item-line__title {
    font-family: var(--main-font);
    font-weight: 300;
  }

  /* increment button */
  .snipcart-overwrite .snipcart-item-quantity__quantity .snipcart-button-icon {
    background-color: var(
      --cart-disabled-bgColor
    ); //var(--cart-input-checked-bgColor);
    color: #000;
    &:hover,
    &:focus,
    &:active {
      background-color: var(--cart-input-checked-bgColor);
    }
  }

  .snipcart-overwrite
    .snipcart-item-quantity__quantity
    .snipcart-button-icon.is-secondary[disabled] {
    &:hover,
    &:focus,
    &:active {
      background-color: var(--cart-disabled-bgColor);
    }
  }

  /* overwrite billing/shipping background and border */
  .snipcart-overwrite .snipcart-billing-completed,
  .snipcart-overwrite .snipcart-shipping-completed {
    background-color: var(--cart-main-white);
    border-bottom: 0.1rem solid var(--cart-input-borderColor);
  }

  /*overwrite checkout cart-summary background*/
  .snipcart-overwrite .snipcart-cart-summary {
    background-color: var(--cart-main-white);
  }
`
