// function getdata(callback){
//     console.log("Processing...");
//     callback();
// }
// getdata(function (){
//     console.log("Data received");
// }   
// );


// --->>


let promise = new Promise(function(resolve, reject) {       
    let data = true;    
    if(data){
        resolve("Data received");
    }
    else{
        reject("No data found");
    }
});

promise.then(function(message){
    console.log(message);
}).catch(function(message){
    console.log(message);
}) .finally(function(){
    console.log("Process completed");
}
);

