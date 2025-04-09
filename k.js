function addStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;

    if (name === "" || age === "" || course === "") {
        alert("Please fill in all details!");
        return;
    }

    const table = document.getElementById("studentTable");
    const row = table.insertRow(-1);

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = age;
    row.insertCell(2).innerHTML = course;
    row.insertCell(3).innerHTML = `<button onclick="deleteStudent(this)">Remove</button>`;
    
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}

function deleteStudent(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}