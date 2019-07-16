$(document).ready(function() {
    var api_gateway_url = 'https://dw76jztjb8.execute-api.us-west-1.amazonaws.com/prod/messages';
    var rows = [];
    $.get(api_gateway_url, function(data) {
        data.forEach(function(item) {
            
            // build an array of rows containing the prices
            rows.push(`<tr> \
                <td>${item['name']}</td> \
                <td>${item['email']}</td> \
                <td>${item['city']}</td> \
            </tr>`);
        });
        // show the now filled table and hide the "loading" message
        $('table.table').append(rows.join()).show();
        $('#loading').hide();
    });
});