"use strict";(self.webpackChunkhenhen_1227_docs=self.webpackChunkhenhen_1227_docs||[]).push([[110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=o,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"Hardware Setup"},i="Hardware Setup",l={unversionedId:"hello-world/hardware-setup",id:"hello-world/hardware-setup",title:"Hardware Setup",description:"Setting up the hardware correctly is crucial to ensuring a seamless connection between your Arduino device and the iOS app via Bluetooth. This guide provides a step-by-step walkthrough to ensure the physical components are properly connected.",source:"@site/docs/hello-world/hardware-setup.md",sourceDirName:"hello-world",slug:"/hello-world/hardware-setup",permalink:"/docs/hello-world/hardware-setup",draft:!1,editUrl:"https://github.com/henhen1227/henhen1227-docs/edit/main/docs/hello-world/hardware-setup.md",tags:[],version:"current",frontMatter:{title:"Hardware Setup"},sidebar:"bsDocsSidebar",previous:{title:"Overview of the Connection Process",permalink:"/docs/hello-world/connection-overview"},next:{title:"Software Configuration",permalink:"/docs/hello-world/software-setup"}},p={},s=[{value:"Understanding the Rx and Tx Pins",id:"understanding-the-rx-and-tx-pins",level:2},{value:"Connecting Your HM10 Bluetooth Chip",id:"connecting-your-hm10-bluetooth-chip",level:2},{value:"A Note on Built-In Ports",id:"a-note-on-built-in-ports",level:2},{value:"Wrapping Up",id:"wrapping-up",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hardware-setup"},"Hardware Setup"),(0,o.kt)("p",null,"Setting up the hardware correctly is crucial to ensuring a seamless connection between your Arduino device and the iOS app via Bluetooth. This guide provides a step-by-step walkthrough to ensure the physical components are properly connected."),(0,o.kt)("h2",{id:"understanding-the-rx-and-tx-pins"},"Understanding the Rx and Tx Pins"),(0,o.kt)("p",null,"Rx and Tx stand for ",(0,o.kt)("strong",{parentName:"p"},"Receive")," and ",(0,o.kt)("strong",{parentName:"p"},"Transmit"),", respectively. These pins play a crucial role in serial communication:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Rx (Receive)"),': This pin is used to receive data. For instance, if you\'re getting data from a Bluetooth module, it will be "received" on the Rx pin of your Arduino.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Tx (Transmit)"),': As the name implies, this pin is used to send data. If your Arduino needs to send data to a Bluetooth module, it\'ll "transmit" this data from the Tx pin.'))),(0,o.kt)("p",null,'The magic happens when data flows between these pins: your Arduino\'s Tx pin will "speak" to the Rx pin on your Bluetooth chip, and vice versa.'),(0,o.kt)("img",{src:"/img/HM10diagram.png",alt:"drawing",width:"600"}),(0,o.kt)("h2",{id:"connecting-your-hm10-bluetooth-chip"},"Connecting Your HM10 Bluetooth Chip"),(0,o.kt)("p",null,"Follow these steps to connect your HM10 Bluetooth chip to the Arduino:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Identify the Rx and Tx pins on your Arduino"),": Check the labeling on your Arduino board. The Rx and Tx pins are often labeled as 0 and 1, respectively.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Connect the Rx pin of your Bluetooth module")," to the Tx pin (1) of your Arduino.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Connect the Tx pin of your Bluetooth module")," to the Rx pin (0) of your Arduino."))),(0,o.kt)("p",null,"By connecting in this crisscross manner, you ensure the transmit pin of one device talks to the receive pin of the other, facilitating a two-way communication."),(0,o.kt)("admonition",{title:"Important",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Always double-check to ensure you've connected the pins to the correct ports. Incorrect port connections can lead to malfunctions or even damage your devices.")),(0,o.kt)("h2",{id:"a-note-on-built-in-ports"},"A Note on Built-In Ports"),(0,o.kt)("p",null,"Most Arduino boards have built-in Rx and Tx ports, but these are often utilized by the board for uploading code and serial monitor communication. Thus, using these for Bluetooth communication can cause conflicts, especially when uploading new sketches to your board."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Reference/softwareSerial"},"SoftwareSerial library")," comes to the rescue! With this library, you can use almost any digital pins as Rx and Tx, avoiding conflicts with the built-in ports.")),(0,o.kt)("h2",{id:"wrapping-up"},"Wrapping Up"),(0,o.kt)("p",null,"With your Bluetooth chip correctly connected to your Arduino, you're all set on the hardware front. Remember, a robust connection is foundational to everything else we'll build upon, so always ensure your wiring is accurate and secure."))}d.isMDXComponent=!0}}]);