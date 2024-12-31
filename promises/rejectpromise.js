const promiserej = new Promise(function(resolve,reject){
   setTimeout(() => {
    let error = false;
    if(!error){
        resolve({
            username : "mihir",
            password : "hellobaua09"
        });
    }
    else{
        reject('Error : Something went wrong');

    }
   }, 1000);
})
promiserej.then((user) => {
        // console.log(user);
       return user.username;
       //so when we return this user.username where it is going and when we take all this in a new vaiable and print out whole we get promise < pending >

       // so for avoiding this there is a concept of chaining introduce to us;


       //this .then() again is chaining
}).then((username) => {
    console.log(username);

}).catch(function(error){
    console.log(error);

    //output : Error : Something went wrong it is because if you see error is true but if we change error then 

    //{ username: 'mihir', password: 'hellobaua09' mihir }

}). finally(() => { console.log("The Promise is either rejected or reseolved ")}) //ye line chlti hi hai promise resolve ho ya reject!



//The .catch() method is used to handle any errors or rejections that occur in the promise chain. It catches any promise rejection (when .reject() is called) or errors in the previous .then() callbacks.