(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22bef1"],{f0a2:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{"max-width":"400"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-text",[e("div",{staticClass:"d-flex flex-column text-center mx-2 pt-8"},[e("v-text-field",{attrs:{rules:t.kahootNameRules,label:"Name/uuid of the Kahoot","hide-details":"auto"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.ContinueBtnClicked(a)}},model:{value:t.kahootName,callback:function(a){t.kahootName=a},expression:"kahootName"}}),e("p",{staticClass:"red--text ma-auto mt-4",staticStyle:{"max-width":"350px"}},[t._v(" Failing to enter a name/uuid before the Kahoot starts may result in the auto answer not working properly ")])],1)]),e("v-card-actions",[e("v-spacer"),e("v-btn",{staticStyle:{"style='-webkit-animation":"color 20s infinite",animation:"color 10s infinite","-webkit-animation-direction":"alternate","animation-direction":"alternate"},attrs:{text:""},on:{click:function(a){return t.ContinueBtnClicked()}}},[t._v("Set")])],1)],1)],1)},n=[],i={data:function(){return{kahootNameRules:[function(t){return!!t||"Required."},function(t){var a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;return a.test(t)||"Cannot contain special characters"}],kahootName:""}},computed:{dialog:{get:function(){return this.$globals.showKahootNameDialog&&null!=this.$kahoot.players[0]},set:function(t){this.$globals.showKahootNameDialog=t}}},methods:{ContinueBtnClicked:function(){""!==this.kahootName&&(this.$searcher.quizName=this.kahootName,this.$globals.showKahootNameDialog=!1)}}},l=i,r=e("2877"),s=e("6544"),c=e.n(s),u=e("8336"),d=e("b0af"),h=e("99d9"),m=e("169a"),f=e("2fa4"),k=e("8654"),p=Object(r["a"])(l,o,n,!1,null,null,null);a["default"]=p.exports;c()(p,{VBtn:u["a"],VCard:d["a"],VCardActions:h["a"],VCardText:h["b"],VDialog:m["a"],VSpacer:f["a"],VTextField:k["a"]})}}]);
