console.log('Person1: shows ticket');
console.log('Person2: shows ticket');

const preMovie=async ()=>{
    const promiseWifeBringingTickets=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    })
    const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
    const getButter=new Promise((resolve,reject)=>resolve('butter'));
    const getCooldrinks=new Promise((resolve,reject)=>resolve('cooldrinks'));


    let ticket=await promiseWifeBringingTickets;

    console.log('wife: i have the tickets')
    console.log('husband: we should go in')
    console.log('wife: no i am hungry');

    let popcorn=await getPopcorn;

    console.log(`husband: i got some ${popcorn}`)
    console.log('husband: we should go in')
    console.log('wife: I need butter on my popcorn');
    
    let butter=await getButter;
    
    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('husband:anything else?')
    console.log('wife: I want cooldrinks')
    let drinks=await getCooldrinks;
    
    console.log(`husband:i have ${drinks}`)
    console.log('wife:lets go we are getting late')



    return ticket;
    
};

preMovie().then((m)=>console.log(`Person3: shows ${m}`))

console.log('Person4: shows ticket');
console.log('Person5: shows ticket');