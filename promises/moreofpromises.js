const promisefive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({
                username : "javascript",
                password : "hellobaua09"
            });
        }
        else{
            reject('Error : js went wrong');
    
        }
       }, 1000);
})

// promisefive.then() you can use this but we here now learn another approach 


//async -  await

async function consumepromisefive(){
   const response = await promisefive
   console.log(response)
}

// consumepromisefive()  this is the call to async function;
    

//exapmle and fetch

async function getusername() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users') //fetch need url and also more thing which we learn later on
//  const data = response.json() //convert string to json
//  console.log(data);



//this is a try catch method which handle error in async functons;

try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users') //fetch need url and also more thing which we learn later on
  
    const data =  await response.json() //convert string to json
    console.log(data);
} catch (error) {
    console.log("E : ",error);
    
}
    
}
getusername()  // output " promise {<pending>}" because we cant wrap this into a try catch(line no : 41) 

//note : after using try cathc we still get pending not because of our code is wrong this in because response.json()also take time to convert so we have to put it in await;( line no : 44) 



