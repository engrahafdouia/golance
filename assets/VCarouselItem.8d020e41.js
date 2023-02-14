import{b5 as Y,C as R,c as M,e as W,p as O,ac as j,H,aO as F,r as b,j as g,a9 as B,aH as G,l as u,A as _,k as V,O as X,aB as z,d as C,R as U,aT as N,aE as q,aV as J,aU as K,P as Q,N as Z,Y as x,ag as p,I as ee,D as te,a8 as ne,a7 as oe,an as ae,E as le,a$ as ie,a1 as se}from"./index.e9727822.js";import{u as ue}from"./ssrBoot.6def5223.js";const re=e=>{const{touchstartX:o,touchendX:n,touchstartY:t,touchendY:l}=e,s=.5,a=16;e.offsetX=n-o,e.offsetY=l-t,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&n<o-a&&e.left(e),e.right&&n>o+a&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&l<t-a&&e.up(e),e.down&&l>t+a&&e.down(e))};function ce(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function de(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),re(o)}function ve(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function fe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:n=>ce(n,o),touchend:n=>de(n,o),touchmove:n=>ve(n,o)}}function he(e,o){var r,i;var n;const t=o.value,l=t!=null&&t.parent?e.parentElement:e,s=(r=t==null?void 0:t.options)!=null?r:{passive:!0},a=(n=o.instance)==null?void 0:n.$.uid;if(!l||!a)return;const d=fe(o.value);l._touchHandlers=(i=l._touchHandlers)!=null?i:Object.create(null),l._touchHandlers[a]=d,Y(d).forEach(v=>{l.addEventListener(v,d[v],s)})}function me(e,o){var n,t;const l=(n=o.value)!=null&&n.parent?e.parentElement:e,s=(t=o.instance)==null?void 0:t.$.uid;if(!(l!=null&&l._touchHandlers)||!s)return;const a=l._touchHandlers[s];Y(a).forEach(d=>{l.removeEventListener(d,a[d])}),delete l._touchHandlers[s]}const k={mounted:he,unmounted:me},ge=k,D=Symbol.for("vuetify:v-window"),L=Symbol.for("vuetify:v-window-group"),ye=R()({name:"VWindow",directives:{Touch:k},props:{continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...M(),...W()},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const{themeClasses:t}=O(e),{isRtl:l}=j(),{t:s}=H(),a=F(e,L),d=b(),r=g(()=>l.value?!e.reverse:e.reverse),i=b(!1),v=g(()=>{const c=e.direction==="vertical"?"y":"x",m=(r.value?!i.value:i.value)?"-reverse":"";return`v-window-${c}${m}-transition`}),y=b(0),T=b(void 0),w=g(()=>a.items.value.findIndex(c=>a.selected.value.includes(c.id)));B(w,(c,h)=>{const m=a.items.value.length,E=m-1;m<=2?i.value=c<h:c===E&&h===0?i.value=!0:c===0&&h===E?i.value=!1:i.value=c<h}),G(D,{transition:v,isReversed:i,transitionCount:y,transitionHeight:T,rootRef:d});const f=g(()=>e.continuous||w.value!==0),I=g(()=>e.continuous||w.value!==a.items.value.length-1);function $(){f.value&&a.prev()}function S(){I.value&&a.next()}const A=g(()=>{const c=[],h={icon:l.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:a.prev,ariaLabel:s("$vuetify.carousel.prev")};c.push(f.value?n.prev?n.prev({props:h}):u(_,h,null):u("div",null,null));const m={icon:l.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:a.next,ariaLabel:s("$vuetify.carousel.next")};return c.push(I.value?n.next?n.next({props:m}):u(_,m,null):u("div",null,null)),c}),P=g(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?$():S()},right:()=>{r.value?S():$()},start:h=>{let{originalEvent:m}=h;m.stopPropagation()}},...e.touch===!0?{}:e.touch});return V(()=>{var c,h;return X(u(e.tag,{ref:d,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value]},{default:()=>[u("div",{class:"v-window__container",style:{height:T.value}},[(c=n.default)==null?void 0:c.call(n,{group:a}),e.showArrows!==!1&&u("div",{class:"v-window__controls"},[A.value])]),(h=n.additional)==null?void 0:h.call(n,{group:a})]}),[[z("touch"),P.value]])}),{group:a}}}),we=C({name:"VWindowItem",directives:{Touch:ge},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...U(),...N()},emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const t=q(D),l=J(e,L),{isBooted:s}=ue();if(!t||!l)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=b(!1),d=g(()=>t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1);function r(){!a.value||!t||(a.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function i(){if(!(a.value||!t)){if(a.value=!0,t.transitionCount.value===0){var f;t.transitionHeight.value=x((f=t.rootRef.value)==null?void 0:f.clientHeight)}t.transitionCount.value+=1}}function v(){r()}function y(f){!a.value||p(()=>{!d.value||!a.value||!t||(t.transitionHeight.value=x(f.clientHeight))})}const T=g(()=>{const f=t.isReversed.value?e.reverseTransition:e.transition;return d.value?{name:typeof f!="string"?t.transition.value:f,onBeforeEnter:i,onAfterEnter:r,onEnterCancelled:v,onBeforeLeave:i,onAfterLeave:r,onLeaveCancelled:v,onEnter:y}:!1}),{hasContent:w}=K(e,l.isSelected);return V(()=>{var f;return u(Z,{transition:s.value&&T.value},{default:()=>[X(u("div",{class:["v-window-item",l.selectedClass.value]},[w.value&&((f=n.default)==null?void 0:f.call(n))]),[[Q,l.isSelected.value]])]})}),{}}}),Be=C({name:"VCarousel",props:{color:String,cycle:Boolean,delimiterIcon:{type:ee,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>e>0},modelValue:null,progress:[Boolean,String],showArrows:{type:[Boolean,String],default:!0,validator:e=>typeof e=="boolean"||e==="hover"},verticalDelimiters:[Boolean,String]},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const t=te(e,"modelValue"),{t:l}=H(),s=b();let a=-1;B(t,r),B(()=>e.interval,r),B(()=>e.cycle,i=>{i?r():window.clearTimeout(a)}),ne(d);function d(){!e.cycle||!s.value||(a=window.setTimeout(s.value.group.next,+e.interval>0?+e.interval:6e3))}function r(){window.clearTimeout(a),window.requestAnimationFrame(d)}return V(()=>u(ye,{ref:s,modelValue:t.value,"onUpdate:modelValue":i=>t.value=i,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters}],style:{height:x(e.height)},continuous:!0,mandatory:"force",showArrows:e.showArrows},{default:n.default,additional:i=>{let{group:v}=i;return u(oe,null,[!e.hideDelimiters&&u("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[v.items.value.length>0&&u(ae,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[v.items.value.map((y,T)=>{const w={"aria-label":l("$vuetify.carousel.ariaLabel.delimiter",T+1,v.items.value.length),class:[v.isSelected(y.id)&&"v-btn--active"],onClick:()=>v.select(y.id,!0)};return n.item?n.item({props:w,item:y}):u(_,le(y,w),null)})]})]),e.progress&&u(ie,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(v.getItemIndex(t.value)+1)/v.items.value.length*100},null)])},prev:n.prev,next:n.next})),{}}}),Ve=C({name:"VCarouselItem",inheritAttrs:!1,props:{value:null},setup(e,o){let{slots:n,attrs:t}=o;V(()=>u(we,{class:"v-carousel-item",value:e.value},{default:()=>[u(se,t,n)]}))}});export{Be as V,Ve as a};
