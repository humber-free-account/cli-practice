const USD = 1;
const CAD = 1.28;
const EUR = 0.88;
const GBP = 0.76;
const converterUtility = (amount, baseCurrency, targetCurrency) =>{
    if(baseCurrency == "USD" )
{
    if(targetCurrency == "CAD")
    {
        return amount * CAD;
    }
    else if (targetCurrency == "EUR")
    {
        return amount * EUR;
    }
    else if (targetCurrency == "GBP")
    {
        return amount * GBP;
    }
}
else if(baseCurrency == "CAD" )
{
    if(targetCurrency == "USD")
    {
        return amount/CAD;
    }
    else if (targetCurrency == "EUR")
    {
        return amount/CAD * EUR;
    }
    else if (targetCurrency == "GBP")
    {
        return amount/CAD * GBP;
    }
}
else if(baseCurrency == "EUR" )
{
    if(targetCurrency == "USD")
    {
        return amount/EUR;
    }
    else if (targetCurrency == "CAD")
    {
        return amount/EUR * CAD;
    }
    else if (targetCurrency == "GBP")
    {
        return amount/EUR * GBP;
    }
}
else if(baseCurrency == "GBP" )
{
    if(targetCurrency == "USD")
    {
        return amount/GBP;
    }
    else if (targetCurrency == "CAD")
    {
        return amount/GBP * CAD;
    }
    else if (targetCurrency == "EUR")
    {
        return amount/GBP * EUR;
    }
}
};


module.exports = {
    converterUtility
};