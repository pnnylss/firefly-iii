"use strict";(self["webpackChunkfirefly_iii"]=self["webpackChunkfirefly_iii"]||[]).push([[7499],{7499:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var i=a(9835),n=a(6970);const s=(0,i.Uk)("Edit"),o=(0,i.Uk)("Delete"),r=(0,i.Uk)("Transactions without a budget");function l(e,t,a,l,d,u){const g=(0,i.up)("q-th"),p=(0,i.up)("q-tr"),m=(0,i.up)("router-link"),c=(0,i.up)("q-td"),h=(0,i.up)("q-item-label"),f=(0,i.up)("q-item-section"),w=(0,i.up)("q-item"),b=(0,i.up)("q-list"),y=(0,i.up)("q-btn-dropdown"),_=(0,i.up)("q-table"),k=(0,i.up)("q-btn"),q=(0,i.up)("q-fab-action"),Z=(0,i.up)("q-fab"),W=(0,i.up)("q-page-sticky"),Q=(0,i.up)("q-page"),R=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(Q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(_,{title:e.$t("firefly.budgets"),rows:d.rows,columns:d.columns,"row-key":"id",onRequest:u.onRequest,pagination:d.pagination,"onUpdate:pagination":t[0]||(t[0]=e=>d.pagination=e),loading:d.loading,class:"q-ma-md"},{header:(0,i.w5)((e=>[(0,i.Wm)(p,{props:e},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.cols,(t=>((0,i.wg)(),(0,i.j4)(g,{key:t.name,props:e},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),body:(0,i.w5)((e=>[(0,i.Wm)(p,{props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{key:"name",props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{to:{name:"budgets.show",params:{id:e.row.id}},class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(e.row.name),1)])),_:2},1032,["to"])])),_:2},1032,["props"]),(0,i.Wm)(c,{key:"menu",props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{color:"primary",label:"Actions",size:"sm"},{default:(0,i.w5)((()=>[(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.wy)(((0,i.wg)(),(0,i.j4)(w,{clickable:"",to:{name:"budgets.edit",params:{id:e.row.id}}},{default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[s])),_:1})])),_:1})])),_:2},1032,["to"])),[[R]]),(0,i.wy)(((0,i.wg)(),(0,i.j4)(w,{clickable:"",onClick:t=>u.deleteBudget(e.row.id,e.row.name)},{default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[o])),_:1})])),_:1})])),_:2},1032,["onClick"])),[[R]])])),_:2},1024)])),_:2},1024)])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["title","rows","columns","onRequest","pagination","loading"]),(0,i._)("p",null,[(0,i.Wm)(k,{to:{name:"budgets.show",params:{id:0}}},{default:(0,i.w5)((()=>[r])),_:1},8,["to"])]),(0,i.Wm)(W,{position:"bottom-right",offset:[18,18]},{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{label:"Actions",square:"","vertical-actions-align":"right","label-position":"left",color:"green",icon:"fas fa-chevron-up",direction:"up"},{default:(0,i.w5)((()=>[(0,i.Wm)(q,{color:"primary",square:"",to:{name:"budgets.create"},icon:"fas fa-exchange-alt",label:"New budget"},null,8,["to"])])),_:1})])),_:1})])),_:1})}var d=a(1049),u=a(7913),g=a(1569);class p{list(e,t){let a="/api/v1/budgets";return g.api.get(a,{params:{page:e,cache:t}})}}const m={name:"Index",watch:{$route(e){"budgets.index"===e.name&&(this.page=1,this.updateBreadcrumbs(),this.triggerUpdate())}},data(){return{rows:[],pagination:{sortBy:"desc",descending:!1,page:1,rowsPerPage:5,rowsNumber:100},loading:!1,columns:[{name:"name",label:"Name",field:"name",align:"left"},{name:"menu",label:" ",field:"menu",align:"right"}]}},computed:{...(0,d.Se)("fireflyiii",["getRange","getCacheKey","getListPageSize"])},created(){this.pagination.rowsPerPage=this.getListPageSize},mounted(){if(this.type=this.$route.params.type,null===this.getRange.start||null===this.getRange.end){const e=(0,d.oR)();e.subscribe(((e,t)=>{"fireflyiii/setRange"===e.type&&(this.range={start:e.payload.start,end:e.payload.end},this.triggerUpdate())}))}null!==this.getRange.start&&null!==this.getRange.end&&(this.range={start:this.getRange.start,end:this.getRange.end},this.triggerUpdate())},methods:{deleteBudget:function(e,t){this.$q.dialog({title:"Confirm",message:'Do you want to delete budget "'+t+'"? Any and all transactions linked to this budget will be spared.',cancel:!0,persistent:!0}).onOk((()=>{this.destroyBudget(e)}))},destroyBudget:function(e){new u.Z("budgets").destroy(e).then((()=>{this.$store.dispatch("fireflyiii/refreshCacheKey"),this.triggerUpdate()}))},updateBreadcrumbs:function(){this.$route.meta.pageTitle="firefly.budgets",this.$route.meta.breadcrumbs=[{title:"budgets"}]},onRequest:function(e){this.page=e.pagination.page,this.triggerUpdate()},triggerUpdate:function(){if(this.loading)return;if(null===this.range.start||null===this.range.end)return;this.loading=!0;const e=new p;this.rows=[],e.list(this.page,this.getCacheKey).then((e=>{this.pagination.rowsPerPage=e.data.meta.pagination.per_page,this.pagination.rowsNumber=e.data.meta.pagination.total,this.pagination.page=this.page;for(let t in e.data.data)if(e.data.data.hasOwnProperty(t)){let a=e.data.data[t],i={id:a.id,name:a.attributes.name};this.rows.push(i)}this.loading=!1}))}}};var c=a(1639),h=a(9885),f=a(1746),w=a(9546),b=a(1682),y=a(7220),_=a(2045),k=a(3246),q=a(490),Z=a(1233),W=a(3115),Q=a(8879),R=a(3388),P=a(9361),U=a(935),B=a(2146),C=a(9984),v=a.n(C);const $=(0,c.Z)(m,[["render",l]]),T=$;v()(m,"components",{QPage:h.Z,QTable:f.Z,QTr:w.Z,QTh:b.Z,QTd:y.Z,QBtnDropdown:_.Z,QList:k.Z,QItem:q.Z,QItemSection:Z.Z,QItemLabel:W.Z,QBtn:Q.Z,QPageSticky:R.Z,QFab:P.Z,QFabAction:U.Z}),v()(m,"directives",{ClosePopup:B.Z})}}]);