import{c as o,u as e}from"./cv-DPf2FYxQ.js";import"./iframe-CPDvbRx_.js";const i=({title:t="Card Title",date:C="current",description:T="Card Description",className:O="",row:l=1,isOdd:E=!0,style:W={},children:S,...D})=>{const J=o({base:"card relative w-full text-left px-[30px] flex flex-col pt-6 pb-8 gap-y-2 border-l border-blue ws-card last-of-type:border-0",variants:{position:{odd:"lg:border-l-0 lg:text-right lg:border-r lg:ml-[1px]",even:""}},defaultVariants:{position:"even"}}),F=o({base:"absolute w-3 h-3 top-0 left-[-7px] border-[3px] bg-white border-blue rounded-full",variants:{position:{odd:"lg:left-[99.2%]",even:""}},defaultVariants:{position:"even"}}),M=o({base:"text-dark-gray absolute text-xl top-[-8px]",variants:{position:{odd:"lg:right-[30px]",even:""}},defaultVariants:{position:"even"}}),P={gridRowStart:l,gridRowEnd:l+1,...W},d=E?"odd":"even";return e("div",{class:J({position:d,className:O}),style:P,...D,children:[e("div",{class:F({position:d})}),e("h3",{class:M({position:d}),children:t}),e("p",{class:"text-gray text-sm font-medium",children:C}),e("p",{class:"text-gray text-base",children:T||S})]})},H={title:"Design System/Card",component:i,globals:{backgrounds:{value:"light"}},tags:["autodocs"],argTypes:{title:{control:"text",description:"Title of the card"},date:{control:"text",description:"Date or time information"},description:{control:"text",description:"Description or content of the card"},row:{control:{type:"number",min:1,max:10},description:"Grid row position"},isOdd:{control:"boolean",description:"Whether the card is in an odd position (affects styling)"}}},r={args:{title:"Default Card",date:"May 2025",description:"This is a default card with a description.",row:1,isOdd:!0},render:t=>e("div",{style:{display:"grid",maxHeight:"800px",maxWidth:"800px",margin:"0 auto"},children:e(i,{...t})})},n={args:{title:"Even Position Card",date:"June 2025",description:"This card is in an even position.",row:1,isOdd:!1},render:t=>e("div",{style:{display:"grid",maxWidth:"800px",margin:"0 auto"},children:e(i,{...t})})},a={args:{title:"Card with Children",date:"July 2025",row:1,isOdd:!0},render:t=>e("div",{style:{display:"grid",maxWidth:"800px",margin:"0 auto"},children:e(i,{...t,children:[e("p",{children:"This is a card with children elements instead of a description prop."}),e("p",{children:"You can add multiple elements as children."})]})})},s={render:()=>e("div",{style:{display:"grid",maxWidth:"800px",margin:"0 auto"},children:[e(i,{title:"First Event",date:"January 2025",description:"This is the first event in our timeline.",row:1,isOdd:!0}),e(i,{title:"Second Event",date:"February 2025",description:"This is the second event in our timeline.",row:2,isOdd:!1}),e(i,{title:"Third Event",date:"March 2025",description:"This is the third event in our timeline.",row:3,isOdd:!0})]})};var c,p,h;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Default Card',
    date: 'May 2025',
    description: 'This is a default card with a description.',
    row: 1,
    isOdd: true
  },
  render: args => <div style={{
    display: 'grid',
    maxHeight: '800px',
    maxWidth: '800px',
    margin: '0 auto'
  }}>
      <Card {...args} />
    </div>
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,m,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Even Position Card',
    date: 'June 2025',
    description: 'This card is in an even position.',
    row: 1,
    isOdd: false
  },
  render: args => <div style={{
    display: 'grid',
    maxWidth: '800px',
    margin: '0 auto'
  }}>
      <Card {...args} />
    </div>
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,x,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Card with Children',
    date: 'July 2025',
    row: 1,
    isOdd: true
  },
  render: args => <div style={{
    display: 'grid',
    maxWidth: '800px',
    margin: '0 auto'
  }}>
      <Card {...args}>
        <p>This is a card with children elements instead of a description prop.</p>
        <p>You can add multiple elements as children.</p>
      </Card>
    </div>
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,b,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    maxWidth: '800px',
    margin: '0 auto'
  }}>
      <Card title='First Event' date='January 2025' description='This is the first event in our timeline.' row={1} isOdd={true} />
      <Card title='Second Event' date='February 2025' description='This is the second event in our timeline.' row={2} isOdd={false} />
      <Card title='Third Event' date='March 2025' description='This is the third event in our timeline.' row={3} isOdd={true} />
    </div>
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const R=["Default","EvenPosition","WithChildren","Timeline"];export{r as Default,n as EvenPosition,s as Timeline,a as WithChildren,R as __namedExportsOrder,H as default};
