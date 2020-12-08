import base64
enc_response = base64.b64encode(flow.getVariable("samlRequest.content"));
flow.setVariable("sapapim.base64SAMLAssertion", enc_response)