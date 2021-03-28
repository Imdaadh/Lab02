//-------------------------------------------Question 01--------------------------------------------------------

function getValue(){

    let value=5;

    setTimeout( function() {
        value = 10;
        //console.log(value);

    }, 1000);
    return value;
}
//getValue();

//console.log(getValue());


 function getValue1(callback){
    let value=5;

    setTimeout( function() {
        value = 10;
        callback(value);
    }, 1000);
    return value;
}

//console.log(getValue1());


getValue1(function (value){
   console.log(value);

});




function getValue2(callback){
    let value=5;

    setTimeout( function() {
        value = 10;
        callback(value);
    }, 1000);
    return value;
}




function getsNewValue(value,callback){
    setTimeout(function (){

        callback((23 * 100 )+ value);
    }, 1000)
};




getValue2(function (value){


    getsNewValue(value, function (new_value){

     //   console.log(value);
        console.log(new_value);

    })


});

//Promises



function getValue3(){

    let value = 3;

    return new Promise(function (resolve,reject){
        setTimeout(function (){
            value = 15;
            resolve(value);
        }, 2000)

    })

}


getValue3().then(function (value){
   console.log(value);

});


//Example 02
function getValue4(){

    let value = 3;

    return new Promise(function (resolve,reject){
        setTimeout(function (){
            value = 25;
            resolve(value);
        }, 2000)

    })

}

function getsNewValue2 (values) {
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            resolve( values * 265);
        }, 2000);

    });
}

getValue4().then(function (value){
    console.log(value);
    return getsNewValue2(value);

}).then(function (values){
    console.log(values);

});


//-------------------------------------------Question 02--------------------------------------------------------

function Vehicle(type){
    this.type = type;
    Vehicle.VehicleCount++ ;

}

Vehicle.prototype.drive = function (){

    console.log(this.type +  " is Driving");
};

Vehicle.VehicleCount = 0;

let vehicle  = new Vehicle ("Nissan");
console.log(vehicle.type);

vehicle.drive();

function Car(type){

    Vehicle.call(this, type);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.balanceWheels = function (){

    console.log(this.type + ' Wheels are Balanced')
}

let car = new Car ("Lambogini");
console.log(car.type);
car.balanceWheels();
car.drive();

console.log(Vehicle.VehicleCount);



//------------------03--------------------------------------------------------------


function getArrowFunctions(){

    let values = 9;
    return new Promise((resolve, reject) => {
        setTimeout(function (){
            values= 30;
            resolve(values);

        },2500)
    });
}

function getnewArrow(values){

    return new Promise((resolve, reject) => {
        setTimeout(function (){

            resolve( values * 100);
        },2500)
    });

}

async function print(){

    let val = await getArrowFunctions();
    val = await getnewArrow(val);

    console.log(val);



}

print();


