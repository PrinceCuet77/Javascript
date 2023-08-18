# Document Object Model

- DOM means Document Object Model

![DOM](photo/dom.png)

- With the object model, JavaScript gets all the power it needs to create dynamic HTML
- Now JavaScript can - 
  - Change HTML elements i.e. `button`
  - Change HTML attributes i.e. `class`
  - Change CSS styles i.e. `style`
  - Add HTML elements & attributes
  - Remove HTML elements & attributes
  - React to HTML events
- So the overall concepts refer to `POEM`
  - P - Property
  - O - Object
  - E - Events
  - M - Methods
- So, DOM is a interface or API which creates connection between JavaScript & HTML
- DOM is a Document Object Model & Programming Interface for HTML that defines HTML objects, properties, methods & events to get, change, add or delete HTML elements

## DOM Methods

### `getElementById` Method

- In HTML, there will be only one `id`
- If I mention multiple `id` then using `getElementById` method will catch the first `id`
- In HTML - 

```html
<p id="demo">Hello World</p>
```

- In JavaScript (DOM methods) - 

```js
console.log(document.getElementById('demo'))
```

- Outcome - 

```text
<p id="demo">Hello World</p>
```

- The property of that method is `innerHTML`
- Used to change the content of that selected element
- In JavaScript - 

```js
const element = document.getElementById('demo')
element.innerHTML = 'Hello Prince'
```

- Outcome -

```text
<p id="demo">Hello Prince</p>
```

### `document`

- The `document` object represents the web page
- Accessing any element in an HTML page, start accessing the document object
- `document.getElementById(id)` - find an element by element id
- `document.getElementsByTagName(tagName)` - find elements by tag name
- `document.getElementsByClassName(className)` - find elements by class name

### `getElementsByTagName` & `getElementsByClassName` Method

- But `class` and `tag` will be multiple
- Returns a `HTMLCollection` which is array-like
- In HTML - 

```html
<p class="demo">Hello World</p>
```

- In JavaScript -

```js
document.getElementsByTagName('p')
document.getElementsByClassName('demo')
```

### `querySelector` & `querySelectorAll` Methods

- Find all HTML elements that match a specified CSS selector (id, class name, types, attributes, values of attributes, etc) use like the following - 

```html
<p class="demoClass" id="demoId">Hello World</p>
```

- In JavaScript - 

```js
document.querySelector('p') // Using tag
document.querySelector('.demoClass') // Using class
document.querySelector('#demoId') // Using id

document.querySelectorAll('p') // Using tag
document.querySelectorAll('.demoClass') // Using class
```