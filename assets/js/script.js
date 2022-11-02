
/*
<div class="card-header d-flex">                               
            <input type="checkbox">
            <button class="btn text-dark text-start border-0 btn-css" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                Wash the dishes
            </button> 
            <a href="#" data-bs-toggle="tooltip" title="edit"><i class="fa-solid fa-pencil pt-3 pe-3 fa-sm icon-pencil"></i></a> 
            <a href="#" data-bs-toggle="tooltip" title="delete"><i class="fa-solid fa-trash pt-3 fa-sm icon-garbage"></i></a>                              
</div>


<div class="collapse show " id="collapseOne" data-bs-parent="#accordion">
    <div class="card-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante est, pharetra nec consequat id
    </div>
</div>

*/

//DELETING
$(document).ready(function(event){
    $("#todoList").on('click', '.icon-garbage', function(){
        $(this).parent().fadeOut(200, function(){
            $(this).parent().remove();
        })  
        event.stopPropagation();
    }) 
})


//CREATING

$(document).ready(function(){

    $("#btnNewTask").click(function(){

        let varInput = $(`<input type="text">`);
        $("#todoList").append(varInput);
        $(varInput).keypress(function(event){
    
            let task = $(varInput).val();
            if (event.which === 13){
    
                $("#todoList").append(`
                    <div class="card-header d-flex" id="cardHeader">                               
                        <input type="checkbox">
                        <button class="btn text-dark text-start border-0 btn-css" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                          `  + task + `
                        </button> 
                        <a href="#" data-bs-toggle="tooltip" title="edit"><i class="fa-solid fa-pencil pt-3 pe-3 fa-sm icon-pencil"></i></a> 
                        <a href="#" data-bs-toggle="tooltip" title="delete"><i class="fa-solid fa-trash pt-3 fa-sm icon-garbage"></i></a>                              
                    </div>
                `)
                $(varInput).remove();
            }
        })  
    })
})







