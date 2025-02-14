// Function to call the new project form
function showForm(id) {
    const showForm = document.getElementById(id)
    if (showForm != null) {
        showForm.showModal()
    } else {
        console.warn("There is not HTML ID with this value: ", id, "Check spelling!")
    }
}
// Create a string variable to stole the HTML element
const newProjectButton = document.getElementById("new-project-button")

if (newProjectButton != null) {
    newProjectButton.addEventListener("click", () => {showForm("new-project-form-dialog")})
}   else{
    console.warn("newProjectButton value is null! Check reference name!")
}

const projectForm = document.getElementById("new-project-form")

if (projectForm != null) {
    projectForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const formData = new FormData (projectForm)
        formData.append("Name: ",formData.get("form-name"))
        formData.append("Description: ",formData.get("form-description"))
        formData.append("Role: ",formData.get("form-role"))
        formData.append("Status: ",formData.get("form-status"))
        formData.append("Date: ",formData.get("form-date"))
        logConsoleData(formData)
    })
} else {
    console.warn("No form was found. Check element ID!")
}

function logConsoleData(formObject) {
    const appendedKeys = ["Name", "Description", "Role", "Status", "Date"];

    appendedKeys.forEach(key => {
        if (formObject.has(key)) {
            console.log(`${key}: ${formObject.get(key)}`);
        }
        else {
            console.log("no key found")
        }
    });
}