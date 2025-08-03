import{u as r}from"./cv-DPf2FYxQ.js";import{H as e}from"./H3-C_Vafkv5.js";import"./iframe-CPDvbRx_.js";const W={title:"Design System/H3",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary"],description:"H3 variant style"},children:{control:"text",description:"H3 content"},className:{control:"text",description:"Additional CSS classes"}}},a={args:{variant:"primary",children:"Primary Section"}},t={args:{variant:"secondary",children:"Secondary Section"}},n={args:{variant:"tertiary",children:"Tertiary Section"}},s={args:{variant:"primary",children:"This is a longer section heading that demonstrates text behavior"},parameters:{layout:"padded"}},i={args:{variant:"primary",children:"Styled Section",className:"border-l-4 border-blue pl-4"}},o={globals:{backgrounds:{value:"grey"}},render:()=>r("div",{className:"space-y-6",children:[r("div",{children:[r("h4",{className:"text-sm font-medium text-gray-600 mb-2",children:"Primary (Dark White)"}),r(e,{variant:"primary",children:"Project Overview"})]}),r("div",{children:[r("h4",{className:"text-sm font-medium text-gray-600 mb-2",children:"Secondary (Dark Blue)"}),r(e,{variant:"secondary",children:"Technical Details"})]}),r("div",{children:[r("h4",{className:"text-sm font-medium text-gray-600 mb-2",children:"Tertiary (Dark Gray)"}),r(e,{variant:"tertiary",children:"Additional Notes"})]}),r("div",{children:[r("h4",{className:"text-sm font-medium text-gray-600 mb-2",children:"With Custom Styling"}),r(e,{variant:"primary",className:"text-center bg-black p-4 rounded",children:"Featured Highlight"})]})]}),parameters:{layout:"padded"}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Section'
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,y,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Section'
  }
}`,...(p=(y=t.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};var h,u,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Section'
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,S,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'This is a longer section heading that demonstrates text behavior'
  },
  parameters: {
    layout: 'padded'
  }
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var x,H,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Styled Section',
    className: 'border-l-4 border-blue pl-4'
  }
}`,...(N=(H=i.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var f,T,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  globals: {
    backgrounds: {
      value: 'grey'
    }
  },
  render: () => <div className='space-y-6'>
      <div>
        <h4 className='text-sm font-medium text-gray-600 mb-2'>Primary (Dark White)</h4>
        <H3 variant='primary'>Project Overview</H3>
      </div>
      <div>
        <h4 className='text-sm font-medium text-gray-600 mb-2'>Secondary (Dark Blue)</h4>
        <H3 variant='secondary'>Technical Details</H3>
      </div>
      <div>
        <h4 className='text-sm font-medium text-gray-600 mb-2'>Tertiary (Dark Gray)</h4>
        <H3 variant='tertiary'>Additional Notes</H3>
      </div>
      <div>
        <h4 className='text-sm font-medium text-gray-600 mb-2'>With Custom Styling</h4>
        <H3 variant='primary' className='text-center bg-black p-4 rounded'>
          Featured Highlight
        </H3>
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const A=["Primary","Secondary","Tertiary","LongHeading","WithCustomClass","AllVariants"];export{o as AllVariants,s as LongHeading,a as Primary,t as Secondary,n as Tertiary,i as WithCustomClass,A as __namedExportsOrder,W as default};
