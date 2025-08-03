import{u as r}from"./cv-DPf2FYxQ.js";import{T as i}from"./Text-CPGetSXx.js";import"./iframe-CPDvbRx_.js";const A={title:"Design System/Text",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary"],description:"Text variant style"},children:{control:"text",description:"Text content"},className:{control:"text",description:"Additional CSS classes"}}},e={args:{variant:"primary",children:"This is primary text content"}},t={globals:{backgrounds:{value:"dark"}},args:{variant:"secondary",children:"This is secondary text content"}},a={args:{variant:"primary",children:"This is a longer text example to demonstrate how the Text component handles multiple lines of content. It should wrap naturally and maintain proper styling throughout."},parameters:{layout:"padded"}},n={args:{variant:"primary",children:"Text with custom styling",className:"font-bold text-lg"}},s={render:()=>r("div",{className:"space-y-4",children:[r("div",{children:[r("h3",{className:"text-sm font-medium text-gray-900 mb-2",children:"Primary"}),r(i,{variant:"primary",children:"Primary text variant - default styling for regular content"})]}),r("div",{children:[r("h3",{className:"text-sm font-medium text-gray-900 mb-2",children:"Secondary"}),r(i,{variant:"secondary",children:"Secondary text variant - lighter styling for secondary content"})]})]}),parameters:{layout:"padded"}},o={args:{variant:"primary",children:"Click to interact with this text",onClick:()=>alert("Text clicked!"),style:{cursor:"pointer"}}};var c,d,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'This is primary text content'
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,p,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  globals: {
    backgrounds: {
      value: 'dark'
    }
  },
  args: {
    variant: 'secondary',
    children: 'This is secondary text content'
  }
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var u,h,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'This is a longer text example to demonstrate how the Text component handles multiple lines of content. It should wrap naturally and maintain proper styling throughout.'
  },
  parameters: {
    layout: 'padded'
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,v,T;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Text with custom styling',
    className: 'font-bold text-lg'
  }
}`,...(T=(v=n.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var f,S,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className='space-y-4'>
      <div>
        <h3 className='text-sm font-medium text-gray-900 mb-2'>Primary</h3>
        <Text variant='primary'>Primary text variant - default styling for regular content</Text>
      </div>
      <div>
        <h3 className='text-sm font-medium text-gray-900 mb-2'>Secondary</h3>
        <Text variant='secondary'>Secondary text variant - lighter styling for secondary content</Text>
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var k,C,N;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Click to interact with this text',
    onClick: () => alert('Text clicked!'),
    style: {
      cursor: 'pointer'
    }
  }
}`,...(N=(C=o.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const L=["Primary","Secondary","LongText","WithCustomClass","AllVariants","Interactive"];export{s as AllVariants,o as Interactive,a as LongText,e as Primary,t as Secondary,n as WithCustomClass,L as __namedExportsOrder,A as default};
