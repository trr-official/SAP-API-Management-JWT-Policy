# Introduction 

This repository contains a policy to call NW backend services from the internet using JWT as authorization tokens, and handling CSRF-TOKENS.

This policy takes alot of inspiration from  https://blogs.sap.com/2019/09/02/part-1-modeling-the-jwt-token-verification-flows-in-sap-cloud-platform-api-management/ and  https://blogs.sap.com/2018/01/19/part-2-single-sign-on-from-fiori-application-to-sap-gateway-via-sap-cloud-platform-api-management/ but have been extended with CSRF Token handling and most settings have been broken out into key vault settings. Please read and understand these two posts before setting up this policy.

# Prerequisits
This policy assumes that Value Maps with the following keys have been set
* JWTSettings   
    * jwksDomain - The domain of the server hosting JWKS
    * jwksPath - Path to the JWK store
* SAMLSettings -
    * keyname - key name of the signing certificate
    * storename store name of the key store
    * issuer - issuer in the SAML Response
    * audience - audience in the SAML response

## Installation

1. Change folder to the SAML2-JWT-CSRF
2. Zip complete folder, including the folder structure.
3. Update the file samlHelper.js with your settings
4. Upload policy into API Management
5. Apply template to your policy.