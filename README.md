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
{ 
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
#### City
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
{
  "statusCode": 200,
  "body": "[{\"zip\":\"01053\",\"type\":\"STANDARD\",\"primary_city\":\"Leeds\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.35\",\"longitude\":\"-72.71\",\"country\":\"US\",\"estimated_population\":\"1407\"},{\"zip\":\"04263\",\"type\":\"STANDARD\",\"primary_city\":\"Leeds\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"ME\",\"county\":\"Androscoggin County\",\"timezone\":\"America/New_York\",\"area_codes\":\"207\",\"latitude\":\"44.3\",\"longitude\":\"-70.12\",\"country\":\"US\",\"estimated_population\":\"1835\"}]"
}
```
#### City Partial
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
{
  "statusCode": 200,
  "body": "[{\"zip\":\"01053\",\"type\":\"STANDARD\",\"primary_city\":\"Leeds\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.35\",\"longitude\":\"-72.71\",\"country\":\"US\",\"estimated_population\":\"1407\"},{\"zip\":\"01054\",\"type\":\"STANDARD\",\"primary_city\":\"Leverett\",\"acceptable_cities\":null,\"unacceptable_cities\":\"East Leverett, North Leverett\",\"state\":\"MA\",\"county\":\"Franklin County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.45\",\"longitude\":\"-72.5\",\"country\":\"US\",\"estimated_population\":\"1620\"},{\"zip\":\"01238\",\"type\":\"STANDARD\",\"primary_city\":\"Lee\",\"acceptable_cities\":null,\"unacceptable_cities\":\"W Becket\",\"state\":\"MA\",\"county\":\"Berkshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.3\",\"longitude\":\"-73.25\",\"country\":\"US\",\"estimated_population\":\"5056\"},{\"zip\":\"01240\",\"type\":\"STANDARD\",\"primary_city\":\"Lenox\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Berkshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.35\",\"longitude\":\"-73.28\",\"country\":\"US\",\"estimated_population\":\"4020\"},{\"zip\":\"01242\",\"type\":\"PO BOX\",\"primary_city\":\"Lenox Dale\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Berkshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.36\",\"longitude\":\"-73.27\",\"country\":\"US\",\"estimated_population\":\"515\"},{\"zip\":\"01260\",\"type\":\"PO BOX\",\"primary_city\":\"South Lee\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Berkshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.3\",\"longitude\":\"-73.23\",\"country\":\"US\",\"estimated_population\":\"0\"},{\"zip\":\"01453\",\"type\":\"STANDARD\",\"primary_city\":\"Leominster\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Worcester County\",\"timezone\":\"America/New_York\",\"area_codes\":\"978,508\",\"latitude\":\"42.51\",\"longitude\":\"-71.77\",\"country\":\"US\",\"estimated_population\":\"34034\"},{\"zip\":\"01524\",\"type\":\"STANDARD\",\"primary_city\":\"Leicester\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Worcester County\",\"timezone\":\"America/New_York\",\"area_codes\":\"508,774\",\"latitude\":\"42.25\",\"longitude\":\"-71.9\",\"country\":\"US\",\"estimated_population\":\"5678\"},{\"zip\":\"02420\",\"type\":\"STANDARD\",\"primary_city\":\"Lexington\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Middlesex County\",\"timezone\":\"America/New_York\",\"area_codes\":\"781,617,339\",\"latitude\":\"42.44\",\"longitude\":\"-71.23\",\"country\":\"US\",\"estimated_population\":\"13148\"},{\"zip\":\"02421\",\"type\":\"STANDARD\",\"primary_city\":\"Lexington\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Middlesex County\",\"timezone\":\"America/New_York\",\"area_codes\":\"617,781\",\"latitude\":\"42.44\",\"longitude\":\"-71.23\",\"country\":\"US\",\"estimated_population\":\"15237\"},{\"zip\":\"03605\",\"type\":\"STANDARD\",\"primary_city\":\"Lempster\",\"acceptable_cities\":\"East Lempster\",\"unacceptable_cities\":\"E Lempster\",\"state\":\"NH\",\"county\":\"Sullivan County\",\"timezone\":\"America/New_York\",\"area_codes\":\"603\",\"latitude\":\"43.23\",\"longitude\":\"-72.21\",\"country\":\"US\",\"estimated_population\":\"837\"},{\"zip\":\"03756\",\"type\":\"PO BOX\",\"primary_city\":\"Lebanon\",\"acceptable_cities\":null,\"unacceptable_cities\":\"Dartmouth Hitchcock Med Ctr\",\"state\":\"NH\",\"county\":\"Grafton County\",\"timezone\":\"America/New_York\",\"area_codes\":\"603\",\"latitude\":\"43.63\",\"longitude\":\"-72.25\",\"country\":\"US\",\"estimated_population\":\"0\"},{\"zip\":\"03766\",\"type\":\"STANDARD\",\"primary_city\":\"Lebanon\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"NH\",\"county\":\"Grafton County\",\"timezone\":\"America/New_York\",\"area_codes\":\"603\",\"latitude\":\"43.63\",\"longitude\":\"-72.25\",\"country\":\"US\",\"estimated_population\":\"7995\"},{\"zip\":\"03784\",\"type\":\"STANDARD\",\"primary_city\":\"West Lebanon\",\"acceptable_cities\":null,\"unacceptable_cities\":\"W Lebanon\",\"state\":\"NH\",\"county\":\"Grafton County\",\"timezone\":\"America/New_York\",\"area_codes\":\"603\",\"latitude\":\"43.62\",\"longitude\":\"-72.29\",\"country\":\"US\",\"estimated_population\":\"3344\"},{\"zip\":\"03861\",\"type\":\"STANDARD\",\"primary_city\":\"Lee\",\"acceptable_cities\":null,\"unacceptable_cities\":\"Durham\",\"state\":\"NH\",\"county\":\"Strafford County\",\"timezone\":\"America/New_York\",\"area_codes\":\"603\",\"latitude\":\"43.1\",\"longitude\":\"-71.01\",\"country\":\"US\",\"estimated_population\":\"3124\"},{\"zip\":\"04027\",\"type\":\"STANDARD\",\"primary_city\":\"Lebanon\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"ME\",\"county\":\"York County\",\"timezone\":\"America/New_York\",\"area_codes\":\"207,603\",\"latitude\":\"43.39\",\"longitude\":\"-70.85\",\"country\":\"US\",\"estimated_population\":\"4853\"},{\"zip\":\"04240\",\"type\":\"STANDARD\",\"primary_city\":\"Lewiston\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"ME\",\"county\":\"Androscoggin County\",\"timezone\":\"America/New_York\",\"area_codes\":\"207\",\"latitude\":\"44.08\",\"longitude\":\"-70.17\",\"country\":\"US\",\"estimated_population\":\"24211\"},{\"zip\":\"04241\",\"type\":\"PO BOX\",\"primary_city\":\"Lewiston\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"ME\",\"county\":\"Androscoggin County\",\"timezone\":\"America/New_York\",\"area_codes\":\"207\",\"latitude\":\"44.08\",\"longitude\":\"-70.17\",\"country\":\"US\",\"estimated_population\":\"462\"},{\"zip\":\"04243\",\"type\":\"PO BOX\",\"primary_city\":\"Lewiston\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"ME\",\"county\":\"Androscoggin County\",\"timezone\":\"America/New_York\",\"area_codes\":\"207\",\"latitude\":\"44.08\",\"longitude\":\"-70.17\",\"country\":\"US\",\"estimated_population\":\"724\"},{\"zip\":\"04263\",\"type\":\"STANDARD\",\"primary_city\":\"Leeds\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"ME\",\"county\":\"Androscoggin County\",\"timezone\":\"America/New_York\",\"area_codes\":\"207\",\"latitude\":\"44.3\",\"longitude\":\"-70.12\",\"country\":\"US\",\"estimated_population\":\"1835\"}]"
}
```

#### State
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
#### County
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
#### Type
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
