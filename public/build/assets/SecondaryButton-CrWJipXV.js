import{S as x}from"./SectionTitle-ldblpnWa.js";import{o as r,f,b as u,w as i,r as a,a as t,g as h,W as b,a2 as $,ab as k,d as S,e as w,P as v,ac as _,n as B,h as C,c as W}from"./app-DldXoq_Q.js";const E={class:"md:grid md:grid-cols-3 md:gap-6"},M={class:"mt-5 md:mt-0 md:col-span-2"},z={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"},F={__name:"ActionSection",setup(e){return(o,s)=>(r(),f("div",E,[u(x,null,{title:i(()=>[a(o.$slots,"title")]),description:i(()=>[a(o.$slots,"description")]),_:3}),t("div",M,[t("div",z,[a(o.$slots,"content")])])]))}},D={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},N=t("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),T=[N],V={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:o}){const s=e,d=o,l=h(),c=h(s.show);b(()=>s.show,()=>{var n;s.show?(document.body.style.overflow="hidden",c.value=!0,(n=l.value)==null||n.showModal()):(document.body.style.overflow=null,setTimeout(()=>{var m;(m=l.value)==null||m.close(),c.value=!1},200))});const p=()=>{s.closeable&&d("close")},y=n=>{n.key==="Escape"&&(n.preventDefault(),s.show&&p())};$(()=>document.addEventListener("keydown",y)),k(()=>{document.removeEventListener("keydown",y),document.body.style.overflow=null});const g=S(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[s.maxWidth]);return(n,m)=>(r(),f("dialog",{class:"z-50 m-0 min-h-full min-w-full overflow-y-auto bg-transparent backdrop:bg-transparent",ref_key:"dialog",ref:l},[t("div",D,[u(_,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:i(()=>[w(t("div",{class:"fixed inset-0 transform transition-all",onClick:p},T,512),[[v,e.show]])]),_:1}),u(_,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:i(()=>[w(t("div",{class:B(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",g.value])},[c.value?a(n.$slots,"default",{key:0}):C("",!0)],2),[[v,e.show]])]),_:3})])],512))}},L={class:"px-6 py-4"},j={class:"text-lg font-medium text-gray-900"},A={class:"mt-4 text-sm text-gray-600"},O={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-end"},G={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:o}){const s=o,d=()=>{s("close")};return(l,c)=>(r(),W(V,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:d},{default:i(()=>[t("div",L,[t("div",j,[a(l.$slots,"title")]),t("div",A,[a(l.$slots,"content")])]),t("div",O,[a(l.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}},P=["type"],H={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(e){return(o,s)=>(r(),f("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"},[a(o.$slots,"default")],8,P))}};export{V as _,F as a,G as b,H as c};
