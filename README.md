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
{
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
{
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
{ 
  "httpMethod": "GET",
  "path": "/resource",
  "headers": {},
  "queryStringParameters": {
    "state": "MA"
  }
}
```
```json
{
  "statusCode": 200,
  "body": "[{\"zip\":\"01001\",\"type\":\"STANDARD\",\"primary_city\":\"Agawam\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.06\",\"longitude\":\"-72.61\",\"country\":\"US\",\"estimated_population\":\"14021\"},{\"zip\":\"01002\",\"type\":\"STANDARD\",\"primary_city\":\"Amherst\",\"acceptable_cities\":\"Cushman, Pelham\",\"unacceptable_cities\":\"South Amherst\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.37\",\"longitude\":\"-72.52\",\"country\":\"US\",\"estimated_population\":\"16532\"},{\"zip\":\"01003\",\"type\":\"PO BOX\",\"primary_city\":\"Amherst\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.37\",\"longitude\":\"-72.52\",\"country\":\"US\",\"estimated_population\":\"0\"},{\"zip\":\"01004\",\"type\":\"PO BOX\",\"primary_city\":\"Amherst\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.37\",\"longitude\":\"-72.52\",\"country\":\"US\",\"estimated_population\":\"742\"},{\"zip\":\"01005\",\"type\":\"STANDARD\",\"primary_city\":\"Barre\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Worcester County\",\"timezone\":\"America/New_York\",\"area_codes\":\"978\",\"latitude\":\"42.42\",\"longitude\":\"-72.1\",\"country\":\"US\",\"estimated_population\":\"3935\"},{\"zip\":\"01007\",\"type\":\"STANDARD\",\"primary_city\":\"Belchertown\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.27\",\"longitude\":\"-72.4\",\"country\":\"US\",\"estimated_population\":\"12895\"},{\"zip\":\"01008\",\"type\":\"STANDARD\",\"primary_city\":\"Blandford\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.18\",\"longitude\":\"-72.93\",\"country\":\"US\",\"estimated_population\":\"1153\"},{\"zip\":\"01009\",\"type\":\"PO BOX\",\"primary_city\":\"Bondsville\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.2\",\"longitude\":\"-72.34\",\"country\":\"US\",\"estimated_population\":\"1055\"},{\"zip\":\"01010\",\"type\":\"STANDARD\",\"primary_city\":\"Brimfield\",\"acceptable_cities\":null,\"unacceptable_cities\":\"East Brimfield\",\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.11\",\"longitude\":\"-72.2\",\"country\":\"US\",\"estimated_population\":\"3312\"},{\"zip\":\"01011\",\"type\":\"STANDARD\",\"primary_city\":\"Chester\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.28\",\"longitude\":\"-72.98\",\"country\":\"US\",\"estimated_population\":\"1012\"},{\"zip\":\"01012\",\"type\":\"STANDARD\",\"primary_city\":\"Chesterfield\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.4\",\"longitude\":\"-72.85\",\"country\":\"US\",\"estimated_population\":\"639\"},{\"zip\":\"01013\",\"type\":\"STANDARD\",\"primary_city\":\"Chicopee\",\"acceptable_cities\":\"Willimansett\",\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.17\",\"longitude\":\"-72.57\",\"country\":\"US\",\"estimated_population\":\"16669\"},{\"zip\":\"01014\",\"type\":\"PO BOX\",\"primary_city\":\"Chicopee\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.17\",\"longitude\":\"-72.57\",\"country\":\"US\",\"estimated_population\":\"0\"},{\"zip\":\"01020\",\"type\":\"STANDARD\",\"primary_city\":\"Chicopee\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.17\",\"longitude\":\"-72.57\",\"country\":\"US\",\"estimated_population\":\"24570\"},{\"zip\":\"01021\",\"type\":\"PO BOX\",\"primary_city\":\"Chicopee\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.17\",\"longitude\":\"-72.57\",\"country\":\"US\",\"estimated_population\":\"509\"},{\"zip\":\"01022\",\"type\":\"STANDARD\",\"primary_city\":\"Chicopee\",\"acceptable_cities\":\"Westover Afb\",\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.17\",\"longitude\":\"-72.57\",\"country\":\"US\",\"estimated_population\":\"1713\"},{\"zip\":\"01026\",\"type\":\"STANDARD\",\"primary_city\":\"Cummington\",\"acceptable_cities\":null,\"unacceptable_cities\":\"West Cummington\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.46\",\"longitude\":\"-72.9\",\"country\":\"US\",\"estimated_population\":\"865\"},{\"zip\":\"01027\",\"type\":\"STANDARD\",\"primary_city\":\"Easthampton\",\"acceptable_cities\":\"E Hampton, Mount Tom, Westhampton\",\"unacceptable_cities\":\"Loudville\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.26\",\"longitude\":\"-72.68\",\"country\":\"US\",\"estimated_population\":\"15525\"},{\"zip\":\"01028\",\"type\":\"STANDARD\",\"primary_city\":\"East Longmeadow\",\"acceptable_cities\":\"E Longmeadow\",\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.06\",\"longitude\":\"-72.51\",\"country\":\"US\",\"estimated_population\":\"14024\"},{\"zip\":\"01029\",\"type\":\"PO BOX\",\"primary_city\":\"East Otis\",\"acceptable_cities\":null,\"unacceptable_cities\":\"Big Pond, E Otis\",\"state\":\"MA\",\"county\":\"Berkshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.17\",\"longitude\":\"-73.03\",\"country\":\"US\",\"estimated_population\":\"509\"}]"
}
```
#### County
```json
{ 
  "httpMethod": "GET",
  "path": "/resource",
  "headers": {},
  "queryStringParameters": {
    "county": "Hampshire County"
  }
}
```
```json
{
  "statusCode": 200,
  "body": "[{\"zip\":\"01002\",\"type\":\"STANDARD\",\"primary_city\":\"Amherst\",\"acceptable_cities\":\"Cushman, Pelham\",\"unacceptable_cities\":\"South Amherst\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.37\",\"longitude\":\"-72.52\",\"country\":\"US\",\"estimated_population\":\"16532\"},{\"zip\":\"01003\",\"type\":\"PO BOX\",\"primary_city\":\"Amherst\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.37\",\"longitude\":\"-72.52\",\"country\":\"US\",\"estimated_population\":\"0\"},{\"zip\":\"01004\",\"type\":\"PO BOX\",\"primary_city\":\"Amherst\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.37\",\"longitude\":\"-72.52\",\"country\":\"US\",\"estimated_population\":\"742\"},{\"zip\":\"01007\",\"type\":\"STANDARD\",\"primary_city\":\"Belchertown\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.27\",\"longitude\":\"-72.4\",\"country\":\"US\",\"estimated_population\":\"12895\"},{\"zip\":\"01012\",\"type\":\"STANDARD\",\"primary_city\":\"Chesterfield\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.4\",\"longitude\":\"-72.85\",\"country\":\"US\",\"estimated_population\":\"639\"},{\"zip\":\"01026\",\"type\":\"STANDARD\",\"primary_city\":\"Cummington\",\"acceptable_cities\":null,\"unacceptable_cities\":\"West Cummington\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.46\",\"longitude\":\"-72.9\",\"country\":\"US\",\"estimated_population\":\"865\"},{\"zip\":\"01027\",\"type\":\"STANDARD\",\"primary_city\":\"Easthampton\",\"acceptable_cities\":\"E Hampton, Mount Tom, Westhampton\",\"unacceptable_cities\":\"Loudville\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.26\",\"longitude\":\"-72.68\",\"country\":\"US\",\"estimated_population\":\"15525\"},{\"zip\":\"01032\",\"type\":\"STANDARD\",\"primary_city\":\"Goshen\",\"acceptable_cities\":null,\"unacceptable_cities\":\"Lithia\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.43\",\"longitude\":\"-72.8\",\"country\":\"US\",\"estimated_population\":\"489\"},{\"zip\":\"01033\",\"type\":\"STANDARD\",\"primary_city\":\"Granby\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.26\",\"longitude\":\"-72.52\",\"country\":\"US\",\"estimated_population\":\"5647\"},{\"zip\":\"01035\",\"type\":\"STANDARD\",\"primary_city\":\"Hadley\",\"acceptable_cities\":null,\"unacceptable_cities\":\"North Hadley\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.35\",\"longitude\":\"-72.58\",\"country\":\"US\",\"estimated_population\":\"4327\"},{\"zip\":\"01038\",\"type\":\"STANDARD\",\"primary_city\":\"Hatfield\",\"acceptable_cities\":null,\"unacceptable_cities\":\"West Hatfield\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.37\",\"longitude\":\"-72.6\",\"country\":\"US\",\"estimated_population\":\"2161\"},{\"zip\":\"01039\",\"type\":\"STANDARD\",\"primary_city\":\"Haydenville\",\"acceptable_cities\":\"West Whately\",\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.39\",\"longitude\":\"-72.7\",\"country\":\"US\",\"estimated_population\":\"1228\"},{\"zip\":\"01050\",\"type\":\"STANDARD\",\"primary_city\":\"Huntington\",\"acceptable_cities\":\"Montgomery\",\"unacceptable_cities\":\"Crescent Mills, Hntgtn, Knightville, North Chester, South Worthington\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.23\",\"longitude\":\"-72.88\",\"country\":\"US\",\"estimated_population\":\"2282\"},{\"zip\":\"01053\",\"type\":\"STANDARD\",\"primary_city\":\"Leeds\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.35\",\"longitude\":\"-72.71\",\"country\":\"US\",\"estimated_population\":\"1407\"},{\"zip\":\"01059\",\"type\":\"PO BOX\",\"primary_city\":\"North Amherst\",\"acceptable_cities\":\"Amherst\",\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.4\",\"longitude\":\"-72.52\",\"country\":\"US\",\"estimated_population\":\"0\"},{\"zip\":\"01060\",\"type\":\"STANDARD\",\"primary_city\":\"Northampton\",\"acceptable_cities\":null,\"unacceptable_cities\":\"North Hampton\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.32\",\"longitude\":\"-72.67\",\"country\":\"US\",\"estimated_population\":\"10304\"},{\"zip\":\"01061\",\"type\":\"PO BOX\",\"primary_city\":\"Northampton\",\"acceptable_cities\":null,\"unacceptable_cities\":\"North Hampton\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.32\",\"longitude\":\"-72.67\",\"country\":\"US\",\"estimated_population\":\"423\"},{\"zip\":\"01062\",\"type\":\"STANDARD\",\"primary_city\":\"Florence\",\"acceptable_cities\":\"Bay State Village, Bay State Vlg, Northampton\",\"unacceptable_cities\":\"North Hampton\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.32\",\"longitude\":\"-72.67\",\"country\":\"US\",\"estimated_population\":\"9483\"},{\"zip\":\"01063\",\"type\":\"UNIQUE\",\"primary_city\":\"Northampton\",\"acceptable_cities\":null,\"unacceptable_cities\":\"North Hampton, Smith College\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.32\",\"longitude\":\"-72.67\",\"country\":\"US\",\"estimated_population\":\"0\"},{\"zip\":\"01070\",\"type\":\"STANDARD\",\"primary_city\":\"Plainfield\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.51\",\"longitude\":\"-72.91\",\"country\":\"US\",\"estimated_population\":\"467\"}]"
}
```
#### Type
```json
{ 
  "httpMethod": "GET",
  "path": "/resource",
  "headers": {},
  "queryStringParameters": {
    "type": "STANDARD"
  }
}
```
```json
{
  "statusCode": 200,
  "body": "[{\"zip\":\"01001\",\"type\":\"STANDARD\",\"primary_city\":\"Agawam\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.06\",\"longitude\":\"-72.61\",\"country\":\"US\",\"estimated_population\":\"14021\"},{\"zip\":\"01002\",\"type\":\"STANDARD\",\"primary_city\":\"Amherst\",\"acceptable_cities\":\"Cushman, Pelham\",\"unacceptable_cities\":\"South Amherst\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.37\",\"longitude\":\"-72.52\",\"country\":\"US\",\"estimated_population\":\"16532\"},{\"zip\":\"01005\",\"type\":\"STANDARD\",\"primary_city\":\"Barre\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Worcester County\",\"timezone\":\"America/New_York\",\"area_codes\":\"978\",\"latitude\":\"42.42\",\"longitude\":\"-72.1\",\"country\":\"US\",\"estimated_population\":\"3935\"},{\"zip\":\"01007\",\"type\":\"STANDARD\",\"primary_city\":\"Belchertown\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.27\",\"longitude\":\"-72.4\",\"country\":\"US\",\"estimated_population\":\"12895\"},{\"zip\":\"01008\",\"type\":\"STANDARD\",\"primary_city\":\"Blandford\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.18\",\"longitude\":\"-72.93\",\"country\":\"US\",\"estimated_population\":\"1153\"},{\"zip\":\"01010\",\"type\":\"STANDARD\",\"primary_city\":\"Brimfield\",\"acceptable_cities\":null,\"unacceptable_cities\":\"East Brimfield\",\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.11\",\"longitude\":\"-72.2\",\"country\":\"US\",\"estimated_population\":\"3312\"},{\"zip\":\"01011\",\"type\":\"STANDARD\",\"primary_city\":\"Chester\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.28\",\"longitude\":\"-72.98\",\"country\":\"US\",\"estimated_population\":\"1012\"},{\"zip\":\"01012\",\"type\":\"STANDARD\",\"primary_city\":\"Chesterfield\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.4\",\"longitude\":\"-72.85\",\"country\":\"US\",\"estimated_population\":\"639\"},{\"zip\":\"01013\",\"type\":\"STANDARD\",\"primary_city\":\"Chicopee\",\"acceptable_cities\":\"Willimansett\",\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.17\",\"longitude\":\"-72.57\",\"country\":\"US\",\"estimated_population\":\"16669\"},{\"zip\":\"01020\",\"type\":\"STANDARD\",\"primary_city\":\"Chicopee\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.17\",\"longitude\":\"-72.57\",\"country\":\"US\",\"estimated_population\":\"24570\"},{\"zip\":\"01022\",\"type\":\"STANDARD\",\"primary_city\":\"Chicopee\",\"acceptable_cities\":\"Westover Afb\",\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.17\",\"longitude\":\"-72.57\",\"country\":\"US\",\"estimated_population\":\"1713\"},{\"zip\":\"01026\",\"type\":\"STANDARD\",\"primary_city\":\"Cummington\",\"acceptable_cities\":null,\"unacceptable_cities\":\"West Cummington\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.46\",\"longitude\":\"-72.9\",\"country\":\"US\",\"estimated_population\":\"865\"},{\"zip\":\"01027\",\"type\":\"STANDARD\",\"primary_city\":\"Easthampton\",\"acceptable_cities\":\"E Hampton, Mount Tom, Westhampton\",\"unacceptable_cities\":\"Loudville\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.26\",\"longitude\":\"-72.68\",\"country\":\"US\",\"estimated_population\":\"15525\"},{\"zip\":\"01028\",\"type\":\"STANDARD\",\"primary_city\":\"East Longmeadow\",\"acceptable_cities\":\"E Longmeadow\",\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.06\",\"longitude\":\"-72.51\",\"country\":\"US\",\"estimated_population\":\"14024\"},{\"zip\":\"01030\",\"type\":\"STANDARD\",\"primary_city\":\"Feeding Hills\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.06\",\"longitude\":\"-72.67\",\"country\":\"US\",\"estimated_population\":\"10449\"},{\"zip\":\"01031\",\"type\":\"STANDARD\",\"primary_city\":\"Gilbertville\",\"acceptable_cities\":null,\"unacceptable_cities\":\"Old Furnace\",\"state\":\"MA\",\"county\":\"Worcester County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.35\",\"longitude\":\"-72.21\",\"country\":\"US\",\"estimated_population\":\"932\"},{\"zip\":\"01032\",\"type\":\"STANDARD\",\"primary_city\":\"Goshen\",\"acceptable_cities\":null,\"unacceptable_cities\":\"Lithia\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.43\",\"longitude\":\"-72.8\",\"country\":\"US\",\"estimated_population\":\"489\"},{\"zip\":\"01033\",\"type\":\"STANDARD\",\"primary_city\":\"Granby\",\"acceptable_cities\":null,\"unacceptable_cities\":null,\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.26\",\"longitude\":\"-72.52\",\"country\":\"US\",\"estimated_population\":\"5647\"},{\"zip\":\"01034\",\"type\":\"STANDARD\",\"primary_city\":\"Granville\",\"acceptable_cities\":\"Tolland\",\"unacceptable_cities\":\"Granville Center, West Granville\",\"state\":\"MA\",\"county\":\"Hampden County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.06\",\"longitude\":\"-72.86\",\"country\":\"US\",\"estimated_population\":\"1787\"},{\"zip\":\"01035\",\"type\":\"STANDARD\",\"primary_city\":\"Hadley\",\"acceptable_cities\":null,\"unacceptable_cities\":\"North Hadley\",\"state\":\"MA\",\"county\":\"Hampshire County\",\"timezone\":\"America/New_York\",\"area_codes\":\"413\",\"latitude\":\"42.35\",\"longitude\":\"-72.58\",\"country\":\"US\",\"estimated_population\":\"4327\"}]"
}
```
