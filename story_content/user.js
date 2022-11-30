function ExecuteScript(strId)
{
  switch (strId)
  {
      case "69EaHFd0Xcp":
        Script1();
        break;
      case "62iBRlcps9v":
        Script2();
        break;
      case "6kZ1t423T2B":
        Script3();
        break;
      case "5ziSnYoDB63":
        Script4();
        break;
      case "6NxJlkq9gVy":
        Script5();
        break;
      case "6iSeCnV2bMi":
        Script6();
        break;
      case "5Xk7BFHvOi8":
        Script7();
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
  Listen();
English();

}

function Script5()
{
  Say();
}

function Script6()
{
  // getting variables from SL for the dimenssions scaleX and scaleY. Both scaleX and scaleY are SL numeric variables.

let player = GetPlayer();

// connecting SL's object  to gsap through accessiblity text

var QBox = document.querySelector("[data-acc-text='QBox']");

// applying gsap animation functions ob the object

gsap.to( QBox , { duration:1.0, scale: 1.1, ease: "elastic.out(1.5, 0.15)" });

}

function Script7()
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

