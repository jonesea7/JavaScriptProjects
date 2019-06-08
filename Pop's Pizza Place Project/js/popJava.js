// JavaScript source code

//initialize variable for size and its cost
function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium") {
		sizeTotal = 10;
	} else if (selectedSize === "Large") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
    getMeat(runningTotal,text1);
    getCheese(runningTotal,text1);
    getCrust(runningTotal,text1);
    getSauce(runningTotal,text1);
    getVeggies(runningTotal,text1); // All three of these variables will be passed on to each function
};



function getMeat(runningTotal,text1) {
        var meatTotal = 0;
        var selectedMeat = [];
        var meatArray = document.getElementsByClassName("meat");
        for (var j = 0; j < meatArray.length; j++) {
            if (meatArray[j].checked) {
                selectedMeat.push(meatArray[j].value);
                console.log("selected meat item: ("+meatArray[j].value+")");
                text1 = text1+meatArray[j].value+"<br>";
            }
        }
        var meatCount = selectedMeat.length;
        if (meatCount > 1) {
            meatTotal = (meatCount - 1);
        } else {
            meatTotal = 0;
        }
        runningTotal = (runningTotal + meatTotal);
        console.log("total selected meat items: "+meatCount);
        console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
        console.log("meat text1: "+text1);
        console.log("Purchase Total: "+"$"+runningTotal+".00");
        document.getElementById("showText").innerHTML=text1;
        document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    };

//  ------------------------ GET CHEESE FUNCTION ---------------------------
//   -------------------------------------------------------------------

function getCheese(runningTotal,text1) {
            var cheeseTotal = 0;
            var selectedCheese = [];
            var cheeseArray = document.getElementsByClassName("cheese");
            for (var h = 0; h < cheeseArray.length; h++) {
                if (cheeseArray[h].checked) {
                    selectedCheese.push(cheeseArray[h].value);
                    console.log("selected cheese item: ("+cheeseArray[h].value+")");
                    text1 = text1+cheeseArray[h].value+"<br>";
                }
            }
            
            if (selectedCheese == "Extra Cheese") {
                cheeseTotal = 3;
                
            } else {
                cheeseTotal = 0;
            }
            runningTotal = (runningTotal + cheeseTotal);
            console.log("Cheese option: "+selectedCheese);
            
            console.log("cheese text1: "+text1);
            console.log("Purchase Total: "+"$"+runningTotal+".00");
            document.getElementById("showText").innerHTML=text1;
            document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
        };
// ----------------------------------- GET CRUST FUNCTION ---------------------------------
// ---------------------------------------------------------------------------------------

function getCrust(runningTotal,text1) {
    var crustTotal = 0;
    var selectedCrust = [];
    var crustArray = document.getElementsByClassName("crust");
    for (var k = 0; k < crustArray.length; k++) {
        if (crustArray[k].checked) {
            selectedCrust.push(crustArray[k].value);
            console.log("selected crust item: ("+crustArray[k].value+")");
            text1 = text1+crustArray[h].value+"<br>";
        }
    }
    
    if (selectedCrust == "Cheese-filled") {
        crustTotal = 3;
        
    } else {
        crustTotal = 0;
    }
    runningTotal = (runningTotal + crustTotal);
    console.log("Crust option: "+selectedCrust);
    
    console.log("crust text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};



function getVeggies(runningTotal,text1) {
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggies");
    for (var l = 0; l < veggieArray.length; l++) {
        if (veggieArray[l].checked) {
            selectedVeggie.push(veggieArray[l].value);
            console.log("selected veggie item: ("+veggieArray[l].value+")");
            text1 = text1+veggieArray[l].value+"<br>";
        }
    }
    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    console.log("total selected veggie items: "+meatCount);
    console.log(meatCount+" veggie - 1 free veggie = "+"$"+meatTotal+".00");
    console.log("veggie text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};

