//Removes the xml tag from the generated saml assertion
var assertion = context.getVariable("sapapim.assertion").replace("<?xml version=\"1.0\" encoding=\"UTF-8\"?>","");
context.setVariable("sapapim.assertion", assertion);