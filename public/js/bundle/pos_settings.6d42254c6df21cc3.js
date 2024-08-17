"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5685],{43641:(s,t,e)=>{e.r(t),e.d(t,{default:()=>p});var o=e(95353),i=e(5947),n=e.n(i);function r(s){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},r(s)}function a(s,t){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(s);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),e.push.apply(e,o)}return e}function c(s){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){_(s,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(s,t,Object.getOwnPropertyDescriptor(e,t))}))}return s}function _(s,t,e){return(t=function(s){var t=function(s,t){if("object"!=r(s)||!s)return s;var e=s[Symbol.toPrimitive];if(void 0!==e){var o=e.call(s,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(s)}(s,"string");return"symbol"==r(t)?t:t+""}(t))in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}const l={metaInfo:{title:"POS Settings"},data:function(){return{isLoading:!0,pos_settings:{note_customer:"",show_note:"",show_barcode:"",show_discount:"",show_phone:"",show_email:"",show_address:"",show_customer:"",show_Warehouse:"",is_printable:"",products_per_page:""}}},methods:c(c({},(0,o.i0)(["refreshUserPermissions"])),{},{Submit_Pos_Settings:function(){var s=this;this.$refs.Submit_Pos_Settings.validate().then((function(t){t?s.Update_Pos_Settings():s.makeToast("danger",s.$t("Please_fill_the_form_correctly"),s.$t("Failed"))}))},makeToast:function(s,t,e){this.$root.$bvToast.toast(t,{title:e,variant:s,solid:!0})},getValidationState:function(s){var t=s.dirty,e=s.validated,o=s.valid;return t||e?void 0===o?null:o:null},Update_Pos_Settings:function(){var s=this;n().start(),n().set(.1),axios.put("pos_settings/"+this.pos_settings.id,{note_customer:this.pos_settings.note_customer,show_note:this.pos_settings.show_note,show_barcode:this.pos_settings.show_barcode,show_discount:this.pos_settings.show_discount,show_phone:this.pos_settings.show_phone,show_email:this.pos_settings.show_email,show_address:this.pos_settings.show_address,show_customer:this.pos_settings.show_customer,show_Warehouse:this.pos_settings.show_Warehouse,is_printable:this.pos_settings.is_printable,products_per_page:this.pos_settings.products_per_page}).then((function(t){Fire.$emit("Event_Pos_Settings"),s.makeToast("success",s.$t("Successfully_Updated"),s.$t("Success")),n().done()})).catch((function(t){n().done(),s.makeToast("danger",s.$t("InvalidData"),s.$t("Failed"))}))},get_pos_Settings:function(){var s=this;axios.get("get_pos_Settings").then((function(t){s.pos_settings=t.data.pos_settings,s.isLoading=!1})).catch((function(t){s.isLoading=!1}))}}),created:function(){var s=this;this.get_pos_Settings(),Fire.$on("Event_Pos_Settings",(function(){s.get_pos_Settings()}))}};const p=(0,e(14486).A)(l,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:s.$t("pos_settings"),folder:s.$t("Settings")}}),s._v(" "),s.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):s._e(),s._v(" "),s.isLoading?s._e():e("validation-observer",{ref:"Submit_Pos_Settings"},[e("b-form",{on:{submit:function(t){return t.preventDefault(),s.Submit_Pos_Settings.apply(null,arguments)}}},[e("b-row",{staticClass:"mt-5"},[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",{attrs:{"no-body":"",header:s.$t("Pos_Settings")}},[e("b-card-body",[e("b-row",[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("validation-provider",{attrs:{name:"note",rules:{required:!0}},scopedSlots:s._u([{key:"default",fn:function(t){return[e("b-form-group",{attrs:{label:s.$t("Note_to_customer")+" *"}},[e("b-form-input",{attrs:{state:s.getValidationState(t),"aria-describedby":"note-feedback",label:"Note to customer",placeholder:s.$t("Note_to_customer")},model:{value:s.pos_settings.note_customer,callback:function(t){s.$set(s.pos_settings,"note_customer",t)},expression:"pos_settings.note_customer"}}),s._v(" "),e("b-form-invalid-feedback",{attrs:{id:"note-feedback"}},[s._v(s._s(t.errors[0]))])],1)]}}],null,!1,1637698482)})],1),s._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[e("label",{staticClass:"switch switch-primary mr-3"},[s._v("\n                       "+s._s(s.$t("Show_Phone"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.pos_settings.show_phone,expression:"pos_settings.show_phone"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.pos_settings.show_phone)?s._i(s.pos_settings.show_phone,null)>-1:s.pos_settings.show_phone},on:{change:function(t){var e=s.pos_settings.show_phone,o=t.target,i=!!o.checked;if(Array.isArray(e)){var n=s._i(e,null);o.checked?n<0&&s.$set(s.pos_settings,"show_phone",e.concat([null])):n>-1&&s.$set(s.pos_settings,"show_phone",e.slice(0,n).concat(e.slice(n+1)))}else s.$set(s.pos_settings,"show_phone",i)}}}),s._v(" "),e("span",{staticClass:"slider"})])]),s._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[e("label",{staticClass:"switch switch-primary mr-3"},[s._v("\n                       "+s._s(s.$t("Show_Address"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.pos_settings.show_address,expression:"pos_settings.show_address"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.pos_settings.show_address)?s._i(s.pos_settings.show_address,null)>-1:s.pos_settings.show_address},on:{change:function(t){var e=s.pos_settings.show_address,o=t.target,i=!!o.checked;if(Array.isArray(e)){var n=s._i(e,null);o.checked?n<0&&s.$set(s.pos_settings,"show_address",e.concat([null])):n>-1&&s.$set(s.pos_settings,"show_address",e.slice(0,n).concat(e.slice(n+1)))}else s.$set(s.pos_settings,"show_address",i)}}}),s._v(" "),e("span",{staticClass:"slider"})])]),s._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[e("label",{staticClass:"switch switch-primary mr-3"},[s._v("\n                       "+s._s(s.$t("Show_Email"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.pos_settings.show_email,expression:"pos_settings.show_email"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.pos_settings.show_email)?s._i(s.pos_settings.show_email,null)>-1:s.pos_settings.show_email},on:{change:function(t){var e=s.pos_settings.show_email,o=t.target,i=!!o.checked;if(Array.isArray(e)){var n=s._i(e,null);o.checked?n<0&&s.$set(s.pos_settings,"show_email",e.concat([null])):n>-1&&s.$set(s.pos_settings,"show_email",e.slice(0,n).concat(e.slice(n+1)))}else s.$set(s.pos_settings,"show_email",i)}}}),s._v(" "),e("span",{staticClass:"slider"})])]),s._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[e("label",{staticClass:"switch switch-primary mr-3"},[s._v("\n                       "+s._s(s.$t("Show_Customer"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.pos_settings.show_customer,expression:"pos_settings.show_customer"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.pos_settings.show_customer)?s._i(s.pos_settings.show_customer,null)>-1:s.pos_settings.show_customer},on:{change:function(t){var e=s.pos_settings.show_customer,o=t.target,i=!!o.checked;if(Array.isArray(e)){var n=s._i(e,null);o.checked?n<0&&s.$set(s.pos_settings,"show_customer",e.concat([null])):n>-1&&s.$set(s.pos_settings,"show_customer",e.slice(0,n).concat(e.slice(n+1)))}else s.$set(s.pos_settings,"show_customer",i)}}}),s._v(" "),e("span",{staticClass:"slider"})])]),s._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[e("label",{staticClass:"switch switch-primary mr-3"},[s._v("\n                       "+s._s(s.$t("Show_Warehouse"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.pos_settings.show_Warehouse,expression:"pos_settings.show_Warehouse"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.pos_settings.show_Warehouse)?s._i(s.pos_settings.show_Warehouse,null)>-1:s.pos_settings.show_Warehouse},on:{change:function(t){var e=s.pos_settings.show_Warehouse,o=t.target,i=!!o.checked;if(Array.isArray(e)){var n=s._i(e,null);o.checked?n<0&&s.$set(s.pos_settings,"show_Warehouse",e.concat([null])):n>-1&&s.$set(s.pos_settings,"show_Warehouse",e.slice(0,n).concat(e.slice(n+1)))}else s.$set(s.pos_settings,"show_Warehouse",i)}}}),s._v(" "),e("span",{staticClass:"slider"})])]),s._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[e("label",{staticClass:"switch switch-primary mr-3"},[s._v("\n                       "+s._s(s.$t("Show_Tax_and_Discount"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.pos_settings.show_discount,expression:"pos_settings.show_discount"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.pos_settings.show_discount)?s._i(s.pos_settings.show_discount,null)>-1:s.pos_settings.show_discount},on:{change:function(t){var e=s.pos_settings.show_discount,o=t.target,i=!!o.checked;if(Array.isArray(e)){var n=s._i(e,null);o.checked?n<0&&s.$set(s.pos_settings,"show_discount",e.concat([null])):n>-1&&s.$set(s.pos_settings,"show_discount",e.slice(0,n).concat(e.slice(n+1)))}else s.$set(s.pos_settings,"show_discount",i)}}}),s._v(" "),e("span",{staticClass:"slider"})])]),s._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[e("label",{staticClass:"switch switch-primary mr-3"},[s._v("\n                       "+s._s(s.$t("Show_barcode"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.pos_settings.show_barcode,expression:"pos_settings.show_barcode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.pos_settings.show_barcode)?s._i(s.pos_settings.show_barcode,null)>-1:s.pos_settings.show_barcode},on:{change:function(t){var e=s.pos_settings.show_barcode,o=t.target,i=!!o.checked;if(Array.isArray(e)){var n=s._i(e,null);o.checked?n<0&&s.$set(s.pos_settings,"show_barcode",e.concat([null])):n>-1&&s.$set(s.pos_settings,"show_barcode",e.slice(0,n).concat(e.slice(n+1)))}else s.$set(s.pos_settings,"show_barcode",i)}}}),s._v(" "),e("span",{staticClass:"slider"})])]),s._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[e("label",{staticClass:"switch switch-primary mr-3"},[s._v("\n                       "+s._s(s.$t("Show_Note_to_customer"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.pos_settings.show_note,expression:"pos_settings.show_note"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.pos_settings.show_note)?s._i(s.pos_settings.show_note,null)>-1:s.pos_settings.show_note},on:{change:function(t){var e=s.pos_settings.show_note,o=t.target,i=!!o.checked;if(Array.isArray(e)){var n=s._i(e,null);o.checked?n<0&&s.$set(s.pos_settings,"show_note",e.concat([null])):n>-1&&s.$set(s.pos_settings,"show_note",e.slice(0,n).concat(e.slice(n+1)))}else s.$set(s.pos_settings,"show_note",i)}}}),s._v(" "),e("span",{staticClass:"slider"})])]),s._v(" "),e("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[e("label",{staticClass:"switch switch-primary mr-3"},[s._v("\n                       "+s._s(s.$t("Enable_Print_Invoice"))+"\n                        "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.pos_settings.is_printable,expression:"pos_settings.is_printable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.pos_settings.is_printable)?s._i(s.pos_settings.is_printable,null)>-1:s.pos_settings.is_printable},on:{change:function(t){var e=s.pos_settings.is_printable,o=t.target,i=!!o.checked;if(Array.isArray(e)){var n=s._i(e,null);o.checked?n<0&&s.$set(s.pos_settings,"is_printable",e.concat([null])):n>-1&&s.$set(s.pos_settings,"is_printable",e.slice(0,n).concat(e.slice(n+1)))}else s.$set(s.pos_settings,"is_printable",i)}}}),s._v(" "),e("span",{staticClass:"slider"})])]),s._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"products_per_page",rules:{required:!0}},scopedSlots:s._u([{key:"default",fn:function(t){return[e("b-form-group",{attrs:{label:"How many items do you want to display *"}},[e("b-form-input",{attrs:{state:s.getValidationState(t),"aria-describedby":"products_per_page-feedback",label:"How many items do you want to display.",placeholder:"How many items do you want to display.",type:"number"},model:{value:s.pos_settings.products_per_page,callback:function(t){s.$set(s.pos_settings,"products_per_page",t)},expression:"pos_settings.products_per_page"}}),s._v(" "),e("b-form-invalid-feedback",{attrs:{id:"products_per_page-feedback"}},[s._v(s._s(t.errors[0]))])],1)]}}],null,!1,674253759)})],1),s._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",type:"submit"}},[e("i",{staticClass:"i-Yes me-2 font-weight-bold"}),s._v(" "+s._s(s.$t("submit")))])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);