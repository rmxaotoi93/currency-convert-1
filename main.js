// 1. Define amount
let amount = prompt("how much amount you want to convert");

// 2. Define from currency
let currency = prompt("choose your currency 'vnd' or 'usd'?");

// 3. Define to currency

// 4. Define currency ratio (23161.39)
let ratio = 23161.39;

let result = 0;
// 5. Definte converting function
function vndToUsd(){
    return amount * ratio;
}
function usdToVnd(){
    return amount / ratio;
    
}
if(parseInt.amount == false && currency != 'vnd' && currency != 'usd' ){
    console.log("Invalid info")
}
else if(currency === 'vnd'){
    result = vndToUsd()
    console.log(result)
}
else if(currency === 'usd'){
    result = usdToVnd()
    console.log(result)
}
// 5a. amount * currency ratio = result


// 6. Define result

function formatCurrency(type, result) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(result);
  }

console.log(formatCurrency('usd', result))