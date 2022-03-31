// Create a loop where the initial value is 10,000. You need to rotate the loop 50 times by using the increment and decrement operator twice.


for(let i = 10000;i<10050;i++){
    console.log(i);

    if(i==10049){
        for(let i = 10049;i>=10000;i--){
            console.log(i);
        }
    }
}
