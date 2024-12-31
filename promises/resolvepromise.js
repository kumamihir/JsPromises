const Promiseone = new Promise(function(resolve , reject) 
 {
// do an async task 
//DB calls 
//cryptography related
//network call;
setTimeout(function(){
    console.log("async task has been done")
    resolve(); //resolve connected with .then();

    // now output is " async task has been done
// promise consumed"
},2000)

}) //promise has been created;


//now we have to run that promise so we hold that promise in a promiseone varaiable so take that 

Promiseone.then(function(){
    console.log("promise consumed")
}); //then has a direct connection with resolve

//when you run this code this will only give output " async task has been done" thats mean we cant fullfile our promise but no in this we doesnt connect our then with resolve so first we have to connect our then with resolve 



//creating promise wihtout taking it in any varibale

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async work 2")
        resolve();
    },2000);
}).then(function(){
    console.log("promise 2 is consumed")
})

//suppose any data is coming from any network or any file base ;

const promisethree = new Promise(function(resolve,reject){
 setTimeout(() => {
    resolve({
        username : "MIHIR KUMAR",
        age : 19,
        gmail : "someone@gmail.com",
        city : "delhi"
       

    }) ; // in this resolve you can pass any parameter like objects ,funtion callbacks any array
    
 }, 1000);
})

promisethree.then(function(user){//we just assume anything in that parameter and then we console it to see wether our promise is fullfile or not

    console.log(user);

});