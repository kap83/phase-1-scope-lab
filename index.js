var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer(){
    bestCustomer = 'not bob'
}
// did not work when i put var in front of bestCustomer b/c any it needs to be globally scoped. And variable defined without a keyword becomes globally scoped

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}
//b/c we globally scoped bestCustomer in the function above, we were able to override it here

const leastFavoriteCustomer = 'Seto is cute'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Seto is not cute'
}