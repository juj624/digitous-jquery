$(document).ready( () => {

    $(".btn-success").click(() => {
        var variable = $("input").val()
        $.ajax({
            url: `https://restcountries.eu/rest/v2/name/${variable}`,
            success: function (data, statuts, response) {

               $(#"country") console.log(data[0].name);
               $(#"capital") console.log(data[0].capital);
            }
        });
   