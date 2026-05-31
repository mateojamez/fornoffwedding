;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="f76d7c53-f08c-f1f2-0531-e357dbd311ed")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,202003,e=>{"use strict";e.s(["buildStudioPageTitle",0,e=>{let t=[e.entity,e.section,e.surface,e.project,e.org,e.brand],s=[];return t.forEach(e=>{let t=(e=>{if(void 0===e)return;let t=e.trim().replace(/\s+/g," ");if(0!==t.length)return t.length<=60?t:`${t.slice(0,59).trimEnd()}…`})(e);if(!t)return;let a=s[s.length-1];(void 0===a||a.toLowerCase()!==t.toLowerCase())&&s.push(t)}),s.join(" | ")}])},22194,e=>{"use strict";var t=e.i(221628);e.i(481541);var s=e.i(665265),s=s,a=e.i(188139),r=e.i(416340),n=e.i(843778);e.s(["ProfileImage",0,({alt:e,src:i,placeholder:o,className:l})=>{let[c,d]=(0,r.useState)(!1);return i&&!c?(0,t.jsx)(a.default,{alt:e??"",src:i,width:"24",height:"24",className:(0,n.cn)("aspect-square bg-foreground rounded-full object-cover",l),onError:()=>d(!0)}):o??(0,t.jsx)("figure",{className:(0,n.cn)("bg-foreground rounded-full flex items-center justify-center",l),children:(0,t.jsx)(s.default,{size:18,strokeWidth:1.5,className:"text-background"})})}],22194)},95053,e=>{"use strict";var t=e.i(221628),s=e.i(766181),a=e.i(416340),r=e.i(843778),n=e.i(20482),i=e.i(737018),o=e.i(282410);let l=(0,s.cva)("relative grid gap-10",{variants:{size:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},align:{left:"",right:""},responsive:{true:"",false:""},layout:{horizontal:"flex flex-col gap-2 md:grid md:grid-cols-12",vertical:"flex flex-col gap-2",flex:"flex flex-row gap-3","flex-row-reverse":"flex flex-col-reverse gap-2 md:gap-6 md:flex-row-reverse md:justify-between"},flex:{true:"",false:""}},compoundVariants:[{layout:"flex",align:"right",className:"justify-between"},{layout:"flex-row-reverse",align:"right",className:"justify-between"}],defaultVariants:{}}),c=(0,s.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"flex flex-col gap-2 col-span-4",vertical:"flex flex-row gap-2 justify-between",flex:"flex flex-col gap-0 min-w-0","flex-row-reverse":"flex flex-col min-w-0 grow"},labelLayout:{horizontal:"",vertical:"","":""}},compoundVariants:[{flex:!0,align:"left",className:"order-2"},{flex:!0,align:"right",className:"order-1"},{layout:["vertical","flex"],labelLayout:void 0,flex:!1,className:"flex flex-row gap-2 justify-between"},{layout:"horizontal",className:"flex flex-col gap-2"}],defaultVariants:{}}),d=(0,s.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"order-1",right:"order-2"},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:"order-1"},{flex:!0,align:"right",className:"order-2"},{layout:["vertical","flex"],className:"col-span-12"},{layout:"horizontal",align:"left",className:"col-span-8"},{layout:"horizontal",align:"right",className:"text-right"}],defaultVariants:{}}),u=(0,s.cva)("text-foreground-lighter leading-normal",{variants:{size:{...o.SIZE.text},layout:{vertical:"mt-2",horizontal:"mt-2",flex:"","flex-row-reverse":""}},defaultVariants:{}}),m=(0,s.cva)("text-foreground-muted",{variants:{size:{...o.SIZE.text}},defaultVariants:{}}),p=(0,s.cva)("text-foreground-muted",{variants:{size:{...o.SIZE.text}},defaultVariants:{}}),h=(0,s.cva)("text-foreground-muted",{variants:{size:{...o.SIZE.text}},defaultVariants:{}}),f=(0,s.cva)("",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:""},{flex:!0,align:"right",className:"order-last"},{layout:"flex-row-reverse",className:"flex flex-col justify-center items-start md:items-end shrink-0 md:w-1/2 xl:w-2/5 [&>div]:md:w-full"}]}),x=(0,s.cva)("",{variants:{nonBoxInput:{true:"",false:""},label:{true:"",false:""},layout:{vertical:"",horizontal:"","flex-row-reverse":""}},compoundVariants:[{nonBoxInput:!0,label:!0,layout:"vertical",className:"my-3"},{nonBoxInput:!0,label:!0,layout:"horizontal",className:"my-3 md:mt-0 mb-3"}],defaultVariants:{}}),g=a.default.forwardRef(({align:e="left",className:s,description:a,id:o,label:g,labelOptional:j,layout:b="vertical",style:v,labelLayout:y,size:w="medium",beforeLabel:k,afterLabel:S,nonBoxInput:_=!g,hideMessage:N=!1,isReactForm:C,error:P,...T},E)=>{let A="flex"===b||"flex-row-reverse"===b,R=!!(g||k||S),I=C&&!N?(0,t.jsx)(n.FormMessage,{className:(0,r.cn)("mt-2 transition-all duration-300 ease-in-out","flex-row-reverse"===b&&"mt-0"),"data-formlayout-id":"message"}):P&&!N?(0,t.jsx)("p",{className:(0,r.cn)("mt-2 text-sm text-destructive","flex-row-reverse"===b&&"mt-0"),children:P}):null,z=a&&C?(0,t.jsx)(n.FormDescription,{className:(0,r.cn)(u({size:w,layout:b})),"data-formlayout-id":"description",id:`${o}-description`,children:a}):a?(0,t.jsx)("p",{className:(0,r.cn)(u({size:w,layout:b}),"text-sm text-foreground-light"),"data-formlayout-id":"description",children:a}):null,D=()=>(0,t.jsxs)(t.Fragment,{children:[k&&(0,t.jsx)("span",{className:(0,r.cn)(m({size:w})),id:o+"-before","data-formlayout-id":"beforeLabel",children:(0,t.jsx)("span",{children:k})}),(0,t.jsx)("span",{children:g}),S&&(0,t.jsx)("span",{className:(0,r.cn)(p({size:w})),id:o+"-after","data-formlayout-id":"afterLabel",children:S})]});return(0,t.jsxs)("div",{ref:E,...T,className:(0,r.cn)(l({size:w,flex:A,align:e,layout:b}),s),children:[A&&(0,t.jsxs)("div",{className:(0,r.cn)(f({flex:A,align:e,layout:b})),children:[T.children,"flex-row-reverse"===b&&I]}),R||j||"horizontal"===b?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:(0,r.cn)(c({align:e,labelLayout:y,flex:A,layout:b})),"data-formlayout-id":"labelContainer",children:[R&&C?(0,t.jsx)(n.FormLabel,{className:"text-foreground flex gap-2 items-center wrap-break-word","data-formlayout-id":"formLabel",htmlFor:T.name||o,children:(0,t.jsx)(D,{})}):(0,t.jsx)(i.Label,{className:"text-foreground flex gap-2 items-center wrap-break-word leading-normal","data-formlayout-id":"label",htmlFor:T.name||o,children:(0,t.jsx)(D,{})}),j&&(0,t.jsx)("span",{className:(0,r.cn)(h({size:w})),id:o+"-optional","data-formlayout-id":"labelOptional",children:j}),A&&(0,t.jsxs)(t.Fragment,{children:[z,"flex-row-reverse"!==b&&I]})]})}):null,!A&&(0,t.jsx)("div",{className:(0,r.cn)(d({align:e,layout:b})),style:v,"data-formlayout-id":"dataContainer",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:(0,r.cn)(x({nonBoxInput:_,label:g,layout:b})),"data-formlayout-id":"nonBoxInputContainer",children:T.children}),I,z]})})]})});e.s(["FormLayout",0,g])},538482,e=>{"use strict";var t=e.i(221628),s=e.i(416340),a=e.i(20482),r=e.i(95053);let n=(0,s.forwardRef)(({...e},s)=>(0,t.jsx)(a.FormItem,{children:(0,t.jsx)(r.FormLayout,{ref:s,isReactForm:!0,...e,children:e.children})}));n.displayName="FormItemLayout",e.s(["FormItemLayout",0,n])},344580,e=>{"use strict";var t=e.i(67318),s=function(e,s,a){if(e&&"reportValidity"in e){var r=(0,t.get)(a,s);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},a=function(e,t){var a=function(a){var r=t.fields[a];r&&r.ref&&"reportValidity"in r.ref?s(r.ref,a,e):r.refs&&r.refs.forEach(function(t){return s(t,a,e)})};for(var r in t.fields)a(r)},r=function(e,s){s.shouldUseNativeValidation&&a(e,s);var r={};for(var o in e){var l=(0,t.get)(s.fields,o),c=Object.assign(e[o]||{},{ref:l&&l.ref});if(i(s.names||Object.keys(e),o)){var d=Object.assign({},n((0,t.get)(r,o)));(0,t.set)(d,"root",c),(0,t.set)(r,o,d)}else(0,t.set)(r,o,c)}return r},n=function(e){return Array.isArray(e)?e.filter(Boolean):[]},i=function(e,t){return e.some(function(e){return e.startsWith(t+".")})},o=function(e,s){for(var a={};e.length;){var r=e[0],n=r.code,i=r.message,o=r.path.join(".");if(!a[o])if("unionErrors"in r){var l=r.unionErrors[0].errors[0];a[o]={message:l.message,type:l.code}}else a[o]={message:i,type:n};if("unionErrors"in r&&r.unionErrors.forEach(function(t){return t.errors.forEach(function(t){return e.push(t)})}),s){var c=a[o].types,d=c&&c[r.code];a[o]=(0,t.appendErrors)(o,s,a,n,d?[].concat(d,r.message):r.message)}e.shift()}return a};e.s(["zodResolver",0,function(e,t,s){return void 0===s&&(s={}),function(n,i,l){try{return Promise.resolve(function(r){try{var i=Promise.resolve(e["sync"===s.mode?"parse":"parseAsync"](n,t)).then(function(e){return l.shouldUseNativeValidation&&a({},l),{errors:{},values:s.raw?n:e}})}catch(e){return r(e)}return i&&i.then?i.then(void 0,r):i}(function(e){if(null!=e.errors)return{values:{},errors:r(o(e.errors,!l.shouldUseNativeValidation&&"all"===l.criteriaMode),l)};throw e}))}catch(e){return Promise.reject(e)}}}],344580)},938933,e=>{"use strict";var t=e.i(416340);let s={bg:{brand:{primary:"bg-purple-600",secondary:"bg-purple-200"}},text:{brand:"text-purple-600",body:"text-foreground-light",title:"text-foreground"},border:{brand:"border-brand-600",primary:"border-default",secondary:"border-secondary",alternative:"border-alternative"},placeholder:"placeholder-foreground-muted",focus:`
    outline-hidden
    focus:ring-current focus:ring-2
  `,"focus-visible":`
    outline-hidden
    transition-all
    outline-0
    focus-visible:outline-4
    focus-visible:outline-offset-1
  `,size:{text:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},padding:{tiny:"px-2.5 py-1",small:"px-3 py-2",medium:"px-4 py-2",large:"px-4 py-2",xlarge:"px-6 py-3"}},overlay:{base:"absolute inset-0 bg-background opacity-50",container:"fixed inset-0 transition-opacity"}},a={tiny:`${s.size.text.tiny} ${s.size.padding.tiny}`,small:`${s.size.text.small} ${s.size.padding.small}`,medium:`${s.size.text.medium} ${s.size.padding.medium}`,large:`${s.size.text.large} ${s.size.padding.large}`,xlarge:`${s.size.text.xlarge} ${s.size.padding.xlarge}`},r={card:{base:`
      bg-surface-100

      border
      ${s.border.primary}

      flex flex-col
      rounded-md shadow-lg overflow-hidden relative
    `,hoverable:"transition hover:-translate-y-1 hover:shadow-2xl",head:`px-8 py-6 flex justify-between
    border-b
      ${s.border.primary} `,content:"p-8"},tabs:{base:"w-full justify-between space-y-4",underlined:{list:`
        flex items-center border-b
        ${s.border.secondary}
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
      ${s.focus}
      focus-visible:border-foreground-muted
      focus-visible:ring-background-control
      ${s.placeholder}
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
    `},form_layout:{container:"grid gap-2",flex:{left:{base:"flex flex-row gap-6",content:"",labels:"order-2",data_input:"order-1"},right:{base:"flex flex-row gap-6 justify-between",content:"order-last",labels:"",data_input:"text-right"}},responsive:"md:grid md:grid-cols-12",non_responsive:"grid grid-cols-12 gap-2",labels_horizontal_layout:"flex flex-row space-x-2 justify-between col-span-12",labels_vertical_layout:"flex flex-col space-y-2 col-span-4",data_input_horizontal_layout:"col-span-12",non_box_data_input_spacing_vertical:"my-3",non_box_data_input_spacing_horizontal:"my-3 md:mt-0 mb-3",data_input_vertical_layout:"col-span-8",data_input_vertical_layout__align_right:"text-right",label:{base:"block text-foreground-light",size:{...s.size.text}},label_optional:{base:"text-foreground-lighter",size:{...s.size.text}},description:{base:"mt-2 text-foreground-lighter leading-normal",size:{...s.size.text}},label_before:{base:"text-foreground-lighter ",size:{...s.size.text}},label_after:{base:"text-foreground-lighter",size:{...s.size.text}},error:{base:`
        text-red-900
        transition-all
        data-show:mt-2
        data-show:animate-slide-down-normal
        data-hide:animate-slide-up-normal
      `,size:{...s.size.text}},size:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"}},menu:{item:{base:`
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
      ${s.focus}
      focus-visible:border-foreground-muted
      focus-visible:ring-background-control
      ${s.placeholder}
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
    `}},n=(0,t.createContext)({theme:r});e.s(["default",0,function(e){let{theme:{[e]:s}}=(0,t.useContext)(n);return JSON.parse(s=JSON.stringify(s).replace(/\\n/g,"").replace(/\s\s+/g," "))}],938933)},744061,e=>{"use strict";var t=e.i(221628),s=e.i(938933),a=e.i(843778);function r({children:e,tag:s="div",style:a}){let n=`${s}`;return(0,t.jsx)(n,{style:a,children:e})}r.Title=function({level:e=1,children:s,style:a}){let r=`h${e}`;return(0,t.jsx)(r,{style:a,children:s})},r.Text=function({children:e,style:s,mark:a,code:r,keyboard:n,strong:i}){return r?(0,t.jsx)("code",{style:s,children:e}):a?(0,t.jsx)("mark",{style:s,children:e}):n?(0,t.jsx)("kbd",{style:s,children:e}):i?(0,t.jsx)("strong",{style:s,children:e}):(0,t.jsx)("span",{style:s,children:e})},r.Link=function({children:e,target:s="_blank",href:a,onClick:r,style:n}){return(0,t.jsx)("a",{onClick:r,href:a,target:s,rel:"noopener noreferrer",style:n,children:e})};var n=e.i(416340);let i=(0,n.createContext)({type:"text"}),o=e=>{let{type:s}=e;return(0,t.jsx)(i.Provider,{value:{type:s},children:e.children})},l=()=>{let e=(0,n.useContext)(i);if(void 0===e)throw Error("MenuContext must be used within a MenuContextProvider.");return e};function c({children:e,className:s,ulClassName:a,style:r,type:n="text"}){return(0,t.jsx)("nav",{role:"menu","aria-label":"Sidebar","aria-orientation":"vertical","aria-labelledby":"options-menu",className:s,style:r,children:(0,t.jsx)(o,{type:n,children:(0,t.jsx)("ul",{className:a,children:e})})})}c.Item=function({children:e,icon:r,active:n,onClick:i,style:o}){let c=(0,s.default)("menu"),{type:d}=l(),u=[c.item.base];u.push(c.item.variants[d].base),n?u.push(c.item.variants[d].active):u.push(c.item.variants[d].normal);let m=[c.item.content.base];n?m.push(c.item.content.active):m.push(c.item.content.normal);let p=[c.item.icon.base];return n?p.push(c.item.icon.active):p.push(c.item.icon.normal),(0,t.jsxs)("li",{role:"menuitem",className:(0,a.cn)("outline-hidden",u),style:o,onClick:i,"aria-current":n?"page":void 0,children:[r&&(0,t.jsx)("div",{className:`${p.join(" ")} min-w-fit`,children:r}),(0,t.jsx)("span",{className:m.join(" "),children:e})]})},c.Group=function({children:e,icon:a,title:r}){let n=(0,s.default)("menu"),{type:i}=l();return(0,t.jsxs)("div",{className:[n.group.base,n.group.variants[i]].join(" "),children:[a&&(0,t.jsx)("span",{className:n.group.icon,children:a}),(0,t.jsx)("span",{className:n.group.content,children:r}),e]})},c.Misc=function({children:e}){return(0,t.jsx)("div",{children:(0,t.jsx)(r.Text,{children:(0,t.jsx)("span",{children:e})})})},e.s(["default",0,c],744061)},862326,e=>{"use strict";var t=e.i(744061);e.s(["Menu",()=>t.default])},388147,e=>{"use strict";var t=e.i(221628),s=e.i(587433),a=e.i(862326),r=e.i(561978),n=e.i(837710),i=e.i(654894);let o=({item:e,isActive:o,target:l="_self",hoverText:c="",onClick:d})=>{let{name:u="",url:m="",icon:p,rightIcon:h,isExternal:f,label:x,disabled:g,shortcutId:j}=e,b=(0,t.jsx)(a.Menu.Item,{icon:p,active:o,onClick:d,children:(0,t.jsxs)("div",{className:"flex w-full items-center justify-between gap-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1 min-w-0 flex-1",title:j?void 0:c||("string"==typeof u?u:""),children:[(0,t.jsx)("span",{className:"truncate flex-1 min-w-0",children:u}),void 0!==x&&(0,t.jsx)(s.Badge,{className:"shrink-0",variant:"new"===x.toLowerCase()?"success":"warning",children:x})]}),h&&(0,t.jsx)("div",{children:h})]})});if(g)return(0,t.jsx)("div",{className:"opacity-50 pointer-events-none",children:b});if(m){if(f){let e=(0,t.jsx)(n.Button,{asChild:!0,block:!0,className:"justify-start!",type:"text",size:"small",icon:p,children:(0,t.jsx)(r.default,{href:m,target:"_blank",rel:"noreferrer",children:u})});return j?(0,t.jsx)(i.ShortcutTooltip,{shortcutId:j,side:"right",delayDuration:1e3,children:e}):e}let e=(0,t.jsx)(r.default,{href:m,className:"block",target:l,onClick:d,children:b});return j?(0,t.jsx)(i.ShortcutTooltip,{shortcutId:j,side:"right",delayDuration:1e3,children:e}):e}return b};e.s(["ProductMenu",0,({page:e,menu:r,onItemClick:n})=>(0,t.jsx)("div",{className:"flex flex-col space-y-4",children:(0,t.jsx)(a.Menu,{type:"pills",children:r.map((i,l)=>(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"my-4 space-y-4",children:(0,t.jsxs)("div",{className:"md:mx-3",children:[(0,t.jsx)(a.Menu.Group,{title:i.title?(0,t.jsxs)("div",{className:"flex flex-col space-y-2 uppercase font-mono",children:[(0,t.jsx)("span",{children:i.title}),i.isPreview&&(0,t.jsx)(s.Badge,{variant:"warning",children:"Not production ready"})]}):null}),(0,t.jsx)("div",{children:i.items.map(s=>{let a=s.pages?s.pages.includes(e??""):e===s.key;return(0,t.jsx)(o,{item:s,isActive:a,target:s.isExternal?"_blank":"_self",onClick:n},s.key)})})]})}),l!==r.length-1&&(0,t.jsx)("div",{className:"h-px w-[calc(100%-1.5rem)] mx-auto md:w-full bg-border-overlay"})]},i.key||i.title))})})],388147)},11872,e=>{"use strict";var t=e.i(221628),s=e.i(896779),a=e.i(416340),r=e.i(194125);let n=e=>e.flatMap(e=>{let t=e.childItems?n(e.childItems):[];return!e.shortcutId||!e.url||e.disabled||e.isExternal?t:[e,...t]}),i=({item:e})=>{let t=(0,s.useRouter)(),{shortcutId:n,url:i}=e,o=(0,a.useCallback)(()=>{t.push(i)},[t,i]);return(0,r.useShortcut)(n,o),null};e.s(["ProductMenuShortcuts",0,({menu:e})=>{let s=e.flatMap(e=>n(e.items));return(0,t.jsx)(t.Fragment,{children:s.map(e=>(0,t.jsx)(i,{item:e},`${e.shortcutId}-${e.url}`))})}])},537087,e=>{"use strict";let t=(0,e.i(679709).default)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);e.s(["default",0,t])},573569,e=>{"use strict";var t=e.i(537087);e.s(["RefreshCw",()=>t.default])},167892,e=>{"use strict";var t=e.i(221628),s=e.i(416340),a=e.i(843778);let r="mx-auto w-full max-w-[1200px]",n="px-4 @lg:px-6 @xl:px-10",i=(0,s.forwardRef)(({className:e,bottomPadding:s,size:r="default",...i},o)=>(0,t.jsx)("div",{ref:o,...i,className:(0,a.cn)("mx-auto w-full @container",{small:"max-w-[768px]",default:"max-w-[1200px]",large:"max-w-[1600px]",full:"max-w-none"}[r],n,s&&"pb-16",e)})),o=(0,s.forwardRef)(({className:e,...s},r)=>(0,t.jsx)("header",{...s,ref:r,className:(0,a.cn)("w-full","flex-col gap-3 py-6",e)})),l=(0,s.forwardRef)(({className:e,...s},r)=>(0,t.jsx)("h1",{ref:r,...s,className:(0,a.cn)(e)})),c=(0,s.forwardRef)(({className:e,...s},r)=>(0,t.jsx)("p",{ref:r,...s,className:(0,a.cn)("text-sm text-foreground-light",e)})),d=(0,s.forwardRef)(({className:e,isFullWidth:s,topPadding:r,...n},i)=>(0,t.jsx)("div",{ref:i,...n,className:(0,a.cn)("flex flex-col first:pt-12 py-6",s?"w-full":"gap-3 @md:grid-cols-12 @lg:grid",e)})),u=(0,s.forwardRef)(({className:e,...s},r)=>(0,t.jsx)("div",{ref:r,...s,className:(0,a.cn)("w-full h-px bg-border shrink-0",e)})),m=(0,s.forwardRef)(({className:e,...s},r)=>(0,t.jsx)("h3",{ref:r,...s,className:(0,a.cn)("text-foreground text-xl",e)})),p=(0,s.forwardRef)(({className:e,...s},r)=>(0,t.jsx)("p",{ref:r,...s,className:(0,a.cn)("text-sm text-foreground-light",e)})),h=(0,s.forwardRef)(({className:e,children:s,title:r,...n},i)=>(0,t.jsxs)("div",{ref:i,...n,className:(0,a.cn)("col-span-4 xl:col-span-5 prose text-sm",e),children:[r&&(0,t.jsx)("h2",{children:r}),s]})),f=(0,s.forwardRef)(({className:e,...s},r)=>(0,t.jsx)("div",{ref:r,...s,className:(0,a.cn)("col-span-8 xl:col-span-7","flex flex-col gap-6",e)})),x=(0,s.forwardRef)(({className:e,...s},r)=>(0,t.jsx)("div",{ref:r,...s,className:(0,a.cn)("flex flex-col gap-3 items-center",e)})),g=(0,s.forwardRef)(({className:e,...s},r)=>(0,t.jsx)("div",{ref:r,...s,className:(0,a.cn)("flex w-full items-center",e)})),j=(0,s.forwardRef)(({className:e,...s},r)=>(0,t.jsx)("div",{ref:r,...s,className:(0,a.cn)("flex flex-row gap-3",e)})),b=(0,s.forwardRef)(({className:e,...s},r)=>(0,t.jsx)("div",{ref:r,...s,className:(0,a.cn)("flex flex-col gap-3","min-w-[420px]",e)})),v=(0,s.forwardRef)(({className:e,...s},i)=>(0,t.jsx)("div",{ref:i,...s,className:(0,a.cn)(r,n,"my-8 flex flex-col gap-8",e)}));o.displayName="ScaffoldHeader",l.displayName="ScaffoldTitle",c.displayName="ScaffoldDescription",i.displayName="ScaffoldContainer",u.displayName="ScaffoldDivider",d.displayName="ScaffoldSection",b.displayName="ScaffoldColumn",h.displayName="ScaffoldSectionDetail",f.displayName="ScaffoldSectionContent",x.displayName="ScaffoldFilterAndContent",g.displayName="ScaffoldActionsContainer",j.displayName="ScaffoldActionsGroup",v.displayName="ScaffoldContainerLegacy",m.displayName="ScaffoldSectionTitle",p.displayName="ScaffoldSectionDescription",e.s(["MAX_WIDTH_CLASSES",0,r,"PADDING_CLASSES",0,n,"ScaffoldActionsContainer",0,g,"ScaffoldActionsGroup",0,j,"ScaffoldColumn",0,b,"ScaffoldContainer",0,i,"ScaffoldContainerLegacy",0,v,"ScaffoldDescription",0,c,"ScaffoldDivider",0,u,"ScaffoldFilterAndContent",0,x,"ScaffoldHeader",0,o,"ScaffoldSection",0,d,"ScaffoldSectionContent",0,f,"ScaffoldSectionDescription",0,p,"ScaffoldSectionDetail",0,h,"ScaffoldSectionTitle",0,m,"ScaffoldTitle",0,l])},228027,e=>{"use strict";var t=e.i(221628),s=e.i(766181),a=e.i(843778);let r=(0,s.cva)(["pt-12 last:pb-12 gap-6"],{variants:{orientation:{horizontal:"grid @3xl:grid-cols-[1fr_2fr] @3xl:gap-12",vertical:"flex flex-col"}},defaultVariants:{orientation:"vertical"}}),n=({className:e,orientation:s="vertical",children:n,...i})=>(0,t.jsx)("div",{"data-slot":"page-section","data-orientation":s,className:(0,a.cn)(r({orientation:s}),e),...i,children:n});n.displayName="PageSectionRoot";let i=({className:e,children:s,...r})=>(0,t.jsx)("div",{"data-slot":"page-section-summary",className:(0,a.cn)("flex flex-col gap-1",e),...r,children:s});i.displayName="PageSectionSummary";let o=({className:e,children:s,...r})=>(0,t.jsx)("h2",{"data-slot":"page-section-title",className:(0,a.cn)("heading-section",e),...r,children:s});o.displayName="PageSectionTitle";let l=({className:e,children:s,...r})=>(0,t.jsx)("div",{"data-slot":"page-section-description",className:(0,a.cn)("text-sm text-foreground-light",e),style:{textBoxTrim:"trim-end"},...r,children:s});l.displayName="PageSectionDescription";let c=({className:e,...s})=>(0,t.jsx)("div",{"data-slot":"page-section-aside",className:(0,a.cn)("flex items-center gap-2","@xl:self-end",e),...s});c.displayName="PageSectionAside";let d=({className:e,children:s,...r})=>(0,t.jsx)("div",{className:"@container",children:(0,t.jsx)("div",{"data-slot":"page-section-meta",className:(0,a.cn)("flex flex-col @xl:flex-row @xl:justify-between @xl:items-center gap-4",'*:data-[slot="page-section-summary"]:flex-1','*:data-[slot="page-section-summary"]:@xl:self-center','*:data-[slot="page-section-aside"]:shrink-0',e),...r,children:s})});d.displayName="PageSectionMeta";let u=({className:e,...s})=>(0,t.jsx)("div",{"data-slot":"page-section-content",className:(0,a.cn)(e),...s});u.displayName="PageSectionContent",e.s(["PageSection",0,n,"PageSectionAside",0,c,"PageSectionContent",0,u,"PageSectionDescription",0,l,"PageSectionMeta",0,d,"PageSectionSummary",0,i,"PageSectionTitle",0,o])},3259,720512,e=>{"use strict";var t=e.i(221628),s=e.i(335032),a=e.i(631700);e.s(["ChevronRightIcon",()=>a.default],720512);var a=a,r=e.i(416340),n=e.i(843778);let i=r.forwardRef(({...e},s)=>(0,t.jsx)("nav",{ref:s,"aria-label":"breadcrumb",...e}));i.displayName="Breadcrumb";let o=r.forwardRef(({className:e,...s},a)=>(0,t.jsx)("ol",{ref:a,className:(0,n.cn)("flex flex-wrap items-center gap-0.5 wrap-break-word text-sm text-muted-foreground sm:gap-1.5",e),...s}));o.displayName="BreadcrumbList";let l=r.forwardRef(({className:e,...s},a)=>(0,t.jsx)("li",{ref:a,className:(0,n.cn)("inline-flex text-foreground-lighter items-center gap-1.5 leading-5",e),...s}));l.displayName="BreadcrumbItem";let c=r.forwardRef(({asChild:e,className:a,...r},i)=>{let o=e?s.Slot.Slot:"a";return(0,t.jsx)(o,{ref:i,className:(0,n.cn)("transition-colors underline lg:no-underline hover:text-foreground",a),...r})});c.displayName="BreadcrumbLink";let d=r.forwardRef(({className:e,...s},a)=>(0,t.jsx)("span",{ref:a,role:"link","aria-disabled":"true","aria-current":"page",className:(0,n.cn)("no-underline text-foreground",e),...s}));d.displayName="BreadcrumbPage";let u=({children:e,className:s,...r})=>(0,t.jsx)("li",{role:"presentation","aria-hidden":"true",className:(0,n.cn)("[&>svg]:size-3.5 text-foreground-muted",s),...r,children:e??(0,t.jsx)(a.default,{})});u.displayName="BreadcrumbSeparator";let m=({className:e,...s})=>(0,t.jsxs)("span",{className:(0,n.cn)("flex h-4 w-4 items-center justify-center",e),...s,children:[(0,t.jsx)("svg",{role:"presentation","aria-hidden":"true",width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}),(0,t.jsx)("span",{className:"sr-only",children:"More"})]});m.displayName="BreadcrumbEllipsis",e.s(["Breadcrumb",0,i,"BreadcrumbEllipsis",0,m,"BreadcrumbItem",0,l,"BreadcrumbLink",0,c,"BreadcrumbList",0,o,"BreadcrumbPage",0,d,"BreadcrumbSeparator",0,u],3259)},127739,e=>{"use strict";var t=e.i(221628),s=e.i(766181),a=e.i(416340),r=e.i(843778);let n=(0,s.cva)(["mx-auto w-full @container px-6 xl:px-10"],{variants:{size:{small:"max-w-[768px]",default:"max-w-[1200px]",large:"max-w-[1600px]",full:"max-w-none"}},defaultVariants:{size:"default"}}),i=(0,a.forwardRef)(({className:e,size:s,...a},i)=>(0,t.jsx)("div",{ref:i,...a,className:(0,r.cn)(n({size:s}),e)}));i.displayName="PageContainer",e.s(["PageContainer",0,i])},456050,e=>{"use strict";var t=e.i(221628),s=e.i(766181),a=e.i(416340),r=e.i(843778),n=e.i(3259),i=e.i(127739);let o=(0,s.cva)(["flex flex-col gap-4 w-full"],{variants:{size:{default:"pt-12",small:"pt-12",large:"pt-12",full:"pt-6"}},defaultVariants:{size:"default"}}),l=(0,a.createContext)({size:"default"}),c=()=>(0,a.useContext)(l),d=({className:e,children:s,...a})=>{let{size:o}=c();return(0,t.jsx)(i.PageContainer,{size:o,children:(0,t.jsx)(n.Breadcrumb,{"data-slot":"page-header-breadcrumb",className:(0,r.cn)("flex items-center gap-4 [&_li]:text-xs",e),...a,children:s})})};d.displayName="PageHeaderBreadcrumb";let u=({className:e,...s})=>(0,t.jsx)("div",{"data-slot":"page-header-icon",className:(0,r.cn)("text-foreground-light",e),...s});u.displayName="PageHeaderIcon";let m=({className:e,children:s,...a})=>(0,t.jsx)("div",{"data-slot":"page-header-summary",className:(0,r.cn)("flex flex-col gap-1",e),...a,children:s});m.displayName="PageHeaderSummary";let p=({className:e,children:s,...a})=>{let{size:n}=c();return(0,t.jsx)(i.PageContainer,{size:n,children:(0,t.jsx)("div",{"data-slot":"page-header-meta",className:(0,r.cn)("flex flex-col @xl:flex-row @xl:justify-between @xl:items-center gap-4",'*:data-[slot="page-header-icon"]:shrink-0','*:data-[slot="page-header-summary"]:flex-1',e),...a,children:s})})};p.displayName="PageHeaderMeta";let h=({className:e,...s})=>(0,t.jsx)("div",{"data-slot":"page-header-actions",className:(0,r.cn)("flex items-center gap-2 shrink-0",e),...s});h.displayName="PageHeaderAside";let f=({className:e,...s})=>{let{size:a}=c();return(0,t.jsx)(i.PageContainer,{size:a,className:(0,r.cn)("full"===a&&"border-b"),children:(0,t.jsx)("div",{"data-slot":"page-header-footer",className:(0,r.cn)("w-full [&>nav]:border-b-0","full"!==a&&"border-b",e),...s})})};f.displayName="PageHeaderNavigationTabs",e.s(["PageHeader",0,({className:e,size:s,children:a,...n})=>{let i=s??"default";return(0,t.jsx)(l.Provider,{value:{size:i},children:(0,t.jsx)("div",{"data-slot":"page-header","data-size":i,className:(0,r.cn)(o({size:i}),e),...n,children:a})})},"PageHeaderAside",0,h,"PageHeaderBreadcrumb",0,d,"PageHeaderDescription",0,({className:e,children:s,...a})=>(0,t.jsx)("div",{"data-slot":"page-header-description",className:(0,r.cn)("heading-subSection text-foreground-light",e),...a,children:s}),"PageHeaderIcon",0,u,"PageHeaderMeta",0,p,"PageHeaderNavigationTabs",0,f,"PageHeaderSummary",0,m,"PageHeaderTitle",0,({className:e,children:s,...a})=>(0,t.jsx)("h1",{"data-slot":"page-header-title",className:(0,r.cn)("heading-title",e),...a,children:s})])},602146,e=>{"use strict";e.s(["onSearchInputEscape",0,(e,t)=>s=>{"Escape"===s.key&&(s.stopPropagation(),e.length>0?t(""):s.currentTarget.blur())}])},143266,e=>{"use strict";let t=(0,e.i(679709).default)("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);e.s(["Play",0,t],143266)},458570,e=>{"use strict";let t=(0,e.i(679709).default)("ArrowDownWideNarrow",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]]);e.s(["default",0,t])},570958,e=>{"use strict";var t=e.i(10429);e.s(["createNavigationHandler",0,(e,s)=>a=>{if("key"in a){("Enter"===a.key||" "===a.key)&&(a.preventDefault(),a.metaKey||a.ctrlKey?window.open(`${t.BASE_PATH}${e}`,"_blank"):s.push(e));return}if("button"in a&&0===a.button&&(a.metaKey||a.ctrlKey)||"button"in a&&1===a.button){a.preventDefault(),window.open(`${t.BASE_PATH}${e}`,"_blank");return}s.push(e)}])},839941,e=>{"use strict";var t=e.i(221628);e.i(128328);var s=e.i(158639),a=e.i(896779),r=e.i(416340),n=e.i(825713),i=e.i(388147),o=e.i(11872),l=e.i(951138),c=e.i(368136);let d=()=>{let{ref:e="default"}=(0,s.useParams)();return(0,r.useMemo)(()=>[{title:"Manage",items:[{name:"Functions",key:"main",pages:["","[functionSlug]","new"],url:`/project/${e}/functions`,items:[],shortcutId:c.SHORTCUT_IDS.NAV_FUNCTIONS_OVERVIEW},{name:"Secrets",key:"secrets",url:`/project/${e}/functions/secrets`,items:[],shortcutId:c.SHORTCUT_IDS.NAV_FUNCTIONS_SECRETS}]}],[e])},u=()=>{let e=(0,a.useRouter)().pathname.split("/")[4],s=d();return(0,t.jsx)(i.ProductMenu,{page:e,menu:s})},m=(0,l.withAuth)(({children:e,title:s,browserTitle:a})=>{let r=d();return(0,t.jsxs)(n.ProjectLayout,{product:"Edge Functions",browserTitle:{...a,section:s},productMenu:(0,t.jsx)(u,{}),isBlocking:!1,children:[(0,t.jsx)(o.ProductMenuShortcuts,{menu:r}),e]})});e.s(["EdgeFunctionsProductMenu",0,u,"default",0,m])},799910,e=>{"use strict";let t=(0,e.i(679709).default)("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);e.s(["ArrowDownNarrowWide",0,t],799910)},525855,e=>{"use strict";var t=e.i(458570);e.s(["ArrowDownWideNarrow",()=>t.default])},743052,e=>{"use strict";var t=e.i(221628),s=e.i(312062),a=e.i(36709),r=e.i(416340),n=e.i(843778),i=e.i(375761);let o=(0,r.forwardRef)(({commands:e,className:s},a)=>(0,t.jsx)("div",{ref:a,className:(0,n.cn)("space-y-4",s),children:e.map((e,s)=>(0,t.jsx)(l,{item:e},`command-${s}`))}));o.displayName="CommandRender";let l=({item:e})=>{let[n,o]=(0,r.useState)(!1);return(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsx)("span",{className:"font-mono text-sm text-foreground-lighter",children:`> ${e.comment}`}),(0,t.jsx)("div",{className:"flex items-center gap-2",children:(0,t.jsxs)("div",{className:"flex gap-2 font-mono text-sm font-normal text-foreground",children:[(0,t.jsx)("span",{className:"text-foreground-lighter",children:"$"}),(0,t.jsxs)("span",{children:[(0,t.jsxs)("span",{children:[e.jsx?e.jsx():null," "]}),(0,t.jsx)("button",{type:"button",className:"text-foreground-lighter hover:text-foreground",onClick:()=>{var t;t=e.command,o(!0),(0,i.copyToClipboard)(t),setTimeout(()=>o(!1),3e3)},children:n?(0,t.jsx)(s.Check,{size:14,strokeWidth:3,className:"text-brand"}):(0,t.jsx)(a.Copy,{size:14})})]})]})})]})};e.s(["default",0,o])},672296,e=>{"use strict";e.s(["sanitizeArrayOfObjects",0,function(e,t={}){let{maxDepth:s=3,redaction:a="[REDACTED]",truncationNotice:r="[REDACTED: max depth reached]",sensitiveKeys:n=[]}=t,i=new Set(["password","passwd","pwd","pass","secret","token","id_token","access_token","refresh_token","apikey","api_key","api-key","apiKey","key","privatekey","private_key","client_secret","clientSecret","auth","authorization","ssh_key","sshKey","bearer","session","cookie","csrf","xsrf","ip","ip_address","ipAddress","aws_access_key_id","aws_secret_access_key","gcp_service_account_key",...n].map(e=>e.toLowerCase())),o=[{re:/\b(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)\b/g,reason:"ip"},{re:/\b(?:[A-Fa-f0-9]{1,4}:){2,7}[A-Fa-f0-9]{1,4}\b/g,reason:"ip6"},{re:/\b(AKI|ASI)A[0-9A-Z]{16}\b/g,reason:"aws_access_key_id"},{re:/\b[0-9A-Za-z/+]{40}\b/g,reason:"aws_secret_access_key_like"},{re:/\bBearer\s+[A-Za-z0-9\-._~+/]+=*\b/g,reason:"bearer"},{re:/\b[A-Za-z0-9-_]+?\.[A-Za-z0-9-_]+?\.[A-Za-z0-9-_]+?\b/g,reason:"jwt_like"},{re:/\b[A-Za-z0-9_\-]{24,64}\b/g,reason:"long_token"}],l=new WeakMap;function c(e){let t=e;for(let{re:e}of o)t=t.replace(e,a);return t}function d(e){return i.has(String(e).toLowerCase())}return e.map(e=>(function e(t,n){if(null==t||"number"==typeof t||"boolean"==typeof t||"bigint"==typeof t)return t;if("string"==typeof t)return c(t);if("function"==typeof t)return"[Function]";if(t instanceof Date)return t.toISOString();if(t instanceof RegExp)return t.toString();if(ArrayBuffer.isView(t)&&!(t instanceof DataView))return`[TypedArray byteLength=${t.byteLength}]`;if(t instanceof ArrayBuffer)return`[ArrayBuffer byteLength=${t.byteLength}]`;if(n>=s)return r;if("object"==typeof t){if(l.has(t))return"[Circular]";if(Array.isArray(t)){let s=[];l.set(t,s);for(let a=0;a<t.length;a++)s[a]=e(t[a],n+1);return s}if(function(e){if(null===e||"object"!=typeof e)return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||null===t}(t)){let s={};for(let[r,i]of(l.set(t,s),Object.entries(t)))d(r)?s[r]=a:s[r]=e(i,n+1);return s}if(t instanceof Map){let s=[];for(let[r,i]of(l.set(t,s),t.entries())){let t=d(r)?a:e(r,n+1),o=d(r)?a:e(i,n+1);s.push([t,o])}return s}if(t instanceof Set){let s=[];for(let a of(l.set(t,s),t.values()))s.push(e(a,n+1));return s}if(t instanceof URL)return t.toString();if(t instanceof Error){let e={name:t.name,message:c(t.message),stack:r};return l.set(t,e),e}try{return c(String(t))}catch{return c(Object.prototype.toString.call(t))}}return c(String(t))})(e,0))},"sanitizeUrlHashParams",0,function(e){return e.split("#")[0]}])},19688,38423,e=>{"use strict";var t=e.i(125356);let s={list:()=>["access-tokens"],detail:e=>["access-tokens",e]};e.s(["accessTokenKeys",0,s],38423);var a=e.i(234745);async function r(e){let{data:t,error:s}=await (0,a.get)("/platform/profile/access-tokens",{signal:e});return s&&(0,a.handleError)(s),t}e.s(["useAccessTokensQuery",0,({enabled:e=!0,...a}={})=>(0,t.useQuery)({queryKey:s.list(),queryFn:({signal:e})=>r(e),...a})],19688)},998344,996941,835453,628411,425730,e=>{"use strict";let t="u"<typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__;e.s(["DEBUG_BUILD",0,t],998344);var s=e.i(469449);function a(e){let t={};try{e.forEach((e,s)=>{"string"==typeof e&&(t[s]=e)})}catch{}return t}function r(e){let t=Object.create(null);try{Object.entries(e).forEach(([e,s])=>{"string"==typeof s&&(t[e]=s)})}catch{}return t}function n(e){let t=e.headers||{},s=("string"==typeof t["x-forwarded-host"]?t["x-forwarded-host"]:void 0)||("string"==typeof t.host?t.host:void 0),a=("string"==typeof t["x-forwarded-proto"]?t["x-forwarded-proto"]:void 0)||e.protocol||(e.socket?.encrypted?"https":"http"),n=e.url||"",o=function({url:e,protocol:t,host:s}){return e?.startsWith("http")?e:e&&s?`${t}://${s}${e}`:void 0}({url:n,host:s,protocol:a}),l=e.body||void 0,c=e.cookies;return{url:o,method:e.method,query_string:i(n),headers:r(t),cookies:c,data:l}}function i(e){if(e)try{let t=new URL(e,"http://s.io").search.slice(1);return t.length?t:void 0}catch{return}}e.s(["headersToDict",0,r,"httpRequestToRequestData",0,n,"winterCGHeadersToDict",0,a,"winterCGRequestToRequestData",0,function(e){let t=a(e.headers);return{method:e.method,url:e.url,query_string:i(e.url),headers:t}}],996941);var o=e.i(817729),l=e.i(40108);function c(e){let t=l.GLOBAL_OBJ[Symbol.for("@vercel/request-context")],s=t?.get?.();s?.waitUntil&&s.waitUntil(e)}e.s(["vercelWaitUntil",0,c],835453);var d=e.i(521852);async function u(){try{t&&d.debug.log("Flushing events..."),await (0,o.flush)(2e3),t&&d.debug.log("Done flushing events")}catch(e){t&&d.debug.log("Error while flushing events:\n",e)}}async function m(e){let{req:t,res:a,err:r}=e,i=a?.statusCode||e.statusCode;if(i&&i<500||!e.pathname)return Promise.resolve();(0,s.withScope)(e=>{if(t){let s=n(t);e.setSDKProcessingMetadata({normalizedRequest:s})}(0,o.captureException)(r||`_error.js called with falsy error (${r})`,{mechanism:{type:"auto.function.nextjs.underscore_error",handled:!1,data:{function:"_error.getInitialProps"}}})}),c(u())}e.s(["flushSafelyWithTimeout",0,u],628411),e.s(["captureUnderscoreErrorException",0,m],425730)},974200,e=>{"use strict";let t=[{value:"hello-world",name:"Simple Hello World",description:"Basic function that returns a JSON response",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";

interface ReqPayload {
  name: string;
}

console.info("server started");

export default {
  fetch: withSupabase({ auth: ["publishable", "secret"] }, async (req, ctx) => {
    const { name }: ReqPayload = await req.json();

    // Using 'sb_secret_xyz' bypasses RLS — use for privileged operations
    if (ctx.authMode === "secret") {
      return Response.json({
        message: \`Hello \${name} admin!\`,
      });
    }

    return Response.json({
      message: \`Hello \${name}!\`,
    });
  }),
};`},{value:"database-access",name:"Supabase Database Access",description:"Example using Supabase client to query your database",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";

// This endpoint uses 'user' access, credentials is required.
export default {
  fetch: withSupabase({ auth: "user" }, async (_req, { supabase }) => {
    // TODO: Change the table_name to your table
    const { data, error } = await supabase.from("table_name").select("*");

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 500 },
      );
    }

    return Response.json({ data });
  }),
};`},{value:"storage-upload",name:"Supabase Storage Upload",description:"Upload files to Supabase Storage",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";
import { randomUUID } from "node:crypto"

export default {
  fetch: withSupabase({ auth: "publishable" }, async (req, { supabase }) => {
    const formData = await req.formData()
    const file = formData.get('file')

    // TODO: update your-bucket to the bucket you want to write files
    const { data, error } = await supabase
      .storage
      .from('your-bucket')
      .upload(
        \`\${file.name}-\${randomUUID()}\`,
        file,
        { contentType: file.type }
      )

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 500 },
      );
    }

    return Response.json({ data });
  }),
};`},{value:"node-api",name:"Node Built-in API Example",description:"Example using Node.js built-in crypto and http modules",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { randomBytes } from "node:crypto";
import { createServer } from "node:http";
import process from "node:process";

const generateRandomString = (length) => {
  const buffer = randomBytes(length);
  return buffer.toString('hex');
};

const randomString = generateRandomString(10);
console.log(randomString);

const server = createServer((req, res) => {
  const message = \`Hello\`;
  res.end(message);
});

server.listen(9999);`},{value:"express",name:"Express Server",description:"Example using Express.js for routing",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import express from "npm:express@4.18.2";

const app = express();

// TODO: replace slug with Function's slug
// https://supabase.com/docs/guides/functions/routing?queryGroups=framework&framework=expressjs
app.get(/slug/(.*)/, (req, res) => {
  res.send("Welcome to Supabase");
});

app.listen(8000);`},{value:"stream-text-with-ai-sdk",name:"Stream text with AI SDK",description:"Generate and stream text with Vercel AI SDK",content:`/*
 * Setup OPENAI_API_KEY secret to get started.
 * For usage with useChat, point transport.api to this endpoint
 * and include your publishable key as ApiKey: <key> in transport.headers.
 */

import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";
import { createOpenAI } from "npm:@ai-sdk/openai";
import { convertToModelMessages, streamText } from "npm:ai";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, content-type",
  "Access-Control-Max-Age": "3600",
  Vary: "Access-Control-Request-Headers",
};

class ClientError extends Error {}

const openai = createOpenAI({
  apiKey: Deno.env.get("OPENAI_API_KEY"),
});

const SYSTEM_PROMPT = "You are a helpful AI assistant.";

export default {
  fetch: withSupabase({ auth: "publishable", cors }, async (req, _ctx) => {
    try {
      const body = await req.json().catch(() => {
        throw new ClientError("Invalid JSON payload");
      }) as { messages?: unknown; model?: unknown };

      const { messages, model: modelName } = body;

      if (!Array.isArray(messages)) {
        throw new ClientError("Request must include a messages array");
      }

      const normalizedMessages = await convertToModelMessages(messages);

      const model = openai(
        typeof modelName === "string" ? modelName : "gpt-5.1-chat-latest",
      );

      const result = streamText({
        model,
        messages: normalizedMessages,
        system: SYSTEM_PROMPT,
      });

      return result.toUIMessageStreamResponse({
        sendReasoning: true,
        sendSources: true,
      });
    } catch (err) {
      if (err instanceof ClientError) {
        return Response.json({ error: err.message }, { status: 400 });
      }

      console.error("Assistant chat error:", err);
      return Response.json({
        error: "Failed to process chat request",
        details: err instanceof Error ? err.message : String(err),
      }, { status: 500 });
    }
  }),
};`},{value:"generate-recipes-with-ai-sdk",name:"Generate recipes with AI SDK",description:"Generate structured cooking recipes with Vercel AI SDK",content:`/*
 * 1) Setup OPENAI_API_KEY secret to get started.
 * 2) Call this endpoint with { prompt, model? } to generate a recipe object matching the schema below.
 */
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";
import { createOpenAI } from "npm:@ai-sdk/openai";
import { generateText, Output } from "npm:ai";
import { z } from "npm:zod";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, content-type",
  "Access-Control-Max-Age": "3600",
  Vary: "Access-Control-Request-Headers",
};

class ClientError extends Error {}

const openai = createOpenAI({
  apiKey: Deno.env.get("OPENAI_API_KEY"),
});

const RecipeSchema = z.object({
  recipe: z.object({
    name: z.string(),
    ingredients: z.array(z.string()),
    steps: z.array(z.string()),
  }),
});

const SYSTEM_PROMPT =
  "You are a recipe generator. Always return a structured recipe matching the given schema.";

export default {
  fetch: withSupabase({ auth: "publishable", cors }, async (req, _ctx) => {
    try {
      const body = await req.json().catch(() => {
        throw new ClientError("Invalid JSON payload");
      }) as {
        model?: unknown;
        prompt?: unknown;
      };

      const { model: modelName, prompt } = body;

      if (typeof prompt !== "string" || !prompt.trim()) {
        throw new ClientError("Request must include a non-empty prompt string");
      }

      const model = openai(
        typeof modelName === "string" ? modelName : "gpt-5.1-chat-latest",
      );

      const result = await generateText({
        model,
        system: SYSTEM_PROMPT,
        prompt,
        output: Output.object({
          schema: RecipeSchema,
        }),
      });

      return Response.json(result.output, { status: 200 });
    } catch (err) {
      if (err instanceof ClientError) {
        return Response.json({ error: err.message }, { status: 400 });
      }

      console.error("generateText error:", err);
      console.error("Assistant chat error:", err);
      return Response.json({
        error: "Failed to process generateText request",
        details: err instanceof Error ? err.message : String(err),
      }, { status: 500 });
    }
  }),
};`},{value:"stripe-webhook",name:"Stripe Webhook Example",description:"Handle Stripe webhook events securely",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";
import Stripe from "npm:stripe";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!);

export default {
  fetch: withSupabase({ auth: "none" }, async (req, { supabaseAdmin }) => {
    const body = await req.text();
    const sig = req.headers.get("stripe-signature")!;

    let event: Stripe.Event;
    try {
      event = await stripe.webhooks.constructEventAsync(
        body,
        sig,
        Deno.env.get("STRIPE_WEBHOOK_SECRET")!,
      );
    } catch {
      return Response.json({ error: "Invalid signature" }, { status: 401 });
    }

    /*
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        await supabaseAdmin
          .from("orders")
          .update({ status: "paid" })
          .eq("stripe_session_id", session.id);
        break;
      }
    }
    */

    console.log(\`🔔 Event received: \${event.id}\`)
    return Response.json({ received: true });
  }),
};
`},{value:"resend-email",name:"Send Emails",description:"Send emails using the Resend API",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;

export default {
  fetch: withSupabase({ auth: "user" }, async (req, _ctx) => {
    const { to, subject, html } = await req.json();
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: \`Bearer \${RESEND_API_KEY}\`,
      },
      body: JSON.stringify({
        from: "you@example.com",
        to,
        subject,
        html,
      }),
    });
    const data = await res.json();

    return Response.json(data);
  }),
};`},{value:"image-transform",name:"Image Transformation",description:"Transform images using ImageMagick WASM",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";
import {
  ImageMagick,
  initializeImageMagick,
} from "npm:@imagemagick/magick-wasm@0.0.30";

await initializeImageMagick();

export default {
  fetch: withSupabase({ auth: "publishable" }, async (req, _ctx) => {
    const formData = await req.formData();
    const file = formData.get("file");
    const content = await file.arrayBuffer();

    const result = await ImageMagick.read(new Uint8Array(content), (img) => {
      img.resize(500, 300);
      img.blur(60, 5);
      return img.write((data) => data);
    });

    return new Response(
      result,
      { headers: { "Content-Type": "image/png" } },
    );
  }),
};`},{value:"websocket-server",name:"WebSocket Server Example",description:"Create a real-time WebSocket server",content:`// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";

export default {
  fetch: withSupabase({ auth: "publishable" }, async (req, _ctx) => {
    const upgrade = req.headers.get("upgrade") || "";
    if (upgrade.toLowerCase() != "websocket") {
      return new Response("request isn't trying to upgrade to websocket.");
    }

    const { socket, response } = Deno.upgradeWebSocket(req);

    socket.onopen = () => {
      console.log("client connected!");
      socket.send("Welcome to Supabase Edge Functions!");
    };

    socket.onmessage = (e) => {
      console.log("client sent message:", e.data);
      socket.send(new Date().toString());
    };

    return response;
  }),
};`}];e.s(["EDGE_FUNCTION_TEMPLATES",0,t])},841079,e=>{"use strict";var t=e.i(221628);e.i(128328);var s=e.i(158639),a=e.i(841104),r=e.i(143266),n=e.i(508158),i=e.i(561978),o=e.i(896779),l=e.i(197451),c=e.i(416340),d=e.i(602089),u=e.i(837710),m=e.i(627069),p=e.i(843778),h=e.i(253214),f=e.i(479095),x=e.i(331162),g=e.i(974200),j=e.i(215618),b=e.i(167892),v=e.i(513826),y=e.i(856613),w=e.i(548760),k=e.i(912793),S=e.i(10429),_=e.i(967052),N=e.i(317040),C=e.i(441081);e.s(["FunctionsEmptyState",0,()=>{let{ref:e}=(0,s.useParams)(),r=(0,o.useRouter)(),p=(0,N.useAiAssistantStateSnapshot)(),{openSidebar:h}=(0,C.useSidebarManagerSnapshot)(),f=(0,_.useTrack)(),[,x]=(0,l.useQueryState)("create",l.parseAsString),v=(0,k.useIsFeatureEnabled)("edge_functions:show_stripe_example"),S=(0,c.useMemo)(()=>v?g.EDGE_FUNCTION_TEMPLATES:g.EDGE_FUNCTION_TEMPLATES.filter(e=>"stripe-webhook"!==e.value),[v]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(m.Card,{children:[(0,t.jsx)(m.CardHeader,{children:(0,t.jsx)(m.CardTitle,{children:"Deploy your first edge function"})}),(0,t.jsxs)(m.CardContent,{className:"p-0 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] divide-y md:divide-y-0 md:divide-x divide-default items-stretch",children:[(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(a.Code,{strokeWidth:1.5,size:20}),(0,t.jsx)("h4",{className:"text-base text-foreground",children:"Via Editor"})]}),(0,t.jsx)("p",{className:"text-sm text-foreground-light mb-4 mt-1",children:"Create and edit functions directly in the browser. Download to local at any time."}),(0,t.jsx)(u.Button,{type:"default",onClick:()=>{r.push(`/project/${e}/functions/new`),f("edge_function_via_editor_button_clicked",{origin:"no_functions_block"})},children:"Open Editor"})]}),(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(d.AiIconAnimation,{size:20}),(0,t.jsx)("h4",{className:"text-base text-foreground",children:"AI Assistant"})]}),(0,t.jsx)("p",{className:"text-sm text-foreground-light mb-4 mt-1",children:"Let our AI assistant help you create functions. Perfect for kickstarting a function."}),(0,t.jsx)(u.Button,{type:"default",onClick:()=>{h(j.SIDEBAR_KEYS.AI_ASSISTANT),p.newChat({name:"Create new edge function",initialInput:"Create a new edge function that ...",suggestions:{title:"I can help you create a new edge function. Here are a few example prompts to get you started:",prompts:[{label:"Stripe Payments",description:"Create a new edge function that processes payments with Stripe"},{label:"Email with Resend",description:"Create a new edge function that sends emails with Resend"},{label:"PDF Generator",description:"Create a new edge function that generates PDFs from HTML templates"}]}}),f("edge_function_ai_assistant_button_clicked",{origin:"no_functions_block"})},children:"Open Assistant"})]}),(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(n.Terminal,{strokeWidth:1.5,size:20}),(0,t.jsx)("h4",{className:"text-base text-foreground",children:"Via CLI"})]}),(0,t.jsx)("p",{className:"text-sm text-foreground-light mb-4 mt-1",children:"Create and deploy functions using the Supabase CLI. Ideal for local development and version control."}),(0,t.jsx)(u.Button,{type:"default",onClick:()=>{x("cli"),f("edge_function_via_cli_button_clicked",{origin:"no_functions_block"})},children:"View CLI Instructions"})]})]})]}),(0,t.jsx)(b.ScaffoldSectionTitle,{className:"text-xl mb-4 mt-12",children:"Start with a template"}),(0,t.jsx)(w.ResourceList,{children:S.map(s=>(0,t.jsx)(y.ResourceItem,{media:(0,t.jsx)(a.Code,{strokeWidth:1.5,size:16,className:"translate-y-[-9px]"}),onClick:()=>{f("edge_function_template_clicked",{templateName:s.name,origin:"functions_page"})},children:(0,t.jsxs)(i.default,{href:`/project/${e}/functions/new?template=${s.value}`,children:[(0,t.jsx)("p",{children:s.name}),(0,t.jsx)("p",{className:"text-sm text-foreground-lighter",children:s.description})]})},s.name))})]})},"FunctionsInstructionsLocal",0,()=>{let e=(0,k.useIsFeatureEnabled)("edge_functions:show_stripe_example"),s=(0,c.useMemo)(()=>e?g.EDGE_FUNCTION_TEMPLATES:g.EDGE_FUNCTION_TEMPLATES.filter(e=>"stripe-webhook"!==e.value),[e]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"flex flex-col gap-y-4",children:[(0,t.jsxs)(m.Card,{children:[(0,t.jsx)(m.CardHeader,{children:(0,t.jsx)(m.CardTitle,{children:"Developing Edge Functions with the CLI"})}),(0,t.jsxs)(m.CardContent,{className:(0,p.cn)("p-0 flex flex-col","2xl:grid 2xl:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] 2xl:divide-y-0 2xl:divide-x","divide-y divide-default items-stretch"),children:[(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(a.Code,{size:20}),(0,t.jsx)("h4",{className:"text-base text-foreground",children:"Create an Edge Function"})]}),(0,t.jsxs)("p",{className:"text-sm text-foreground-light mt-1 mb-4 prose [&>code]:text-xs text-sm max-w-full",children:["Create a new edge function called ",(0,t.jsx)("code",{children:"hello-world"})," in your project via the Supabase CLI."]}),(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)(x.CodeBlock,{language:"bash",hideLineNumbers:!0,className:(0,p.cn)("px-3.5 max-w-full prose dark:prose-dark [&>code]:m-0 2xl:min-h-28"),value:"supabase functions new hello-world"})}),(0,t.jsx)(v.DocsButton,{href:`${S.DOCS_URL}/guides/functions/local-quickstart#create-an-edge-function`})]}),(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(r.Play,{size:20}),(0,t.jsx)("h4",{className:"text-base text-foreground",children:"Run Edge Functions"})]}),(0,t.jsxs)("p",{className:"text-sm text-foreground-light mt-1 mb-4 prose [&>code]:text-xs text-sm max-w-full",children:["You can run your Edge Function locally using ",(0,t.jsx)("code",{children:"supabase functions serve"}),"."]}),(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)(x.CodeBlock,{language:"bash",hideLineNumbers:!0,className:(0,p.cn)("px-3.5 max-w-full prose dark:prose-dark [&>code]:m-0 2xl:min-h-28"),value:`
supabase start # start the supabase stack
supabase functions serve # start the Functions watcher`.trim()})}),(0,t.jsx)(v.DocsButton,{href:`${S.DOCS_URL}/guides/functions/local-quickstart#running-edge-functions-locally`})]}),(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(n.Terminal,{strokeWidth:1.5,size:20}),(0,t.jsx)("h4",{className:"text-base text-foreground",children:"Invoke Edge Functions"})]}),(0,t.jsx)("p",{className:"text-sm text-foreground-light mt-1 mb-4",children:"While serving your local Edge Functions, you can invoke it using cURL or one of the client libraries."}),(0,t.jsx)("div",{className:"mb-4",children:(0,t.jsx)(x.CodeBlock,{language:"bash",hideLineNumbers:!0,className:(0,p.cn)("px-3.5 max-w-full prose dark:prose-dark [&>code]:m-0 2xl:min-h-28"),value:`
curl --request POST 'http://localhost:54321/functions/v1/hello-world' \\
  --header 'Authorization: Bearer SUPABASE_ANON_KEY' \\
  --header 'Content-Type: application/json' \\
  --data '{ "name":"Functions" }'`.trim()})}),(0,t.jsx)(v.DocsButton,{href:`${S.DOCS_URL}/guides/functions/local-quickstart#invoking-edge-functions-locally`})]})]})]}),(0,t.jsxs)(m.Card,{children:[(0,t.jsx)(m.CardHeader,{children:(0,t.jsx)(m.CardTitle,{children:"Self-hosted Supabase"})}),(0,t.jsx)(m.CardContent,{className:"p-0 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] divide-y md:divide-y-0 md:divide-x divide-default items-stretch",children:(0,t.jsxs)("div",{className:"p-8",children:[(0,t.jsxs)("p",{className:"text-sm text-foreground-light mt-1 mb-4",children:["Edge Functions are available in self-hosted Supabase via Supabase Edge Runtime. Unlike the platform, functions must be added manually — place each function at"," ",(0,t.jsx)("code",{className:"text-code-inline",children:"volumes/functions/<function-name>/index.ts"})," ","and restart the ",(0,t.jsx)("code",{className:"text-code-inline",children:"functions"})," service to pick up changes. See the guide to learn more about configuration, secrets, and routing."]}),(0,t.jsx)(v.DocsButton,{href:`${S.DOCS_URL}/guides/self-hosting/self-hosted-functions`})]})})]}),(0,t.jsx)(b.ScaffoldSectionTitle,{className:"text-xl mt-12",children:"Explore our templates"}),(0,t.jsx)(w.ResourceList,{children:s.map(e=>(0,t.jsxs)(h.Dialog,{children:[(0,t.jsx)(h.DialogTrigger,{asChild:!0,children:(0,t.jsx)(y.ResourceItem,{media:(0,t.jsx)(a.Code,{strokeWidth:1.5,size:16,className:"translate-y-[-9px]"}),children:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:e.name}),(0,t.jsx)("p",{className:"text-sm text-foreground-lighter",children:e.description})]})},e.name)}),(0,t.jsxs)(h.DialogContent,{size:"large",children:[(0,t.jsxs)(h.DialogHeader,{children:[(0,t.jsx)(h.DialogTitle,{children:e.name}),(0,t.jsx)(h.DialogDescription,{children:e.description})]}),(0,t.jsx)(f.Separator,{}),(0,t.jsx)(h.DialogSection,{className:"p-0!",children:(0,t.jsx)(x.CodeBlock,{language:"ts",hideLineNumbers:!0,className:(0,p.cn)("border-0 rounded-none px-3.5 max-w-full prose dark:prose-dark [&>code]:m-0 max-h-[420px]"),value:e.content})})]})]},e.name))})]})})},"FunctionsSecretsEmptyStateLocal",0,()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(m.Card,{children:[(0,t.jsx)(m.CardHeader,{children:(0,t.jsx)(m.CardTitle,{children:"Local development & CLI"})}),(0,t.jsxs)(m.CardContent,{children:[(0,t.jsxs)("div",{className:"text-sm text-foreground-light mb-4",children:[(0,t.jsx)("p",{className:"mb-2",children:"Secrets can be loaded in two ways:"}),(0,t.jsxs)("ul",{className:"list-disc pl-6 space-y-1",children:[(0,t.jsxs)("li",{children:["Place a ",(0,t.jsx)("code",{className:"text-code-inline",children:".env"})," file at"," ",(0,t.jsx)("code",{className:"text-code-inline",children:"supabase/functions/.env"})," — picked up automatically on ",(0,t.jsx)("code",{className:"text-code-inline",children:"supabase start"}),"."]}),(0,t.jsxs)("li",{children:["Pass ",(0,t.jsx)("code",{className:"text-code-inline",children:"--env-file"})," to"," ",(0,t.jsx)("code",{className:"text-code-inline",children:"supabase functions serve"}),", e.g."," ",(0,t.jsx)("code",{className:"text-code-inline",children:"supabase functions serve --env-file ./path/to/.env-file"})]})]})]}),(0,t.jsx)(v.DocsButton,{href:`${S.DOCS_URL}/guides/functions/secrets#using-the-cli`})]})]}),(0,t.jsxs)(m.Card,{children:[(0,t.jsx)(m.CardHeader,{children:(0,t.jsx)(m.CardTitle,{children:"Self-Hosted Supabase"})}),(0,t.jsxs)(m.CardContent,{children:[(0,t.jsxs)("p",{className:"text-sm text-foreground-light mb-4",children:["Configure secrets in your ",(0,t.jsx)("code",{className:"text-code-inline",children:".env"})," file and"," ",(0,t.jsx)("code",{className:"text-code-inline",children:"docker-compose.yml"})," under the"," ",(0,t.jsx)("code",{className:"text-code-inline",children:"functions"})," service."]}),(0,t.jsx)(v.DocsButton,{href:`${S.DOCS_URL}/guides/self-hosting/self-hosted-functions#custom-environment-variables`})]})]})]})])},551734,e=>{"use strict";var t=e.i(221628);e.i(128328);var s=e.i(657588),a=e.i(158639),r=e.i(758825),n=e.i(573569),i=e.i(949648),o=e.i(478372),l=e.i(896779),c=e.i(197451),d=e.i(416340),u=e.i(837710),m=e.i(627069),p=e.i(492418),h=e.i(710483),f=e.i(746301),x=e.i(127739),g=e.i(456050),j=e.i(228027),b=e.i(108151),v=e.i(169967),y=e.i(841104),w=e.i(508158),k=e.i(602089),S=e.i(874311),_=e.i(215618),N=e.i(215312),C=e.i(635494),P=e.i(967052),T=e.i(317040),E=e.i(441081);let A=()=>{let e=(0,l.useRouter)(),{ref:s}=(0,a.useParams)(),r=(0,T.useAiAssistantStateSnapshot)(),{openSidebar:n}=(0,E.useSidebarManagerSnapshot)(),i=(0,P.useTrack)(),[,o]=(0,c.useQueryState)("create",c.parseAsString),d=(0,C.useIsProjectActive)();return(0,t.jsxs)(S.DropdownMenu,{children:[(0,t.jsx)(S.DropdownMenuTrigger,{asChild:!0,disabled:!d,children:(0,t.jsx)(N.ButtonTooltip,{type:"primary",disabled:!d,iconRight:(0,t.jsx)(v.ChevronDown,{className:"w-4 h-4",strokeWidth:1.5}),tooltip:{content:{side:"bottom",text:d?void 0:"Unable to deploy function as project is inactive"}},children:"Deploy a new function"})}),(0,t.jsxs)(S.DropdownMenuContent,{align:"end",className:"w-80",children:[(0,t.jsxs)(S.DropdownMenuItem,{onSelect:()=>{e.push(`/project/${s}/functions/new`),i("edge_function_via_editor_button_clicked",{origin:"secondary_action"})},className:"gap-4",children:[(0,t.jsx)(y.Code,{className:"shrink-0",size:16,strokeWidth:1.5}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-foreground",children:"Via Editor"}),(0,t.jsx)("p",{children:"Write and deploy in the browser"})]})]}),(0,t.jsxs)(S.DropdownMenuItem,{className:"gap-4",onSelect:()=>{o("cli"),i("edge_function_via_cli_button_clicked",{origin:"secondary_action"})},children:[(0,t.jsx)(w.Terminal,{className:"shrink-0",size:16,strokeWidth:1.5}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-foreground",children:"Via CLI"}),(0,t.jsx)("p",{children:"Write locally, deploy with the CLI"})]})]}),(0,t.jsxs)(S.DropdownMenuItem,{className:"gap-4",onSelect:()=>{n(_.SIDEBAR_KEYS.AI_ASSISTANT),r.newChat({name:"Create new edge function",initialInput:"Create a new edge function that ...",suggestions:{title:"I can help you create a new edge function. Here are a few example prompts to get you started:",prompts:[{label:"Stripe Payments",description:"Create a new edge function that processes payments with Stripe"},{label:"Email with Resend",description:"Create a new edge function that sends emails with Resend"},{label:"PDF Generator",description:"Create a new edge function that generates PDFs from HTML templates"}]}}),i("edge_function_ai_assistant_button_clicked",{origin:"secondary_action"})},children:[(0,t.jsx)(k.AiIconAnimation,{className:"shrink-0",size:16}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-foreground",children:"Via AI Assistant"}),(0,t.jsx)("p",{children:"Let the Assistant write and deploy for you"})]})]})]})]})};var R=e.i(799910),I=e.i(525855);let z=["name:asc","name:desc","created_at:asc","created_at:desc","updated_at:asc","updated_at:desc"],D=({value:e,onChange:s})=>(0,t.jsxs)(S.DropdownMenu,{children:[(0,t.jsx)(S.DropdownMenuTrigger,{asChild:!0,children:(0,t.jsxs)(u.Button,{type:"default",icon:e.includes("desc")?(0,t.jsx)(I.ArrowDownWideNarrow,{size:14}):(0,t.jsx)(R.ArrowDownNarrowWide,{size:14}),children:["Sorted by ",function(e){let[t]=e.split(":");return t.replace("_"," ")}(e)]})}),(0,t.jsx)(S.DropdownMenuContent,{align:"start",className:"w-48",children:(0,t.jsxs)(S.DropdownMenuRadioGroup,{value:e,onValueChange:e=>s(e),children:[(0,t.jsxs)(S.DropdownMenuSub,{children:[(0,t.jsx)(S.DropdownMenuSubTrigger,{children:"Sort by name"}),(0,t.jsxs)(S.DropdownMenuSubContent,{children:[(0,t.jsx)(S.DropdownMenuRadioItem,{value:"name:asc",children:"Ascending"}),(0,t.jsx)(S.DropdownMenuRadioItem,{value:"name:desc",children:"Descending"})]})]}),(0,t.jsxs)(S.DropdownMenuSub,{children:[(0,t.jsx)(S.DropdownMenuSubTrigger,{children:"Sort by created at"}),(0,t.jsxs)(S.DropdownMenuSubContent,{children:[(0,t.jsx)(S.DropdownMenuRadioItem,{value:"created_at:asc",children:"Ascending"}),(0,t.jsx)(S.DropdownMenuRadioItem,{value:"created_at:desc",children:"Descending"})]})]}),(0,t.jsxs)(S.DropdownMenuSub,{children:[(0,t.jsx)(S.DropdownMenuSubTrigger,{children:"Sort by updated at"}),(0,t.jsxs)(S.DropdownMenuSubContent,{children:[(0,t.jsx)(S.DropdownMenuRadioItem,{value:"updated_at:asc",children:"Ascending"}),(0,t.jsx)(S.DropdownMenuRadioItem,{value:"updated_at:desc",children:"Descending"})]})]})]})})]});var M=e.i(86086);e.i(69870);var O=e.i(55956),L=e.i(312062),F=e.i(36709),q=e.i(843778),B=e.i(375761),H=e.i(694833),$=e.i(480683),U=e.i(125356),V=e.i(68205),W=e.i(234745),K=e.i(762854);async function G({projectRef:e,functionIds:t=[]},s){let a;if(!e)throw Error("projectRef is required");if(0===t.length)return{};let r=(0,O.default)().toISOString(),n=(0,O.default)().subtract(1,"hour").toISOString(),{data:i,error:o}=await (0,W.post)("/platform/projects/{ref}/analytics/endpoints/logs.all",{params:{path:{ref:e},query:{key:"last-hour-stats"}},body:{sql:(a=t.length>0?`  and function_id in (${t.map(function e(t){let s=null,a=null;if(null==t)return"NULL";if(!1===t)return"'f'";if(!0===t)return"'t'";if(t instanceof Date)return"'"+t.toISOString().replace("T"," ").replace("Z","+00")+"'";if(t instanceof K.Buffer)return"E'\\\\x"+t.toString("hex")+"'";else if(!0===Array.isArray(t)){let s=[];for(let a=0;a<t.length;a++)!0===Array.isArray(t[a])?s.push(function(e,t,s){let a="";a+=e?" (":"(";for(var r=0;r<t.length;r++)a+=(0===r?"":", ")+s(t[r]);return a+")"}(0!==a,t[a],e)):s.push(e(t[a]));return s.toString()}else t===Object(t)?(a="jsonb",s=JSON.stringify(t)):s=t.toString().slice(0);let r=!1,n="'";for(let e=0;e<s.length;e++){let t=s[e];"'"===t?n+=t+t:"\\"===t?(n+=t+t,r=!0):n+=t}return n+="'",!0===r&&(n="E"+n),a&&(n+="::"+a),n}).join(", ")})
`:"",`
-- edge-functions-last-hour-stats
select
  function_id,
  count(distinct id) as requests_count,
  count(distinct case when response.status_code >= 500 then id end) as server_err_count
from
  function_edge_logs
  cross join unnest(metadata) as m
  cross join unnest(m.response) as response
where
  function_id is not null
${a}group by
  function_id
`),iso_timestamp_start:n,iso_timestamp_end:r},signal:s});return(o||i?.error)&&(0,W.handleError)(o??i?.error),(i?.result??[]).reduce((e,t)=>{let s=e=>{let t=Number(e??0);return Number.isFinite(t)?t:0},a=s(t.requests_count),r=s(t.server_err_count);return e[t.function_id]={functionId:t.function_id,requestsCount:a,serverErrorCount:r,errorRate:a>0?r/a*100:0},e},{})}var Y=e.i(240788),Z=e.i(570958);let Q=({function:e})=>{let r=(0,l.useRouter)(),{ref:n}=(0,a.useParams)(),[i,o]=(0,d.useState)(!1),c=(0,s.useFlag)("edgeFunctionsRequestMetrics"),{data:u}=(0,$.useProjectApiUrl)({projectRef:n}),m=`${u}/functions/v1/${e.slug}`,h=(0,Z.createNavigationHandler)(`/project/${n}/functions/${e.slug}${M.IS_PLATFORM?"":"/details"}`,r),{data:f}=(0,Y.useEdgeFunctionsQuery)({projectRef:n}),{data:x,isPending:g,isError:j}=(({projectRef:e,functionIds:t=[]},{enabled:s=!0,...a}={})=>(0,U.useQuery)({queryKey:V.edgeFunctionsKeys.lastHourStats(e,t),queryFn:({signal:s})=>G({projectRef:e,functionIds:t},s),enabled:s&&void 0!==e&&t.length>0,staleTime:6e4,retry:!1,...a}))({projectRef:n,functionIds:(0,d.useMemo)(()=>c&&f?(0,V.normalizeFunctionIds)(f.map(e=>e.id)):[],[f,c])},{enabled:c}),v=x?.[e.id];return(0,t.jsxs)(p.TableRow,{onClick:h,onAuxClick:h,onKeyDown:h,tabIndex:0,className:"cursor-pointer inset-focus",children:[(0,t.jsx)(p.TableCell,{children:(0,t.jsx)("p",{className:"text-sm text-foreground whitespace-nowrap py-2",children:e.name})}),(0,t.jsx)(p.TableCell,{children:(0,t.jsxs)("div",{className:"text-xs text-foreground-light flex gap-2 items-center truncate",children:[(0,t.jsx)("p",{title:m,className:"font-mono truncate hidden md:inline max-w-120",children:m}),(0,t.jsx)("button",{type:"button",className:"text-foreground-lighter hover:text-foreground transition",onClick:e=>{e.stopPropagation(),o(!0),(0,B.copyToClipboard)(m),setTimeout(()=>o(!1),3e3)},children:i?(0,t.jsx)("div",{className:"text-brand",children:(0,t.jsx)(L.Check,{size:14,strokeWidth:3})}):(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)("div",{className:"block",children:(0,t.jsx)(F.Copy,{size:14,strokeWidth:1.5})})})})]})}),(0,t.jsx)(p.TableCell,{className:"hidden 2xl:table-cell whitespace-nowrap",children:e.created_at?(0,t.jsx)(H.TimestampInfo,{className:"text-sm text-foreground-light whitespace-nowrap",utcTimestamp:e.created_at,label:(0,O.default)(e.created_at).fromNow()}):(0,t.jsx)("span",{className:"text-sm text-foreground-light",children:"–"})}),(0,t.jsx)(p.TableCell,{className:"lg:table-cell",children:e.updated_at?(0,t.jsx)(H.TimestampInfo,{className:"text-sm text-foreground-light whitespace-nowrap",utcTimestamp:e.updated_at,label:(0,O.default)(e.updated_at).fromNow()}):(0,t.jsx)("span",{className:"text-sm text-foreground-light",children:"–"})}),c&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.TableCell,{className:"lg:table-cell whitespace-nowrap",children:g?(0,t.jsx)(b.ShimmeringLoader,{className:"w-12"}):j?(0,t.jsx)("p",{className:"text-foreground-lighter",title:"Failed to load stats",children:"-"}):(0,t.jsx)("p",{className:"text-foreground-light",children:void 0!==v?v.requestsCount.toLocaleString():"-"})}),(0,t.jsx)(p.TableCell,{className:"lg:table-cell whitespace-nowrap",children:g?(0,t.jsx)(b.ShimmeringLoader,{className:"w-12"}):j?(0,t.jsx)("p",{className:"text-foreground-lighter",title:"Failed to load stats",children:"-"}):void 0!==v?(0,t.jsx)("span",{className:(0,q.cn)("text-sm",v.errorRate>=1?"text-destructive":v.errorRate>.1?"text-warning":"text-foreground-light"),children:function(e){if(0===e)return"0%";if(e>=100)return"100%";if(e<.1)return"<0.1%";let t=Math.min(Number(e.toFixed(1)),100);return t>=100?"100%":`${t.toFixed(1)}%`}(v.errorRate)}):(0,t.jsx)("p",{className:"text-foreground-lighter",children:"-"})})]}),(0,t.jsxs)(p.TableCell,{className:"hidden 2xl:table-cell",children:[(0,t.jsx)("p",{className:"text-foreground-light",children:e.version}),(0,t.jsx)("button",{tabIndex:-1,className:"sr-only",children:"Go to function details"})]})]},e.id)};var J=e.i(841079),X=e.i(253214),ee=e.i(26898),et=e.i(690885),es=e.i(833063),ea=e.i(348534),er=e.i(743052),en=e.i(513826),ei=e.i(19688),eo=e.i(108892),el=e.i(2579),ec=e.i(10429);let ed=(0,d.forwardRef)(({closable:e=!1,removeBorder:s=!1,...n},i)=>{let o=(0,l.useRouter)(),{ref:c}=(0,a.useParams)(),[m,p]=(0,d.useState)(!e),{data:h}=(0,ei.useAccessTokensQuery)(),{can:f}=(0,el.useAsyncCheckPermissions)(ee.PermissionAction.SECRETS_READ,"*"),{data:x}=(0,eo.useAPIKeysQuery)({projectRef:c},{enabled:f}),{data:g}=(0,$.useProjectApiUrl)({projectRef:c}),j=`${g}/functions/v1`,{anonKey:b,publishableKey:v}=(0,eo.getKeys)(x),y=v?.api_key??b?.api_key??"[YOUR ANON KEY]",k=`https://${g}`,S=g?new URL(k).hostname.split(".").pop():"co",_=[{command:"supabase functions new hello-world",description:" creates a function stub at ./functions/hello-world/index.ts",jsx:()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"text-brand-600",children:"supabase"})," functions new hello-world"]}),comment:"Create a function"},{command:`supabase functions deploy hello-world --project-ref ${c}`,description:"Deploys function at ./functions/hello-world/index.ts",jsx:()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"text-brand-600",children:"supabase"})," functions deploy hello-world --project-ref ",c]}),comment:"Deploy your function"},{command:`curl -L -X POST 'https://${c}.supabase.${S}/functions/v1/hello-world' -H 'Authorization: Bearer ${y}'${b?.type==="publishable"?` -H 'apikey: ${y}'`:""} --data '{"name":"Functions"}'`,description:"Invokes the hello-world function",jsx:()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"text-brand-600",children:"curl"})," -L -X POST '",j,"/hello-world' -H 'Authorization: Bearer [YOUR ANON KEY]'",b?.type==="publishable"?" -H 'apikey: [YOUR ANON KEY]' ":"",'--data \'{"name":"Functions"}\'']}),comment:"Invoke your function"}];return(0,t.jsxs)(ea.Collapsible,{ref:i,open:m,className:"w-full",onOpenChange:()=>p(!m),...n,children:[(0,t.jsxs)(ea.CollapsibleTrigger,{className:"flex w-full justify-between",disabled:!e,children:[(0,t.jsxs)("div",{className:"flex items-center gap-x-3",children:[(0,t.jsx)("div",{className:"flex items-center justify-center w-8 h-8 p-2 border rounded-sm bg-alternative",children:(0,t.jsx)(w.Terminal,{strokeWidth:2})}),(0,t.jsx)("h4",{children:"Create your first Edge Function via the CLI"})]}),e&&(0,t.jsx)("div",{className:"cursor-pointer",onClick:()=>p(!m),children:m?(0,t.jsx)(es.Minimize2,{size:16,strokeWidth:1.5}):(0,t.jsx)(et.Maximize2,{size:16,strokeWidth:1.5})})]}),(0,t.jsxs)(ea.CollapsibleContent,{className:"w-full transition-all data-closed:animate-collapsible-up data-open:animate-collapsible-down",children:[(0,t.jsx)(er.default,{commands:_,className:"my-4"}),h&&0===h.length?(0,t.jsxs)("div",{className:"py-4 space-y-3 border-t",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-foreground",children:"You may need to create an access token"}),(0,t.jsx)("p",{className:"text-sm text-foreground-light",children:"You can create a secure access token in your account section"})]}),(0,t.jsx)(u.Button,{type:"default",onClick:()=>o.push("/account/tokens"),children:"Access tokens"})]}):(0,t.jsxs)("div",{className:"py-4 space-y-3 border-t",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-base text-foreground",children:"Need help?"}),(0,t.jsx)("p",{className:"text-sm text-foreground-light",children:"Read the documentation, or browse some sample code."})]}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(en.DocsButton,{href:`${ec.DOCS_URL}/guides/functions`}),(0,t.jsx)(u.Button,{asChild:!0,type:"default",icon:(0,t.jsx)(r.ExternalLink,{}),children:(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions",children:"Examples"})})]})]})]})]})});ed.displayName="TerminalInstructions";let eu=()=>{let[e,s]=(0,c.useQueryState)("create",c.parseAsString);return(0,t.jsx)(X.Dialog,{open:"cli"===e,onOpenChange:e=>!e&&void s(null),children:(0,t.jsxs)(X.DialogContent,{size:"large",children:[(0,t.jsx)(X.DialogTitle,{className:"sr-only",children:"Create your first Edge Function via the CLI"}),(0,t.jsx)(X.DialogSection,{padding:"small",children:(0,t.jsx)(ed,{closable:!1})})]})})};var em=e.i(368136),ep=e.i(194125);let eh="name:asc";var ef=e.i(448710),ex=e.i(839941),eg=e.i(567558),ej=e.i(654894),eb=e.i(602146);let ev=()=>{let e=(0,l.useRouter)(),{ref:r}=(0,a.useParams)(),g=(0,s.useFlag)("edgeFunctionsRequestMetrics"),v=(0,C.useIsProjectActive)(),y=(0,d.useRef)(null),[w,k]=(0,c.useQueryState)("search",c.parseAsString.withDefault("")),[S,_]=(0,c.useQueryState)("sort",(0,c.parseAsStringLiteral)(z).withDefault("name:asc")),{data:N,error:P,isPending:T,isError:E,isSuccess:A,isFetching:R,refetch:I}=(0,Y.useEdgeFunctionsQuery)({projectRef:r});!function({searchInputRef:e,setSearch:t,sort:s,setSort:a,canCreateNew:r,onCreateNew:n,onRefresh:i}){(0,ep.useShortcut)(em.SHORTCUT_IDS.LIST_PAGE_FOCUS_SEARCH,()=>{e.current?.focus(),e.current?.select()},{label:"Search functions"}),(0,ep.useShortcut)(em.SHORTCUT_IDS.LIST_PAGE_NEW_ITEM,n,{enabled:r,label:"Deploy a new function"}),(0,ep.useShortcut)(em.SHORTCUT_IDS.LIST_PAGE_RESET_FILTERS,()=>{t("")}),(0,ep.useShortcut)(em.SHORTCUT_IDS.FUNCTIONS_LIST_REFRESH,i),(0,ep.useShortcut)(em.SHORTCUT_IDS.FUNCTIONS_LIST_CLEAR_SORT,()=>a(eh),{enabled:s!==eh})}({searchInputRef:y,setSearch:k,sort:S,setSort:_,canCreateNew:v,onCreateNew:()=>e.push(`/project/${r}/functions/new`),onRefresh:()=>{I()}});let M=(0,d.useMemo)(()=>{let e=(N??[]).filter(e=>e.name.toLowerCase().includes(w.toLowerCase())),[t,s]=S.split(":"),a="asc"===s?1:-1;return e.sort((e,s)=>"name"===t?e.name.localeCompare(s.name)*a:"created_at"===t?(e.created_at-s.created_at)*a:"updated_at"===t?(e.updated_at-s.updated_at)*a:0)},[N,w,S]),O=(N??[]).length>0;return(0,t.jsx)(x.PageContainer,{size:"large",children:(0,t.jsx)(j.PageSection,{children:(0,t.jsx)(j.PageSectionContent,{children:(0,t.jsxs)("div",{className:"flex flex-col gap-6",children:[T&&(0,t.jsx)(b.GenericSkeletonLoader,{}),E&&(ec.IS_PLATFORM?(0,t.jsx)(eg.default,{error:P,subject:"Failed to retrieve edge functions"}):(0,t.jsx)(h.Admonition,{type:"warning",title:"Failed to retrieve edge functions",children:(0,t.jsxs)("p",{className:"prose [&>code]:text-xs text-sm",children:["Local functions can be found at ",(0,t.jsx)("code",{children:"supabase/functions"})," folder."]})})),A&&(0,t.jsx)(t.Fragment,{children:O?(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("div",{className:"flex items-center gap-2",children:(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)(ej.ShortcutTooltip,{shortcutId:em.SHORTCUT_IDS.LIST_PAGE_FOCUS_SEARCH,label:"Search functions",side:"bottom",children:(0,t.jsx)(f.Input,{ref:y,placeholder:"Search function names",icon:(0,t.jsx)(i.Search,{}),size:"tiny",className:"w-32 md:w-64",value:w,onChange:e=>k(e.target.value),onKeyDown:(0,eb.onSearchInputEscape)(w,k),actions:[w&&(0,t.jsx)(u.Button,{size:"tiny",type:"text",icon:(0,t.jsx)(o.X,{}),onClick:()=>k(""),className:"p-0 h-5 w-5"},"clear")]})})})}),(0,t.jsx)("div",{className:"flex items-center gap-2",children:(0,t.jsx)(D,{value:S,onChange:_})}),(0,t.jsx)(ej.ShortcutTooltip,{shortcutId:em.SHORTCUT_IDS.FUNCTIONS_LIST_REFRESH,side:"bottom",children:(0,t.jsx)(u.Button,{type:"default",icon:(0,t.jsx)(n.RefreshCw,{}),loading:R,onClick:()=>I(),children:"Refresh"})}),(0,t.jsx)("span",{className:"border-l border-default pl-2 text-xs text-foreground-light",children:w&&M.length!==N.length?`Viewing ${M.length} of ${N.length} functions in total`:`Viewing ${N.length} ${1===N.length?"function":"functions"} in total`})]}),(0,t.jsx)(m.Card,{children:(0,t.jsxs)(p.Table,{children:[(0,t.jsx)(p.TableHeader,{children:(0,t.jsxs)(p.TableRow,{children:[(0,t.jsx)(p.TableHead,{children:"Name"}),(0,t.jsx)(p.TableHead,{children:"URL"}),(0,t.jsx)(p.TableHead,{className:"hidden 2xl:table-cell",children:"Created"}),(0,t.jsx)(p.TableHead,{className:"lg:table-cell",children:"Updated"}),g&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.TableHead,{className:"lg:table-cell",children:"Total requests (1h)"}),(0,t.jsx)(p.TableHead,{className:"lg:table-cell",children:"5xx error rate (1h)"})]}),(0,t.jsx)(p.TableHead,{className:"hidden 2xl:table-cell",children:"Deployments"})]})}),(0,t.jsx)(p.TableBody,{children:(0,t.jsx)(t.Fragment,{children:M.length>0?M.map(e=>(0,t.jsx)(Q,{function:e},e.id)):(0,t.jsx)(p.TableRow,{children:(0,t.jsxs)(p.TableCell,{colSpan:g?8:6,children:[(0,t.jsx)("p",{className:"text-sm text-foreground",children:"No results found"}),(0,t.jsxs)("p",{className:"text-sm text-foreground-light",children:['Your search for "',w,'" did not return any results']})]})})})})]})})]}):(0,t.jsx)(J.FunctionsEmptyState,{})}),!ec.IS_PLATFORM&&(0,t.jsx)(J.FunctionsInstructionsLocal,{})]})})})})};ev.getLayout=e=>(0,t.jsxs)(ef.default,{children:[(0,t.jsx)(ex.default,{title:"Edge Functions",children:(0,t.jsxs)("div",{className:"w-full min-h-full flex flex-col items-stretch",children:[(0,t.jsx)(g.PageHeader,{size:"large",children:(0,t.jsxs)(g.PageHeaderMeta,{children:[(0,t.jsxs)(g.PageHeaderSummary,{children:[(0,t.jsx)(g.PageHeaderTitle,{children:"Edge Functions"}),(0,t.jsx)(g.PageHeaderDescription,{children:"Run server-side logic close to your users"})]}),(0,t.jsxs)(g.PageHeaderAside,{children:[(0,t.jsx)(en.DocsButton,{href:`${ec.DOCS_URL}/guides/functions`}),(0,t.jsx)(u.Button,{asChild:!0,type:"default",icon:(0,t.jsx)(r.ExternalLink,{}),children:(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/supabase/supabase/tree/master/examples/edge-functions/supabase/functions",children:"Examples"})}),ec.IS_PLATFORM&&(0,t.jsx)(A,{})]})]})}),e]})}),(0,t.jsx)(eu,{})]}),e.s(["default",0,ev],551734)},621250,(e,t,s)=>{let a="/project/[ref]/functions";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(551734)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})},111410,e=>{e.v(t=>Promise.all(["static/chunks/0fapkys0ri-_l.js","static/chunks/0~4sz39c_mg-o.js"].map(t=>e.l(t))).then(()=>t(677146)))},883471,e=>{e.v(t=>Promise.all(["static/chunks/06p2kpj04m4yn.js"].map(t=>e.l(t))).then(()=>t(518769)))},692992,e=>{e.v(t=>Promise.all(["static/chunks/0f12yrswzr1z2.js"].map(t=>e.l(t))).then(()=>t(897936)))},306064,e=>{e.v(t=>Promise.all(["static/chunks/0imgo7gs0_t8d.js"].map(t=>e.l(t))).then(()=>t(843731)))},329867,e=>{e.v(t=>Promise.all(["static/chunks/0j9-vc7rfg5vp.js"].map(t=>e.l(t))).then(()=>t(562380)))},643342,e=>{e.v(t=>Promise.all(["static/chunks/0vl7m.74mi~6x.js","static/chunks/0nzbagpf5_1q4.js","static/chunks/0a~s7vfbwjli3.js","static/chunks/0pu-c~48~wxg6.js","static/chunks/0mauiau2w.a3n.js","static/chunks/0atc44db2_961.js","static/chunks/0xs42br2r6co5.js","static/chunks/051wi-a42k1v7.js","static/chunks/0b5iqubmtzurg.js"].map(t=>e.l(t))).then(()=>t(232258)))},804879,e=>{e.v(t=>Promise.all(["static/chunks/0w0qo4w5bpkvd.js","static/chunks/0loc2zv_48v18.js","static/chunks/0a~s7vfbwjli3.js","static/chunks/0atc44db2_961.js","static/chunks/0373hw35~c~x..js"].map(t=>e.l(t))).then(()=>t(199687)))},95833,e=>{e.v(t=>Promise.all(["static/chunks/0rdl7siznoe_x.js","static/chunks/05jalvhk.rf-y.js"].map(t=>e.l(t))).then(()=>t(142543)))},846537,e=>{e.v(t=>Promise.all(["static/chunks/01vq2u-nj2zot.js"].map(t=>e.l(t))).then(()=>t(245201)))},50229,e=>{e.v(t=>Promise.all(["static/chunks/17o_wx35gl351.js"].map(t=>e.l(t))).then(()=>t(331248)))},263652,e=>{e.v(t=>Promise.all(["static/chunks/0rywafsw-6g89.js"].map(t=>e.l(t))).then(()=>t(700224)))},822335,e=>{e.v(t=>Promise.all(["static/chunks/130u0nco-gmpy.js"].map(t=>e.l(t))).then(()=>t(48216)))},827389,e=>{e.v(t=>Promise.all(["static/chunks/0q9f5ej5c8u0a.js"].map(t=>e.l(t))).then(()=>t(780795)))},306465,e=>{e.v(t=>Promise.all(["static/chunks/0y_nxho2d0k-y.js"].map(t=>e.l(t))).then(()=>t(84223)))},320810,e=>{e.v(t=>Promise.all(["static/chunks/0b6~d1w4j692e.js"].map(t=>e.l(t))).then(()=>t(190529)))},44756,e=>{e.v(t=>Promise.all(["static/chunks/10whcp9gm7~1k.js"].map(t=>e.l(t))).then(()=>t(411609)))},77572,e=>{e.v(t=>Promise.all(["static/chunks/0r0bwdd1oeak4.js"].map(t=>e.l(t))).then(()=>t(550910)))},299015,e=>{e.v(t=>Promise.all(["static/chunks/0mb.7j~oz_szr.js"].map(t=>e.l(t))).then(()=>t(956403)))},853832,e=>{e.v(t=>Promise.all(["static/chunks/09yw33ucvjq77.js"].map(t=>e.l(t))).then(()=>t(523047)))},444444,e=>{e.v(t=>Promise.all(["static/chunks/15pe8af5os~7w.js"].map(t=>e.l(t))).then(()=>t(306141)))},89982,e=>{e.v(t=>Promise.all(["static/chunks/10ndn1_q82ns6.js"].map(t=>e.l(t))).then(()=>t(84181)))},439,e=>{e.v(t=>Promise.all(["static/chunks/09xi1zfr2260f.js"].map(t=>e.l(t))).then(()=>t(585967)))},674055,e=>{e.v(t=>Promise.all(["static/chunks/03kx7ucpp5b6p.js"].map(t=>e.l(t))).then(()=>t(659864)))},801894,e=>{e.v(t=>Promise.all(["static/chunks/02tu8s59_quy5.js"].map(t=>e.l(t))).then(()=>t(532683)))},578444,e=>{e.v(t=>Promise.all(["static/chunks/0~1l14owyzj5c.js"].map(t=>e.l(t))).then(()=>t(221183)))},185608,e=>{e.v(t=>Promise.all(["static/chunks/0~qx2nzdpnwqz.js"].map(t=>e.l(t))).then(()=>t(79472)))},612314,e=>{e.v(t=>Promise.all(["static/chunks/0ig_efln.eo5n.js"].map(t=>e.l(t))).then(()=>t(980791)))},660943,e=>{e.v(t=>Promise.all(["static/chunks/16q_50rcfqzir.js"].map(t=>e.l(t))).then(()=>t(620893)))},214615,e=>{e.v(t=>Promise.all(["static/chunks/08dhnvqtho~su.js"].map(t=>e.l(t))).then(()=>t(194742)))},877303,e=>{e.v(t=>Promise.all(["static/chunks/0qbdrxkgb.swe.js"].map(t=>e.l(t))).then(()=>t(85809)))},565731,e=>{e.v(t=>Promise.all(["static/chunks/008npwwjamnf2.js"].map(t=>e.l(t))).then(()=>t(846526)))},439954,e=>{e.v(t=>Promise.all(["static/chunks/00d-l9m5lnxdv.js"].map(t=>e.l(t))).then(()=>t(399358)))},646193,e=>{e.v(t=>Promise.all(["static/chunks/05qtdilohd~w7.js"].map(t=>e.l(t))).then(()=>t(270671)))},310666,e=>{e.v(t=>Promise.all(["static/chunks/094ci2h0zwu2y.js"].map(t=>e.l(t))).then(()=>t(191809)))},38970,e=>{e.v(t=>Promise.all(["static/chunks/0c7r2azgp4ow0.js","static/chunks/0etx14629d407.js","static/chunks/00g-f9lsw_91v.js"].map(t=>e.l(t))).then(()=>t(66554)))},68365,e=>{e.v(t=>Promise.all(["static/chunks/0u9p~dxnsj-w5.js"].map(t=>e.l(t))).then(()=>t(531769)))},705292,e=>{e.v(t=>Promise.all(["static/chunks/0ap4hm_2.yq9y.js"].map(t=>e.l(t))).then(()=>t(147575)))},930188,e=>{e.v(t=>Promise.all(["static/chunks/0depke8p2eu1z.js"].map(t=>e.l(t))).then(()=>t(604919)))},736620,e=>{e.v(t=>Promise.all(["static/chunks/0mveicz4lz3tj.js"].map(t=>e.l(t))).then(()=>t(85022)))},101928,e=>{e.v(t=>Promise.all(["static/chunks/0mm~snu2~dq3y.js"].map(t=>e.l(t))).then(()=>t(846161)))},41375,e=>{e.v(t=>Promise.all(["static/chunks/02kj68im06set.js"].map(t=>e.l(t))).then(()=>t(834473)))},715733,e=>{e.v(t=>Promise.all(["static/chunks/13jetsarig1lq.js"].map(t=>e.l(t))).then(()=>t(417897)))},268726,e=>{e.v(t=>Promise.all(["static/chunks/1499ufsalmt_b.js"].map(t=>e.l(t))).then(()=>t(898187)))},740028,e=>{e.v(t=>Promise.all(["static/chunks/173dlyz5qiu-~.js"].map(t=>e.l(t))).then(()=>t(391060)))},24661,e=>{e.v(t=>Promise.all(["static/chunks/0tmc189rtw37j.js"].map(t=>e.l(t))).then(()=>t(549587)))},134805,e=>{e.v(t=>Promise.all(["static/chunks/0.2xngu77jthy.js"].map(t=>e.l(t))).then(()=>t(664336)))},597523,e=>{e.v(t=>Promise.all(["static/chunks/11km3nz.f.eef.js"].map(t=>e.l(t))).then(()=>t(245099)))},678679,e=>{e.v(t=>Promise.all(["static/chunks/12dsmdes91jfo.js"].map(t=>e.l(t))).then(()=>t(404154)))},73751,e=>{e.v(t=>Promise.all(["static/chunks/11njii9nc~g7u.js"].map(t=>e.l(t))).then(()=>t(31724)))},909495,e=>{e.v(t=>Promise.all(["static/chunks/03_x_o864nb~2.js"].map(t=>e.l(t))).then(()=>t(698380)))},548863,e=>{e.v(t=>Promise.all(["static/chunks/0c34ji09ctb62.js","static/chunks/0a~s7vfbwjli3.js"].map(t=>e.l(t))).then(()=>t(79703)))},283398,e=>{e.v(t=>Promise.all(["static/chunks/0h_a0hxg~repb.js"].map(t=>e.l(t))).then(()=>t(541970)))},274794,e=>{e.v(t=>Promise.all(["static/chunks/177ec~91g829l.js","static/chunks/0a~s7vfbwjli3.js","static/chunks/0w_jw_i1kdl-w.js","static/chunks/09zwall0o5zyg.js","static/chunks/0q~tc5hf~vvm4.js","static/chunks/0atc44db2_961.js"].map(t=>e.l(t))).then(()=>t(571538)))},929825,e=>{e.v(t=>Promise.all(["static/chunks/0b3gi~5c0tn22.js"].map(t=>e.l(t))).then(()=>t(777403)))},579437,e=>{e.v(t=>Promise.all(["static/chunks/0a~s7vfbwjli3.js","static/chunks/05bgf3aunsrhg.js","static/chunks/0.captq-2ffm..js","static/chunks/0atc44db2_961.js"].map(t=>e.l(t))).then(()=>t(524943)))},609157,e=>{e.v(t=>Promise.all(["static/chunks/0a~s7vfbwjli3.js","static/chunks/06h-m.xz5t-5w.js","static/chunks/0.captq-2ffm..js","static/chunks/0atc44db2_961.js"].map(t=>e.l(t))).then(()=>t(323205)))},150116,e=>{e.v(t=>Promise.all(["static/chunks/0gpvdphhn21_u.js"].map(t=>e.l(t))).then(()=>t(763645)))},707643,e=>{e.v(t=>Promise.all(["static/chunks/03lqf5owlfm2q.js","static/chunks/0a~s7vfbwjli3.js"].map(t=>e.l(t))).then(()=>t(935100)))},467186,e=>{e.v(t=>Promise.all(["static/chunks/02i0eehq__r2x.js"].map(t=>e.l(t))).then(()=>t(6777)))},639206,e=>{e.v(t=>Promise.all(["static/chunks/0l4emnwntu.ik.js","static/chunks/0_hlbfkp6tzjt.js"].map(t=>e.l(t))).then(()=>t(791713)))},250577,e=>{e.v(t=>Promise.all(["static/chunks/0p33hxv8lzdmn.js"].map(t=>e.l(t))).then(()=>t(429091)))},610764,e=>{e.v(t=>Promise.all(["static/chunks/0mjonfxjm7cu5.js","static/chunks/167chm7ke3xyj.js"].map(t=>e.l(t))).then(()=>t(247311)))},818633,e=>{e.v(t=>Promise.all(["static/chunks/0jjr.7e3ie27n.js","static/chunks/0os3pq6~e4de4.js"].map(t=>e.l(t))).then(()=>t(338481)))},859528,e=>{e.v(t=>Promise.all(["static/chunks/03g69_2g8_2q..js"].map(t=>e.l(t))).then(()=>t(372475)))},500556,e=>{e.v(t=>Promise.all(["static/chunks/0p__5d.97c8ed.css","static/chunks/0ifzb_2f6ut.l.css","static/chunks/0zm-hcfy46vnl.js","static/chunks/0a~s7vfbwjli3.js","static/chunks/12g1m-9pg.lo1.js","static/chunks/0q~tc5hf~vvm4.js","static/chunks/10do4f5ook2rp.js","static/chunks/0a.r8gfpy.omm.js","static/chunks/04uxp_ac9t-x..js","static/chunks/07jdbmrp~k0z7.js","static/chunks/0jppi2kxu.u50.js"].map(t=>e.l(t))).then(()=>t(321608)))},596207,e=>{e.v(t=>Promise.all(["static/chunks/03_mt.bbavzci.js","static/chunks/0ivuvuv1a2itj.js"].map(t=>e.l(t))).then(()=>t(865243)))},354946,e=>{e.v(t=>Promise.all(["static/chunks/0hm_un036zf5b.js","static/chunks/03_mt.bbavzci.js"].map(t=>e.l(t))).then(()=>t(674412)))},943222,e=>{e.v(t=>Promise.all(["static/chunks/0ojcml_xfi8bb.js"].map(t=>e.l(t))).then(()=>t(140017)))},98740,e=>{e.v(t=>Promise.all(["static/chunks/0-o4r50_rlpg4.js"].map(t=>e.l(t))).then(()=>t(795776)))},130281,e=>{e.v(t=>Promise.all(["static/chunks/03w0ky2ch~0rj.js"].map(t=>e.l(t))).then(()=>t(10338)))},429186,e=>{e.v(t=>Promise.all(["static/chunks/07ohhmi5njylm.js","static/chunks/0y6rcq1425_6w.js","static/chunks/0kws5scat_tcp.js","static/chunks/160s~g1eq00e2.js","static/chunks/0crb8s8p4ypxy.js","static/chunks/17i.~7rx3zftk.js"].map(t=>e.l(t))).then(()=>t(818996)))},488584,e=>{e.v(t=>Promise.all(["static/chunks/0owfo049_wdyi.js"].map(t=>e.l(t))).then(()=>t(851420)))},25642,e=>{e.v(t=>Promise.all(["static/chunks/0mcvibd3yvcpz.js","static/chunks/00x1lj42c6fsu.js","static/chunks/0a~s7vfbwjli3.js","static/chunks/0hvgxzdykeqea.js","static/chunks/12laf6-vgudse.js","static/chunks/0x5vjvs.y4opk.js","static/chunks/0t337q-xnfdye.js","static/chunks/0.4776luh_cpx.js","static/chunks/04_m1449f90sf.js","static/chunks/0atc44db2_961.js"].map(t=>e.l(t))).then(()=>t(207831)))},561602,e=>{e.v(t=>Promise.all(["static/chunks/03flevbm08f56.js","static/chunks/0mcvibd3yvcpz.js","static/chunks/0f6t3z_khf99l.js","static/chunks/0hd5ap4vcexia.js"].map(t=>e.l(t))).then(()=>t(326204)))},877114,e=>{e.v(t=>Promise.all(["static/chunks/0h7u2qo-k_8n~.js"].map(t=>e.l(t))).then(()=>t(812136)))},540007,e=>{e.v(t=>Promise.all(["static/chunks/00h30~s47nx4s.js"].map(t=>e.l(t))).then(()=>t(785951)))},593029,e=>{e.v(t=>Promise.all(["static/chunks/18bymio1l_irz.js"].map(t=>e.l(t))).then(()=>t(755497)))},849654,e=>{e.v(e=>Promise.resolve().then(()=>e(839941)))},639363,e=>{e.v(t=>Promise.all(["static/chunks/0hk.-u6gjodb4.js"].map(t=>e.l(t))).then(()=>t(904340)))},425360,e=>{e.v(t=>Promise.all(["static/chunks/13u_n184r7wx5.js"].map(t=>e.l(t))).then(()=>t(409222)))},548315,e=>{e.v(t=>Promise.all(["static/chunks/09~1.vl~2pw.o.js","static/chunks/0mcvibd3yvcpz.js"].map(t=>e.l(t))).then(()=>t(256337)))},661328,e=>{e.v(t=>Promise.all(["static/chunks/0~co31uuwokga.js","static/chunks/0mcvibd3yvcpz.js"].map(t=>e.l(t))).then(()=>t(447400)))},265029,e=>{e.v(t=>Promise.all(["static/chunks/14-.-tpp7r5zs.js"].map(t=>e.l(t))).then(()=>t(289339)))},151872,e=>{e.v(t=>Promise.all(["static/chunks/0r5mg22d_gweq.js"].map(t=>e.l(t))).then(()=>t(865389)))}]);

//# debugId=f76d7c53-f08c-f1f2-0531-e357dbd311ed
//# sourceMappingURL=0pppc6lhslryt.js.map