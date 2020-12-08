#!/bin/bash

# Get csrf token and session
HEADERS=$(curl --location --head "$API_PORTAL_TEST_HOST/apiportal/api/1.0/Transport.svc/APIProxies" \
--header "Authorization: Basic $LOGIN_TOKEN" \
--header "x-csrf-token: fetch")

# Base64 encode the file and upload it 
base64 $1 | \
curl --location --request POST "$API_PORTAL_TEST_HOST/apiportal/api/1.0/Transport.svc/APIProxies" \
--header "Authorization: Basic $LOGIN_TOKEN" \
--header "`grep X-CSRF-Token <<< $HEADERS`" \
--header "`grep JSESSIONID <<< $HEADERS | sed -e 's/Set-Cookie/Cookie/g' -e's/;.*//g'`" \
--header "`grep JTENANTSESSIONID <<< $HEADERS | sed -e 's/Set-Cookie/Cookie/g' -e's/;.*//g'`" \
--header "`grep BIGipServer <<< $HEADERS | sed -e 's/Set-Cookie/Cookie/g' -e's/;.*//g'`" \
--header "Content-Type: application/octet-stream" \
--data-binary "@-"



