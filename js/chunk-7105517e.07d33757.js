(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7105517e"],{"6c79":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrap"},[e.mobile?t("div",[t("p",[e._v("车主姓名："+e._s(e.name))]),t("p",[e._v("车主电话："+e._s(e.mobile))]),t("a",{attrs:{href:"tel:"+e.mobile}},[e._v("一键通话")])]):t("el-row",[t("el-col",{attrs:{span:24}},[t("el-result",{attrs:{icon:"info",title:"数据错误",subTitle:"没有获取到手机号"}})],1)],1)],1)},i=[],r={name:"MoveCarPage",data(){return{name:"",mobile:""}},mounted(){const e=this.$route.query.surname,t=this.$route.query.gender-0===1?"先生":"女士",n=this.$route.query.mobile;this.name=e+t,this.mobile=n}},o=r,a=(n("de64"),n("2877")),u=Object(a["a"])(o,s,i,!1,null,"77432f59",null);t["default"]=u.exports},de64:function(e,t,n){"use strict";n("df45")},df45:function(e,t,n){}}]);