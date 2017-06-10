# Objection.js

Adds extra functionality to [Generator.js](https://github.com/ve2323/Generator.js)

This project allows developers to generate html code automatically based on object key:values

## Functionality
- Automatically build html elements based on object contents
  - See [Generator.js](https://github.com/ve2323/Generator.js) for specific structure
- Objection functions:
  - Objection.define(*object*):
    - Converts original key definition into another
    - Example:
      - An object like {arc:{id:"class",class:"id", append:docbody()}} will result in an arc element appended to document body. To turn arc into let's say a p element you can use Objection.define({arc:"p"}) and the arc element will automatically become a p element when calling create.
  - Objection.create(*object*):
    - Creates all specified elements using [Generator.js](https://github.com/ve2323/Generator.js)
  - Objection.elements:
    - Returns a list of created elements
  - Objection.definition:
    - Used internally to set definition from with Objection.define(*object*)
  - Objection.clean():
    - destroys all [Generator.js](https://github.com/ve2323/Generator.js) functions
- Objection unique features:
  - Objection allows you to append to a created element from within an object by specifying the apppend-key. Structured as: append:"* first level key name*"

## Future development plans
This project is still being developed and amongst the planned features are the following:
- Allow register element directly by specifying unique second level key
- Performance and stability optimization
- Debug options
- Multi-definition feature

## Example code
```
// example object
// append can be used to either specify an element to append to directly or
// a key in the current object
// NOTE: appending to an element that has not yet been created will not work
var object = {
  div1:{id:"divhello", append:docbody()},
  p:{text:"p hello world", id:"phello", class:"pworld", append:docbody()},
  h1:{text:"h1 hello world", id:"h1hello", class:"h1world", append:"div1"},
  radegast:{text:"h2 hello world", id:"h2hello", class:"h2world", append:docbody()},
}

// define actual tag to create
// used to define tagnames which should be replaced by another
// <current tagname>:<new tagname>
Objection.define({radegast:"h2",div1:"div"});

// build elements from object
// will build elements from object
Objection.create(object);

// destroy all Generator.js functions if needed
Objection.clean();
```
