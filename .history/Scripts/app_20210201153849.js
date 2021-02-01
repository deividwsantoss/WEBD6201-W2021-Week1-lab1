/* Custom scripts goes here */

//IIFE - Immediately invoked function expression 
//AKA: Anonymous Self-Executing Function

(function()
{

    //initialization function  
    function Start()
    {
        console.log("App Started...");

        for (let index = 0; index < 5; index++) {
            console.log(index);
            
        }
    }
    //event listener 
    window.addEventListener("load",Start);

})();


