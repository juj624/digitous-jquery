$(document).ready(() => {

    $(".btn-success").click(() => {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/France",
            success: function (data, statuts, response) {

                $("#country").html(data[0].name);
                $("#capital").html(data[0].capital);
            }
        });
    });
});