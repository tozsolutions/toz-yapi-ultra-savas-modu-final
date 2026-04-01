# Security Policy

## Supported Versions

We release patches for security vulnerabilities regularly. Here are the versions currently supported:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of our project seriously. If you believe you have found a security vulnerability, please report it to us as described below.

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to **merhaba@tozyapi.com.tr** with the subject line "Security Vulnerability".

### What to Include

Please include the following information in your report:

* A description of the vulnerability
* Steps to reproduce the issue
* Affected versions
* Any potential impact
* If possible, suggested fixes

### Response Timeline

* You will receive an acknowledgment within **48 hours**
* We will send a more detailed response within **5 business days**
* We aim to release a fix within **30 days** of confirmation

### Security Best Practices We Follow

1. **Regular Dependency Updates**: We keep all dependencies up to date
2. **Security Headers**: We implement comprehensive security headers
3. **Input Validation**: All user inputs are validated and sanitized
4. **HTTPS Only**: All communications are encrypted
5. **Content Security Policy**: We use CSP to prevent XSS attacks
6. **Regular Audits**: We conduct regular security audits

## Security Measures

### Implemented Security Features

- **XSS Protection**: X-XSS-Protection header
- **Clickjacking Protection**: X-Frame-Options header
- **MIME Sniffing Prevention**: X-Content-Type-Options header
- **Referrer Policy**: Strict referrer policy
- **Permissions Policy**: Restricted browser features
- **Secure Cookies**: All cookies use Secure and HttpOnly flags

### Performance and Security

- All static assets are served with immutable cache headers
- HTML pages are never cached to prevent sensitive data exposure
- API calls use HTTPS only
- Sensitive data is encrypted at rest and in transit

## Recognition

We believe in recognizing security researchers who help improve our security. If you report a valid security vulnerability, we will:

* Acknowledge your contribution
* List you in our security advisories (unless you prefer to remain anonymous)
* Keep you informed about the fix progress

Thank you for helping keep Toz Yapı and our users safe!
