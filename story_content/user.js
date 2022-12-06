function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5W64Q5TtZDB":
        Script1();
        break;
      case "5dQrjAf242B":
        Script2();
        break;
      case "5rhZZcR4dBL":
        Script3();
        break;
      case "6btrOXzwRee":
        Script4();
        break;
      case "6TWWp8MeuWw":
        Script5();
        break;
      case "62TSyl6eA5G":
        Script6();
        break;
      case "5YcyBSshmeb":
        Script7();
        break;
      case "6RWsBD4AoW4":
        Script8();
        break;
      case "65BNjNXwx12":
        Script9();
        break;
      case "5xj4yhqRv3I":
        Script10();
        break;
      case "6dzTQ3dAIFD":
        Script11();
        break;
      case "67a7CV6OQ1Z":
        Script12();
        break;
      case "6P072hxtobd":
        Script13();
        break;
      case "6II9amcN4Mh":
        Script14();
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

script.src = 'story_content/WebObjects/2/2.js';

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

