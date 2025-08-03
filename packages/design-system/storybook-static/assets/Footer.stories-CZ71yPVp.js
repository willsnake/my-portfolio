import{c as D,u as e}from"./cv-DPf2FYxQ.js";import"./iframe-CPDvbRx_.js";const v=({brandText:T="/ W I L L S N A K E",designerName:I="@lilycaulfield",designerUrl:W="/",showAttribution:C=!0,className:E="",children:U,...K})=>{const k=D({base:"w-full h-20 bg-black-blue lg:h-[60px]"});return e("div",{...K,class:k({className:E}),children:[e("div",{class:"h-full flex items-center content-center justify-between px-6 lg:pl-10",children:[e("span",{class:"text-sm text-white font-medium",children:T}),C&&e("p",{class:"hidden lg:block text-white",children:["Designed by"," ",e("a",{href:W,class:"text-white",target:"_blank",rel:"noopener noreferrer",children:I})]})]}),U]})},_={title:"Design System/Footer",component:v,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{brandText:{control:"text",description:"Brand text to display"},designerName:{control:"text",description:"Designer name for attribution"},designerUrl:{control:"text",description:"Designer URL for attribution link"},showAttribution:{control:"boolean",description:"Show/hide designer attribution"},className:{control:"text",description:"Additional CSS classes"}}},t={args:{brandText:"/ W I L L S N A K E",designerName:"@lilycaulfield",designerUrl:"/",showAttribution:!0}},r={args:{brandText:"/ W I L L S N A K E",showAttribution:!1}},s={args:{brandText:"/ M Y   P O R T F O L I O",designerName:"@designer",designerUrl:"https://example.com",showAttribution:!0}},a={args:{brandText:"/ W I L L S N A K E",designerName:"@custom_designer",designerUrl:"https://customdesigner.com",showAttribution:!0}},n={args:{brandText:"/ W I L L S N A K E",designerName:"@lilycaulfield",designerUrl:"/",showAttribution:!0,className:"border-t-2 border-blue"}},o={globals:{backgrounds:{value:"grey"}},render:()=>e("div",{className:"min-h-screen flex flex-col",children:[e("div",{className:"flex-1 p-8",children:e("div",{className:"max-w-4xl mx-auto",children:[e("h1",{className:"text-3xl font-bold text-gray-900 mb-6",children:"Page Content"}),e("p",{className:"text-gray-600 mb-4",children:"This is a simulated page to show how the footer appears in context."}),e("p",{className:"text-gray-600 mb-4",children:"The footer will stick to the bottom of the page layout."}),e("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-8",children:[e("div",{className:"bg-white p-6 rounded shadow",children:[e("h3",{className:"font-semibold text-gray-900 mb-2",children:"Section 1"}),e("p",{className:"text-gray-600",children:"Some content here..."})]}),e("div",{className:"bg-white p-6 rounded shadow",children:[e("h3",{className:"font-semibold text-gray-900 mb-2",children:"Section 2"}),e("p",{className:"text-gray-600",children:"More content here..."})]})]})]})}),e(v,{brandText:"/ W I L L S N A K E",designerName:"@lilycaulfield",designerUrl:"/",showAttribution:!0})]}),parameters:{layout:"fullscreen"}};var i,l,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    brandText: '/ W I L L S N A K E',
    designerName: '@lilycaulfield',
    designerUrl: '/',
    showAttribution: true
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    brandText: '/ W I L L S N A K E',
    showAttribution: false
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    brandText: '/ M Y   P O R T F O L I O',
    designerName: '@designer',
    designerUrl: 'https://example.com',
    showAttribution: true
  }
}`,...(p=(h=s.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var b,x,N;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    brandText: '/ W I L L S N A K E',
    designerName: '@custom_designer',
    designerUrl: 'https://customdesigner.com',
    showAttribution: true
  }
}`,...(N=(x=a.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var f,w,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    brandText: '/ W I L L S N A K E',
    designerName: '@lilycaulfield',
    designerUrl: '/',
    showAttribution: true,
    className: 'border-t-2 border-blue'
  }
}`,...(y=(w=n.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var S,A,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  globals: {
    backgrounds: {
      value: 'grey'
    }
  },
  render: () => <div className='min-h-screen flex flex-col'>
      {/* Simulated page content */}
      <div className='flex-1 p-8'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl font-bold text-gray-900 mb-6'>Page Content</h1>
          <p className='text-gray-600 mb-4'>This is a simulated page to show how the footer appears in context.</p>
          <p className='text-gray-600 mb-4'>The footer will stick to the bottom of the page layout.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='bg-white p-6 rounded shadow'>
              <h3 className='font-semibold text-gray-900 mb-2'>Section 1</h3>
              <p className='text-gray-600'>Some content here...</p>
            </div>
            <div className='bg-white p-6 rounded shadow'>
              <h3 className='font-semibold text-gray-900 mb-2'>Section 2</h3>
              <p className='text-gray-600'>More content here...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer at bottom */}
      <Footer brandText='/ W I L L S N A K E' designerName='@lilycaulfield' designerUrl='/' showAttribution={true} />
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(L=(A=o.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const M=["Default","WithoutAttribution","CustomBrand","CustomDesigner","WithCustomStyling","InContext"];export{s as CustomBrand,a as CustomDesigner,t as Default,o as InContext,n as WithCustomStyling,r as WithoutAttribution,M as __namedExportsOrder,_ as default};
