import{m as A,V as t}from"./VCheckboxBtn-EtWq9pbp.js";import{a as F,u as I,c as l}from"./VTextField-n3Xi_zP4.js";import{p as B,a1 as U,s as R,x as D,al as H,d as M,ag as N,b as u,H as r}from"./app-D59vl0kx.js";import{u as $}from"./VAvatar-D6Cdo2n2.js";const j=B({...F(),...U(A(),["inline"])},"VCheckbox"),G=R()({name:"VCheckbox",inheritAttrs:!1,props:j(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,d){let{attrs:c,slots:a}=d;const s=D(e,"modelValue"),{isFocused:n,focus:i,blur:m}=I(e),V=H(),p=M(()=>e.id||`checkbox-${V}`);return $(()=>{const[b,f]=N(c),v=l.filterProps(e),k=t.filterProps(e);return u(l,r({class:["v-checkbox",e.class]},b,v,{modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,id:p.value,focused:n.value,style:e.style}),{...a,default:o=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C,isValid:y}=o;return u(t,r(k,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},f,{error:y.value===!1,modelValue:s.value,"onUpdate:modelValue":g=>s.value=g,onFocus:i,onBlur:m}),a)}})}),{}}});export{G as V};
