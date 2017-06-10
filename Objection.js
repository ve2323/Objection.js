var Objection = {
	elements: {},
	definition: {},
	clean: function(){destroy(selectionNames());},
	define: function(object){for(var item in object){this.definition[item] = object[item];}},
	create: function(object){
		var initObj = {};
		for(var key in object){
			var key = (exist(this.definition[key])) ? this.definition[key] : key; initObj[key]=key;
		}
		Generator.init(initObj);

		for(var item in object){
			var element;
			if(object[item].append){
				if(object[item].append in this.elements){
					object[item].append = this.elements[object[item].append];
				}
			}
			if(exist(this.definition[item])) {
				element = window[this.definition[item]](object[item]).element;
			}else{
				element = window[item](object[item]).element;
			}this.elements[item] = element;
		}
	}
};