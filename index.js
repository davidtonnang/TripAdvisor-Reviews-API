const submit = document.querySelector(".submit-btn")

const list = document.querySelector(".list")

// Change API to the correct link
submit.addEventListener("click", () => {
  fetch("https://avancera.app/cities/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      data.forEach((city) => {
        const li = document.createElement("li")
        // Change name to the correct object
        li.textContent += city.name
        list.appendChild(li)
      })
    })
    .catch((error) => console.error(error))
})
