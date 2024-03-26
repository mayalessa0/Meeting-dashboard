

function redirect_page(des_file) {
  window.location.href = des_file;

}

// function for open login form
function openUpdateForm( taskID) {
    document.getElementById("updateForm").style.display = "block";
}

// function for close login form
function closeUpdateForm() {
    document.getElementById("updateForm").style.display = "none";
}