# JSON

- JavaScript Object Notation
- JSON is a text format for storing and transporting data
- JSON is a string but we can convert it as JavaScript object
- JSON is language independent
- JSON example - 

```js
'{"name":"John", "age":30, "car":null}'
```

## Why Use JSON?

- The JSON format is syntactically similar to the code for creating JavaScript object
- So, easily convert JSON data into JavaScript objects
- Any programming language can use this text format to data transmission
- Converting JSON strings to JavaScript objects - 

```js
JSON.parse()
```

- Converting JavaScript objects to JSON strings - 

```js
JSON.stringify()
```

## JSON Syntax

- JSON syntax is derived from JavaScript object notation syntax:
- Data is in name/value pairs
- Data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays

### JSON values

- In JSON, values must be a `string`, `number`, `object`, `array`, `boolean` & `null`
- `function`, `date` & `undefined` can be the value of JSON
- JSON `string` - 

```js
{"name":"John"}
```

- JSON `number` - 

```js
{"age":30}
```

- JSON `objects` -

```js
{
"employee":{"name":"John", "age":30, "city":"New York"}
}
```

- JSON `array` - 

```js
{
"employees":["John", "Anna", "Peter"]
}
```

- JSON `boolean` - 

```js
{"sale":true}
```

- JSON `null` -

```js
{"middlename":null}
```

## JSON vs XML

- Both used to receive data from a web server
- JSON example - 

```js
{"employees":[
  { "firstName":"John", "lastName":"Doe" },
  { "firstName":"Anna", "lastName":"Smith" },
  { "firstName":"Peter", "lastName":"Jones" }
]}
```

- XML example - 

```text
<employees>
  <employee>
    <firstName>John</firstName> <lastName>Doe</lastName>
  </employee>
  <employee>
    <firstName>Anna</firstName> <lastName>Smith</lastName>
  </employee>
  <employee>
    <firstName>Peter</firstName> <lastName>Jones</lastName>
  </employee>
</employees>
```

### JSON is Like XML because

- Both are "self describing" (human readable)
- Both are hierarchical (values within values)
- Both can be parsed and used by lots of programming languages
- Both can be fetched with an XMLHttpRequest

### JSON is Unlike XML because

- JSON doesn't use end tag
- JSON is shorter
- JSON is quicker to read and write
- JSON can use arrays

### Why JSON is Better Than XML

- XML is much more difficult to parse than JSON
- JSON is parsed into a ready-to-use JavaScript object

## `JSON.parse()`

- When receiving data from a web server, the data is always a string
- Parse the data with `JSON.parse()`, and the data becomes a JavaScript object
- JSON to JavaScript object - 

```js
const jsonValue = '{"name":"John", "age":30, "city":"New York"}'

// Convert JSON (text) to JavaScript object
const myObj = JSON.parse(jsonValue)
console.log(myObj) // Output: { name: 'John', age: 30, city: 'New York' }
```

- JSON to array - 

```js
const jsonValue = '["Ford", "BMW", "Audi", "Fiat"]'

// Convert JSON (text) to array
const myArr = JSON.parse(jsonValue)
console.log(myArr) // Output: [ 'Ford', 'BMW', 'Audi', 'Fiat' ]
```