// general-purpose String method to get param value from a URL
String.prototype.getUrlParam = function(paramName){
	//take the string apart
	var hashSplit = this.split('#')
	var urlParts = hashSplit[0].replace('?','&').split('&')

	//look through the parts
	var pair, result = false;
	for(var i=1; i<urlParts.length; i++){
		pair = urlParts[i].split('=');
		if(pair[0] == paramName){
			var result = pair[1] || '';
			break;
		}
	}
	return result;
};