const BillingStatementLineItemService = require('./BillingStatementLineItemService');
const BillingStatementService = require('./BillingStatementService');
const CheckoutSessionService = require('./CheckoutSessionService');
const CustomerService = require('./CustomerService');
const PaymentIntentService = require('./PaymentIntentService');
const RefundService = require('./RefundService');
const WebhookService = require('./WebhookService');

module.exports = {
  checkoutSessions: CheckoutSessionService,
  paymentIntents: PaymentIntentService,
  customers: CustomerService,
  billingStatements: BillingStatementService,
  billingStatementLineItems: BillingStatementLineItemService,
  refunds: RefundService,
  webhooks: WebhookService,
};
