// Form Submission
document.getElementById("helpForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let issue = document.getElementById("issue").value;

    if(name === "" || age === "" || issue === "") {
        document.getElementById("formMessage").innerText = "Please fill all fields!";
        document.getElementById("formMessage").style.color = "red";
    } else {
        document.getElementById("formMessage").innerText = "Your request has been submitted. We will contact you soon.";
        document.getElementById("formMessage").style.color = "green";
        document.getElementById("helpForm").reset();
    }
});

// Live Chat Demo
function sendMessage() {
    let input = document.getElementById("chatInput");
    let message = input.value;
    let chatBox = document.getElementById("chatBox");

    if(message.trim() !== "") {
        chatBox.innerHTML += "<p><strong>You:</strong> " + message + "</p>";
        input.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
