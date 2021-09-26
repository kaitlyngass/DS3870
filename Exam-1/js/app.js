$.getJSON("https://www.swollenhippo.com/getProfileDetailsByAPIKey?APIKey=DuffManSays,Phrasing!",function(result){
    $.each(result,function(i,person){
        //addtocard
        $('#divCardContainer').append(buildEmployeeCard(person));
        //addtotable
       // $('#divTableContainer tbody').append(buildPayStubs(person));
    })
})
$.getJSON("https://www.swollenhippo.com/getPayStubsByAPIKey.php?APIKey=DuffManSays,Phrasing!",function(result){
    $.each(result,function(i,person){
        $('#divTableContainer').append(buildPayStubs(person));

    })
})

function buildPayStubs(person){
    let strRowHTML = '<tr>';
    strRowHTML += '<th>' + person.Month + '</th>';
    strRowHTML += '<tr>' + person.Year + '</th>';
    strRowHTML += '<tr>' + person.Sales + '</th>';
    strRowHTML += '<tr>' + person.Hours + '<.th>';
    strRowHTML += '<tr>' + person.Rate + '</th>';
    strRowHTML += '<tr>' + person.CommissionRate + '</th>';
    strRowHTML += '<td> Total Pay </td>';
    strRowHTML = '<tr>';
    return strRowHTML;
}

function calculateTotalPay(person){
    let decTotalPay = 0;
    let decCommisson = 0;
    let decBasePay = 0;
    decBasePay = (person.HoursWorked * person.HourlyRate);
    decCommisson = (person.CommissionRate * person.Sales);
    decTotalPay = (decBasePay + decCommisson);
}

function buildEmployeeCard(person){
    let strCardHTML = '<div class-"card">';
    strCardHTML += '<div class= "card-body">';
    strCardHTML += '<img src="./images/archer.jpg" alt="Profile Pic" style="width:100%; border-radius: 50%;"></img>';
    strCardHTML += '<h2 class= "text-center mb-0">' + person.FirstName + ' ' +person.LastName + '</h2>';
    strCardHTML += '<h4 class="text-center text-muted mt-0">' + person.CodeName + '</h4>';
    strCardHTML += '<h4 class="text-center text-muted mt-0">' + person.Agency + '</h4>';
    strCardHTML += '<h4 class="text-center text-muted mt-0">' + person.Job + '</h4>';

    strCardHTML += '<h5 class="mt-5 text-bold">Contact Details</h5>';
    strCardHTML += '<p class="mb-0 m-3">Phone Number: <a href="tel:' + person.Phone + '" class="aPhone">' + person.Phone + '</a></p>';
    strCardHTML += '<p class="mt-0 ml-3">Email: <a href="mailto:' + person.Email + '" class="aEmail">' + person.Email + '</a></p>';
    strCardHTML += '<h5 class="mt-4 text-bold">Address</h5>';
    strCardHTML += '<p class="mb-0 ml-3">Street Address: <a href="aAdd' + person.Street1 +'"class=aAddress">' + person.Street1 + '</a></p>';
    strCardHTML += '<p class="mb-0 ml-3">City: <a href="aCity' + person.City +'"class=aCity">' + person.City + '</a></p>';
    strCardHTML += '<p class="mb-0 ml-3">State: <a href="aState' + person.State +'"class=aState">' + person.State + '</a></p>';
    strCardHTML += '<p class="mb-0 ml-3">Zip Code: <a href="aZip' + person.Zip +'"class=aZip">' + person.Zip + '</a></p>';
    strCardHTML += '<p class="mb-0 ml-3">Emergency Contact: <a href="aEContact' + person.EContact +'"class=aEContact">' + person.EContact + '</a></p>';
    strCardHTML += '<p class="mb-0 ml-3">Phone: <a href="aEContactNumber' + person.EContactNumber +'"class=aEContactNumber">' + person.EContactNumber + '</a></p>';
    strCardHTML += '</div>';
    strCardHTML += '</div>';
   // strCardHTML += '<button class="btn btn-prmary btn-block btnCalculate">Find Hours For Goal</button>';
    strCardHTML += '</div>';
    strCardHTML += '</div>';
    return strCardHTML
}