let validCurrencies = ["CAD", "USD", "GBP", "EUR"];
const checkIfUndefined = (field, fieldName) => {
    if(field === undefined || field == ""){
        return "Invalid Input for "+ fieldName +". Value: "+ field;
    }

    return undefined;
};

const isValidAmount = (amount) => {
    if (isNaN(amount)){
        return "Invalid Input, The amount given is Not a Number.";
    }

    if (amount < 0){
        return "Invalid Input, The amount given is less than Zero. Value: " +amount;
    }

    return undefined;
};

const checkIfValidCurrency = (currency, currencyName) => {
    if(!validCurrencies.includes(currency)){
        return "The "+ currencyName + " is not a valid Global Currency. Value: "+ currency + ". The supported currencies are: "+ validCurrencies;
    }

    return undefined;
};


module.exports = {
    checkIfUndefined, isValidAmount, checkIfValidCurrency, validCurrencies
};