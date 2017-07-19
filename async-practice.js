function responseAfter2seconds(x){

  return new Promise(function(resolve,reject){

        setTimeout(function(){

          resolve(x);

        },2000);

  });

}

async function add1(x){
        var a=responseAfter2seconds(20);
        var b =responseAfter2seconds(20);
        return x+a+b;

}

responseAfter2seconds(10).then(function(result){

  console.log("Result is :"+result);

});

add1(20).then(function(result){

    console.log("Result is :" +result);
});
