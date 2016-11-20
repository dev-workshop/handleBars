var productEl = document.querySelector("#productTemplate");
var productTemplate = Handlebars.compile(productEl.innerHTML);

function createProduct(data, appender) {
    var element = productTemplate(data);
    appender.append(element);
}

Handlebars.registerHelper('calc', function(val1, val2) {
    return val1 + val2; // where cnt will be calculated
});

$.getJSON("data/data.json", function(data){
    createProduct(data, $(".wrapper"));
});