(window.webpackJsonp=window.webpackJsonp||[]).push([[21,23],{574:function(t,e,n){var content=n(586);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("78c982e6",content,!0,{sourceMap:!1})},578:function(t,e,n){var content=n(606);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("7e6fec00",content,!0,{sourceMap:!1})},585:function(t,e,n){"use strict";n(574)},586:function(t,e,n){var l=n(27)(!1);l.push([t.i,".input__field[data-v-7b479e06]{background:#f5f5f5;border:1px solid #e8e8e8;border-radius:7px;width:100%;height:36px;padding-left:15px;padding-right:15px;resize:none;outline:none;color:#252b42;font-weight:500;font-size:14px}.input__field[data-v-7b479e06]::-moz-placeholder{color:#b0b0b0;font-weight:500;font-size:10px}.input__field[data-v-7b479e06]:-ms-input-placeholder{color:#b0b0b0;font-weight:500;font-size:10px}.input__field[data-v-7b479e06]::placeholder{color:#b0b0b0;font-weight:500;font-size:10px}.input textarea[data-v-7b479e06]{height:142px;padding-top:16px;padding-bottom:16px}.input textarea.input__field[data-v-7b479e06]::-moz-placeholder{font-size:15px}.input textarea.input__field[data-v-7b479e06]:-ms-input-placeholder{font-size:15px}.input textarea.input__field[data-v-7b479e06]::placeholder{font-size:15px}",""]),t.exports=l},590:function(t,e,n){"use strict";n.r(e);n(52);var l={props:{modelValue:{type:String,default:null},type:{type:String,default:"input",validator:function(t){return["input","textarea"].includes(t)}},placeholder:{type:String,default:"placeholder"},value:{type:String,default:null}},methods:{updateValue:function(t){this.$emit("input",t)}}},o=(n(585),n(8)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input"},["textarea"==t.type?n("textarea",{staticClass:"input__field",attrs:{placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){return t.updateValue(e.target.value)}}}):n("input",{staticClass:"input__field",attrs:{placeholder:t.placeholder,type:"text"},domProps:{value:t.value},on:{input:function(e){return t.updateValue(e.target.value)}}})])}),[],!1,null,"7b479e06",null);e.default=component.exports},605:function(t,e,n){"use strict";n(578)},606:function(t,e,n){var l=n(27)(!1);l.push([t.i,".contactsForm__title[data-v-21dd7226]{color:#252b42;font-size:15px;line-height:22px;text-align:center;font-weight:700;margin-bottom:30px}.contactsForm__input[data-v-21dd7226]{margin-bottom:30px}@media screen and (max-width:560px){.contactsForm__input[data-v-21dd7226]{margin-bottom:20px}}",""]),t.exports=l},612:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{name:null,email:null,message:null}}},o=(n(605),n(8)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"contactsForm"},[n("div",{staticClass:"contactsForm__title"},[t._v("Задайте вопрос")]),t._v(" "),n("div",{staticClass:"contactsForm__input"},[n("FrontInput",{attrs:{placeholder:"Ваше имя"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),n("div",{staticClass:"contactsForm__input"},[n("FrontInput",{attrs:{placeholder:"Ваш E-mail"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),n("div",{staticClass:"contactsForm__input"},[n("FrontInput",{attrs:{placeholder:"Ваше сообщение",type:"textarea"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),t._v(" "),n("div",{staticClass:"contactsForm__button"},[n("UiButton",{attrs:{title:"Отправить",size:"small"}})],1)])}),[],!1,null,"21dd7226",null);e.default=component.exports;installComponents(component,{FrontInput:n(590).default,UiButton:n(110).default})}}]);