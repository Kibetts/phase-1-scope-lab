// Write your solution in this file!
var customerName = "bob"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  window.bestCustomer = "not bob";
}

function overwriteBestCustomer(newCustomer) {
  window.bestCustomer = newCustomer;
}

const leastFavoriteCustomer = 'Janice';

function changeLeastFavoriteCustomer() {
  throw new Error('Assignment to constant variable.');
}
