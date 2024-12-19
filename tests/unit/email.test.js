const email = require("../../models/email");
const orchestrator = require("../orchestrator");

beforeAll(async () => {
  await orchestrator.clearEmails() 
})

describe("Send e-mail", () => {
  const testEmailData = {
    sender: '"Lure" <lure@gmail.com>',
    senderEmail: "<lure@gmail.com>",
    recipients: "test@gmail.com",
    subject: "Test subject",
  }

  test("should be sent correctly", async () => {
    await email.sendEmail(testEmailData.sender, testEmailData.recipients, testEmailData.subject, "Text...", "Test...")

    const emailsList = await orchestrator.getEmails()

    expect(emailsList.length).toBe(1)
  })

  test("should have correct fields", async () => {
    const emailData = await orchestrator.getEmail(1)

    expect(emailData.sender).toBe(testEmailData.senderEmail)

    const formattedRecipient = `<${testEmailData.recipients}>`

    expect(emailData.recipients[0]).toBe(formattedRecipient)

    expect(emailData.subject).toBe(testEmailData.subject)
  })

  test("should throw error on send fail", async () => {
    expect(email.sendEmail()).rejects.toThrow("Invalid fields")
  })
})