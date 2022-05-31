console.log(customers)

const profilegrid = document.querySelector("#profilegrid");

for (let customer of customers) {
    let customerElement = document.createElement('div')
    customerElement.classList.add('customer')

    let imageElement = document.createElement('img')
    imageElement.src = `${customer.picture.medium}`
    imageElement.alt = 'Picture of customer'
    imageElement.classList.add("profilepic")
    customerElement.appendChild(imageElement)

    let nameElement = document.createElement('h2')
    nameElement.classList.add("name")
    nameElement.innerText = `${customer.name.first} ${customer.name.last}`
    customerElement.appendChild(nameElement)

    let emailElement = document.createElement('h3')
    emailElement.classList.add("email")
    emailElement.innerText = `${customer.email}`
    customerElement.appendChild(emailElement)
    
    let addyElement = document.createElement("p")
    addyElement.classList.add("address")
    addyElement.innerText = `${customer.location.street.number} ${customer.location.street.name} ${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`
    customerElement.appendChild(addyElement)

    let birthElement = document.createElement("p")
    birthElement.classList.add("DOB")
    birthElement.innerText = `DOB: ${customer.dob.date}`
    customerElement.appendChild(birthElement)

    let sinceElement = document.createElement("p")
    sinceElement.classList.add("customersince")
    sinceElement.innerText = `Customer since: ${customer.registered.date}`
    customerElement.appendChild(sinceElement)
    
    profilegrid.appendChild(customerElement)
}

{/* <div class="customer">
<img src="https://randomuser.me/api/portraits/med/women/62.jpg" class="profilepic" alt="Picture of customer">
<h2 class="name">Sophia Burns</h2>
<h2 class="email">sophia.burns@example.com</h2>
<p class="address">4339 Green Rd Great Falls, AL 66032</p>
<p class="DOB">DOB: jul 28, 1990</p>
<p class="customersince">Customer since: Mar 9, 2012</p>
</div> */}