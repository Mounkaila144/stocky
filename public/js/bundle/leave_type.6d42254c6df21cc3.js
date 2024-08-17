"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1135],{83663:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var i=s(5947),a=s.n(i);const n={metaInfo:{title:"Leave Type"},data:function(){return{isLoading:!0,SubmitProcessing:!1,serverParams:{columnFilters:{},sort:{field:"id",type:"desc"},page:1,perPage:10},selectedIds:[],totalRows:"",search:"",limit:"10",editmode:!1,leave_types:[],leave_type:{title:""}}},computed:{columns:function(){return[{label:this.$t("Leave_Type"),field:"title",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}},methods:{updateParams:function(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange:function(e){var t=e.currentPage;this.serverParams.page!==t&&(this.updateParams({page:t}),this.Get_leaves_type(t))},onPerPageChange:function(e){var t=e.currentPerPage;this.limit!==t&&(this.limit=t,this.updateParams({page:1,perPage:t}),this.Get_leaves_type(1))},selectionChanged:function(e){var t=this,s=e.selectedRows;this.selectedIds=[],s.forEach((function(e,s){t.selectedIds.push(e.id)}))},onSortChange:function(e){this.updateParams({sort:{type:e[0].type,field:e[0].field}}),this.Get_leaves_type(this.serverParams.page)},onSearch:function(e){this.search=e.searchTerm,this.Get_leaves_type(this.serverParams.page)},getValidationState:function(e){var t=e.dirty,s=e.validated,i=e.valid;return t||s?void 0===i?null:i:null},Submit_Type:function(){var e=this;this.$refs.Create_Type.validate().then((function(t){t?e.editmode?e.Update_Type():e.Create_Type():e.makeToast("danger",e.$t("Please_fill_the_form_correctly"),e.$t("Failed"))}))},makeToast:function(e,t,s){this.$root.$bvToast.toast(t,{title:s,variant:e,solid:!0})},New_Type:function(){this.reset_Form(),this.editmode=!1,this.$bvModal.show("New_Type")},Edit_Type:function(e){this.Get_leaves_type(this.serverParams.page),this.reset_Form(),this.leave_type=e,this.editmode=!0,this.$bvModal.show("New_Type")},Get_leaves_type:function(e){var t=this;a().start(),a().set(.1),axios.get("leave_type?page="+e+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(e){t.totalRows=e.data.totalRows,t.leave_types=e.data.leave_types,a().done(),t.isLoading=!1})).catch((function(e){a().done(),setTimeout((function(){t.isLoading=!1}),500)}))},Create_Type:function(){var e=this;this.SubmitProcessing=!0,axios.post("leave_type",{title:this.leave_type.title}).then((function(t){e.SubmitProcessing=!1,Fire.$emit("Event_Type"),e.makeToast("success",e.$t("Created_in_successfully"),e.$t("Success"))})).catch((function(t){e.SubmitProcessing=!1,e.makeToast("danger",e.$t("InvalidData"),e.$t("Failed"))}))},Update_Type:function(){var e=this;this.SubmitProcessing=!0,axios.put("leave_type/"+this.leave_type.id,{title:this.leave_type.title}).then((function(t){e.SubmitProcessing=!1,Fire.$emit("Event_Type"),e.makeToast("success",e.$t("Updated_in_successfully"),e.$t("Success"))})).catch((function(t){e.SubmitProcessing=!1,e.makeToast("danger",e.$t("InvalidData"),e.$t("Failed"))}))},reset_Form:function(){this.leave_type={id:"",title:""}},Remove_Type:function(e){var t=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(s){s.value&&axios.delete("leave_type/"+e).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Deleted_in_successfully"),"success"),Fire.$emit("Delete_Type")})).catch((function(){t.$swal(t.$t("Delete.Failed"),t.$t("Delete.Therewassomethingwronge"),"warning")}))}))},delete_by_selected:function(){var e=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(t){t.value&&(a().start(),a().set(.1),axios.post("leave_type/delete/by_selection",{selectedIds:e.selectedIds}).then((function(){e.$swal(e.$t("Delete.Deleted"),e.$t("Deleted_in_successfully"),"success"),Fire.$emit("Delete_Type")})).catch((function(){setTimeout((function(){return a().done()}),500),e.$swal(e.$t("Delete.Failed"),e.$t("Delete.Therewassomethingwronge"),"warning")})))}))}},created:function(){var e=this;this.Get_leaves_type(1),Fire.$on("Event_Type",(function(){setTimeout((function(){e.Get_leaves_type(e.serverParams.page),e.$bvModal.hide("New_Type")}),500)})),Fire.$on("Delete_Type",(function(){setTimeout((function(){e.Get_leaves_type(e.serverParams.page)}),500)}))}},o=n;const l=(0,s(14486).A)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-content"},[s("breadcumb",{attrs:{page:e.$t("Leave_Type"),folder:e.$t("hrm")}}),e._v(" "),e.isLoading?s("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):e._e(),e._v(" "),e.isLoading?e._e():s("b-card",{staticClass:"wrapper"},[s("vue-good-table",{attrs:{mode:"remote",columns:e.columns,totalRows:e.totalRows,rows:e.leave_types,"search-options":{enabled:!0,placeholder:e.$t("Search_this_table")},"select-options":{enabled:!0,clearSelectionText:""},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"table-hover tableOne vgt-table"},on:{"on-page-change":e.onPageChange,"on-per-page-change":e.onPerPageChange,"on-sort-change":e.onSortChange,"on-search":e.onSearch,"on-selected-rows-change":e.selectionChanged},scopedSlots:e._u([{key:"table-row",fn:function(t){return["actions"==t.column.field?s("span",[s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"cursor-pointer",attrs:{title:"Edit"},on:{click:function(s){return e.Edit_Type(t.row)}}},[s("i",{staticClass:"i-Edit text-25 text-success"})]),e._v(" "),s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"cursor-pointer",attrs:{title:"Delete"},on:{click:function(s){return e.Remove_Type(t.row.id)}}},[s("i",{staticClass:"i-Close-Window text-25 text-danger"})])]):e._e()]}}],null,!1,1888634426)},[s("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[s("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(t){return e.delete_by_selected()}}},[e._v(e._s(e.$t("Del")))])]),e._v(" "),s("div",{staticClass:"mt-2 mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[s("b-button",{staticClass:"btn-rounded",attrs:{variant:"btn btn-primary btn-icon m-1"},on:{click:function(t){return e.New_Type()}}},[s("i",{staticClass:"i-Add"}),e._v("\n          "+e._s(e.$t("Add"))+"\n        ")])],1)])],1),e._v(" "),s("validation-observer",{ref:"Create_Type"},[s("b-modal",{attrs:{"hide-footer":"",size:"md",id:"New_Type",title:e.editmode?e.$t("Edit"):e.$t("Add")}},[s("b-form",{on:{submit:function(t){return t.preventDefault(),e.Submit_Type.apply(null,arguments)}}},[s("b-row",[s("b-col",{attrs:{md:"12"}},[s("validation-provider",{attrs:{name:"title",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(t){return[s("b-form-group",{attrs:{label:e.$t("title")+" *"}},[s("b-form-input",{attrs:{placeholder:e.$t("Enter_title"),state:e.getValidationState(t),"aria-describedby":"title-feedback",label:"title"},model:{value:e.leave_type.title,callback:function(t){e.$set(e.leave_type,"title",t)},expression:"leave_type.title"}}),e._v(" "),s("b-form-invalid-feedback",{attrs:{id:"title-feedback"}},[e._v(e._s(t.errors[0]))])],1)]}}])})],1),e._v(" "),s("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[s("b-button",{attrs:{variant:"primary",type:"submit",disabled:e.SubmitProcessing}},[s("i",{staticClass:"i-Yes me-2 font-weight-bold"}),e._v(" "+e._s(e.$t("submit")))]),e._v(" "),e.SubmitProcessing?e._m(0):e._e()],1)],1)],1)],1)],1)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);