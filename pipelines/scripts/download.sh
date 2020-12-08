#!/bin/bash

curl --location --request GET "$API_PORTAL_HOST/apiportal/api/1.0/Transport.svc/APIProxies?name=$1" \
--header "Authorization: Basic $LOGIN_TOKEN"