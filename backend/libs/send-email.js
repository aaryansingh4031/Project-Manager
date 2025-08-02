import dotenv from "dotenv";
import SibApiV3Sdk from "sib-api-v3-sdk";

dotenv.config();

const defaultClient = SibApiV3Sdk.ApiClient.instance;

const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

/**
 * Send an email with optional template usage
 * @param {string} toEmail - Recipient email address
 * @param {string} subject - Email subject
 * @param {string} htmlContent - Raw HTML content (optional if using templateId)
 * @param {number} [templateId] - Optional Brevo template ID to use
 * @param {object} [params] - Optional parameters to inject in template variables
 * @returns {Promise<boolean>} - true if sent successfully, false if error
 */
export async function sendEmail(toEmail, subject, htmlContent, templateId, params) {
  // Build email object depending on whether templateId is provided
  let sendSmtpEmail;
  if (templateId) {
    sendSmtpEmail = {
      to: [{ email: toEmail }],
      templateId: templateId,
      params: params || {},
      headers: {
        "X-Mailin-custom":
          "custom_header_1:custom_value_1|custom_header_2:custom_value_2",
      },
    };
  } else {
    sendSmtpEmail = {
      sender: { email: process.env.FROM_EMAIL, name: process.env.FROM_NAME || "TaskHub" },
      to: [{ email: toEmail }],
      subject: subject,
      htmlContent: htmlContent,
    };
  }

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("API called successfully. Returned data:", data);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}
