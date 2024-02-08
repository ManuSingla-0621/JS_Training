function sum(...args) // parameter passing as variable length
{
 let sum=0;// declaring and intializing 
 for(let i=0;i<args.length;i++)
 {
    sum+=args[i];// updating the sum value
 }
 return sum; // returning the sum
}

let x=sum(3,39,3,3); // passing arguments values in variable length argument
console.log(x); // printing the result