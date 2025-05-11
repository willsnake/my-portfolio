import{c as y,u as e}from"./cv-DPf2FYxQ.js";import{H as D}from"./H3-C_Vafkv5.js";import"./iframe-CPDvbRx_.js";const f=({text:c="Topic Text",className:o="",...l})=>{const n=y({base:"px-2 py-1 bg-lightest-gray inline-block rounded"});return e("div",{className:n({className:o}),...l,children:e("span",{className:"text-sm text-dark-gray inline-block",children:c})})},v=({title:c="Project Card Title",topics:o=["Example"],description:l="Project Description",projectLink:n="#",className:T="",...x})=>{const P=y({base:"w-full text-left mb-10"});return e("div",{className:P({className:T}),...x,children:[e("div",{className:"px-6 py-8 bg-dark-blue mb-4",children:[e(D,{variant:"primary",className:"inline-block",children:c}),e("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"inline-block ml-2",children:e("img",{width:"16",height:"16",src:"https://willsnake.dev/assets/link-icon.svg",alt:"Link icon that redirects to the repo url"})})]}),o.map((C,S)=>e(f,{text:C,className:"mr-2 mb-2"},S)),e("p",{className:"text-base text-gray mt-4",children:l})]})},W={title:"Design System/ProjectCard",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},description:{control:"text"},projectLink:{control:"text"},topics:{control:"object"},className:{control:"text"}}},t={args:{title:"Project Card Title",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",projectLink:"#",topics:["React","TypeScript"]}},i={args:{title:"Multi-Topic Project",description:"This is a project with multiple technologies and topics.",projectLink:"https://github.com/username/project",topics:["React","TypeScript","GraphQL","Node.js","PostgreSQL"]}},s={args:{title:"Detailed Project",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl eget. Nullam euismod, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl eget. Nullam euismod, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl eget.",projectLink:"#",topics:["React","Firebase"]}},r={args:{title:"Custom Styled Project",description:"A project card with custom styling",projectLink:"#",topics:["Design","UI/UX"],className:"border border-dark-blue rounded-lg"}};var a,p,u;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Project Card Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    projectLink: '#',
    topics: ['React', 'TypeScript']
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,d,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Multi-Topic Project',
    description: 'This is a project with multiple technologies and topics.',
    projectLink: 'https://github.com/username/project',
    topics: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'PostgreSQL']
  }
}`,...(g=(d=i.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,j,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Detailed Project',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl eget. Nullam euismod, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl eget. Nullam euismod, nisl eget ultricies ultricies, nisl nisl ultricies nisl, nec ultricies nisl nisl eget.',
    projectLink: '#',
    topics: ['React', 'Firebase']
  }
}`,...(b=(j=s.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var k,L,N;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Custom Styled Project',
    description: 'A project card with custom styling',
    projectLink: '#',
    topics: ['Design', 'UI/UX'],
    className: 'border border-dark-blue rounded-lg'
  }
}`,...(N=(L=r.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const M=["Default","WithMultipleTopics","WithLongDescription","WithCustomClass"];export{t as Default,r as WithCustomClass,s as WithLongDescription,i as WithMultipleTopics,M as __namedExportsOrder,W as default};
