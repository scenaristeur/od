"use strict";(self["webpackChunkod"]=self["webpackChunkod"]||[]).push([[508],{9181:function(e,t,s){s.d(t,{Z:function(){return u}});var i=function(){var e=this,t=e._self._c;return t("div",[t("b-input",{attrs:{placeholder:"label"},on:{click:e.reset},model:{value:e.item.label,callback:function(t){e.$set(e.item,"label",t)},expression:"item.label"}}),null!=e.session&&null!=e.session.webId?t("b-button",{attrs:{variant:"success"},on:{click:e.save}},[e._v("Save")]):t("b-button",{attrs:{disabled:"",variant:"warning"}},[e._v("You must loggin to your pod to save ")]),t("br"),null!=e.result?t("div",[t("b",[e._v(e._s(e.result.label))]),e._v(" file saved at "),t("a",{attrs:{href:e.result.savedFile,target:"_blank"}},[e._v(" "+e._s(e.result.savedFile)+" ")])]):e._e(),e._v(" "+e._s(e.formType)),t("br"),e._v(" "+e._s(e.item)),t("br")],1)},l=[],r={name:"FormView",props:["formType"],data(){return{result:null,item:{label:void 0,"@id":void 0,"@type":[]}}},created(){this.item.types="offer"==this.formType?[{"@id":"https://schema.org/Offer"},{"@id":"https://www.wikidata.org/wiki/Q542869"}]:[{"@id":"https://schema.org/Demand"},{"@id":"https://www.wikidata.org/wiki/Q4402708"}]},methods:{reset(){this.result=null},async save(){console.log("save"),this.result=await this.$putItem(this.item),this.item["@id"]=void 0,this.item.label=void 0}},computed:{session:{get(){return this.$store.state.solid.session},set(){}}}},a=r,n=s(1001),o=(0,n.Z)(a,i,l,!1,null,null,null),u=o.exports},2452:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var i=function(){var e=this,t=e._self._c;return t("div",[e._v(" Offer "),t("FormView",{attrs:{formType:"offer"}})],1)},l=[],r=s(9181),a={name:"OfferView",components:{FormView:r.Z}},n=a,o=s(1001),u=(0,o.Z)(n,i,l,!1,null,null,null),d=u.exports}}]);
//# sourceMappingURL=offer.6bb0126b.js.map