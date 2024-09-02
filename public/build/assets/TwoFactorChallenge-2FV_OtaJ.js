import{g as f,T as b,o as a,f as c,b as o,u as t,w as r,F as l,al as h,a as u,i as n,c as v,ah as _,G as C}from"./app-Cm5KmEqX.js";import{D as w}from"./Default-CpAAfzmk.js";import{V as T,b as i}from"./VCard-C66p_jg3.js";import{V as g}from"./VTextField-BIvn1JiS.js";import{V}from"./VBtn-CajXhIOF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VMain-D-23GY-i.js";import"./VAvatar-CkwCmLTX.js";import"./easing-DY7PVvcf.js";import"./form-BjvNdLud.js";import"./forwardRefs-C-GTDzx5.js";const B=u("h1",null," Enter OTP ",-1),F=u("hr",{class:"my-2"},null,-1),I={class:"mb-4 text-sm text-gray-600"},j={__name:"TwoFactorChallenge",setup(U){const s=f(!1),e=b({code:"",recovery_code:""}),y=f(null),p=f(null),k=async()=>{s.value^=!0,await C(),s.value?(y.value.focus(),e.code=""):(p.value.focus(),e.recovery_code="")},x=()=>{e.post(route("two-factor.login"))};return(N,d)=>(a(),c(l,null,[o(t(h),{title:"Two-factor Confirmation"}),o(w,null,{default:r(()=>[u("form",{onSubmit:_(x,["prevent"])},[o(T,{class:"glass mx-auto","max-width":"500"},{default:r(()=>[o(i,{class:"text-center mt-3"},{default:r(()=>[B,F,u("div",I,[s.value?(a(),c(l,{key:1},[n(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(a(),c(l,{key:0},[n(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))])]),_:1}),s.value?(a(),v(i,{key:1},{default:r(()=>[o(g,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:y,modelValue:t(e).recovery_code,"onUpdate:modelValue":d[1]||(d[1]=m=>t(e).recovery_code=m),type:"text",label:"Recovery Code",autocomplete:"one-time-code","error-messages":t(e).errors.recovery_code},null,8,["modelValue","error-messages"])]),_:1})):(a(),v(i,{key:0},{default:r(()=>[o(g,{id:"code",ref_key:"codeInput",ref:p,modelValue:t(e).code,"onUpdate:modelValue":d[0]||(d[0]=m=>t(e).code=m),type:"text",inputmode:"numeric",label:"Code",autofocus:"",autocomplete:"one-time-code","error-messages":t(e).errors.code},null,8,["modelValue","error-messages"])]),_:1})),o(i,{class:"mt-n3"},{default:r(()=>[u("div",null,[o(V,{size:"large",block:"",loading:t(e).processing},{default:r(()=>[n(" Log in ")]),_:1},8,["loading"]),o(V,{variant:"text",block:"",type:"button",class:"my-3",onClick:_(k,["prevent"])},{default:r(()=>[s.value?(a(),c(l,{key:1},[n(" Use an authentication code ")],64)):(a(),c(l,{key:0},[n(" Use a recovery code ")],64))]),_:1})])]),_:1})]),_:1})],32)]),_:1})],64))}};export{j as default};
