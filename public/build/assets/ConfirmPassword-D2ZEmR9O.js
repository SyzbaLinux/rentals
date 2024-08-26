import{o as l,f as d,a as e,r as c,c as u,w as r,u as a,aj as _,T as p,g as w,b as o,F as h,ak as g,n as x,i as v,ac as $}from"./app-D59vl0kx.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as y,a as C}from"./TextInput-aY0dXEFb.js";import{_ as k}from"./InputLabel-Dm1SZvaF.js";import{_ as V}from"./PrimaryButton-CXyLGg03.js";const B={},F={class:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},A={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"};function j(t,s){return l(),d("div",F,[e("div",null,[c(t.$slots,"logo")]),e("div",A,[c(t.$slots,"default")])])}const z=b(B,[["render",j]]),M=e("svg",{class:"w-16 h-16",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"}),e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"})],-1),N={__name:"AuthenticationCardLogo",setup(t){return(s,n)=>(l(),u(a(_),{href:"/"},{default:r(()=>[M]),_:1}))}},P=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),S={class:"flex justify-end mt-4"},Z={__name:"ConfirmPassword",setup(t){const s=p({password:""}),n=w(null),m=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),n.value.focus()}})};return(T,i)=>(l(),d(h,null,[o(a(g),{title:"Secure Area"}),o(z,null,{logo:r(()=>[o(N)]),default:r(()=>[P,e("form",{onSubmit:$(m,["prevent"])},[e("div",null,[o(k,{for:"password",value:"Password"}),o(y,{id:"password",ref_key:"passwordInput",ref:n,modelValue:a(s).password,"onUpdate:modelValue":i[0]||(i[0]=f=>a(s).password=f),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(C,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",S,[o(V,{class:x(["ms-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:r(()=>[v(" Confirm ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{Z as default};
