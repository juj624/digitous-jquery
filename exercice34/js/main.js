$(document).ready(() => {

    $(".btn-success").click(() => {
       let countries = $("input").val()
       console.log(countries);
        $.ajax({
            url: `https://restcountries.eu/rest/v2/name/${countries}`,
            success: function (data, statuts, response) {

                $("#country").html(data[0].name);
                $("#capital").html(data[0].capital);
            }
        });
    });
});