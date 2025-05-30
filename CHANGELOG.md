# Changelog

## [1.5.0] - 2025-05-30

- Add list payout transactions endpoint.
- Add Payout and PayoutTransaction resources.

## [1.4.0] - 2025-05-15

- Add get payment by id endpoint

## [1.3.0] - 2025-04-23

- Add customer session endpoints.

## [1.2.1] - 2025-04-23

- Add update support for refunds.

## [1.2.0] - 2025-02-11

- billing_details_collection support for billing_statements.

## [1.1.0] - 2025-02-06

- statement_descriptor support for payment intents.
- statement_descriptor support for billing statements.

## [1.0.2] - 2025-02-03

- billing_details_collection support for PayRex Checkout.

## [1.0.1] - 2024-10-02

- Add send billing statement via email endpoint.

## [1.0.0] - 2024-09-04

- Add billing statement endpoints
- Add customer endpoints

Breaking change
- Standardize the use of arrays in resources. The `payment_intent` attribute of CheckoutSession resource is now an array. Previously, this attribute is a PaymentIntent resource.

## [0.1.7] - 2024-07-30

- Add amount_capturable and amount_received for hold then capture partial amount support.

## [0.1.6] - 2024-07-24

- Adjust building of parameter query due to changes in checkout session endpoints.

## [0.1.5] - 2024-07-24

- Finalize the checkout session endpoints.
- Remove the resource attribute from all resources. This is the standard implementation across all PayRex SDKs.

## [0.1.4] - 2024-07-23

- Move the deprecated capture_type attribute.

## [0.1.3] - 2024-07-22

- Add the new payment_method_options attribute.

## [0.1.2] - 2024-05-23

- Update error handling.

## [0.1.1] - 2024-05-22

- Update README.md

## [0.1.0] - 2024-05-21

- Initial alpha release.
