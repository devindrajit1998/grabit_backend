(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[3727],{53727:(Wt,mt,x)=>{"use strict";x.r(mt),x.d(mt,{default:()=>ct});var W=x(92132),J=x(21272),wt=x(33544),F=x.n(wt),Y=x(63891),H=x(91120),et=x(43064),k=x(94061),P=x(55506),V=x(51187),I=x.n(V),N=x(13972),at=x(55230),ut=x.n(at);const q=async(f,E)=>{if(!E)return;const{plugins:a=[]}=f,r=[...a.map(s=>s.pluginName)],t=[{name:"DocumentList",module:"ckeditor5-list"},{name:"TextPartLanguage",module:"ckeditor5-language"},{name:"Alignment",module:"ckeditor5-alignment"},{name:"Autosave",module:"ckeditor5-autosave"},{name:"BlockQuote",module:"ckeditor5-block-quote"},{name:"CodeBlock",module:"ckeditor5-code-block"},{name:"Heading",module:"ckeditor5-heading"},{name:"HtmlEmbed",module:"ckeditor5-html-embed"},{name:"GeneralHtmlSupport",module:"ckeditor5-html-support"},{name:"HorizontalLine",module:"ckeditor5-horizontal-line"},{name:"MediaEmbed",module:"ckeditor5-media-embed"},{name:"Image",module:"ckeditor5-image"},{name:"Indent",module:"ckeditor5-indent"},{name:"Link",module:"ckeditor5-link"},{name:"RemoveFormat",module:"ckeditor5-remove-format"},{name:"Table",module:"ckeditor5-table"},{name:"WordCount",module:"ckeditor5-word-count"},{name:"FindAndReplace",module:"ckeditor5-find-and-replace"},{name:"SpecialCharacters",module:"ckeditor5-special-characters"},{name:"PageBreak",module:"ckeditor5-page-break"},{name:"SourceEditing",module:"ckeditor5-source-editing"},{name:"Highlight",module:"ckeditor5-highlight"},{name:"Style",module:"ckeditor5-style"},{name:"ShowBlocks",module:"ckeditor5-show-blocks"}],e=["Bold","Code","Italic","Strikethrough","Subscript","Superscript","Underline"],o=["FontBackgroundColor","FontColor","FontFamily","FontSize"],i=["List","DocumentList"];await Promise.all(t.filter(({name:s})=>r.includes(s)).map(async({module:s})=>await x(58380)(`./${s}/build/translations/${E}.js`).catch(()=>null))),r.some(s=>e.includes(s))&&await x(89320)(`./${E}.js`).catch(()=>null),r.some(s=>i.includes(s))&&await x(43053)(`./${E}.js`).catch(()=>null),r.some(s=>o.includes(s))&&await x(3906)(`./${E}.js`).catch(()=>null)},ht=async f=>{const E=new URLSearchParams(window.location.search),r=Object.fromEntries(E.entries())["plugins[i18n][locale]"],t=P.j2.getUserInfo().preferedLanguage,{ui:e=t||"en",content:o,textPartLanguage:i,ignorei18n:s}=f.language||{};if(r){const c=r.split("-")[0];f.language={ui:typeof f.language=="string"?f.language:e,content:s?o:c,textPartLanguage:i},await q(f,f.language.ui),await q(f,f.language.content)}else typeof f.language=="object"?(await q(f,f.language.ui),await q(f,f.language.content)):typeof f.language=="string"?await q(f,f.language):(f.language=t,await q(f,t))},nt=f=>{const{configs:E,configsOverwrite:a}=globalThis.CKEditorConfig||{};let r;return a?r=E:(r=N.A,E&&Object.keys(E).map(e=>{N.A.hasOwnProperty(e)?(r[e].fields={...N.A[e].field,...E[e].field},r[e].styles=E[e].styles||N.A[e].styles,r[e].editorConfig={...N.A[e].editorConfig,...E[e].editorConfig}):r[e]=E[e]})),I()(r[f])},gt=(f,{responsiveDimensions:E},a)=>{const r=f.editorConfig?.plugins?[...f.editorConfig.plugins.map(t=>t.pluginName)]:[];r.includes("StrapiMediaLib")&&(f.editorConfig.strapiMediaLib={toggle:a}),r.includes("StrapiUploadAdapter")&&(f.editorConfig.strapiUploadAdapter={uploadUrl:`${strapi.backendURL}/upload`,headers:{Authorization:"Bearer "+P.j2.getToken()},backendUrl:strapi.backendURL,responsive:E}),r.includes("WordCount")&&(f.editorConfig.WordCountPlugin=!0)},ft=f=>(0,P.l1)(`/${ut()}/config/${f}`,{method:"GET"}),xt=async(f,E)=>{const a=nt(f),r=await ft("upload");return gt(a,r,E),await ht(a.editorConfig),{currentConfig:a,uploadPluginConfig:r}},_t=(0,Y.AH)`
  .ck {
    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);
    --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
    --ck-color-mention-text: hsl(341, 100%, 30%);
    --ck-color-table-caption-background: hsl(0, 0%, 97%);
    --ck-color-table-caption-text: hsl(0, 0%, 20%);
    --ck-highlight-marker-blue: hsl(201, 97%, 72%);
    --ck-highlight-marker-green: hsl(120, 93%, 68%);
    --ck-highlight-marker-pink: hsl(345, 96%, 73%);
    --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
    --ck-highlight-pen-green: hsl(112, 100%, 27%);
    --ck-highlight-pen-red: hsl(0, 85%, 49%);
    --ck-image-style-spacing: 1.5em;
    --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
    --ck-todo-list-checkmark-size: 16px;
  }

  
  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    top: 64px !important;
  }
  .ck.ck-reset.ck-dropdown__panel.ck-dropdown__panel_sw.ck-dropdown__panel-visible {
    border-radius: 4px;
  }

  .ck-editor__main {
    
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }


    h1 {
      font-size: 2.3em;
    }

    h2 {
      font-size: 1.84em;
    }

    h3 {
      font-size: 1.48em;
    }

    h4 {
      font-size: 1.22em;
    }

    h5 {
      font-size: 1.06em;
    }

    h6 {
      font-size: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2em;
      padding-top: .8em;
      margin-bottom: .4em
    }

    blockquote,
    ol,
    p,
    ul {
      font-size: 1em;
      line-height: 1.6em;
      padding-top: .2em;
      margin-bottom: var(--ck-spacing-large)
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    a {
      text-decoration: none;
      color: #1b3af2;
    }

    a:hover {
      text-decoration: underline;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      transition-property: border-color, box-shadow, max-height;
      transition-timing-function: ease-in-out;
      transition-duration: 0.5s;
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid var(--ck-color-base-border);
        /* border: var(--ck-focus-ring); */
        box-shadow: none;
        transition-property: border-color, box-shadow, max-height;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;
      }
    }

    .ck-focused,
    .ck-blurred {
      overflow-y: auto;
      overflow-x: hidden;
      transition: max-height 0.5s ease-in-out;
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-track {
        background: var(--ck-scroll-track-background);
        border: none;
      }
      ::-webkit-scrollbar-thumb {
        transition: background 2s;
        background: var(--ck-scroll-thumb-background);
        border: 1px solid var(--ck-scroll-thumb-border-color);
      }
      ::-webkit-scrollbar-thumb:hover {
        transition: background 2s;
        background: var(--ck-scroll-thumb-hover-background);
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--ck-scroll-thumb-active-background);
      }
    }
  }

  .ck .ck-source-editing-area textarea{
    color: var(--ck-color-text);
    background-color: var(--ck-color-base-background);
    border: 1px solid var(--ck-color-base-border) !important;
    box-shadow: none !important;
  }

  .ck .ck-block-toolbar-button {
    min-width: 0 !important;
    min-height: 0 !important;
    width: 20px !important;
    height: 25px !important;
    margin-left: -2px !important ;
    
    & svg {
      color: var(--ck-color-text) !important;
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  .ck-word-count {
    margin-top: 0.3rem;
    display: flex;
    justify-content: end;
    gap: 0.3rem;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: lowercase;
    /* color: #b3b3c4; */
  }

  .ck[dir=rtl]{
    .ck-block-toolbar-button {
      margin-left: 2px !important ;
    }
    & + div{
      justify-content: flex-start;
      & > .ck-word-count {
          & > div:first-child{
            order: 2;
          }
          & > div:last-child{
            order: 1;
          }
      }
    }
  }
`,y=(0,Y.AH)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: #e4e3ff !important;
    --ck-focus-ring: 1px solid rgb(73, 69, 255) !important;
    --ck-color-button-default-hover-background: #F0F0FF !important;

    .ck .ck-color-picker-save {
      & > svg {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: rgb(242, 242, 242);
    --ck-scroll-thumb-background: rgb(236, 236, 236);
    --ck-scroll-thumb-border-color: #cdcdf8;
    --ck-scroll-thumb-hover-background: #f0f0ff;
    --ck-scroll-thumb-active-background: #d9d8ff;

    --ck-color-editor-base-text: #001234;
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #dcdce4;
    --ck-color-base-background: #ffffff;
    --ck-custom-background: #ffffff;
    --ck-custom-foreground: #dedede;
    --ck-custom-border: #dcdce4;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #f0f0ff;
    --ck-color-base-active-focus: #e2e2fd;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);

    --ck-color-focus-border: rgb(73, 69, 255);

    --ck-color-text: #32324d;
    --ck-color-shadow-drop: hsla(250, 31%, 80%, 0.1);
    --ck-color-shadow-inner: hsla(250, 31%, 80%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: var(--ck-custom-background);
    --ck-color-button-default-hover-background: #f0f0ff;
    --ck-color-button-default-active-background: #f6f6f9;
    --ck-color-button-default-active-shadow: #dedefb;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: rgb(73, 69, 255);
    --ck-color-button-on-background: #f0f0ff;
    --ck-color-button-on-hover-background: #e6e9fc;
    --ck-color-button-on-active-background: #f6f6f9;
    --ck-color-button-on-active-shadow: #cdcdf8;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(0, 0%, 97%);
    --ck-color-input-disabled-border: rgb(214, 214, 214);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #f4f4fb;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #271fe2;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #cfcffa;
    --ck-color-widget-hover-border: #c9c9e4;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(209, 89%, 33%);
  }
`,d=(0,Y.AH)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: rgba(106, 114, 143, 0.4) !important;
    --ck-focus-ring: 1px solid #4945ff !important;
    --ck-color-button-default-hover-background: #262630 !important;

    .ck .ck-color-picker > svg {
      color: #ffffff !important;
    }
    .ck .ck-color-picker-save {
      & > svg {
        stroke: #ffffff !important;
      }
      & > svg > #primary,
      #primary-2 {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: #3d3d57;
    --ck-scroll-thumb-background: #181826;
    --ck-scroll-thumb-border-color: rgb(70, 70, 70);
    --ck-scroll-thumb-hover-background: #202033;
    --ck-scroll-thumb-active-background: #2b2b45;

    --ck-color-editor-base-text: rgb(236, 236, 236);
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #4a4a6a;
    --ck-color-base-background: #212134;
    --ck-custom-background: #181826;
    --ck-custom-foreground: #26263b;
    --ck-custom-border: #4a4a6a;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-focus-outer-shadow: #212134;

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #2e2e5c;
    --ck-color-base-active-focus: #28284d;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);
    --ck-color-focus-border: #6765bd;
    --ck-color-text: hsl(0, 0%, 93%);
    --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
    --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: rgb(33, 33, 52);

    --ck-color-button-default-hover-background: #262630;
    --ck-color-button-default-active-background: #3c3c47;
    --ck-color-button-default-active-shadow: #3c3c47;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: #7b79ff;
    --ck-color-button-on-background: #2b2b36;
    --ck-color-button-on-hover-background: #30303b;
    --ck-color-button-on-active-background: #3c3c47;
    --ck-color-button-on-active-shadow: #3c3c47;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(255, 4%, 21%);
    --ck-color-input-disabled-border: hsl(250, 3%, 38%);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #121221;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #ffffff;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #7c7c96;
    --ck-color-widget-hover-border: #666687;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(216, 100%, 75%);
  }

`,_=(0,Y.AH)`

/* --- expanding --- */

.ck.ck-editor__main .ck-blurred {
    max-height: 200px;
  }
.ck.ck-editor__main .ck-focused {
  	max-height: 700px;
  }

/* --- color-grid --- */

.ck.ck-color-ui-dropdown {
	--ck-color-grid-tile-size: 22px !important;
}
.ck.ck-color-grid__tile{
	width:auto;
}
.ck.ck-color-ui-dropdown .ck-color-grid {
	grid-gap: 2px;
}
.ck.ck-color-ui-dropdown .ck-color-grid .ck-button {
	border-radius: 2px;
}
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:hover:not(.ck-disabled),
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:focus:not(.ck-disabled) {
	z-index: 1;
	transform: scale(1.1);
	border-radius: 2px;
}

/* ---- Style feature config ------------------------------------------------------ */

:root {
	--ck-georgia-serif-font-stack: Georgia,Times,Times New Roman,serif;
}

.ck-content h1.document-title {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 50px;
	font-weight: bold;
	border: 0;
}

.ck-content h2.document-subtitle {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 20px;
	font-weight: bold;
	color: #d1d1d1;
	letter-spacing: 10px;
}

.ck-content p.callout {
	--border-color: #e91e1e;
	padding: 1.2em 2em;
	border: 1px solid var(--border-color);
	border-left: 10px solid var(--border-color);
	background: #fff9fb;
	border-radius: 5px;
	margin: 1.5em 2em;
	box-shadow: 5px 5px 0 #ffe6ef;
}

.ck-content blockquote.side-quote {
	font-family: var(--ck-georgia-serif-font-stack);
	font-style: normal;
	float: right;
	width: 35%;
	position: relative;
	border: 0;
	overflow: visible;
	z-index: 1;
	margin-left: 1em;
}

.ck-content blockquote.side-quote::before {
	content: "“";
	position: absolute;
	top: -37px;
	left: -10px;
	display: block;
	font-size: 200px;
	color: #e7e7e7;
	z-index: -1;
	line-height: 1;
}

.ck-content blockquote.side-quote p {
	font-size: 2em;
	line-height: 1;
}

.ck-content blockquote.side-quote p:last-child:not(:first-child) {
	font-size: 1.3em;
	text-align: right;
	color: #555;
}

.ck-content span.needs-clarification {
	outline: 1px dashed #c8a24b;
	background: #ffe19c;
	border-radius: 2px;
	position: relative;
}

.ck-content span.needs-clarification::after {
	content: "?";
	display: inline-block;
	color: #fff;
	background: #3b3b3b;
	font-size: 12px;
	vertical-align: super;
	width: 12px;
	height: 12px;
	line-height: 12px;
	border-radius: 10px;
	text-align: center;
	position: absolute;
	right: -6px;
	top: -6px;
	font-weight: bold;
	letter-spacing: initial;
}

.ck-content span.wide-spacing {
	letter-spacing: 0.3em;
}

.ck-content span.small-caps {
	font-variant: small-caps;
}

.ck-content span.spoiler {
	background: #000;
	color: #000;
}

.ck-content span.spoiler:hover {
	background: #000;
	color: #fff;
}

.ck-content pre.stylish-code {
	border-color: transparent;
	margin-left: 2em;
	margin-right: 2em;
	border-radius: 10px;
}

.ck-content pre.stylish-code::before {
	content: "";
	display: block;
	height: 13px;
	background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==);
	margin-bottom: 8px;
	background-repeat: no-repeat;
}

.ck-content pre.stylish-code-dark,
.ck-content pre.stylish-code-bright {
	padding: 1em;
}

.ck-content pre.stylish-code-dark {
	background: #272822;
	box-shadow: 5px 5px 0 #0000001f;
	color: white;
}

.ck-content pre.stylish-code-dark code {
	color: white;
}

.ck-content pre.stylish-code-bright {
	background: #dddfe0;
	color: #000;
	box-shadow: 5px 5px 0 #b3b3b3;
}

.ck-content pre.stylish-code-bright code {
	color: #222;
}

`,C={common:_t,light:y,dark:d,additional:_},G=()=>{const f=localStorage.getItem("STRAPI_THEME")||"light",{theme:E,themeOverwrite:a}=globalThis.CKEditorConfig||{},r=a?E:{...C,...E};return(0,Y.DU)`
       ${r.common}
       ${r[f]}
       ${r.additional}
   `},z=({isOpen:f,onChange:E,onToggle:a,editor:r,uploadConfig:{responsiveDimensions:t}})=>{const{components:e}=(0,P.tF)(),o=e["media-library"],i=c=>{let n="";c.map(({name:b,url:v,alt:D,formats:K,mime:Z,width:Q,height:L})=>{if(Z.includes("image"))if(K&&t){let $="";Object.keys(K).sort((h,p)=>K[h].width-K[p].width).map(h=>$+=(0,P.vX)(K[h].url)+` ${K[h].width}w,`),n+=`<img src="${v}" alt="${D}" width="${Q}" height="${L}" srcset="${$}" />`}else n+=`<img src="${v}" alt="${D}" width="${Q}" height="${L}" />`;else Z.includes("application/pdf")?n=`<a href="${(0,P.vX)(v)}" download="${b}">${b||"Download PDF"}</a>`:Z.includes("video")&&(n=`
            <video class="video" controls width="500px">
                <source src="${(0,P.vX)(v)}" type="${Z}" />
            <video/>`)});const u=r.data.processor.toView(n),l=r.data.toModel(u);r.model.insertContent(l),a()},s=c=>{const n=c.map(u=>({name:u.name,alt:u.alternativeText||u.name,url:(0,P.vX)(u.url),mime:u.mime,formats:u.formats,width:u.width,height:u.height}));i(n)};return f?(0,W.jsx)(o,{onClose:a,onSelectAssets:s}):null};z.defaultProps={isOpen:!1,onChange:()=>{},onToggle:()=>{}},z.propTypes={isOpen:F().bool,onChange:F().func,onToggle:F().func};const ot=z;var tt=x(84316);/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var f={662:(t,e,o)=>{"use strict";o.d(e,{A:()=>c});var i=o(935),s=o.n(i)()(function(n){return n[1]});s.push([t.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-width:1px 1px 0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}",""]);const c=s},935:t=>{"use strict";t.exports=function(e){var o=[];return o.toString=function(){return this.map(function(i){var s=e(i);return i[2]?"@media ".concat(i[2]," {").concat(s,"}"):s}).join("")},o.i=function(i,s,c){typeof i=="string"&&(i=[[null,i,""]]);var n={};if(c)for(var u=0;u<this.length;u++){var l=this[u][0];l!=null&&(n[l]=!0)}for(var b=0;b<i.length;b++){var v=[].concat(i[b]);c&&n[v[0]]||(s&&(v[2]?v[2]="".concat(s," and ").concat(v[2]):v[2]=s),o.push(v))}},o}},591:(t,e,o)=>{"use strict";var i,s=function(){return i===void 0&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},c=function(){var g={};return function(h){if(g[h]===void 0){var p=document.querySelector(h);if(window.HTMLIFrameElement&&p instanceof window.HTMLIFrameElement)try{p=p.contentDocument.head}catch{p=null}g[h]=p}return g[h]}}(),n=[];function u(g){for(var h=-1,p=0;p<n.length;p++)if(n[p].identifier===g){h=p;break}return h}function l(g,h){for(var p={},T=[],w=0;w<g.length;w++){var R=g[w],A=h.base?R[0]+h.base:R[0],it=p[A]||0,dt="".concat(A," ").concat(it);p[A]=it+1;var Tt=u(dt),Rt={css:R[1],media:R[2],sourceMap:R[3]};Tt!==-1?(n[Tt].references++,n[Tt].updater(Rt)):n.push({identifier:dt,updater:$(Rt,h),references:1}),T.push(dt)}return T}function b(g){var h=document.createElement("style"),p=g.attributes||{};if(p.nonce===void 0){var T=o.nc;T&&(p.nonce=T)}if(Object.keys(p).forEach(function(R){h.setAttribute(R,p[R])}),typeof g.insert=="function")g.insert(h);else{var w=c(g.insert||"head");if(!w)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");w.appendChild(h)}return h}var v,D=(v=[],function(g,h){return v[g]=h,v.filter(Boolean).join(`
`)});function K(g,h,p,T){var w=p?"":T.media?"@media ".concat(T.media," {").concat(T.css,"}"):T.css;if(g.styleSheet)g.styleSheet.cssText=D(h,w);else{var R=document.createTextNode(w),A=g.childNodes;A[h]&&g.removeChild(A[h]),A.length?g.insertBefore(R,A[h]):g.appendChild(R)}}function Z(g,h,p){var T=p.css,w=p.media,R=p.sourceMap;if(w?g.setAttribute("media",w):g.removeAttribute("media"),R&&typeof btoa<"u"&&(T+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(R))))," */")),g.styleSheet)g.styleSheet.cssText=T;else{for(;g.firstChild;)g.removeChild(g.firstChild);g.appendChild(document.createTextNode(T))}}var Q=null,L=0;function $(g,h){var p,T,w;if(h.singleton){var R=L++;p=Q||(Q=b(h)),T=K.bind(null,p,R,!1),w=K.bind(null,p,R,!0)}else p=b(h),T=Z.bind(null,p,h),w=function(){(function(A){if(A.parentNode===null)return!1;A.parentNode.removeChild(A)})(p)};return T(g),function(A){if(A){if(A.css===g.css&&A.media===g.media&&A.sourceMap===g.sourceMap)return;T(g=A)}else w()}}t.exports=function(g,h){(h=h||{}).singleton||typeof h.singleton=="boolean"||(h.singleton=s());var p=l(g=g||[],h);return function(T){if(T=T||[],Object.prototype.toString.call(T)==="[object Array]"){for(var w=0;w<p.length;w++){var R=u(p[w]);n[R].references--}for(var A=l(T,h),it=0;it<p.length;it++){var dt=u(p[it]);n[dt].references===0&&(n[dt].updater(),n.splice(dt,1))}p=A}}}},782:(t,e,o)=>{t.exports=o(237)("./src/core.js")},783:(t,e,o)=>{t.exports=o(237)("./src/engine.js")},311:(t,e,o)=>{t.exports=o(237)("./src/ui.js")},584:(t,e,o)=>{t.exports=o(237)("./src/utils.js")},602:(t,e,o)=>{t.exports=o(237)("./src/watchdog.js")},237:t=>{"use strict";t.exports=CKEditor5.dll}},E={};function a(t){var e=E[t];if(e!==void 0)return e.exports;var o=E[t]={id:t,exports:{}};return f[t](o,o.exports,a),o.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nc=void 0;var r={};(()=>{"use strict";a.r(r),a.d(r,{ClassicEditor:()=>Ft});var t=a(311),e=a(783),o=a(584);class i extends t.EditorUI{constructor(m,S){super(m),this.view=S,this._toolbarConfig=(0,t.normalizeToolbarConfig)(m.config.get("toolbar")),this._elementReplacer=new o.ElementReplacer,this.listenTo(m.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(m){const S=this.editor,B=this.view,M=S.editing.view,U=B.editable,X=M.document.getRoot();U.name=X.rootName,B.render();const Nt=U.element;this.setEditableElement(U.name,Nt),B.editable.bind("isFocused").to(this.focusTracker),M.attachDomRoot(Nt),m&&this._elementReplacer.replace(m,this.element),this._initPlaceholder(),this._initToolbar(),B.menuBarView&&(0,t._initMenuBar)(S,B.menuBarView),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const m=this.view,S=this.editor.editing.view;this._elementReplacer.restore(),S.detachDomRoot(m.editable.name),m.destroy()}_initToolbar(){const m=this.view;m.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),m.stickyPanel.limiterElement=m.element,m.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:S})=>S||0),m.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(m.toolbar)}_initPlaceholder(){const m=this.editor,S=m.editing.view,B=S.document.getRoot(),M=m.sourceElement;let U;const X=m.config.get("placeholder");X&&(U=typeof X=="string"?X:X[this.view.editable.name]),!U&&M&&M.tagName.toLowerCase()==="textarea"&&(U=M.getAttribute("placeholder")),U&&(B.placeholder=U),(0,e.enablePlaceholder)({view:S,element:B,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(m,S,B){const M=this.view.stickyPanel;if(M.isSticky){const U=new o.Rect(M.element).height;S.viewportOffset.top+=U}else{const U=()=>{this.editor.editing.view.scrollToTheSelection(B)};this.listenTo(M,"change:isSticky",U),setTimeout(()=>{this.stopListening(M,"change:isSticky",U)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const m=this.view.stickyPanel,S=this.editor.plugins.get("Dialog");S.on("show",()=>{const B=S.view;B.on("moveTo",(M,U)=>{if(!m.isSticky||B.wasMoved)return;const X=new o.Rect(m.contentPanelElement);U[1]<X.bottom+t.DialogView.defaultOffset&&(U[1]=X.bottom+t.DialogView.defaultOffset)},{priority:"high"})},{priority:"low"})}}var s=a(591),c=a.n(s),n=a(662),u={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};c()(n.A,u),n.A.locals;class l extends t.BoxedEditorUIView{constructor(m,S,B={}){super(m),this.stickyPanel=new t.StickyPanelView(m),this.toolbar=new t.ToolbarView(m,{shouldGroupWhenFull:B.shouldToolbarGroupWhenFull}),B.useMenuBar&&(this.menuBarView=new t.MenuBarView(m)),this.editable=new t.InlineEditableUIView(m,S)}render(){super.render(),this.menuBarView?this.stickyPanel.content.addMany([this.menuBarView,this.toolbar]):this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}var b=a(782),v=a(602);const D=function(O){return O!=null&&typeof O=="object"},K=typeof global=="object"&&global&&global.Object===Object&&global;var Z=typeof self=="object"&&self&&self.Object===Object&&self;const Q=(K||Z||Function("return this")()).Symbol;var L=Object.prototype,$=L.hasOwnProperty,g=L.toString,h=Q?Q.toStringTag:void 0;const p=function(O){var m=$.call(O,h),S=O[h];try{O[h]=void 0;var B=!0}catch{}var M=g.call(O);return B&&(m?O[h]=S:delete O[h]),M};var T=Object.prototype.toString;const w=function(O){return T.call(O)};var R=Q?Q.toStringTag:void 0;const A=function(O){return O==null?O===void 0?"[object Undefined]":"[object Null]":R&&R in Object(O)?p(O):w(O)},it=function(O,m){return function(S){return O(m(S))}}(Object.getPrototypeOf,Object);var dt=Function.prototype,Tt=Object.prototype,Rt=dt.toString,It=Tt.hasOwnProperty,Dt=Rt.call(Object);const Lt=function(O){if(!D(O)||A(O)!="[object Object]")return!1;var m=it(O);if(m===null)return!0;var S=It.call(m,"constructor")&&m.constructor;return typeof S=="function"&&S instanceof S&&Rt.call(S)==Dt},Mt=function(O){return D(O)&&O.nodeType===1&&!Lt(O)};class jt extends(0,b.ElementApiMixin)(b.Editor){constructor(m,S={}){if(!At(m)&&S.initialData!==void 0)throw new o.CKEditorError("editor-create-initial-data",null);super(S),this.config.define("menuBar.isVisible",!1),this.config.get("initialData")===void 0&&this.config.set("initialData",function(X){return At(X)?(0,o.getDataFromElement)(X):X}(m)),At(m)&&(this.sourceElement=m),this.model.document.createRoot();const B=!this.config.get("toolbar.shouldNotGroupWhenFull"),M=this.config.get("menuBar"),U=new l(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:B,useMenuBar:M.isVisible});this.ui=new i(this,U),(0,b.attachToForm)(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(m,S={}){return new Promise(B=>{const M=new this(m,S);B(M.initPlugins().then(()=>M.ui.init(At(m)?m:null)).then(()=>M.data.init(M.config.get("initialData"))).then(()=>M.fire("ready")).then(()=>M))})}}jt.Context=b.Context,jt.EditorWatchdog=v.EditorWatchdog,jt.ContextWatchdog=v.ContextWatchdog;const Ft=jt;function At(O){return Mt(O)}})(),(window.CKEditor5=window.CKEditor5||{}).editorClassic=r})();const rt=G(),Ct=(0,Y.Ay)("div")`${({editorStyles:f})=>f}`,st=({onChange:f,name:E,value:a,disabled:r,preset:t,maxLength:e})=>{const[o,i]=(0,J.useState)(!1),[s,c]=(0,J.useState)(!1),[n,u]=(0,J.useState)(null),[l,b]=(0,J.useState)(null),[v,D]=(0,J.useState)(!1),K=(0,J.useRef)(null),Z=()=>c(L=>!L),Q=L=>L>e?D(!0):D(!1);return(0,J.useEffect)(()=>{(async()=>{const{currentConfig:L,uploadPluginConfig:$}=await xt(t,Z);b(L),u($)})()},[]),(0,W.jsxs)(W.Fragment,{children:[l&&(0,W.jsx)(rt,{}),(0,W.jsxs)(Ct,{editorStyles:l?.styles,children:[!l&&(0,W.jsx)(kt,{hasRadius:!0,background:"neutral100",children:(0,W.jsx)(et.a,{children:"Loading..."})}),l&&(0,W.jsx)(H.CKEditor,{editor:window.CKEditor5.editorClassic.ClassicEditor,config:l?.editorConfig,disabled:r,data:a,onReady:L=>{if(l.editorConfig.WordCountPlugin){const $=L.plugins.get("WordCount");$.on("update",(h,p)=>Q(p.characters)),K.current?.appendChild($.wordCountContainer)}L.plugins.has("ImageUploadEditing")&&L.plugins.get("ImageUploadEditing").on("uploadComplete",($,{data:g,imageElement:h})=>L.model.change(p=>p.setAttribute("alt",g.alt,h))),i(L)},onChange:(L,$)=>{const g=$.getData();f({target:{name:E,value:g}})}}),l&&l.editorConfig.WordCountPlugin&&(0,W.jsx)(lt,{color:v?"danger500":"neutral400",ref:K,children:!o&&(0,W.jsx)(et.a,{small:!0,children:"Loading..."})}),n&&(0,W.jsx)(ot,{isOpen:s,onToggle:Z,editor:o,uploadConfig:n})]})]})};st.defaultProps={value:"",disabled:!1},st.propTypes={onChange:F().func.isRequired,name:F().string.isRequired,value:F().string,disabled:F().bool};const lt=(0,Y.Ay)(k.a)`
  display:flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  `,kt=(0,Y.Ay)(k.a)`
  display:flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  `,bt=st;var vt=x(54894),Et=x(7153),Pt=x(8361),Ot=x(16918),St=x(10229),yt=x(37133);const pt=({name:f,attribute:E,onChange:a,value:r,intlLabel:t,labelAction:e,disabled:o,error:i,description:s,required:c})=>{const{formatMessage:n}=(0,vt.A)(),{preset:u,maxLengthCharacters:l,...b}=E.options;return(0,W.jsx)(Et.D,{name:f,id:f,error:i,hint:s&&n(s),children:(0,W.jsxs)(yt.B,{spacing:1,children:[(0,W.jsx)(Pt.d,{action:e,required:c,children:n(t)}),(0,W.jsx)(bt,{disabled:o,name:f,onChange:a,value:r,preset:u,maxLength:l}),(0,W.jsx)(Ot.o,{}),(0,W.jsx)(St.b,{})]})})};pt.defaultProps={description:null,disabled:!1,error:null,labelAction:null,required:!1,value:""},pt.propTypes={intlLabel:F().object.isRequired,onChange:F().func.isRequired,attribute:F().object.isRequired,name:F().string.isRequired,description:F().object,disabled:F().bool,error:F().string,labelAction:F().object,required:F().bool,value:F().string};const ct=pt},91120:(Wt,mt,x)=>{/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(W,J){Wt.exports=J(x(21272),x(33544),x(45427))})(self,(W,J,wt)=>(()=>{"use strict";var F={546:k=>{k.exports=wt},949:k=>{k.exports=J},155:k=>{k.exports=W}},Y={};function H(k){var P=Y[k];if(P!==void 0)return P.exports;var V=Y[k]={exports:{}};return F[k](V,V.exports,H),V.exports}H.n=k=>{var P=k&&k.__esModule?()=>k.default:()=>k;return H.d(P,{a:P}),P},H.d=(k,P)=>{for(var V in P)H.o(P,V)&&!H.o(k,V)&&Object.defineProperty(k,V,{enumerable:!0,get:P[V]})},H.o=(k,P)=>Object.prototype.hasOwnProperty.call(k,P),H.r=k=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(k,"__esModule",{value:!0})};var et={};return(()=>{H.r(et),H.d(et,{CKEditor:()=>nt,CKEditorContext:()=>q,useMultiRootEditor:()=>_t});var k=H(155),P=H.n(k),V=H(949),I=H.n(V);const N=new Array(256).fill("").map((y,d)=>("0"+d.toString(16)).slice(-2));var at=H(546);const ut=P().createContext("contextWatchdog");class q extends P().Component{constructor(d,_){super(d,_),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(d){return this._shouldComponentUpdate(d)}async _shouldComponentUpdate(d){return d.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(d.config)),d.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(d.config),!0):this.props.children!==d.children}render(){return P().createElement(ut.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(d){this.contextWatchdog=new at.ContextWatchdog(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(_,j)=>{this.props.onError(j.error,{phase:"runtime",willContextRestart:j.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(d).catch(_=>{this.props.onError(_,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}q.defaultProps={isLayoutReady:!0,onError:(y,d)=>console.error(y,d)},q.propTypes={id:I().string,isLayoutReady:I().bool,context:I().func,watchdogConfig:I().object,config:I().object,onReady:I().func,onError:I().func};const ht="Lock from React integration (@ckeditor/ckeditor5-react)";class nt extends P().Component{constructor(d){super(d),this.editorDestructionInProgress=null,this.domContainer=P().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:_}=window;if(_){const[j]=_.split(".").map(Number);j<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(d){return!!this.editor&&(d.id!==this.props.id||d.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor(d)&&this.editor.data.set(d.data),"disabled"in d&&(d.disabled?this.editor.enableReadOnlyMode(ht):this.editor.disableReadOnlyMode(ht)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return P().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof at.ContextWatchdog?this.watchdog=new gt(this.context):this.watchdog=new nt._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((d,_)=>this._createEditor(d,_)),this.watchdog.on("error",(d,{error:_,causesRestart:j})=>{(this.props.onError||console.error)(_,{phase:"runtime",willEditorRestart:j})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(d=>{(this.props.onError||console.error)(d,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(d,_){return this.props.editor.create(d,_).then(j=>{"disabled"in this.props&&this.props.disabled&&j.enableReadOnlyMode(ht);const C=j.model.document,G=j.editing.view.document;return C.on("change:data",z=>{this.props.onChange&&this.props.onChange(z,j)}),G.on("focus",z=>{this.props.onFocus&&this.props.onFocus(z,j)}),G.on("blur",z=>{this.props.onBlur&&this.props.onBlur(z,j)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(j)}),j})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(d=>{setTimeout(async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,d()):this.instance?(await this.instance.destroy(),this.instance=null,d()):void d())})}_shouldUpdateEditor(d){return this.props.data!==d.data&&this.editor.data.get()!==d.data}_getConfig(){const d=this.props.config||{};return this.props.data&&d.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...d,initialData:d.initialData||this.props.data||""}}}nt.contextType=ut,nt.propTypes={editor:I().func.isRequired,data:I().string,config:I().object,disableWatchdog:I().bool,watchdogConfig:I().object,onChange:I().func,onReady:I().func,onFocus:I().func,onBlur:I().func,onError:I().func,disabled:I().bool,id:I().any},nt._EditorWatchdog=at.EditorWatchdog;class gt{constructor(d){this._contextWatchdog=d,this._id=function(){const _=4294967296*Math.random()>>>0,j=4294967296*Math.random()>>>0,C=4294967296*Math.random()>>>0,G=4294967296*Math.random()>>>0;return"e"+N[255&_]+N[_>>8&255]+N[_>>16&255]+N[_>>24&255]+N[255&j]+N[j>>8&255]+N[j>>16&255]+N[j>>24&255]+N[255&C]+N[C>>8&255]+N[C>>16&255]+N[C>>24&255]+N[255&G]+N[G>>8&255]+N[G>>16&255]+N[G>>24&255]}()}setCreator(d){this._creator=d}create(d,_){return this._contextWatchdog.add({sourceElementOrData:d,config:_,creator:this._creator,id:this._id,type:"editor"})}on(d,_){this._contextWatchdog.on("itemError",(j,{itemId:C,error:G})=>{C===this._id&&_(null,{error:G,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}const ft="Lock from React integration (@ckeditor/ckeditor5-react)",xt=({editor:y})=>{const d=(0,k.useRef)(null);return(0,k.useEffect)(()=>{const _=d.current;if(!y||!_)return;const j=y.ui.view.toolbar.element;return _&&_.appendChild(j),()=>{_&&_.removeChild(j)}},[y&&y.id]),P().createElement("div",{ref:d})},_t=y=>{const d=(0,k.useRef)(null),_=(0,k.useRef)(null),j=(0,k.useContext)(ut),[C,G]=(0,k.useState)(null),[z,ot]=(0,k.useState)(y.data),[tt,rt]=(0,k.useState)(y.rootsAttributes||{}),[Ct,st]=(0,k.useState)([]),lt=(0,k.useRef)(!0);(0,k.useEffect)(()=>((async()=>(await _.current,y.isLayoutReady!==!1&&await Pt()))(),()=>{Et().then(()=>{_.current=null})}),[y.isLayoutReady]),(0,k.useEffect)(()=>{C&&(y.disabled?C.enableReadOnlyMode(ft):C.disableReadOnlyMode(ft))},[y.disabled]),(0,k.useEffect)(()=>{if(C&&!_.current){const a=C.getFullData();ot({...a}),rt({...C.getRootsAttributes()}),st([...Object.keys(a).map(r=>bt(C,r))])}},[C&&C.id]);const kt=()=>{const a=y.config||{};return y.data&&a.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` property. The config value takes precedence over `data` property and will be used when both are specified."),{...a,rootsAttributes:tt}},bt=(a,r)=>P().createElement("div",{id:r,key:r,ref:t=>{if(t){const e=a.ui.view.createEditable(r,t);a.ui.addEditable(e),a.editing.view.forceRender()}}}),vt=(a,r)=>y.editor.create(a,r).then(t=>{y.disabled&&y.disabled&&t.enableReadOnlyMode(ft);const e=t.model.document,o=t.editing.view.document;return e.on("change:data",i=>((s,c)=>{const n=s.model.document;if(!y.disableTwoWayDataBinding){const u={},l={};n.differ.getChanges().forEach(b=>{let v;if(v=b.type=="insert"||b.type=="remove"?b.position.root:b.range.root,!v.isAttached())return;const{rootName:D}=v;u[D]=s.getData({rootName:D})}),n.differ.getChangedRoots().forEach(b=>{if(b.state)return void(u[b.name]!==void 0&&delete u[b.name]);const v=b.name;l[v]=s.getRootAttributes(v)}),Object.keys(u).length&&ot(b=>({...b,...u})),Object.keys(l).length&&rt(b=>({...b,...l}))}y.onChange&&y.onChange(c,s)})(t,i)),t.on("addRoot",(i,s)=>((c,n,u)=>{const l=u.rootName,b=bt(c,l);y.disableTwoWayDataBinding||(ot(v=>({...v,[l]:c.getData({rootName:l})})),rt(v=>({...v,[l]:c.getRootAttributes(l)}))),st(v=>[...v,b])})(t,0,s)),t.on("detachRoot",(i,s)=>((c,n,u)=>{const l=u.rootName;st(b=>b.filter(v=>v.props.id!==l)),y.disableTwoWayDataBinding||(ot(b=>{const{[l]:v,...D}=b;return{...D}}),rt(b=>{const{[l]:v,...D}=b;return{...D}})),c.detachEditable(u)})(t,0,s)),o.on("focus",i=>{y.onFocus&&y.onFocus(i,t)}),o.on("blur",i=>{y.onBlur&&y.onBlur(i,t)}),G(t),y.onReady&&y.onReady(t),t}),Et=async()=>{G(null),ot({}),rt({}),st([]),_.current=new Promise(a=>{setTimeout(async()=>d.current?(await d.current.destroy(),d.current=null,a()):C?(await C.destroy(),a()):void a())})},Pt=async()=>{if(y.disableWatchdog)return void await vt(y.data,kt());if(d.current)return;j instanceof at.ContextWatchdog?d.current=new gt(j):d.current=new at.EditorWatchdog(y.editor,y.watchdogConfig);const a=d.current;a.setCreator((r,t)=>vt(r,t)),a.on("error",(r,{error:t,causesRestart:e})=>{(y.onError||console.error)(t,{phase:"runtime",willEditorRestart:e})}),await a.create(z,kt()).catch(r=>{(y.onError||console.error)(r,{phase:"initialization",willEditorRestart:!1})})};(0,k.useEffect)(()=>{if(C&&lt.current){lt.current=!1;const a=Object.keys(z),r=Object.keys(tt);if(!a.every(n=>r.includes(n)))throw new Error("`data` and `attributes` objects must have the same keys (roots).");const t=C.getFullData(),e=C.getRootsAttributes(),{addedKeys:o,removedKeys:i}=Ot(t,z||{}),s=a.some(n=>t[n]!==void 0&&JSON.stringify(t[n])!==JSON.stringify(z[n])),c=r.filter(n=>JSON.stringify(e[n])!==JSON.stringify(tt[n]));C.model.change(n=>{St(o),yt(i),s&&pt(),c.length&&ct(n,c)})}},[z,tt]);const Ot=(a,r)=>{const t=Object.keys(a),e=Object.keys(r);return{addedKeys:e.filter(o=>!t.includes(o)),removedKeys:t.filter(o=>!e.includes(o))}},St=a=>{a.forEach(r=>{C.addRoot(r,{data:z[r]||"",attributes:tt?.[r]||{},isUndoable:!0})})},yt=a=>{a.forEach(r=>{C.detachRoot(r,!0)})},pt=()=>{C.data.set(z,{suppressErrorInCollaboration:!0})},ct=(a,r)=>{r.forEach(t=>{Object.keys(tt[t]).forEach(e=>{C.registerRootAttribute(e)}),a.clearAttributes(C.model.document.getRoot(t)),a.setAttributes(tt[t],C.model.document.getRoot(t))})},f=(0,k.useCallback)(a=>{lt.current=!0,ot(a)},[ot]),E=(0,k.useCallback)(a=>{lt.current=!0,rt(a)},[rt]);return{editor:C,editableElements:Ct,toolbarElement:P().createElement(xt,{editor:C}),data:z,setData:f,attributes:tt,setAttributes:E}}})(),et})())},45427:(Wt,mt,x)=>{"use strict";x.r(mt),x.d(mt,{ContextWatchdog:()=>f,EditorWatchdog:()=>yt,Watchdog:()=>W});/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class W{constructor(t){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof t.crashNumberLimit=="number"?t.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof t.minimumNonErrorTimePeriod=="number"?t.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=e=>{const o="error"in e?e.error:e.reason;o instanceof Error&&this._handleError(o,e)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}off(t,e){this._listeners[t]=this._listeners[t].filter(o=>o!==e)}_fire(t,...e){const o=this._listeners[t]||[];for(const i of o)i.apply(this,[null,...e])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e instanceof ErrorEvent?e.filename:void 0,lineno:e instanceof ErrorEvent?e.lineno:void 0,colno:e instanceof ErrorEvent?e.colno:void 0,date:this._now()});const o=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:o}),o?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(t){return t.is&&t.is("CKEditorError")&&t.context!==void 0&&t.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(t)}_shouldRestart(){if(this.crashes.length<=this._crashNumberLimit)return!0;const t=this.crashes[this.crashes.length-1].date,e=this.crashes[this.crashes.length-1-this._crashNumberLimit].date;return(t-e)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function J(r,t=new Set){const e=[r],o=new Set;let i=0;for(;e.length>i;){const s=e[i++];if(!(o.has(s)||!wt(s)||t.has(s)))if(o.add(s),Symbol.iterator in s)try{for(const c of s)e.push(c)}catch{}else for(const c in s)c!=="defaultValue"&&e.push(s[c])}return o}function wt(r){const t=Object.prototype.toString.call(r),e=typeof r;return!(e==="number"||e==="boolean"||e==="string"||e==="symbol"||e==="function"||t==="[object Date]"||t==="[object RegExp]"||t==="[object Module]"||r===void 0||r===null||r._watchdogExcluded||r instanceof EventTarget||r instanceof Event)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function F(r,t,e=new Set){if(r===t&&H(r))return!0;const o=J(r,e),i=J(t,e);for(const s of o)if(i.has(s))return!0;return!1}/* istanbul ignore next -- @preserve */function Y(r,t,e){const{subNodes:o,prevNodeMap:i}=getSubNodes(r,e.subNodes),{subNodes:s,prevNodeMap:c}=getSubNodes(t,e.subNodes);for(const n of o)if(s.has(n)){const u=[];u.push(n);let l=i.get(n);for(;l&&l!==r;)u.push(l),l=i.get(l);for(l=c.get(n);l&&l!==t;)u.unshift(l),l=c.get(l);return console.log("--------"),console.log({target1:r}),console.log({sharedNode:n}),console.log({target2:t}),console.log({connection:u}),!0}return!1}function H(r){return typeof r=="object"&&r!==null}var et=x(66727),k=x(70007),P=function(){return k.A.Date.now()};const V=P;var I=/\s/;function N(r){for(var t=r.length;t--&&I.test(r.charAt(t)););return t}const at=N;var ut=/^\s+/;function q(r){return r&&r.slice(0,at(r)+1).replace(ut,"")}const ht=q;var nt=x(20920),gt=0/0,ft=/^[-+]0x[0-9a-f]+$/i,xt=/^0b[01]+$/i,_t=/^0o[0-7]+$/i,y=parseInt;function d(r){if(typeof r=="number")return r;if((0,nt.A)(r))return gt;if((0,et.A)(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=(0,et.A)(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=ht(r);var e=xt.test(r);return e||_t.test(r)?y(r.slice(2),e?2:8):ft.test(r)?gt:+r}const _=d;var j="Expected a function",C=Math.max,G=Math.min;function z(r,t,e){var o,i,s,c,n,u,l=0,b=!1,v=!1,D=!0;if(typeof r!="function")throw new TypeError(j);t=_(t)||0,(0,et.A)(e)&&(b=!!e.leading,v="maxWait"in e,s=v?C(_(e.maxWait)||0,t):s,D="trailing"in e?!!e.trailing:D);function K(w){var R=o,A=i;return o=i=void 0,l=w,c=r.apply(A,R),c}function Z(w){return l=w,n=setTimeout($,t),b?K(w):c}function Q(w){var R=w-u,A=w-l,it=t-R;return v?G(it,s-A):it}function L(w){var R=w-u,A=w-l;return u===void 0||R>=t||R<0||v&&A>=s}function $(){var w=V();if(L(w))return g(w);n=setTimeout($,Q(w))}function g(w){return n=void 0,D&&o?K(w):(o=i=void 0,c)}function h(){n!==void 0&&clearTimeout(n),l=0,o=u=i=n=void 0}function p(){return n===void 0?c:g(V())}function T(){var w=V(),R=L(w);if(o=arguments,i=this,u=w,R){if(n===void 0)return Z(u);if(v)return clearTimeout(n),n=setTimeout($,t),K(u)}return n===void 0&&(n=setTimeout($,t)),c}return T.cancel=h,T.flush=p,T}const ot=z;var tt="Expected a function";function rt(r,t,e){var o=!0,i=!0;if(typeof r!="function")throw new TypeError(tt);return(0,et.A)(e)&&(o="leading"in e?!!e.leading:o,i="trailing"in e?!!e.trailing:i),ot(r,t,{leading:o,maxWait:t,trailing:i})}const Ct=rt;var st=x(13856),lt=x(76981);function kt(r){return(0,st.A)(r)&&r.nodeType===1&&!(0,lt.A)(r)}const bt=kt;var vt=x(10168),Et=1,Pt=4;function Ot(r,t){return t=typeof t=="function"?t:void 0,(0,vt.A)(r,Et|Pt,t)}const St=Ot;/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class yt extends W{constructor(t,e={}){super(e),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=Ct(this._save.bind(this),typeof e.saveInterval=="number"?e.saveInterval:5e3),t&&(this._creator=(o,i)=>t.create(o,i)),this._destructor=o=>o.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(t=>{console.error("An error happened during the editor destroying.",t)}).then(()=>{const t={},e=[],o=this._config.rootsAttributes||{},i={};for(const[c,n]of Object.entries(this._data.roots))n.isLoaded?(t[c]="",i[c]=o[c]||{}):e.push(c);const s={...this._config,extraPlugins:this._config.extraPlugins||[],lazyRoots:e,rootsAttributes:i,_watchdogInitialData:this._data};return delete s.initialData,s.extraPlugins.push(pt),this._initUsingData?this.create(t,s,s.context):bt(this._elementOrData)?this.create(this._elementOrData,s,s.context):this.create(this._editables,s,s.context)}).then(()=>{this._fire("restart")})}create(t=this._elementOrData,e=this._config,o){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=t,this._initUsingData=typeof t=="string"||Object.keys(t).length>0&&typeof Object.values(t)[0]=="string",this._config=this._cloneEditorConfiguration(e)||{},this._config.context=o,this._creator(t,this._config))).then(i=>{this._editor=i,i.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=i.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const t=this._editor;return this._editor=null,t.model.document.off("change:data",this._throttledSave),this._destructor(t)})}_save(){const t=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=t}catch(e){console.error(e,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(t){this._excludedProps=t}_getData(){const t=this._editor,e=t.model.document.roots.filter(n=>n.isAttached()&&n.rootName!="$graveyard"),{plugins:o}=t,i=o.has("CommentsRepository")&&o.get("CommentsRepository"),s=o.has("TrackChanges")&&o.get("TrackChanges"),c={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};e.forEach(n=>{c.roots[n.rootName]={content:JSON.stringify(Array.from(n.getChildren())),attributes:JSON.stringify(Array.from(n.getAttributes())),isLoaded:n._isLoaded}});for(const n of t.model.markers)n._affectsData&&(c.markers[n.name]={rangeJSON:n.getRange().toJSON(),usingOperation:n._managedUsingOperations,affectsData:n._affectsData});return i&&(c.commentThreads=JSON.stringify(i.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),s&&(c.suggestions=JSON.stringify(s.getSuggestions({toJSON:!0,skipNotAttached:!0}))),c}_getEditables(){const t={};for(const e of this.editor.model.document.getRootNames()){const o=this.editor.ui.getEditableElement(e);o&&(t[e]=o)}return t}_isErrorComingFromThisItem(t){return F(this._editor,t.context,this._excludedProps)}_cloneEditorConfiguration(t){return St(t,(e,o)=>{if(bt(e)||o==="context")return e})}}class pt{constructor(t){this.editor=t,this._data=t.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",t=>{t.stop(),this.editor.model.enqueueChange({isUndoable:!1},e=>{this._restoreCollaborationData(),this._restoreEditorData(e)}),this.editor.data.fire("ready")},{priority:1e3-1})}_createNode(t,e){if("name"in e){const o=t.createElement(e.name,e.attributes);if(e.children)for(const i of e.children)o._appendChild(this._createNode(t,i));return o}else return t.createText(e.data,e.attributes)}_restoreEditorData(t){const e=this.editor;Object.entries(this._data.roots).forEach(([o,{content:i,attributes:s}])=>{const c=JSON.parse(i),n=JSON.parse(s),u=e.model.document.getRoot(o);for(const[l,b]of n)t.setAttribute(l,b,u);for(const l of c){const b=this._createNode(t,l);t.insert(b,u,"end")}}),Object.entries(this._data.markers).forEach(([o,i])=>{const{document:s}=e.model,{rangeJSON:{start:c,end:n},...u}=i,l=s.getRoot(c.root),b=t.createPositionFromPath(l,c.path,c.stickiness),v=t.createPositionFromPath(l,n.path,n.stickiness),D=t.createRange(b,v);t.addMarker(o,{range:D,...u})})}_restoreCollaborationData(){const t=JSON.parse(this._data.commentThreads),e=JSON.parse(this._data.suggestions);t.forEach(o=>{const i=this.editor.config.get("collaboration.channelId"),s=this.editor.plugins.get("CommentsRepository");s.hasCommentThread(o.threadId)&&s.getCommentThread(o.threadId).remove(),s.addCommentThread({channelId:i,...o})}),e.forEach(o=>{const i=this.editor.plugins.get("TrackChangesEditing");if(i.hasSuggestion(o.id)){const s=i.getSuggestion(o.id);s.attributes=o.attributes}else i.addSuggestionData(o)})}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const ct=Symbol("MainQueueId");class f extends W{constructor(t,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new E,this._watchdogConfig=e,this._creator=o=>t.create(o),this._destructor=o=>o.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}get context(){return this._context}create(t={}){return this._actionQueues.enqueue(ct,()=>(this._contextConfig=t,this._create()))}getItem(t){return this._getWatchdog(t)._item}getItemState(t){return this._getWatchdog(t).state}add(t){const e=a(t);return Promise.all(e.map(o=>this._actionQueues.enqueue(o.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let i;if(this._watchdogs.has(o.id))throw new Error(`Item with the given id is already added: '${o.id}'.`);if(o.type==="editor")return i=new yt(null,this._watchdogConfig),i.setCreator(o.creator),i._setExcludedProperties(this._contextProps),o.destructor&&i.setDestructor(o.destructor),this._watchdogs.set(o.id,i),i.on("error",(s,{error:c,causesRestart:n})=>{this._fire("itemError",{itemId:o.id,error:c}),n&&this._actionQueues.enqueue(o.id,()=>new Promise(u=>{const l=()=>{i.off("restart",l),this._fire("itemRestart",{itemId:o.id}),u()};i.on("restart",l)}))}),i.create(o.sourceElementOrData,o.config,this._context);throw new Error(`Not supported item type: '${o.type}'.`)})))}remove(t){const e=a(t);return Promise.all(e.map(o=>this._actionQueues.enqueue(o,()=>{const i=this._getWatchdog(o);return this._watchdogs.delete(o),i.destroy()})))}destroy(){return this._actionQueues.enqueue(ct,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(ct,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(t=>{console.error("An error happened during destroying the context or items.",t)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(t=>(this._context=t,this._contextProps=J(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const t=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(t))})}_getWatchdog(t){const e=this._watchdogs.get(t);if(!e)throw new Error(`Item with the given id was not registered: ${t}.`);return e}_isErrorComingFromThisItem(t){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(t))return!1;return F(this._context,t.context)}}class E{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(t){this._onEmptyCallbacks.push(t)}enqueue(t,e){const o=t===ct;this._activeActions++,this._queues.get(t)||this._queues.set(t,Promise.resolve());const s=(o?Promise.all(this._queues.values()):Promise.all([this._queues.get(ct),this._queues.get(t)])).then(e),c=s.catch(()=>{});return this._queues.set(t,c),s.finally(()=>{this._activeActions--,this._queues.get(t)===c&&this._activeActions===0&&this._onEmptyCallbacks.forEach(n=>n())})}}function a(r){return Array.isArray(r)?r:[r]}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */}}]);
