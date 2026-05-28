;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="099f64f1-84c7-90f4-ba32-ee6def6ef378")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,202003,e=>{"use strict";e.s(["buildStudioPageTitle",0,e=>{let r=[e.entity,e.section,e.surface,e.project,e.org,e.brand],t=[];return r.forEach(e=>{let r=(e=>{if(void 0===e)return;let r=e.trim().replace(/\s+/g," ");if(0!==r.length)return r.length<=60?r:`${r.slice(0,59).trimEnd()}…`})(e);if(!r)return;let o=t[t.length-1];(void 0===o||o.toLowerCase()!==r.toLowerCase())&&t.push(r)}),t.join(" | ")}])},22194,e=>{"use strict";var r=e.i(221628);e.i(481541);var t=e.i(665265),t=t,o=e.i(188139),a=e.i(416340),i=e.i(843778);e.s(["ProfileImage",0,({alt:e,src:n,placeholder:s,className:l})=>{let[d,u]=(0,a.useState)(!1);return n&&!d?(0,r.jsx)(o.default,{alt:e??"",src:n,width:"24",height:"24",className:(0,i.cn)("aspect-square bg-foreground rounded-full object-cover",l),onError:()=>u(!0)}):s??(0,r.jsx)("figure",{className:(0,i.cn)("bg-foreground rounded-full flex items-center justify-center",l),children:(0,r.jsx)(t.default,{size:18,strokeWidth:1.5,className:"text-background"})})}],22194)},95053,e=>{"use strict";var r=e.i(221628),t=e.i(766181),o=e.i(416340),a=e.i(843778),i=e.i(20482),n=e.i(737018),s=e.i(282410);let l=(0,t.cva)("relative grid gap-10",{variants:{size:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},align:{left:"",right:""},responsive:{true:"",false:""},layout:{horizontal:"flex flex-col gap-2 md:grid md:grid-cols-12",vertical:"flex flex-col gap-2",flex:"flex flex-row gap-3","flex-row-reverse":"flex flex-col-reverse gap-2 md:gap-6 md:flex-row-reverse md:justify-between"},flex:{true:"",false:""}},compoundVariants:[{layout:"flex",align:"right",className:"justify-between"},{layout:"flex-row-reverse",align:"right",className:"justify-between"}],defaultVariants:{}}),d=(0,t.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"flex flex-col gap-2 col-span-4",vertical:"flex flex-row gap-2 justify-between",flex:"flex flex-col gap-0 min-w-0","flex-row-reverse":"flex flex-col min-w-0 grow"},labelLayout:{horizontal:"",vertical:"","":""}},compoundVariants:[{flex:!0,align:"left",className:"order-2"},{flex:!0,align:"right",className:"order-1"},{layout:["vertical","flex"],labelLayout:void 0,flex:!1,className:"flex flex-row gap-2 justify-between"},{layout:"horizontal",className:"flex flex-col gap-2"}],defaultVariants:{}}),u=(0,t.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"order-1",right:"order-2"},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:"order-1"},{flex:!0,align:"right",className:"order-2"},{layout:["vertical","flex"],className:"col-span-12"},{layout:"horizontal",align:"left",className:"col-span-8"},{layout:"horizontal",align:"right",className:"text-right"}],defaultVariants:{}}),c=(0,t.cva)("text-foreground-lighter leading-normal",{variants:{size:{...s.SIZE.text},layout:{vertical:"mt-2",horizontal:"mt-2",flex:"","flex-row-reverse":""}},defaultVariants:{}}),p=(0,t.cva)("text-foreground-muted",{variants:{size:{...s.SIZE.text}},defaultVariants:{}}),m=(0,t.cva)("text-foreground-muted",{variants:{size:{...s.SIZE.text}},defaultVariants:{}}),f=(0,t.cva)("text-foreground-muted",{variants:{size:{...s.SIZE.text}},defaultVariants:{}}),g=(0,t.cva)("",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:""},{flex:!0,align:"right",className:"order-last"},{layout:"flex-row-reverse",className:"flex flex-col justify-center items-start md:items-end shrink-0 md:w-1/2 xl:w-2/5 [&>div]:md:w-full"}]}),x=(0,t.cva)("",{variants:{nonBoxInput:{true:"",false:""},label:{true:"",false:""},layout:{vertical:"",horizontal:"","flex-row-reverse":""}},compoundVariants:[{nonBoxInput:!0,label:!0,layout:"vertical",className:"my-3"},{nonBoxInput:!0,label:!0,layout:"horizontal",className:"my-3 md:mt-0 mb-3"}],defaultVariants:{}}),h=o.default.forwardRef(({align:e="left",className:t,description:o,id:s,label:h,labelOptional:b,layout:v="vertical",style:y,labelLayout:w,size:j="medium",beforeLabel:_,afterLabel:C,nonBoxInput:z=!h,hideMessage:N=!1,isReactForm:S,error:E,...P},k)=>{let T="flex"===v||"flex-row-reverse"===v,R=!!(h||_||C),$=S&&!N?(0,r.jsx)(i.FormMessage,{className:(0,a.cn)("mt-2 transition-all duration-300 ease-in-out","flex-row-reverse"===v&&"mt-0"),"data-formlayout-id":"message"}):E&&!N?(0,r.jsx)("p",{className:(0,a.cn)("mt-2 text-sm text-destructive","flex-row-reverse"===v&&"mt-0"),children:E}):null,L=o&&S?(0,r.jsx)(i.FormDescription,{className:(0,a.cn)(c({size:j,layout:v})),"data-formlayout-id":"description",id:`${s}-description`,children:o}):o?(0,r.jsx)("p",{className:(0,a.cn)(c({size:j,layout:v}),"text-sm text-foreground-light"),"data-formlayout-id":"description",children:o}):null,D=()=>(0,r.jsxs)(r.Fragment,{children:[_&&(0,r.jsx)("span",{className:(0,a.cn)(p({size:j})),id:s+"-before","data-formlayout-id":"beforeLabel",children:(0,r.jsx)("span",{children:_})}),(0,r.jsx)("span",{children:h}),C&&(0,r.jsx)("span",{className:(0,a.cn)(m({size:j})),id:s+"-after","data-formlayout-id":"afterLabel",children:C})]});return(0,r.jsxs)("div",{ref:k,...P,className:(0,a.cn)(l({size:j,flex:T,align:e,layout:v}),t),children:[T&&(0,r.jsxs)("div",{className:(0,a.cn)(g({flex:T,align:e,layout:v})),children:[P.children,"flex-row-reverse"===v&&$]}),R||b||"horizontal"===v?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:(0,a.cn)(d({align:e,labelLayout:w,flex:T,layout:v})),"data-formlayout-id":"labelContainer",children:[R&&S?(0,r.jsx)(i.FormLabel,{className:"text-foreground flex gap-2 items-center wrap-break-word","data-formlayout-id":"formLabel",htmlFor:P.name||s,children:(0,r.jsx)(D,{})}):(0,r.jsx)(n.Label,{className:"text-foreground flex gap-2 items-center wrap-break-word leading-normal","data-formlayout-id":"label",htmlFor:P.name||s,children:(0,r.jsx)(D,{})}),b&&(0,r.jsx)("span",{className:(0,a.cn)(f({size:j})),id:s+"-optional","data-formlayout-id":"labelOptional",children:b}),T&&(0,r.jsxs)(r.Fragment,{children:[L,"flex-row-reverse"!==v&&$]})]})}):null,!T&&(0,r.jsx)("div",{className:(0,a.cn)(u({align:e,layout:v})),style:y,"data-formlayout-id":"dataContainer",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:(0,a.cn)(x({nonBoxInput:z,label:h,layout:v})),"data-formlayout-id":"nonBoxInputContainer",children:P.children}),$,L]})})]})});e.s(["FormLayout",0,h])},538482,e=>{"use strict";var r=e.i(221628),t=e.i(416340),o=e.i(20482),a=e.i(95053);let i=(0,t.forwardRef)(({...e},t)=>(0,r.jsx)(o.FormItem,{children:(0,r.jsx)(a.FormLayout,{ref:t,isReactForm:!0,...e,children:e.children})}));i.displayName="FormItemLayout",e.s(["FormItemLayout",0,i])},344580,e=>{"use strict";var r=e.i(67318),t=function(e,t,o){if(e&&"reportValidity"in e){var a=(0,r.get)(o,t);e.setCustomValidity(a&&a.message||""),e.reportValidity()}},o=function(e,r){var o=function(o){var a=r.fields[o];a&&a.ref&&"reportValidity"in a.ref?t(a.ref,o,e):a.refs&&a.refs.forEach(function(r){return t(r,o,e)})};for(var a in r.fields)o(a)},a=function(e,t){t.shouldUseNativeValidation&&o(e,t);var a={};for(var s in e){var l=(0,r.get)(t.fields,s),d=Object.assign(e[s]||{},{ref:l&&l.ref});if(n(t.names||Object.keys(e),s)){var u=Object.assign({},i((0,r.get)(a,s)));(0,r.set)(u,"root",d),(0,r.set)(a,s,u)}else(0,r.set)(a,s,d)}return a},i=function(e){return Array.isArray(e)?e.filter(Boolean):[]},n=function(e,r){return e.some(function(e){return e.startsWith(r+".")})},s=function(e,t){for(var o={};e.length;){var a=e[0],i=a.code,n=a.message,s=a.path.join(".");if(!o[s])if("unionErrors"in a){var l=a.unionErrors[0].errors[0];o[s]={message:l.message,type:l.code}}else o[s]={message:n,type:i};if("unionErrors"in a&&a.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),t){var d=o[s].types,u=d&&d[a.code];o[s]=(0,r.appendErrors)(s,t,o,i,u?[].concat(u,a.message):a.message)}e.shift()}return o};e.s(["zodResolver",0,function(e,r,t){return void 0===t&&(t={}),function(i,n,l){try{return Promise.resolve(function(a){try{var n=Promise.resolve(e["sync"===t.mode?"parse":"parseAsync"](i,r)).then(function(e){return l.shouldUseNativeValidation&&o({},l),{errors:{},values:t.raw?i:e}})}catch(e){return a(e)}return n&&n.then?n.then(void 0,a):n}(function(e){if(null!=e.errors)return{values:{},errors:a(s(e.errors,!l.shouldUseNativeValidation&&"all"===l.criteriaMode),l)};throw e}))}catch(e){return Promise.reject(e)}}}],344580)},938933,e=>{"use strict";var r=e.i(416340);let t={bg:{brand:{primary:"bg-purple-600",secondary:"bg-purple-200"}},text:{brand:"text-purple-600",body:"text-foreground-light",title:"text-foreground"},border:{brand:"border-brand-600",primary:"border-default",secondary:"border-secondary",alternative:"border-alternative"},placeholder:"placeholder-foreground-muted",focus:`
    outline-hidden
    focus:ring-current focus:ring-2
  `,"focus-visible":`
    outline-hidden
    transition-all
    outline-0
    focus-visible:outline-4
    focus-visible:outline-offset-1
  `,size:{text:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},padding:{tiny:"px-2.5 py-1",small:"px-3 py-2",medium:"px-4 py-2",large:"px-4 py-2",xlarge:"px-6 py-3"}},overlay:{base:"absolute inset-0 bg-background opacity-50",container:"fixed inset-0 transition-opacity"}},o={tiny:`${t.size.text.tiny} ${t.size.padding.tiny}`,small:`${t.size.text.small} ${t.size.padding.small}`,medium:`${t.size.text.medium} ${t.size.padding.medium}`,large:`${t.size.text.large} ${t.size.padding.large}`,xlarge:`${t.size.text.xlarge} ${t.size.padding.xlarge}`},a={card:{base:`
      bg-surface-100

      border
      ${t.border.primary}

      flex flex-col
      rounded-md shadow-lg overflow-hidden relative
    `,hoverable:"transition hover:-translate-y-1 hover:shadow-2xl",head:`px-8 py-6 flex justify-between
    border-b
      ${t.border.primary} `,content:"p-8"},tabs:{base:"w-full justify-between space-y-4",underlined:{list:`
        flex items-center border-b
        ${t.border.secondary}
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
      `},block:"w-full flex items-center justify-center",size:{...o},scrollable:"overflow-auto whitespace-nowrap no-scrollbar mask-fadeout-right",wrappable:"flex-wrap",content:"focus:outline-hidden transition-height"},input:{base:`
      block
      box-border
      w-full
      rounded-md
      shadow-xs
      transition-all
      text-foreground
      border
      focus-visible:shadow-md
      ${t.focus}
      focus-visible:border-foreground-muted
      focus-visible:ring-background-control
      ${t.placeholder}
      group
    `,variants:{standard:`
        bg-foreground/[.026]
        border border-control
        `,error:`
        bg-destructive-200
        border border-destructive-500
        focus:ring-destructive-400
        placeholder:text-destructive-400
       `},container:"relative",with_icon:{tiny:"pl-7",small:"pl-8",medium:"pl-8",large:"pl-10",xlarge:"pl-11"},size:{...o},disabled:"opacity-50",actions_container:"absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",textarea_actions_container:"absolute inset-y-1.5 right-0 pl-3 pr-1 flex space-x-1 items-start",textarea_actions_container_items:"flex items-center"},sidepanel:{base:`
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
    `},form_layout:{container:"grid gap-2",flex:{left:{base:"flex flex-row gap-6",content:"",labels:"order-2",data_input:"order-1"},right:{base:"flex flex-row gap-6 justify-between",content:"order-last",labels:"",data_input:"text-right"}},responsive:"md:grid md:grid-cols-12",non_responsive:"grid grid-cols-12 gap-2",labels_horizontal_layout:"flex flex-row space-x-2 justify-between col-span-12",labels_vertical_layout:"flex flex-col space-y-2 col-span-4",data_input_horizontal_layout:"col-span-12",non_box_data_input_spacing_vertical:"my-3",non_box_data_input_spacing_horizontal:"my-3 md:mt-0 mb-3",data_input_vertical_layout:"col-span-8",data_input_vertical_layout__align_right:"text-right",label:{base:"block text-foreground-light",size:{...t.size.text}},label_optional:{base:"text-foreground-lighter",size:{...t.size.text}},description:{base:"mt-2 text-foreground-lighter leading-normal",size:{...t.size.text}},label_before:{base:"text-foreground-lighter ",size:{...t.size.text}},label_after:{base:"text-foreground-lighter",size:{...t.size.text}},error:{base:`
        text-red-900
        transition-all
        data-show:mt-2
        data-show:animate-slide-down-normal
        data-hide:animate-slide-up-normal
      `,size:{...t.size.text}},size:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"}},menu:{item:{base:`
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
      ${t.focus}
      focus-visible:border-foreground-muted
      focus-visible:ring-background-control
      ${t.placeholder}
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
    `,size:{...o},disabled:"opacity-50",actions_container:"absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",chevron_container:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",chevron:"h-5 w-5 text-foreground-muted",option:`
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
    `}},i=(0,r.createContext)({theme:a});e.s(["default",0,function(e){let{theme:{[e]:t}}=(0,r.useContext)(i);return JSON.parse(t=JSON.stringify(t).replace(/\\n/g,"").replace(/\s\s+/g," "))}],938933)},710019,e=>{e.v({dash:"loading-anim-module__T3MC1q__dash",loading:"loading-anim-module__T3MC1q__loading"})},724945,e=>{"use strict";var r=e.i(221628),t=e.i(710019);e.s(["default",0,()=>(0,r.jsx)("div",{className:"w-full h-full flex flex-col items-center justify-center",children:(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:"60",height:"62",viewBox:"0 0 60 62",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t.default.loading,children:(0,r.jsx)("path",{d:"M30.2571 4.12811L30.257 4.12389C30.2133 1.21067 26.5349 -0.034778 24.7224 2.24311L1.76109 31.0996C-1.21104 34.8348 1.45637 40.34 6.23131 40.34H29.4845L29.7563 58.4432C29.8 61.3564 33.4783 62.6016 35.2908 60.324L34.8996 60.0127L35.2908 60.324L58.2521 31.4674C61.2241 27.7322 58.5568 22.227 53.782 22.227H30.3762L30.2571 4.12811Z",stroke:"hsl(var(--brand-default))",strokeWidth:2,strokeLinecap:"round"})})})})])},818843,e=>{"use strict";var r=e.i(724945);e.s(["LogoLoader",()=>r.default])},466472,e=>{"use strict";var r=e.i(221628),t=e.i(416340),o=e.i(837710),a=e.i(843778),i=e.i(253214),n=e.i(710483);let s=(0,t.forwardRef)(({title:e,description:s,size:l="small",visible:d,onCancel:u,onConfirm:c,loading:p,cancelLabel:m="Cancel",confirmLabel:f="Submit",confirmLabelLoading:g,alert:x,children:h,variant:b="default",disabled:v,className:y,...w},j)=>{let[_,C]=(0,t.useState)(void 0!==p&&p);(0,t.useEffect)(()=>{d&&void 0===p&&C(!1)},[d]),(0,t.useEffect)(()=>{void 0!==p&&C(p)},[p]);let{title:z,children:N,...S}=x?.base??{},E=x?.title?{title:x.title}:{};return(0,r.jsx)(i.Dialog,{open:d,...w,onOpenChange:()=>{d&&u()},children:(0,r.jsxs)(i.DialogContent,{"aria-describedby":void 0,ref:j,className:"p-0 gap-0 pb-5 block!",size:l,children:[(0,r.jsxs)(i.DialogHeader,{className:(0,a.cn)("border-b"),padding:"small",children:[(0,r.jsx)(i.DialogTitle,{children:e}),s&&(0,r.jsx)(i.DialogDescription,{children:s})]}),x&&(0,r.jsx)(n.Admonition,{type:b,description:x.description,...E,className:"border-x-0 rounded-none -mt-px",...S}),h&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.DialogSection,{padding:"small",className:y,children:h}),(0,r.jsx)(i.DialogSectionSeparator,{})]}),(0,r.jsxs)("div",{className:"flex gap-2 px-5 pt-5",children:[(0,r.jsx)(o.Button,{size:"medium",block:!0,type:"default",disabled:_,onClick:()=>u(),children:m}),(0,r.jsx)(o.Button,{block:!0,size:"medium",type:"destructive"===b?"danger":"warning"===b?"warning":"primary",htmlType:"submit",loading:_,disabled:_||v,onClick:e=>{e.preventDefault(),e.stopPropagation(),c(),void 0===p&&C(!0)},className:"truncate",children:_&&g?g:f})]})]})})});s.displayName="ConfirmationModal",e.s(["ConfirmationModal",0,s,"default",0,s])},23370,955658,e=>{"use strict";let r=(0,e.i(679709).default)("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);e.s(["default",0,r],955658),e.s(["Trash",0,r],23370)},567558,e=>{"use strict";var r=e.i(221628),t=e.i(26898),o=e.i(416340),a=e.i(837710),i=e.i(710483),n=e.i(196621),s=e.i(967052);let l=({projectRef:e,subject:o,error:i})=>(0,r.jsx)(a.Button,{asChild:!0,type:"default",className:"w-min",children:(0,r.jsx)(n.SupportLink,{queryParams:{category:t.SupportCategories.DASHBOARD_BUG,projectRef:e,subject:o,error:i?.message},children:"Contact support"})}),d=({projectRef:e,subject:t,description:a="Try refreshing your browser, but if the issue persists for more than a few minutes, please reach out to us via support.",error:n,className:d,showIcon:u=!0,layout:c="responsive",showInstructions:p=!0,showErrorPrefix:m=!0,children:f,additionalActions:g,hideContactSupport:x=!1})=>{let h=(0,s.useTrack)(),b=(0,o.useRef)(!1),v=n?.message?.includes("503")?"503 Service Temporarily Unavailable":n?.message;return(0,o.useEffect)(()=>{!b.current&&(b.current=!0,.1>Math.random()&&h("dashboard_error_created",{source:"admonition"}))},[h]),(0,r.jsx)(i.Admonition,{type:"warning",layout:g?"vertical":c,showIcon:u,title:t,description:(0,r.jsxs)(r.Fragment,{children:[n?.message&&(0,r.jsxs)("p",{children:[m&&"Error: ",v]}),p&&(0,r.jsx)("p",{children:a}),f]}),actions:x?g??null:g?(0,r.jsxs)(r.Fragment,{children:[g,(0,r.jsx)(l,{projectRef:e,subject:t,error:n})]}):(0,r.jsx)(l,{projectRef:e,subject:t,error:n}),className:d})};e.s(["AlertError",0,d,"default",0,d])},746301,e=>{"use strict";var r=e.i(221628),t=e.i(36709),o=e.i(416340),a=e.i(843778),i=e.i(375761),n=e.i(231665);let s=(0,o.forwardRef)(({copy:e,showCopyOnHover:s=!1,icon:l,reveal:d=!1,actions:u,onCopy:c,iconContainerClassName:p,containerClassName:m,size:f="small",...g},x)=>{let[h,b]=(0,o.useState)("Copy"),[v,y]=(0,o.useState)(!0);return(0,r.jsxs)(n.InputGroup,{className:m,children:[(0,r.jsx)(n.InputGroupInput,{ref:x,onFocus:e=>e.target.select(),...g,size:f,onCopy:c,type:d&&v?"password":g.type,disabled:g.disabled,className:g.className,"data-1p-ignore":!0,"data-lpignore":"true","data-form-type":"other","data-bwignore":!0}),l&&(0,r.jsx)(n.InputGroupAddon,{align:"inline-start",children:l}),e||u?(0,r.jsxs)(n.InputGroupAddon,{align:"inline-end",className:"pr-1 has-[>button]:mr-0 has-[>kbd]:mr-0",children:[e&&!(d&&v)?(0,r.jsx)(n.InputGroupButton,{size:"tiny",type:"default",className:(0,a.cn)(s&&"opacity-0 group-hover:opacity-100 transition"),icon:(0,r.jsx)(t.Copy,{size:16,className:"text-foreground-muted"}),onClick:()=>{var e;return e=g.value,void(0,i.copyToClipboard)(e,()=>{b("Copied"),setTimeout(function(){b("Copy")},3e3),c?.()})},children:h}):null,d&&v?(0,r.jsx)(n.InputGroupButton,{size:"tiny",type:"default",onClick:function(){y(!1)},children:"Reveal"}):null,u&&u]}):null]})});e.s(["Input",0,s])},891115,e=>{"use strict";let r=(0,e.i(679709).default)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",0,r],891115)},423782,e=>{"use strict";var r=e.i(221628),t=e.i(416340),o=e.i(843778),a=e.i(874311),i=e.i(613580);let n=(0,t.forwardRef)(({...e},t)=>(0,r.jsxs)(i.Tooltip,{children:[(0,r.jsx)(i.TooltipTrigger,{asChild:!0,children:(0,r.jsx)(a.DropdownMenuItem,{ref:t,...e,className:(0,o.cn)(e.className,"pointer-events-auto!"),onClick:r=>{!e.disabled&&e.onClick&&e.onClick(r)},children:e.children})}),e.disabled&&void 0!==e.tooltip.content.text&&(0,r.jsx)(i.TooltipContent,{...e.tooltip.content,children:e.tooltip.content.text})]}));n.displayName="DropdownMenuItemTooltip",e.s(["DropdownMenuItemTooltip",0,n])},980533,e=>{"use strict";e.s(["getPathSegment",0,function(e,r){return e.split("/")[r]},"getPathnameWithoutQuery",0,function(e,r){return null==e?r:e.split(/[?#]/)[0]??r}])},417403,e=>{"use strict";var r=e.i(907019);e.s(["default",0,r])},793595,e=>{"use strict";var r=e.i(125356),t=e.i(711950),o=e.i(234745);async function a({slug:e},r){if(!e)throw Error("slug is required");let[t,i]=await Promise.all([(0,o.get)("/platform/organizations/{slug}/members",{params:{path:{slug:e}},signal:r}),(0,o.get)("/platform/organizations/{slug}/members/invitations",{params:{path:{slug:e}},signal:r})]),{data:n,error:s}=t,{data:l,error:d}=i;return s&&(0,o.handleError)(s),d&&(0,o.handleError)(d),[...n,...l.invitations.map(e=>({...{invited_at:e.invited_at,invited_id:e.id,mfa_enabled:!1,username:e.invited_email.slice(0,1),primary_email:e.invited_email},role_ids:[e.role_id]}))]}e.s(["useOrganizationMembersQuery",0,({slug:e},{enabled:o=!0,...i}={})=>(0,r.useQuery)({queryKey:t.organizationKeys.members(e),queryFn:({signal:r})=>a({slug:e},r),enabled:o&&void 0!==e,...i})])},617976,e=>{"use strict";e.s(["organizationKeys",0,{rolesV2:e=>["organization-members",e,"roles-v2"],invitations:e=>["organization-members",e,"invitations"],invitation:(e,r)=>["organization-members",e,"invitations",r],token:(e,r)=>["organization-members",e,"token",r]}])},794231,388531,781894,e=>{"use strict";var r=e.i(221628),t=e.i(26898);e.i(128328);var o=e.i(657588),a=e.i(158639),i=e.i(561978),n=e.i(837710),s=e.i(215312),l=e.i(344580),d=e.i(416340),u=e.i(67318),c=e.i(739114),p=e.i(587433),m=e.i(253214),f=e.i(20482),g=e.i(511541),x=e.i(613580),h=e.i(538482),b=e.i(417403),v=e.i(125356),y=e.i(617976),w=e.i(234745);let j=["Owner","Administrator","Developer","Read-only"];async function _({slug:e},r){if(!e)throw Error("slug is required");let{data:t,error:o}=await (0,w.get)("/platform/organizations/{slug}/roles",{params:{path:{slug:e}},headers:{Version:2},signal:r});return o&&(0,w.handleError)(o),t}let C=({slug:e},{enabled:r=!0,...t}={})=>(0,v.useQuery)({queryKey:y.organizationKeys.rolesV2(e),queryFn:({signal:r})=>_({slug:e},r),enabled:r&&void 0!==e,select:e=>({...e,org_scoped_roles:e.org_scoped_roles.sort((e,r)=>j.indexOf(e.name)-j.indexOf(r.name))}),...t});e.s(["useOrganizationRolesV2Query",0,C],388531);var z=e.i(793595),N=e.i(705541);async function S({slug:e,plan:r,note:t}){if(!e)throw Error("Slug is required");let{data:o,error:a}=await (0,w.post)("/platform/organizations/{slug}/billing/upgrade-request",{params:{path:{slug:e}},body:{requested_plan:r,note:t}});return a&&(0,w.handleError)(a),o}var E=e.i(265735),P=e.i(635494),k=e.i(967052);let T=b.default.object({note:b.default.string().optional()}),R="request-upgrade-form",$=({block:e=!1,plan:t="Pro",addon:o,featureProposition:a,children:i,className:s,type:b="primary"})=>{let[v,y]=(0,d.useState)(!1),w=(0,k.useTrack)(),{data:j}=(0,P.useSelectedProjectQuery)(),{data:_}=(0,E.useSelectedOrganizationQuery)(),$=_?.slug,L=_?.plan?.id,D="free"===L,{data:F=[]}=(0,z.useOrganizationMembersQuery)({slug:_?.slug}),{data:q}=C({slug:_?.slug}),I=q?.org_scoped_roles??[],{mutate:O,isPending:A}=(({onSuccess:e,onError:r,...t}={})=>(0,N.useMutation)({mutationFn:e=>S(e),async onSuccess(r,t,o){await e?.(r,t,o)},async onError(e,t,o){void 0===r?c.toast.error(`Failed to send upgrade request: ${e.message}`):r(e,t,o)},...t}))({onSuccess:()=>{w("request_upgrade_submitted",{requestedPlan:t,addon:o,currentPlan:L}),c.toast.success("Successfully sent request to billing owners!"),y(!1)}}),H="pitr"===o?"PITR":"customDomain"===o?"Custom domain":"ipv4"===o?"dedicated IPv4 address":"",B=j?`for the project "${j?.name}"`:_?`for the organization "${_.name}"`:"",V="spendCap"===o?"disable spend cap":"computeSize"===o?"change the compute size":`enable the ${H} add-on`,M=o?"spendCap"===o?"Request to disable spend cap":"computeSize"===o?"Request to change compute size":`Request to enable the ${H} add-on`:`Request an upgrade for the ${t} Plan`,U=i||(o?"spendCap"===o?"Request to disable spend cap":"computeSize"===o?"Request to change compute":"Request to enable addon":`Request upgrade to ${t}`),W={note:o?`We'd like to ${D?"upgrade to Pro and ":""}${V} ${B} so that we can ${a}`:`We'd like to upgrade to the ${t} plan ${a?`to ${a} `:""}${B}`},Q=(0,u.useForm)({resolver:(0,l.zodResolver)(T),defaultValues:W,values:W}),K=F.filter(e=>{let r=e.role_ids.map(e=>I.find(r=>r.id===e)?.name).filter(Boolean);return!e.invited_id&&(r.includes("Owner")||r.includes("Administrator"))}),G=async e=>{if(!$)return console.error("Slug is required");O({slug:$,plan:t,note:e.note})};return(0,r.jsxs)(m.Dialog,{open:v,onOpenChange:e=>{e&&w("request_upgrade_modal_opened",{requestedPlan:t,addon:o,currentPlan:L,featureProposition:a}),y(e)},children:[(0,r.jsx)(m.DialogTrigger,{asChild:!0,children:(0,r.jsx)(n.Button,{block:e,type:b,className:s,children:U})}),(0,r.jsx)(m.DialogContent,{children:(0,r.jsx)(f.Form,{...Q,children:(0,r.jsxs)("form",{id:R,onSubmit:Q.handleSubmit(G),children:[(0,r.jsxs)(m.DialogHeader,{children:[(0,r.jsx)(m.DialogTitle,{children:M}),(0,r.jsx)(m.DialogDescription,{children:"Let your organization's billing owners know your interest in this"})]}),(0,r.jsx)(m.DialogSectionSeparator,{}),(0,r.jsxs)(m.DialogSection,{className:"flex flex-col gap-y-6",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,r.jsx)("p",{className:"text-sm",children:"Your request will be sent to the following emails, who are billing owners of your organization:"}),(0,r.jsxs)("div",{className:"text-sm flex gap-x-2",children:[(0,r.jsx)("p",{children:K.slice(0,2).map(e=>e.primary_email).join(", ")}),K.length>2&&(0,r.jsxs)(x.Tooltip,{children:[(0,r.jsx)(x.TooltipTrigger,{tabIndex:-1,children:(0,r.jsx)(p.Badge,{children:"+1 others"})}),(0,r.jsx)(x.TooltipContent,{side:"bottom",children:(0,r.jsx)("ul",{className:"",children:K.slice(2).map(e=>(0,r.jsx)("li",{children:e.primary_email},e.gotrue_id))})})]})]})]}),(0,r.jsx)(f.FormField,{control:Q.control,name:"note",render:({field:e})=>(0,r.jsx)(h.FormItemLayout,{name:"note",label:"Add a note to your request (optional)",layout:"vertical",children:(0,r.jsx)(f.FormControl,{children:(0,r.jsx)(g.TextArea,{id:"note",...e,rows:3,placeholder:o?"spendCap"===o?"e.g. We need to disabled spend cap on this project to do something":"e.g. We need to enable this add-on to do something with the project":"e.g. We need to upgrade to the Pro plan to use this feature"})})})})]}),(0,r.jsxs)(m.DialogFooter,{children:[(0,r.jsx)(n.Button,{type:"default",disabled:A,onClick:()=>y(!1),children:"Cancel"}),(0,r.jsx)(n.Button,{htmlType:"submit",form:R,loading:A,children:"Submit request"})]})]})})})]})};e.s(["RequestUpgradeToBillingOwners",0,$],781894);var L=e.i(196621),D=e.i(2579),F=e.i(912793);let q="<Specify which plan to upgrade to: Pro | Team | Enterprise>";e.s(["PLAN_REQUEST_EMPTY_PLACEHOLDER",0,q,"UpgradePlanButton",0,({source:e,variant:l="primary",plan:d="Pro",addon:u,featureProposition:c,disabled:p,children:m,className:f,slug:g,onClick:x})=>{let{ref:h}=(0,a.useParams)(),{data:b}=(0,E.useSelectedOrganizationQuery)(),v=b?.plan?.id==="free",y=g??b?.slug??"_",w=(0,o.useFlag)("disableProjectCreationAndUpdate"),{billingAll:j}=(0,F.useIsFeatureEnabled)(["billing:all"]),{can:_}=(0,D.useAsyncCheckPermissions)(t.PermissionAction.BILLING_WRITE,"stripe.subscriptions",void 0,{organizationSlug:y}),C=`Enquiry to upgrade ${d?`to ${d} `:""}plan for organization`,z=`Name: ${b?.name}
Slug: ${y}
Requested plan: ${d??q}`,N="spendCap"===u,S=!v&&!!u,P=N?`/org/${y??"_"}/billing?panel=costControl&source=${e}`:S?"computeSize"===u?`/project/${h??"_"}/settings/compute-and-disk`:`/project/${h??"_"}/settings/addons?panel=${u}&source=${e}`:`/org/${y??"_"}/billing?panel=subscriptionPlan&source=${e}`,k=m||(S?"computeSize"===u?"Change compute size":"Enable add-on":`Upgrade to ${d}`),T=j?(0,r.jsx)(i.default,{href:P,children:k}):(0,r.jsx)(L.SupportLink,{queryParams:{orgSlug:y,category:"Plan_upgrade",subject:C,message:z},children:k});return _?w?(0,r.jsx)(s.ButtonTooltip,{disabled:!0,type:l,className:f,tooltip:{content:{side:"bottom",text:"Plan changes are currently disabled, our engineers are working on a fix"}},children:k}):(0,r.jsx)(n.Button,{asChild:!0,type:l,disabled:p,className:f,onClick:x,children:T}):(0,r.jsx)($,{plan:d,addon:u,featureProposition:c,className:f,type:l,children:m})}],794231)},71049,e=>{"use strict";var r,t=e.i(221628),o=e.i(416340),a=e.i(174617),i=e.i(608652),n=e.i(199786),s=e.i(78892),l=e.i(127200),d=e.i(112466),u=e.i(169525),c=e.i(600317),p=e.i(538469),m="HoverCard",[f,g]=(0,i.createContextScope)(m,[l.createPopperScope]),x=(0,l.createPopperScope)(),[h,b]=f(m),v=e=>{let{__scopeHoverCard:r,children:a,open:i,defaultOpen:s,onOpenChange:d,openDelay:u=700,closeDelay:c=300}=e,p=x(r),f=o.useRef(0),g=o.useRef(0),b=o.useRef(!1),v=o.useRef(!1),[y,w]=(0,n.useControllableState)({prop:i,defaultProp:s??!1,onChange:d,caller:m}),j=o.useCallback(()=>{clearTimeout(g.current),f.current=window.setTimeout(()=>w(!0),u)},[u,w]),_=o.useCallback(()=>{clearTimeout(f.current),b.current||v.current||(g.current=window.setTimeout(()=>w(!1),c))},[c,w]),C=o.useCallback(()=>w(!1),[w]);return o.useEffect(()=>()=>{clearTimeout(f.current),clearTimeout(g.current)},[]),(0,t.jsx)(h,{scope:r,open:y,onOpenChange:w,onOpen:j,onClose:_,onDismiss:C,hasSelectionRef:b,isPointerDownOnContentRef:v,children:(0,t.jsx)(l.Root,{...p,children:a})})};v.displayName=m;var y="HoverCardTrigger",w=o.forwardRef((e,r)=>{let{__scopeHoverCard:o,...i}=e,n=b(y,o),s=x(o);return(0,t.jsx)(l.Anchor,{asChild:!0,...s,children:(0,t.jsx)(c.Primitive.a,{"data-state":n.open?"open":"closed",...i,ref:r,onPointerEnter:(0,a.composeEventHandlers)(e.onPointerEnter,k(n.onOpen)),onPointerLeave:(0,a.composeEventHandlers)(e.onPointerLeave,k(n.onClose)),onFocus:(0,a.composeEventHandlers)(e.onFocus,n.onOpen),onBlur:(0,a.composeEventHandlers)(e.onBlur,n.onClose),onTouchStart:(0,a.composeEventHandlers)(e.onTouchStart,e=>e.preventDefault())})})});w.displayName=y;var j="HoverCardPortal",[_,C]=f(j,{forceMount:void 0}),z=e=>{let{__scopeHoverCard:r,forceMount:o,children:a,container:i}=e,n=b(j,r);return(0,t.jsx)(_,{scope:r,forceMount:o,children:(0,t.jsx)(u.Presence,{present:o||n.open,children:(0,t.jsx)(d.Portal,{asChild:!0,container:i,children:a})})})};z.displayName=j;var N="HoverCardContent",S=o.forwardRef((e,r)=>{let o=C(N,e.__scopeHoverCard),{forceMount:i=o.forceMount,...n}=e,s=b(N,e.__scopeHoverCard);return(0,t.jsx)(u.Presence,{present:i||s.open,children:(0,t.jsx)(E,{"data-state":s.open?"open":"closed",...n,onPointerEnter:(0,a.composeEventHandlers)(e.onPointerEnter,k(s.onOpen)),onPointerLeave:(0,a.composeEventHandlers)(e.onPointerLeave,k(s.onClose)),ref:r})})});S.displayName=N;var E=o.forwardRef((e,i)=>{let{__scopeHoverCard:n,onEscapeKeyDown:d,onPointerDownOutside:u,onFocusOutside:c,onInteractOutside:m,...f}=e,g=b(N,n),h=x(n),v=o.useRef(null),y=(0,s.useComposedRefs)(i,v),[w,j]=o.useState(!1);return o.useEffect(()=>{if(w){let e=document.body;return r=e.style.userSelect||e.style.webkitUserSelect,e.style.userSelect="none",e.style.webkitUserSelect="none",()=>{e.style.userSelect=r,e.style.webkitUserSelect=r}}},[w]),o.useEffect(()=>{if(v.current){let e=()=>{j(!1),g.isPointerDownOnContentRef.current=!1,setTimeout(()=>{document.getSelection()?.toString()!==""&&(g.hasSelectionRef.current=!0)})};return document.addEventListener("pointerup",e),()=>{document.removeEventListener("pointerup",e),g.hasSelectionRef.current=!1,g.isPointerDownOnContentRef.current=!1}}},[g.isPointerDownOnContentRef,g.hasSelectionRef]),o.useEffect(()=>{v.current&&(function(e){let r=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;t.nextNode();)r.push(t.currentNode);return r})(v.current).forEach(e=>e.setAttribute("tabindex","-1"))}),(0,t.jsx)(p.DismissableLayer,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:m,onEscapeKeyDown:d,onPointerDownOutside:u,onFocusOutside:(0,a.composeEventHandlers)(c,e=>{e.preventDefault()}),onDismiss:g.onDismiss,children:(0,t.jsx)(l.Content,{...h,...f,onPointerDown:(0,a.composeEventHandlers)(f.onPointerDown,e=>{e.currentTarget.contains(e.target)&&j(!0),g.hasSelectionRef.current=!1,g.isPointerDownOnContentRef.current=!0}),ref:y,style:{...f.style,userSelect:w?"text":void 0,WebkitUserSelect:w?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})})}),P=o.forwardRef((e,r)=>{let{__scopeHoverCard:o,...a}=e,i=x(o);return(0,t.jsx)(l.Arrow,{...i,...a,ref:r})});function k(e){return r=>"touch"===r.pointerType?void 0:e()}P.displayName="HoverCardArrow",e.s(["Arrow",0,P,"Content",0,S,"HoverCard",0,v,"HoverCardArrow",0,P,"HoverCardContent",0,S,"HoverCardPortal",0,z,"HoverCardTrigger",0,w,"Portal",0,z,"Root",0,v,"Trigger",0,w,"createHoverCardScope",0,g],61413);var T=e.i(61413),T=T,R=e.i(843778);let $=T.Root,L=T.Trigger,D=o.forwardRef(({className:e,align:r="center",animate:o="zoom-in",sideOffset:a=4,...i},n)=>(0,t.jsx)(T.Portal,{children:(0,t.jsx)(T.Content,{ref:n,align:r,sideOffset:a,className:(0,R.cn)("z-50 w-64 rounded-md border bg-overlay p-4 text-popover-foreground shadow-md outline-hidden","zoom-in"===o?"animate-in zoom-in-[99%]":"animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",e),...i})}));D.displayName=T.Content.displayName,e.s(["HoverCard",0,$,"HoverCardContent",0,D,"HoverCardTrigger",0,L],71049)},540203,e=>{"use strict";var r=e.i(26898),t=e.i(125356),o=e.i(795513),a=e.i(234745),i=e.i(280590),n=e.i(2579);async function s({orgSlug:e},r,t){if(!e)throw Error("orgSlug is required");let{error:o,data:i}=await (0,a.get)("/platform/organizations/{slug}/billing/subscription",{params:{path:{slug:e}},signal:r,headers:t});return o&&(0,a.handleError)(o),i}e.s(["useHasAccessToProjectLevelPermissions",0,e=>{let{hasAccess:r}=(0,i.useCheckEntitlements)("project_scoped_roles",e);return r},"useOrgSubscriptionQuery",0,({orgSlug:e},{enabled:a=!0,...i}={})=>{let{can:l}=(0,n.useAsyncCheckPermissions)(r.PermissionAction.BILLING_READ,"stripe.subscriptions");return(0,t.useQuery)({queryKey:o.subscriptionKeys.orgSubscription(e),queryFn:({signal:r})=>s({orgSlug:e},r),enabled:a&&l&&void 0!==e,staleTime:36e5,...i})}])}]);

//# debugId=099f64f1-84c7-90f4-ba32-ee6def6ef378
//# sourceMappingURL=0abain7586fay.js.map