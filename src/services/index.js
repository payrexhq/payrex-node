const CheckoutSessionService = require('./CheckoutSessionService');
const MerchantService = require('./MerchantService');
const PaymentIntentService = require('./PaymentIntentService');
const PaymentMethodService = require('./PaymentMethodService');
const RefundService = require('./RefundService');
const WebhookService = require('./WebhookService');

module.exports = {
  checkoutSessions: CheckoutSessionService,
  merchants: MerchantService,
  paymentIntents: PaymentIntentService,
  paymentMethods: PaymentMethodService,
  refunds: RefundService,
  webhooks: WebhookService,
};
