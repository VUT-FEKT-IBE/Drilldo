import{_ as i,u,a as l,s as a,r as c,o as r,c as _,d as s,f as p,e as d,g as f,Q as m}from"./index-ff5dabe8.js";import{Q as w}from"./QuestionComponent-f3485aa0.js";import{Q as h}from"./QuestionControlComponent-409f169a.js";const x={class:"explore-container"},Q={__name:"ExploreView",setup(V){const o=u(m),e=l();o.where("showResults",!1).update({showResults:!0}),e.index=0,e.showMobileMenu=!1,e.viewMode=!0,e.editMode=!1,e.questions=o.with("answers").get();const{index:n}=a(e),{questions:t}=a(e);return o.all().length===0&&c.push("/"),(b,g)=>(r(),_("div",x,[s(t).length>=1?(r(),p(w,{question:s(t)[s(n)],key:s(t)[s(n)].id},null,8,["question"])):d("",!0),f(h)]))}},R=i(Q,[["__scopeId","data-v-2a7b0bd7"]]);export{R as default};
