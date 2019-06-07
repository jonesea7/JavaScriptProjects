// JavaScript source code


//first I can establish the object pizza that will be collected from the html page

let userPizza = {
    size:[],
    meat:[],
    cheese:[],
    crust:[],
    sauce:[],
    veggies:[],

}

//establish an object for all the the prices of the various pizza options
//add them to a table later when all the input is collected from user

// for example: create a new object using both of these objects

    //console.log(userPizza.size +" "+ userPrice.size)


    //these prices will be collected based on the size given above
let userPrice = {
    sizePrice:[],
    meatPrice:[],
    cheesePrice:[],
    crustPrice:[],
    saucePrice:[],
    veggiesPrice:[],
}

let receipt = {
    basePrice: (userPizza.size + userPrice.size),
    priceTotal: sumTotalPrice(),
}
    
function sumTotalPrice(userPrice) {
    var sum = 0;
    for (var num in userPrice) {
        if( userPrice.hasOwnProperty(num)) {
        sum += parseFloat( userPrice[num]);
        }
    }
    return sum

        //for the number in the given price from the userPrice object
        //add that number to the other numbers collected in userPrice and print the the sum total
    }

            //THE FOLLOWING TWO LINES PROBABLY NEED TO BE ADDED TO THE SUMTOTALPRICE FUNCTION ABOVE
            //var summed = sum(userPrice);
            //console.log("Total Price: " +summed)