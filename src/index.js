// Ricardo Ruiz
// ricardo@kenetic-labs.com
// 213-842-5036 DIRECT

// Packages
var geodist = require('geodist');

// Handler
module.exports.handler = async event => {
    
    console.log('Event: '+JSON.stringify(event));
    
    let request = await processRequest(event);
    let response = await buildResponse(request);
    return response;
};

async function processRequest(request) {
    
// - implement zipcode api handler
// - search by full or partial zipcode
// - search by full or partial city name
// - search by closest latitude/longitude
// - filter by additional attributes

    if (request.httpMethod == 'GET') {
        
    } else {
        
    }

}

async function buildResponse(request) {
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
}
