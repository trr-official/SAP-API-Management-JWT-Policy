
//pad with single zero if the value is less than 10 else return the value as is
function padWithZero(value){
    return value >= 10 ? value.toString() : "0" + value.toString();
}

//function to return the date in SMAL format
function getFormattedDate(date){
	var yr = date.getUTCFullYear();
	var day = padWithZero(date.getUTCDate());
	var mnth = padWithZero(date.getUTCMonth() + 1);
	var hr = padWithZero(date.getUTCHours());
	var mn = padWithZero(date.getUTCMinutes());
	var sec = padWithZero(date.getUTCSeconds());
	var msec = date.getUTCMilliseconds();
    return  yr + '-' + mnth + '-' + day + 'T' + hr + ':' + mn + ':' + sec + '.' + msec + 'Z';
}

//Copy the date to generate a new date
function copyDate(date){
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
}

//function to substract n days from the passed date
function substractDays(date, days){
    var newDate = copyDate(date);
    newDate.setTime(newDate.getTime() - days * 24 * 60 * 60 * 1000);
    return newDate;
}

//function to substract n days from the passed date
function addDays(date, days){
    var newDate = copyDate(date);
    newDate.setTime(newDate.getTime() + days * 24 * 60 * 60 * 1000);
    return newDate;
}

function handleContextType(){
   context.setVariable("sapapim.contentType","request.header.Content-Type");
   context.setVariable("request.header.Content-Type","application/xml");
}

handleContextType();

var date = new Date();

//set the server timestamp to be mapped to saml issuer timestamp
context.setVariable("sapapim.timestamp", getFormattedDate(date));

//set the not before timestamp to 1 day before the current timestamp
context.setVariable("sapapim.notBefore", getFormattedDate(substractDays(date,1)));

//set the not after timestamp to 1 day after the current timestamp
context.setVariable("sapapim.notOnorAfter", getFormattedDate(addDays(date,1)));


context.setVariable("sapapim.path", "/sap/opu/odata/sap/<service_name>")

//set the SAML Receipent - this would have to be set to the Target end point. In case of SAP Cloud Connector based endpoints, the virtual host names needs to be provided
context.setVariable("sapapim.recipient", "https://<provider-host>/sap/opu/odata/sap/<service_name> + (context.getVariable("proxy.pathsuffix").length > 0 ? context.getVariable("proxy.pathsuffix") : "/" ));

//set the SAML Subject field - this can be read from the passed user SAML assertion for Principal propagation to the SAP Backend
context.setVariable("sapapim.username",context.getVariable("preferredUsername"));

//set the SAML store name to the Certificate Key store name for the SAML assertion signing
context.setVariable("sapapim.storename","Saml");

//set the SAML key name to the Certificate store name for the SAML assertion signing
context.setVariable("sapapim.keyname","Keys");
