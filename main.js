
function convertCurrency() {
    var amount = document.getElementsByName("amount")[0].value;
    amount = parseFloat(amount);
    if (isNaN(amount)) {
        alert("Please enter a valid number for the amount.");
        return false;
    }

    var currency = document.getElementsByName("exchange")[0].value;

    var exchangeRates = {
        "dollar": 0.27,
        "dinar": 0.19,
        "nis": 1
    };

    var result = amount * exchangeRates[currency];
    document.getElementsByClassName("result")[0].textContent = "Converted amount: " + result.toFixed(2);

    return false; 
}
