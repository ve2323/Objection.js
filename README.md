# Objection.js

Adds extra functionality to [Generator.js](https://github.com/ve2323/Generator.js)
- [Generator.js](https://github.com/ve2323/Generator.js) is included in this project

This project allows developers to generate html code automatically based on object key:values

## Functionality
- Automatically build html elements based on object contents
  - See [Generator.js](https://github.com/ve2323/Generator.js) for specific structure
- Objection functions:
  - Objection.define(*object*):
    - Converts original key definition into another
    - Example:
      - An object like {arc:{id:"class",class:"id", append:docbody()}} will result in an arc element appended to document body. To turn arc into for example a p element you can use Objection.define({arc:"p"}) and the arc element will automatically become a p element when calling create.
  - Objection.create(*object*):
    - Creates all specified elements using [Generator.js](https://github.com/ve2323/Generator.js)
  - Objection.elements:
    - Returns a list of created elements
  - Objection.definition:
    - Used internally to set definition from with Objection.define(*object*)
      - Multidefinition can be used to define multiple properties to the same reference, structure as:
        - *key1*_*key2*_*key3*_*...*:"*definition*",
  - Objection.clean():
    - destroys all [Generator.js](https://github.com/ve2323/Generator.js) functions
- Objection unique features:
  - Objection allows you to append to a created element from within an object by specifying the apppend-key. Structured as: append:"* first level key name*"

## Future development plans
This project is still being developed and amongst the planned features are the following:
- Allow register element directly by specifying unique second level key
- Performance and stability optimization
- Debug option

## Example code
```
  // example object
  // append can be used to either specify an element to append to directly or
  // a key in the current object
  // NOTE: appending to an element that has not yet been created will not work
	var object = {
		div1:{id:"objection-div", append:docbody()},
		radegast:{text:"Objection.js", id:"objection-h2", class:"center-text", append:"div1"},
		p1:{text:"Objection.js is a website builder that uses objects rather than actual code to build websites.\nExample usage below!", id:"objection-p", class:"center-text", append:"div1"},
		hr:{append:"div1"},
		form:{id:"objection-form",append:"div1"},
		span1:{id:"objection-span", append:"form"},
		div2:{id:"objection-block-1", append:"span1"},
		p2:{text:"Personal information:", class:"objection-form-p", append:"div2"},
		inp1:{type:"text",id:"objection-name", class:"objection-textfield", placeholder:"Name", append:"div2"},
		inp2:{type:"text",id:"objection-lastname", class:"objection-textfield", placeholder:"Last name", append:"div2"},
		inp3:{type:"text",id:"objection-phone", class:"objection-textfield", placeholder:"Phone number", pattern:"[0-9]{5}[-][0-9]{7}[-][0-9]{1}", append:"div2"},
		p3:{text:"Marital status:", class:"objection-form-p", append:"div2"},
		sel1:{id:"objection-marital",class:"objection-marital", append:"div2"},
		op0:{text:"Marital status", disabled:"disabled", append:"sel1"},
		op1:{text:"Married",append:"sel1"},
		op2:{text:"Single",append:"sel1"},
		op3:{text:"Do not specify",append:"sel1"},
		p4:{text:"Gender:", class:"objection-form-p", append:"div2"},
		sel2:{name:"objection-gender", id:"objection-gender-box", append:"div2"},
		op4:{text:"Gender", disabled:"disabled", append:"sel2"},
		op5:{text:"Male", append:"sel2"},
		op6:{text:"Female",append:"sel2"},
		op7:{text:"Do not specify",append:"sel2"},
		p5:{text:"Company:", class:"objection-form-p", append:"div2"},
		inp4:{class:"objection-textfield",placeholder:"Company name", id:"objection-company", append:"div2"},
		inp5:{class:"objection-textfield",placeholder:"Current job title", id:"objection-title", append:"div2"},
		div3:{id:"objection-block-2", append:"span1"},
		p6:{text:"Register account:", class:"objection-form-p", append:"div3"},
		inp6:{type:"text",class:"objection-textfield", placeholder:"Username", id:"objection-username", append:"div3"},
		inp7:{type:"password",class:"objection-textfield", id:"objection-password", placeholder:"Password", append:"div3"},
		p7:{text:"Account type:", class:"objection-form-p", id:"objection-type", append:"div3"},
		sel3:{class:"objection-type", append:"div3"},
		op8:{text:"Account type", disabled:"disabled", append:"sel3"},
		op9:{text:"Free",append:"sel3"},
		op10:{text:"Standard",append:"sel3"},
		op11:{text:"Expert",append:"sel3"},
		button:{type:"submit", id:"objection-submit", text:"Submit", append:"form", funct:function(){document.getElementById("objection-      submit").addEventListener("click",function(event){alert("Name: "+document.getElementById('objection-name').value+"\n"+"Last name: "+document.getElementById('objection-lastname').value+"\n"+"Phone number: "+document.getElementById('objection-phone').value+"\n"+"Marital status: "+document.getElementById('objection-marital').value+"\n"+"Gender: "+document.getElementById('objection-gender-box').value+"\n"+"Company: "+document.getElementById('objection-company').value+"\n"+"Job title: "+document.getElementById('objection-title').value+"\n"+"Username: "+document.getElementById('objection-username').value+"\n"+"Password: "+document.getElementById('objection-password').value+"\n"+"Account type: "+document.getElementById('objection-type').value);});}}
	}

	// define actual tag to create
	// used to define tagnames which should be replaced by another
	// <current tagname>:<new tagname>
	Objection.define({
		p1_p2_p3_p4_p5_p6_p7:"p", 
		radegast:"h1", 
		div1_div2_div3:"div",h11_h12_h13:"h1", 
		inp1_inp2_inp3_inp4_inp5_inp6_inp7:"input", 
		sel1_sel2_sel3:"select", 
		op0_op1_op2_op3_op4_op5_op6_op7_op8_op9_op10_op11:"option"
	});

	// build elements from object
	// will build elements from object
	Objection.create(object);
```
