"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6726],{55819:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var s=a(5947),n=a.n(s);const r={metaInfo:{title:"Create Task"},data:function(){return{isLoading:!0,SubmitProcessing:!1,projects:[],companies:[],employees:[],task:{title:"",description:"",project_id:"",company_id:"",assigned_to:[],start_date:(new Date).toISOString().slice(0,10),end_date:"",status:""}}},methods:{Submit_Task:function(){var t=this;this.$refs.ref_create_task.validate().then((function(e){e?t.Create_Task():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},makeToast:function(t,e,a){this.$root.$bvToast.toast(e,{title:a,variant:t,solid:!0})},getValidationState:function(t){var e=t.dirty,a=t.validated,s=t.valid;return e||a?void 0===s?null:s:null},Create_Task:function(){var t=this;this.SubmitProcessing=!0;var e=this;n().start(),n().set(.1),axios.post("tasks",{title:e.task.title,description:e.task.description,company_id:e.task.company_id,project_id:e.task.project_id,assigned_to:e.task.assigned_to,start_date:e.task.start_date,end_date:e.task.end_date,status:e.task.status}).then((function(e){n().done(),t.SubmitProcessing=!1,t.$router.push({name:"index_task"}),t.makeToast("success",t.$t("Successfully_Created"),t.$t("Success"))})).catch((function(e){n().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),t.SubmitProcessing=!1}))},Selected_Project:function(t){null===t&&(this.task.project_id="")},Selected_Team:function(t){null===t&&(this.task.assigned_to=[])},Selected_Status:function(t){null===t&&(this.task.status="")},Selected_Company:function(t){null===t&&(this.task.company_id=""),this.employees=[],this.task.assigned_to=[],this.Get_employees_by_company(t)},Get_employees_by_company:function(t){var e=this;axios.get("/Get_employees_by_company?id="+t).then((function(t){var a=t.data;return e.employees=a}))},GetElements:function(){var t=this;axios.get("tasks/create").then((function(e){t.projects=e.data.projects,t.companies=e.data.companies,t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))}},created:function(){this.GetElements()}};const i=(0,a(14486).A)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:t.$t("Create_Task"),folder:t.$t("Tasks")}}),t._v(" "),t.isLoading?a("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():a("validation-observer",{ref:"ref_create_task"},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Task.apply(null,arguments)}}},[a("b-row",[a("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("b-card",[a("b-row",[a("b-col",{attrs:{lg:"4",md:"6",sm:"12"}},[a("validation-provider",{attrs:{name:"Title",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("title")+" *"}},[a("b-form-input",{attrs:{placeholder:t.$t("Enter_Task_Title"),state:t.getValidationState(e),"aria-describedby":"title-feedback",label:"Task Title"},model:{value:t.task.title,callback:function(e){t.$set(t.task,"title",e)},expression:"task.title"}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"title-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,1865549125)})],1),t._v(" "),a("b-col",{attrs:{lg:"4",md:"6",sm:"12"}},[a("validation-provider",{attrs:{name:"start_date",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("start_date")+" *"}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"start_date-feedback",type:"date"},model:{value:t.task.start_date,callback:function(e){t.$set(t.task,"start_date",e)},expression:"task.start_date"}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"start_date-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,959996867)})],1),t._v(" "),a("b-col",{attrs:{lg:"4",md:"6",sm:"12"}},[a("validation-provider",{attrs:{name:"end_date",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("Finish_Date")+" *"}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"end_date-feedback",type:"date"},model:{value:t.task.end_date,callback:function(e){t.$set(t.task,"end_date",e)},expression:"task.end_date"}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"end_date-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,1051971551)})],1),t._v(" "),a("b-col",{attrs:{lg:"4",md:"6",sm:"12"}},[a("validation-provider",{attrs:{name:"Project"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,n=e.errors;return a("b-form-group",{attrs:{label:t.$t("Project")+" *"}},[a("v-select",{class:{"is-invalid":!!n.length},attrs:{state:!n[0]&&(!!s||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Project"),options:t.projects.map((function(t){return{label:t.title,value:t.id}}))},on:{input:t.Selected_Project},model:{value:t.task.project_id,callback:function(e){t.$set(t.task,"project_id",e)},expression:"task.project_id"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(n[0]))])],1)}}],null,!1,2688915400)})],1),t._v(" "),a("b-col",{attrs:{lg:"4",md:"6",sm:"12"}},[a("validation-provider",{attrs:{name:"Company"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,n=e.errors;return a("b-form-group",{attrs:{label:t.$t("Company")+" *"}},[a("v-select",{class:{"is-invalid":!!n.length},attrs:{state:!n[0]&&(!!s||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Company"),options:t.companies.map((function(t){return{label:t.name,value:t.id}}))},on:{input:t.Selected_Company},model:{value:t.task.company_id,callback:function(e){t.$set(t.task,"company_id",e)},expression:"task.company_id"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(n[0]))])],1)}}],null,!1,17890031)})],1),t._v(" "),a("b-col",{attrs:{lg:"4",md:"6",sm:"12"}},[a("validation-provider",{attrs:{name:"Assigned_Employees"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,n=e.errors;return a("b-form-group",{attrs:{label:t.$t("Assigned_Employees")}},[a("v-select",{class:{"is-invalid":!!n.length},attrs:{state:!n[0]&&(!!s||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Team"),options:t.employees.map((function(t){return{label:t.username,value:t.id}}))},on:{input:t.Selected_Team},model:{value:t.task.assigned_to,callback:function(e){t.$set(t.task,"assigned_to",e)},expression:"task.assigned_to"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(n[0]))])],1)}}],null,!1,3048908428)})],1),t._v(" "),a("b-col",{attrs:{lg:"4",md:"6",sm:"12"}},[a("validation-provider",{attrs:{name:"Status",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,n=e.errors;return a("b-form-group",{attrs:{label:t.$t("Status")+" *"}},[a("v-select",{class:{"is-invalid":!!n.length},attrs:{state:!n[0]&&(!!s||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Status"),options:[{label:"Not Started",value:"not_started"},{label:"In Progress",value:"progress"},{label:"Cancelled",value:"cancelled"},{label:"On Hold",value:"hold"},{label:"Completed",value:"completed"}]},on:{input:t.Selected_Status},model:{value:t.task.status,callback:function(e){t.$set(t.task,"status",e)},expression:"task.status"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(n[0]))])],1)}}],null,!1,1658158517)})],1),t._v(" "),a("b-col",{attrs:{lg:"8",md:"8",sm:"12"}},[a("validation-provider",{attrs:{name:"Description"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,n=e.errors;return a("b-form-group",{attrs:{label:t.$t("Details")}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.task.description,expression:"task.description"}],staticClass:"form-control",class:{"is-invalid":!!n.length},attrs:{state:!n[0]&&(!!s||null),rows:"4",placeholder:t.$t("Afewwords")},domProps:{value:t.task.description},on:{input:function(e){e.target.composing||t.$set(t.task,"description",e.target.value)}}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(n[0]))])],1)}}],null,!1,2843828298)})],1),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",[a("b-button",{attrs:{variant:"primary",type:"submit",disabled:t.SubmitProcessing}},[a("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);