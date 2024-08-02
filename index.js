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
    })
} else {
    console.warn("No form was found. Check element ID!")
}