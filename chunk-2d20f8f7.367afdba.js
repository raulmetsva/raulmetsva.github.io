(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f8f7"],{b3c3:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"results"}},[a("div",{staticStyle:{display:"flex","justify-content":"space-between","margin-top":"24px",width:"100%","padding-left":"56px","padding-right":"36px"}},[a("v-card",{staticStyle:{"border-radius":"16px"},attrs:{width:"130",height:"56"}}),a("v-card",{staticStyle:{"border-radius":"16px",float:"right",padding:"10px 16px","padding-left":"8px"},attrs:{height:"56",width:"304"}},[a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("v-btn",{attrs:{width:"35",height:"35",icon:""}},[a("v-icon",[t._v("mdi-map")])],1),a("v-btn",{attrs:{width:"35",height:"35",icon:""}},[a("v-icon",{attrs:{color:"#015924"}},[t._v("mdi-help-circle-outline")])],1),a("v-btn",{staticStyle:{padding:"12px"},attrs:{rounded:"",depressed:"",color:"#015924"}},[a("span",{staticStyle:{color:"white"}},[t._v("Analyse more turfs")])])],1)])],1),a("div",{staticStyle:{display:"flex","flex-wrap":"wrap",margin:"24px 46px"}},t._l(t.results,(function(e,i){return a("v-card",{key:e.url,staticStyle:{"border-radius":"16px",width:"31%",margin:"12px",padding:"12px"},attrs:{height:"538"}},[a("div",{ref:i,refInFor:!0,staticStyle:{height:"392px",border:"1px solid black","border-radius":"16px"}}),a("div",{staticStyle:{display:"flex","justify-content":"space-between","margin-top":"32px"}},[a("div",{staticStyle:{"margin-left":"12px","text-align":"left"}},[a("h3",[t._v("Jalgpalli tn 19")]),a("h6",{staticStyle:{"margin-top":"16px"}},[t._v("Material")]),a("p",{staticStyle:{"font-size":"16px"}},[t._v(t._s(e.material))])]),a("div",{staticStyle:{"text-align":"right"}},[a("h5",{staticStyle:{"margin-bottom":"10px"}},[t._v(t._s(e.additionalInfo.dateCaptured))]),a("h5",{staticStyle:{"margin-bottom":"5px"}},[t._v(t._s(e.coordinates.N+" N"))]),a("h5",[t._v(t._s(e.coordinates.E+" E"))])])])])})),1)])},s=[],r=(a("d81d"),{name:"Results",props:["results"],data:function(){return{map:null}},methods:{createMapCrops:function(){this.map=new window.google.maps.Map(this.$refs(1),{zoom:14,center:{lat:this.results[1].coordinates.N,lng:this.results[1].coordinates.E},mapTypeId:"hybrid",clickableIcons:!1,disableDefaultUI:!0})}},mounted:function(){if(this.results)this.createMapCrops();else{var t=[{coordinates:{format:"epsg",N:"59.442286",E:"24.708266"},preview:"esafb/folder/of/previews/1.png",url:"https://www.google.com/maps/@59.442286,24.7070982,17z",material:"Natural grass",additionalInfo:{dateCaptured:"20201207"}},{coordinates:{format:"epsg:4326",N:"59.434524",E:"24.783445"},preview:"esafb/folder/of/previews/1.png",url:"https://www.google.com/maps/@59.434524,24.7812563,17z",material:"Natural grass",additionalInfo:{dateCaptured:"20201207"}}];this.$emit("results-received",t)}}}),l=r,n=a("2877"),d=a("6544"),o=a.n(d),p=a("8336"),c=a("b0af"),u=a("132d"),f=Object(n["a"])(l,i,s,!1,null,null,null);e["default"]=f.exports;o()(f,{VBtn:p["a"],VCard:c["a"],VIcon:u["a"]})}}]);
//# sourceMappingURL=chunk-2d20f8f7.367afdba.js.map