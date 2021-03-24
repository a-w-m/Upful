const template = `<item-line showDescription="false">
<div>
<li :class="{'snipcart-item-line': true, 'snipcart-item-line--cart-edit': editingCart}">
<flash-message
    type="info"
    icon="box"
    v-if="stockLimitReached"
>
    {{ $localize('errors.quantity_revised') }}
</flash-message>
<flash-message
    type="error"
    icon="box"
    v-if="outOfStock"
>
    {{ $localize('errors.quantity_out_of_stock') }}
</flash-message>
<div class="snipcart-item-line__container">
    <figure
        class="snipcart-item-line__media"
        v-if="showLargeImage"
    >
        <item-image class="snipcart-item-line__image"></item-image>
    </figure>
    <div class="snipcart-item-line__product">
        <div class="snipcart-item-line__header">
            <figure
                class="snipcart-item-line__media snipcart-item-line__media--small"
                v-if="showSmallImage"
            >
                <item-image class="snipcart-item-line__image"></item-image>
            </figure>

            <h2 class="snipcart-item-line__title snipcart__font--xlarge snipcart__font--secondary snipcart__font--black">
                {{ item.name }}
            </h2>

            
        </div>

        <div class="snipcart-item-line__content">
            <div class="snipcart-item-line__body">

                <div class="snipcart-item-line__variants">
                    <div>
                        <item-plans
                            :item="item"
                            v-if="!adding && isSubscribable"
                        ></item-plans>
                        <item-custom-fields v-if="!adding"></item-custom-fields>
                    </div>
                    <item-quantity
                        class="snipcart-item-line__quantity"
                        v-if="!adding && !isSubscribable"
                        :disabled="outOfStock || isSubscribable"
                    ></item-quantity>
                    <div
                        class="snipcart-form__field snipcart-form__field--plan snipcart-form__field--plan--billed-on"
                        v-if="isSubscribable && !adding"
                    >
                        <span class="snipcart-form__label snipcart__font--tiny">
                            {{$localize('subscription.payment_amount')}}
                        </span>
                        <div class="snipcart-form__field--plan__readonly">
                            <item-price
                                :item="item"
                                :selectedPlan="selectedPlan"
                            >
                            </item-price>
                        </div>
                    </div>
                    <div class="snipcart-item-line__actions">
                <remove-item-action class="snipcart__button--icon">
                    <icon
                        name="trash"
                        class="snipcart__icon--red"
                        alt="item.remove_item"
                    ></icon>
                </remove-item-action>
            </div>
                </div>
            </div>
        </div>
    </div>
</div>
</li>


</div>
</item-line>`


module.exports = {template}