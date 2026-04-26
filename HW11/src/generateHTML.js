function generateHTML(team) {

  const cards = team.map(member => {
    return `
    <div class="card">
      <h2>${member.name}</h2>
      <h3>${member.getRole()}</h3>
      <p>ID: ${member.id}</p>
      <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
      ${
        member.getRole() === "Engineer"
          ? `<p>GitHub: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a></p>`
          : ""
      }
      ${
        member.getRole() === "Intern"
          ? `<p>School: ${member.school}</p>`
          : ""
      }
      ${
        member.getRole() === "Manager"
          ? `<p>Office: ${member.officeNumber}</p>`
          : ""
      }
    </div>
    `;
  }).join("");

  return `
  <html>
  <head>
    <title>Team Profile</title>
    <style>
      body { font-family: Arial; }
      .card { border: 1px solid #ccc; padding: 10px; margin: 10px; }
    </style>
  </head>
  <body>
    <h1>My Team</h1>
    ${cards}
  </body>
  </html>
  `;
}

module.exports = generateHTML;