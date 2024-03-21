$(document).ready(function() {
    $('button.btn').click(function() {
        $.ajax({
            url: "http://api.weatherapi.com/v1/current.json?key=b5368f3f0cf1492fa3022623241503",
            type: "get",
            data: {
                q: $(".keyword").val(),
                aqi: "no"
            },
            success: function(data) {
                console.log(data);
                let element = showElement(data);
                $("#container").html(element);
            },
            error: function(xhr, status, error) {
                console.error("Error:", error);
            }
        });
    });

    function showElement(data) {
        return `
        <h3>${data.location.name}, ${data.location.region}, ${data.location.country}</h3>
        <div class="box">
            <img src="http:${data.current.condition.icon}" alt="">
            <h1>${data.current.temp_c} °C</h1>
        </div>
        <p>${data.current.last_updated}</p>
        <p>${data.current.condition.text}</p>
        `;
    }
});
