const { google } = require("googleapis")
const path = require("path")

const keyFile = path.join(__dirname, "credentials.json")
const scopes = [
  "https://www.googleapis.com/auth/contacts"
]

const run = async () => {
  const { people } = google.people({
    version: "v1",
    auth: await google.auth.getClient({
      keyFile,
      scopes
    })
  })

  const response = await people.connections.list({
    resourceName: "people/me",
    personFields: "names"
  })

  // const response = await people.createContact({
  //   parent: "me",
  //   requestBody: {
  //     names: [
  //       {
  //         givenName: "Mindy",
  //         familyName: "Lindquist"
  //       }
  //     ]
  //   }
  // })

  console.log(response)
}

run()
