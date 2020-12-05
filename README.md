# Aura Code Challenge

### Completed the Following:

- [x] design and define zipcode api
- [x] implement zipcode api handler
- [x] search by full or partial zipcode
- [x] search by full or partial city name
- [x] search by closest latitude/longitude
- [x] filter by additional attributes:
  1. state
  2. county
  3. type



### Tests:

#### Bogus Request 1
```json
{ 
  "httpMethod": "GET",
  "path": "/resource",
  "headers": {},
  "queryStringParameters": {
    "date": "2020-11-13"
  }
}
```
```json
{
  "statusCode": 400,
  "body": "{\"message\":\"Error Processing Request\"}"
}
```
#### Bogus Request 2
```json
{ BOGUS
  "httpMethod": "POST",
  "path": "/resouce",
  "headers": {
    "content-type": "application/json"
  },
  "body": "{\"title\":\"hello world\"}"
}
```

```json
{ ZIP
  "httpMethod": "GET",
  "path": "/resource",
  "headers": {},
  "queryStringParameters": {
    "zip": "01230"
  }
}
```
```json
{ ZIP Partial
  "httpMethod": "GET",
  "path": "/resource",
  "headers": {},
  "queryStringParameters": {
    "zip": "0123"
  }
}
```
```json
{ CITY
  "httpMethod": "GET",
  "path": "/resource",
  "headers": {},
  "queryStringParameters": {
    "primary_city": "Leeds"
  }
}
```
```json
{ CITY Partial
  "httpMethod": "GET",
  "path": "/resource",
  "headers": {},
  "queryStringParameters": {
    "primary_city": "Le"
  }
}
```
```json
{ STATE 
  "httpMethod": "GET",
  "path": "/resource",
  "headers": {},
  "queryStringParameters": {
    "state": "MA"
  }
}
```
```json
{ COUNTY 
  "httpMethod": "GET",
  "path": "/resource",
  "headers": {},
  "queryStringParameters": {
    "county": "Hampshire County"
  }
}
```
```json
{ TYPE 
  "httpMethod": "GET",
  "path": "/resource",
  "headers": {},
  "queryStringParameters": {
    "type": "STANDARD"
  }
}
```
