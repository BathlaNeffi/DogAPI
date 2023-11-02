

var allowSumbit=false;
var dropDown=$('#dog-breeds');
var breed;


dropDown.change(function(){
    allowSumbit=true;
})


$.get('https://dog.ceo/api/breeds/list/all', function(data){

    const dogBreed= data.message ;
    for(var breed in dogBreed){
        // console.log(breed);
        $('#dog-breeds').append(`<option>${breed}</option>`)

    }})

   






    $("#next a").click(function (e) {
        e.preventDefault();
        if (breed !== undefined) {
            displayDog(breed);
        }
    });

    $('form button').on('click',function(e){
        e.preventDefault();

        if(allowSumbit){
            breed=dropDown.val();
            displayDog(breed);
            allowSumbit=false;

        }
       
    })




    function displayDog (breed){

        $.get(`https://dog.ceo/api/breed/${breed}/images/random`, function(data){
            const imgUrl=data.message;
            // console.log(imgUrl)
            $("#breed-image img").remove();

            $('#breed-image').append(`<img src=${imgUrl} alt="${breed}">`);

            console.log(breed);
            $('#breed-sub h1').remove();

            const myArr=imgUrl.split("/");
            

            $('#breed-sub').append(`<h1 style="text-align: center; color: grey;">Type:  ${myArr[4]}</h1>`)

        }).fail(function(err){
            console.log(err)
        })


    }




