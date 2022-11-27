function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rOyoyPErWD":
        Script1();
        break;
      case "64mNylFirew":
        Script2();
        break;
      case "5llkY1qb05j":
        Script3();
        break;
      case "6XteioYY5yN":
        Script4();
        break;
      case "6iz9pOxJ5Nu":
        Script5();
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
  Listen();
English();

}

function Script4()
{
  Say();
}

function Script5()
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

