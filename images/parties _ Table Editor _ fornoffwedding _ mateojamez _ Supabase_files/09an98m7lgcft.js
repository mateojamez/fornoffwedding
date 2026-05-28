;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="b13fb670-d5b2-0fd7-cabf-c53a7cf454d3")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,202003,e=>{"use strict";e.s(["buildStudioPageTitle",0,e=>{let r=[e.entity,e.section,e.surface,e.project,e.org,e.brand],t=[];return r.forEach(e=>{let r=(e=>{if(void 0===e)return;let r=e.trim().replace(/\s+/g," ");if(0!==r.length)return r.length<=60?r:`${r.slice(0,59).trimEnd()}…`})(e);if(!r)return;let a=t[t.length-1];(void 0===a||a.toLowerCase()!==r.toLowerCase())&&t.push(r)}),t.join(" | ")}])},22194,e=>{"use strict";var r=e.i(221628);e.i(481541);var t=e.i(665265),t=t,a=e.i(188139),i=e.i(416340),o=e.i(843778);e.s(["ProfileImage",0,({alt:e,src:l,placeholder:n,className:s})=>{let[d,c]=(0,i.useState)(!1);return l&&!d?(0,r.jsx)(a.default,{alt:e??"",src:l,width:"24",height:"24",className:(0,o.cn)("aspect-square bg-foreground rounded-full object-cover",s),onError:()=>c(!0)}):n??(0,r.jsx)("figure",{className:(0,o.cn)("bg-foreground rounded-full flex items-center justify-center",s),children:(0,r.jsx)(t.default,{size:18,strokeWidth:1.5,className:"text-background"})})}],22194)},95053,e=>{"use strict";var r=e.i(221628),t=e.i(766181),a=e.i(416340),i=e.i(843778),o=e.i(20482),l=e.i(737018),n=e.i(282410);let s=(0,t.cva)("relative grid gap-10",{variants:{size:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},align:{left:"",right:""},responsive:{true:"",false:""},layout:{horizontal:"flex flex-col gap-2 md:grid md:grid-cols-12",vertical:"flex flex-col gap-2",flex:"flex flex-row gap-3","flex-row-reverse":"flex flex-col-reverse gap-2 md:gap-6 md:flex-row-reverse md:justify-between"},flex:{true:"",false:""}},compoundVariants:[{layout:"flex",align:"right",className:"justify-between"},{layout:"flex-row-reverse",align:"right",className:"justify-between"}],defaultVariants:{}}),d=(0,t.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"flex flex-col gap-2 col-span-4",vertical:"flex flex-row gap-2 justify-between",flex:"flex flex-col gap-0 min-w-0","flex-row-reverse":"flex flex-col min-w-0 grow"},labelLayout:{horizontal:"",vertical:"","":""}},compoundVariants:[{flex:!0,align:"left",className:"order-2"},{flex:!0,align:"right",className:"order-1"},{layout:["vertical","flex"],labelLayout:void 0,flex:!1,className:"flex flex-row gap-2 justify-between"},{layout:"horizontal",className:"flex flex-col gap-2"}],defaultVariants:{}}),c=(0,t.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"order-1",right:"order-2"},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:"order-1"},{flex:!0,align:"right",className:"order-2"},{layout:["vertical","flex"],className:"col-span-12"},{layout:"horizontal",align:"left",className:"col-span-8"},{layout:"horizontal",align:"right",className:"text-right"}],defaultVariants:{}}),u=(0,t.cva)("text-foreground-lighter leading-normal",{variants:{size:{...n.SIZE.text},layout:{vertical:"mt-2",horizontal:"mt-2",flex:"","flex-row-reverse":""}},defaultVariants:{}}),p=(0,t.cva)("text-foreground-muted",{variants:{size:{...n.SIZE.text}},defaultVariants:{}}),g=(0,t.cva)("text-foreground-muted",{variants:{size:{...n.SIZE.text}},defaultVariants:{}}),m=(0,t.cva)("text-foreground-muted",{variants:{size:{...n.SIZE.text}},defaultVariants:{}}),f=(0,t.cva)("",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:""},{flex:!0,align:"right",className:"order-last"},{layout:"flex-row-reverse",className:"flex flex-col justify-center items-start md:items-end shrink-0 md:w-1/2 xl:w-2/5 [&>div]:md:w-full"}]}),x=(0,t.cva)("",{variants:{nonBoxInput:{true:"",false:""},label:{true:"",false:""},layout:{vertical:"",horizontal:"","flex-row-reverse":""}},compoundVariants:[{nonBoxInput:!0,label:!0,layout:"vertical",className:"my-3"},{nonBoxInput:!0,label:!0,layout:"horizontal",className:"my-3 md:mt-0 mb-3"}],defaultVariants:{}}),h=a.default.forwardRef(({align:e="left",className:t,description:a,id:n,label:h,labelOptional:b,layout:y="vertical",style:v,labelLayout:S,size:_="medium",beforeLabel:w,afterLabel:R,nonBoxInput:j=!h,hideMessage:I=!1,isReactForm:E,error:P,...z},O)=>{let N="flex"===y||"flex-row-reverse"===y,V=!!(h||w||R),A=E&&!I?(0,r.jsx)(o.FormMessage,{className:(0,i.cn)("mt-2 transition-all duration-300 ease-in-out","flex-row-reverse"===y&&"mt-0"),"data-formlayout-id":"message"}):P&&!I?(0,r.jsx)("p",{className:(0,i.cn)("mt-2 text-sm text-destructive","flex-row-reverse"===y&&"mt-0"),children:P}):null,D=a&&E?(0,r.jsx)(o.FormDescription,{className:(0,i.cn)(u({size:_,layout:y})),"data-formlayout-id":"description",id:`${n}-description`,children:a}):a?(0,r.jsx)("p",{className:(0,i.cn)(u({size:_,layout:y}),"text-sm text-foreground-light"),"data-formlayout-id":"description",children:a}):null,W=()=>(0,r.jsxs)(r.Fragment,{children:[w&&(0,r.jsx)("span",{className:(0,i.cn)(p({size:_})),id:n+"-before","data-formlayout-id":"beforeLabel",children:(0,r.jsx)("span",{children:w})}),(0,r.jsx)("span",{children:h}),R&&(0,r.jsx)("span",{className:(0,i.cn)(g({size:_})),id:n+"-after","data-formlayout-id":"afterLabel",children:R})]});return(0,r.jsxs)("div",{ref:O,...z,className:(0,i.cn)(s({size:_,flex:N,align:e,layout:y}),t),children:[N&&(0,r.jsxs)("div",{className:(0,i.cn)(f({flex:N,align:e,layout:y})),children:[z.children,"flex-row-reverse"===y&&A]}),V||b||"horizontal"===y?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:(0,i.cn)(d({align:e,labelLayout:S,flex:N,layout:y})),"data-formlayout-id":"labelContainer",children:[V&&E?(0,r.jsx)(o.FormLabel,{className:"text-foreground flex gap-2 items-center wrap-break-word","data-formlayout-id":"formLabel",htmlFor:z.name||n,children:(0,r.jsx)(W,{})}):(0,r.jsx)(l.Label,{className:"text-foreground flex gap-2 items-center wrap-break-word leading-normal","data-formlayout-id":"label",htmlFor:z.name||n,children:(0,r.jsx)(W,{})}),b&&(0,r.jsx)("span",{className:(0,i.cn)(m({size:_})),id:n+"-optional","data-formlayout-id":"labelOptional",children:b}),N&&(0,r.jsxs)(r.Fragment,{children:[D,"flex-row-reverse"!==y&&A]})]})}):null,!N&&(0,r.jsx)("div",{className:(0,i.cn)(c({align:e,layout:y})),style:v,"data-formlayout-id":"dataContainer",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:(0,i.cn)(x({nonBoxInput:j,label:h,layout:y})),"data-formlayout-id":"nonBoxInputContainer",children:z.children}),A,D]})})]})});e.s(["FormLayout",0,h])},538482,e=>{"use strict";var r=e.i(221628),t=e.i(416340),a=e.i(20482),i=e.i(95053);let o=(0,t.forwardRef)(({...e},t)=>(0,r.jsx)(a.FormItem,{children:(0,r.jsx)(i.FormLayout,{ref:t,isReactForm:!0,...e,children:e.children})}));o.displayName="FormItemLayout",e.s(["FormItemLayout",0,o])},344580,e=>{"use strict";var r=e.i(67318),t=function(e,t,a){if(e&&"reportValidity"in e){var i=(0,r.get)(a,t);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},a=function(e,r){var a=function(a){var i=r.fields[a];i&&i.ref&&"reportValidity"in i.ref?t(i.ref,a,e):i.refs&&i.refs.forEach(function(r){return t(r,a,e)})};for(var i in r.fields)a(i)},i=function(e,t){t.shouldUseNativeValidation&&a(e,t);var i={};for(var n in e){var s=(0,r.get)(t.fields,n),d=Object.assign(e[n]||{},{ref:s&&s.ref});if(l(t.names||Object.keys(e),n)){var c=Object.assign({},o((0,r.get)(i,n)));(0,r.set)(c,"root",d),(0,r.set)(i,n,c)}else(0,r.set)(i,n,d)}return i},o=function(e){return Array.isArray(e)?e.filter(Boolean):[]},l=function(e,r){return e.some(function(e){return e.startsWith(r+".")})},n=function(e,t){for(var a={};e.length;){var i=e[0],o=i.code,l=i.message,n=i.path.join(".");if(!a[n])if("unionErrors"in i){var s=i.unionErrors[0].errors[0];a[n]={message:s.message,type:s.code}}else a[n]={message:l,type:o};if("unionErrors"in i&&i.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),t){var d=a[n].types,c=d&&d[i.code];a[n]=(0,r.appendErrors)(n,t,a,o,c?[].concat(c,i.message):i.message)}e.shift()}return a};e.s(["zodResolver",0,function(e,r,t){return void 0===t&&(t={}),function(o,l,s){try{return Promise.resolve(function(i){try{var l=Promise.resolve(e["sync"===t.mode?"parse":"parseAsync"](o,r)).then(function(e){return s.shouldUseNativeValidation&&a({},s),{errors:{},values:t.raw?o:e}})}catch(e){return i(e)}return l&&l.then?l.then(void 0,i):l}(function(e){if(null!=e.errors)return{values:{},errors:i(n(e.errors,!s.shouldUseNativeValidation&&"all"===s.criteriaMode),s)};throw e}))}catch(e){return Promise.reject(e)}}}],344580)},938933,e=>{"use strict";var r=e.i(416340);let t={bg:{brand:{primary:"bg-purple-600",secondary:"bg-purple-200"}},text:{brand:"text-purple-600",body:"text-foreground-light",title:"text-foreground"},border:{brand:"border-brand-600",primary:"border-default",secondary:"border-secondary",alternative:"border-alternative"},placeholder:"placeholder-foreground-muted",focus:`
    outline-hidden
    focus:ring-current focus:ring-2
  `,"focus-visible":`
    outline-hidden
    transition-all
    outline-0
    focus-visible:outline-4
    focus-visible:outline-offset-1
  `,size:{text:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},padding:{tiny:"px-2.5 py-1",small:"px-3 py-2",medium:"px-4 py-2",large:"px-4 py-2",xlarge:"px-6 py-3"}},overlay:{base:"absolute inset-0 bg-background opacity-50",container:"fixed inset-0 transition-opacity"}},a={tiny:`${t.size.text.tiny} ${t.size.padding.tiny}`,small:`${t.size.text.small} ${t.size.padding.small}`,medium:`${t.size.text.medium} ${t.size.padding.medium}`,large:`${t.size.text.large} ${t.size.padding.large}`,xlarge:`${t.size.text.xlarge} ${t.size.padding.xlarge}`},i={card:{base:`
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
    `}},o=(0,r.createContext)({theme:i});e.s(["default",0,function(e){let{theme:{[e]:t}}=(0,r.useContext)(o);return JSON.parse(t=JSON.stringify(t).replace(/\\n/g,"").replace(/\s\s+/g," "))}],938933)},417403,e=>{"use strict";var r=e.i(907019);e.s(["default",0,r])},793595,e=>{"use strict";var r=e.i(125356),t=e.i(711950),a=e.i(234745);async function i({slug:e},r){if(!e)throw Error("slug is required");let[t,o]=await Promise.all([(0,a.get)("/platform/organizations/{slug}/members",{params:{path:{slug:e}},signal:r}),(0,a.get)("/platform/organizations/{slug}/members/invitations",{params:{path:{slug:e}},signal:r})]),{data:l,error:n}=t,{data:s,error:d}=o;return n&&(0,a.handleError)(n),d&&(0,a.handleError)(d),[...l,...s.invitations.map(e=>({...{invited_at:e.invited_at,invited_id:e.id,mfa_enabled:!1,username:e.invited_email.slice(0,1),primary_email:e.invited_email},role_ids:[e.role_id]}))]}e.s(["useOrganizationMembersQuery",0,({slug:e},{enabled:a=!0,...o}={})=>(0,r.useQuery)({queryKey:t.organizationKeys.members(e),queryFn:({signal:r})=>i({slug:e},r),enabled:a&&void 0!==e,...o})])},617976,e=>{"use strict";e.s(["organizationKeys",0,{rolesV2:e=>["organization-members",e,"roles-v2"],invitations:e=>["organization-members",e,"invitations"],invitation:(e,r)=>["organization-members",e,"invitations",r],token:(e,r)=>["organization-members",e,"token",r]}])},794231,388531,781894,e=>{"use strict";var r=e.i(221628),t=e.i(26898);e.i(128328);var a=e.i(657588),i=e.i(158639),o=e.i(561978),l=e.i(837710),n=e.i(215312),s=e.i(344580),d=e.i(416340),c=e.i(67318),u=e.i(739114),p=e.i(587433),g=e.i(253214),m=e.i(20482),f=e.i(511541),x=e.i(613580),h=e.i(538482),b=e.i(417403),y=e.i(125356),v=e.i(617976),S=e.i(234745);let _=["Owner","Administrator","Developer","Read-only"];async function w({slug:e},r){if(!e)throw Error("slug is required");let{data:t,error:a}=await (0,S.get)("/platform/organizations/{slug}/roles",{params:{path:{slug:e}},headers:{Version:2},signal:r});return a&&(0,S.handleError)(a),t}let R=({slug:e},{enabled:r=!0,...t}={})=>(0,y.useQuery)({queryKey:v.organizationKeys.rolesV2(e),queryFn:({signal:r})=>w({slug:e},r),enabled:r&&void 0!==e,select:e=>({...e,org_scoped_roles:e.org_scoped_roles.sort((e,r)=>_.indexOf(e.name)-_.indexOf(r.name))}),...t});e.s(["useOrganizationRolesV2Query",0,R],388531);var j=e.i(793595),I=e.i(705541);async function E({slug:e,plan:r,note:t}){if(!e)throw Error("Slug is required");let{data:a,error:i}=await (0,S.post)("/platform/organizations/{slug}/billing/upgrade-request",{params:{path:{slug:e}},body:{requested_plan:r,note:t}});return i&&(0,S.handleError)(i),a}var P=e.i(265735),z=e.i(635494),O=e.i(967052);let N=b.default.object({note:b.default.string().optional()}),V="request-upgrade-form",A=({block:e=!1,plan:t="Pro",addon:a,featureProposition:i,children:o,className:n,type:b="primary"})=>{let[y,v]=(0,d.useState)(!1),S=(0,O.useTrack)(),{data:_}=(0,z.useSelectedProjectQuery)(),{data:w}=(0,P.useSelectedOrganizationQuery)(),A=w?.slug,D=w?.plan?.id,W="free"===D,{data:B=[]}=(0,j.useOrganizationMembersQuery)({slug:w?.slug}),{data:C}=R({slug:w?.slug}),M=C?.org_scoped_roles??[],{mutate:k,isPending:L}=(({onSuccess:e,onError:r,...t}={})=>(0,I.useMutation)({mutationFn:e=>E(e),async onSuccess(r,t,a){await e?.(r,t,a)},async onError(e,t,a){void 0===r?u.toast.error(`Failed to send upgrade request: ${e.message}`):r(e,t,a)},...t}))({onSuccess:()=>{S("request_upgrade_submitted",{requestedPlan:t,addon:a,currentPlan:D}),u.toast.success("Successfully sent request to billing owners!"),v(!1)}}),F="pitr"===a?"PITR":"customDomain"===a?"Custom domain":"ipv4"===a?"dedicated IPv4 address":"",$=_?`for the project "${_?.name}"`:w?`for the organization "${w.name}"`:"",q="spendCap"===a?"disable spend cap":"computeSize"===a?"change the compute size":`enable the ${F} add-on`,T=a?"spendCap"===a?"Request to disable spend cap":"computeSize"===a?"Request to change compute size":`Request to enable the ${F} add-on`:`Request an upgrade for the ${t} Plan`,U=o||(a?"spendCap"===a?"Request to disable spend cap":"computeSize"===a?"Request to change compute":"Request to enable addon":`Request upgrade to ${t}`),G={note:a?`We'd like to ${W?"upgrade to Pro and ":""}${q} ${$} so that we can ${i}`:`We'd like to upgrade to the ${t} plan ${i?`to ${i} `:""}${$}`},K=(0,c.useForm)({resolver:(0,s.zodResolver)(N),defaultValues:G,values:G}),H=B.filter(e=>{let r=e.role_ids.map(e=>M.find(r=>r.id===e)?.name).filter(Boolean);return!e.invited_id&&(r.includes("Owner")||r.includes("Administrator"))}),Q=async e=>{if(!A)return console.error("Slug is required");k({slug:A,plan:t,note:e.note})};return(0,r.jsxs)(g.Dialog,{open:y,onOpenChange:e=>{e&&S("request_upgrade_modal_opened",{requestedPlan:t,addon:a,currentPlan:D,featureProposition:i}),v(e)},children:[(0,r.jsx)(g.DialogTrigger,{asChild:!0,children:(0,r.jsx)(l.Button,{block:e,type:b,className:n,children:U})}),(0,r.jsx)(g.DialogContent,{children:(0,r.jsx)(m.Form,{...K,children:(0,r.jsxs)("form",{id:V,onSubmit:K.handleSubmit(Q),children:[(0,r.jsxs)(g.DialogHeader,{children:[(0,r.jsx)(g.DialogTitle,{children:T}),(0,r.jsx)(g.DialogDescription,{children:"Let your organization's billing owners know your interest in this"})]}),(0,r.jsx)(g.DialogSectionSeparator,{}),(0,r.jsxs)(g.DialogSection,{className:"flex flex-col gap-y-6",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-y-2",children:[(0,r.jsx)("p",{className:"text-sm",children:"Your request will be sent to the following emails, who are billing owners of your organization:"}),(0,r.jsxs)("div",{className:"text-sm flex gap-x-2",children:[(0,r.jsx)("p",{children:H.slice(0,2).map(e=>e.primary_email).join(", ")}),H.length>2&&(0,r.jsxs)(x.Tooltip,{children:[(0,r.jsx)(x.TooltipTrigger,{tabIndex:-1,children:(0,r.jsx)(p.Badge,{children:"+1 others"})}),(0,r.jsx)(x.TooltipContent,{side:"bottom",children:(0,r.jsx)("ul",{className:"",children:H.slice(2).map(e=>(0,r.jsx)("li",{children:e.primary_email},e.gotrue_id))})})]})]})]}),(0,r.jsx)(m.FormField,{control:K.control,name:"note",render:({field:e})=>(0,r.jsx)(h.FormItemLayout,{name:"note",label:"Add a note to your request (optional)",layout:"vertical",children:(0,r.jsx)(m.FormControl,{children:(0,r.jsx)(f.TextArea,{id:"note",...e,rows:3,placeholder:a?"spendCap"===a?"e.g. We need to disabled spend cap on this project to do something":"e.g. We need to enable this add-on to do something with the project":"e.g. We need to upgrade to the Pro plan to use this feature"})})})})]}),(0,r.jsxs)(g.DialogFooter,{children:[(0,r.jsx)(l.Button,{type:"default",disabled:L,onClick:()=>v(!1),children:"Cancel"}),(0,r.jsx)(l.Button,{htmlType:"submit",form:V,loading:L,children:"Submit request"})]})]})})})]})};e.s(["RequestUpgradeToBillingOwners",0,A],781894);var D=e.i(196621),W=e.i(2579),B=e.i(912793);let C="<Specify which plan to upgrade to: Pro | Team | Enterprise>";e.s(["PLAN_REQUEST_EMPTY_PLACEHOLDER",0,C,"UpgradePlanButton",0,({source:e,variant:s="primary",plan:d="Pro",addon:c,featureProposition:u,disabled:p,children:g,className:m,slug:f,onClick:x})=>{let{ref:h}=(0,i.useParams)(),{data:b}=(0,P.useSelectedOrganizationQuery)(),y=b?.plan?.id==="free",v=f??b?.slug??"_",S=(0,a.useFlag)("disableProjectCreationAndUpdate"),{billingAll:_}=(0,B.useIsFeatureEnabled)(["billing:all"]),{can:w}=(0,W.useAsyncCheckPermissions)(t.PermissionAction.BILLING_WRITE,"stripe.subscriptions",void 0,{organizationSlug:v}),R=`Enquiry to upgrade ${d?`to ${d} `:""}plan for organization`,j=`Name: ${b?.name}
Slug: ${v}
Requested plan: ${d??C}`,I="spendCap"===c,E=!y&&!!c,z=I?`/org/${v??"_"}/billing?panel=costControl&source=${e}`:E?"computeSize"===c?`/project/${h??"_"}/settings/compute-and-disk`:`/project/${h??"_"}/settings/addons?panel=${c}&source=${e}`:`/org/${v??"_"}/billing?panel=subscriptionPlan&source=${e}`,O=g||(E?"computeSize"===c?"Change compute size":"Enable add-on":`Upgrade to ${d}`),N=_?(0,r.jsx)(o.default,{href:z,children:O}):(0,r.jsx)(D.SupportLink,{queryParams:{orgSlug:v,category:"Plan_upgrade",subject:R,message:j},children:O});return w?S?(0,r.jsx)(n.ButtonTooltip,{disabled:!0,type:s,className:m,tooltip:{content:{side:"bottom",text:"Plan changes are currently disabled, our engineers are working on a fix"}},children:O}):(0,r.jsx)(l.Button,{asChild:!0,type:s,disabled:p,className:m,onClick:x,children:N}):(0,r.jsx)(A,{plan:d,addon:c,featureProposition:u,className:m,type:s,children:g})}],794231)},871895,965371,e=>{"use strict";var r=e.i(221628),t=e.i(843778);e.s(["ComputeBadge",0,function({infraComputeSize:e,className:a,icon:i,...o}){let l=e?.toLocaleLowerCase()==="micro"||e?.toLocaleLowerCase()==="nano",n=!!e;return(0,r.jsxs)("div",{className:(0,t.cn)("inline-flex items-center justify-center rounded-sm text-center font-mono uppercase","whitespace-nowrap font-medium tracking-[0.06em] text-[11px] leading-[1.1] px-[5.5px] py-[3px]","transition-all",n?l?"bg-surface-75/50 group-data-[state=open]:bg-surface-75/75 text-foreground-light border border-strong":"bg-brand/10 group-data-[state=open]:bg-brand/20 text-brand-600 border border-brand-500":"bg-surface-75 group-data-[state=open]:bg-surface-75/20 text-foreground-light border border-strong","group-data-[state=open]:ring-2",l?"group-data-[state=open]:ring-foreground-muted/20":"group-data-[state=open]:ring-brand/20",a),...o,children:[e,i&&(0,r.jsx)("span",{className:"flex items-center",children:i})]})}],871895),e.i(10429);var a=e.i(837508);e.s(["getCloudProviderArchitecture",0,function(e){switch(e){case a.PROVIDERS.AWS.id:return"ARM";case a.PROVIDERS.FLY.id:return"x86 64-bit";default:return""}}],965371)},31563,e=>{"use strict";var r=e.i(125356),t=e.i(711950),a=e.i(234745);async function i({slug:e},r){if(!e)throw Error("slug is required");let{data:t,error:o}=await (0,a.get)("/platform/organizations/{slug}/members/reached-free-project-limit",{params:{path:{slug:e}},signal:r});return o&&(0,a.handleError)(o),t}e.s(["useFreeProjectLimitCheckQuery",0,({slug:e},{enabled:a=!0,...o}={})=>(0,r.useQuery)({queryKey:t.organizationKeys.freeProjectLimitCheck(e),queryFn:({signal:r})=>i({slug:e},r),enabled:a&&void 0!==e,...o})])},466472,e=>{"use strict";var r=e.i(221628),t=e.i(416340),a=e.i(837710),i=e.i(843778),o=e.i(253214),l=e.i(710483);let n=(0,t.forwardRef)(({title:e,description:n,size:s="small",visible:d,onCancel:c,onConfirm:u,loading:p,cancelLabel:g="Cancel",confirmLabel:m="Submit",confirmLabelLoading:f,alert:x,children:h,variant:b="default",disabled:y,className:v,...S},_)=>{let[w,R]=(0,t.useState)(void 0!==p&&p);(0,t.useEffect)(()=>{d&&void 0===p&&R(!1)},[d]),(0,t.useEffect)(()=>{void 0!==p&&R(p)},[p]);let{title:j,children:I,...E}=x?.base??{},P=x?.title?{title:x.title}:{};return(0,r.jsx)(o.Dialog,{open:d,...S,onOpenChange:()=>{d&&c()},children:(0,r.jsxs)(o.DialogContent,{"aria-describedby":void 0,ref:_,className:"p-0 gap-0 pb-5 block!",size:s,children:[(0,r.jsxs)(o.DialogHeader,{className:(0,i.cn)("border-b"),padding:"small",children:[(0,r.jsx)(o.DialogTitle,{children:e}),n&&(0,r.jsx)(o.DialogDescription,{children:n})]}),x&&(0,r.jsx)(l.Admonition,{type:b,description:x.description,...P,className:"border-x-0 rounded-none -mt-px",...E}),h&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.DialogSection,{padding:"small",className:v,children:h}),(0,r.jsx)(o.DialogSectionSeparator,{})]}),(0,r.jsxs)("div",{className:"flex gap-2 px-5 pt-5",children:[(0,r.jsx)(a.Button,{size:"medium",block:!0,type:"default",disabled:w,onClick:()=>c(),children:g}),(0,r.jsx)(a.Button,{block:!0,size:"medium",type:"destructive"===b?"danger":"warning"===b?"warning":"primary",htmlType:"submit",loading:w,disabled:w||y,onClick:e=>{e.preventDefault(),e.stopPropagation(),u(),void 0===p&&R(!0)},className:"truncate",children:w&&f?f:m})]})]})})});n.displayName="ConfirmationModal",e.s(["ConfirmationModal",0,n,"default",0,n])},567558,e=>{"use strict";var r=e.i(221628),t=e.i(26898),a=e.i(416340),i=e.i(837710),o=e.i(710483),l=e.i(196621),n=e.i(967052);let s=({projectRef:e,subject:a,error:o})=>(0,r.jsx)(i.Button,{asChild:!0,type:"default",className:"w-min",children:(0,r.jsx)(l.SupportLink,{queryParams:{category:t.SupportCategories.DASHBOARD_BUG,projectRef:e,subject:a,error:o?.message},children:"Contact support"})}),d=({projectRef:e,subject:t,description:i="Try refreshing your browser, but if the issue persists for more than a few minutes, please reach out to us via support.",error:l,className:d,showIcon:c=!0,layout:u="responsive",showInstructions:p=!0,showErrorPrefix:g=!0,children:m,additionalActions:f,hideContactSupport:x=!1})=>{let h=(0,n.useTrack)(),b=(0,a.useRef)(!1),y=l?.message?.includes("503")?"503 Service Temporarily Unavailable":l?.message;return(0,a.useEffect)(()=>{!b.current&&(b.current=!0,.1>Math.random()&&h("dashboard_error_created",{source:"admonition"}))},[h]),(0,r.jsx)(o.Admonition,{type:"warning",layout:f?"vertical":u,showIcon:c,title:t,description:(0,r.jsxs)(r.Fragment,{children:[l?.message&&(0,r.jsxs)("p",{children:[g&&"Error: ",y]}),p&&(0,r.jsx)("p",{children:i}),m]}),actions:x?f??null:f?(0,r.jsxs)(r.Fragment,{children:[f,(0,r.jsx)(s,{projectRef:e,subject:t,error:l})]}):(0,r.jsx)(s,{projectRef:e,subject:t,error:l}),className:d})};e.s(["AlertError",0,d,"default",0,d])},746301,e=>{"use strict";var r=e.i(221628),t=e.i(36709),a=e.i(416340),i=e.i(843778),o=e.i(375761),l=e.i(231665);let n=(0,a.forwardRef)(({copy:e,showCopyOnHover:n=!1,icon:s,reveal:d=!1,actions:c,onCopy:u,iconContainerClassName:p,containerClassName:g,size:m="small",...f},x)=>{let[h,b]=(0,a.useState)("Copy"),[y,v]=(0,a.useState)(!0);return(0,r.jsxs)(l.InputGroup,{className:g,children:[(0,r.jsx)(l.InputGroupInput,{ref:x,onFocus:e=>e.target.select(),...f,size:m,onCopy:u,type:d&&y?"password":f.type,disabled:f.disabled,className:f.className,"data-1p-ignore":!0,"data-lpignore":"true","data-form-type":"other","data-bwignore":!0}),s&&(0,r.jsx)(l.InputGroupAddon,{align:"inline-start",children:s}),e||c?(0,r.jsxs)(l.InputGroupAddon,{align:"inline-end",className:"pr-1 has-[>button]:mr-0 has-[>kbd]:mr-0",children:[e&&!(d&&y)?(0,r.jsx)(l.InputGroupButton,{size:"tiny",type:"default",className:(0,i.cn)(n&&"opacity-0 group-hover:opacity-100 transition"),icon:(0,r.jsx)(t.Copy,{size:16,className:"text-foreground-muted"}),onClick:()=>{var e;return e=f.value,void(0,o.copyToClipboard)(e,()=>{b("Copied"),setTimeout(function(){b("Copy")},3e3),u?.()})},children:h}):null,d&&y?(0,r.jsx)(l.InputGroupButton,{size:"tiny",type:"default",onClick:function(){v(!1)},children:"Reveal"}):null,c&&c]}):null]})});e.s(["Input",0,n])},690885,e=>{"use strict";let r=(0,e.i(679709).default)("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);e.s(["Maximize2",0,r],690885)},833063,e=>{"use strict";let r=(0,e.i(679709).default)("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);e.s(["Minimize2",0,r],833063)},761755,e=>{"use strict";var r=e.i(469449),t=e.i(817729);e.i(128328);var a=e.i(86086),i=e.i(657588),o=e.i(124416),l=e.i(10642),n=e.i(10429),s=e.i(234745);async function d(e){if(!(0,l.hasConsented)()||!n.IS_PLATFORM)return;let{data:r,error:t}=await (0,s.post)("/platform/telemetry/feature-flags/track",{body:e});return t&&(0,s.handleError)(t),r}let c=e=>0===Object.keys(e).length;e.s(["usePHFlag",0,function(e){let l=(0,i.useFeatureFlags)(),[n,s]=(0,o.useLocalStorageQuery)(`ph_${e}`,""),u=l.posthog,p=u[e];if(!a.IS_PLATFORM)return!1;if(!c(u)){if(!c(u)&&void 0===p)return void console.error(`Flag key "${e}" does not exist in PostHog flag store`);if(n!==p)try{d({feature_flag_name:e,feature_flag_value:p}),s(p)}catch(e){r.withScope(r=>{r.setTag("type","phTrackFailure"),t.captureException(e)}),console.error(e.message)}return p}}],761755)},372598,295057,715801,467619,e=>{"use strict";var r=e.i(221628),t=e.i(416340),a=e.i(587433),i=e.i(130843),o=e.i(538482);e.i(187688),e.i(427138);var l=e.i(434934);e.i(10429);var n=e.i(837508);let s={micro:{label:"Micro",ram:"1 GB",cpu:"2-core",priceHourly:.01344,priceMonthly:10,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id,n.PROVIDERS.FLY.id]},small:{label:"Small",ram:"2 GB",cpu:"2-core",priceHourly:.0206,priceMonthly:15,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id,n.PROVIDERS.FLY.id]},medium:{label:"Medium",ram:"4 GB",cpu:"2-core",priceHourly:.0822,priceMonthly:60,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id,n.PROVIDERS.FLY.id]},large:{label:"Large",ram:"8 GB",cpu:"2-core",priceHourly:.1517,priceMonthly:110,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id,n.PROVIDERS.FLY.id]},xlarge:{label:"XL",ram:"16 GB",cpu:"4-core",priceHourly:.2877,priceMonthly:210,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id,n.PROVIDERS.FLY.id]},"2xlarge":{label:"2XL",ram:"32 GB",cpu:"8-core",priceHourly:.562,priceMonthly:410,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id,n.PROVIDERS.FLY.id]},"4xlarge":{label:"4XL",ram:"64 GB",cpu:"16-core",priceHourly:1.32,priceMonthly:960,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id,n.PROVIDERS.FLY.id]},"8xlarge":{label:"8XL",ram:"128 GB",cpu:"32-core",priceHourly:2.562,priceMonthly:1870,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id]},"12xlarge":{label:"12XL",ram:"192 GB",cpu:"48-core",priceHourly:3.836,priceMonthly:2800,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id]},"16xlarge":{label:"16XL",ram:"256 GB",cpu:"64-core",priceHourly:5.12,priceMonthly:3730,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id]},"24xlarge":{label:"24XL",ram:"384 GB",cpu:"96-core",priceHourly:9.73,priceMonthly:7100,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id]},"24xlarge_optimized_cpu":{label:"24XL - Optimized CPU",ram:"192 GB",cpu:"96-core",priceHourly:8.9,priceMonthly:6500,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id]},"24xlarge_optimized_memory":{label:"24XL - Optimized Memory",ram:"768 GB",cpu:"96-core",priceHourly:13.84,priceMonthly:10100,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id]},"24xlarge_high_memory":{label:"24XL - High Memory",ram:"1536 GB",cpu:"96-core",priceHourly:21.91,priceMonthly:16e3,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id]},"48xlarge":{label:"48XL",ram:"768 GB",cpu:"192-core",priceHourly:19.47,priceMonthly:14200,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id]},"48xlarge_optimized_cpu":{label:"48XL - Optimized CPU",ram:"384 GB",cpu:"192-core",priceHourly:17.8,priceMonthly:13e3,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id]},"48xlarge_optimized_memory":{label:"48XL - Optimized Memory",ram:"1536 GB",cpu:"192-core",priceHourly:27.68,priceMonthly:20200,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id]},"48xlarge_high_memory":{label:"48XL - High Memory",ram:"3072 GB",cpu:"192-core",priceHourly:43.84,priceMonthly:32e3,cloud_providers:[n.PROVIDERS.AWS.id,n.PROVIDERS.AWS_K8S.id,n.PROVIDERS.AWS_NIMBUS.id]}};function d(e){return l.SMART_REGION_TO_EXACT_REGION_MAP.get(e)??e}e.s(["instanceSizeSpecs",0,s],295057),e.s(["getAvailableRegions",0,function(e){switch(e){case"AWS":case"AWS_K8S":return l.AWS_REGIONS;case"AWS_NIMBUS":return{EAST_US:l.AWS_REGIONS.EAST_US};case"FLY":return l.FLY_REGIONS;default:throw Error("Invalid cloud provider")}},"instanceLabel",0,e=>s[e]?.label||"Micro","monthlyInstancePrice",0,e=>s[e]?.priceMonthly||10,"smartRegionToExactRegion",0,d],715801);var c=e.i(125356),u=e.i(78162),p=e.i(234745);async function g({cloudProvider:e,dbRegion:r,organizationSlug:t},a){if(!t)throw Error("organizationSlug is required");let{data:i,error:o}=await (0,p.post)("/platform/organizations/{slug}/available-versions",{params:{path:{slug:t}},body:{provider:e,region:r},signal:a});return o&&(0,p.handleError)(o),i}let m=({cloudProvider:e,dbRegion:r,organizationSlug:t},{enabled:a=!0,...i}={})=>(0,c.useQuery)({queryKey:u.configKeys.projectCreationPostgresVersions(t,e,r),queryFn:({signal:a})=>g({organizationSlug:t,cloudProvider:e,dbRegion:r},a),enabled:a&&void 0!==t&&"_"!==t&&!!r,...i});async function f({projectRef:e},r){if(!e)throw Error("projectRef is required");let{data:t,error:a}=await (0,p.get)("/platform/projects/{ref}/restore/versions",{params:{path:{ref:e}},signal:r});return a&&(0,p.handleError)(a),t}e.s(["useAvailableOrioleImageVersion",0,({cloudProvider:e,dbRegion:r,organizationSlug:t},{enabled:a=!0}={})=>{let{data:i}=m({cloudProvider:e,dbRegion:r,organizationSlug:t},{enabled:a,select:e=>(e?.available_versions??[]).find(e=>"17-oriole"===e.postgres_engine)});return i},"useProjectCreationPostgresVersionsQuery",0,m],467619);var x=e.i(635494);let h=({postgres_engine:e,release_channel:r})=>`${e}|${r}`;e.s(["PostgresVersionSelector",0,({cloudProvider:e,dbRegion:l,organizationSlug:n,field:s,form:p,type:g="create",layout:b="horizontal",label:y="Postgres version"})=>{let{data:v}=(0,x.useSelectedProjectQuery)(),{data:S,isPending:_,isSuccess:w}=m({cloudProvider:e,dbRegion:d(l),organizationSlug:n},{enabled:"create"===g}),{data:R,isPending:j}=(({projectRef:e},{enabled:r=!0,...t}={})=>(0,c.useQuery)({queryKey:u.configKeys.projectUnpausePostgresVersions(e),queryFn:({signal:r})=>f({projectRef:e},r),enabled:r&&void 0!==e,...t}))({projectRef:v?.ref},{enabled:"unpause"===g}),I=("create"===g?S?.available_versions??[]:R?.available_versions??[]).sort((e,r)=>e.version.localeCompare(r.version)).reverse(),{postgresVersionSelection:E}=p.watch();return(0,t.useEffect)(()=>{if(I.length>0){let e=I.find(e=>"ga"===e.release_channel),r=e?h(e):h(I[0]);p.setValue("postgresVersionSelection",r)}},[w,I,p]),(0,r.jsx)(o.FormItemLayout,{label:y,layout:b,children:(0,r.jsxs)(i.Select,{value:E,onValueChange:s.onChange,disabled:0===I.length||"create"===g&&_||"unpause"===g&&j,children:[(0,r.jsx)(i.SelectTrigger,{className:"[&>:nth-child(1)]:w-full [&>:nth-child(1)]:flex [&>:nth-child(1)]:items-start",children:(0,r.jsx)(i.SelectValue,{placeholder:"Select a Postgres version for your project"})}),(0,r.jsx)(i.SelectContent,{children:(0,r.jsx)(i.SelectGroup,{children:I.map(e=>{let t=e.version.split("supabase-postgres-")[1].replace("-orioledb","");return(0,r.jsx)(i.SelectItem,{value:h(e),className:"w-full [&>:nth-child(2)]:w-full",children:(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between w-full",children:[(0,r.jsx)("span",{className:"text-foreground",children:t}),(0,r.jsxs)("div",{className:"flex flex-row gap-x-2",children:["ga"!==e.release_channel&&(0,r.jsx)(a.Badge,{variant:"warning",children:e.release_channel}),e.postgres_engine.includes("oriole")&&(0,r.jsx)(a.Badge,{variant:"default",children:"OrioleDB"})]})]})},h(e))})})})]})})},"extractPostgresVersionDetails",0,e=>{if(!e)return{postgresEngine:void 0,releaseChannel:void 0};let[r,t]=e.split("|");return{postgresEngine:r,releaseChannel:t}}],372598)}]);

//# debugId=b13fb670-d5b2-0fd7-cabf-c53a7cf454d3
//# sourceMappingURL=0v0n4g7.4-mqg.js.map