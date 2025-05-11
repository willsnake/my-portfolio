import{c as v,u as e}from"./cv-DPf2FYxQ.js";import"./iframe-CPDvbRx_.js";const n=({className:H="",children:f,...N})=>{const b=v({base:"font-ibm-plex-mono font-medium text-white text-[40px] leading-[52px]"});return e("h1",{...N,class:b({className:H}),children:f})},W={title:"Design System/H1",component:n,globals:{backgrounds:{value:"grey"}},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text",description:"H1 content"},className:{control:"text",description:"Additional CSS classes"}}},a={args:{children:"Main Heading"}},t={args:{children:"This is a longer main heading that demonstrates text wrapping"},parameters:{layout:"padded"}},s={args:{children:"Styled Heading",className:"text-blue underline"}},r={render:()=>e("div",{className:"space-y-6",children:[e("div",{children:[e("h3",{className:"text-sm font-medium text-gray-600 mb-2",children:"Default"}),e(n,{children:"Welcome to the Portfolio"})]}),e("div",{children:[e("h3",{className:"text-sm font-medium text-gray-600 mb-2",children:"With Custom Styling"}),e(n,{className:"text-blue",children:"Featured Project"})]}),e("div",{children:[e("h3",{className:"text-sm font-medium text-gray-600 mb-2",children:"Long Text"}),e(n,{children:"A Very Long Heading That Demonstrates How Text Wraps Naturally"})]})]}),parameters:{layout:"padded"}};var o,d,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Main Heading'
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,c,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is a longer main heading that demonstrates text wrapping'
  },
  parameters: {
    layout: 'padded'
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,p,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Styled Heading',
    className: 'text-blue underline'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,x,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className='space-y-6'>
      <div>
        <h3 className='text-sm font-medium text-gray-600 mb-2'>Default</h3>
        <H1>Welcome to the Portfolio</H1>
      </div>
      <div>
        <h3 className='text-sm font-medium text-gray-600 mb-2'>With Custom Styling</h3>
        <H1 className='text-blue'>Featured Project</H1>
      </div>
      <div>
        <h3 className='text-sm font-medium text-gray-600 mb-2'>Long Text</h3>
        <H1>A Very Long Heading That Demonstrates How Text Wraps Naturally</H1>
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const C=["Default","LongHeading","WithCustomClass","Examples"];export{a as Default,r as Examples,t as LongHeading,s as WithCustomClass,C as __namedExportsOrder,W as default};
