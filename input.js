function enter_btn_click(){
    validation();
}

function validation(){
    name_validation();
    job_validation();
    address_validation();
    email_validation();
    phone_validation();
    summary_validation();
}

function name_validation(){
    let name = $('#name').val();
    name = name.trim();

    if(name===''){
        $('#name').css("border-color", "red");
        $('#name_validation_empty').css("display", "block");
        $('#name_validation_number').css("display", "none");
    }
    else if(name.match(/[0-9]/)){
        $('#name').css("border-color", "red");
        $('#name_validation_empty').css("display", "none");
        $('#name_validation_number').css("display", "block");
    }
    else{
        $('#name').css("border-color", "black");
        $('#name_validation_empty').css("display", "none");
        $('#name_validation_number').css("display", "none");
    }
}

function job_validation(){
    let job = $('#job').val();
    job = job.trim();

    if(job===''){
        $('#job').css("border-color", "red");
        $('#job_validation_empty').css("display", "block");
        $('#job_validation_number').css("display", "none");
    }
    else if(job.match(/[0-9]/)){
        $('#job').css("border-color", "red");
        $('#job_validation_empty').css("display", "none");
        $('#job_validation_number').css("display", "block");
    }
    else{
        $('#job').css("border-color", "black");
        $('#job_validation_empty').css("display", "none");
        $('#job_validation_number').css("display", "none");
    }
}

function address_validation(){
    let address = $('#address').val();
    address = address.trim();

    if(address===''){
        $('#address').css("border-color", "red");
        $('#address_validation_empty').css("display", "block");
    }
    else{
        $('#address').css("border-color", "black");
        $('#address_validation_empty').css("display", "none");
    }
}

function email_validation(){
    let email = $('#email').val();
    email = email.trim();

    if(email===''){
        $('#email').css("border-color", "red");
        $('#email_validation_empty').css("display", "block");
        $('#invalid_email').css("display", "none");
    }
    else if(!email.match(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i)){
        $('#email').css("border-color", "red");
        $('#email_validation_empty').css("display", "none");
        $('#invalid_email').css("display", "block");
    }
    else{
        $('#email').css("border-color", "black");
        $('#email_validation_empty').css("display", "none");
        $('#invalid_email').css("display", "none");
    }
}

function phone_validation(){
    let phone = $('#phone').val();
    phone = phone.trim();

    if(phone===''){
        $('#phone').css("border-color", "red");
        $('#phone_validation_empty').css("display", "block");
        $('#invalid_phone').css("display", "none");
    }
    else if(!phone.match(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/)){
        $('#phone').css("border-color", "red");
        $('#phone_validation_empty').css("display", "none");
        $('#invalid_phone').css("display", "block");
    }
    else{
        $('#phone').css("border-color", "black");
        $('#phone_validation_empty').css("display", "none");
        $('#invalid_phone').css("display", "none");
    }
}

function summary_validation(){
    let summary = $('#summary').val();
    summary = summary.trim();

    if(summary===''){
        $('#summary').css("border-color", "red");
        $('#summary_validation_empty').css("display", "block");
    }
    else{
        $('#summary').css("border-color", "black");
        $('#summary_validation_empty').css("display", "none");
    }
}
