console.log(businesses);

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

// let zipCodeProperty = "addressZipCode"

// businesses.forEach(business => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//     ${business.addressCity}, ${business["addressStateCode"]}, ${business[addressZipCode]}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });

// Array to contain all the New York businesses
// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false

//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }

//     return inNewYork
// })

// console.log(newYorkBusinesses)

// newYorkBusinesses.forEach(business => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//     ${business.addressCity}, ${business["addressStateCode"]}, ${business['addressZipCode']}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });

// const manufacturingBusinesses = businesses.filter(business => {
//     let manufacturer = false

//     if (business.companyIndustry === "Manufacturing") {
//         manufacturer = true
//     }

//     return manufacturer
// })

// manufacturingBusinesses.forEach(business => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//     ${business.addressCity}, ${business["addressStateCode"]}, ${business['addressZipCode']}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });

// const agents = businesses.map(business => {
//     return business
// })

// console.table(agents)

// agents.forEach(agent => {
//   outEl.innerHTML += `<h2>Full Name: ${agent.purchasingAgent.nameFirst} ${agent.purchasingAgent.nameLast}</h2>
//   <p>Company: ${agent.companyName}</p>
//   <p>Phone: ${agent.phoneWork}`;
//   outEl.innerHTML += "<hr/>";
// });

const agents = businesses.map(businesses => {
    return {
        fullName: `${businesses.purchasingAgent.nameFirst} ${businesses.purchasingAgent.nameLast}`,
        company: businesses.companyName,
        phoneNumber: businesses.phoneWork
    }
})

agents.forEach(agent => {
    outEl.innerHTML += `<h2>Full Name: ${agent.fullName}</h2>
    <p>Company: ${agent.company}</p>
    <p>Phone: ${agent.phoneNumber}`;
    outEl.innerHTML += "<hr/>";
  });