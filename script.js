console.log('====================================');
console.log("Rhea's Assignment");
console.log('====================================');

var functionType = "length";

var initialLoad = function(){

  // var url = new URLSearchParams(window.location.search);
  // functionType = url.get("type");

  if(functionType === null){
    functionType = "length";
  }
  document.querySelector("button").classList.remove("active");
  document.querySelector(`button.${functionType}`).classList.add("active");

  // Render the UI for the tab
  renderUI();

};

var renderUI = function(){

  var htmlField = "";
  var placeholderArr = [];
  var fieldCount = 0;
  var fieldNameArr = [];

  switch (functionType) {
    case "length": {

      fieldCount = 1;
      fieldNameArr = ["field1"];
      placeholderArr = ["Enter text here"];
      break;
    }
    
    case  "search" : {

      fieldCount = 2;
      fieldNameArr = ["field1", "field2"];
      placeholderArr = ["Enter text here", "Enter text to search"];

      break;
      
    }
    case  "replace" : {

      fieldCount = 3;
      fieldNameArr = ["field1", "field2", "field3"];
      placeholderArr = ["Enter text here", "Enter text to search", "Enter text to replace"];

      break;
    }
    case  "uppercase" : {

      fieldCount = 1;
      fieldNameArr = ["field1"];
      placeholderArr = ["Enter text here"];
      break;

    }
    case  "lowercase" : {

      fieldCount = 1;
      fieldNameArr = ["field1"];
      placeholderArr = ["Enter text here"];
      break;
      
    }

    case "concat" : {

      fieldCount = 2;
      fieldNameArr = ["field1", "field2"];
      placeholderArr = ["Enter 1st string here", "Enter 2nd string here"];
      break;
    }

    case "extract" : {

      fieldCount = 3;
      fieldNameArr = ["field1", "field2", "field3"];
      placeholderArr = ["Enter string here", "Enter start index", "Enter end index"];

      break;

    }

    case "charAt" : {

      fieldCount = 2;
      fieldNameArr = ["field1", "field2"];
      placeholderArr = ["Enter text here", "Enter the searchable index"];
    }

    default:
      break;
  }

  for(var index = 1; index <= fieldCount; index++){
    var placeholder = typeof placeholderArr[index-1] === "undefined" ? "Enter text here" : placeholderArr[index-1];

    htmlField += `<input name="${fieldNameArr[index-1]}" class="form-field" id="inputField" placeholder="${placeholder}"/>`;

  }

  var playground = document.getElementById("playground");
  playground.innerHTML = htmlField;

}

var setType = function(evt, type){

  functionType = type;

  // change the tab
  if(!evt.target.classList.contains("active")){
    // remove previous active tab

    var buttons = document.querySelectorAll("button");
    var buttonsArrLength = buttons.length;

    for(var i=0; i < buttonsArrLength ; i++){
      buttons[i].classList.remove("active");
    }

    // document.querySelector("button").classList.remove("active");
    document.querySelector(`button.${functionType}`).classList.add("active");
    renderUI();
  }

};

var checkResult = function(){
  /*
    Function to perform String functions
  */

  switch (functionType) {
    case "length": {

      var value = document.getElementsByName("field1");
      document.getElementById("resultTxt").innerText = value[0].value.length;

      break;
    }
    
    case  "search" : {

      var value = document.getElementsByName("field1")[0].value;
      var searchString = document.getElementsByName("field2")[0].value;

      if(value.indexOf(searchString) > -1){

        document.getElementById("resultTxt").innerText = "Found";
      } else{

        document.getElementById("resultTxt").innerText = "Not Found";
      }
      break;
    }

    case  "replace" : {

      var value = document.getElementsByName("field1")[0].value;
      var stringToReplace = document.getElementsByName("field2")[0].value;
      var replaceString = document.getElementsByName("field3")[0].value;

      var replaceRegExp = new RegExp(stringToReplace, "g");
      var replacedString = value.replace(replaceRegExp, replaceString);
      document.getElementById("resultTxt").innerText = replacedString;

      break;
    }
    case  "uppercase" : {

      var value = document.getElementsByName("field1");
      document.getElementById("resultTxt").innerText = value[0].value.toUpperCase();
      break;

    }
    case  "lowercase" : {

      var value = document.getElementsByName("field1");
      document.getElementById("resultTxt").innerText = value[0].value.toLowerCase();
      break;

    }

    case "concat" : {

      var value = document.getElementsByName("field1");
      var value1 = document.getElementsByName("field2");
      var concated = value[0].value + value1[0].value;
      document.getElementById("resultTxt").innerText = concated;
      break;

    }

    case "extract" : {

      var value = document.getElementsByName("field1")[0].value;
      var fromChar = document.getElementsByName("field2")[0].value;
      var toChar = document.getElementsByName("field3")[0].value;

      if(isNaN(parseInt(fromChar)) || isNaN(parseInt(toChar))){
        
        document.getElementById("resultTxt").innerText = "Index should be a number only.";
        break;

      } else{

        var extractedText = value.substring(fromChar, toChar);
        document.getElementById("resultTxt").innerText = extractedText;
      }

      break;
    }

    case "charAt" : {
      var value = document.getElementsByName("field1")[0].value;
      var charIndex = document.getElementsByName("field2")[0].value;

      document.getElementById("resultTxt").innerText = value.charAt(charIndex);

      break;
    }

    default:
      break;
  }

};