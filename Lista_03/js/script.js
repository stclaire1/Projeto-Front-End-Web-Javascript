window.addEventListener("load", () => {
    document.getElementById("select-students").addEventListener("change", () => {
        var selectedValue = document.getElementById("select-students").value;
        var contentDiv = document.getElementById("content");
        contentDiv.innerHTML = "";

        fetch("https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json")
        .then((response) => response.json())
        .then((students) => {
            switch (selectedValue) {
                case "all-students":
                    showAll(students);
                    break;
                case "male-students":
                    showByGender(students, "M");
                    break;
                case "female-students":
                    showByGender(students, "F");
                    break;
                case "approved-students":
                    showApprovedStudents(students);
                    break;
                case "failed-students":
                    showReprovedStudents(students);
                    break;
                case "all-approved-students":
                    showAllApprovedStudents(students);
                    break;
                case "avg-students":
                    showAvgStudents(students);
                    break;
                default:
                    contentDiv.innerText = "Selecione uma opção válida.";
                    break;
                    
            }
        });
    });

    showAll = (students) => {
        var contentDiv = document.getElementById("content");
        students.forEach((student) => {
          var p = document.createElement("p");
          p.innerText = `${student.nome}: ${student.notaBim1} (bimestre 1) e ${student.notaBim2} (bimestre 2) = ${student.notaBim1 + student.notaBim2};`;
          contentDiv.appendChild(p);
        });
    }

    showByGender = (students, gender) => {
        var contentDiv = document.getElementById("content");
        var filteredStudents = students.filter((student) => student.sexo === gender);
        filteredStudents.forEach((student) => {
          var p = document.createElement("p");
          p.innerText = `${student.nome}: ${student.notaBim1} (bimestre 1) e ${student.notaBim2} (bimestre 2) = ${student.notaBim1 + student.notaBim2};`;
          contentDiv.appendChild(p);
        });
    }

    showApprovedStudents = (students) => {
        var contentDiv = document.getElementById("content");
        var approvedStudentes = students.filter(
          (student) => student.notaBim1 + student.notaBim2 >= 60
        );
        approvedStudentes.forEach((student) => {
          var p = document.createElement("p");
          p.innerText = `${student.nome}: ${student.notaBim1} (bimestre 1) e ${student.notaBim2} (bimestre 2) = ${student.notaBim1 + student.notaBim2};`;
          contentDiv.appendChild(p);
        });
    }

    showReprovedStudents = (students) => {
        var contentDiv = document.getElementById("content");
        var reprovedStudents = students.filter(
          (student) => student.notaBim1 + student.notaBim2 < 60
        );
        reprovedStudents.forEach((student) => {
          var p = document.createElement("p");
          p.innerText = `${student.nome}: ${student.notaBim1} (bimestre 1) e ${student.notaBim2} (bimestre 2) = ${student.notaBim1 + student.notaBim2};`;
          contentDiv.appendChild(p);
        });
    }

    showAllApprovedStudents = (students) => {
        var contentDiv = document.getElementById("content");
        var allApprovedStudents = students.every(
          (student) => student.notaBim1 + student.notaBim2 >= 60
        );
        var p = document.createElement("p");
        p.innerText = `Todos os estudantes aprovados? ${allApprovedStudents ? "Sim" : "Não"}`;
        contentDiv.appendChild(p);
    }

    showAvgStudents = (students) => {
        var contentDiv = document.getElementById("content");
        var finalSum = students.reduce(
          (total, student) => total + student.notaBim1 + student.notaBim2, 0
        );
        var totalStudents = students.length;
        var avg = finalSum / totalStudents;
        var p = document.createElement("p");
        p.innerText = `Nota média = ${avg.toFixed(2)}`;
        contentDiv.appendChild(p);
    }
});