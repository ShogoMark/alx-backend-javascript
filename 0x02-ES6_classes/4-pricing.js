import Currency from './3-currency'

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }
  
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value != 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value
  }
  
  get currency() {
    return this._currency;
  }

  set currency(value) {
   if (typeof value != 'string') {
      throw new TypeError('currency must be a string');
    }
    this._currency = value 
  }
  
  displayFullPrice() {
    return `${this._amount} ${this._code} (${this._name})`
}

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate
 }
}

