const render = (tpl) => {
  const node = document.createRange().createContextualFragment(tpl);
  return node
};
document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      name: "Account Executive",
      team: "Sales",
      location: "Remote Americas (East)",
    },
    {
      name: "Frontend Engineer",
      team: "Engineering",
      location: "Remote",
    },
    {
      name: "Search Marketing Engineer",
      team: "Marketing",
      location: "Remote",
    },
    {
      name: "Staff Product Manager(Mobile)",
      team: "Product & Design",
      location: "Remote EMEA",
    },
    {
      name: "Senior GRC Analyst",
      team: "Security & IT",
      location: "Remote Americas (East)",
    },
  ];
  const positions = document.querySelector(".positions");

  if (positions) {
    data.forEach(el => {
      const location = document.createElement("div")
      const arrow = document.createElement("div")
      const name = document.createElement("div")
      const team = document.createElement("div")
      const position = document.createElement("div")

      name.appendChild(render(`<span>${el.name}</span>`))
      team.appendChild(render(`<span>${el.team}</span>`))

      name.classList.add("post-name")
      location.classList.add("location")
      arrow.classList.add("arrow")
      team.classList.add("team")
      position.classList.add("position")


      const locationIconString = `<svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`
      const arrowIconString = `<svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>`

      const locationIcon = render(locationIconString)
      const arrowIcon = render(arrowIconString)

      location.appendChild(locationIcon)
      location.appendChild(render(`<span>${el.location}</span>`))
      arrow.appendChild(arrowIcon)

      position.appendChild(name)
      position.appendChild(team)
      position.appendChild(location)
      position.appendChild(arrow)

      positions.appendChild(position)

    })

  }
});
