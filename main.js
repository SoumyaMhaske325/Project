name_of_students_array=[];

function submit()
{
    var student1=document.getElementById("student_1").value;
    var student2=document.getElementById("student_2").value;
    var student3=document.getElementById("student_3").value;
    var student4=document.getElementById("student_4").value;

    name_of_students_array.push(student1);
    name_of_students_array.push(student2);
    name_of_students_array.push(student3);
    name_of_students_array.push(student4);
    
    console.log(name_of_students_array);
    document.getElementById("display_name").innerHTML=name_of_students_array;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}

function sort()
{
name_of_students_array.sort();
console.log(name_of_students_array);
document.getElementById("display_name").innerHTML=name_of_students_array;
}