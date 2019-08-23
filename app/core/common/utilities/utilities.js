const config= require('../../../configuration/configuration.js');


function buildAPIRequest(apiPath)
{
    var options = {
        method: 'GET',
        uri: config.configuration.app.API_URL+'/' + config.configuration.app.API_VERSION + apiPath + '?' + 'api_key=' + config.configuration.app.ACCESS_KEY + '&' + 
             'language='+config.configuration.app.LANGUAGE
         
    };
    return options;
}

function buildAPIRequestWithPagination(apiPath, _pageNumber, _searchQuery)
{
    var options = {
        method: 'GET',
        uri: config.configuration.app.API_URL+'/' + config.configuration.app.API_VERSION + apiPath + '?' + 'api_key=' + config.configuration.app.ACCESS_KEY + '&' + 
             'language='+config.configuration.app.LANGUAGE+'&'+config.configuration.app.PAGE_NUMBER+'='+_pageNumber +'&'+ 'query=' + _searchQuery
    };
    return options;
}

module.exports.buildAPIRequest= buildAPIRequest;
module.exports.buildAPIRequestWithPagination= buildAPIRequestWithPagination;
