# Introduction

This policy template does everything needed to call SAP from Internet.
 * It validates a JWT Token passed in the authorization header.
 * It fetches  a CSRF-token if needed (post/put/delete)
 * It creates a SAML authorization token and attaches to the header

# Usage

1) Import policy template and apply to your API.
2) Update SAMLHelper.js and change URL to one pointing to your API.
3) JWKS and JWT issuer will be read from a environment keystore.

# Result

All incoming requests are checked for a valid JWT. If the JWT is not valid, an exception is raised. The preferred Username is set in a variable called *preferredUsername*.
If CSRF is needed one is fetched from the backend
A SAML Authorization header is added to the outgoing call