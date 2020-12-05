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
{ 
  "httpMethod": "POST",
  "path": "/resouce",
  "headers": {
    "content-type": "application/json"
  },
  "body": "{\"title\":\"hello world\"}"
}
```
```json
{
  "statusCode": 400,
  "body": "{\"message\":\"Error Processing Request\"}"
}
```
#### ZIP
```json
{ 
  "httpMethod": "GET",
  "path": "/resource",
  "headers": {},
  "queryStringParameters": {
    "zip": "01230"
  }
}
```
```json
{
  "statusCode": 200,
  "body": "[{\"zip\":\"01230\",\"type\":\"STANDARD\",\"primary_city\":\"Great Barrington\",\"acceptable_cities\":\"Egremont, Gt Barrington, N Egremont, New Marlboro, New Marlborou, New Marlborough, North Egremont, Simons Rock\",\"unacceptable_cities\":\"Alford, Berkshire Heights, Hartsville, Risingdale, Van Deusenville\",\"state\":\"MA\",\"county\":\"Berkshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.19\",\"longitude\":\"-73.35\",\"country\":\"US\",\"estimated_population\":\"5873\"}]"
}
```
#### ZIP Partial
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
{
  "statusCode": 200,
  "body": "[{\"zip\":\"01230\",\"type\":\"STANDARD\",\"primary_city\":\"Great Barrington\",\"acceptable_cities\":\"Egremont, Gt Barrington, N Egremont, New Marlboro, New Marlborou, New Marlborough, North Egremont, Simons Rock\",\"unacceptable_cities\":\"Alford, Berkshire Heights, Hartsville, Risingdale, Van Deusenville\",\"state\":\"MA\",\"county\":\"Berkshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.19\",\"longitude\":\"-73.35\",\"country\":\"US\",\"estimated_population\":\"5873\"},{\"zip\":\"01235\",\"type\":\"STANDARD\",\"primary_city\":\"Hinsdale\",\"acceptable_cities\":\"Peru\",\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Berkshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.42\",\"longitude\":\"-73.07\",\"country\":\"US\",\"estimated_population\":\"2476\"},{\"zip\":\"01236\",\"type\":\"STANDARD\",\"primary_city\":\"Housatonic\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Berkshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.25\",\"longitude\":\"-73.36\",\"country\":\"US\",\"estimated_population\":\"1486\"},{\"zip\":\"01237\",\"type\":\"STANDARD\",\"primary_city\":\"Lanesboro\",\"acceptable_cities\":\"Hancock, New Ashford\",\"unacceptable_cities\":\"Lanesborough\",\"state\":\"MA\",\"county\":\"Berkshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.51\",\"longitude\":\"-73.22\",\"country\":\"US\",\"estimated_population\":\"2606\"},{\"zip\":\"01238\",\"type\":\"STANDARD\",\"primary_city\":\"Lee\",\"acceptable_cities\":null,\"unacceptable_cities\":\"W Becket\",\"state\":\"MA\",\"county\":\"Berkshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.3\",\"longitude\":\"-73.25\",\"country\":\"US\",\"estimated_population\":\"5056\"}]"
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
