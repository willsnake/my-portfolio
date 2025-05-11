import{c as w,u as t}from"./cv-DPf2FYxQ.js";import"./iframe-CPDvbRx_.js";function e({to:v="/",text:y="I'm a Link",className:D,children:E,target:G,rel:V,...I}){const T=w({base:"font-medium text-sm underline text-dark-blue hover:text-blue transition-colors"});return t("a",{href:v,className:T({className:D}),target:G,rel:V,...I,children:E||y})}const M={title:"Design System/Link",component:e,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{to:{control:"text"},text:{control:"text"},target:{control:"select",options:["_blank","_self","_parent","_top"]},rel:{control:"text"},className:{control:"text"}}},o={args:{text:"I'm a Link",to:"/"}},r={args:{text:"Visit GitHub",to:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},s={args:{text:"Go to Portfolio",to:"/portfolio"}},a={args:{to:"/contact",children:"Contact Me →"}},n={args:{text:"Custom Styled Link",to:"/custom",className:"text-lg font-bold"}},c={render:()=>t("div",{className:"flex flex-col gap-4 p-4",children:[t(e,{text:"Default Link",to:"/"}),t(e,{text:"External Link",to:"https://example.com",target:"_blank",rel:"noopener noreferrer"}),t(e,{to:"/portfolio",children:"Link with children →"}),t(e,{text:"Custom Class",to:"/custom",className:"text-lg font-bold"})]})};var l,i,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: "I'm a Link",
    to: '/'
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,u,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'Visit GitHub',
    to: 'https://github.com',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var x,g,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'Go to Portfolio',
    to: '/portfolio'
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,k,L;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    to: '/contact',
    children: 'Contact Me →'
  }
}`,...(L=(k=a.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var C,b,_;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: 'Custom Styled Link',
    to: '/custom',
    className: 'text-lg font-bold'
  }
}`,...(_=(b=n.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var S,N,W;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className='flex flex-col gap-4 p-4'>
      <Link text='Default Link' to='/' />
      <Link text='External Link' to='https://example.com' target='_blank' rel='noopener noreferrer' />
      <Link to='/portfolio'>Link with children →</Link>
      <Link text='Custom Class' to='/custom' className='text-lg font-bold' />
    </div>
}`,...(W=(N=c.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const P=["Default","External","WithCustomText","WithChildren","WithCustomClass","AllVariants"];export{c as AllVariants,o as Default,r as External,a as WithChildren,n as WithCustomClass,s as WithCustomText,P as __namedExportsOrder,M as default};
