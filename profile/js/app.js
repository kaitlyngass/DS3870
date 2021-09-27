$.get%JSON("https://www.swollenhippo.com/getProfileDetailsByAPIKey.php?APIKey=DuffManSays,Phrasing!",function(result){
    console.log(result);
    arrProfileData = result;
    fillProfile(arrProfileData[0]);
})

function fillProfile(Employee){
    $('#txtEmployeeName').text(Employee.FirstName + ' ' + Employee.LastName);
    $('#txtCodeName').text(Employee.CodeName);
    $('#txtPostion').text(Employee.Job);
}