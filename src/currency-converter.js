// This file will contain the primary logic for the currency conversion program.
// To run the program use the `node` command followed by the name of this file.
// ie. `node currency-converter.js`.

// This file has been split up into several sections, each of which focuses on a
// portion of the program. Completing each of these sections in order should result
// in a functional, testable program. However, please free to approach the problem
// differently. There are many paths and approaches that result in a perfectly
// valid finished product.

// --------------------------------------------------
// Step 1: Capture user input
// --------------------------------------------------
// In this step we will capture the command line  information supplied by the user.
// We will store each piece of information in a dedicated variable for later use.
const amount = process.argv[2];
const baseCurrency = process.argv[3];
const targetCurrency = process.argv[4];
let validCurrencies = ["CAD", "USD", "GBP", "EUR"];

// --------------------------------------------------
// Step 2: Validate user input
// --------------------------------------------------
// Next we will ensure that the user has provided all of the require information.
// If any of the required information is missing, display a meaningful message
// and exit the program.
let errorMessage = "";
if (amount < 0)
{
    errorMessage = "Invalid Input, The amount given is less than Zero. Value: " +amount;
    process.exit();
}

if(checkIfUndefined(amount, "Amount"))
{
    console.error(errorMessage);
    process.exit();
}

if(checkIfUndefined(baseCurrency, "Base Currency"))
{
    console.error(errorMessage);
    process.exit();
}

if(checkIfUndefined(targetCurrency, "Target Currency"))
{
    console.error(errorMessage);
    process.exit();
}

function checkIfUndefined(field, fieldName)
{
    if(field === undefined){
        errorMessage = "Invalid Input for "+ fieldName +". Value: "+ field;
        return true;
    }

    return false;
}

// --------------------------------------------------
// Step 3: Define currency conversion rates
// --------------------------------------------------
// Here we will define which currency conversions are supported, as well as the
// rates between each currency. We will capture this information as an object
// and store it in dedicated varaible for later use.
// We will use the official currency abbreviation for each currency (eg. USD, CAD, etc.).
// The conversion rates do not have to be accurate, athough this resource contains
// up-to-date rate information: https://www.xe.com/
const USD = 1;
const CAD = 1.28;
const EUR = 0.88;
const GBP = 0.76;

// --------------------------------------------------
// Step 4: Ensure that a conversion rate exists
// --------------------------------------------------
// Since it is possible for the user to supply invalid or unsupported currencies,
// we must check for the presence of a rate before attempting to convert.

// If the user supplies an invalid initial or target currency, display a meaningful
// warning message and exit the program.
if(!checkIfValidCurrency(baseCurrency, "Base Currency"))
{
    console.error(errorMessage);
    process.exit();
}

if(!checkIfValidCurrency(targetCurrency, "Target Currency"))
{
    console.error(errorMessage);
    process.exit();
}

function checkIfValidCurrency(currency, currencyName)
{
    if(!validCurrencies.includes(currency))
    {
        errorMessage = "The "+ currencyName + " is not a valid Global Currency. Value: "+ currency + ". The supported currencies are: "+ validCurrencies;
        return false;
    }

    return true;
}


// --------------------------------------------------
// Step 5: Perform conversion
// --------------------------------------------------
// At this point we've confirmed that the user has supplied all of the necessary
// information, and that a rate exists for each of the currencies.
// Now we will compute the rate, apply it to the amount, and capture the result.
let convertedAmount = 0;
if(baseCurrency == "USD" )
{
    if(targetCurrency == "CAD")
    {
        convertedAmount = amount * CAD;
    }
    else if (targetCurrency == "EUR")
    {
        convertedAmount = amount * EUR;
    }
    else if (targetCurrency == "GBP")
    {
        convertedAmount = amount * GBP;
    }
}
else if(baseCurrency == "CAD" )
{
    if(targetCurrency == "USD")
    {
        convertedAmount = amount / USD;
    }
    else if (targetCurrency == "EUR")
    {
        convertedAmount = amount/CAD * EUR;
    }
    else if (targetCurrency == "GBP")
    {
        convertedAmount = amount/CAD * GBP;
    }
}
else if(baseCurrency == "EUR" )
{
    if(targetCurrency == "USD")
    {
        convertedAmount = amount / USD;
    }
    else if (targetCurrency == "CAD")
    {
        convertedAmount = amount/EUR * CAD;
    }
    else if (targetCurrency == "GBP")
    {
        convertedAmount = amount/EUR * GBP;
    }
}
else if(baseCurrency == "GBP" )
{
    if(targetCurrency == "USD")
    {
        convertedAmount = amount / USD;
    }
    else if (targetCurrency == "CAD")
    {
        convertedAmount = amount/GBP * CAD;
    }
    else if (targetCurrency == "EUR")
    {
        convertedAmount = amount/GBP * EUR;
    }
}

// --------------------------------------------------
// Step 6: Display results
// --------------------------------------------------
// Finally we will display the result as part of a meaningful message.

// This message should also include the original amount and currency information
// supplied by the user.
