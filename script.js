document.getElementById("expense-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = document.getElementById("expense-form");
  const formData = new FormData(form);

  fetch("/submit", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById("message").innerText = data;
    form.reset();
  })
  .catch(error => {
    document.getElementById("message").innerText = "Error saving data.";
    console.error(error);
  });
});
