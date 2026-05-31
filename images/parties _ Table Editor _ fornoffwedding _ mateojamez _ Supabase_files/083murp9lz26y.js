;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="098c2b82-57b2-9305-88b2-43ea5bea6794")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,202003,e=>{"use strict";e.s(["buildStudioPageTitle",0,e=>{let t=[e.entity,e.section,e.surface,e.project,e.org,e.brand],r=[];return t.forEach(e=>{let t=(e=>{if(void 0===e)return;let t=e.trim().replace(/\s+/g," ");if(0!==t.length)return t.length<=60?t:`${t.slice(0,59).trimEnd()}…`})(e);if(!t)return;let a=r[r.length-1];(void 0===a||a.toLowerCase()!==t.toLowerCase())&&r.push(t)}),r.join(" | ")}])},22194,e=>{"use strict";var t=e.i(221628);e.i(481541);var r=e.i(665265),r=r,a=e.i(188139),i=e.i(416340),o=e.i(843778);e.s(["ProfileImage",0,({alt:e,src:n,placeholder:s,className:l})=>{let[d,u]=(0,i.useState)(!1);return n&&!d?(0,t.jsx)(a.default,{alt:e??"",src:n,width:"24",height:"24",className:(0,o.cn)("aspect-square bg-foreground rounded-full object-cover",l),onError:()=>u(!0)}):s??(0,t.jsx)("figure",{className:(0,o.cn)("bg-foreground rounded-full flex items-center justify-center",l),children:(0,t.jsx)(r.default,{size:18,strokeWidth:1.5,className:"text-background"})})}],22194)},95053,e=>{"use strict";var t=e.i(221628),r=e.i(766181),a=e.i(416340),i=e.i(843778),o=e.i(20482),n=e.i(737018),s=e.i(282410);let l=(0,r.cva)("relative grid gap-10",{variants:{size:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},align:{left:"",right:""},responsive:{true:"",false:""},layout:{horizontal:"flex flex-col gap-2 md:grid md:grid-cols-12",vertical:"flex flex-col gap-2",flex:"flex flex-row gap-3","flex-row-reverse":"flex flex-col-reverse gap-2 md:gap-6 md:flex-row-reverse md:justify-between"},flex:{true:"",false:""}},compoundVariants:[{layout:"flex",align:"right",className:"justify-between"},{layout:"flex-row-reverse",align:"right",className:"justify-between"}],defaultVariants:{}}),d=(0,r.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"flex flex-col gap-2 col-span-4",vertical:"flex flex-row gap-2 justify-between",flex:"flex flex-col gap-0 min-w-0","flex-row-reverse":"flex flex-col min-w-0 grow"},labelLayout:{horizontal:"",vertical:"","":""}},compoundVariants:[{flex:!0,align:"left",className:"order-2"},{flex:!0,align:"right",className:"order-1"},{layout:["vertical","flex"],labelLayout:void 0,flex:!1,className:"flex flex-row gap-2 justify-between"},{layout:"horizontal",className:"flex flex-col gap-2"}],defaultVariants:{}}),u=(0,r.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"order-1",right:"order-2"},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:"order-1"},{flex:!0,align:"right",className:"order-2"},{layout:["vertical","flex"],className:"col-span-12"},{layout:"horizontal",align:"left",className:"col-span-8"},{layout:"horizontal",align:"right",className:"text-right"}],defaultVariants:{}}),c=(0,r.cva)("text-foreground-lighter leading-normal",{variants:{size:{...s.SIZE.text},layout:{vertical:"mt-2",horizontal:"mt-2",flex:"","flex-row-reverse":""}},defaultVariants:{}}),m=(0,r.cva)("text-foreground-muted",{variants:{size:{...s.SIZE.text}},defaultVariants:{}}),g=(0,r.cva)("text-foreground-muted",{variants:{size:{...s.SIZE.text}},defaultVariants:{}}),f=(0,r.cva)("text-foreground-muted",{variants:{size:{...s.SIZE.text}},defaultVariants:{}}),p=(0,r.cva)("",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:""},{flex:!0,align:"right",className:"order-last"},{layout:"flex-row-reverse",className:"flex flex-col justify-center items-start md:items-end shrink-0 md:w-1/2 xl:w-2/5 [&>div]:md:w-full"}]}),x=(0,r.cva)("",{variants:{nonBoxInput:{true:"",false:""},label:{true:"",false:""},layout:{vertical:"",horizontal:"","flex-row-reverse":""}},compoundVariants:[{nonBoxInput:!0,label:!0,layout:"vertical",className:"my-3"},{nonBoxInput:!0,label:!0,layout:"horizontal",className:"my-3 md:mt-0 mb-3"}],defaultVariants:{}}),h=a.default.forwardRef(({align:e="left",className:r,description:a,id:s,label:h,labelOptional:b,layout:v="vertical",style:y,labelLayout:w,size:j="medium",beforeLabel:_,afterLabel:z,nonBoxInput:N=!h,hideMessage:C=!1,isReactForm:k,error:$,...S},P)=>{let E="flex"===v||"flex-row-reverse"===v,q=!!(h||_||z),F=k&&!C?(0,t.jsx)(o.FormMessage,{className:(0,i.cn)("mt-2 transition-all duration-300 ease-in-out","flex-row-reverse"===v&&"mt-0"),"data-formlayout-id":"message"}):$&&!C?(0,t.jsx)("p",{className:(0,i.cn)("mt-2 text-sm text-destructive","flex-row-reverse"===v&&"mt-0"),children:$}):null,T=a&&k?(0,t.jsx)(o.FormDescription,{className:(0,i.cn)(c({size:j,layout:v})),"data-formlayout-id":"description",id:`${s}-description`,children:a}):a?(0,t.jsx)("p",{className:(0,i.cn)(c({size:j,layout:v}),"text-sm text-foreground-light"),"data-formlayout-id":"description",children:a}):null,D=()=>(0,t.jsxs)(t.Fragment,{children:[_&&(0,t.jsx)("span",{className:(0,i.cn)(m({size:j})),id:s+"-before","data-formlayout-id":"beforeLabel",children:(0,t.jsx)("span",{children:_})}),(0,t.jsx)("span",{children:h}),z&&(0,t.jsx)("span",{className:(0,i.cn)(g({size:j})),id:s+"-after","data-formlayout-id":"afterLabel",children:z})]});return(0,t.jsxs)("div",{ref:P,...S,className:(0,i.cn)(l({size:j,flex:E,align:e,layout:v}),r),children:[E&&(0,t.jsxs)("div",{className:(0,i.cn)(p({flex:E,align:e,layout:v})),children:[S.children,"flex-row-reverse"===v&&F]}),q||b||"horizontal"===v?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:(0,i.cn)(d({align:e,labelLayout:w,flex:E,layout:v})),"data-formlayout-id":"labelContainer",children:[q&&k?(0,t.jsx)(o.FormLabel,{className:"text-foreground flex gap-2 items-center wrap-break-word","data-formlayout-id":"formLabel",htmlFor:S.name||s,children:(0,t.jsx)(D,{})}):(0,t.jsx)(n.Label,{className:"text-foreground flex gap-2 items-center wrap-break-word leading-normal","data-formlayout-id":"label",htmlFor:S.name||s,children:(0,t.jsx)(D,{})}),b&&(0,t.jsx)("span",{className:(0,i.cn)(f({size:j})),id:s+"-optional","data-formlayout-id":"labelOptional",children:b}),E&&(0,t.jsxs)(t.Fragment,{children:[T,"flex-row-reverse"!==v&&F]})]})}):null,!E&&(0,t.jsx)("div",{className:(0,i.cn)(u({align:e,layout:v})),style:y,"data-formlayout-id":"dataContainer",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:(0,i.cn)(x({nonBoxInput:N,label:h,layout:v})),"data-formlayout-id":"nonBoxInputContainer",children:S.children}),F,T]})})]})});e.s(["FormLayout",0,h])},538482,e=>{"use strict";var t=e.i(221628),r=e.i(416340),a=e.i(20482),i=e.i(95053);let o=(0,r.forwardRef)(({...e},r)=>(0,t.jsx)(a.FormItem,{children:(0,t.jsx)(i.FormLayout,{ref:r,isReactForm:!0,...e,children:e.children})}));o.displayName="FormItemLayout",e.s(["FormItemLayout",0,o])},344580,e=>{"use strict";var t=e.i(67318),r=function(e,r,a){if(e&&"reportValidity"in e){var i=(0,t.get)(a,r);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},a=function(e,t){var a=function(a){var i=t.fields[a];i&&i.ref&&"reportValidity"in i.ref?r(i.ref,a,e):i.refs&&i.refs.forEach(function(t){return r(t,a,e)})};for(var i in t.fields)a(i)},i=function(e,r){r.shouldUseNativeValidation&&a(e,r);var i={};for(var s in e){var l=(0,t.get)(r.fields,s),d=Object.assign(e[s]||{},{ref:l&&l.ref});if(n(r.names||Object.keys(e),s)){var u=Object.assign({},o((0,t.get)(i,s)));(0,t.set)(u,"root",d),(0,t.set)(i,s,u)}else(0,t.set)(i,s,d)}return i},o=function(e){return Array.isArray(e)?e.filter(Boolean):[]},n=function(e,t){return e.some(function(e){return e.startsWith(t+".")})},s=function(e,r){for(var a={};e.length;){var i=e[0],o=i.code,n=i.message,s=i.path.join(".");if(!a[s])if("unionErrors"in i){var l=i.unionErrors[0].errors[0];a[s]={message:l.message,type:l.code}}else a[s]={message:n,type:o};if("unionErrors"in i&&i.unionErrors.forEach(function(t){return t.errors.forEach(function(t){return e.push(t)})}),r){var d=a[s].types,u=d&&d[i.code];a[s]=(0,t.appendErrors)(s,r,a,o,u?[].concat(u,i.message):i.message)}e.shift()}return a};e.s(["zodResolver",0,function(e,t,r){return void 0===r&&(r={}),function(o,n,l){try{return Promise.resolve(function(i){try{var n=Promise.resolve(e["sync"===r.mode?"parse":"parseAsync"](o,t)).then(function(e){return l.shouldUseNativeValidation&&a({},l),{errors:{},values:r.raw?o:e}})}catch(e){return i(e)}return n&&n.then?n.then(void 0,i):n}(function(e){if(null!=e.errors)return{values:{},errors:i(s(e.errors,!l.shouldUseNativeValidation&&"all"===l.criteriaMode),l)};throw e}))}catch(e){return Promise.reject(e)}}}],344580)},938933,e=>{"use strict";var t=e.i(416340);let r={bg:{brand:{primary:"bg-purple-600",secondary:"bg-purple-200"}},text:{brand:"text-purple-600",body:"text-foreground-light",title:"text-foreground"},border:{brand:"border-brand-600",primary:"border-default",secondary:"border-secondary",alternative:"border-alternative"},placeholder:"placeholder-foreground-muted",focus:`
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
    `}},o=(0,t.createContext)({theme:i});e.s(["default",0,function(e){let{theme:{[e]:r}}=(0,t.useContext)(o);return JSON.parse(r=JSON.stringify(r).replace(/\\n/g,"").replace(/\s\s+/g," "))}],938933)},148210,e=>{"use strict";var t=e.i(125356),r=e.i(416340),a=e.i(224649),i=e.i(234745),o=e.i(265735);async function n({organizationId:e},t){if(!e)throw Error("organizationId is required");let{data:r,error:a}=await (0,i.get)("/platform/integrations/github/connections",{params:{query:{organization_id:e}},signal:t});return a&&(0,i.handleError)(a),r.connections}let s=({organizationId:e},{enabled:r=!0,...i}={})=>(0,t.useQuery)({queryKey:a.integrationKeys.githubConnectionsList(e),queryFn:({signal:t})=>n({organizationId:e},t),enabled:r&&void 0!==e,staleTime:18e5,...i});e.s(["useGitHubConnectionsQuery",0,s,"useProjectGitHubConnectionQuery",0,({ref:e})=>{let{data:t}=(0,o.useSelectedOrganizationQuery)(),{data:a,...i}=s({organizationId:t?.id},{enabled:!!e&&!!t?.id});return{data:(0,r.useMemo)(()=>a?.find(t=>t.project.ref===e),[a,e]),...i}}])},236134,e=>{"use strict";var t=e.i(221628),r=e.i(606479),a=e.i(837710),i=e.i(613580),o=e.i(938933);let n=({id:e,disabled:n,className:s,children:l,header:d,visible:u,open:c,size:m="medium",loading:g,align:f="right",hideFooter:p=!1,customFooter:x,onConfirm:h,onCancel:b,confirmText:v="Confirm",cancelText:y="Cancel",triggerElement:w,defaultOpen:j,tooltip:_,...z})=>{let N=(0,o.default)("sidepanel"),C=x||(0,t.jsxs)("div",{className:N.footer,children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.Button,{disabled:g,type:"default",onClick:()=>b?b():null,children:y})}),!!h&&(0,t.jsxs)(i.Tooltip,{children:[(0,t.jsx)(i.TooltipTrigger,{asChild:!0,children:(0,t.jsx)("span",{className:"inline-block",children:(0,t.jsx)(a.Button,{htmlType:"submit",disabled:n||g,loading:g,onClick:h,children:v})})}),void 0!==_&&(0,t.jsx)(i.TooltipContent,{side:"bottom",children:_})]})]});c=c||u;let{onOpenAutoFocus:k,onCloseAutoFocus:$,onEscapeKeyDown:S,onPointerDownOutside:P,onInteractOutside:E}=z;return(0,t.jsxs)(r.Dialog.Root,{open:c,onOpenChange:function(e){void 0!==u&&!e&&b&&b()},defaultOpen:j,children:[w&&(0,t.jsx)(r.Dialog.Trigger,{asChild:!0,children:w}),(0,t.jsxs)(r.Dialog.Portal,{children:[(0,t.jsx)(r.Dialog.Overlay,{className:N.overlay}),(0,t.jsxs)(r.Dialog.Content,{className:[N.base,N.size[m],N.align[f],s&&s].join(" "),onOpenAutoFocus:k,onCloseAutoFocus:$,onEscapeKeyDown:S,onPointerDownOutside:P,onInteractOutside:e=>{e.target?.closest("#toast")&&e.preventDefault(),E&&E(e)},...z,children:[d&&(0,t.jsx)("header",{className:N.header,children:d}),(0,t.jsx)("div",{className:N.contents,children:l}),!p&&C]})]})]})};n.Content=function({children:e,className:r}){let a=(0,o.default)("sidepanel");return(0,t.jsx)("div",{className:[a.content,r].join(" ").trim(),children:e})},n.Separator=function(){let e=(0,o.default)("sidepanel");return(0,t.jsx)("div",{className:e.separator})},e.s(["default",0,n])},539013,e=>{"use strict";var t=e.i(236134);e.s(["SidePanel",()=>t.default])},980533,e=>{"use strict";e.s(["getPathSegment",0,function(e,t){return e.split("/")[t]},"getPathnameWithoutQuery",0,function(e,t){return null==e?t:e.split(/[?#]/)[0]??t}])},417403,e=>{"use strict";var t=e.i(907019);e.s(["default",0,t])},793595,e=>{"use strict";var t=e.i(125356),r=e.i(711950),a=e.i(234745);async function i({slug:e},t){if(!e)throw Error("slug is required");let[r,o]=await Promise.all([(0,a.get)("/platform/organizations/{slug}/members",{params:{path:{slug:e}},signal:t}),(0,a.get)("/platform/organizations/{slug}/members/invitations",{params:{path:{slug:e}},signal:t})]),{data:n,error:s}=r,{data:l,error:d}=o;return s&&(0,a.handleError)(s),d&&(0,a.handleError)(d),[...n,...l.invitations.map(e=>({...{invited_at:e.invited_at,invited_id:e.id,mfa_enabled:!1,username:e.invited_email.slice(0,1),primary_email:e.invited_email},role_ids:[e.role_id]}))]}e.s(["useOrganizationMembersQuery",0,({slug:e},{enabled:a=!0,...o}={})=>(0,t.useQuery)({queryKey:r.organizationKeys.members(e),queryFn:({signal:t})=>i({slug:e},t),enabled:a&&void 0!==e,...o})])},617976,e=>{"use strict";e.s(["organizationKeys",0,{rolesV2:e=>["organization-members",e,"roles-v2"],invitations:e=>["organization-members",e,"invitations"],invitation:(e,t)=>["organization-members",e,"invitations",t],token:(e,t)=>["organization-members",e,"token",t]}])},794231,388531,781894,e=>{"use strict";var t=e.i(221628),r=e.i(26898);e.i(128328);var a=e.i(657588),i=e.i(158639),o=e.i(561978),n=e.i(837710),s=e.i(215312),l=e.i(344580),d=e.i(416340),u=e.i(67318),c=e.i(739114),m=e.i(587433),g=e.i(253214),f=e.i(20482),p=e.i(511541),x=e.i(613580),h=e.i(538482),b=e.i(417403),v=e.i(125356),y=e.i(617976),w=e.i(234745);let j=["Owner","Administrator","Developer","Read-only"];async function _({slug:e},t){if(!e)throw Error("slug is required");let{data:r,error:a}=await (0,w.get)("/platform/organizations/{slug}/roles",{params:{path:{slug:e}},headers:{Version:2},signal:t});return a&&(0,w.handleError)(a),r}let z=({slug:e},{enabled:t=!0,...r}={})=>(0,v.useQuery)({queryKey:y.organizationKeys.rolesV2(e),queryFn:({signal:t})=>_({slug:e},t),enabled:t&&void 0!==e,select:e=>({...e,org_scoped_roles:e.org_scoped_roles.sort((e,t)=>j.indexOf(e.name)-j.indexOf(t.name))}),...r});e.s(["useOrganizationRolesV2Query",0,z],388531);var N=e.i(793595),C=e.i(705541);async function k({slug:e,plan:t,note:r}){if(!e)throw Error("Slug is required");let{data:a,error:i}=await (0,w.post)("/platform/organizations/{slug}/billing/upgrade-request",{params:{path:{slug:e}},body:{requested_plan:t,note:r}});return i&&(0,w.handleError)(i),a}var $=e.i(265735),S=e.i(635494),P=e.i(967052);let E=b.default.object({note:b.default.string().optional()}),q="request-upgrade-form",F=({block:e=!1,plan:r="Pro",addon:a,featureProposition:i,children:o,className:s,type:b="primary"})=>{let[v,y]=(0,d.useState)(!1),w=(0,P.useTrack)(),{data:j}=(0,S.useSelectedProjectQuery)(),{data:_}=(0,$.useSelectedOrganizationQuery)(),F=_?.slug,T=_?.plan?.id,D="free"===T,{data:O=[]}=(0,N.useOrganizationMembersQuery)({slug:_?.slug}),{data:R}=z({slug:_?.slug}),V=R?.org_scoped_roles??[],{mutate:B,isPending:I}=(({onSuccess:e,onError:t,...r}={})=>(0,C.useMutation)({mutationFn:e=>k(e),async onSuccess(t,r,a){await e?.(t,r,a)},async onError(e,r,a){void 0===t?c.toast.error(`Failed to send upgrade request: ${e.message}`):t(e,r,a)},...r}))({onSuccess:()=>{w("request_upgrade_submitted",{requestedPlan:r,addon:a,currentPlan:T}),c.toast.success("Successfully sent request to billing owners!"),y(!1)}}),L="pitr"===a?"PITR":"customDomain"===a?"Custom domain":"ipv4"===a?"dedicated IPv4 address":"",A=j?`for the project "${j?.name}"`:_?`for the organization "${_.name}"`:"",M="spendCap"===a?"disable spend cap":"computeSize"===a?"change the compute size":`enable the ${L} add-on`,Q=a?"spendCap"===a?"Request to disable spend cap":"computeSize"===a?"Request to change compute size":`Request to enable the ${L} add-on`:`Request an upgrade for the ${r} Plan`,K=o||(a?"spendCap"===a?"Request to disable spend cap":"computeSize"===a?"Request to change compute":"Request to enable addon":`Request upgrade to ${r}`),U={note:a?`We'd like to ${D?"upgrade to Pro and ":""}${M} ${A} so that we can ${i}`:`We'd like to upgrade to the ${r} plan ${i?`to ${i} `:""}${A}`},W=(0,u.useForm)({resolver:(0,l.zodResolver)(E),defaultValues:U,values:U}),H=O.filter(e=>{let t=e.role_ids.map(e=>V.find(t=>t.id===e)?.name).filter(Boolean);return!e.invited_id&&(t.includes("Owner")||t.includes("Administrator"))}),G=async e=>{if(!F)return console.error("Slug is required");B({slug:F,plan:r,note:e.note})};return(0,t.jsxs)(g.Dialog,{open:v,onOpenChange:e=>{e&&w("request_upgrade_modal_opened",{requestedPlan:r,addon:a,currentPlan:T,featureProposition:i}),y(e)},children:[(0,t.jsx)(g.DialogTrigger,{asChild:!0,children:(0,t.jsx)(n.Button,{block:e,type:b,className:s,children:K})}),(0,t.jsx)(g.DialogContent,{children:(0,t.jsx)(f.Form,{...W,children:(0,t.jsxs)("form",{id:q,onSubmit:W.handleSubmit(G),children:[(0,t.jsxs)(g.DialogHeader,{children:[(0,t.jsx)(g.DialogTitle,{children:Q}),(0,t.jsx)(g.DialogDescription,{children:"Let your organization's billing owners know your interest in this"})]}),(0,t.jsx)(g.DialogSectionSeparator,{}),(0,t.jsxs)(g.DialogSection,{className:"flex flex-col gap-y-6",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,t.jsx)("p",{className:"text-sm",children:"Your request will be sent to the following emails, who are billing owners of your organization:"}),(0,t.jsxs)("div",{className:"text-sm flex gap-x-2",children:[(0,t.jsx)("p",{children:H.slice(0,2).map(e=>e.primary_email).join(", ")}),H.length>2&&(0,t.jsxs)(x.Tooltip,{children:[(0,t.jsx)(x.TooltipTrigger,{tabIndex:-1,children:(0,t.jsx)(m.Badge,{children:"+1 others"})}),(0,t.jsx)(x.TooltipContent,{side:"bottom",children:(0,t.jsx)("ul",{className:"",children:H.slice(2).map(e=>(0,t.jsx)("li",{children:e.primary_email},e.gotrue_id))})})]})]})]}),(0,t.jsx)(f.FormField,{control:W.control,name:"note",render:({field:e})=>(0,t.jsx)(h.FormItemLayout,{name:"note",label:"Add a note to your request (optional)",layout:"vertical",children:(0,t.jsx)(f.FormControl,{children:(0,t.jsx)(p.TextArea,{id:"note",...e,rows:3,placeholder:a?"spendCap"===a?"e.g. We need to disabled spend cap on this project to do something":"e.g. We need to enable this add-on to do something with the project":"e.g. We need to upgrade to the Pro plan to use this feature"})})})})]}),(0,t.jsxs)(g.DialogFooter,{children:[(0,t.jsx)(n.Button,{type:"default",disabled:I,onClick:()=>y(!1),children:"Cancel"}),(0,t.jsx)(n.Button,{htmlType:"submit",form:q,loading:I,children:"Submit request"})]})]})})})]})};e.s(["RequestUpgradeToBillingOwners",0,F],781894);var T=e.i(196621),D=e.i(2579),O=e.i(912793);let R="<Specify which plan to upgrade to: Pro | Team | Enterprise>";e.s(["PLAN_REQUEST_EMPTY_PLACEHOLDER",0,R,"UpgradePlanButton",0,({source:e,variant:l="primary",plan:d="Pro",addon:u,featureProposition:c,disabled:m,children:g,className:f,slug:p,onClick:x})=>{let{ref:h}=(0,i.useParams)(),{data:b}=(0,$.useSelectedOrganizationQuery)(),v=b?.plan?.id==="free",y=p??b?.slug??"_",w=(0,a.useFlag)("disableProjectCreationAndUpdate"),{billingAll:j}=(0,O.useIsFeatureEnabled)(["billing:all"]),{can:_}=(0,D.useAsyncCheckPermissions)(r.PermissionAction.BILLING_WRITE,"stripe.subscriptions",void 0,{organizationSlug:y}),z=`Enquiry to upgrade ${d?`to ${d} `:""}plan for organization`,N=`Name: ${b?.name}
Slug: ${y}
Requested plan: ${d??R}`,C="spendCap"===u,k=!v&&!!u,S=C?`/org/${y??"_"}/billing?panel=costControl&source=${e}`:k?"computeSize"===u?`/project/${h??"_"}/settings/compute-and-disk`:`/project/${h??"_"}/settings/addons?panel=${u}&source=${e}`:`/org/${y??"_"}/billing?panel=subscriptionPlan&source=${e}`,P=g||(k?"computeSize"===u?"Change compute size":"Enable add-on":`Upgrade to ${d}`),E=j?(0,t.jsx)(o.default,{href:S,children:P}):(0,t.jsx)(T.SupportLink,{queryParams:{orgSlug:y,category:"Plan_upgrade",subject:z,message:N},children:P});return _?w?(0,t.jsx)(s.ButtonTooltip,{disabled:!0,type:l,className:f,tooltip:{content:{side:"bottom",text:"Plan changes are currently disabled, our engineers are working on a fix"}},children:P}):(0,t.jsx)(n.Button,{asChild:!0,type:l,disabled:m,className:f,onClick:x,children:E}):(0,t.jsx)(F,{plan:d,addon:u,featureProposition:c,className:f,type:l,children:g})}],794231)},235458,e=>{"use strict";var t=e.i(221628),r=e.i(843778),a=e.i(710483),i=e.i(513826),o=e.i(794231);e.s(["UpgradeToPro",0,({icon:e,primaryText:n,secondaryText:s,plan:l="Pro",addon:d,featureProposition:u,buttonText:c,source:m="upgrade",disabled:g=!1,fullWidth:f=!1,layout:p="horizontal",variant:x="primary",className:h,docsUrl:b})=>(0,t.jsx)(a.Admonition,{type:"default",icon:e,layout:p,title:n,description:s,className:(0,r.cn)(f&&"border-0 rounded-none border-b",h),actions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.UpgradePlanButton,{plan:l,addon:d,source:m,featureProposition:u,disabled:g,variant:x,children:c}),!!b&&(0,t.jsx)(i.DocsButton,{href:b})]})})])},592383,e=>{"use strict";var t=e.i(221628),r=e.i(279962),a=e.i(861833),i=e.i(843778),o=e.i(937942);let n=({children:e})=>(0,t.jsx)("h3",{className:"mb-1",children:e}),s=({children:e})=>(0,t.jsx)("code",{className:"text-code-inline",children:e}),l=({href:e,children:r})=>(0,t.jsx)(o.InlineLink,{href:e??"/",children:r});e.s(["Markdown",0,({children:e,className:o,content:d="",extLinks:u=!1,...c})=>(0,t.jsx)("div",{className:(0,i.cn)("text-sm",o),children:(0,t.jsx)(r.default,{remarkPlugins:[a.default],components:{h3:n,code:s,a:l},...c,children:e??d})})])},466472,e=>{"use strict";var t=e.i(221628),r=e.i(416340),a=e.i(837710),i=e.i(843778),o=e.i(253214),n=e.i(710483);let s=(0,r.forwardRef)(({title:e,description:s,size:l="small",visible:d,onCancel:u,onConfirm:c,loading:m,cancelLabel:g="Cancel",confirmLabel:f="Submit",confirmLabelLoading:p,alert:x,children:h,variant:b="default",disabled:v,className:y,...w},j)=>{let[_,z]=(0,r.useState)(void 0!==m&&m);(0,r.useEffect)(()=>{d&&void 0===m&&z(!1)},[d]),(0,r.useEffect)(()=>{void 0!==m&&z(m)},[m]);let{title:N,children:C,...k}=x?.base??{},$=x?.title?{title:x.title}:{};return(0,t.jsx)(o.Dialog,{open:d,...w,onOpenChange:()=>{d&&u()},children:(0,t.jsxs)(o.DialogContent,{"aria-describedby":void 0,ref:j,className:"p-0 gap-0 pb-5 block!",size:l,children:[(0,t.jsxs)(o.DialogHeader,{className:(0,i.cn)("border-b"),padding:"small",children:[(0,t.jsx)(o.DialogTitle,{children:e}),s&&(0,t.jsx)(o.DialogDescription,{children:s})]}),x&&(0,t.jsx)(n.Admonition,{type:b,description:x.description,...$,className:"border-x-0 rounded-none -mt-px",...k}),h&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DialogSection,{padding:"small",className:y,children:h}),(0,t.jsx)(o.DialogSectionSeparator,{})]}),(0,t.jsxs)("div",{className:"flex gap-2 px-5 pt-5",children:[(0,t.jsx)(a.Button,{size:"medium",block:!0,type:"default",disabled:_,onClick:()=>u(),children:g}),(0,t.jsx)(a.Button,{block:!0,size:"medium",type:"destructive"===b?"danger":"warning"===b?"warning":"primary",htmlType:"submit",loading:_,disabled:_||v,onClick:e=>{e.preventDefault(),e.stopPropagation(),c(),void 0===m&&z(!0)},className:"truncate",children:_&&p?p:f})]})]})})});s.displayName="ConfirmationModal",e.s(["ConfirmationModal",0,s,"default",0,s])},23370,955658,e=>{"use strict";let t=(0,e.i(679709).default)("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);e.s(["default",0,t],955658),e.s(["Trash",0,t],23370)},891115,e=>{"use strict";let t=(0,e.i(679709).default)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",0,t],891115)},427432,e=>{"use strict";var t=e.i(221628),r=e.i(843778);e.s(["default",0,({active:e,className:a})=>e?(0,t.jsx)("div",{className:(0,r.cn)("logs-shimmering-loader w-full h-0.5",a)}):null])},677436,e=>{"use strict";var t=e.i(705541),r=e.i(964574),a=e.i(739114),i=e.i(522525),o=e.i(234745);async function n({projectRef:e,is_default:t,branchName:r,gitBranch:a,region:i,withData:s,desired_instance_size:l}){let{data:d,error:u}=await (0,o.post)("/v1/projects/{ref}/branches",{params:{path:{ref:e}},body:{is_default:t,branch_name:r,git_branch:a,region:i,with_data:s,desired_instance_size:l}});return u&&(0,o.handleError)(u),d}e.s(["useBranchCreateMutation",0,({onSuccess:e,onError:o,...s}={})=>{let l=(0,r.useQueryClient)();return(0,t.useMutation)({mutationFn:e=>n(e),async onSuccess(t,r,a){let{projectRef:o}=r;await l.invalidateQueries({queryKey:i.branchKeys.list(o)}),await e?.(t,r,a)},async onError(e,t,r){void 0===o?a.toast.error(`Failed to create branch: ${e.message}`):o(e,t,r)},...s})}])},362784,e=>{"use strict";var t=e.i(705541),r=e.i(739114),a=e.i(234745);async function i({repositoryId:e,branchName:t},r){let{data:o,error:n}=await (0,a.get)("/platform/integrations/github/repositories/{repository_id}/branches/{branch_name}",{params:{path:{repository_id:e,branch_name:t}},signal:r});return n&&(0,a.handleError)(n),o}e.s(["useCheckGithubBranchValidity",0,({onSuccess:e,onError:a,...o}={})=>(0,t.useMutation)({mutationFn:e=>i(e),async onSuccess(t,r,a){await e?.(t,r,a)},async onError(e,t,i){void 0===a?r.toast.error(`Failed to check GitHub branch: ${e.message}`):a(e,t,i)},...o})])}]);

//# debugId=098c2b82-57b2-9305-88b2-43ea5bea6794
//# sourceMappingURL=0pm5u55f_odj8.js.map