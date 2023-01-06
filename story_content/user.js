function ExecuteScript(strId)
{
  switch (strId)
  {
      case "69xilY5Pq6M":
        Script1();
        break;
      case "6b2pxhDW6sM":
        Script2();
        break;
      case "65RdEk2eiQE":
        Script3();
        break;
      case "6n70dqcRRmf":
        Script4();
        break;
      case "5zJ5I38SCeK":
        Script5();
        break;
      case "61He8sTNpTp":
        Script6();
        break;
      case "61amHeOrDYH":
        Script7();
        break;
      case "6r6jzSnp0jk":
        Script8();
        break;
      case "5i4dJvg2gCl":
        Script9();
        break;
      case "6daHzOqAFsT":
        Script10();
        break;
      case "5jElSIF5xzu":
        Script11();
        break;
      case "6AApLO6w5rD":
        Script12();
        break;
      case "6SVBrHtFZel":
        Script13();
        break;
      case "6X9LztM0eaW":
        Script14();
        break;
      case "6eeEyFdh58P":
        Script15();
        break;
      case "6bQYAYs0WDS":
        Script16();
        break;
      case "6k4FxM9K2kT":
        Script17();
        break;
      case "6ld3JxY8kU8":
        Script18();
        break;
      case "5zSAcLJNhD6":
        Script19();
        break;
  }
}

function Script1()
{
  Listen();


}

function Script2()
{
  // Say();
}

function Script3()
{
  // getting variables from SL for the dimenssions scaleX and scaleY. Both scaleX and scaleY are SL numeric variables.

let player = GetPlayer();

// connecting SL's object  to gsap through accessiblity text

var QBox = document.querySelector("[data-acc-text='QBox']");

// applying gsap animation functions ob the object

gsap.to( QBox , { duration:1.0, scale: 1.1, ease: "elastic.out(1.5, 0.15)" });

}

function Script4()
{
  // Tranfer the SL word to the Google Sheet (https://docs.google.com/spreadsheets/d/1UXND96QQ9Gey5qSGB05MzezJhjXw6tgNwF0YG1RCgG4/edit#gid=0)
 

// Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwGFf464IxSkI6Yo2j6mGuHmRwOF1he3ipp6DzfDheUCPslAnm5YIIhLa1MahWlTLN5wQ/exec";
const player = GetPlayer();
var WordA = player.GetVar("WordA"); // Replace "UserFeedback" with your Storyline Variable.
var WordQ = player.GetVar("WordQ"); 

var Collected = WordA + "  " + WordQ +" ⓪";

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: Collected})
});
}

function Script5()
{
  // Tranfer the SL word to the Google Sheet (https://docs.google.com/spreadsheets/d/1UXND96QQ9Gey5qSGB05MzezJhjXw6tgNwF0YG1RCgG4/edit#gid=0)

 

// Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwGFf464IxSkI6Yo2j6mGuHmRwOF1he3ipp6DzfDheUCPslAnm5YIIhLa1MahWlTLN5wQ/exec";
const player = GetPlayer();
var WordA = player.GetVar("WordA"); // Replace "UserFeedback" with your Storyline Variable.
var WordQ = player.GetVar("WordQ"); 

var Collected = WordA + "  " + WordQ +" ①";

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: Collected})
});
}

function Script6()
{
  Listen();
English();

}

function Script7()
{
  Say();
}

function Script8()
{
  // getting variables from SL for the dimenssions scaleX and scaleY. Both scaleX and scaleY are SL numeric variables.

let player = GetPlayer();

// connecting SL's object  to gsap through accessiblity text

var QBox = document.querySelector("[data-acc-text='QBox']");

// applying gsap animation functions ob the object

gsap.to( QBox , { duration:1.0, scale: 1.1, ease: "elastic.out(1.5, 0.15)" });

}

function Script9()
{
  // Tranfer the SL word to the Google Sheet (https://docs.google.com/spreadsheets/d/1UXND96QQ9Gey5qSGB05MzezJhjXw6tgNwF0YG1RCgG4/edit#gid=0)
 

// Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwGFf464IxSkI6Yo2j6mGuHmRwOF1he3ipp6DzfDheUCPslAnm5YIIhLa1MahWlTLN5wQ/exec";
const player = GetPlayer();
var WordA = player.GetVar("WordA"); // Replace "UserFeedback" with your Storyline Variable.
var WordQ = player.GetVar("WordQ"); 

var Collected = WordA + "  " + WordQ +" ⓪";

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: Collected})
});
}

function Script10()
{
  // Tranfer the SL word to the Google Sheet (https://docs.google.com/spreadsheets/d/1UXND96QQ9Gey5qSGB05MzezJhjXw6tgNwF0YG1RCgG4/edit#gid=0)

 

// Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbwGFf464IxSkI6Yo2j6mGuHmRwOF1he3ipp6DzfDheUCPslAnm5YIIhLa1MahWlTLN5wQ/exec";
const player = GetPlayer();
var WordA = player.GetVar("WordA"); // Replace "UserFeedback" with your Storyline Variable.
var WordQ = player.GetVar("WordQ"); 

var Collected = WordA + "  " + WordQ +" ①";

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: Collected})
});
}

function Script11()
{
  
var player = GetPlayer();
var d = new Date();
var datestring =  (d.getMonth()+1) + "-" +  d.getDate() + "-" + d.getFullYear();
player.SetVar ("Date",datestring);
}

function Script12()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/1/1.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script13()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/1/1.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script14()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/2/2.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script15()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/2/2.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script16()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/3/3.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script17()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/3/3.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script18()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/4/4.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

function Script19()
{
  // iSL1 to load eJS1 my_functions.js during project start (a simlar iSL2 loads eJS2)
// SL Trigger to call External JS file called my_functions.js
// Initially this js file is in the developer folde for the project under resources.
// To link the js to SL, use Web Object insert pointing out to ....
// Then publish the project to create the Contents 
// After that adjust the path of the newly copied js file in the below line

 // alert("Slide 1");

var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');


// ----------------------

script.src = 'story_content/WebObjects/4/4.js';

// ----------------------
                  
script.type = 'text/javascript';

head.appendChild(script)

// alert("Slide 2");
}

