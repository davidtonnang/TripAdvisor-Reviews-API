const submit = document.querySelector(".submit-btn")

const list = document.querySelector(".list")

// Change API to the correct link
submit.addEventListener("click", () => {
  fetch("https://api.content.tripadvisor.com/api/v1/location/1043070/reviews?language=nl&key=87F1E8B704F148F4BC8839809A3CCB28", {
    method: 'GET',
    headers: {'Content-Type':'application/json'}
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      data.forEach((review) => {
        const li = document.createElement("li")
        // Change name to the correct object
        li.textContent += review.title
        list.appendChild(li)
      })
    })
    .catch((error) => console.error(error))
})
