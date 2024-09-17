document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".btn");
    var rightDiv = document.getElementById("right");
    var sections = {
        btn1: '<h2>Personal Information</h2><ul><li><b>Phone No:</b> 03312078981</li><li><b>Email:</b> sanazubair071@gmail.com</li><li><b>linkedin Pofile:</b> <a style="color:black;"href= "https://www.linkedin.com/in/maheen-zubair-27692a2ba">linkedin.com/in/maheen-zubair</a><li><b>Nationality:</b> Pakistani</li><li><b> Gender:</b> Female</li><li><b>Region:</b> Islam</li> </ul>',
        btn2: "<h2>Education</h2><ul><li><b>Bachelor In Computer Science</b><br>XYZ university,Karachi <br>Graduated:2023</li><br><li> <br><b>Intermediate In Computer Science </b><br>ABC college, karachi <br>Graduated:2022</li><br><li><b> Matriculation</b><br>ABC school,karachi <br>Graduated:2021</li>",
        btn3: "<h3>Skills</h3><ul><li>HTML</li><li>CSS</li><li>TypeScript</li></ul>",
        btn4: "<h3>Work Experience</h3><ul><li>Front-end Developer at ABC Corp</li><li>Intern at DEF Ltd</li></ul>",
    };
    var currentSectionId = null;
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var sectionId = button.id;
            if (currentSectionId === sectionId) {
                rightDiv.innerHTML = "";
                currentSectionId = null;
            }
            else {
                rightDiv.innerHTML = sections[sectionId] || "Content not available";
                currentSectionId = sectionId;
            }
        });
    });
});
