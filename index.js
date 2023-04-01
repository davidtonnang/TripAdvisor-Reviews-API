const submit = document.querySelector(".submit-btn")
const list = document.querySelector(".list")


// Change API to the correct link
submit.addEventListener("click", () => {
  const input = document.querySelector('.input-text').value
  const lang = document.querySelector('.lang-text').value
  console.log(input)
  console.log(lang)
  fetch(`https://api.content.tripadvisor.com/api/v1/location/${input}/reviews?language=${lang}&key=87F1E8B704F148F4BC8839809A3CCB28`, {
    method: 'GET',
    header: 'application/json'
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    data.data.forEach((review) => {
      const li = document.createElement("li");
      li.textContent = review.text + "\nRating: " + review.rating + "\nTravel Date: " + review.travel_date;
      
      list.appendChild(li);
    });
    })
    .catch((error) => console.error(error))
});
