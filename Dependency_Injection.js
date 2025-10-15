class PayPalService {
  pay(amount) {
    console.log(`Payment of $${amount} processed via PayPal`);
  }
}

class CreditCardService {
  pay(amount) {
    console.log(`Payment of $${amount} processed via Credit Card`);
  }
}

class PaymentProcessor {
  constructor(paymentService) {
    this.paymentService = paymentService;
  }

  process(amount) {
    this.paymentService.pay(amount);
  }
}

const paypalService = new PayPalService();
const creditCardService = new CreditCardService();

const paypalPayment = new PaymentProcessor(paypalService);
const cardPayment = new PaymentProcessor(creditCardService);

console.log("Transaction handled by Sleem:");
paypalPayment.process(150);
cardPayment.process(300);
