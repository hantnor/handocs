"use strict";(self.webpackChunkhanscreations=self.webpackChunkhanscreations||[]).push([[23],{270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var i=n(4848),r=n(8453);const s={sidebar_position:3},o=void 0,a={id:"Face Tracking/Patcher",title:"Patcher",description:"Important",source:"@site/docs/Face Tracking/Patcher.md",sourceDirName:"Face Tracking",slug:"/Face Tracking/Patcher",permalink:"/HanDocs/docs/Face Tracking/Patcher",draft:!1,unlisted:!1,editUrl:"https://github.com/hantnor/handocs/docs/Face Tracking/Patcher.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/HanDocs/docs/Face Tracking/Getting Started"},next:{title:"Han's Retreat",permalink:"/HanDocs/docs/category/hans-retreat"}},c={},h=[{value:"Important",id:"important",level:2},{value:"Note",id:"note",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"important",children:"Important"}),"\n",(0,i.jsxs)(t.p,{children:["To access and download the latest version of the patcher, it is available ",(0,i.jsx)(t.a,{href:"https://github.com/hantnor/FTPatcher",children:"here"}),". Just download it as a ZIP file!"]}),"\n",(0,i.jsx)(t.h1,{id:"face-tracking-patcher",children:"Face Tracking Patcher"}),"\n",(0,i.jsxs)(t.p,{children:["Batch files, showing proof of purchase, and TOS concerns are a thing of the past. With ",(0,i.jsx)(t.strong,{children:"FTPatcher"}),", you can include an in-editor pop-up window to easily patch edits to your model! No Unity experience necessary for the recipient."]}),"\n",(0,i.jsx)(t.h3,{id:"note",children:"Note"}),"\n",(0,i.jsxs)(t.p,{children:["This is listed primarily for the use of ",(0,i.jsx)(t.strong,{children:"face tracking"}),", but this can be used for any model edits, such as body modification, revamps, and other mesh edits. Use this to your heart's content. :)"]}),"\n",(0,i.jsx)(t.h1,{id:"set-up",children:"Set-up:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a patch file using ",(0,i.jsx)(t.strong,{children:"hdiffz.exe"}),": ",(0,i.jsx)(t.a,{href:"https://github.com/sisong/HDiffPatch",children:"https://github.com/sisong/HDiffPatch"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["In a command prompt, use ",(0,i.jsx)(t.code,{children:"cd"})," to route to the directory where ",(0,i.jsx)(t.strong,{children:"hdiffz.exe"})," is located."]}),"\n",(0,i.jsxs)(t.li,{children:["Run the following line in a command line:\r\n",(0,i.jsx)(t.code,{children:'hdiffz.exe "NONFTOriginal.fbx" "FTEdited.fbx" patch.bin'})]}),"\n",(0,i.jsxs)(t.li,{children:["Both FBX files should be in the same directory as the hdiffz.exe executable.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The 'NONFTOriginal.FBX' file is the original FBX that was edited to have the FT blendshapes."}),"\n",(0,i.jsx)(t.li,{children:"The 'FTEdited.FBX' file the edited FBX that has the FT blendshapes. This is the FBX that will be produced when the original FBX is patched."}),"\n",(0,i.jsx)(t.li,{children:"'patch.bin' is the file path to the patch binary."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Set up the package folder for the model you're making the patch for.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["In this template, the directory is ",(0,i.jsx)(t.code,{children:"FTPatcher/FTRootFolder/"}),". You can change this if you'd like. ",(0,i.jsx)(t.strong,{children:"Make sure you update Orchestrator.cs with the proper directory changes!"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Configure the Orchestrator script to work with the FBX. You can search for '@Config' in the file to find all the places where things need to be adjusted for the model."}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);