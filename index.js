const submit = document.querySelector(".submit-btn")

const list = document.querySelector(".list")

// Change API to the correct link
submit.addEventListener("click", () => {
  fetch("https://api.content.tripadvisor.com/api/v1/location/1043070/reviews?language=en&key=87F1E8B704F148F4BC8839809A3CCB28", {
    method: 'no-cors',
    header: 'application/json'
  })
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
