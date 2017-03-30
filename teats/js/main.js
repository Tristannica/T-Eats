$.get('https://galvanize-eats-api.herokuapp.com/menu')
.then(function(data){
    menuData(data)
})

.catch(function(reason){
    console.log(err)
})



$.post('https://galvanize-eats-api.herokuapp.com/orders', {"This is your Order": "Congratulations!"})
.then(function(data){
    orderData(data)
    console.log(data)
    //alert("Congratulations!")
})

.catch(function(reason){
    console.log(err)
})
