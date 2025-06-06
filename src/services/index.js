const BillingStatementLineItemService = require('./BillingStatementLineItemService');
const BillingStatementService = require('./BillingStatementService');
const CheckoutSessionService = require('./CheckoutSessionService');
const CustomerSessionService = require('./CustomerSessionService');
const CustomerService = require('./CustomerService');
const PaymentIntentService = require('./PaymentIntentService');
const PaymentService = require('./PaymentService');
const PayoutService = require('./PayoutService');
const RefundService = require('./RefundService');
const WebhookService = require('./WebhookService');

module.exports = {
  checkoutSessions: CheckoutSessionService,
  customerSessions: CustomerSessionService,
  payments: PaymentService,
  paymentIntents: PaymentIntentService,
  payouts: PayoutService,
  customers: CustomerService,
  billingStatements: BillingStatementService,
  billingStatementLineItems: BillingStatementLineItemService,
  refunds: RefundService,
  webhooks: WebhookService,
};
