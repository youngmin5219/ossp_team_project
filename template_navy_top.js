function load_page() {
    loadData();
}



function loadData() {
    let data = localStorage.getItem("input_data");
    if (!data) return;

    data = JSON.parse(data);
    $("#name").text(data.name);
    $("#job").text(data.job);
    $("#address").text(data.address);
    $("#email").text(data.email);
    $("#phone").text(data.phone);
    $("#summary").text(data.summary);
    $("#expertise1").text(data.expertise1);
    $("#expertise2").text(data.expertise2);
    $("#expertise3").text(data.expertise3);
    $("#expertise4").text(data.expertise4);
    $("#expertise5").text(data.expertise5);
    $("#education_year1").text(data.education_year1);
    $("#education_year2").text(data.education_year2);
    $("#education_name1").text(data.education_name1);
    $("#education_name2").text(data.education_name2);
    $("#education_grade1").text(data.education_grade1);
    $("#education_grade2").text(data.education_grade2);
    $("#year1").text(data.year1);
    $("#year2").text(data.year2);
    $("#year3").text(data.year3);
    $("#experience_name1").text(data.experience_name1);
    $("#experience_name2").text(data.experience_name2);
    $("#experience_name3").text(data.experience_name3);
    $("#job_position1").text(data.job_position1);
    $("#job_position2").text(data.job_position2);
    $("#job_position3").text(data.job_position3);
    $("#experience_summary1").text(data.experience_summary1);
    $("#experience_summary2").text(data.experience_summary2);
    $("#experience_summary3").text(data.experience_summary3);
    
    
}