//
// Ricardo Ruiz
// ricardo@kenetic-labs.com
// 213-842-5036 DIRECT

// Frameworks
let geodist = require('geodist');
let fs = require('fs');

// Handler
module.exports.handler = async event => {

    let request = await processRequest(event);
    let response = await buildResponse(request);
    return response;
};

async function processRequest(request) {

    // Note:
    // I am treating POST request as invalid and only allowing querying via "queryStringParameters" on a GET
    var response;
    switch (request.httpMethod) {
        case 'GET':
            response = await handleQuery(request);
            break;
        default:
            response = new Error(); response.message = 'Error Processing Request';
            break;
    }
    return response;
}

async function handleQuery(queryRequest) {

    // - implement zipcode api handler
    // - search by full or partial zipcode
    // - search by full or partial city name
    // - search by closest latitude/longitude
    // - filter by additional attributes
    let params = queryRequest.queryStringParameters;
    var filter = {};
    var hav = false;
    for (var key in params) {

        // Keyword
        if (params.hasOwnProperty('zip')) { //REQ           
            filter = { "key": "zip", "value": params['zip'] };
            console.log('ZIP: ' + params['zip']);
        }
        if (params.hasOwnProperty('primary_city')) { //REQ       
            filter = { "key": "primary_city", "value": params['primary_city'] };
            console.log('PRIMARY_CITY: ' + params['primary_city']);
        }
        if (params.hasOwnProperty('state')) { // ADDITIONAL ATTIBUTE              
            filter = { "key": "state", "value": params['state'] };
            console.log('STATE: ' + params['state']);
        }
        if (params.hasOwnProperty('county')) { // ADDITIONAL ATTIBUTE           
            filter = { "key": "county", "value": params['county'] };
            console.log('COUNTY: ' + params['county']);
        }
        if (params.hasOwnProperty('type')) { // ADDITIONAL ATTIBUTE          
            filter = { "key": "type", "value": params['type'] };
            console.log('TYPE: ' + params['type']);
        }

        // Haversine
        if (params.hasOwnProperty('lat') && params.hasOwnProperty('long')) { //REQ                   
            //filter = params['zip'];  console.log('LAT & LONG: '+params['lat']+','+params['long']);
            hav = true;
        }
    }

    var result;
    let data = await loadData();
    let test = [data[0], data[1], data[2]];
    if (hav) {

    }
    else {
        result = [];
        for (var object in data) {
            var ci = data[object]; 
            try {
                if (ci[filter.key].includes(filter.value)) { result.push(data[object]); }
            }
            catch (e) { result = new Error(); result.message = 'Error Processing Request' }
        } console.log('L: '+result.length);
    }
    return result;
}

async function loadData() {

    try {
        let data = fs.readFileSync('src/data.json');
        var parsedData = [];
        parsedData = JSON.parse(data.toString());
        if (typeof parsedData == 'object' && data !== null) {
            return parsedData;
        }
    }
    catch (err) {
        console.error(err);
        return err;
    }
}

async function buildResponse(completedRequest) {
    
    var statusCode = 200;
    var body = completedRequest;
    if (completedRequest instanceof Error || completedRequest == {} || completedRequest == undefined) statusCode = 400;
    
    let response = {
        statusCode: statusCode,
        body: JSON.stringify(body),
    };
    return response;
}
