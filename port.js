//Imported html elements
//jumbron element
var jumbo = document.getElementById("bill-board");

//project, skills and contact elements
var projects = document.getElementById("projects");
var skills = document.getElementById("skills");
var contact = document.getElementById("contact");


//Functionality that takes place when projects, skills and contact are clicked

//When projects element is clicked
projects.addEventListener("click", () => {
  
    //Refers to the data for the project selection
    let one = document.getElementById("one");

    if(one.style.visibility == "hidden") {
        one.style.visibility = "visible";
        jumbo.textContent = "Projects";
        console.log("It's visible and bill-board is changed to projects");
    } else {
        one.style.visibility = "hidden";
        jumbo.textContent = "PORTFOLIO";
    }

})


//When skills element is clicked
skills.addEventListener("click", () => {
    
    //Refers to the skills selection
    let two = document.getElementById("two");

    if(two.style.visibility == "hidden") {
        two.style.visibility = "visible";
        jumbo.textContent = "skills";
        console.log("It's visible and bill-board is changed to skills");
    } else {
        two.style.visibility = "hidden";
        jumbo.textContent = "PORTFOLIO";
    }

})


//When contact element is clicked
contact.addEventListener("click", () => {
    
    //Refers to the skills selection
    let three = document.getElementById("three");
    if(three.style.visibility == "hidden") {
        three.style.visibility = "visible";
        jumbo.textContent = "Contacts";
        console.log("It's visible and bill-board is changed to contacts");
    } else {
        three.style.visibility = "hidden";
        jumbo.textContent = "PORTFOLIO";
    }
})