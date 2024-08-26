import{a as O,b as K,u as A,R as Q,V as W,k as J,A as X,z as Y}from"./VAvatar-D6Cdo2n2.js";import{p as I,I as B,Q as Z,q as p,s as F,x as S,al as j,d as o,a5 as ee,W as le,D as ae,G as i,b as d,C as $,g as te,ag as ne,H as P,e as oe,S as ue,F as ie,a6 as re,a2 as x,a4 as ce,K as se,a1 as de}from"./app-D59vl0kx.js";import{g as ve}from"./VTextField-n3Xi_zP4.js";const q=Symbol.for("vuetify:selection-control-group"),E=I({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:B,trueIcon:B,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Z},...O(),...K(),...p()},"SelectionControlGroup"),fe=I({...E({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");F()({name:"VSelectionControlGroup",props:fe(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:c}=u;const l=S(e,"modelValue"),t=j(),v=o(()=>e.id||`v-selection-control-group-${t}`),r=o(()=>e.name||v.value),a=new Set;return ee(q,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),le(()=>{a.delete(n)})}}),ae({[e.defaultsTarget]:{color:i(e,"color"),disabled:i(e,"disabled"),density:i(e,"density"),error:i(e,"error"),inline:i(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:r,falseIcon:i(e,"falseIcon"),trueIcon:i(e,"trueIcon"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),type:i(e,"type"),valueComparator:i(e,"valueComparator")}}),A(()=>{var n;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=c.default)==null?void 0:n.call(c)])}),{}}});const H=I({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...O(),...E()},"VSelectionControl");function me(e){const u=re(q,void 0),{densityClasses:c}=J(e),l=S(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=o(()=>e.falseValue!==void 0?e.falseValue:!1),r=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const b=u?u.modelValue.value:l.value;return r.value?x(b).some(s=>e.valueComparator(s,t.value)):e.valueComparator(b,t.value)},set(b){if(e.readonly)return;const s=b?t.value:v.value;let y=s;r.value&&(y=b?[...x(l.value),s]:x(l.value).filter(f=>!e.valueComparator(f,t.value))),u?u.modelValue.value=y:l.value=y}}),{textColorClasses:n,textColorStyles:C}=X(o(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:V,backgroundColorStyles:k}=Y(o(()=>a.value&&!e.error&&!e.disabled?e.color:e.baseColor)),h=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:c,trueValue:t,falseValue:v,model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:k,icon:h}}const _=F()({name:"VSelectionControl",directives:{Ripple:Q},inheritAttrs:!1,props:H(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:c,slots:l}=u;const{group:t,densityClasses:v,icon:r,model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:k,trueValue:h}=me(e),b=j(),s=$(!1),y=$(!1),f=te(),g=o(()=>e.id||`input-${b}`),D=o(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{f.value&&(f.value.checked=a.value)});function G(m){D.value&&(s.value=!0,ce(m.target,":focus-visible")!==!1&&(y.value=!0))}function w(){s.value=!1,y.value=!1}function L(m){m.stopPropagation()}function M(m){if(!D.value){f.value&&(f.value.checked=a.value);return}e.readonly&&t&&se(()=>t.forceUpdate()),a.value=m.target.checked}return A(()=>{var U,R;const m=l.label?l.label({label:e.label,props:{for:g.value}}):e.label,[N,z]=ne(c),T=d("input",P({ref:f,checked:a.value,disabled:!!e.disabled,id:g.value,onBlur:w,onFocus:G,onInput:M,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:h.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},z),null);return d("div",P({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":s.value,"v-selection-control--focus-visible":y.value,"v-selection-control--inline":e.inline},v.value,e.class]},N,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",n.value],style:C.value},[(U=l.default)==null?void 0:U.call(l,{backgroundColorClasses:V,backgroundColorStyles:k}),oe(d("div",{class:["v-selection-control__input"]},[((R=l.input)==null?void 0:R.call(l,{model:a,textColorClasses:n,textColorStyles:C,backgroundColorClasses:V,backgroundColorStyles:k,inputNode:T,icon:r.value,props:{onFocus:G,onBlur:w,id:g.value}}))??d(ie,null,[r.value&&d(W,{key:"icon",icon:r.value},null),T])]),[[ue("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),m&&d(ve,{for:g.value,onClick:L},{default:()=>[m]})])}),{isFocused:s,input:f}}}),be=I({indeterminate:Boolean,indeterminateIcon:{type:B,default:"$checkboxIndeterminate"},...H({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),ke=F()({name:"VCheckboxBtn",props:be(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,u){let{slots:c}=u;const l=S(e,"indeterminate"),t=S(e,"modelValue");function v(n){l.value&&(l.value=!1)}const r=o(()=>l.value?e.indeterminateIcon:e.falseIcon),a=o(()=>l.value?e.indeterminateIcon:e.trueIcon);return A(()=>{const n=de(_.filterProps(e),["modelValue"]);return d(_,P(n,{modelValue:t.value,"onUpdate:modelValue":[C=>t.value=C,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:r.value,trueIcon:a.value,"aria-checked":l.value?"mixed":void 0}),c)}),{}}});export{ke as V,be as m};
