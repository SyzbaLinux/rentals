import{T as n,o as u,f as d,b as e,u as a,w as o,F as p,Z as c,a as s,i as f,m as _}from"./app-DldXoq_Q.js";import{D as w}from"./Default-BWgwlX3Z.js";import{V,a as l,b as g}from"./VCard-BHghnwZ2.js";import{V as h}from"./VTextField-D2cyt8tE.js";import{V as b}from"./VBtn-ByHYvy1i.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VMain-yQtLyFq_.js";import"./VAvatar-DWF3smML.js";import"./easing-DY7PVvcf.js";import"./form-tLjcL1V8.js";import"./forwardRefs-C-GTDzx5.js";const x=s("h1",null,"Forgot Password?",-1),y=s("hr",{class:"my-2"},null,-1),F=s("p",null," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),k=s("br",null,null,-1),L={__name:"ForgotPassword",props:{status:String},setup(B){const t=n({email:""}),i=()=>{t.post(route("password.email"))};return(C,r)=>(u(),d(p,null,[e(a(c),{title:"Forgot Password"}),e(w,null,{default:o(()=>[s("form",{onSubmit:_(i,["prevent"])},[e(V,{class:"glass mx-auto","max-width":"500"},{default:o(()=>[e(l,{class:"text-center mt-3"},{default:o(()=>[x,y,F]),_:1}),e(l,{class:"mt-5"},{default:o(()=>[e(h,{id:"email",modelValue:a(t).email,"onUpdate:modelValue":r[0]||(r[0]=m=>a(t).email=m),type:"email",label:"Enter your Email",required:"",autofocus:"",autocomplete:"username","error-messages":a(t).errors.email},null,8,["modelValue","error-messages"])]),_:1}),e(g,null,{default:o(()=>[e(b,{block:"",variant:"flat",size:"large",type:"submit",loading:a(t).processing},{default:o(()=>[f(" Email Password Reset Link ")]),_:1},8,["loading"])]),_:1}),k]),_:1})],32)]),_:1})],64))}};export{L as default};
