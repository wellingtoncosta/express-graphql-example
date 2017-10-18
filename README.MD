## express-graphql-example

Study project using Express and GraphQL.

Data generated on [JSON Generator](https://www.json-generator.com)

JSON template:
```javascript
[
  '{{repeat(1000)}}',
  {
    id: '{{objectId()}}',
    age: '{{integer(20, 40)}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    friends: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        name: '{{firstName()}} {{surname()}}'
      }
    ]
  }
]
```