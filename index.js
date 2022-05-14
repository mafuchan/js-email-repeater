function printEmail() {
    const email = document.querySelector("#email-input").value
    document.querySelector("#email-output").textContent = email
}
const button = document.querySelector("#print")
button.addEventListener("click", event => {
    printEmail()
})
