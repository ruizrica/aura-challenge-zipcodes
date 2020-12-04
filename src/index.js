//
// Ricardo Ruiz
// ricardo@kenetic-labs.com
// 213-842-5036 DIRECT

// Frameworks
let geodist = require('geodist');
let fs = require('fs');
let _ = require('lodash');

// Handler
module.exports.handler = async event => {

    let request = await processRequest(event); 
    let response = await buildResponse(request);
    return response;
};

async function processRequest(request) {

    var response; 
    switch (request.httpMethod) {
        case 'GET': 
            response = [];
            response = await handleQuery(request);
            break;
        default:
            response = {};
            break;
    } 
    return response;
}

async function handleQuery(queryRequest) { console.log('queryRequest IN handleQuery: '+JSON.stringify(queryRequest));
    
    // - implement zipcode api handler
    // - search by full or partial zipcode
    // - search by full or partial city name
    // - search by closest latitude/longitude
    // - filter by additional attributes
    
    var result = [];
    let data = await loadData(); let test = [data[0],data[1],data[2]];
    for (var object in test) {
        
        result.push(data[object]);
    }
    return result;
}

async function loadData() {
    
    try {
        let data = fs.readFileSync('src/data.json');
        var parsedData = []; parsedData = JSON.parse(data.toString());
        if (typeof parsedData == 'object' && data !== null) {
            return parsedData;
        }
    }
    catch (err) {
        console.error(err)
        return err;
    }
}

async function buildResponse(completedRequest) { 
    
    var statusCode = 200; var body;
    if (completedRequest instanceof Error || completedRequest == {} || completedRequest == undefined) { 
        console.log('buildResponse: IN ERROR'+JSON.stringify(completedRequest));
        statusCode = 400;
        body = {"errorMessage":"Error Processing Request"};
    } else {
        body = completedRequest;
    }
    let response = {
        statusCode: statusCode,
        body: JSON.stringify(body),
    };
    return response;
}
