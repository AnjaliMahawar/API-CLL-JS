fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
    res.json()
}).then((d)=>{
    console.log(d)
})