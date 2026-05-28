;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="e2b483b2-c660-de24-893e-79fcec56c3cd")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67574,e=>{"use strict";let t=(0,e.i(679709).default)("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);e.s(["Book",0,t],67574)},469099,e=>{"use strict";let t=(0,e.i(679709).default)("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);e.s(["Boxes",0,t],469099)},108892,348682,e=>{"use strict";var t=e.i(125356);let a={list:(e,t)=>["projects",e,"api-keys",t].filter(Boolean),single:(e,t)=>["projects",e,"api-keys",t],status:e=>["projects",e,"api-keys","legacy"],temporary:e=>["projects",e,"api-keys","temporary"]};e.s(["apiKeysKeys",0,a],348682);var s=e.i(234745);async function r({projectRef:e,reveal:t},a){if(!e)throw Error("projectRef is required");let{data:i,error:n}=await (0,s.get)("/v1/projects/{ref}/api-keys",{params:{path:{ref:e},query:{reveal:t}},signal:a});return n&&(0,s.handleError)(n),i}e.s(["getKeys",0,(e=[])=>{let t=e.find(e=>"anon"===e.name),a=e.find(e=>"service_role"===e.name),s=e.find(e=>"publishable"===e.type);return{anonKey:t,serviceKey:a,publishableKey:s,secretKey:e.find(e=>"secret"===e.type),allSecretKeys:e.filter(e=>"secret"===e.type)}},"useAPIKeysQuery",0,({projectRef:e,reveal:s=!1},{enabled:i=!0,...n}={})=>(0,t.useQuery)({queryKey:a.list(e,s),queryFn:({signal:t})=>r({projectRef:e,reveal:s},t),enabled:i&&void 0!==e,...n})],108892)},78162,e=>{"use strict";e.s(["configKeys",0,{settings:e=>["projects",e,"settings"],settingsV2:e=>["projects",e,"settings-v2"],api:e=>["projects",e,"settings","api"],postgrest:e=>["projects",e,"postgrest"],jwtSecretUpdatingStatus:e=>["projects",e,"jwt-secret-updating-status"],storage:e=>["projects",e,"storage"],upgradeEligibility:e=>["projects",e,"upgrade-eligibility"],upgradeStatus:e=>["projects",e,"upgrade-status"],diskAttributes:e=>["projects",e,"disk-attributes"],diskBreakdown:e=>["projects",e,"disk-breakdown"],diskUtilization:e=>["projects",e,"disk-utilization"],projectCreationPostgresVersions:(e,t,a)=>["projects",e,t,a,"available-creation-versions"],projectUnpausePostgresVersions:e=>["projects",e,"available-unpause-versions"],diskAutoscaleConfig:e=>["projects",e,"disk-autoscale-config"],deploymentMode:()=>["deployment-mode"]}])},627069,e=>{"use strict";var t=e.i(221628),a=e.i(416340),s=e.i(843778);let r=a.forwardRef(({className:e,...a},r)=>(0,t.jsx)("div",{ref:r,className:(0,s.cn)("overflow-hidden rounded-lg border bg-surface-100 text-card-foreground shadow-xs",e),...a}));r.displayName="Card";let i=a.forwardRef(({className:e,...a},r)=>(0,t.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col space-y-1.5 py-4 px-(--card-padding-x) border-b",e),...a}));i.displayName="CardHeader";let n=a.forwardRef(({className:e,...a},r)=>(0,t.jsx)("h3",{ref:r,className:(0,s.cn)("text-xs font-mono uppercase",e),...a}));n.displayName="CardTitle";let o=a.forwardRef(({className:e,...a},r)=>(0,t.jsx)("p",{ref:r,className:(0,s.cn)("text-sm text-foreground-lighter",e),...a}));o.displayName="CardDescription";let l=a.forwardRef(({className:e,...a},r)=>(0,t.jsx)("div",{ref:r,className:(0,s.cn)("py-4 px-(--card-padding-x) border-b last:border-none",e),...a}));l.displayName="CardContent";let c=a.forwardRef(({className:e,...a},r)=>(0,t.jsx)("div",{ref:r,className:(0,s.cn)("flex items-center py-4 px-(--card-padding-x)",e),...a}));c.displayName="CardFooter",e.s(["Card",0,r,"CardContent",0,l,"CardDescription",0,o,"CardFooter",0,c,"CardHeader",0,i,"CardTitle",0,n])},323502,19584,e=>{"use strict";let t=(0,e.i(679709).default)("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);e.s(["default",0,t],19584),e.s(["ArrowDown",0,t],323502)},146628,e=>{"use strict";let t=(0,e.i(679709).default)("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);e.s(["ArrowUp",0,t],146628)},394366,e=>{"use strict";let t=(0,e.i(679709).default)("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);e.s(["ChevronsUpDown",0,t],394366)},799750,e=>{"use strict";var t=e.i(221628),a=e.i(416340),s=e.i(843778);let r=a.forwardRef(({className:e,containerClassName:r,children:i,stickyLastColumn:n,outerContainerRef:o,...l},c)=>{let d=a.useRef(null),{hasHorizontalScroll:u,canScrollLeft:p,canScrollRight:m}=(e=>{let[t,s]=a.useState(!1),[r,i]=a.useState(!1),[n,o]=a.useState(!1);return a.useEffect(()=>{let a=e.current;if(!a)return;let r=()=>{let e=a.scrollWidth>a.clientWidth;if(s(e),e){let e=a.scrollLeft>0,t=a.scrollLeft<a.scrollWidth-a.clientWidth;i(e),o(t)}else i(!1),o(!1)},n=()=>{if(t){let e=a.scrollLeft>0,t=a.scrollLeft<a.scrollWidth-a.clientWidth;i(e),o(t)}};return r(),a.addEventListener("scroll",n),window.addEventListener("resize",r),()=>{a.removeEventListener("scroll",n),window.removeEventListener("resize",r)}},[e,t]),{hasHorizontalScroll:t,canScrollLeft:r,canScrollRight:n}})(d),h=(0,s.cn)("[&_td:last-child]:before:absolute [&_td:last-child]:before:top-0 [&_td:last-child]:before:-left-6","[&_td:last-child]:before:bottom-0 [&_td:last-child]:before:w-6 [&_td:last-child]:before:bg-linear-to-l","[&_td:last-child]:before:from-black/5 dark:[&_td:last-child]:before:from-black/20 [&_td:last-child]:before:to-transparent","[&_td:last-child]:before:opacity-0 [&_td:last-child]:before:transition-all [&_td:last-child]:before:duration-400","[&_td:last-child]:before:easing-[0.24, 0.25, 0.05, 1] [&_td:last-child]:before:z-39","[&_th:last-child]:before:absolute [&_th:last-child]:before:top-0 [&_th:last-child]:before:-left-6","[&_th:last-child]:before:bottom-0 [&_th:last-child]:before:w-6 [&_th:last-child]:before:bg-linear-to-l","[&_th:last-child]:before:from-black/5 dark:[&_th:last-child]:before:from-black/20 [&_th:last-child]:before:to-transparent","[&_th:last-child]:before:opacity-0 [&_th:last-child]:before:transition-all [&_th:last-child]:before:duration-400","[&_th:last-child]:before:easing-[0.24, 0.25, 0.05, 1] [&_th:last-child]:before:z-39");return(0,t.jsxs)("div",{ref:o,className:(0,s.cn)(r,"relative"),children:[(0,t.jsx)("div",{className:(0,s.cn)("absolute inset-0 pointer-events-none z-38","before:absolute before:top-0 before:right-0 before:bottom-0 before:w-6 before:bg-linear-to-l before:from-black/5 dark:before:from-black/20 before:to-transparent before:opacity-0 before:transition-all before:duration-400 before:easing-[0.24, 0.25, 0.05, 1]","after:absolute after:top-0 after:left-0 after:bottom-0 after:w-6 after:bg-linear-to-r after:from-black/5 dark:after:from-black/20 after:to-transparent after:opacity-0 after:transition-all after:duration-400 after:easing-[0.24, 0.25, 0.05, 1]",u&&"hover:before:opacity-100 hover:after:opacity-100",m&&"before:opacity-100",p&&"after:opacity-100")}),(0,t.jsx)("div",{ref:d,className:(0,s.cn)("w-full overflow-auto",n&&["[&_tr>*:last-child]:sticky [&_tr>*:last-child]:z-38 [&_tr>*:last-child]:right-0","[&_tr:hover>*:last-child]:bg-transparent","[&_th>*:last-child]:bg-surface-100",h,u&&"[&_tr:hover>td:last-child]:!bg-surface-200"],m&&"[&_td]:before:opacity-100 [&_tr>*:last-child]:before:opacity-100 [&_th:last-child]:before:opacity-100",e),...l,children:i})]})});r.displayName="ShadowScrollArea",e.s(["ShadowScrollArea",0,r],799750)},492418,e=>{"use strict";var t=e.i(221628),a=e.i(323502),s=e.i(146628),r=e.i(394366),i=e.i(416340),n=e.i(843778),o=e.i(799750);let l=i.forwardRef(({className:e,containerProps:a,...s},r)=>(0,t.jsx)(o.ShadowScrollArea,{...a,children:(0,t.jsx)("table",{ref:r,className:(0,n.cn)("group/table w-full caption-bottom text-sm",e),...s})}));l.displayName="Table";let c=i.forwardRef(({className:e,...a},s)=>(0,t.jsx)("thead",{ref:s,className:(0,n.cn)("[&_tr]:border-b [&>tr]:bg-200",e),...a}));c.displayName="TableHeader";let d=i.forwardRef(({className:e,...a},s)=>(0,t.jsx)("tbody",{ref:s,className:(0,n.cn)("[&_tr:last-child]:border-0",e),...a}));d.displayName="TableBody";let u=i.forwardRef(({className:e,...a},s)=>(0,t.jsx)("tfoot",{ref:s,className:(0,n.cn)("border-t font-medium",e),...a}));u.displayName="TableFooter";let p=i.forwardRef(({className:e,...a},s)=>(0,t.jsx)("tr",{ref:s,className:(0,n.cn)("border-b group data-[state=selected]:bg-muted hover:bg-surface-200",e),...a}));p.displayName="TableRow";let m=i.forwardRef(({className:e,...a},s)=>(0,t.jsx)("th",{ref:s,className:(0,n.cn)("h-10 px-4 text-left align-middle heading-meta whitespace-nowrap text-foreground-lighter [&:has([role=checkbox])]:pr-0","transition-colors",e),...a}));function h({column:e,currentSort:i,onSortChange:o,children:l,className:c}){let d,[u,p]=i.split(":"),m=u===e;return(0,t.jsxs)("button",{type:"button",className:(0,n.cn)("group/table-head-sort heading-meta whitespace-nowrap flex items-center gap-1 cursor-pointer select-none bg-transparent! border-none p-0 w-full text-left",c),onClick:()=>o(e),children:[l,(0,t.jsx)("div",{className:"w-3 h-3 relative overflow-hidden",children:(d="w-3 h-3 absolute inset-0",(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.ArrowUp,{className:(0,n.cn)(d,"transition-transform",m&&"asc"===p?"translate-y-0":"translate-y-full")}),(0,t.jsx)(a.ArrowDown,{className:(0,n.cn)(d,"transition-transform",m&&"desc"===p?"translate-y-0":"-translate-y-full")}),(0,t.jsx)(r.ChevronsUpDown,{className:(0,n.cn)(d,"transition-opacity opacity-80 md:opacity-40",m?"opacity-0!":"group-hover/table-head-sort:opacity-80")})]}))})]})}m.displayName="TableHead",h.displayName="TableHeadSort";let f=i.forwardRef(({className:e,...a},s)=>(0,t.jsx)("td",{ref:s,className:(0,n.cn)("transition-colors p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...a}));f.displayName="TableCell";let b=i.forwardRef(({className:e,...a},s)=>(0,t.jsx)("caption",{ref:s,className:(0,n.cn)("border-t","p-4 text-sm text-foreground-muted",e),...a}));b.displayName="TableCaption",e.s(["Table",0,l,"TableBody",0,d,"TableCaption",0,b,"TableCell",0,f,"TableFooter",0,u,"TableHead",0,m,"TableHeadSort",0,h,"TableHeader",0,c,"TableRow",0,p])},108151,e=>{"use strict";var t=e.i(221628),a=e.i(416340),s=e.i(627069),r=e.i(843778),i=e.i(492418);let n=(0,a.forwardRef)(({className:e,style:a,delayIndex:s=0,animationDelay:i=150},n)=>(0,t.jsx)("div",{ref:n,className:(0,r.cn)("shimmering-loader rounded-sm py-3",e),style:{...a,animationFillMode:"backwards",animationDelay:`${s*i}ms`}}));n.displayName="ShimmeringLoader",e.s(["GenericSkeletonLoader",0,({className:e})=>(0,t.jsxs)("div",{className:(0,r.cn)(e,"space-y-2"),children:[(0,t.jsx)(n,{}),(0,t.jsx)(n,{className:"w-3/4"}),(0,t.jsx)(n,{className:"w-1/2"})]}),"GenericTableLoader",0,({headers:e=[],numRows:a=3})=>(0,t.jsx)(s.Card,{children:(0,t.jsxs)(i.Table,{children:[(0,t.jsx)(i.TableHeader,{children:(0,t.jsx)(i.TableRow,{children:0===e.length?(0,t.jsx)(i.TableHead,{}):e.map((e,a)=>(0,t.jsx)(i.TableHead,{children:e},`${e}_${a}`))})}),(0,t.jsx)(i.TableBody,{children:Array(a).fill(0).map((a,s)=>(0,t.jsx)(i.TableRow,{children:(0,t.jsx)(i.TableCell,{colSpan:e.length,children:(0,t.jsx)(n,{})})},`row_${s}`))})]})}),"ShimmeringLoader",0,n,"default",0,n])},21150,e=>{"use strict";e.s(["sqlKeys",0,{query:(e,t)=>["projects",e,"query",...t],ongoingQueries:e=>["projects",e,"ongoing-queries"]}])},714403,591052,e=>{"use strict";e.i(850036);var t=e.i(389273),a=e.i(248593);function s(e){let t=parseFloat(e);return Number.isFinite(t)?t:void 0}function r(e){let t=parseInt(e,10);return Number.isNaN(t)?void 0:t}function i(e){if(e.details){let t=e.details.match(/Rows Removed by Filter:\s*(\d+)/);t&&(e.rowsRemovedByFilter=r(t[1]))}e.children.forEach(i)}function n(e){let t={totalTime:0,totalCost:0,maxCost:0,hasSeqScan:!1,seqScanTables:[],hasIndexScan:!1},a=e=>{e.actualTime&&(t.totalTime=Math.max(t.totalTime,e.actualTime.end)),e.cost&&(t.maxCost=Math.max(t.maxCost,e.cost.end));let s=e.operation.toLowerCase();if(s.includes("seq scan")){t.hasSeqScan=!0;let a=e.details.match(/on\s+((?:"[^"]+"|[\w]+)(?:\.(?:"[^"]+"|[\w]+))*)/);a&&t.seqScanTables.push(a[1])}s.includes("index")&&(t.hasIndexScan=!0),e.children.forEach(a)};return e.forEach(a),t.totalCost=e[0]?.cost?.end??0,t}function o(e){let t=function(e){let t=e.map(e=>e["QUERY PLAN"]||"").filter(Boolean),a=[],i=[],n=/^(Filter|Sort Key|Group Key|Hash Cond|Join Filter|Index Cond|Recheck Cond|Rows Removed by Filter|Rows Removed by Index Recheck|Output|Merge Cond|Sort Method|Worker \d+|Buffers|Planning Time|Execution Time|One-Time Filter|InitPlan|SubPlan):/;for(let e=0;e<t.length;e++){let o=t[e];if(!o.trim())continue;let l=o.match(/^(\s*)/),c=l?l[1].length:0,d=o.includes("->"),u=o,p=c;if(d){let e=o.indexOf("->");p=e,u=o.substring(e+2).trim()}else u=o.trim();if(u.startsWith("Planning Time:")||u.startsWith("Execution Time:")||u.startsWith("Planning:")||u.startsWith("Execution:"))continue;if(n.test(u)&&i.length>0){let e=i[i.length-1].node;e.details+=(e.details?"\n":"")+u;continue}if(!d&&i.length>0&&c>0){let e=i[i.length-1];if(c>e.indent&&!u.match(/^\w+.*\(cost=/)){e.node.details+=(e.node.details?"\n":"")+u;continue}}let m=u.match(/^(.+?)\s*(\([^)]*cost=[^)]+\)(?:\s*\([^)]+\))*)?\s*$/);if(!m)continue;let[,h,f]=m,b=f?f.replace(/^\(|\)$/g,"").replace(/\)\s*\(/g," "):void 0,g=h.trim(),_="",y=h.match(/^(.+?)\s+on\s+(.+)$/i),E=h.match(/^(.+?)\s+using\s+(.+)$/i);y?(g=y[1].trim(),_="on "+y[2].trim()):E&&(g=E[1].trim(),_="using "+E[2].trim()),function(e,t,a,s){for(;s.length>0&&s[s.length-1].indent>=t;)s.pop();0===s.length?a.push(e):s[s.length-1].node.children.push(e),s.push({node:e,indent:t})}(function(e,t,a,i,n){let o={operation:e.trim(),details:t?.trim()||"",level:i,children:[],raw:n};if(a){let e=a.match(/cost=([\d.]+)\.\.([\d.]+)/);if(e){let t=s(e[1]),a=s(e[2]);void 0!==t&&void 0!==a&&(o.cost={start:t,end:a})}let t=a.match(/rows=(\d+)/);t&&(o.rows=r(t[1]));let i=a.match(/width=(\d+)/);i&&(o.width=r(i[1]));let n=a.match(/actual time=([\d.]+)\.\.([\d.]+)/);if(n){let e=s(n[1]),t=s(n[2]);void 0!==e&&void 0!==t&&(o.actualTime={start:e,end:t});let i=a.substring(a.indexOf("actual time=")).match(/rows=(\d+)/);i&&(o.actualRows=r(i[1]))}}return o}(g,_,b,d?Math.floor(p/6)+1:0,o),p,a,i)}return a}(e);return t.forEach(i),t}e.i(125356),e.i(21150),e.s(["calculateMaxDuration",0,function(e){return e.reduce((e,t)=>Math.max(e,function e(t){return Math.max(t.actualTime?t.actualTime.end-t.actualTime.start:0,t.children.reduce((t,a)=>Math.max(t,e(a)),0))}(t)),0)},"calculateSummary",0,n,"createNodeTree",0,o,"parseDetailLines",0,function(e){if(!e)return[];let t=e.split("\n").filter(Boolean),a=[];for(let e of t){let t=e.indexOf(":");t>0?a.push({label:e.substring(0,t+1),value:e.substring(t+1).trim()}):e.trim()&&a.push({label:"",value:e.trim()})}return a}],591052);var l=e.i(234745);e.i(635494);var c=e.i(10429);e.i(837508);let d="Query cost exceeds threshold";async function u({projectRef:e,connectionString:s,sql:r,queryKey:i,handleError:p,isRoleImpersonationEnabled:m=!1,isStatementTimeoutDisabled:h=!1,preflightCheck:f=!1},b,g,_){let y,E;if(!e)throw Error("projectRef is required");if(new Blob([r]).size>.98*c.MB)throw Error("Query is too large to be run via the SQL Editor");let v=new Headers(g);if(s&&v.set("x-connection-encrypted",s),_){let e=await _({query:r,headers:v});"data"in e?y=e.data:E=e.error}else{let t={signal:b,headers:v,params:{path:{ref:e},header:{"x-connection-encrypted":s??"","x-pg-application-name":h?"supabase/dashboard-query-editor":a.DEFAULT_PLATFORM_APPLICATION_NAME}}};if(f){let{data:e}=await (0,l.post)("/platform/pg-meta/{ref}/query",{...t,body:{query:`explain ${r}`,disable_statement_timeout:h},params:{...t.params,query:{key:"preflight-check"}}}),a=e?o(e):void 0,s=a?n(a):void 0,i=s?.totalCost??0;if(i>=2e5)return(0,l.handleError)({message:d,code:i,metadata:{cost:i,sql:r}})}let c=i?.filter(e=>"string"==typeof e||"number"==typeof e).join("-")??"",u=await (0,l.post)("/platform/pg-meta/{ref}/query",{...t,body:{query:r,disable_statement_timeout:h},params:{...t.params,query:{key:c}}});y=u.data,E=u.error}if(E){if(m&&"object"==typeof E&&null!==E&&"error"in E&&"formattedError"in E){let e=E,a=/LINE (\d+):/im,[,s]=a.exec(e.error)??[],r=Number(s);isNaN(r)||(e={...e,error:e.error.replace(a,`LINE ${r-t.ROLE_IMPERSONATION_SQL_LINE_COUNT}:`),formattedError:e.formattedError.replace(a,`LINE ${r-t.ROLE_IMPERSONATION_SQL_LINE_COUNT}:`)}),E=e}if(void 0!==p)return p(E);(0,l.handleError)(E)}return m&&Array.isArray(y)&&y?.[0]?.[t.ROLE_IMPERSONATION_NO_RESULTS]===1?{result:[]}:{result:y}}e.s(["COST_THRESHOLD_ERROR",0,d,"executeSql",0,u],714403)},246230,e=>{"use strict";var t=e.i(21150);e.s(["databaseKeys",0,{schemas:e=>["projects",e,"schemas"],keywords:e=>["projects",e,"keywords"],migrations:e=>["projects",e,"migrations"],tableColumns:(e,t,a)=>["projects",e,"table-columns",t,a],databaseFunctions:e=>["projects",e,"database-functions"],entityDefinition:(e,t)=>["projects",e,"entity-definition",t],entityDefinitions:(e,t)=>["projects",e,"entity-definitions",t],tableDefinition:(e,t)=>["projects",e,"table-definition",t],viewDefinition:(e,t,a)=>["projects",e,"view-definition",t,a??!1],backups:e=>["projects",e,"database","backups"],poolingConfiguration:e=>["projects",e,"database","pooling-configuration"],indexesFromQuery:(e,t)=>["projects",e,"indexes",{query:t}],indexAdvisorFromQuery:(e,t,a)=>{let s;if(a)try{s=new URL(a).host}catch{s=void 0}return["projects",e,"index-advisor",{query:t,connectionFingerprint:s}]},tableConstraints:(e,t)=>["projects",e,"table-constraints",t],foreignKeyConstraints:(e,t,a={})=>["projects",e,"foreign-key-constraints",t,a],databaseSize:e=>["projects",e,"database-size"],maxConnections:e=>["projects",e,"max-connections"],pgbouncerStatus:e=>["projects",e,"pgbouncer","status"],pgbouncerConfig:e=>["projects",e,"pgbouncer","config"],checkPrimaryKeysExists:(e,t)=>["projects",e,"check-primary-keys",t],tableIndexAdvisor:(e,t,a)=>["projects",e,"table-index-advisor",t,a],supamonitorEnabled:e=>["projects",e,"supamonitor-enabled"]},"getLiveTupleEstimateKey",0,(e,a,s="public")=>t.sqlKeys.query(e,["live-tuple-estimate",s,a])])},801834,e=>{"use strict";var t=e.i(850036),a=e.i(125356),s=e.i(246230),r=e.i(714403);let i=t.default.schemas.list();async function n({projectRef:e,connectionString:t},a){let{result:s}=await (0,r.executeSql)({projectRef:e,connectionString:t,sql:i.sql,queryKey:["schemas"]},a);return s}e.s(["getSchemas",0,n,"invalidateSchemasQuery",0,function(e,t){return e.invalidateQueries({queryKey:s.databaseKeys.schemas(t)})},"prefetchSchemas",0,function(e,{projectRef:t,connectionString:a}){return e.fetchQuery({queryKey:s.databaseKeys.schemas(t),queryFn:({signal:e})=>n({projectRef:t,connectionString:a},e)})},"useSchemasQuery",0,({projectRef:e,connectionString:t},{enabled:r=!0,...i}={})=>(0,a.useQuery)({queryKey:s.databaseKeys.schemas(e),queryFn:({signal:a})=>n({projectRef:e,connectionString:t},a),enabled:r&&void 0!==e,...i})])},667286,e=>{"use strict";e.s(["databaseExtensionsKeys",0,{list:e=>["projects",e,"database-extensions"]}])},450972,e=>{"use strict";e.i(850036);var t=e.i(53336),a=e.i(125356),s=e.i(667286),r=e.i(714403),i=e.i(635494);e.i(10429);var n=e.i(837508);async function o({projectRef:e,connectionString:a},s){let i=(0,t.getDatabaseExtensionsSQL)(),{result:n}=await (0,r.executeSql)({projectRef:e,connectionString:a,sql:i,queryKey:["database-extensions"]},s);return n}e.s(["useDatabaseExtensionsQuery",0,({projectRef:e,connectionString:t},{enabled:r=!0,...l}={})=>{let{data:c}=(0,i.useSelectedProjectQuery)(),d=c?.status===n.PROJECT_STATUS.ACTIVE_HEALTHY;return(0,a.useQuery)({queryKey:s.databaseExtensionsKeys.list(e),queryFn:({signal:a})=>o({projectRef:e,connectionString:t},a),enabled:r&&void 0!==e&&d,...l})}])},12214,e=>{"use strict";var t=e.i(531837),a=e.i(615515);let s=t.object({index:t.number(),columns:t.array(t.object({name:t.string(),type:t.string()})),is_new_schema:t.boolean(),schema:t.string(),schema_name:t.string(),table_name:t.string(),object:t.any().optional()}).passthrough(),r=e=>Object.fromEntries(e.map(e=>e.split("=")));function i(e,t){if("wasm_fdw_handler"===e.handlerName){let a=r(t?.server_options??[]);return e.server.options.find(e=>"fdw_package_name"===e.name)?.defaultValue===a.fdw_package_name}return e.handlerName===t?.handler}e.s(["NewTable",0,{},"convertKVStringArrayToJson",0,r,"formatWrapperTables",0,(e,t)=>(e?.tables??[]).map(s=>{let r=0,i=Object.fromEntries(s.options.map(e=>e.split("=")));switch(e.handler){case a.WRAPPER_HANDLERS.STRIPE:r=t?.tables.findIndex(e=>e.options.find(e=>"object"===e.name)?.defaultValue===i.object)??0;break;case a.WRAPPER_HANDLERS.FIREBASE:r="auth/users"===i.object?t?.tables.findIndex(e=>e.options.find(e=>"auth/users"===e.defaultValue))??0:t?.tables.findIndex(e=>"Firestore Collection"===e.label)??0;case a.WRAPPER_HANDLERS.S3:case a.WRAPPER_HANDLERS.AIRTABLE:case a.WRAPPER_HANDLERS.LOGFLARE:case a.WRAPPER_HANDLERS.BIG_QUERY:case a.WRAPPER_HANDLERS.CLICK_HOUSE:}return{...i,index:r,id:s.id,columns:s.columns??[],is_new_schema:!1,schema:s.schema,schema_name:s.schema,table_name:s.name}}),"getEditionFormSchema",0,e=>{let a={wrapper_name:t.string().min(1,"Please provide a name for your wrapper"),tables:t.array(s,{required_error:"Please provide at least one table"}).min(1,"Please provide at least one table")};return e.server.options.forEach(e=>{if(e.required){a[e.name]=t.string().min(1,"Required");return}a[e.name]=t.string().optional()}),t.object(a)},"getTableFormSchema",0,e=>{let a={table_name:t.string().min(1,"Required"),schema:t.string().min(1,"Required"),schema_name:t.string().optional(),columns:t.array(t.object({name:t.string().min(1,"Required"),type:t.string().min(1,"Required")}))};return e.options.forEach(e=>{if(e.required){a[e.name]=t.string().min(1,"Required");return}a[e.name]=t.string().optional()}),t.object(a).passthrough().superRefine((e,t)=>{"custom"!==e.schema||e.schema_name||t.addIssue({code:"custom",path:["schema_name"],message:"Required"})})},"getWrapperCreationFormSchema",0,e=>{let a={wrapper_name:t.string().min(1,"Please provide a name for your wrapper")};return e.server.options.forEach(e=>{if(e.required){a[e.name]=t.string().min(1,"Required");return}a[e.name]=t.string().optional()}),t.discriminatedUnion("mode",[t.object({mode:t.literal("tables"),tables:t.array(s,{required_error:"Please provide at least one table"}).min(1,"Please provide at least one table")}).merge(t.object(a)),t.object({mode:t.literal("schema"),source_schema:t.string().min(1,"Please provide a source schema"),target_schema:t.string().min(1,"Please provide an unique target schema")}).merge(t.object(a))])},"getWrapperMetaForWrapper",0,function(e){return a.WRAPPERS.find(t=>i(t,e))},"wrapperMetaComparator",0,i])},298625,33942,584258,e=>{"use strict";e.i(850036);var t=e.i(479084);let a=()=>t.safeSql`
    select
      s.oid as "id",
      w.fdwname as "name",
      s.srvname as "server_name",
      s.srvoptions as "server_options",
      c.proname as "handler",
      (
        select jsonb_agg(
          jsonb_build_object(
            'id', c.oid::bigint,
            'schema', relnamespace::regnamespace::text,
            'name', c.relname,
            'columns', (
              select jsonb_agg(
                jsonb_build_object(
                  'name', a.attname,
                  'type', pg_catalog.format_type(a.atttypid, a.atttypmod)
                )
              )
              from pg_catalog.pg_attribute a
              where a.attrelid = c.oid and a.attnum > 0 and not a.attisdropped
            ),
            'options', t.ftoptions
          )
        )
        from pg_catalog.pg_class c
        join pg_catalog.pg_foreign_table t on c.oid = t.ftrelid
        where c.oid = any (select t.ftrelid from pg_catalog.pg_foreign_table t where t.ftserver = s.oid)
      ) as "tables"
    from pg_catalog.pg_foreign_server s
    join pg_catalog.pg_foreign_data_wrapper w on s.srvfdw = w.oid
    join pg_catalog.pg_proc c on w.fdwhandler = c.oid;
  `;function s({wrapperMeta:e,formState:a,mode:r,tables:i,sourceSchema:n,targetSchema:o,schemaOptions:l=[]}){let c=(0,t.joinSqlFragments)(i.filter(e=>e.is_new_schema).map(e=>t.safeSql`create schema if not exists ${(0,t.ident)(e.schema_name)};`),"\n"),d=t.safeSql`
    create foreign data wrapper ${(0,t.ident)(a.wrapper_name)}
    handler ${(0,t.ident)(e.handlerName)}
    validator ${(0,t.ident)(e.validatorName)};
  `,u=e.server.options.filter(e=>e.encrypted),p=e.server.options.filter(e=>!e.encrypted),m=u.map(e=>{let s=`${a.wrapper_name}_${e.name}`,r=(0,t.literal)(a[e.name]||"");return t.safeSql`
      do $$
      begin
        -- Old wrappers has an implicit dependency on pgsodium. For new wrappers
        -- we use Vault directly.
        if (select extversion from pg_extension where extname = 'wrappers') in (
          '0.1.0',
          '0.1.1',
          '0.1.4',
          '0.1.5',
          '0.1.6',
          '0.1.7',
          '0.1.8',
          '0.1.9',
          '0.1.10',
          '0.1.11',
          '0.1.12',
          '0.1.14',
          '0.1.15',
          '0.1.16',
          '0.1.17',
          '0.1.18',
          '0.1.19',
          '0.2.0',
          '0.3.0',
          '0.3.1',
          '0.4.0',
          '0.4.1',
          '0.4.2',
          '0.4.3',
          '0.4.4',
          '0.4.5'
        ) then
          create extension if not exists pgsodium;

          perform pgsodium.create_key(
            name := ${(0,t.literal)(s)}
          );

          perform vault.create_secret(
            new_secret := ${r},
            new_name   := ${(0,t.literal)(s)},
            new_key_id := (select id from pgsodium.valid_key where name = ${(0,t.literal)(s)})
          );
        else
          perform vault.create_secret(
            new_secret := ${r},
            new_name := ${(0,t.literal)(s)}
          );
        end if;
      end $$;
    `}),h=(0,t.joinSqlFragments)(m,"\n"),f=u.filter(e=>a[e.name]).map(e=>t.safeSql`${(0,t.ident)(e.name)} ''%s''`),b=p.filter(e=>a[e.name]).map(e=>{let s=(0,t.literal)(a[e.name]).replace(/'/g,"''");return t.safeSql`${(0,t.ident)(e.name)} ${s}`}),g=(0,t.joinSqlFragments)([...f,...b],","),_=t.safeSql`
    do $$
    declare
      -- Old wrappers has an implicit dependency on pgsodium. For new wrappers
      -- we use Vault directly.
      is_using_old_wrappers bool;
      ${(0,t.joinSqlFragments)(u.map(e=>t.safeSql`${(0,t.ident)(`v_${e.name}`)} text;`),"\n")}
    begin
      is_using_old_wrappers := (select extversion from pg_extension where extname = 'wrappers') in (
        '0.1.0',
        '0.1.1',
        '0.1.4',
        '0.1.5',
        '0.1.6',
        '0.1.7',
        '0.1.8',
        '0.1.9',
        '0.1.10',
        '0.1.11',
        '0.1.12',
        '0.1.14',
        '0.1.15',
        '0.1.16',
        '0.1.17',
        '0.1.18',
        '0.1.19',
        '0.2.0',
        '0.3.0',
        '0.3.1',
        '0.4.0',
        '0.4.1',
        '0.4.2',
        '0.4.3',
        '0.4.4',
        '0.4.5'
      );
      ${(0,t.joinSqlFragments)(u.map(e=>t.safeSql`
              if is_using_old_wrappers then
                select id into ${(0,t.ident)(`v_${e.name}`)} from pgsodium.valid_key where name = ${(0,t.literal)(`${a.wrapper_name}_${e.name}`)} limit 1;
              else
                select id into ${(0,t.ident)(`v_${e.name}`)} from vault.secrets where name = ${(0,t.literal)(`${a.wrapper_name}_${e.name}`)} limit 1;
              end if;
            `),"\n")}
    
      execute format(
        E'create server ${(0,t.ident)(a.server_name)} foreign data wrapper ${(0,t.ident)(a.wrapper_name)} options (${g});',
        ${(0,t.joinSqlFragments)(u.filter(e=>a[e.name]).map(e=>(0,t.ident)(`v_${e.name}`)),",")}
      );
    end $$;
  `,y=(0,t.joinSqlFragments)(i.map(e=>{let s=e.columns;return t.safeSql`
        create foreign table ${(0,t.ident)(e.schema_name)}.${(0,t.ident)(e.table_name)} (
          ${(0,t.joinSqlFragments)(s.map(e=>t.safeSql`${(0,t.ident)(e.name)} ${(0,t.keyword)(e.type)}`),",")}
        )
        server ${(0,t.ident)(a.server_name)}
        options (
          ${(0,t.joinSqlFragments)(Object.entries(e).filter(([e,t])=>"table_name"!==e&&"schema_name"!==e&&"columns"!==e&&"index"!==e&&"is_new_schema"!==e&&!!t).map(([e,a])=>t.safeSql`${(0,t.ident)(e)} ${(0,t.literal)(a)}`),",")}
        );
      `}),"\n\n"),E=(0,t.joinSqlFragments)([...l,t.safeSql`strict 'true'`],", ");return t.safeSql`
    ${c}

    ${d}

    ${h}

    ${_}

    ${"tables"===r?y:t.safeSql``}

    ${"schema"===r?t.safeSql`
  import foreign schema ${(0,t.ident)(n)} from server ${(0,t.ident)(a.server_name)} into ${(0,t.ident)(o)} options (${E});
`:t.safeSql``}
  `}let r=({wrapper:e,wrapperMeta:a})=>{let s=a.server.options.filter(e=>e.encrypted).map(a=>{let s=`${e.name}_${a.name}`;return t.safeSql`
      do $$
      begin
        -- Old wrappers has an implicit dependency on pgsodium. For new wrappers
        -- we use Vault directly.
        if (select extversion from pg_extension where extname = 'wrappers') in (
          '0.1.0',
          '0.1.1',
          '0.1.4',
          '0.1.5',
          '0.1.6',
          '0.1.7',
          '0.1.8',
          '0.1.9',
          '0.1.10',
          '0.1.11',
          '0.1.12',
          '0.1.14',
          '0.1.15',
          '0.1.16',
          '0.1.17',
          '0.1.18',
          '0.1.19',
          '0.2.0',
          '0.3.0',
          '0.3.1',
          '0.4.0',
          '0.4.1',
          '0.4.2',
          '0.4.3',
          '0.4.4',
          '0.4.5'
        ) then
          delete from vault.secrets where key_id = (select id from pgsodium.valid_key where name = ${(0,t.literal)(s)});

          delete from pgsodium.key where name = ${(0,t.literal)(s)};
        else
          delete from vault.secrets where name = ${(0,t.literal)(s)};
        end if;
      end $$;
    `}),r=(0,t.joinSqlFragments)(s,"\n");return t.safeSql`
    drop foreign data wrapper if exists ${(0,t.ident)(e.name)} cascade;

    ${r}
  `};e.s(["getCreateFDWSql",0,s,"getDeleteFDWSql",0,r,"getDropForeignTableSql",0,function({schema:e,table:a}){return t.safeSql`
drop foreign table if exists ${(0,t.ident)(e)}.${(0,t.ident)(a)};
`},"getFDWsSql",0,a,"getImportForeignSchemaSql",0,function({serverName:e,sourceSchema:a,targetSchema:s,schemaOptions:r=[]}){let i=(0,t.joinSqlFragments)([...r,t.safeSql`strict 'true'`],", ");return t.safeSql`
  import foreign schema ${(0,t.ident)(a)} from server ${(0,t.ident)(e)} into ${(0,t.ident)(s)} options (${i});
`},"getUpdateFDWSql",0,({wrapper:e,wrapperMeta:a,formState:i,tables:n})=>{let o=r({wrapper:e,wrapperMeta:a}),l=s({wrapperMeta:a,formState:i,tables:n,mode:"tables",sourceSchema:"",targetSchema:""});return t.safeSql`
    ${o}

    ${l}
  `}],33942);var i=e.i(125356);let n={list:e=>["projects",e,"fdws"]};e.s(["fdwKeys",0,n],584258);var o=e.i(714403);async function l({projectRef:e,connectionString:t},s){let r=a(),{result:i}=await (0,o.executeSql)({projectRef:e,connectionString:t,sql:r,queryKey:["fdws"]},s);return i}e.s(["getFDWs",0,l,"useFDWsQuery",0,({projectRef:e,connectionString:t},{enabled:a=!0,...s}={})=>(0,i.useQuery)({queryKey:n.list(e),queryFn:({signal:a})=>l({projectRef:e,connectionString:t},a),enabled:a&&void 0!==e,...s})],298625)},986261,(e,t,a)=>{var s=e.r(781125);t.exports=function(e){return e&&e.length?s(e):[]}},392491,e=>{"use strict";e.i(850036);var t=e.i(957386),a=e.i(986261),s=e.i(539256),r=e.i(416340),i=e.i(635494),n=e.i(615515),o=e.i(12214),l=e.i(298625);let c=["auth","cron","etl","extensions","information_schema","net","pgsodium","pgsodium_masks","pgbouncer","pgtle","pgmq","realtime","storage","supabase_functions","supabase_migrations","vault","graphql","graphql_public",t.QUEUES_SCHEMA],d=({excludeSchemas:e=[]}={})=>{let t=(0,r.useMemo)(()=>e,[JSON.stringify(e)]),d=(()=>{let{data:e}=(0,i.useSelectedProjectQuery)(),t=(0,l.useFDWsQuery)({projectRef:e?.ref,connectionString:e?.connectionString}),s=(0,r.useMemo)(()=>n.WRAPPERS.filter(e=>e.server.options.some(e=>e.name===n.SUPABASE_TARGET_SCHEMA_OPTION.name)),[]),c=(0,r.useMemo)(()=>(t.data?.filter(e=>s.some(t=>(0,o.wrapperMetaComparator)(t,e)))??[]).map(e=>{let t=(0,o.convertKVStringArrayToJson)(e.server_options??[]).supabase_target_schema??"",s=(0,a.default)(t.split(",").filter(Boolean));return{serverName:e.server_name,type:e.handler.replace("_fdw_handler",""),schemas:s}}),[t.data,s]);return{...t,data:c}})(),u=(0,r.useMemo)(()=>{let e=c.map(e=>({name:e,type:"internal"})),a=d.data?.flatMap(e=>e.schemas.map(t=>({name:t,type:"fdw",fdwType:e.type,serverName:e.serverName})));return(0,s.default)([...e,...a],e=>e.name).filter(e=>!t.includes(e.name))},[d.data,t]);return{...d,data:u}};e.s(["INTERNAL_SCHEMAS",0,c,"useIsProtectedSchema",0,({schema:e,excludedSchemas:t=[]})=>{let{data:a}=d({excludeSchemas:t}),s=a.find(t=>t.name===e);return s?{isSchemaLocked:!0,reason:s.type,fdwType:s.fdwType}:{isSchemaLocked:!1,reason:void 0,fdwType:void 0}},"useProtectedSchemas",0,d])},46932,e=>{"use strict";e.s(["queryOptions",0,function(e){return e}])},662972,e=>{"use strict";let t=(0,e.i(679709).default)("Clock5",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 16",key:"1pcbox"}]]);e.s(["Clock5",0,t],662972)},728561,e=>{"use strict";let t=(0,e.i(679709).default)("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);e.s(["Code2",0,t],728561)},582968,e=>{"use strict";let t=(0,e.i(679709).default)("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);e.s(["Layers",0,t],582968)},889131,e=>{"use strict";let t=(0,e.i(679709).default)("Vault",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["path",{d:"m7.9 7.9 2.7 2.7",key:"hpeyl3"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}],["path",{d:"m13.4 10.6 2.7-2.7",key:"264c1n"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["path",{d:"m7.9 16.1 2.7-2.7",key:"p81g5e"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor",key:"fubopw"}],["path",{d:"m13.4 13.4 2.7 2.7",key:"abhel3"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);e.s(["Vault",0,t],889131)},866543,e=>{"use strict";let t=(0,e.i(679709).default)("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);e.s(["Webhook",0,t],866543)},480762,e=>{"use strict";var t=e.i(479084);e.s(["getEnableWebhooksSQL",0,()=>t.safeSql`
BEGIN;
  DO
  $$
  BEGIN
    IF NOT EXISTS (
      SELECT 1
      FROM pg_roles
      WHERE rolname = 'supabase_functions_admin'
    )
    THEN
      CREATE USER supabase_functions_admin NOINHERIT CREATEROLE LOGIN NOREPLICATION;
    END IF;
  END
  $$;

  -- Event trigger for pg_net
  CREATE OR REPLACE FUNCTION extensions.grant_pg_net_access()
  RETURNS event_trigger
  LANGUAGE plpgsql
  AS $$
  BEGIN
    IF EXISTS (
      SELECT 1
      FROM pg_event_trigger_ddl_commands() AS ev
      JOIN pg_extension AS ext
      ON ev.objid = ext.oid
      WHERE ext.extname = 'pg_net'
    )
    THEN
      GRANT USAGE ON SCHEMA net TO supabase_functions_admin, postgres, anon, authenticated, service_role;

      IF EXISTS (
        SELECT FROM pg_extension
        WHERE extname = 'pg_net'
        -- all versions in use on existing projects as of 2025-02-20
        -- version 0.12.0 onwards don't need these applied
        AND extversion IN ('0.2', '0.6', '0.7', '0.7.1', '0.8', '0.10.0', '0.11.0')
      ) THEN
        ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;
        ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;

        ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;
        ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;

        REVOKE ALL ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;
        REVOKE ALL ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;

        GRANT EXECUTE ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;
        GRANT EXECUTE ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;
      END IF;
    END IF;
  END;
  $$;
  COMMENT ON FUNCTION extensions.grant_pg_net_access IS 'Grants access to pg_net';

  DO
  $$
  BEGIN
    IF NOT EXISTS (
      SELECT 1
      FROM pg_event_trigger
      WHERE evtname = 'issue_pg_net_access'
    ) THEN
      CREATE EVENT TRIGGER issue_pg_net_access ON ddl_command_end WHEN TAG IN ('CREATE EXTENSION')
      EXECUTE PROCEDURE extensions.grant_pg_net_access();
    END IF;
  END
  $$;

  -- pg_net grants when extension is already enabled
  DO
  $$
  BEGIN
    IF EXISTS (
      SELECT 1
      FROM pg_extension
      WHERE extname = 'pg_net'
    )
    THEN
      GRANT USAGE ON SCHEMA net TO supabase_functions_admin, postgres, anon, authenticated, service_role;

      IF EXISTS (
        SELECT FROM pg_extension
        WHERE extname = 'pg_net'
        -- all versions in use on existing projects as of 2025-02-20
        -- version 0.12.0 onwards don't need these applied
        AND extversion IN ('0.2', '0.6', '0.7', '0.7.1', '0.8', '0.10.0', '0.11.0')
      ) THEN
        ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;
        ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;

        ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;
        ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;

        REVOKE ALL ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;
        REVOKE ALL ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;

        GRANT EXECUTE ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;
        GRANT EXECUTE ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;
      END IF;
    END IF;
  END
  $$;

  -- Create pg_net extension
  CREATE EXTENSION IF NOT EXISTS pg_net SCHEMA extensions;

  -- Create supabase_functions schema
  CREATE SCHEMA supabase_functions AUTHORIZATION supabase_admin;

  GRANT USAGE ON SCHEMA supabase_functions TO postgres, anon, authenticated, service_role;
  ALTER DEFAULT PRIVILEGES IN SCHEMA supabase_functions GRANT ALL ON TABLES TO postgres, anon, authenticated, service_role;
  ALTER DEFAULT PRIVILEGES IN SCHEMA supabase_functions GRANT ALL ON FUNCTIONS TO postgres, anon, authenticated, service_role;
  ALTER DEFAULT PRIVILEGES IN SCHEMA supabase_functions GRANT ALL ON SEQUENCES TO postgres, anon, authenticated, service_role;

  -- supabase_functions.migrations definition
  CREATE TABLE supabase_functions.migrations (
    version text PRIMARY KEY,
    inserted_at timestamptz NOT NULL DEFAULT NOW()
  );

  -- Initial supabase_functions migration
  INSERT INTO supabase_functions.migrations (version) VALUES ('initial');

  -- supabase_functions.hooks definition
  CREATE TABLE supabase_functions.hooks (
    id bigserial PRIMARY KEY,
    hook_table_id integer NOT NULL,
    hook_name text NOT NULL,
    created_at timestamptz NOT NULL DEFAULT NOW(),
    request_id bigint
  );
  CREATE INDEX supabase_functions_hooks_request_id_idx ON supabase_functions.hooks USING btree (request_id);
  CREATE INDEX supabase_functions_hooks_h_table_id_h_name_idx ON supabase_functions.hooks USING btree (hook_table_id, hook_name);
  COMMENT ON TABLE supabase_functions.hooks IS 'Supabase Functions Hooks: Audit trail for triggered hooks.';

  CREATE FUNCTION supabase_functions.http_request()
    RETURNS trigger
    LANGUAGE plpgsql
    AS $function$
    DECLARE
      request_id bigint;
      payload jsonb;
      url text := TG_ARGV[0]::text;
      method text := TG_ARGV[1]::text;
      headers jsonb DEFAULT '{}'::jsonb;
      params jsonb DEFAULT '{}'::jsonb;
      timeout_ms integer DEFAULT 1000;
    BEGIN
      IF url IS NULL OR url = 'null' THEN
        RAISE EXCEPTION 'url argument is missing';
      END IF;

      IF method IS NULL OR method = 'null' THEN
        RAISE EXCEPTION 'method argument is missing';
      END IF;

      IF TG_ARGV[2] IS NULL OR TG_ARGV[2] = 'null' THEN
        headers = '{"Content-Type": "application/json"}'::jsonb;
      ELSE
        headers = TG_ARGV[2]::jsonb;
      END IF;

      IF TG_ARGV[3] IS NULL OR TG_ARGV[3] = 'null' THEN
        params = '{}'::jsonb;
      ELSE
        params = TG_ARGV[3]::jsonb;
      END IF;

      IF TG_ARGV[4] IS NULL OR TG_ARGV[4] = 'null' THEN
        timeout_ms = 1000;
      ELSE
        timeout_ms = TG_ARGV[4]::integer;
      END IF;

      CASE
        WHEN method = 'GET' THEN
          SELECT http_get INTO request_id FROM net.http_get(
            url,
            params,
            headers,
            timeout_ms
          );
        WHEN method = 'POST' THEN
          payload = jsonb_build_object(
            'old_record', OLD,
            'record', NEW,
            'type', TG_OP,
            'table', TG_TABLE_NAME,
            'schema', TG_TABLE_SCHEMA
          );

          SELECT http_post INTO request_id FROM net.http_post(
            url,
            payload,
            params,
            headers,
            timeout_ms
          );
        ELSE
          RAISE EXCEPTION 'method argument % is invalid', method;
      END CASE;

      INSERT INTO supabase_functions.hooks
        (hook_table_id, hook_name, request_id)
      VALUES
        (TG_RELID, TG_NAME, request_id);

      RETURN NEW;
    END
  $function$;

  GRANT ALL PRIVILEGES ON SCHEMA supabase_functions TO supabase_functions_admin;
  GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA supabase_functions TO supabase_functions_admin;
  GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA supabase_functions TO supabase_functions_admin;
  ALTER USER supabase_functions_admin SET search_path = "supabase_functions";
  ALTER table "supabase_functions".migrations OWNER TO supabase_functions_admin;
  ALTER table "supabase_functions".hooks OWNER TO supabase_functions_admin;
  ALTER function "supabase_functions".http_request() OWNER TO supabase_functions_admin;
  GRANT supabase_functions_admin TO postgres;

  -- Remove unused supabase_pg_net_admin role
  DO
  $$
  BEGIN
    IF EXISTS (
      SELECT 1
      FROM pg_roles
      WHERE rolname = 'supabase_pg_net_admin'
    )
    THEN
      REASSIGN OWNED BY supabase_pg_net_admin TO supabase_admin;
      DROP OWNED BY supabase_pg_net_admin;
      DROP ROLE supabase_pg_net_admin;
    END IF;
  END
  $$;

  INSERT INTO supabase_functions.migrations (version) VALUES ('20210809183423_update_grants');

  ALTER function supabase_functions.http_request() SECURITY DEFINER;
  ALTER function supabase_functions.http_request() SET search_path = supabase_functions;
  REVOKE ALL ON FUNCTION supabase_functions.http_request() FROM PUBLIC;
  GRANT EXECUTE ON FUNCTION supabase_functions.http_request() TO postgres, anon, authenticated, service_role;

  COMMIT;
`])},839869,e=>{"use strict";let t=(0,e.i(679709).default)("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);e.s(["Timer",0,t],839869)},933275,297808,232622,e=>{"use strict";var t=e.i(221628);e.i(850036);var a=e.i(480762),s=e.i(662972),r=e.i(728561),i=e.i(582968),n=e.i(839869),o=e.i(889131),l=e.i(866543),c=e.i(313087),d=e.i(188139),u=e.i(843778),p=e.i(108151),m=e.i(561978),h=e.i(837710),f=e.i(710483),b=e.i(635494);let g=({minimumVersion:e="15.6"})=>{let{data:a}=(0,b.useSelectedProjectQuery)();return(0,t.jsxs)(f.Admonition,{type:"default",title:"Database upgrade needed",childProps:{description:{className:"flex flex-col gap-y-2"}},children:[(0,t.jsx)("div",{className:"prose text-sm max-w-full",children:(0,t.jsxs)("p",{children:["This integration requires the ",(0,t.jsx)("code",{children:"pgmq"})," extension which is not available on this version of Postgres. The extension is available on version ",e," and higher."]})}),(0,t.jsx)(h.Button,{color:"primary",className:"w-fit",children:(0,t.jsx)(m.default,{href:`/project/${a?.ref}/settings/infrastructure`,children:"Upgrade database"})})]})};var _=e.i(559398),y=e.i(615515),E=e.i(918018),v=e.i(705541),S=e.i(964574);e.i(128328);var T=e.i(704206),w=e.i(739114),N=e.i(246230),x=e.i(10429),R=e.i(967052);async function A({projectRef:e,stripeSecretKey:t,startTime:a}){let s=await (0,T.getAccessToken)(),r=await fetch(`${x.BASE_PATH}/api/integrations/stripe-sync`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify({projectRef:e,stripeSecretKey:t,startTime:a})}),i=await r.json();if(!r.ok)throw Error(i.error?.message||"Failed to install Stripe Sync");return i}e.s(["installStripeSync",0,A,"useStripeSyncInstallMutation",0,({onSuccess:e,onError:t,...a}={})=>{let s=(0,S.useQueryClient)(),r=(0,R.useTrack)();return(0,v.useMutation)({mutationFn:e=>A(e),async onSuccess(t,a,i){let{projectRef:n}=a;r("integration_install_submitted",{integrationName:"stripe_sync_engine",method:"template"}),await s.invalidateQueries({queryKey:N.databaseKeys.schemas(n)}),await s.invalidateQueries({queryKey:E.stripeSyncKeys.all}),await e?.(t,a,i)},async onError(e,a,s){void 0===t?w.toast.error(`Failed to install Stripe Sync: ${e.message}`):t(e,a,s)},...a})}],297808);var j=e.i(801834),I=e.i(234745);async function O({ref:e}){let{data:t,error:a}=await (0,I.post)("/platform/database/{ref}/hook-enable",{params:{path:{ref:e}}});return a&&(0,I.handleError)(a),t}e.s(["enableDatabaseWebhooks",0,O,"useHooksEnableMutation",0,({onSuccess:e,onError:t,...a}={})=>{let s=(0,S.useQueryClient)();return(0,v.useMutation)({mutationFn:e=>O(e),async onSuccess(t,a,r){let{ref:i}=a;await e?.(t,a,r),await (0,j.invalidateSchemasQuery)(s,i)},async onError(e,a,s){void 0===t?w.toast.error(`Failed to enable webhooks: ${e.message}`):t(e,a,s)},...a})}],232622);var L=e.i(741391);let k={name:"Supabase",websiteUrl:"https://supabase.com"},C=[{id:"queues",type:"postgres_extension",source:"Community",requiredExtensions:["pgmq"],missingExtensionsAlert:(0,t.jsx)(g,{minimumVersion:"15.6.1.143"}),name:"Queues",icon:({className:e,...a}={})=>(0,t.jsx)(i.Layers,{className:(0,u.cn)("inset-0 p-2 text-black w-full h-full",e),...a}),description:"Lightweight message queue in Postgres",docsUrl:"https://github.com/tembo-io/pgmq",author:{name:"pgmq",websiteUrl:"https://github.com/tembo-io/pgmq"},navigation:[{route:"overview",label:"Overview"},{route:"queues",label:"Queues",hasChild:!0,childIcon:(0,t.jsx)(i.Layers,{size:12,strokeWidth:1.5,className:(0,u.cn)("text-foreground w-full h-full")})},{route:"settings",label:"Settings",layout:"constrained"}],navigate:({pageId:t="overview",childId:a})=>{if(a)return(0,c.default)(()=>e.A(274794).then(e=>e.QueuePage),{loadableGenerated:{modules:[571538]},loading:P});switch(t){case"overview":return(0,c.default)(()=>e.A(909495).then(e=>e.QueuesOverviewTab),{loadableGenerated:{modules:[698380]},loading:P});case"queues":return(0,c.default)(()=>e.A(548863).then(e=>e.QueuesTab),{loadableGenerated:{modules:[79703]},loading:P});case"settings":return(0,c.default)(()=>e.A(283398).then(e=>e.QueuesSettings),{loadableGenerated:{modules:[541970]},loading:P})}return null}},{id:"cron",type:"postgres_extension",source:"Community",requiredExtensions:["pg_cron"],name:"Cron",icon:({className:e,...a}={})=>(0,t.jsx)(s.Clock5,{className:(0,u.cn)("inset-0 p-2 text-black w-full h-full",e),...a}),description:"Schedule recurring Jobs in Postgres",docsUrl:"https://github.com/citusdata/pg_cron",author:{name:"Citus Data",websiteUrl:"https://github.com/citusdata/pg_cron"},navigation:[{route:"overview",label:"Overview"},{route:"jobs",label:"Jobs",hasChild:!0,childIcon:(0,t.jsx)(n.Timer,{size:12,strokeWidth:1.5,className:(0,u.cn)("text-foreground w-full h-full")})}],navigate:({pageId:t="overview",childId:a})=>{if(a)return(0,c.default)(()=>e.A(609157).then(e=>e.CronJobPage),{loadableGenerated:{modules:[323205]},loading:P});switch(t){case"overview":return(0,c.default)(()=>e.A(929825).then(e=>e.CronOverviewTab),{loadableGenerated:{modules:[777403]},loading:P});case"jobs":return(0,c.default)(()=>e.A(579437).then(e=>e.CronjobsTab),{loadableGenerated:{modules:[524943]},loading:P})}return null}},{id:"vault",type:"postgres_extension",source:"Official",requiredExtensions:["supabase_vault"],missingExtensionsAlert:(0,t.jsx)(g,{}),name:"Vault",status:"beta",icon:({className:e,...a}={})=>(0,t.jsx)(o.Vault,{className:(0,u.cn)("inset-0 p-2 text-black w-full h-full",e),...a}),description:"Application level encryption for your project",docsUrl:`${x.DOCS_URL}/guides/database/vault`,author:k,navigation:[{route:"overview",label:"Overview"},{route:"secrets",label:"Secrets"}],navigate:({pageId:t="overview"})=>{switch(t){case"overview":return(0,c.default)(()=>e.A(150116).then(e=>e.VaultOverviewTab),{loadableGenerated:{modules:[763645]},loading:P});case"secrets":return(0,c.default)(()=>e.A(707643).then(e=>e.SecretsManagement),{loadableGenerated:{modules:[935100]},loading:P})}return null}},{id:"webhooks",type:"postgres_extension",source:"Official",name:"Database Webhooks",icon:({className:e,...a}={})=>(0,t.jsx)(l.Webhook,{className:(0,u.cn)("inset-0 p-2 text-black w-full h-full",e),...a}),description:"Send real-time data from your database to another system when a table event occurs",docsUrl:`${x.DOCS_URL}/guides/database/webhooks`,author:k,requiredExtensions:["pg_net"],navigation:[{route:"overview",label:"Overview"},{route:"webhooks",label:"Webhooks",layout:"constrained"}],navigate:({pageId:t="overview"})=>{switch(t){case"overview":return(0,c.default)(()=>e.A(467186).then(e=>e.WebhooksOverviewTab),{loadableGenerated:{modules:[6777]},loading:P});case"webhooks":return(0,c.default)(()=>e.A(639206).then(e=>e.WebhooksListTab),{loadableGenerated:{modules:[791713]},loading:P})}return null},installationSql:(0,a.getEnableWebhooksSQL)(),installationCommand:async({ref:e})=>{let t=(0,L.getQueryClient)();await O({ref:e}),await (0,j.invalidateSchemasQuery)(t,e)}},{id:"data_api",type:"custom",source:"Official",requiredExtensions:[],name:"Data API",icon:({className:e,...a}={})=>(0,t.jsx)(r.Code2,{className:(0,u.cn)("inset-0 p-2 text-black w-full h-full",e),...a}),description:"Auto-generate an API directly from your database schema",docsUrl:`${x.DOCS_URL}/guides/api`,author:k,navigation:[{route:"overview",label:"Overview"},{route:"settings",label:"Settings",layout:"constrained"},{route:"docs",label:"Docs"}],navigate:({pageId:t="overview"})=>{switch(t){case"overview":return(0,c.default)(()=>e.A(250577).then(e=>e.DataApiOverviewTab),{loadableGenerated:{modules:[429091]},loading:P});case"settings":return(0,c.default)(()=>e.A(610764).then(e=>e.DataApiSettingsTab),{loadableGenerated:{modules:[247311]},loading:P});case"docs":return(0,c.default)(()=>e.A(818633).then(e=>e.DataApiDocsTab),{loadableGenerated:{modules:[338481]},loading:P})}return null}},{id:"graphiql",type:"postgres_extension",source:"Official",requiredExtensions:["pg_graphql"],name:"GraphQL",icon:({className:e,...a}={})=>(0,t.jsx)(d.default,{fill:!0,src:`${x.BASE_PATH}/img/graphql.svg`,alt:"GraphiQL",className:(0,u.cn)("p-2",e),...a}),description:"Run GraphQL queries through our interactive in-browser IDE",docsUrl:`${x.DOCS_URL}/guides/database/extensions/pg_graphql`,author:k,navigation:[{route:"overview",label:"Overview"},{route:"graphiql",label:"GraphiQL"}],navigate:({pageId:t="overview"})=>{switch(t){case"overview":return(0,c.default)(()=>e.A(859528).then(e=>e.GraphQLOverviewTab),{loadableGenerated:{modules:[372475]},loading:P});case"graphiql":return(0,c.default)(()=>e.A(500556).then(e=>e.GraphiQLTab),{loadableGenerated:{modules:[321608]},loading:P})}return null}}],q=y.WRAPPERS.map(a=>({id:a.name,type:"wrapper",source:"Official",name:`${a.label} Wrapper`,icon:({className:e,...s}={})=>(0,t.jsx)(d.default,{fill:!0,src:a.icon,alt:a.name,className:(0,u.cn)("p-2",e),...s}),requiredExtensions:["wrappers","supabase_vault"],description:a.description,docsUrl:a.docsUrl,categories:a.categories,meta:a,author:k,navigation:[{route:"overview",label:"Overview"},{route:"wrappers",label:"Wrappers"}],navigate:({pageId:t="overview"})=>{switch(t){case"overview":return(0,c.default)(()=>e.A(596207).then(e=>e.WrapperOverviewTab),{loadableGenerated:{modules:[865243]},loading:P});case"wrappers":return(0,c.default)(()=>e.A(354946).then(e=>e.WrappersTab),{loadableGenerated:{modules:[674412]},loading:P})}return null}})),F=[{id:"stripe_sync_engine",type:"template",source:"Partner",requiredExtensions:["pgmq","supabase_vault","pg_cron","pg_net"],missingExtensionsAlert:(0,t.jsx)(g,{minimumVersion:"15.6.1.143"}),name:"Stripe Sync Engine",status:"alpha",icon:({className:e,...a}={})=>(0,t.jsx)(d.default,{fill:!0,src:`${x.BASE_PATH}/img/icons/stripe-icon.svg`,alt:"Stripe Logo",className:(0,u.cn)("p-2",e),...a}),description:"Continuously sync your payments, customer, and other data from Stripe to your Postgres database",docsUrl:"https://github.com/stripe-experiments/sync-engine/",author:{name:"Stripe",websiteUrl:"https://www.stripe.com"},navigation:[{route:"overview",label:"Overview"},{route:"settings",label:"Settings",layout:"constrained"}],navigate:({pageId:t="overview"})=>{switch(t){case"overview":return(0,c.default)(()=>e.A(943222).then(e=>e.StripeSyncEngineOverviewTab),{loadableGenerated:{modules:[140017]},loading:P});case"settings":return(0,c.default)(()=>e.A(98740).then(e=>e.StripeSyncSettingsPage),{loadableGenerated:{modules:[795776]},loading:P})}return null},inputs:{stripe_api_key:{type:"password",required:!0,label:"Stripe API secret key",description:"Requires write access to Webhook Endpoints and read-only access to all other categories.",actions:[{label:"Get API key",href:"https://dashboard.stripe.com/apikeys"},{label:"What are Stripe API keys?",href:"https://support.stripe.com/questions/what-are-stripe-api-keys-and-how-to-find-them"}]}},steps:[{label:"Creates a new database schema named `stripe`"},{label:"Creates tables and views in the `stripe` schema for synced Stripe data"},{label:"Deploys Edge Functions to handle incoming webhooks from Stripe"},{label:"Schedules automatic Stripe data syncs using Supabase Queues"}],installationCommand:async({ref:e,track:t,stripe_api_key:a})=>{let s=Date.now();await A({projectRef:e,startTime:s,stripeSecretKey:a}),t&&t("integration_install_submitted",{integrationName:"stripe_sync_engine",method:"template"});let r=(0,L.getQueryClient)();await r.invalidateQueries({queryKey:E.stripeSyncKeys.all})},checkInstallationStatus:async e=>{let t=(0,L.getQueryClient)(),{projectRef:a,connectionString:s}=e||{},r=await (0,j.getSchemas)({projectRef:a,connectionString:s}),{status:i,errorMessage:n}=(0,_.getStripeSyncSchemaComment)(r);if("install error"===i)throw Error(n??"Stripe Sync installation failed");return"installed"===i&&await t.invalidateQueries({queryKey:N.databaseKeys.schemas(a)}),"installed"===i?"installed":"installing"}}],$=[...q,...C.map(e=>({...e,categories:({queues:["devtools"],cron:["devtools"],vault:["security"],webhooks:["api"],data_api:["api","data-platform"],graphiql:["api","devtools"]})[e.id]||[]})),...F.map(e=>({...e,categories:({stripe_sync_engine:["billing"]})[e.id]||[]}))],P=()=>(0,t.jsx)("div",{className:"p-10",children:(0,t.jsx)(p.GenericSkeletonLoader,{})});e.s(["INTEGRATIONS",0,$,"Loading",0,P],933275)},26760,e=>{"use strict";e.i(760205);var t=e.i(716092),a=e.i(12214),s=e.i(427459);e.s(["hasMatchingWrapper",0,({meta:e,wrappers:t})=>t.find(t=>(0,a.wrapperMetaComparator)(e,t)),"hasRequiredExtensions",0,({integration:e,extensions:t})=>e.requiredExtensions.every(e=>{let a=t.find(t=>t.name===e);return!!a?.installed_version}),"isOAuthInstalled",0,({integration:e,apiKeys:t,secrets:a})=>{if("secret_key_prefix"===e.installIdentificationMethod){let a=e.secretKeyPrefix;return!!a&&t.some(e=>"secret"===e.type&&e.name.startsWith(a))}if("edge_function_secret_name"===e.installIdentificationMethod){let t=e.edgeFunctionSecretName;return!!t&&a.some(e=>e.name===t)}return!1},"isStripeSyncEngineInstalled",0,e=>{let a=(0,s.findStripeSchema)(e),r=(0,t.parseSchemaComment)(a?.comment);return(0,s.isInstalled)(r.status)}])},79745,757670,353917,462531,e=>{"use strict";var t=e.i(221628),a=e.i(125356);e.i(128328);var s=e.i(657588),r=e.i(86086);e.i(187688);var i=e.i(515557);let n=()=>(0,i.createClient)("https://otqhrpbxhxkrhrnjqbba.supabase.co","sb_publishable_ZVVKKu1s88KsSBWVYlou-g_phb2OJVQ",{auth:{persistSession:!1,autoRefreshToken:!1,detectSessionInUrl:!1,storage:{getItem:e=>null,setItem:(e,t)=>{},removeItem:e=>{}}}}),o=e=>`https://otqhrpbxhxkrhrnjqbba.supabase.co${e}`;e.s(["createMarketplaceClient",0,n,"fullImageUrl",0,o],757670);var l=e.i(469099),c=e.i(313087),d=e.i(188139),u=e.i(416340),p=e.i(843778),m=e.i(933275),h=e.i(463333),f=e.i(46932);let b={list:()=>["marketplace","integrations"],categories:()=>["marketplace","categories"]};e.s(["marketplaceIntegrationsKeys",0,b],353917);var g=e.i(234745);async function _(){let e=n(),{data:t,error:a}=await e.from("listings").select("*").is("publish_dashboard",!0);return a&&(0,g.handleError)(a),t??[]}let y=({enabled:e=!0}={})=>(0,f.queryOptions)({queryKey:b.list(),queryFn:()=>_(),enabled:e});e.s(["marketplaceIntegrationsQueryOptions",0,y],462531);var E=e.i(375890),v=e.i(912793);e.s(["useAvailableIntegrations",0,()=>{let{hasLoaded:i}=(0,u.useContext)(s.FeatureFlagContext),n=(0,h.useIsMarketplaceEnabled)(),{integrationsWrappers:f}=(0,v.useIsFeatureEnabled)(["integrations:wrappers"]),{data:b}=(0,E.useCLIReleaseVersionQuery)(),g=!!b?.current,{data:_,error:S}=(0,a.useQuery)({...y(),enabled:n}),T=r.IS_PLATFORM&&(!i||n&&!_&&!S),w=!r.IS_PLATFORM||i&&(!n||!!_&&!S),N=r.IS_PLATFORM&&n&&!!S,x=(0,u.useMemo)(()=>(_??[])?.map(a=>{let{id:s,slug:r,categories:i,featured:n,title:u,description:h,documentation_url:f,website_url:b,installation_url:g,installation_url_type:_,installation_identification_method:y,secret_key_prefix:E,edge_function_secret_name:v,images:S,content:T,partner_name:w,listing_logo:N}=a;return{id:r??"",name:u??"",status:void 0,featured:!!n,type:"oauth",source:"Partner",categories:Array.isArray(i)?i.map(e=>e.slug):[],content:T,files:S?.map(e=>o(e)),description:h,docsUrl:f,siteUrl:b,installUrl:g,installUrlType:_??void 0,installIdentificationMethod:y??void 0,secretKeyPrefix:E??void 0,edgeFunctionSecretName:v??void 0,listingId:s??void 0,author:{name:w??"",websiteUrl:""},requiredExtensions:[],icon:({className:e,...a}={})=>(0,t.jsx)("div",{className:"relative w-full h-full",children:N?(0,t.jsx)(d.default,{fill:!0,src:o(N),alt:"",className:(0,p.cn)("p-2",e),...a}):(0,t.jsx)(l.Boxes,{className:(0,p.cn)("inset-0 p-2 text-black w-full h-full",e),...a})}),navigation:[{route:"overview",label:"Overview"}],navigate:({pageId:t="overview"})=>"overview"===t?(0,c.default)(()=>e.A(130281).then(e=>e.MarketplaceIntegrationOverviewTab),{loadableGenerated:{modules:[10338]},loading:m.Loading}):null}}),[_]),R=(0,u.useMemo)(()=>m.INTEGRATIONS.filter(e=>!(!f&&("wrapper"===e.type||e.id.endsWith("_wrapper")))&&("stripe_sync_engine"!==e.id||!g)),[f,g]);return{data:(0,u.useMemo)(()=>[...x,...R].sort((e,t)=>e.name.localeCompare(t.name)),[x,R]),error:S,isPending:T,isSuccess:w,isError:N}}],79745)},230833,481943,e=>{"use strict";var t=e.i(125356);let a={list:e=>["projects",e,"edge_functions_secrets"]};e.s(["secretsKeys",0,a],481943);var s=e.i(234745);async function r({projectRef:e},t){if(!e)throw Error("Project ref is required");let{data:a,error:i}=await (0,s.get)("/v1/projects/{ref}/secrets",{params:{path:{ref:e}},signal:t});return i&&(0,s.handleError)(i),a}e.s(["useSecretsQuery",0,({projectRef:e},{enabled:s=!0,...i}={})=>(0,t.useQuery)({queryKey:a.list(e),queryFn:({signal:t})=>r({projectRef:e},t),enabled:s&&void 0!==e,...i})],230833)},400104,e=>{"use strict";var t=e.i(416340),a=e.i(26760),s=e.i(79745),r=e.i(108892),i=e.i(450972),n=e.i(801834),o=e.i(298625),l=e.i(230833),c=e.i(635494),d=e.i(681328);e.s(["useInstalledIntegrations",0,()=>{let{data:e}=(0,c.useSelectedProjectQuery)(),{data:u=d.EMPTY_ARR,error:p,isPending:m,isSuccess:h,isError:f}=(0,s.useAvailableIntegrations)(),b=(0,t.useMemo)(()=>u.some(e=>"oauth"===e.type&&"secret_key_prefix"===e.installIdentificationMethod&&!!e.secretKeyPrefix),[u]),g=(0,t.useMemo)(()=>u.some(e=>"oauth"===e.type&&"edge_function_secret_name"===e.installIdentificationMethod&&!!e.edgeFunctionSecretName),[u]),{data:_=d.EMPTY_ARR,error:y,isError:E,isLoading:v,isSuccess:S}=(0,r.useAPIKeysQuery)({projectRef:e?.ref,reveal:!1},{enabled:b}),{data:T=d.EMPTY_ARR,error:w,isError:N,isLoading:x,isSuccess:R}=(0,l.useSecretsQuery)({projectRef:e?.ref},{enabled:g}),{data:A=d.EMPTY_ARR,error:j,isError:I,isPending:O,isSuccess:L}=(0,o.useFDWsQuery)({projectRef:e?.ref,connectionString:e?.connectionString}),{data:k=d.EMPTY_ARR,error:C,isError:q,isPending:F,isSuccess:$}=(0,i.useDatabaseExtensionsQuery)({projectRef:e?.ref,connectionString:e?.connectionString}),{data:P=d.EMPTY_ARR,error:U,isError:G,isPending:M,isSuccess:D}=(0,n.useSchemasQuery)({projectRef:e?.ref,connectionString:e?.connectionString}),W=P?.some(e=>"supabase_functions"===e.name),H=(0,t.useMemo)(()=>u.filter(e=>"webhooks"===e.id?W:"data_api"===e.id||("stripe_sync_engine"===e.id?(0,a.isStripeSyncEngineInstalled)(P):"wrapper"===e.type?(0,a.hasMatchingWrapper)({meta:e.meta,wrappers:A}):"postgres_extension"===e.type?(0,a.hasRequiredExtensions)({integration:e,extensions:k}):"oauth"===e.type&&(0,a.isOAuthInstalled)({integration:e,apiKeys:_,secrets:T}))).sort((e,t)=>e.name.localeCompare(t.name)),[u,A,k,P,W,_,T]),Q=j||C||U||p||(b?y:null)||(g?w:null),K=M||O||F||m||b&&v||g&&x,V=I||q||G||f||b&&E||g&&N,B=L&&$&&D&&h&&(!b||S)&&(!g||R);return{installedIntegrations:K?d.EMPTY_ARR:H,error:Q,isError:V,isLoading:K,isSuccess:B}}])}]);

//# debugId=e2b483b2-c660-de24-893e-79fcec56c3cd
//# sourceMappingURL=0cba-.2v8.rhj.js.map