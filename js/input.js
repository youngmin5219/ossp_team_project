function enter_btn_click() {
    validation();
}

function validation() {
    let valid = name_validation() + job_validation() + address_validation() + email_validation() + phone_validation() + summary_validation();
    if (valid === 6) {
        let obj = new Object();
        obj.name = $('#name').val();
        obj.job = $('#job').val();
        obj.address = $('#address').val();
        obj.email = $('#email').val();
        obj.phone = $('#phone').val();
        obj.summary = $('#summary').val();
        obj.expertise1 = $('#expertise1').val();
        obj.expertise2 = $('#expertise2').val();
        obj.expertise3 = $('#expertise3').val();
        obj.expertise4 = $('#expertise4').val();
        obj.expertise5 = $('#expertise5').val();
        obj.education_year1 = $('#education_year1').val();
        obj.education_year2 = $('#education_year2').val();
        obj.education_name1 = $('#education_name1').val();
        obj.education_name2 = $('#education_name2').val();
        obj.education_grade1 = $('#education_grade1').val();
        obj.education_grade2 = $('#education_grade2').val();
        obj.year1 = $('#year1').val();
        obj.year2 = $('#year2').val();
        obj.year3 = $('#year3').val();
        obj.experience_name1 = $('#experience_name1').val();
        obj.experience_name2 = $('#experience_name2').val();
        obj.experience_name3 = $('#experience_name3').val();
        obj.job_position1 = $('#job_position1').val();
        obj.job_position2 = $('#job_position2').val();
        obj.job_position3 = $('#job_position3').val();
        obj.experience_summary1 = $('#experience_summary1').val();
        obj.experience_summary2 = $('#experience_summary2').val();
        obj.experience_summary3 = $('#experience_summary3').val();

        localStorage.setItem("input_data", JSON.stringify(obj));

        let template = location.href.split('?')[1];
        console.log(template)
        if (template === '1') {
            location.href="template_navy_top.html";
        }
        else if (template === '2') {
            location.href="template_blue_2column.html";
        }
        else if (template === '3') {
            location.href="template_lightgray_block.html";
        }
    }
    else {
        window.scrollTo(0, 400);
    }
}

function name_validation() {
    let name = $('#name').val();
    name = name.trim();

    if (name === '') {
        $('#name').css("border-color", "red");
        $('#name_validation_empty').css("display", "block");
        $('#name_validation_number').css("display", "none");
        return 0;
    }
    else if (name.match(/[0-9]/)) {
        $('#name').css("border-color", "red");
        $('#name_validation_empty').css("display", "none");
        $('#name_validation_number').css("display", "block");
        return 0;
    }
    else {
        $('#name').css("border-color", "black");
        $('#name_validation_empty').css("display", "none");
        $('#name_validation_number').css("display", "none");
        return 1;
    }

}

function job_validation() {
    let job = $('#job').val();
    job = job.trim();

    if (job === '') {
        $('#job').css("border-color", "red");
        $('#job_validation_empty').css("display", "block");
        $('#job_validation_number').css("display", "none");
        return 0;
    }
    else if (job.match(/[0-9]/)) {
        $('#job').css("border-color", "red");
        $('#job_validation_empty').css("display", "none");
        $('#job_validation_number').css("display", "block");
        return 0;
    }
    else {
        $('#job').css("border-color", "black");
        $('#job_validation_empty').css("display", "none");
        $('#job_validation_number').css("display", "none");
        return 1;
    }
}

function address_validation() {
    let address = $('#address').val();
    address = address.trim();

    if (address === '') {
        $('#address').css("border-color", "red");
        $('#address_validation_empty').css("display", "block");
        return 0;
    }
    else {
        $('#address').css("border-color", "black");
        $('#address_validation_empty').css("display", "none");
        return 1;
    }
}

function email_validation() {
    let email = $('#email').val();
    email = email.trim();

    if (email === '') {
        $('#email').css("border-color", "red");
        $('#email_validation_empty').css("display", "block");
        $('#invalid_email').css("display", "none");
        return 0;
    }
    else if (!email.match(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i)) {
        $('#email').css("border-color", "red");
        $('#email_validation_empty').css("display", "none");
        $('#invalid_email').css("display", "block");
        return 0;
    }
    else {
        $('#email').css("border-color", "black");
        $('#email_validation_empty').css("display", "none");
        $('#invalid_email').css("display", "none");
        return 1;
    }
}

function phone_validation() {
    let phone = $('#phone').val();
    phone = phone.trim();

    if (phone === '') {
        $('#phone').css("border-color", "red");
        $('#phone_validation_empty').css("display", "block");
        $('#invalid_phone').css("display", "none");
        return 0;
    }
    else if (!phone.match(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/)) {
        $('#phone').css("border-color", "red");
        $('#phone_validation_empty').css("display", "none");
        $('#invalid_phone').css("display", "block");
        return 0;
    }
    else {
        $('#phone').css("border-color", "black");
        $('#phone_validation_empty').css("display", "none");
        $('#invalid_phone').css("display", "none");
        return 1;
    }
}

function summary_validation() {
    let summary = $('#summary').val();
    summary = summary.trim();

    if (summary === '') {
        $('#summary').css("border-color", "red");
        $('#summary_validation_empty').css("display", "block");
        return 0;
    }
    else {
        $('#summary').css("border-color", "black");
        $('#summary_validation_empty').css("display", "none");
        return 1;
    }
}
