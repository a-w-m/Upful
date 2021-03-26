import {css} from 'styled-components'

export const snipcart = css`
:root{
--cart-billing-verification-bg: #f9f5f5;
--cart-brown: #81550d;

}

/*cart-background*/

#snipcart > .snipcart-modal__container{
background-color: var(--main-bg)

}

 #snipcart > .snipcart-modal__container > .snipcart-layout {
  background-color: var(--main-bg);
}

.snipcart-layout > .snipcart-cart-header {
  background-color: var(--main-bg);
}

.snipcart-layout__content > .snipcart-cart__content{
  background-color: var(--main-bg)
}

.snipcart-cart__featured-payment-methods-container> .snipcart-featured-payment-methods > h3{
  background-color: var(--main-bg)
}



/*cart-item-box-shadow*/
div > .snipcart-item-line{
  box-shadow: none;
}

/*snipcart-icons-fill
    - header icons cart summary
    - header icons billing
    - biling icons
*/
.snipcart-cart-header__options > button > svg > path{
  fill: var(--cart-brown)
}

.snipcart-layout > .snipcart-cart-header > .snipcart-cart-header__close-button > svg > path{
    fill: var(--cart-brown)

}

.snipcart-modal__header-summary-title > svg > path {
    fill: var(--cart-brown)
}

//billing svg
 .snipcart-checkout-step__icon> svg > path{
    fill: var(--cart-brown)

} 

.snipcart__box--badge > svg > path{
    fill: var(--cart-brown)

}

//billing edit
.snipcart-billing-completed__header > .snipcart__actions--link{
    color: var(--cart-brown)
}

//cart-form submission checkmark
.snipcart__box--title > .snipcart__box--badge > svg > path {
	fill: var(--main-bg)

}

//billing step 1 and payment step 2
.snipcart__box--title > .snipcart__box--badge {
	background: var(--cart-brown);
	color: var(--main-bg);
}

#snipcart-checkout-step-billing > .snipcart__box {
    background-color: var(--cart-billing-verification-bg)
}
//cart summary edit
.snipcart-cart-summary__actions  > .snipcart__actions--link{
    color: var(--cart-brown)
}

.snipcart-cart-summary__title > .snipcart__actions--link{
    background-color: var(--cart-billing-verification-bg)
}
/*checkout button*/
footer > .snipcart-cart-button {
  background-image: none;
  background-color: var(--cart-brown)}

//billing checkout button
.snipcart-form__footer > .snipcart-cart-button--highlight {
  background-image: none;
  background-color: var(--cart-brown)
}

/*top border first cart item*/
.snipcart-layout__content > .snipcart-cart__content{
  border-top: 1px solid var(--border-color);
}

/*border-bottom-cart-item*/
.snipcart-item-line> .snipcart-item-line__container{
  border-bottom: 1px solid var(--border-color);
}



/*custom-style-snipcart-cart-item-card
  - resize image
  - align items
*/
.snipcart-item-line__header {
  text-align: center;
}

.snipcart-item-line__header> figure{
  height: 80px;
  width: 80px;
  margin-right: 2rem;
}

.snipcart-item-line__header> figure > .snipcart-item-line__image{
  max-height: 100%;
  max-width: 80px;
} 

.snipcart-item-line__variants > .snipcart-item-line__actions {
  display: flex;
  justify-content: flex-end;
}

.snipcart-item-line__variants > div > .snipcart-item-custom-fields{
  margin-bottom: 2rem;
}

.snipcart-item-custom-fields > .snipcart-item-custom-fields__field > label{
  font-size: 1.4rem;
}

.snipcart-item-custom-fields > .snipcart-item-custom-fields__field > .snipcart-custom-field-wrapper__input{
  width: 50%;
}

.snipcart-item-line__variants > .snipcart-item-quantity > label{
  font-size: 1.4rem;
}

//order confirmation page

//cart-icon
.snipcart-order__details-title > svg > path{
  fill: var(--cart-brown)
}

//billing-icon
.snipcart-billing-completed__title > svg > path{
  fill: var(--cart-brown)
}

//credit-card-icon
.snipcart-order__title > svg > path {
  fill: var(--cart-brown)
}

//order-summary-box
div>.snipcart-order__box {
	margin-bottom: 1px;
	border-bottom: 1px solid var(--border-color);
}

`

