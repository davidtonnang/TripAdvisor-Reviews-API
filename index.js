// const submit = document.querySelector(".submit-btn")
// const list = document.querySelector(".list")

// // Change API to the correct link
// submit.addEventListener("click", () => {
//   // const input = document.querySelector(".input-text").value
//   const input = document.querySelector('input[name="id"]:checked').value
//   // const lang = document.querySelector(".lang-text").value
//   const lang = document.querySelector('input[name="language"]:checked').value
//   console.log(input)
//   console.log(lang)
//   fetch(
//     `https://api.content.tripadvisor.com/api/v1/location/${input}/reviews?language=${lang}&key=87F1E8B704F148F4BC8839809A3CCB28`,
//     {
//       method: "GET",
//       header: "application/json",
//     }
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data)
//       data.data.forEach((review) => {
//         const li = document.createElement("li")
//         li.textContent = `${review.text} \n Rating: ${review.rating} \n Travel Date: ${review.travel_date}`
//         list.appendChild(li)
//       })
//     })
//     .catch((error) => console.error(error))
// })

const submit = document.querySelector(".submit-btn")
const list = document.querySelector(".list")
const error = document.querySelector(".error")

submit.addEventListener("click", () => {
  let input
  if (document.querySelector('input[name="id"]:checked')) {
    input = document.querySelector('input[name="id"]:checked').value
  } else if (document.querySelector(".input-text").value !== "") {
    input = document.querySelector(".input-text").value
  } else {
    error.innerHTML = "Please select an ID or enter one"
    return
  }

  let lang
  if (document.querySelector('input[name="language"]:checked')) {
    lang = document.querySelector('input[name="language"]:checked').value
  } else if (document.querySelector(".lang-text").value !== "") {
    lang = document.querySelector(".lang-text").value
  } else {
    error.innerHTML = "Please select a language or enter one"
    return
  }

  // Clear error message when both values are selected
  error.innerHTML = ""

  console.log(input)
  console.log(lang)
  fetch(
    `https://api.content.tripadvisor.com/api/v1/location/${input}/reviews?language=${lang}&key=87F1E8B704F148F4BC8839809A3CCB28`,
    {
      method: "GET",
      header: "application/json",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      data.data.forEach((review) => {
        const li = document.createElement("li")
        li.innerHTML = `${review.text} <br> Rating: ${review.rating} <br> Travel Date: ${review.travel_date}`;
        list.appendChild(li)
      })
    })
    .catch((error) => console.error(error))
})
