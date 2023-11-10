const getResult = () => {
    let math = document.getElementById('TOC').value;
    if(math>100){
        alert("Enter correct marks of TOC");
    }
    let physics = document.getElementById('DBMS').value;
    if(physics>100){
        alert("Enter correct marks of DBMS");
    }
    let chemistry = document.getElementById('Cyber_Security').value;
    if(chemistry>100){
        alert("Enter correct marks of Cyber Security");
    }
    let c = document.getElementById('IWT').value;
    if(c>100){
        alert("Enter correct marks of IwT");
    }
    let computer = document.getElementById('Python').value;
    if(computer>100){
        alert("Enter correct marks of Python");
    }

    if(document.getElementsByTagName('input').value==""){
        alert("Please Enter Some Value ");
    }
    
    // if(document.getElementsByTagName('input>100').value){
    //     alert("this is error ");
    // }
    let total = parseFloat(math) + parseFloat(physics) + parseFloat(chemistry) + parseFloat(c) + parseFloat(computer);
    let percentage = (total * 100) / 500;
    if(total>500){
        alert("Invalid syntex");
        window.location.reload();
    }

    if (percentage >= 90) {
        document.getElementById("grade").innerHTML = "A+";
    }
    else if (percentage >= 80) {
        document.getElementById("grade").innerHTML = "A";

    }
    else if (percentage >= 70) {
        document.getElementById("grade").innerHTML = "B+";

    }
    else if (percentage >= 60) {
        document.getElementById("grade").innerHTML = "B";

    }
    else if (percentage >= 50) {
        document.getElementById("grade").innerHTML = "B+";

    }
    else if (percentage >= 40) {
        document.getElementById("grade").innerHTML = "C+";

    }
    else if (percentage >= 30) {
        document.getElementById("grade").innerHTML = "C";

    }
    else if (percentage >= 20) {
        document.getElementById("grade").innerHTML = "D+";

    }
    else {
        document.getElementById("grade").innerHTML = "You Are Failed";

    }


    document.getElementById('percentage').innerHTML = percentage;
    document.getElementById('total').innerHTML = total;
}