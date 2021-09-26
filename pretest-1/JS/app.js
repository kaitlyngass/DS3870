$(document).on('click','#btnCalculatePay', function(){
    let decPayRate = $('#spanHour1 any ').text();
    let decHours = $('#txtHours').val();
    let decTotalPay =decPayRate * decHours;
    $('#spanTotalPay').text(decTotalPay);

})