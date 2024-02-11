// function definiton to check the dsubscription routes
function SubscriptionCheck(subscription,routes){

    if(subscription.length!=routes.length)   //if length of routes and subscription is not equal
    return;

    let res=[];     // create a result in which stored objects
                                              //answer array for storing the answer
    for(let i=0; i<subscription.length;i++){

        if(subscription[i].name==routes[i].name){

        if(subscription[i].isSub==true){              //nested loop for handling inner case

            let newObject={name: routes[i].name};  

            if(subscription[i].hasOwnProperty('subMod'))    
            
            {

                 let Subscription_inner = subscription[i].subMod;
                 let Routes_result = routes[i].subComp;
                 let innerSubArray = SubscriptionCheck(Subscription_inner, Routes_result);

                 newObject.subComp=innerSubArray;
                 res.push(newObject);

            }

            else{

                res.push({redirectTo: routes[i].name});
            }

        }

        else{

            res.push({ name: routes[i].name, comp: "UN"});
        }
    }

    else{

         res.push({name: routes[i].name, comp: "UN"});

    }

    }
  return res;// returing the result in which array of objects are their
}



// input routes 
const routes = [
  {
    name: 'M1',
    comp: 'C1',
  },
  {
    name: 'M2',
    comp: 'C2',
  },
  {
    name: 'M3',
    subComp: [
      {
        name: 'M3A',
        comp: 'C3A',
      },
      {
        name: 'M3B',
        comp: 'C3B',
      },
    ],
  },
  {
    name: 'M4',
    subComp: [
      {
        name: 'M4A',
        comp: 'C4A',
      },
      {
        name: 'M4B',
        comp: 'C4B',
      },
    ],
  },
  {
    name: 'M5',
    subComp: [
      {
        name: 'M5A',
        comp: 'C5A',
      },
      {
        name: 'M5B',
        subComp: [
          {
            name: 'M5BA',
            comp: 'C5BA',
          },
          {
            name: 'M5BB',
            comp: 'C5BB',
          },
          {
            name: 'M5BC',
            comp: 'C5BC',
          },
        ],
      },
      {
        name: 'M5C',
        comp: 'C5C',
      },
    ],
  },
];
// routes which having subscription or not
const subscription = [
  {
    name: 'M1',
    isSub: true,
  },
  {
    name: 'M2',
    isSub: false,
  },
  {
    name: 'M3',
    isSub: false,
    subMod: [
      {
        name: 'M3A',
        isSub: true,
      },
      {
        name: 'M3B',
        isSub: true,
      },
    ],
  },
  {
    name: 'M4',
    isSub: true,
    subMod: [
      {
        name: 'M4A',
        isSub: false,
      },
      {
        name: 'M4B',
        isSub: true,
      },
    ],
  },
  {
    name: 'M5',
    isSub: true,
    subMod: [
      {
        name: 'M5A',
        isSub: false,
      },
      {
        name: 'M5B',
        isSub: true,

        subMod: [
          {
            name: 'M5BA',
            isSub: false,
          },
          {
            name: 'M5BB',
            isSub: true,
          },
          {
            name: 'M5BC',
            isSub: false,
          },
        ],
      },
      {
        name: 'M5C',
        isSub: true,
      },
    ],
  },
];
// calling a function subscription check and then print using JSON.stringify
console.log(JSON.stringify(SubscriptionCheck(subscription, routes)));