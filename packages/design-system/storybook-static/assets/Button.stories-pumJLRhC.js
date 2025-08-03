import{u as o}from"./cv-DPf2FYxQ.js";import{B as s}from"./Button-8PezarZv.js";import"./iframe-CPDvbRx_.js";const v={primary:"primary",secondary:"secondary"},{fn:f}=__STORYBOOK_MODULE_TEST__,k={title:"Design System/Button",component:s,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:Object.keys(v),description:"Visual variant of button"},type:{control:{type:"select"},options:["button","submit","reset"],description:"Type of the button"},disabled:{control:"boolean",description:"Is the button currently disabled"},text:{control:"text",description:"Text of the button"},width:{control:"text",description:"Manually defined width"},onClick:{action:"clicked"}},args:{onClick:f()}},r={args:{variant:"primary",text:"Primary Button"}},e={globals:{backgrounds:{value:"light"}},args:{variant:"secondary",text:"Secondary Button"}},a={args:{variant:"primary",text:"Custom Width Button",width:"300px"},render:t=>o(s,{...t,style:{width:t.width}})},n={globals:{backgrounds:{value:"light"}},render:()=>o("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:Object.keys(v).map(t=>o(s,{variant:t,text:`${t.charAt(0).toUpperCase()+t.slice(1)} Button`},t))})};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    text: 'Primary Button'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,p,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  globals: {
    backgrounds: {
      value: 'light'
    }
  },
  args: {
    variant: 'secondary',
    text: 'Secondary Button'
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,y,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    text: 'Custom Width Button',
    width: '300px'
  },
  render: args => <Button {...args} style={{
    width: args.width
  }} />
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,b,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  globals: {
    backgrounds: {
      value: 'light'
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      {Object.keys(VARIANTS_MAP).map(variant => <Button key={variant} variant={variant as keyof typeof VARIANTS_MAP} text={\`\${variant.charAt(0).toUpperCase() + variant.slice(1)} Button\`} />)}
    </div>
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const _=["Primary","Secondary","WithCustomWidth","AllVariants"];export{n as AllVariants,r as Primary,e as Secondary,a as WithCustomWidth,_ as __namedExportsOrder,k as default};
