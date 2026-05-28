;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="35bcff42-d2a2-cbba-6120-59f6c1000abe")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,3259,720512,e=>{"use strict";var t=e.i(221628),r=e.i(335032),a=e.i(631700);e.s(["ChevronRightIcon",()=>a.default],720512);var a=a,l=e.i(416340),i=e.i(843778);let s=l.forwardRef(({...e},r)=>(0,t.jsx)("nav",{ref:r,"aria-label":"breadcrumb",...e}));s.displayName="Breadcrumb";let n=l.forwardRef(({className:e,...r},a)=>(0,t.jsx)("ol",{ref:a,className:(0,i.cn)("flex flex-wrap items-center gap-0.5 wrap-break-word text-sm text-muted-foreground sm:gap-1.5",e),...r}));n.displayName="BreadcrumbList";let o=l.forwardRef(({className:e,...r},a)=>(0,t.jsx)("li",{ref:a,className:(0,i.cn)("inline-flex text-foreground-lighter items-center gap-1.5 leading-5",e),...r}));o.displayName="BreadcrumbItem";let d=l.forwardRef(({asChild:e,className:a,...l},s)=>{let n=e?r.Slot.Slot:"a";return(0,t.jsx)(n,{ref:s,className:(0,i.cn)("transition-colors underline lg:no-underline hover:text-foreground",a),...l})});d.displayName="BreadcrumbLink";let c=l.forwardRef(({className:e,...r},a)=>(0,t.jsx)("span",{ref:a,role:"link","aria-disabled":"true","aria-current":"page",className:(0,i.cn)("no-underline text-foreground",e),...r}));c.displayName="BreadcrumbPage";let u=({children:e,className:r,...l})=>(0,t.jsx)("li",{role:"presentation","aria-hidden":"true",className:(0,i.cn)("[&>svg]:size-3.5 text-foreground-muted",r),...l,children:e??(0,t.jsx)(a.default,{})});u.displayName="BreadcrumbSeparator";let x=({className:e,...r})=>(0,t.jsxs)("span",{className:(0,i.cn)("flex h-4 w-4 items-center justify-center",e),...r,children:[(0,t.jsx)("svg",{role:"presentation","aria-hidden":"true",width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}),(0,t.jsx)("span",{className:"sr-only",children:"More"})]});x.displayName="BreadcrumbEllipsis",e.s(["Breadcrumb",0,s,"BreadcrumbEllipsis",0,x,"BreadcrumbItem",0,o,"BreadcrumbLink",0,d,"BreadcrumbList",0,n,"BreadcrumbPage",0,c,"BreadcrumbSeparator",0,u],3259)},127739,e=>{"use strict";var t=e.i(221628),r=e.i(766181),a=e.i(416340),l=e.i(843778);let i=(0,r.cva)(["mx-auto w-full @container px-6 xl:px-10"],{variants:{size:{small:"max-w-[768px]",default:"max-w-[1200px]",large:"max-w-[1600px]",full:"max-w-none"}},defaultVariants:{size:"default"}}),s=(0,a.forwardRef)(({className:e,size:r,...a},s)=>(0,t.jsx)("div",{ref:s,...a,className:(0,l.cn)(i({size:r}),e)}));s.displayName="PageContainer",e.s(["PageContainer",0,s])},456050,e=>{"use strict";var t=e.i(221628),r=e.i(766181),a=e.i(416340),l=e.i(843778),i=e.i(3259),s=e.i(127739);let n=(0,r.cva)(["flex flex-col gap-4 w-full"],{variants:{size:{default:"pt-12",small:"pt-12",large:"pt-12",full:"pt-6"}},defaultVariants:{size:"default"}}),o=(0,a.createContext)({size:"default"}),d=()=>(0,a.useContext)(o),c=({className:e,children:r,...a})=>{let{size:n}=d();return(0,t.jsx)(s.PageContainer,{size:n,children:(0,t.jsx)(i.Breadcrumb,{"data-slot":"page-header-breadcrumb",className:(0,l.cn)("flex items-center gap-4 [&_li]:text-xs",e),...a,children:r})})};c.displayName="PageHeaderBreadcrumb";let u=({className:e,...r})=>(0,t.jsx)("div",{"data-slot":"page-header-icon",className:(0,l.cn)("text-foreground-light",e),...r});u.displayName="PageHeaderIcon";let x=({className:e,children:r,...a})=>(0,t.jsx)("div",{"data-slot":"page-header-summary",className:(0,l.cn)("flex flex-col gap-1",e),...a,children:r});x.displayName="PageHeaderSummary";let f=({className:e,children:r,...a})=>{let{size:i}=d();return(0,t.jsx)(s.PageContainer,{size:i,children:(0,t.jsx)("div",{"data-slot":"page-header-meta",className:(0,l.cn)("flex flex-col @xl:flex-row @xl:justify-between @xl:items-center gap-4",'*:data-[slot="page-header-icon"]:shrink-0','*:data-[slot="page-header-summary"]:flex-1',e),...a,children:r})})};f.displayName="PageHeaderMeta";let m=({className:e,...r})=>(0,t.jsx)("div",{"data-slot":"page-header-actions",className:(0,l.cn)("flex items-center gap-2 shrink-0",e),...r});m.displayName="PageHeaderAside";let g=({className:e,...r})=>{let{size:a}=d();return(0,t.jsx)(s.PageContainer,{size:a,className:(0,l.cn)("full"===a&&"border-b"),children:(0,t.jsx)("div",{"data-slot":"page-header-footer",className:(0,l.cn)("w-full [&>nav]:border-b-0","full"!==a&&"border-b",e),...r})})};g.displayName="PageHeaderNavigationTabs",e.s(["PageHeader",0,({className:e,size:r,children:a,...i})=>{let s=r??"default";return(0,t.jsx)(o.Provider,{value:{size:s},children:(0,t.jsx)("div",{"data-slot":"page-header","data-size":s,className:(0,l.cn)(n({size:s}),e),...i,children:a})})},"PageHeaderAside",0,m,"PageHeaderBreadcrumb",0,c,"PageHeaderDescription",0,({className:e,children:r,...a})=>(0,t.jsx)("div",{"data-slot":"page-header-description",className:(0,l.cn)("heading-subSection text-foreground-light",e),...a,children:r}),"PageHeaderIcon",0,u,"PageHeaderMeta",0,f,"PageHeaderNavigationTabs",0,g,"PageHeaderSummary",0,x,"PageHeaderTitle",0,({className:e,children:r,...a})=>(0,t.jsx)("h1",{"data-slot":"page-header-title",className:(0,l.cn)("heading-title",e),...a,children:r})])},202003,e=>{"use strict";e.s(["buildStudioPageTitle",0,e=>{let t=[e.entity,e.section,e.surface,e.project,e.org,e.brand],r=[];return t.forEach(e=>{let t=(e=>{if(void 0===e)return;let t=e.trim().replace(/\s+/g," ");if(0!==t.length)return t.length<=60?t:`${t.slice(0,59).trimEnd()}…`})(e);if(!t)return;let a=r[r.length-1];(void 0===a||a.toLowerCase()!==t.toLowerCase())&&r.push(t)}),r.join(" | ")}])},22194,e=>{"use strict";var t=e.i(221628);e.i(481541);var r=e.i(665265),r=r,a=e.i(188139),l=e.i(416340),i=e.i(843778);e.s(["ProfileImage",0,({alt:e,src:s,placeholder:n,className:o})=>{let[d,c]=(0,l.useState)(!1);return s&&!d?(0,t.jsx)(a.default,{alt:e??"",src:s,width:"24",height:"24",className:(0,i.cn)("aspect-square bg-foreground rounded-full object-cover",o),onError:()=>c(!0)}):n??(0,t.jsx)("figure",{className:(0,i.cn)("bg-foreground rounded-full flex items-center justify-center",o),children:(0,t.jsx)(r.default,{size:18,strokeWidth:1.5,className:"text-background"})})}],22194)},95053,e=>{"use strict";var t=e.i(221628),r=e.i(766181),a=e.i(416340),l=e.i(843778),i=e.i(20482),s=e.i(737018),n=e.i(282410);let o=(0,r.cva)("relative grid gap-10",{variants:{size:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},align:{left:"",right:""},responsive:{true:"",false:""},layout:{horizontal:"flex flex-col gap-2 md:grid md:grid-cols-12",vertical:"flex flex-col gap-2",flex:"flex flex-row gap-3","flex-row-reverse":"flex flex-col-reverse gap-2 md:gap-6 md:flex-row-reverse md:justify-between"},flex:{true:"",false:""}},compoundVariants:[{layout:"flex",align:"right",className:"justify-between"},{layout:"flex-row-reverse",align:"right",className:"justify-between"}],defaultVariants:{}}),d=(0,r.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"flex flex-col gap-2 col-span-4",vertical:"flex flex-row gap-2 justify-between",flex:"flex flex-col gap-0 min-w-0","flex-row-reverse":"flex flex-col min-w-0 grow"},labelLayout:{horizontal:"",vertical:"","":""}},compoundVariants:[{flex:!0,align:"left",className:"order-2"},{flex:!0,align:"right",className:"order-1"},{layout:["vertical","flex"],labelLayout:void 0,flex:!1,className:"flex flex-row gap-2 justify-between"},{layout:"horizontal",className:"flex flex-col gap-2"}],defaultVariants:{}}),c=(0,r.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"order-1",right:"order-2"},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:"order-1"},{flex:!0,align:"right",className:"order-2"},{layout:["vertical","flex"],className:"col-span-12"},{layout:"horizontal",align:"left",className:"col-span-8"},{layout:"horizontal",align:"right",className:"text-right"}],defaultVariants:{}}),u=(0,r.cva)("text-foreground-lighter leading-normal",{variants:{size:{...n.SIZE.text},layout:{vertical:"mt-2",horizontal:"mt-2",flex:"","flex-row-reverse":""}},defaultVariants:{}}),x=(0,r.cva)("text-foreground-muted",{variants:{size:{...n.SIZE.text}},defaultVariants:{}}),f=(0,r.cva)("text-foreground-muted",{variants:{size:{...n.SIZE.text}},defaultVariants:{}}),m=(0,r.cva)("text-foreground-muted",{variants:{size:{...n.SIZE.text}},defaultVariants:{}}),g=(0,r.cva)("",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:""},{flex:!0,align:"right",className:"order-last"},{layout:"flex-row-reverse",className:"flex flex-col justify-center items-start md:items-end shrink-0 md:w-1/2 xl:w-2/5 [&>div]:md:w-full"}]}),p=(0,r.cva)("",{variants:{nonBoxInput:{true:"",false:""},label:{true:"",false:""},layout:{vertical:"",horizontal:"","flex-row-reverse":""}},compoundVariants:[{nonBoxInput:!0,label:!0,layout:"vertical",className:"my-3"},{nonBoxInput:!0,label:!0,layout:"horizontal",className:"my-3 md:mt-0 mb-3"}],defaultVariants:{}}),h=a.default.forwardRef(({align:e="left",className:r,description:a,id:n,label:h,labelOptional:b,layout:v="vertical",style:y,labelLayout:w,size:j="medium",beforeLabel:N,afterLabel:_,nonBoxInput:z=!h,hideMessage:P=!1,isReactForm:k,error:C,...S},B)=>{let I="flex"===v||"flex-row-reverse"===v,V=!!(h||N||_),$=k&&!P?(0,t.jsx)(i.FormMessage,{className:(0,l.cn)("mt-2 transition-all duration-300 ease-in-out","flex-row-reverse"===v&&"mt-0"),"data-formlayout-id":"message"}):C&&!P?(0,t.jsx)("p",{className:(0,l.cn)("mt-2 text-sm text-destructive","flex-row-reverse"===v&&"mt-0"),children:C}):null,E=a&&k?(0,t.jsx)(i.FormDescription,{className:(0,l.cn)(u({size:j,layout:v})),"data-formlayout-id":"description",id:`${n}-description`,children:a}):a?(0,t.jsx)("p",{className:(0,l.cn)(u({size:j,layout:v}),"text-sm text-foreground-light"),"data-formlayout-id":"description",children:a}):null,L=()=>(0,t.jsxs)(t.Fragment,{children:[N&&(0,t.jsx)("span",{className:(0,l.cn)(x({size:j})),id:n+"-before","data-formlayout-id":"beforeLabel",children:(0,t.jsx)("span",{children:N})}),(0,t.jsx)("span",{children:h}),_&&(0,t.jsx)("span",{className:(0,l.cn)(f({size:j})),id:n+"-after","data-formlayout-id":"afterLabel",children:_})]});return(0,t.jsxs)("div",{ref:B,...S,className:(0,l.cn)(o({size:j,flex:I,align:e,layout:v}),r),children:[I&&(0,t.jsxs)("div",{className:(0,l.cn)(g({flex:I,align:e,layout:v})),children:[S.children,"flex-row-reverse"===v&&$]}),V||b||"horizontal"===v?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:(0,l.cn)(d({align:e,labelLayout:w,flex:I,layout:v})),"data-formlayout-id":"labelContainer",children:[V&&k?(0,t.jsx)(i.FormLabel,{className:"text-foreground flex gap-2 items-center wrap-break-word","data-formlayout-id":"formLabel",htmlFor:S.name||n,children:(0,t.jsx)(L,{})}):(0,t.jsx)(s.Label,{className:"text-foreground flex gap-2 items-center wrap-break-word leading-normal","data-formlayout-id":"label",htmlFor:S.name||n,children:(0,t.jsx)(L,{})}),b&&(0,t.jsx)("span",{className:(0,l.cn)(m({size:j})),id:n+"-optional","data-formlayout-id":"labelOptional",children:b}),I&&(0,t.jsxs)(t.Fragment,{children:[E,"flex-row-reverse"!==v&&$]})]})}):null,!I&&(0,t.jsx)("div",{className:(0,l.cn)(c({align:e,layout:v})),style:y,"data-formlayout-id":"dataContainer",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:(0,l.cn)(p({nonBoxInput:z,label:h,layout:v})),"data-formlayout-id":"nonBoxInputContainer",children:S.children}),$,E]})})]})});e.s(["FormLayout",0,h])},538482,e=>{"use strict";var t=e.i(221628),r=e.i(416340),a=e.i(20482),l=e.i(95053);let i=(0,r.forwardRef)(({...e},r)=>(0,t.jsx)(a.FormItem,{children:(0,t.jsx)(l.FormLayout,{ref:r,isReactForm:!0,...e,children:e.children})}));i.displayName="FormItemLayout",e.s(["FormItemLayout",0,i])},344580,e=>{"use strict";var t=e.i(67318),r=function(e,r,a){if(e&&"reportValidity"in e){var l=(0,t.get)(a,r);e.setCustomValidity(l&&l.message||""),e.reportValidity()}},a=function(e,t){var a=function(a){var l=t.fields[a];l&&l.ref&&"reportValidity"in l.ref?r(l.ref,a,e):l.refs&&l.refs.forEach(function(t){return r(t,a,e)})};for(var l in t.fields)a(l)},l=function(e,r){r.shouldUseNativeValidation&&a(e,r);var l={};for(var n in e){var o=(0,t.get)(r.fields,n),d=Object.assign(e[n]||{},{ref:o&&o.ref});if(s(r.names||Object.keys(e),n)){var c=Object.assign({},i((0,t.get)(l,n)));(0,t.set)(c,"root",d),(0,t.set)(l,n,c)}else(0,t.set)(l,n,d)}return l},i=function(e){return Array.isArray(e)?e.filter(Boolean):[]},s=function(e,t){return e.some(function(e){return e.startsWith(t+".")})},n=function(e,r){for(var a={};e.length;){var l=e[0],i=l.code,s=l.message,n=l.path.join(".");if(!a[n])if("unionErrors"in l){var o=l.unionErrors[0].errors[0];a[n]={message:o.message,type:o.code}}else a[n]={message:s,type:i};if("unionErrors"in l&&l.unionErrors.forEach(function(t){return t.errors.forEach(function(t){return e.push(t)})}),r){var d=a[n].types,c=d&&d[l.code];a[n]=(0,t.appendErrors)(n,r,a,i,c?[].concat(c,l.message):l.message)}e.shift()}return a};e.s(["zodResolver",0,function(e,t,r){return void 0===r&&(r={}),function(i,s,o){try{return Promise.resolve(function(l){try{var s=Promise.resolve(e["sync"===r.mode?"parse":"parseAsync"](i,t)).then(function(e){return o.shouldUseNativeValidation&&a({},o),{errors:{},values:r.raw?i:e}})}catch(e){return l(e)}return s&&s.then?s.then(void 0,l):s}(function(e){if(null!=e.errors)return{values:{},errors:l(n(e.errors,!o.shouldUseNativeValidation&&"all"===o.criteriaMode),o)};throw e}))}catch(e){return Promise.reject(e)}}}],344580)},938933,e=>{"use strict";var t=e.i(416340);let r={bg:{brand:{primary:"bg-purple-600",secondary:"bg-purple-200"}},text:{brand:"text-purple-600",body:"text-foreground-light",title:"text-foreground"},border:{brand:"border-brand-600",primary:"border-default",secondary:"border-secondary",alternative:"border-alternative"},placeholder:"placeholder-foreground-muted",focus:`
    outline-hidden
    focus:ring-current focus:ring-2
  `,"focus-visible":`
    outline-hidden
    transition-all
    outline-0
    focus-visible:outline-4
    focus-visible:outline-offset-1
  `,size:{text:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},padding:{tiny:"px-2.5 py-1",small:"px-3 py-2",medium:"px-4 py-2",large:"px-4 py-2",xlarge:"px-6 py-3"}},overlay:{base:"absolute inset-0 bg-background opacity-50",container:"fixed inset-0 transition-opacity"}},a={tiny:`${r.size.text.tiny} ${r.size.padding.tiny}`,small:`${r.size.text.small} ${r.size.padding.small}`,medium:`${r.size.text.medium} ${r.size.padding.medium}`,large:`${r.size.text.large} ${r.size.padding.large}`,xlarge:`${r.size.text.xlarge} ${r.size.padding.xlarge}`},l={card:{base:`
      bg-surface-100

      border
      ${r.border.primary}

      flex flex-col
      rounded-md shadow-lg overflow-hidden relative
    `,hoverable:"transition hover:-translate-y-1 hover:shadow-2xl",head:`px-8 py-6 flex justify-between
    border-b
      ${r.border.primary} `,content:"p-8"},tabs:{base:"w-full justify-between space-y-4",underlined:{list:`
        flex items-center border-b
        ${r.border.secondary}
        `,base:`
        relative
        cursor-pointer
        text-foreground-lighter
        flex
        items-center
        space-x-2
        text-center
        transition
        focus:outline-hidden
        focus-visible:ring-3
        focus-visible:ring-foreground-muted
        focus-visible:border-foreground-muted
      `,inactive:`
        hover:text-foreground
      `,active:`
        !text-foreground
        border-b-2 border-foreground
      `},pills:{list:"flex space-x-1",base:`
        relative
        cursor-pointer
        flex
        items-center
        space-x-2
        text-center
        transition
        shadow-xs
        rounded-sm
        border
        focus:outline-hidden
        focus-visible:ring-3
        focus-visible:ring-foreground-muted
        focus-visible:border-foreground-muted
        `,inactive:`
        bg-background
        border-strong hover:border-foreground-muted
        text-foreground-muted hover:text-foreground
      `,active:`
        bg-selection
        text-foreground
        border-stronger
      `},"rounded-pills":{list:"flex flex-wrap gap-2",base:`
        relative
        cursor-pointer
        flex
        items-center
        space-x-2
        text-center
        transition
        shadow-xs
        rounded-full
        focus:outline-hidden
        focus-visible:ring-3
        focus-visible:ring-foreground-muted
        focus-visible:border-foreground-muted
        `,inactive:`
        bg-surface-200 hover:bg-surface-300
        hover:border-foreground-lighter
        text-foreground-lighter hover:text-foreground
      `,active:`
        bg-foreground
        text-background
        border-foreground
      `},block:"w-full flex items-center justify-center",size:{...a},scrollable:"overflow-auto whitespace-nowrap no-scrollbar mask-fadeout-right",wrappable:"flex-wrap",content:"focus:outline-hidden transition-height"},input:{base:`
      block
      box-border
      w-full
      rounded-md
      shadow-xs
      transition-all
      text-foreground
      border
      focus-visible:shadow-md
      ${r.focus}
      focus-visible:border-foreground-muted
      focus-visible:ring-background-control
      ${r.placeholder}
      group
    `,variants:{standard:`
        bg-foreground/[.026]
        border border-control
        `,error:`
        bg-destructive-200
        border border-destructive-500
        focus:ring-destructive-400
        placeholder:text-destructive-400
       `},container:"relative",with_icon:{tiny:"pl-7",small:"pl-8",medium:"pl-8",large:"pl-10",xlarge:"pl-11"},size:{...a},disabled:"opacity-50",actions_container:"absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",textarea_actions_container:"absolute inset-y-1.5 right-0 pl-3 pr-1 flex space-x-1 items-start",textarea_actions_container_items:"flex items-center"},sidepanel:{base:`
      z-50
      bg-dash-sidebar
      flex flex-col
      fixed
      inset-y-0
      h-full lg:h-screen
      border-l
      shadow-xl
    `,header:`
      flex items-center
      space-y-1 py-4 px-4 bg-dash-sidebar sm:px-6
      border-b h-(--header-height)
    `,contents:`
      relative
      flex-1
      overflow-y-auto
    `,content:`
      px-4 sm:px-6
    `,footer:`
      flex justify-end gap-2
      p-4 bg-overlay
      border-t
    `,size:{medium:"w-screen max-w-md h-full",large:"w-screen max-w-2xl h-full",xlarge:"w-screen max-w-3xl h-full",xxlarge:"w-screen max-w-4xl h-full",xxxlarge:"w-screen max-w-5xl h-full",xxxxlarge:"w-screen max-w-6xl h-full"},align:{left:`
        left-0
        data-open:animate-panel-slide-left-out
        data-closed:animate-panel-slide-left-in
      `,right:`
        right-0
        data-open:animate-panel-slide-right-out
        data-closed:animate-panel-slide-right-in
      `},separator:`
      w-full
      h-px
      my-2
      bg-border
    `,overlay:`
      z-50
      fixed
      bg-alternative
      h-full w-full
      left-0
      top-0
      opacity-75
      data-closed:animate-fade-out-overlay-bg
      data-open:animate-fade-in-overlay-bg
    `,trigger:`
      border-none bg-transparent p-0 focus:ring-0
    `},form_layout:{container:"grid gap-2",flex:{left:{base:"flex flex-row gap-6",content:"",labels:"order-2",data_input:"order-1"},right:{base:"flex flex-row gap-6 justify-between",content:"order-last",labels:"",data_input:"text-right"}},responsive:"md:grid md:grid-cols-12",non_responsive:"grid grid-cols-12 gap-2",labels_horizontal_layout:"flex flex-row space-x-2 justify-between col-span-12",labels_vertical_layout:"flex flex-col space-y-2 col-span-4",data_input_horizontal_layout:"col-span-12",non_box_data_input_spacing_vertical:"my-3",non_box_data_input_spacing_horizontal:"my-3 md:mt-0 mb-3",data_input_vertical_layout:"col-span-8",data_input_vertical_layout__align_right:"text-right",label:{base:"block text-foreground-light",size:{...r.size.text}},label_optional:{base:"text-foreground-lighter",size:{...r.size.text}},description:{base:"mt-2 text-foreground-lighter leading-normal",size:{...r.size.text}},label_before:{base:"text-foreground-lighter ",size:{...r.size.text}},label_after:{base:"text-foreground-lighter",size:{...r.size.text}},error:{base:`
        text-red-900
        transition-all
        data-show:mt-2
        data-show:animate-slide-down-normal
        data-hide:animate-slide-up-normal
      `,size:{...r.size.text}},size:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"}},menu:{item:{base:`
        cursor-pointer
        flex space-x-3 items-center
        outline-hidden
        focus-visible:ring-1 ring-foreground-muted focus-visible:z-10
        group
      `,content:{base:"transition truncate text-sm w-full",normal:"text-foreground-light group-hover:text-foreground",active:"text-foreground font-semibold"},icon:{base:"transition truncate text-sm",normal:"text-foreground-lighter group-hover:text-foreground-light",active:"text-foreground"},variants:{text:{base:`
            py-1
          `,normal:`
            font-normal
            border-default
            group-hover:border-foreground-muted`,active:`
            font-semibold
            text-foreground-muted
            z-10
          `},border:{base:`
            px-4 py-1
          `,normal:`
            border-l
            font-normal
            border-default
            group-hover:border-foreground-muted`,active:`
            font-semibold

            text-foreground-muted
            z-10

            border-l
            border-brand
            group-hover:border-brand
          `,rounded:"rounded-md"},pills:{base:"my-px px-3 py-[3px] rounded-md transition-colors active:bg-sidebar-accent/50",normal:`
            font-normal
            border-default
            hover:bg-sidebar-accent/50
            group-hover:border-foreground-muted`,active:`
            font-semibold
            bg-sidebar-accent
            text-foreground-lighter
            z-10 rounded-md
          `}}},group:{base:`
        flex space-x-3
        mb-2
        font-normal
      `,icon:"text-foreground-lighter",content:"text-sm text-foreground-lighter w-full",variants:{text:"",pills:"px-3",border:""}}},modal:{base:`
      relative
      bg-dash-sidebar
      my-4 max-w-screen
      border border-overlay
      rounded-md
      shadow-xl
      data-open:animate-overlay-show
      data-closed:animate-overlay-hide

    `,header:`
      bg-surface-200
      space-y-1 py-3 px-4 sm:px-5
      border-b border-overlay
      flex items-center justify-between
    `,footer:`
      flex justify-end gap-2
      py-3 px-5
      border-t border-overlay
    `,size:{tiny:"sm:align-middle sm:w-full sm:max-w-xs",small:"sm:align-middle sm:w-full sm:max-w-sm",medium:"sm:align-middle sm:w-full sm:max-w-lg",large:"sm:align-middle sm:w-full md:max-w-xl",xlarge:"sm:align-middle sm:w-full md:max-w-3xl",xxlarge:"sm:align-middle sm:w-full max-w-screen md:max-w-6xl",xxxlarge:"sm:align-middle sm:w-full md:max-w-7xl"},overlay:`
      z-40
      fixed
      bg-alternative
      h-full w-full
      left-0
      top-0
      opacity-75
      data-closed:animate-fade-out-overlay-bg
      data-open:animate-fade-in-overlay-bg
    `,scroll_overlay:`
      z-40
      fixed
      inset-0
      grid
      place-items-center
      overflow-y-auto
      data-open:animate-overlay-show data-closed:animate-overlay-hide
    `,separator:`
      w-full
      h-px
      my-2
      bg-border-overlay
    `,content:"px-5"},listbox:{base:`
      block
      box-border
      w-full
      rounded-md
      shadow-xs
      text-foreground
      border
      focus-visible:shadow-md
      ${r.focus}
      focus-visible:border-foreground-muted
      focus-visible:ring-background-control
      ${r.placeholder}
      indent-px
      transition-all
      bg-none
    `,container:"relative",label:"truncate",variants:{standard:`
        bg-control
        border border-control

        aria-expanded:border-foreground-muted
        aria-expanded:ring-border-muted
        aria-expanded:ring-2
        `,error:`
        bg-destructive-200
        border border-destructive-500
        focus:ring-destructive-400
        placeholder:text-destructive-400
       `},options_container_animate:`
      transition
      data-open:animate-slide-down
      data-open:opacity-1
      data-closed:animate-slide-up
      data-closed:opacity-0
    `,options_container:`
      bg-overlay
      shadow-lg
      border border-solid
      border-overlay max-h-60
      rounded-md py-1 text-base
      sm:text-sm z-10 overflow-hidden overflow-y-scroll

      origin-dropdown
      data-open:animate-dropdown-content-show
      data-closed:animate-dropdown-content-hide
    `,with_icon:"pl-2",addOnBefore:`
      w-full flex flex-row items-center space-x-3
    `,size:{...a},disabled:"opacity-50",actions_container:"absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",chevron_container:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",chevron:"h-5 w-5 text-foreground-muted",option:`
      w-listbox
      transition cursor-pointer select-none relative py-2 pl-3 pr-9
      text-foreground-light
      text-sm
      hover:bg-border-overlay
      focus:bg-border-overlay
      focus:text-foreground
      border-none
      focus:outline-hidden
    `,option_active:"text-foreground bg-selection",option_disabled:"cursor-not-allowed opacity-60",option_inner:"flex items-center space-x-3",option_check:"absolute inset-y-0 right-0 flex items-center pr-3 text-brand",option_check_active:"text-brand",option_check_icon:"h-5 w-5"},inputErrorIcon:{base:`
      flex items-center
      right-3 pr-2 pl-2
      inset-y-0
      pointer-events-none
      text-red-900
    `},inputIconContainer:{base:`
    absolute inset-y-0
    left-0 pl-2 flex
    items-center pointer-events-none
    text-foreground-light
    [&_svg]:stroke-[1.5]
    `,size:{tiny:"[&_svg]:h-[14px] [&_svg]:w-[14px]",small:"[&_svg]:h-[18px] [&_svg]:w-[18px]",medium:"[&_svg]:h-[20px] [&_svg]:w-[20px]",large:"[&_svg]:h-[20px] [&_svg]:w-[20px] pl-3",xlarge:"[&_svg]:h-[24px] [&_svg]:w-[24px] pl-3",xxlarge:"[&_svg]:h-[30px] [&_svg]:w-[30px] pl-3",xxxlarge:"[&_svg]:h-[42px] [&_svg]:w-[42px] pl-3"}},icon:{container:"shrink-0 flex items-center justify-center rounded-full p-3"},loading:{base:"relative",content:{base:"transition-opacity duration-300",active:"opacity-40"},spinner:`
      absolute
      text-foreground-lighter animate-spin
      inset-0
      size-5
      m-auto
    `}},i=(0,t.createContext)({theme:l});e.s(["default",0,function(e){let{theme:{[e]:r}}=(0,t.useContext)(i);return JSON.parse(r=JSON.stringify(r).replace(/\\n/g,"").replace(/\s\s+/g," "))}],938933)},744061,e=>{"use strict";var t=e.i(221628),r=e.i(938933),a=e.i(843778);function l({children:e,tag:r="div",style:a}){let i=`${r}`;return(0,t.jsx)(i,{style:a,children:e})}l.Title=function({level:e=1,children:r,style:a}){let l=`h${e}`;return(0,t.jsx)(l,{style:a,children:r})},l.Text=function({children:e,style:r,mark:a,code:l,keyboard:i,strong:s}){return l?(0,t.jsx)("code",{style:r,children:e}):a?(0,t.jsx)("mark",{style:r,children:e}):i?(0,t.jsx)("kbd",{style:r,children:e}):s?(0,t.jsx)("strong",{style:r,children:e}):(0,t.jsx)("span",{style:r,children:e})},l.Link=function({children:e,target:r="_blank",href:a,onClick:l,style:i}){return(0,t.jsx)("a",{onClick:l,href:a,target:r,rel:"noopener noreferrer",style:i,children:e})};var i=e.i(416340);let s=(0,i.createContext)({type:"text"}),n=e=>{let{type:r}=e;return(0,t.jsx)(s.Provider,{value:{type:r},children:e.children})},o=()=>{let e=(0,i.useContext)(s);if(void 0===e)throw Error("MenuContext must be used within a MenuContextProvider.");return e};function d({children:e,className:r,ulClassName:a,style:l,type:i="text"}){return(0,t.jsx)("nav",{role:"menu","aria-label":"Sidebar","aria-orientation":"vertical","aria-labelledby":"options-menu",className:r,style:l,children:(0,t.jsx)(n,{type:i,children:(0,t.jsx)("ul",{className:a,children:e})})})}d.Item=function({children:e,icon:l,active:i,onClick:s,style:n}){let d=(0,r.default)("menu"),{type:c}=o(),u=[d.item.base];u.push(d.item.variants[c].base),i?u.push(d.item.variants[c].active):u.push(d.item.variants[c].normal);let x=[d.item.content.base];i?x.push(d.item.content.active):x.push(d.item.content.normal);let f=[d.item.icon.base];return i?f.push(d.item.icon.active):f.push(d.item.icon.normal),(0,t.jsxs)("li",{role:"menuitem",className:(0,a.cn)("outline-hidden",u),style:n,onClick:s,"aria-current":i?"page":void 0,children:[l&&(0,t.jsx)("div",{className:`${f.join(" ")} min-w-fit`,children:l}),(0,t.jsx)("span",{className:x.join(" "),children:e})]})},d.Group=function({children:e,icon:a,title:l}){let i=(0,r.default)("menu"),{type:s}=o();return(0,t.jsxs)("div",{className:[i.group.base,i.group.variants[s]].join(" "),children:[a&&(0,t.jsx)("span",{className:i.group.icon,children:a}),(0,t.jsx)("span",{className:i.group.content,children:l}),e]})},d.Misc=function({children:e}){return(0,t.jsx)("div",{children:(0,t.jsx)(l.Text,{children:(0,t.jsx)("span",{children:e})})})},e.s(["default",0,d],744061)},862326,e=>{"use strict";var t=e.i(744061);e.s(["Menu",()=>t.default])},388147,e=>{"use strict";var t=e.i(221628),r=e.i(587433),a=e.i(862326),l=e.i(561978),i=e.i(837710),s=e.i(654894);let n=({item:e,isActive:n,target:o="_self",hoverText:d="",onClick:c})=>{let{name:u="",url:x="",icon:f,rightIcon:m,isExternal:g,label:p,disabled:h,shortcutId:b}=e,v=(0,t.jsx)(a.Menu.Item,{icon:f,active:n,onClick:c,children:(0,t.jsxs)("div",{className:"flex w-full items-center justify-between gap-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1 min-w-0 flex-1",title:b?void 0:d||("string"==typeof u?u:""),children:[(0,t.jsx)("span",{className:"truncate flex-1 min-w-0",children:u}),void 0!==p&&(0,t.jsx)(r.Badge,{className:"shrink-0",variant:"new"===p.toLowerCase()?"success":"warning",children:p})]}),m&&(0,t.jsx)("div",{children:m})]})});if(h)return(0,t.jsx)("div",{className:"opacity-50 pointer-events-none",children:v});if(x){if(g){let e=(0,t.jsx)(i.Button,{asChild:!0,block:!0,className:"justify-start!",type:"text",size:"small",icon:f,children:(0,t.jsx)(l.default,{href:x,target:"_blank",rel:"noreferrer",children:u})});return b?(0,t.jsx)(s.ShortcutTooltip,{shortcutId:b,side:"right",delayDuration:1e3,children:e}):e}let e=(0,t.jsx)(l.default,{href:x,className:"block",target:o,onClick:c,children:v});return b?(0,t.jsx)(s.ShortcutTooltip,{shortcutId:b,side:"right",delayDuration:1e3,children:e}):e}return v};e.s(["ProductMenu",0,({page:e,menu:l,onItemClick:i})=>(0,t.jsx)("div",{className:"flex flex-col space-y-4",children:(0,t.jsx)(a.Menu,{type:"pills",children:l.map((s,o)=>(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"my-4 space-y-4",children:(0,t.jsxs)("div",{className:"md:mx-3",children:[(0,t.jsx)(a.Menu.Group,{title:s.title?(0,t.jsxs)("div",{className:"flex flex-col space-y-2 uppercase font-mono",children:[(0,t.jsx)("span",{children:s.title}),s.isPreview&&(0,t.jsx)(r.Badge,{variant:"warning",children:"Not production ready"})]}):null}),(0,t.jsx)("div",{children:s.items.map(r=>{let a=r.pages?r.pages.includes(e??""):e===r.key;return(0,t.jsx)(n,{item:r,isActive:a,target:r.isExternal?"_blank":"_self",onClick:i},r.key)})})]})}),o!==l.length-1&&(0,t.jsx)("div",{className:"h-px w-[calc(100%-1.5rem)] mx-auto md:w-full bg-border-overlay"})]},s.key||s.title))})})],388147)},228027,e=>{"use strict";var t=e.i(221628),r=e.i(766181),a=e.i(843778);let l=(0,r.cva)(["pt-12 last:pb-12 gap-6"],{variants:{orientation:{horizontal:"grid @3xl:grid-cols-[1fr_2fr] @3xl:gap-12",vertical:"flex flex-col"}},defaultVariants:{orientation:"vertical"}}),i=({className:e,orientation:r="vertical",children:i,...s})=>(0,t.jsx)("div",{"data-slot":"page-section","data-orientation":r,className:(0,a.cn)(l({orientation:r}),e),...s,children:i});i.displayName="PageSectionRoot";let s=({className:e,children:r,...l})=>(0,t.jsx)("div",{"data-slot":"page-section-summary",className:(0,a.cn)("flex flex-col gap-1",e),...l,children:r});s.displayName="PageSectionSummary";let n=({className:e,children:r,...l})=>(0,t.jsx)("h2",{"data-slot":"page-section-title",className:(0,a.cn)("heading-section",e),...l,children:r});n.displayName="PageSectionTitle";let o=({className:e,children:r,...l})=>(0,t.jsx)("div",{"data-slot":"page-section-description",className:(0,a.cn)("text-sm text-foreground-light",e),style:{textBoxTrim:"trim-end"},...l,children:r});o.displayName="PageSectionDescription";let d=({className:e,...r})=>(0,t.jsx)("div",{"data-slot":"page-section-aside",className:(0,a.cn)("flex items-center gap-2","@xl:self-end",e),...r});d.displayName="PageSectionAside";let c=({className:e,children:r,...l})=>(0,t.jsx)("div",{className:"@container",children:(0,t.jsx)("div",{"data-slot":"page-section-meta",className:(0,a.cn)("flex flex-col @xl:flex-row @xl:justify-between @xl:items-center gap-4",'*:data-[slot="page-section-summary"]:flex-1','*:data-[slot="page-section-summary"]:@xl:self-center','*:data-[slot="page-section-aside"]:shrink-0',e),...l,children:r})});c.displayName="PageSectionMeta";let u=({className:e,...r})=>(0,t.jsx)("div",{"data-slot":"page-section-content",className:(0,a.cn)(e),...r});u.displayName="PageSectionContent",e.s(["PageSection",0,i,"PageSectionAside",0,d,"PageSectionContent",0,u,"PageSectionDescription",0,o,"PageSectionMeta",0,c,"PageSectionSummary",0,s,"PageSectionTitle",0,n])}]);

//# debugId=35bcff42-d2a2-cbba-6120-59f6c1000abe
//# sourceMappingURL=123p1-.2du~9g.js.map