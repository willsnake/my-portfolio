import{c as W,u as r}from"./cv-DPf2FYxQ.js";import"./iframe-CPDvbRx_.js";const i=({variant:N="primary",className:f="",children:k,...P})=>{const C=W({base:"font-ibm-plex-mono text-[32px] leading-[42px] tracking-[1px]",variants:{color:{primary:"text-white",secondary:"text-dark-blue"}},defaultVariants:{color:"primary"}});return r("h2",{...P,class:C({color:N,className:f}),children:k})},T={title:"Design System/H2",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary"],description:"H2 variant style"},children:{control:"text",description:"H2 content"},className:{control:"text",description:"Additional CSS classes"}}},e={args:{variant:"primary",children:"Primary Heading"}},a={args:{variant:"secondary",children:"Secondary Heading"}},n={args:{variant:"primary",children:"This is a longer secondary heading that demonstrates text wrapping behavior"},parameters:{layout:"padded"}},t={args:{variant:"primary",children:"Styled Heading",className:"underline hover:no-underline"}},s={render:()=>r("div",{className:"space-y-6",children:[r("div",{children:[r("h3",{className:"text-sm font-medium text-gray-600 mb-2",children:"Primary (Dark White)"}),r(i,{variant:"primary",children:"About My Experience"})]}),r("div",{children:[r("h3",{className:"text-sm font-medium text-gray-600 mb-2",children:"Secondary (Dark Blue)"}),r(i,{variant:"secondary",children:"Featured Projects"})]}),r("div",{children:[r("h3",{className:"text-sm font-medium text-gray-600 mb-2",children:"With Custom Styling"}),r(i,{variant:"primary",className:"text-center border-b border-gray-200 pb-2",children:"Skills & Technologies"})]})]}),parameters:{layout:"padded"}};var o,d,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Heading'
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,l,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Heading'
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var y,h,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'This is a longer secondary heading that demonstrates text wrapping behavior'
  },
  parameters: {
    layout: 'padded'
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,v,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Styled Heading',
    className: 'underline hover:no-underline'
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,S,H;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className='space-y-6'>
      <div>
        <h3 className='text-sm font-medium text-gray-600 mb-2'>Primary (Dark White)</h3>
        <H2 variant='primary'>About My Experience</H2>
      </div>
      <div>
        <h3 className='text-sm font-medium text-gray-600 mb-2'>Secondary (Dark Blue)</h3>
        <H2 variant='secondary'>Featured Projects</H2>
      </div>
      <div>
        <h3 className='text-sm font-medium text-gray-600 mb-2'>With Custom Styling</h3>
        <H2 variant='primary' className='text-center border-b border-gray-200 pb-2'>
          Skills & Technologies
        </H2>
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(H=(S=s.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};const w=["Primary","Secondary","LongHeading","WithCustomClass","AllVariants"];export{s as AllVariants,n as LongHeading,e as Primary,a as Secondary,t as WithCustomClass,w as __namedExportsOrder,T as default};
