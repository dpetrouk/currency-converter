(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(84).default)("382a115c",content,!0,{sourceMap:!1})},190:function(e,t,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(84).default)("3444deec",content,!0,{sourceMap:!1})},204:function(e,t,n){"use strict";var r=n(8),o=(n(47),n(49)),l={methods:Object(o.b)(["fetchCurrenciesData"]),created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchCurrenciesData();case 2:case"end":return t.stop()}}),t)})))()}},d=(n(280),n(50)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("nav",{staticClass:"menu general-padding"},[t("ul",[t("li",[t("NuxtLink",{attrs:{to:"/"}},[e._v("Калькулятор")])],1),e._v(" "),t("li",[t("NuxtLink",{attrs:{to:"/rate"}},[e._v("Курс рубля")])],1)])]),e._v(" "),t("main",{staticClass:"page-container general-padding"},[t("Nuxt")],1)])}),[],!1,null,null,null);t.a=component.exports},206:function(e,t,n){n(207),e.exports=n(208)},267:function(e,t,n){var r=n(83),o=n(205),l=n(268),d=n(269),m=n(270),c=n(271),f=n(272),h=n(273),x=n(274),w=n(275),y=n(276),v=n(277),z=n(278),k=n(279),C=r((function(i){return i[1]})),R=o(l),S=o(d),j=o(m),M=o(c),F=o(f),T=o(h),I=o(x),_=o(w),A=o(y),U=o(v),N=o(z),O=o(k);C.push([e.i,"/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #a1a1aa;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #a1a1aa;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n \n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}*, ::before, ::after{border-color:currentColor;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);--tw-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.static{position:static;}.absolute{position:absolute;}.m-0{margin:0px;}.-mx-4{margin-left:-1rem;margin-right:-1rem;}.mt-6{margin-top:1.5rem;}.mt-5{margin-top:1.25rem;}.mb-20{margin-bottom:5rem;}.mt-1{margin-top:0.25rem;}.ml-5{margin-left:1.25rem;}.mt-2{margin-top:0.5rem;}.mb-36{margin-bottom:9rem;}.mt-3{margin-top:0.75rem;}.mr-6{margin-right:1.5rem;}.block{display:block;}.inline-block{display:inline-block;}.inline{display:inline;}.flex{display:flex;}.grid{display:grid;}.h-10\\.5{height:2.625rem;}.h-10{height:2.5rem;}.h-auto{height:auto;}.max-h-48{max-height:12rem;}.w-16{width:4rem;}.w-10{width:2.5rem;}.w-full{width:100%;}.w-13{width:3.25rem;}.cursor-pointer{cursor:pointer;}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none;}.list-none{list-style-type:none;}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr));}.grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr));}.grid-rows-fr-auto{grid-template-rows:1fr auto;}.grid-rows-1{grid-template-rows:repeat(1, minmax(0, 1fr));}.grid-rows-2{grid-template-rows:repeat(2, minmax(0, 1fr));}.grid-rows-auto-3{grid-template-rows:repeat(3, auto);}.grid-rows-3{grid-template-rows:repeat(3, minmax(0, 1fr));}.grid-rows-auto-2{grid-template-rows:repeat(2, auto);}.flex-col{flex-direction:column;}.justify-start{justify-content:flex-start;}.justify-between{justify-content:space-between;}.gap-5{gap:1.25rem;}.gap-y-6{row-gap:1.5rem;}.gap-x-0{-moz-column-gap:0px;column-gap:0px;}.gap-y-0{row-gap:0px;}.gap-x-2{-moz-column-gap:0.5rem;column-gap:0.5rem;}.gap-y-4{row-gap:1rem;}.gap-y-3{row-gap:0.75rem;}.gap-y-5{row-gap:1.25rem;}.space-y-4 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse));}.self-start{align-self:flex-start;}.self-center{align-self:center;}.overflow-auto{overflow:auto;}.overflow-x-hidden{overflow-x:hidden;}.rounded-2xl{border-radius:1rem;}.rounded-md{border-radius:0.375rem;}.rounded-none{border-radius:0px;}.rounded{border-radius:0.25rem;}.rounded-tr-2\\.25xl{border-top-right-radius:1.125rem;}.rounded-bl-2\\.25xl{border-bottom-left-radius:1.125rem;}.rounded-tl-2\\.25xl{border-top-left-radius:1.125rem;}.rounded-br-2\\.25xl{border-bottom-right-radius:1.125rem;}.border{border-width:1px;}.border-b{border-bottom-width:1px;}.border-l{border-left-width:1px;}.border-r{border-right-width:1px;}.border-azureish-white{--tw-border-opacity:1;border-color:rgba(223, 225, 240, var(--tw-border-opacity));}.border-gainsboro{--tw-border-opacity:1;border-color:rgba(223, 223, 223, var(--tw-border-opacity));}.border-primary{--tw-border-opacity:1;border-color:rgba(15, 68, 113, var(--tw-border-opacity));}.bg-secondary{--tw-bg-opacity:1;background-color:rgba(238, 245, 255, var(--tw-bg-opacity));}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));}.bg-gray{--tw-bg-opacity:1;background-color:rgba(248, 248, 248, var(--tw-bg-opacity));}.bg-8{background-size:0.5rem;}.bg-10{background-size:0.625rem;}.object-cover{-o-object-fit:cover;object-fit:cover;}.p-5{padding:1.25rem;}.p-6{padding:1.5rem;}.p-0{padding:0px;}.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}.px-4{padding-left:1rem;padding-right:1rem;}.py-4{padding-top:1rem;padding-bottom:1rem;}.pl-4{padding-left:1rem;}.pl-6{padding-left:1.5rem;}.pt-5{padding-top:1.25rem;}.text-left{text-align:left;}.text-center{text-align:center;}.font-roboto{font-family:Roboto, sans-serif;}.text-20{font-size:20px;}.text-13{font-size:13px;}.text-18{font-size:18px;}.text-10{font-size:10px;}.text-24{font-size:24px;}.text-12{font-size:12px;}.text-16{font-size:16px;}.text-14{font-size:14px;}.font-medium{font-weight:500;}.font-normal{font-weight:400;}.font-bold{font-weight:700;}.uppercase{text-transform:uppercase;}.leading-6{line-height:1.5rem;}.leading-4\\.5{line-height:1.125rem;}.leading-4{line-height:1rem;}.leading-3{line-height:.75rem;}.leading-7{line-height:1.75rem;}.leading-5{line-height:1.25rem;}.tracking-wider{letter-spacing:0.05em;}.text-text-main{--tw-text-opacity:1;color:rgba(64, 68, 86, var(--tw-text-opacity));}.text-catalina-blue{--tw-text-opacity:1;color:rgba(9, 48, 120, var(--tw-text-opacity));}.text-primary{--tw-text-opacity:1;color:rgba(15, 68, 113, var(--tw-text-opacity));}.text-text-dark{--tw-text-opacity:1;color:rgba(44, 58, 75, var(--tw-text-opacity));}.text-text-gray-950{--tw-text-opacity:1;color:rgba(17, 17, 17, var(--tw-text-opacity));}.text-text-gray-500{--tw-text-opacity:1;color:rgba(102, 102, 102, var(--tw-text-opacity));}.outline-none{outline:2px solid transparent;outline-offset:2px;}.ring-4{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}.ring-secondary{--tw-ring-opacity:1;--tw-ring-color:rgba(238, 245, 255, var(--tw-ring-opacity));}.ring-opacity-50{--tw-ring-opacity:0.5;}.blur{--tw-blur:blur(8px);filter:var(--tw-filter);}.filter{filter:var(--tw-filter);}.text{line-height:1;letter-spacing:0.025em;}@font-face{font-family:\"Roboto\";font-weight:400;src:url("+R+') format("eot"),url('+S+') format("ttf"),url('+j+') format("woff"),url('+M+') format("woff2")}@font-face{font-family:"Roboto";font-weight:500;src:url('+F+') format("eot"),url('+T+') format("ttf"),url('+I+') format("woff"),url('+_+') format("woff2")}@font-face{font-family:"Roboto";font-weight:700;src:url('+A+') format("eot"),url('+U+') format("ttf"),url('+N+') format("woff"),url('+O+') format("woff2")}@media (min-width: 768px){.md\\:-mx-0{margin-left:0px;margin-right:0px;}.md\\:mt-6{margin-top:1.5rem;}.md\\:mb-32{margin-bottom:8rem;}.md\\:mb-16{margin-bottom:4rem;}.md\\:mt-0{margin-top:0px;}.md\\:ml-5{margin-left:1.25rem;}.md\\:h-14{height:3.5rem;}.md\\:w-22{width:5.5rem;}.md\\:grid-cols-fr-auto{grid-template-columns:1fr auto;}.md\\:grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr));}.md\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.md\\:grid-rows-1{grid-template-rows:repeat(1, minmax(0, 1fr));}.md\\:grid-rows-4{grid-template-rows:repeat(4, minmax(0, 1fr));}.md\\:grid-rows-2{grid-template-rows:repeat(2, minmax(0, 1fr));}.md\\:gap-6{gap:1.5rem;}.md\\:gap-y-0{row-gap:0px;}.md\\:gap-x-5{-moz-column-gap:1.25rem;column-gap:1.25rem;}.md\\:gap-y-2{row-gap:0.5rem;}.md\\:gap-x-0{-moz-column-gap:0px;column-gap:0px;}.md\\:gap-x-18{-moz-column-gap:4.5rem;column-gap:4.5rem;}.md\\:gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem;}.md\\:rounded-2xl{border-radius:1rem;}.md\\:p-7{padding:1.75rem;}.md\\:p-6{padding:1.5rem;}.md\\:px-8{padding-left:2rem;padding-right:2rem;}.md\\:text-26{font-size:26px;}.md\\:text-10{font-size:10px;}.md\\:leading-8{line-height:2rem;}.md\\:leading-3{line-height:.75rem;}}@media (min-width: 1280px){.xl\\:mt-8{margin-top:2rem;}.xl\\:mt-10{margin-top:2.5rem;}.xl\\:mb-20{margin-bottom:5rem;}.xl\\:mt-3{margin-top:0.75rem;}.xl\\:mt-6{margin-top:1.5rem;}.xl\\:ml-6{margin-left:1.5rem;}.xl\\:mb-32{margin-bottom:8rem;}.xl\\:mt-20{margin-top:5rem;}.xl\\:h-29{height:7.25rem;}.xl\\:h-12{height:3rem;}.xl\\:w-29{width:7.25rem;}.xl\\:w-12{width:3rem;}.xl\\:w-14{width:3.5rem;}.xl\\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.xl\\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr));}.xl\\:grid-rows-2{grid-template-rows:repeat(2, minmax(0, 1fr));}.xl\\:grid-rows-1{grid-template-rows:repeat(1, minmax(0, 1fr));}.xl\\:gap-3{gap:0.75rem;}.xl\\:gap-6{gap:1.5rem;}.xl\\:gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem;}.xl\\:gap-x-26{-moz-column-gap:6.5rem;column-gap:6.5rem;}.xl\\:gap-y-4{row-gap:1rem;}.xl\\:gap-x-10{-moz-column-gap:2.5rem;column-gap:2.5rem;}.xl\\:gap-y-8{row-gap:2rem;}.xl\\:rounded-md{border-radius:0.375rem;}.xl\\:rounded-tl-md{border-top-left-radius:0.375rem;}.xl\\:rounded-br-md{border-bottom-right-radius:0.375rem;}.xl\\:rounded-tr-4xl{border-top-right-radius:2rem;}.xl\\:rounded-tr-md{border-top-right-radius:0.375rem;}.xl\\:rounded-bl-4xl{border-bottom-left-radius:2rem;}.xl\\:p-6{padding:1.5rem;}.xl\\:p-10{padding:2.5rem;}.xl\\:p-7{padding:1.75rem;}.xl\\:py-4{padding-top:1rem;padding-bottom:1rem;}.xl\\:px-5{padding-left:1.25rem;padding-right:1.25rem;}.xl\\:px-14{padding-left:3.5rem;padding-right:3.5rem;}.xl\\:pt-8{padding-top:2rem;}.xl\\:text-15{font-size:15px;}.xl\\:text-14{font-size:14px;}.xl\\:text-30{font-size:30px;}.xl\\:text-13{font-size:13px;}.xl\\:text-40{font-size:40px;}.xl\\:text-18{font-size:18px;}.xl\\:text-24{font-size:24px;}.xl\\:text-20{font-size:20px;}.xl\\:text-16{font-size:16px;}.xl\\:leading-5{line-height:1.25rem;}.xl\\:leading-9{line-height:2.25rem;}.xl\\:leading-4{line-height:1rem;}.xl\\:leading-12{line-height:3rem;}.xl\\:leading-6{line-height:1.5rem;}.xl\\:leading-7{line-height:1.75rem;}}@media (min-width: 1600px){.\\32xl\\:mt-10{margin-top:2.5rem;}.\\32xl\\:mb-36{margin-bottom:9rem;}.\\32xl\\:mt-4{margin-top:1rem;}.\\32xl\\:ml-7{margin-left:1.75rem;}.\\32xl\\:mb-24{margin-bottom:6rem;}.\\32xl\\:mt-8{margin-top:2rem;}.\\32xl\\:mt-9{margin-top:2.25rem;}.\\32xl\\:h-36{height:9rem;}.\\32xl\\:h-13{height:3.25rem;}.\\32xl\\:w-36{width:9rem;}.\\32xl\\:w-13{width:3.25rem;}.\\32xl\\:gap-4{gap:1rem;}.\\32xl\\:gap-x-8{-moz-column-gap:2rem;column-gap:2rem;}.\\32xl\\:gap-x-30{-moz-column-gap:7.5rem;column-gap:7.5rem;}.\\32xl\\:space-y-5 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse));}.\\32xl\\:bg-10{background-size:0.625rem;}.\\32xl\\:p-8{padding:2rem;}.\\32xl\\:p-12{padding:3rem;}.\\32xl\\:pl-6{padding-left:1.5rem;}.\\32xl\\:text-34{font-size:34px;}.\\32xl\\:text-18{font-size:18px;}.\\32xl\\:text-36{font-size:36px;}.\\32xl\\:text-16{font-size:16px;}.\\32xl\\:text-52{font-size:52px;}.\\32xl\\:text-24{font-size:24px;}.\\32xl\\:text-32{font-size:32px;}.\\32xl\\:text-14{font-size:14px;}.\\32xl\\:leading-10{line-height:2.5rem;}.\\32xl\\:leading-6{line-height:1.5rem;}.\\32xl\\:leading-5{line-height:1.25rem;}.\\32xl\\:leading-12{line-height:3rem;}.\\32xl\\:leading-15{line-height:3.75rem;}.\\32xl\\:leading-7{line-height:1.75rem;}}',""]),C.locals={},e.exports=C},268:function(e,t,n){e.exports=n.p+"fonts/Roboto-Regular.30b5765.eot"},269:function(e,t,n){e.exports=n.p+"fonts/Roboto-Regular.a8d6ac0.ttf"},270:function(e,t,n){e.exports=n.p+"fonts/Roboto-Regular.31012f9.woff"},271:function(e,t,n){e.exports=n.p+"fonts/Roboto-Regular.a258062.woff2"},272:function(e,t,n){e.exports=n.p+"fonts/Roboto-Medium.f9f0c87.eot"},273:function(e,t,n){e.exports=n.p+"fonts/Roboto-Medium.7429a63.ttf"},274:function(e,t,n){e.exports=n.p+"fonts/Roboto-Medium.b14ca2d.woff"},275:function(e,t,n){e.exports=n.p+"fonts/Roboto-Medium.fc0337b.woff2"},276:function(e,t,n){e.exports=n.p+"fonts/Roboto-Bold.6490694.eot"},277:function(e,t,n){e.exports=n.p+"fonts/Roboto-Bold.75371f5.ttf"},278:function(e,t,n){e.exports=n.p+"fonts/Roboto-Bold.3f2cbde.woff"},279:function(e,t,n){e.exports=n.p+"fonts/Roboto-Bold.6cd35ed.woff2"},280:function(e,t,n){"use strict";n(190)},281:function(e,t,n){var r=n(83)((function(i){return i[1]}));r.push([e.i,"html{font-size:16px}body{margin:0px;overflow-x:hidden;font-family:Roboto, sans-serif;--tw-text-opacity:1;color:rgba(64, 68, 86, var(--tw-text-opacity));-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0,0,0,0)}button,input,optgroup,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}.general-padding{padding-left:1rem;padding-right:1rem}@media (min-width: 768px){.general-padding{padding-left:2rem;padding-right:2rem}}@media (min-width: 1280px){.general-padding{padding-left:3.5rem;padding-right:3.5rem}}@media (min-width: 1600px){.general-padding{padding-left:5rem;padding-right:5rem}}nav.menu{--tw-bg-opacity:1;background-color:rgba(248, 248, 248, var(--tw-bg-opacity))}nav.menu ul{display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;list-style-type:none;justify-content:flex-start;padding-top:1rem;padding-bottom:1rem}nav.menu li{margin-right:1.5rem;display:inline;font-size:12px;font-weight:500;line-height:1rem;--tw-text-opacity:1;color:rgba(102, 102, 102, var(--tw-text-opacity))}nav.menu a.nuxt-link-exact-active{--tw-text-opacity:1;color:rgba(52, 52, 52, var(--tw-text-opacity))}.page-container{padding-top:1.25rem}@media (min-width: 1280px){.page-container{padding-top:2rem}}@media (min-width: 1600px){.page-container{padding-top:2.25rem}}",""]),r.locals={},e.exports=r},282:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return o})),n.d(t,"getters",(function(){return l})),n.d(t,"mutations",(function(){return d})),n.d(t,"actions",(function(){return f}));var r=n(8),o=(n(47),n(37),n(48),n(68),n(34),n(14),n(27),n(32),n(283),n(184),n(81),function(){return{currencies:{}}}),l={getValueOfCurrencyInRUB:function(e){return function(t){var n=e.currencies[t];if(n)return n.value/n.nominal}},hasCurrencyCode:function(e){return function(t){return!!e.currencies[t]}},currenciesCodes:function(e){return Object.keys(e.currencies)},currenciesCodesAndNames:function(e,t){return t.currenciesCodes.map((function(code){return"".concat(code," - ").concat(e.currencies[code].nameSingular)}))},firstThreeCurrencies:function(e,t){return t.currenciesCodes.map((function(code){return e.currencies[code]})).filter((function(e,i){return i<3}))}},d={updateCurrencies:function(e,t){e.currencies=t}},m={"Армянских драмов":"Армянский драм","Венгерских форинтов":"Венгерский форинт","Гонконгских долларов":"Гонконгский доллар","Датских крон":"Датская крона","Индийских рупий":"Индийская рупия","Казахстанских тенге":"Казахстанский тенге","Киргизских сомов":"Киргизский сом","Китайских юаней":"Китайский юань","Молдавских леев":"Молдавский лей","Норвежских крон":"Норвежская крона","Таджикских сомони":"Таджикский сомони","Турецких лир":"Турецкая лира","Узбекских сумов":"Узбекский сум","Украинских гривен":"Украинская гривна","Чешских крон":"Чешская крона","Шведских крон":"Шведская крона","Южноафриканских рэндов":"Южноафриканский рэнд","Японских иен":"Японская иена"},c=function(e){for(var t,n={},r=0,o=Object.keys(e);r<o.length;r++){var l=o[r],d=e[l],c=d.CharCode,f=d.Nominal,h=d.Name,x=d.Value;n[l]={charCode:c,name:h,nameSingular:(t=h,m[t]||t),value:x,nominal:f}}return n},f={fetchCurrenciesData:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,l,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.commit,"https://www.cbr-xml-daily.ru/daily_json.js",d="https://www.cbr-xml-daily.ru/daily_json.js",m=void 0,(m=new URL("https://allorigins.hexlet.app/raw?disableCache=true&url=")).searchParams.set("url",d),o=m.toString(),n.next=5,t.$axios.$get(o);case 5:l=n.sent,data=c(l.Valute),r("updateCurrencies",data);case 8:case"end":return n.stop()}var d,m}),n)})))()}}}},[[206,11,1,12]]]);