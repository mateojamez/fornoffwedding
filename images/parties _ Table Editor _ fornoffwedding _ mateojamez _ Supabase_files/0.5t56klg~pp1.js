;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="ab113409-cef3-2e53-4b20-51cc414f9c8c")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,980533,e=>{"use strict";e.s(["getPathSegment",0,function(e,t){return e.split("/")[t]},"getPathnameWithoutQuery",0,function(e,t){return null==e?t:e.split(/[?#]/)[0]??t}])},202003,e=>{"use strict";e.s(["buildStudioPageTitle",0,e=>{let t=[e.entity,e.section,e.surface,e.project,e.org,e.brand],r=[];return t.forEach(e=>{let t=(e=>{if(void 0===e)return;let t=e.trim().replace(/\s+/g," ");if(0!==t.length)return t.length<=60?t:`${t.slice(0,59).trimEnd()}…`})(e);if(!t)return;let a=r[r.length-1];(void 0===a||a.toLowerCase()!==t.toLowerCase())&&r.push(t)}),r.join(" | ")}])},22194,e=>{"use strict";var t=e.i(221628);e.i(481541);var r=e.i(665265),r=r,a=e.i(188139),i=e.i(416340),o=e.i(843778);e.s(["ProfileImage",0,({alt:e,src:l,placeholder:n,className:s})=>{let[d,c]=(0,i.useState)(!1);return l&&!d?(0,t.jsx)(a.default,{alt:e??"",src:l,width:"24",height:"24",className:(0,o.cn)("aspect-square bg-foreground rounded-full object-cover",s),onError:()=>c(!0)}):n??(0,t.jsx)("figure",{className:(0,o.cn)("bg-foreground rounded-full flex items-center justify-center",s),children:(0,t.jsx)(r.default,{size:18,strokeWidth:1.5,className:"text-background"})})}],22194)},95053,e=>{"use strict";var t=e.i(221628),r=e.i(766181),a=e.i(416340),i=e.i(843778),o=e.i(20482),l=e.i(737018),n=e.i(282410);let s=(0,r.cva)("relative grid gap-10",{variants:{size:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},align:{left:"",right:""},responsive:{true:"",false:""},layout:{horizontal:"flex flex-col gap-2 md:grid md:grid-cols-12",vertical:"flex flex-col gap-2",flex:"flex flex-row gap-3","flex-row-reverse":"flex flex-col-reverse gap-2 md:gap-6 md:flex-row-reverse md:justify-between"},flex:{true:"",false:""}},compoundVariants:[{layout:"flex",align:"right",className:"justify-between"},{layout:"flex-row-reverse",align:"right",className:"justify-between"}],defaultVariants:{}}),d=(0,r.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"flex flex-col gap-2 col-span-4",vertical:"flex flex-row gap-2 justify-between",flex:"flex flex-col gap-0 min-w-0","flex-row-reverse":"flex flex-col min-w-0 grow"},labelLayout:{horizontal:"",vertical:"","":""}},compoundVariants:[{flex:!0,align:"left",className:"order-2"},{flex:!0,align:"right",className:"order-1"},{layout:["vertical","flex"],labelLayout:void 0,flex:!1,className:"flex flex-row gap-2 justify-between"},{layout:"horizontal",className:"flex flex-col gap-2"}],defaultVariants:{}}),c=(0,r.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"order-1",right:"order-2"},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:"order-1"},{flex:!0,align:"right",className:"order-2"},{layout:["vertical","flex"],className:"col-span-12"},{layout:"horizontal",align:"left",className:"col-span-8"},{layout:"horizontal",align:"right",className:"text-right"}],defaultVariants:{}}),u=(0,r.cva)("text-foreground-lighter leading-normal",{variants:{size:{...n.SIZE.text},layout:{vertical:"mt-2",horizontal:"mt-2",flex:"","flex-row-reverse":""}},defaultVariants:{}}),x=(0,r.cva)("text-foreground-muted",{variants:{size:{...n.SIZE.text}},defaultVariants:{}}),f=(0,r.cva)("text-foreground-muted",{variants:{size:{...n.SIZE.text}},defaultVariants:{}}),m=(0,r.cva)("text-foreground-muted",{variants:{size:{...n.SIZE.text}},defaultVariants:{}}),p=(0,r.cva)("",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:""},{flex:!0,align:"right",className:"order-last"},{layout:"flex-row-reverse",className:"flex flex-col justify-center items-start md:items-end shrink-0 md:w-1/2 xl:w-2/5 [&>div]:md:w-full"}]}),g=(0,r.cva)("",{variants:{nonBoxInput:{true:"",false:""},label:{true:"",false:""},layout:{vertical:"",horizontal:"","flex-row-reverse":""}},compoundVariants:[{nonBoxInput:!0,label:!0,layout:"vertical",className:"my-3"},{nonBoxInput:!0,label:!0,layout:"horizontal",className:"my-3 md:mt-0 mb-3"}],defaultVariants:{}}),h=a.default.forwardRef(({align:e="left",className:r,description:a,id:n,label:h,labelOptional:b,layout:v="vertical",style:y,labelLayout:w,size:j="medium",beforeLabel:_,afterLabel:N,nonBoxInput:z=!h,hideMessage:k=!1,isReactForm:C,error:I,...S},F)=>{let L="flex"===v||"flex-row-reverse"===v,V=!!(h||_||N),T=C&&!k?(0,t.jsx)(o.FormMessage,{className:(0,i.cn)("mt-2 transition-all duration-300 ease-in-out","flex-row-reverse"===v&&"mt-0"),"data-formlayout-id":"message"}):I&&!k?(0,t.jsx)("p",{className:(0,i.cn)("mt-2 text-sm text-destructive","flex-row-reverse"===v&&"mt-0"),children:I}):null,E=a&&C?(0,t.jsx)(o.FormDescription,{className:(0,i.cn)(u({size:j,layout:v})),"data-formlayout-id":"description",id:`${n}-description`,children:a}):a?(0,t.jsx)("p",{className:(0,i.cn)(u({size:j,layout:v}),"text-sm text-foreground-light"),"data-formlayout-id":"description",children:a}):null,$=()=>(0,t.jsxs)(t.Fragment,{children:[_&&(0,t.jsx)("span",{className:(0,i.cn)(x({size:j})),id:n+"-before","data-formlayout-id":"beforeLabel",children:(0,t.jsx)("span",{children:_})}),(0,t.jsx)("span",{children:h}),N&&(0,t.jsx)("span",{className:(0,i.cn)(f({size:j})),id:n+"-after","data-formlayout-id":"afterLabel",children:N})]});return(0,t.jsxs)("div",{ref:F,...S,className:(0,i.cn)(s({size:j,flex:L,align:e,layout:v}),r),children:[L&&(0,t.jsxs)("div",{className:(0,i.cn)(p({flex:L,align:e,layout:v})),children:[S.children,"flex-row-reverse"===v&&T]}),V||b||"horizontal"===v?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:(0,i.cn)(d({align:e,labelLayout:w,flex:L,layout:v})),"data-formlayout-id":"labelContainer",children:[V&&C?(0,t.jsx)(o.FormLabel,{className:"text-foreground flex gap-2 items-center wrap-break-word","data-formlayout-id":"formLabel",htmlFor:S.name||n,children:(0,t.jsx)($,{})}):(0,t.jsx)(l.Label,{className:"text-foreground flex gap-2 items-center wrap-break-word leading-normal","data-formlayout-id":"label",htmlFor:S.name||n,children:(0,t.jsx)($,{})}),b&&(0,t.jsx)("span",{className:(0,i.cn)(m({size:j})),id:n+"-optional","data-formlayout-id":"labelOptional",children:b}),L&&(0,t.jsxs)(t.Fragment,{children:[E,"flex-row-reverse"!==v&&T]})]})}):null,!L&&(0,t.jsx)("div",{className:(0,i.cn)(c({align:e,layout:v})),style:y,"data-formlayout-id":"dataContainer",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:(0,i.cn)(g({nonBoxInput:z,label:h,layout:v})),"data-formlayout-id":"nonBoxInputContainer",children:S.children}),T,E]})})]})});e.s(["FormLayout",0,h])},538482,e=>{"use strict";var t=e.i(221628),r=e.i(416340),a=e.i(20482),i=e.i(95053);let o=(0,r.forwardRef)(({...e},r)=>(0,t.jsx)(a.FormItem,{children:(0,t.jsx)(i.FormLayout,{ref:r,isReactForm:!0,...e,children:e.children})}));o.displayName="FormItemLayout",e.s(["FormItemLayout",0,o])},344580,e=>{"use strict";var t=e.i(67318),r=function(e,r,a){if(e&&"reportValidity"in e){var i=(0,t.get)(a,r);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},a=function(e,t){var a=function(a){var i=t.fields[a];i&&i.ref&&"reportValidity"in i.ref?r(i.ref,a,e):i.refs&&i.refs.forEach(function(t){return r(t,a,e)})};for(var i in t.fields)a(i)},i=function(e,r){r.shouldUseNativeValidation&&a(e,r);var i={};for(var n in e){var s=(0,t.get)(r.fields,n),d=Object.assign(e[n]||{},{ref:s&&s.ref});if(l(r.names||Object.keys(e),n)){var c=Object.assign({},o((0,t.get)(i,n)));(0,t.set)(c,"root",d),(0,t.set)(i,n,c)}else(0,t.set)(i,n,d)}return i},o=function(e){return Array.isArray(e)?e.filter(Boolean):[]},l=function(e,t){return e.some(function(e){return e.startsWith(t+".")})},n=function(e,r){for(var a={};e.length;){var i=e[0],o=i.code,l=i.message,n=i.path.join(".");if(!a[n])if("unionErrors"in i){var s=i.unionErrors[0].errors[0];a[n]={message:s.message,type:s.code}}else a[n]={message:l,type:o};if("unionErrors"in i&&i.unionErrors.forEach(function(t){return t.errors.forEach(function(t){return e.push(t)})}),r){var d=a[n].types,c=d&&d[i.code];a[n]=(0,t.appendErrors)(n,r,a,o,c?[].concat(c,i.message):i.message)}e.shift()}return a};e.s(["zodResolver",0,function(e,t,r){return void 0===r&&(r={}),function(o,l,s){try{return Promise.resolve(function(i){try{var l=Promise.resolve(e["sync"===r.mode?"parse":"parseAsync"](o,t)).then(function(e){return s.shouldUseNativeValidation&&a({},s),{errors:{},values:r.raw?o:e}})}catch(e){return i(e)}return l&&l.then?l.then(void 0,i):l}(function(e){if(null!=e.errors)return{values:{},errors:i(n(e.errors,!s.shouldUseNativeValidation&&"all"===s.criteriaMode),s)};throw e}))}catch(e){return Promise.reject(e)}}}],344580)},938933,e=>{"use strict";var t=e.i(416340);let r={bg:{brand:{primary:"bg-purple-600",secondary:"bg-purple-200"}},text:{brand:"text-purple-600",body:"text-foreground-light",title:"text-foreground"},border:{brand:"border-brand-600",primary:"border-default",secondary:"border-secondary",alternative:"border-alternative"},placeholder:"placeholder-foreground-muted",focus:`
    outline-hidden
    focus:ring-current focus:ring-2
  `,"focus-visible":`
    outline-hidden
    transition-all
    outline-0
    focus-visible:outline-4
    focus-visible:outline-offset-1
  `,size:{text:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},padding:{tiny:"px-2.5 py-1",small:"px-3 py-2",medium:"px-4 py-2",large:"px-4 py-2",xlarge:"px-6 py-3"}},overlay:{base:"absolute inset-0 bg-background opacity-50",container:"fixed inset-0 transition-opacity"}},a={tiny:`${r.size.text.tiny} ${r.size.padding.tiny}`,small:`${r.size.text.small} ${r.size.padding.small}`,medium:`${r.size.text.medium} ${r.size.padding.medium}`,large:`${r.size.text.large} ${r.size.padding.large}`,xlarge:`${r.size.text.xlarge} ${r.size.padding.xlarge}`},i={card:{base:`
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
    `}},o=(0,t.createContext)({theme:i});e.s(["default",0,function(e){let{theme:{[e]:r}}=(0,t.useContext)(o);return JSON.parse(r=JSON.stringify(r).replace(/\\n/g,"").replace(/\s\s+/g," "))}],938933)},540203,e=>{"use strict";var t=e.i(26898),r=e.i(125356),a=e.i(795513),i=e.i(234745),o=e.i(280590),l=e.i(2579);async function n({orgSlug:e},t,r){if(!e)throw Error("orgSlug is required");let{error:a,data:o}=await (0,i.get)("/platform/organizations/{slug}/billing/subscription",{params:{path:{slug:e}},signal:t,headers:r});return a&&(0,i.handleError)(a),o}e.s(["useHasAccessToProjectLevelPermissions",0,e=>{let{hasAccess:t}=(0,o.useCheckEntitlements)("project_scoped_roles",e);return t},"useOrgSubscriptionQuery",0,({orgSlug:e},{enabled:i=!0,...o}={})=>{let{can:s}=(0,l.useAsyncCheckPermissions)(t.PermissionAction.BILLING_READ,"stripe.subscriptions");return(0,r.useQuery)({queryKey:a.subscriptionKeys.orgSubscription(e),queryFn:({signal:t})=>n({orgSlug:e},t),enabled:i&&s&&void 0!==e,staleTime:36e5,...o})}])},170149,e=>{"use strict";var t=e.i(221628);e.i(128328);var r=e.i(657588),a=e.i(344580),i=e.i(312062),o=e.i(36709),l=e.i(416340),n=e.i(67318),s=e.i(837710),d=e.i(843778),c=e.i(375761),u=e.i(253214),x=e.i(20482),f=e.i(348481),m=e.i(97429),p=e.i(710483);let g=(0,l.forwardRef)(({title:e,size:r="small",onConfirm:g,visible:h,onCancel:b,loading:v,cancelLabel:y="Cancel",confirmLabel:w="Submit",confirmPlaceholder:j,confirmString:_,alert:N,input:z,label:k,description:C,formMessage:I,text:S,children:F,blockDeleteButton:L=!0,variant:V="default",errorMessage:T="Value entered does not match",enableCopy:E=!1,...$},M)=>{let[B,P]=(0,l.useState)(!1),A=m.z.object({confirmValue:m.z.preprocess(e=>"string"==typeof e?e.trim():e,m.z.literal(_.trim(),{errorMap:()=>({message:T})}))}),D=(0,n.useForm)({resolver:(0,a.zodResolver)(A),reValidateMode:"onChange",defaultValues:{confirmValue:""}}),R=D.formState.isValid;(0,l.useEffect)(()=>{_&&D.reset()},[_]),(0,l.useEffect)(()=>{if(!B)return;let e=setTimeout(()=>P(!1),2e3);return()=>clearTimeout(e)},[B]);let{title:O,children:G,...q}=N?.base??{},U=N?.title?{label:N.title}:{};return(0,t.jsx)(u.Dialog,{open:h,...$,onOpenChange:()=>{h&&b()},children:(0,t.jsxs)(u.DialogContent,{ref:M,className:"p-0 gap-0 pb-5 block!",size:r,children:[(0,t.jsx)(u.DialogHeader,{className:(0,d.cn)("border-b"),padding:"small",children:(0,t.jsx)(u.DialogTitle,{className:"",children:e})}),N&&(0,t.jsx)(p.Admonition,{type:V,description:N.description,...U,className:"border-x-0 rounded-none -mt-px",...q}),F&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.DialogSection,{padding:"small",children:F}),(0,t.jsx)(u.DialogSectionSeparator,{})]}),void 0!==S&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.DialogSection,{className:"p-5",padding:"small",children:(0,t.jsx)("p",{className:"text-foreground-light text-sm",children:S})}),(0,t.jsx)(u.DialogSectionSeparator,{})]}),(0,t.jsx)(x.Form,{...D,children:(0,t.jsxs)("form",{autoComplete:"off",onSubmit:D.handleSubmit(function(e){g()}),className:"px-5 flex flex-col gap-y-3 pt-3",children:[(0,t.jsx)(x.FormField,{control:D.control,name:"confirmValue",render:({field:e})=>(0,t.jsxs)(x.FormItem,{className:"flex flex-col gap-y-2",children:[(0,t.jsxs)(x.FormLabel,{...k,enableSelection:!E,children:["Type"," ",E?(0,t.jsx)(s.Button,{type:"default",className:"h-[23px] px-1.5 py-0 border-muted text-sm whitespace-pre break-all",iconRight:B?(0,t.jsx)(i.Check,{strokeWidth:2,className:"text-brand"}):(0,t.jsx)(o.Copy,{}),onClick:()=>{P(!0),(0,c.copyToClipboard)(_)},children:_}):(0,t.jsx)("span",{className:"text-foreground break-all whitespace-pre",children:_})," ","to confirm."]}),(0,t.jsx)(x.FormControl,{children:(0,t.jsx)(f.Input,{autoComplete:"off",placeholder:j,...z,...e})}),!!C&&(0,t.jsx)(x.FormDescription,{...C}),(0,t.jsx)(x.FormMessage,{...I})]})}),(0,t.jsxs)("div",{className:"flex gap-2",children:[!L&&(0,t.jsx)(s.Button,{size:"medium",block:!0,type:"default",disabled:v,onClick:b,children:y}),(0,t.jsx)(s.Button,{block:!0,size:"medium",type:"destructive"===V?"danger":"warning"===V?"warning":"primary",htmlType:"submit",loading:v,disabled:!R||v,className:"truncate",children:w})]})]})})]})})});g.displayName="TextConfirmModal",e.s(["TextConfirmModal",0,e=>{let a=(0,r.useFlag)("textConfirmationModalClickToCopy");return(0,t.jsx)(g,{...e,enableCopy:a})}],170149)},746301,e=>{"use strict";var t=e.i(221628),r=e.i(36709),a=e.i(416340),i=e.i(843778),o=e.i(375761),l=e.i(231665);let n=(0,a.forwardRef)(({copy:e,showCopyOnHover:n=!1,icon:s,reveal:d=!1,actions:c,onCopy:u,iconContainerClassName:x,containerClassName:f,size:m="small",...p},g)=>{let[h,b]=(0,a.useState)("Copy"),[v,y]=(0,a.useState)(!0);return(0,t.jsxs)(l.InputGroup,{className:f,children:[(0,t.jsx)(l.InputGroupInput,{ref:g,onFocus:e=>e.target.select(),...p,size:m,onCopy:u,type:d&&v?"password":p.type,disabled:p.disabled,className:p.className,"data-1p-ignore":!0,"data-lpignore":"true","data-form-type":"other","data-bwignore":!0}),s&&(0,t.jsx)(l.InputGroupAddon,{align:"inline-start",children:s}),e||c?(0,t.jsxs)(l.InputGroupAddon,{align:"inline-end",className:"pr-1 has-[>button]:mr-0 has-[>kbd]:mr-0",children:[e&&!(d&&v)?(0,t.jsx)(l.InputGroupButton,{size:"tiny",type:"default",className:(0,i.cn)(n&&"opacity-0 group-hover:opacity-100 transition"),icon:(0,t.jsx)(r.Copy,{size:16,className:"text-foreground-muted"}),onClick:()=>{var e;return e=p.value,void(0,o.copyToClipboard)(e,()=>{b("Copied"),setTimeout(function(){b("Copy")},3e3),u?.()})},children:h}):null,d&&v?(0,t.jsx)(l.InputGroupButton,{size:"tiny",type:"default",onClick:function(){y(!1)},children:"Reveal"}):null,c&&c]}):null]})});e.s(["Input",0,n])},710019,e=>{e.v({dash:"loading-anim-module__T3MC1q__dash",loading:"loading-anim-module__T3MC1q__loading"})},724945,e=>{"use strict";var t=e.i(221628),r=e.i(710019);e.s(["default",0,()=>(0,t.jsx)("div",{className:"w-full h-full flex flex-col items-center justify-center",children:(0,t.jsx)("div",{children:(0,t.jsx)("svg",{width:"60",height:"62",viewBox:"0 0 60 62",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r.default.loading,children:(0,t.jsx)("path",{d:"M30.2571 4.12811L30.257 4.12389C30.2133 1.21067 26.5349 -0.034778 24.7224 2.24311L1.76109 31.0996C-1.21104 34.8348 1.45637 40.34 6.23131 40.34H29.4845L29.7563 58.4432C29.8 61.3564 33.4783 62.6016 35.2908 60.324L34.8996 60.0127L35.2908 60.324L58.2521 31.4674C61.2241 27.7322 58.5568 22.227 53.782 22.227H30.3762L30.2571 4.12811Z",stroke:"hsl(var(--brand-default))",strokeWidth:2,strokeLinecap:"round"})})})})])},818843,e=>{"use strict";var t=e.i(724945);e.s(["LogoLoader",()=>t.default])},744061,e=>{"use strict";var t=e.i(221628),r=e.i(938933),a=e.i(843778);function i({children:e,tag:r="div",style:a}){let o=`${r}`;return(0,t.jsx)(o,{style:a,children:e})}i.Title=function({level:e=1,children:r,style:a}){let i=`h${e}`;return(0,t.jsx)(i,{style:a,children:r})},i.Text=function({children:e,style:r,mark:a,code:i,keyboard:o,strong:l}){return i?(0,t.jsx)("code",{style:r,children:e}):a?(0,t.jsx)("mark",{style:r,children:e}):o?(0,t.jsx)("kbd",{style:r,children:e}):l?(0,t.jsx)("strong",{style:r,children:e}):(0,t.jsx)("span",{style:r,children:e})},i.Link=function({children:e,target:r="_blank",href:a,onClick:i,style:o}){return(0,t.jsx)("a",{onClick:i,href:a,target:r,rel:"noopener noreferrer",style:o,children:e})};var o=e.i(416340);let l=(0,o.createContext)({type:"text"}),n=e=>{let{type:r}=e;return(0,t.jsx)(l.Provider,{value:{type:r},children:e.children})},s=()=>{let e=(0,o.useContext)(l);if(void 0===e)throw Error("MenuContext must be used within a MenuContextProvider.");return e};function d({children:e,className:r,ulClassName:a,style:i,type:o="text"}){return(0,t.jsx)("nav",{role:"menu","aria-label":"Sidebar","aria-orientation":"vertical","aria-labelledby":"options-menu",className:r,style:i,children:(0,t.jsx)(n,{type:o,children:(0,t.jsx)("ul",{className:a,children:e})})})}d.Item=function({children:e,icon:i,active:o,onClick:l,style:n}){let d=(0,r.default)("menu"),{type:c}=s(),u=[d.item.base];u.push(d.item.variants[c].base),o?u.push(d.item.variants[c].active):u.push(d.item.variants[c].normal);let x=[d.item.content.base];o?x.push(d.item.content.active):x.push(d.item.content.normal);let f=[d.item.icon.base];return o?f.push(d.item.icon.active):f.push(d.item.icon.normal),(0,t.jsxs)("li",{role:"menuitem",className:(0,a.cn)("outline-hidden",u),style:n,onClick:l,"aria-current":o?"page":void 0,children:[i&&(0,t.jsx)("div",{className:`${f.join(" ")} min-w-fit`,children:i}),(0,t.jsx)("span",{className:x.join(" "),children:e})]})},d.Group=function({children:e,icon:a,title:i}){let o=(0,r.default)("menu"),{type:l}=s();return(0,t.jsxs)("div",{className:[o.group.base,o.group.variants[l]].join(" "),children:[a&&(0,t.jsx)("span",{className:o.group.icon,children:a}),(0,t.jsx)("span",{className:o.group.content,children:i}),e]})},d.Misc=function({children:e}){return(0,t.jsx)("div",{children:(0,t.jsx)(i.Text,{children:(0,t.jsx)("span",{children:e})})})},e.s(["default",0,d],744061)},862326,e=>{"use strict";var t=e.i(744061);e.s(["Menu",()=>t.default])},388147,e=>{"use strict";var t=e.i(221628),r=e.i(587433),a=e.i(862326),i=e.i(561978),o=e.i(837710),l=e.i(654894);let n=({item:e,isActive:n,target:s="_self",hoverText:d="",onClick:c})=>{let{name:u="",url:x="",icon:f,rightIcon:m,isExternal:p,label:g,disabled:h,shortcutId:b}=e,v=(0,t.jsx)(a.Menu.Item,{icon:f,active:n,onClick:c,children:(0,t.jsxs)("div",{className:"flex w-full items-center justify-between gap-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1 min-w-0 flex-1",title:b?void 0:d||("string"==typeof u?u:""),children:[(0,t.jsx)("span",{className:"truncate flex-1 min-w-0",children:u}),void 0!==g&&(0,t.jsx)(r.Badge,{className:"shrink-0",variant:"new"===g.toLowerCase()?"success":"warning",children:g})]}),m&&(0,t.jsx)("div",{children:m})]})});if(h)return(0,t.jsx)("div",{className:"opacity-50 pointer-events-none",children:v});if(x){if(p){let e=(0,t.jsx)(o.Button,{asChild:!0,block:!0,className:"justify-start!",type:"text",size:"small",icon:f,children:(0,t.jsx)(i.default,{href:x,target:"_blank",rel:"noreferrer",children:u})});return b?(0,t.jsx)(l.ShortcutTooltip,{shortcutId:b,side:"right",delayDuration:1e3,children:e}):e}let e=(0,t.jsx)(i.default,{href:x,className:"block",target:s,onClick:c,children:v});return b?(0,t.jsx)(l.ShortcutTooltip,{shortcutId:b,side:"right",delayDuration:1e3,children:e}):e}return v};e.s(["ProductMenu",0,({page:e,menu:i,onItemClick:o})=>(0,t.jsx)("div",{className:"flex flex-col space-y-4",children:(0,t.jsx)(a.Menu,{type:"pills",children:i.map((l,s)=>(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"my-4 space-y-4",children:(0,t.jsxs)("div",{className:"md:mx-3",children:[(0,t.jsx)(a.Menu.Group,{title:l.title?(0,t.jsxs)("div",{className:"flex flex-col space-y-2 uppercase font-mono",children:[(0,t.jsx)("span",{children:l.title}),l.isPreview&&(0,t.jsx)(r.Badge,{variant:"warning",children:"Not production ready"})]}):null}),(0,t.jsx)("div",{children:l.items.map(r=>{let a=r.pages?r.pages.includes(e??""):e===r.key;return(0,t.jsx)(n,{item:r,isActive:a,target:r.isExternal?"_blank":"_self",onClick:o},r.key)})})]})}),s!==i.length-1&&(0,t.jsx)("div",{className:"h-px w-[calc(100%-1.5rem)] mx-auto md:w-full bg-border-overlay"})]},l.key||l.title))})})],388147)}]);

//# debugId=ab113409-cef3-2e53-4b20-51cc414f9c8c
//# sourceMappingURL=06vt~h0hc.jvh.js.map