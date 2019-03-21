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

// const agents = businesses.map(businesses => {
//     return {
//         fullName: `${businesses.purchasingAgent.nameFirst} ${businesses.purchasingAgent.nameLast}`,
//         company: businesses.companyName,
//         phoneNumber: businesses.phoneWork
//     }
// })

// agents.forEach(agent => {
//     outEl.innerHTML += `<h2>Full Name: ${agent.fullName}</h2>
//     <p>Company: ${agent.company}</p>
//     <p>Phone: ${agent.phoneNumber}`;
//     outEl.innerHTML += "<hr/>";
// });
// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundBusiness = businesses.find(
//                 business =>
//                     business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value)
//             );

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundBusiness.purchasingAgent.nameFirst}
//                 </h2>
//                 <section>
//                 ${foundBusiness.addressFullStreet}

//                 </section>
//                 <section>
//                 ${foundBusiness.addressCity},
//                 ${foundBusiness.addressStateCode}
//                 ${foundBusiness.addressZipCode}
//                 </section>
//             `;
//         }
//     });

    // document
    // .querySelector("#companySearch")
    // .addEventListener("keypress", keyPressEvent => {
    //     if (keyPressEvent.charCode === 13) {
    //         /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
    //         const foundBusiness = businesses.find(
    //             business =>
    //                 business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) ||
    //                  business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
    //         );

    //         outEl.innerHTML = `
    //             <h2>
    //             ${foundBusiness.purchasingAgent.nameFirst + " " + foundBusiness.purchasingAgent.nameLast}
    //             </h2>
    //             <section>
    //             ${foundBusiness.addressFullStreet}

    //             </section>
    //             <section>
    //             ${foundBusiness.addressCity},
    //             ${foundBusiness.addressStateCode}
    //             ${foundBusiness.addressZipCode}
    //             </section>
    //         `;
    //     }
    // });

    // businesses.forEach(business => {
    //     /* CALCULATE ORDER SUMMARY */
    //     let totalOrders = business.orders.reduce(
    //         (currentTotal, nextValue) => currentTotal += nextValue,
    //         0
    //     )
    
    
    //     outEl.innerHTML += `
    //         <h2>
    //             ${business.companyName}
    //             ($${totalOrders})
    //         </h2>
    //         <section>
    //             ${business.addressFullStreet}
    //         </section>
    //         <section>
    //             ${business.addressCity},
    //             ${business.addressStateCode}
    //             ${business.addressZipCode}
    //         </section>
    //     `;
    //     outEl.innerHTML += "<hr/>";
    // });
    
    const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce((currentTotal, nextValue) => 
currentTotal += nextValue)

console.log(totalRainfall)

const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce((sentence, word) => 
sentence + " " + word)

console.log(sentence)