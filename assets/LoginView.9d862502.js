import{_ as u,o as d,a0 as m,l as e,w as s,$ as p,a1 as V,y as r,a5 as c,z as t,A as f}from"./index.e9727822.js";import{_}from"./_plugin-vue_export-helper.cdc0426e.js";import{V as g,a as n}from"./VCol.c97aa76c.js";import{V as w}from"./VRow.a811f1b1.js";import{V as h,b,a as $}from"./VCard.24dfe14e.js";import{V as x}from"./VForm.a2982ed6.js";const y="/assets/undraw_sign_.7be69c03.svg",C={components:{},data:()=>({username:"kminchelle",password:"0lelplR"}),methods:{...u(p,["login"]),submit(){this.login(this.username,this.password),this.$route.query.redirect?this.$router.push(this.$route.query.redirect):this.$router.push("/")}}};function v(a,l,T,k,B,i){return d(),m("section",null,[e(g,null,{default:s(()=>[e(w,null,{default:s(()=>[e(n,{cols:"12",lg:"4"},{default:s(()=>[e(V,{src:y,class:"py-6"})]),_:1}),e(n,{cols:"12",lg:"5"},{default:s(()=>[e(h,null,{default:s(()=>[e(b,null,{default:s(()=>[r("Login")]),_:1}),e(x,{onSubmit:c(i.submit,["prevent"])},{default:s(()=>[e($,null,{default:s(()=>[e(t,{class:"px-6",clearable:"",variant:"underlined",color:"indigo",modelValue:a.username,"onUpdate:modelValue":l[0]||(l[0]=o=>a.username=o)},null,8,["modelValue"]),e(t,{modelValue:a.password,"onUpdate:modelValue":l[1]||(l[1]=o=>a.password=o),class:"px-6",type:"password",clearable:"",variant:"underlined",color:"indigo"},null,8,["modelValue"]),e(f,{type:"submit",class:"px-6",rounded:"pill",color:"purpleme"},{default:s(()=>[r(" Login ")]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})])}const S=_(C,[["render",v]]);export{S as default};
