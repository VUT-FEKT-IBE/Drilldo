import{_ as v,u as _,a as x,o as c,c as l,b as t,d as a,e as d,f as w,g,n as k,Q as y,A as q,U as p,p as C,h as L}from"./index-37c8787a.js";const e=u=>(C("data-v-90086cc0"),u=u(),L(),u),S={class:"loader-container"},E=e(()=>t("h1",null,"Uploading your test data",-1)),I={class:"but-par"},V={key:0},$={key:0,class:"but-container"},B={key:0,class:"but-par"},M=e(()=>t("p",{class:"stats text"}," (Optional) You can also upload statistics from a prior session to allow question shuffle to prefer questions where you make mistakes. ",-1)),N={class:"navigator"},R=e(()=>t("p",{class:"explore text"},"Explore questions to revise your knowledge:",-1)),D=e(()=>t("span",{class:"but-text"},"Explore questions",-1)),Q=[D],U={class:"but-par"},A=e(()=>t("p",{class:"test text"},"Or you can start testing right away:",-1)),O=e(()=>t("span",{class:"but-text"},"Start testing",-1)),T=[O],z={class:"but-par offset"},F=e(()=>t("p",{class:"reset text"}," If you want to clear all questions, click this button: ",-1)),J=e(()=>t("span",{class:"but-text"},"Reset questions",-1)),Y=[J],j={__name:"LoadView",setup(u){const o=_(y),h=_(q),i=x();i.showMobileMenu=!1;function f(n){n.forEach(function(s){let r=0;s.answers.forEach(function(m){m.correct&&r++}),o.save({number:s.number,question:s.question,maxScore:r,answers:s.answers})})}function b(n){n.length!=o.all().length&&console.error("Error loading stats: Number of questions doesn't match"),n.forEach(function(s){o.where("number",s.number).update({numCorrect:s.numCorrect,numIncorrect:s.numIncorrect})}),i.statsLoaded=!0}return(n,s)=>(c(),l("div",S,[E,t("div",I,[a(o).all().length===0?(c(),l("p",V," First you need to upload your questions: ")):d("",!0),a(o).all().length===0?(c(),w(p,{key:1,onData:f,buttonText:"Load Questions"})):d("",!0)]),a(o).all().length>=1?(c(),l("div",$,[a(i).statsLoaded?d("",!0):(c(),l("div",B,[M,g(p,{onData:b,buttonText:"Load statistics"})]))])):d("",!0),t("div",N,[t("div",{class:k(["but-par",{offset:!a(i).statsLoaded}])},[R,t("button",{class:"explore button",onClick:s[0]||(s[0]=r=>n.$router.push("/explore"))},Q)],2),t("div",U,[A,t("button",{class:"test button",onClick:s[1]||(s[1]=r=>n.$router.push("/test"))},T)])]),t("div",z,[F,t("button",{class:"reset button",onClick:s[2]||(s[2]=r=>{a(o).flush(),a(h).flush()})},Y)])]))}},H=v(j,[["__scopeId","data-v-90086cc0"]]);export{H as default};