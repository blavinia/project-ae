$(document).ready(function(){
    showCategories()
    showProducts()
})

function showCategories() {
    $.get('/categories', function(){
        $.get( "/categories", function( data ) {
            var html = ''
            data.forEach(function(category) {
                html = html + '<li><a href="#" onClick="showProducts('+category.id+')">'+category.name+'</a></li>'
            })
            $('#content').html(html)
        });
    })
}

//todo: implement showProducts method
function showProducts(categoryId) {
    if(categoryId) {
        var url = '/categories/'+ categoryId +'/products';
    } else {
        var url = '/products'   
    }
    $.get(url, function(data) {
        var html = '';
  
        data.forEach(
            function(product) {
                html = html + '<div class="product">'
                  +  '<h1>'+product.name+'</h1>'
                  +  '<p>'+product.description+'</p>'
                + '</div>';
                
                
            }
        )
        $('#content').html(html);
    })
}