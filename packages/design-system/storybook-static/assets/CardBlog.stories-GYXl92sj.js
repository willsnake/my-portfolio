import{c as N,u as e}from"./cv-DPf2FYxQ.js";import{B as W}from"./Button-8PezarZv.js";import{H as M}from"./H3-C_Vafkv5.js";import{T as q}from"./Text-CPGetSXx.js";import"./iframe-CPDvbRx_.js";const t=({title:T="How to do x & y tutorial really long article title",description:A="Secure Development of web and Android apps based on OWASP standards. Development of Augmented Reality apps.",imageSrc:R="https://willsnake.dev/assets/blog-placeholder.webp",imageAlt:P="Blog post image",buttonText:G="Read more",className:L="",onButtonClick:D,children:j,...z})=>{const O=N({base:"min-w-[370px] max-w-[592px] text-left bg-white rounded shadow-card-blog"});return e("div",{...z,class:O({className:L}),children:[e("img",{src:R,alt:P,class:"mb-6 rounded-t w-full h-auto"}),e("div",{class:"px-4 pb-6",children:[e(M,{variant:"tertiary",className:"mb-4",children:T}),e(q,{variant:"primary",className:"mb-4",children:A}),e(W,{variant:"secondary",text:G,onClick:D})]}),j]})},Q={title:"Design System/CardBlog",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"Blog post title"},description:{control:"text",description:"Blog post description"},imageSrc:{control:"text",description:"Image source URL"},imageAlt:{control:"text",description:"Image alt text"},buttonText:{control:"text",description:"Button text"},className:{control:"text",description:"Additional CSS classes"},onButtonClick:{action:"button clicked",description:"Button click handler"}}},o={args:{title:"How to do x & y tutorial really long article title",description:"Secure Development of web and Android apps based on OWASP standards. Development of Augmented Reality apps.",imageSrc:"https://willsnake.dev/assets/blog-placeholder.webp",imageAlt:"Blog post image",buttonText:"Read more",onButtonClick:()=>console.log("Read more clicked")}},a={args:{title:"Quick Guide",description:"A brief overview of the topic.",imageSrc:"https://willsnake.dev/assets/blog-placeholder.webp",imageAlt:"Guide image",buttonText:"Learn more",onButtonClick:()=>console.log("Learn more clicked")}},i={args:{title:"The Complete Guide to Modern Web Development: Best Practices, Tools, and Techniques for Building Scalable Applications",description:"This comprehensive article covers everything you need to know about modern web development, including the latest frameworks, development tools, testing methodologies, deployment strategies, and performance optimization techniques that every developer should master.",imageSrc:"https://willsnake.dev/assets/blog-placeholder.webp",imageAlt:"Web development guide",buttonText:"Read full article",onButtonClick:()=>console.log("Read full article clicked")},parameters:{layout:"padded"}},r={args:{title:"Project Showcase",description:"Explore this amazing project and see how it was built.",imageSrc:"https://willsnake.dev/assets/blog-placeholder.webp",imageAlt:"Project showcase",buttonText:"View Project",onButtonClick:()=>console.log("View Project clicked")}},l={args:{title:"Featured Article",description:"This is a featured article with special styling.",imageSrc:"https://willsnake.dev/assets/blog-placeholder.webp",imageAlt:"Featured article",buttonText:"Read more",className:"border-2 border-blue",onButtonClick:()=>console.log("Featured article clicked")}},s={render:()=>e("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl",children:[e(t,{title:"Getting Started with React",description:"Learn the fundamentals of React development.",imageSrc:"https://willsnake.dev/assets/blog-placeholder.webp",imageAlt:"React tutorial",buttonText:"Start Learning",onButtonClick:()=>console.log("React tutorial clicked")}),e(t,{title:"Advanced TypeScript Tips",description:"Master advanced TypeScript patterns and techniques.",imageSrc:"https://willsnake.dev/assets/blog-placeholder.webp",imageAlt:"TypeScript guide",buttonText:"Explore",onButtonClick:()=>console.log("TypeScript guide clicked")}),e(t,{title:"CSS Grid Layout",description:"Build responsive layouts with CSS Grid.",imageSrc:"https://willsnake.dev/assets/blog-placeholder.webp",imageAlt:"CSS Grid tutorial",buttonText:"Learn More",onButtonClick:()=>console.log("CSS Grid tutorial clicked")}),e(t,{title:"Performance Optimization",description:"Optimize your web applications for better performance.",imageSrc:"https://willsnake.dev/assets/blog-placeholder.webp",imageAlt:"Performance guide",buttonText:"Optimize Now",onButtonClick:()=>console.log("Performance guide clicked")})]}),parameters:{layout:"padded"}};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'How to do x & y tutorial really long article title',
    description: 'Secure Development of web and Android apps based on OWASP standards. Development of Augmented Reality apps.',
    imageSrc: 'https://willsnake.dev/assets/blog-placeholder.webp',
    imageAlt: 'Blog post image',
    buttonText: 'Read more',
    onButtonClick: () => console.log('Read more clicked')
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Quick Guide',
    description: 'A brief overview of the topic.',
    imageSrc: 'https://willsnake.dev/assets/blog-placeholder.webp',
    imageAlt: 'Guide image',
    buttonText: 'Learn more',
    onButtonClick: () => console.log('Learn more clicked')
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,b,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'The Complete Guide to Modern Web Development: Best Practices, Tools, and Techniques for Building Scalable Applications',
    description: 'This comprehensive article covers everything you need to know about modern web development, including the latest frameworks, development tools, testing methodologies, deployment strategies, and performance optimization techniques that every developer should master.',
    imageSrc: 'https://willsnake.dev/assets/blog-placeholder.webp',
    imageAlt: 'Web development guide',
    buttonText: 'Read full article',
    onButtonClick: () => console.log('Read full article clicked')
  },
  parameters: {
    layout: 'padded'
  }
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var w,S,k;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Project Showcase',
    description: 'Explore this amazing project and see how it was built.',
    imageSrc: 'https://willsnake.dev/assets/blog-placeholder.webp',
    imageAlt: 'Project showcase',
    buttonText: 'View Project',
    onButtonClick: () => console.log('View Project clicked')
  }
}`,...(k=(S=r.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var v,C,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Featured Article',
    description: 'This is a featured article with special styling.',
    imageSrc: 'https://willsnake.dev/assets/blog-placeholder.webp',
    imageAlt: 'Featured article',
    buttonText: 'Read more',
    className: 'border-2 border-blue',
    onButtonClick: () => console.log('Featured article clicked')
  }
}`,...(x=(C=l.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var f,y,B;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl'>
      <CardBlog title='Getting Started with React' description='Learn the fundamentals of React development.' imageSrc='https://willsnake.dev/assets/blog-placeholder.webp' imageAlt='React tutorial' buttonText='Start Learning' onButtonClick={() => console.log('React tutorial clicked')} />
      <CardBlog title='Advanced TypeScript Tips' description='Master advanced TypeScript patterns and techniques.' imageSrc='https://willsnake.dev/assets/blog-placeholder.webp' imageAlt='TypeScript guide' buttonText='Explore' onButtonClick={() => console.log('TypeScript guide clicked')} />
      <CardBlog title='CSS Grid Layout' description='Build responsive layouts with CSS Grid.' imageSrc='https://willsnake.dev/assets/blog-placeholder.webp' imageAlt='CSS Grid tutorial' buttonText='Learn More' onButtonClick={() => console.log('CSS Grid tutorial clicked')} />
      <CardBlog title='Performance Optimization' description='Optimize your web applications for better performance.' imageSrc='https://willsnake.dev/assets/blog-placeholder.webp' imageAlt='Performance guide' buttonText='Optimize Now' onButtonClick={() => console.log('Performance guide clicked')} />
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(B=(y=s.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const _=["Default","ShortContent","LongContent","CustomButton","WithCustomStyling","MultipleCards"];export{r as CustomButton,o as Default,i as LongContent,s as MultipleCards,a as ShortContent,l as WithCustomStyling,_ as __namedExportsOrder,Q as default};
