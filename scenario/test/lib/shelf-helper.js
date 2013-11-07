'use strict';
(function() {
//  var protractor = require('protractor');
  var elementsVersion = ['#%RAML 0.8'];
//  Root Level
  var elementsRootLevel = ['title','version','schemas','baseUri','mediaType','protocols', 'documentation',
  'baseUriParameters','securitySchemes','securedBy','New resource','traits','resourceTypes'];
  var elementsRootLevelRoot = ['title','version','schemas','baseUri','mediaType','protocols'];
  var elementsRootLevelDocs = ['documentation'];
  var elementsRootLevelParameters = ['baseUriParameters'];
  var elementsRootLevelSecurity = ['securitySchemes', 'securedBy'];
  var elementsRootLevelResources = ['New resource'];
  var elementsRootLevelTraitsAndTypes = [ 'traits', 'resourceTypes'];
//  Resource level
  var elementsResourceLevel = ['displayName','get','post','put','delete','head','patch','options','trace', 'connect','uriParameters','baseUriParameters','securedBy','New resource','is', 'type'];
  var elementsResourceLevelDocs = ['displayName'];
  var elementsResourceLevelMethods = ['get','post','put','delete','head','patch','options','trace', 'connect'];
  var elementsResourceLevelParameters = ['uriParameters','baseUriParameters'];
  var elementsResourceLevelSecurity = ['securedBy'];
  var elementsResourceLevelResources = ['New resource'];
  var elementsResourceLevelTraitsAndTypes = ['is', 'type'];
// Method level
  var groupsForMethods = 7;
  var elemMethodLevel = ['protocols','description','baseUriParameters','headers','queryParameters','responses','securedBy','is','body'];
  var elemMethodLevelRoot = ['protocols'];
  var elemMethodLevelDocs = ['description'];
  var elemMethodLevelParameters = ['baseUriParameters','headers','queryParameters'];
  var elemMethodLevelResponses = ['responses'];
  var elemMethodLevelSecurity = ['securedBy'];
  var elemMethodLevelTraitsAndTypes = ['is'];
  var elemMethodLevelBody = ['body'];

//Named Parameter
  var elemNamedParametersLevel = ['displayName', 'description', 'example', 'type','enum', 'pattern', 'minLength', 'maxLength', 'maximum','minimum','required','default'];
  var elemNamedParametersLevelDocs = ['displayName', 'description', 'example'];
  var elemNamedParametersLevelParameters = ['type','enum', 'pattern', 'minLength', 'maxLength', 'maximum','minimum','required','default'];

//Root
  global.shelfGetElementsRootLevel = function(){
    return elementsRootLevel;
  };
  global.shelfGetElementsRootLevelRoot = function(){
    return elementsRootLevelRoot;
  };
  global.shelfGetElementsRootLevelDocs = function(){
    return elementsRootLevelDocs;
  };
  global.shelfGetElementsRootLevelParameters = function(){
    return elementsRootLevelParameters;
  };
  global.shelfGetElementsRootLevelSecurity = function(){
    return elementsRootLevelSecurity;
  };
  global.shelfGetElementsRootLevelResources = function(){
    return elementsRootLevelResources;
  };
  global.shelfGetElementsRootLevelTraitsAndTypes = function(){
    return elementsRootLevelTraitsAndTypes;
  };
//  Resource
  global.shelfGetElementsResourceLevel = function(){
    return elementsResourceLevel;
  };
  global.shelfGetElementsResourceLevelDocs = function(){
    return elementsResourceLevelDocs;
  };
  global.shelfGetElementsResourceLevelMethods = function(){
    return elementsResourceLevelMethods;
  };
  global.shelfGetElementsResourceLevelParameters = function(){
    return elementsResourceLevelParameters;
  };
  global.shelfGetElementsResourceLevelSecurity = function(){
    return elementsResourceLevelSecurity;
  };
  global.shelfGetElementsResourceLevelResources = function(){
    return elementsResourceLevelResources;
  };
  global.shelfGetElementsResourceLevelTraitsAndTypes = function(){
    return elementsResourceLevelTraitsAndTypes;
  };
//  Methods
  global.shelfGetCantGroupsForMEthods = function(){
    return groupsForMethods;
  };
  global.getelemForMethods = function(){
    return elemForMethods;
  };
  global.shelfGetElemMethodLevel = function(){
    return elemMethodLevel;
  };
  global.shelfGetElemMethodLevelRoot = function(){
    return elemMethodLevelRoot;
  };
  global.shelfGetElemMethodLevelDocs = function(){
    return elemMethodLevelDocs;
  };
  global.shelfGetElemMethodLevelParameters = function(){
    return elemMethodLevelParameters;
  };
  global.shelfGetElemMethodLevelResponses = function(){
    return elemMethodLevelResponses;
  };
  global.shelfGetElemMethodLevelSecurity = function(){
    return elemMethodLevelSecurity;
  };
  global.shelfGetElemMethodLevelTraitsAndTypes = function(){
    return elemMethodLevelTraitsAndTypes;
  };
  global.shelfGetElemMethodLevelBody = function(){
    return elemMethodLevelBody;
  };

// Named Parameters
  global.shelfGetElemNamedParametersLevel = function(){
    return elemNamedParametersLevel;
  };
  global.shelfGetElemNamedParametersLevelDocs = function(){
    return elemNamedParametersLevelDocs;
  };
  global.shelfGetElemNamedParametersLevelParameters = function(){
    return elemNamedParametersLevelParameters;
  };


  global.shelfGetElementsVersion = function(){
    return elementsVersion;
  };
  global.shelfGetElementsFromShelf = function () {
    return browser.findElements(by.css('[ng-repeat=\'item in section.items\'] span'));
  };
  global.shelfGetElementsFromShelfByGroup = function (group) {
    return browser.findElements(by.css('.'+group+' ul li span'));
  };

  global.ShelfGetSectionsFromShelf = function(){
    return browser.findElements(by.css('[role=\'section\']'));
  };

  global.itemsInSection = function(){
    return '[role=\'items\'] li span';
  };
})();
