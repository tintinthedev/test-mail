const mailcatcherBaseUrl = "http://localhost:1080"

async function getEmails() {
  try {
    const response = await fetch(`${mailcatcherBaseUrl}/messages`)
    const responseBody = await response.json()

    return responseBody
  } catch(error) {
    throw error
  }
}

async function clearEmails() {
  try {
    await fetch(`${mailcatcherBaseUrl}/messages`, {
      method: "DELETE"
    })
  } catch(error) {
    throw error
  }
}

async function getEmail(emailId) {
  try {
    const response = await fetch(`${mailcatcherBaseUrl}/messages/${emailId}.json`)
    const responseBody = await response.json()

    return responseBody
  } catch(error) {
    throw error
  }
}

module.exports = {
  clearEmails,
  getEmails,
  getEmail
}