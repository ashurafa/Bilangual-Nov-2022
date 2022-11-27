function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aF8UseC5I9":
        Script1();
        break;
      case "6Ej1kkQrqzw":
        Script2();
        break;
      case "6I3mZ3WS1d3":
        Script3();
        break;
      case "6EdUt43NVwE":
        Script4();
        break;
      case "5naTflRl8dF":
        Script5();
        break;
      case "5hkew9sp0Z4":
        Script6();
        break;
      case "5VBCAZWRDnj":
        Script7();
        break;
      case "5sIgl5L21mW":
        Script8();
        break;
      case "6n0CVLOlwch":
        Script9();
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
  Listen();


}

function Script6()
{
  // Say();
}

function Script7()
{
  Listen();
English();

}

function Script8()
{
  Say();
}

function Script9()
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

