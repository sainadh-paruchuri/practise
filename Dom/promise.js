const Posts=[
    {title:'Post One',body:'Post One is Created'},
    {title:'Post Two',body:'Post Two is Created'}
]

function getPost(){
    setTimeout(()=>{
        let output='';
        Posts.forEach((post)=>{
            output+=`<li> ${post.title}</li>`
        })
        document.body.innerHTML=output;
        
    },1000)
}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            Posts.push(post);

            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('EROOR:Something went wrong ')
            }
        },1000)
    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Posts.length!=0){
                resolve( Posts.pop())
            }
            else{
                reject('Array is Empty')
            }
        },2000)
        

    })
}
createPost({title:'Post Three',body:'Post Three is Created'})
.then(()=>{
    getPost()
    deletePost().then(()=>{
        getPost()
        deletePost().then(()=>{
            getPost()
            deletePost().then(()=>{
                getPost()
                deletePost().then(()=>{})
                .catch((err)=>{
                    console.log('Inside catch block',err)

                })
            })
        })
    })
})


//promise.all
const promise1=Promise.resolve('Hello World');
const promise2=10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Good Bye')
});
Promise.all([promise1,promise2,promise3]).then(values=>{
    console.log(values)
})