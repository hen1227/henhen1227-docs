"use strict";(self.webpackChunkhenhen_1227_docs=self.webpackChunkhenhen_1227_docs||[]).push([[127],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return o?i.createElement(h,a(a({ref:t},p),{},{components:o})):i.createElement(h,a({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<r;c++)a[c]=o[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5192:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=o(7462),n=(o(7294),o(3905));const r={title:"Compatible Devices",sidebar_position:2},a="Hardware Introduction",l={unversionedId:"compatible-devices",id:"compatible-devices",title:"Compatible Devices",description:"When working with Bluetooth communications, especially in embedded environments like with Arduino, the hardware forms the foundation of all operations. This introduction provides a comprehensive look into how hardware connections are made and lists some of the common devices compatible with our app/library.",source:"@site/docs/compatible-devices.md",sourceDirName:".",slug:"/compatible-devices",permalink:"/docs/compatible-devices",draft:!1,editUrl:"https://github.com/henhen1227/henhen1227-docs/edit/main/docs/compatible-devices.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Compatible Devices",sidebar_position:2},sidebar:"bsDocsSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Hello world",permalink:"/docs/category/hello-world"}},s={},c=[{value:"Connection Basics",id:"connection-basics",level:2},{value:"SoftwareSerial Library",id:"softwareserial-library",level:2},{value:"Compatible Devices",id:"compatible-devices",level:2},{value:"Compatible Bluetooth Modules",id:"compatible-bluetooth-modules",level:3},{value:"NOT Compatible Bluetooth Modules",id:"not-compatible-bluetooth-modules",level:3},{value:"Compatible Microcontrollers",id:"compatible-microcontrollers",level:3},{value:"Wrapping Up",id:"wrapping-up",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hardware-introduction"},"Hardware Introduction"),(0,n.kt)("p",null,"When working with Bluetooth communications, especially in embedded environments like with Arduino, the hardware forms the foundation of all operations. This introduction provides a comprehensive look into how hardware connections are made and lists some of the common devices compatible with our app/library."),(0,n.kt)("h2",{id:"connection-basics"},"Connection Basics"),(0,n.kt)("p",null,"Every microcontroller is built with pins designated for specific functions. Among these are the Rx (Receive) and Tx (Transmit) pins, which play a pivotal role in serial communication. The essence of these pins is to facilitate a two-way communication channel where:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rx (Receive)"),": This pin is designed to receive data. It listens for incoming signals/data from other devices."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tx (Transmit)"),": As the name suggests, this pin sends out data/signals to other devices.")),(0,n.kt)("p",null,"It's crucial to ensure that the Tx pin of one device connects to the Rx pin of another (and vice-versa) to ensure proper two-way communication."),(0,n.kt)("h2",{id:"softwareserial-library"},"SoftwareSerial Library"),(0,n.kt)("p",null,"In situations where the built-in Rx and Tx pins are either unavailable or are needed for other tasks, the SoftwareSerial library in Arduino comes to the rescue. This powerful library lets users designate any digital pins for serial communication, providing a lot of flexibility in hardware configurations. This means that if the default Rx/Tx pins are occupied, you can use SoftwareSerial to bypass this limitation."),(0,n.kt)("h2",{id:"compatible-devices"},"Compatible Devices"),(0,n.kt)("p",null,"While our documentation provides a list of devices known to be compatible with our app/library, it's essential to remember that this list is by no means exhaustive. As the tech landscape evolves and new devices emerge, some might be compatible, even if not explicitly listed."),(0,n.kt)("h3",{id:"compatible-bluetooth-modules"},"Compatible Bluetooth Modules"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note"),": This library probably works with a lot more bluetooth modules. The list below shows all the bluetooth modules that have been tested.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HM10"),": Easy to use bluetooth module. (approx. $12).")),(0,n.kt)("admonition",{title:"Important",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"The iOS app is only compatible with BLE (Bluetooth Low Energy) modules. This is due to the built-in technology in iOS devices.")),(0,n.kt)("h3",{id:"not-compatible-bluetooth-modules"},"NOT Compatible Bluetooth Modules"),(0,n.kt)("p",null,"The following bluetooth modules are a few examples of devices that are ",(0,n.kt)("strong",{parentName:"p"},"NOT")," compatible with the iOS app:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HC-05"),": This is a classic bluetooth module. It is not compatible with the iOS app because it is not BLE (Bluetooth Low Energy)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HC-06"),": This is a classic bluetooth module. It is not compatible with the iOS app because it is not BLE (Bluetooth Low Energy).")),(0,n.kt)("h3",{id:"compatible-microcontrollers"},"Compatible Microcontrollers"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note"),": This library works with almost all microcontrollers. The list below shows all the microcontrollers that have been tested. ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Teensy 3.1/3.2"),(0,n.kt)("li",{parentName:"ul"},"Arduino Uno"),(0,n.kt)("li",{parentName:"ul"},"Arduino Nano")),(0,n.kt)("p",null,"Always ensure you consult the respective device's datasheet or manual to confirm compatibility and to understand its specific connection requirements."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note"),": We encourage users to contribute and expand these lists. If you've successfully used our app/library with a device not listed, please let us know!")),(0,n.kt)("h2",{id:"wrapping-up"},"Wrapping Up"),(0,n.kt)("p",null,"Hardware configuration and compatibility form the backbone of any successful project in this domain. Ensure your connections are accurate, and always stay updated with the latest compatibility lists to make the most of our app/library."))}d.isMDXComponent=!0}}]);