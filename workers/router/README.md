# Email Router

The worker that routes emails to a database on the server.

## How to Test Locally

The following curl command successfully sends an email through the local development server:

```bash
curl -X POST "http://localhost:8787/cdn-cgi/handler/email?from=sender@example.com&to=recipient@example.com" \
-H "Content-Type: message/rfc822" \
--data 'From: "John" <sender@example.com>
Reply-To: sender@example.com
To: recipient@example.com
Subject: Testing Email Workers Local Dev
Message-ID: <20240512000000.1234@example.com>
MIME-Version: 1.0
Content-Type: text/html; charset="UTF-8"
Date: Sun, 12 May 2025 12:00:00 +0000

<html><body><p>Hi there, this is a test email</p></body></html>'
```

## Key Requirements

For a successful email request:

1. Use `Content-Type: message/rfc822` in the request header
2. Include all required email headers:
   - From
   - To
   - Subject
   - Message-ID (properly formatted)
   - MIME-Version
   - Content-Type
   - Date
3. Ensure proper line breaks between headers and the email body
4. Format the HTML content properly with opening and closing tags

## Troubleshooting

If you receive an "Email could not be parsed: invalid or no message id provided" error, ensure that:

- The Message-ID header is properly formatted
- There are appropriate line breaks in your request
- The email format follows RFC 5322 standards
