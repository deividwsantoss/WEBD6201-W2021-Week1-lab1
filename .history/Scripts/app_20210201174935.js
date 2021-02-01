/* Custom scripts goes here */

//IIFE - Immediately invoked function expression 
//AKA: Anonymous Self-Executing Function

(function()
{

    //initialization function  
    function Start()
    {
        console.log("App Started...");       
    }

    //event listener 
    window.addEventListener("load",Start);

})();


