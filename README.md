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



### Test Events

```json
{
  "httpMethod": "GET",
  "path": "/resource",
  "headers": {},
  "queryStringParameters": {
    "zip": "90701"
  }
}
```
```json
{
  "httpMethod": "GET",
  "path": "/resource",
  "headers": {},
  "queryStringParameters": {
    "zip": "90701"
  }
}
```

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
  "httpMethod": "POST",
  "path": "/resouce",
  "headers": {
    "content-type": "application/json"
  },
  "body": "{\"title\":\"hello world\"}"
}
```
