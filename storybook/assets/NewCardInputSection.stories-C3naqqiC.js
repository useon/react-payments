import{j as e}from"./jsx-runtime-BnIj46N_.js";import{I as a}from"./Input-tI3NTEwS.js";import{u as r}from"./styled-components.browser.esm-BDDUX98t.js";import"./index-CsdIBAqE.js";const j=r.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 31px;
  margin-right: 31px;
`,A=r.h1`
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  text-align: left;
  color: #000000;
`,I=r.p`
  font-family: Noto Sans KR;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13.76px;
  text-align: left;
  color: #8b95a1;
`;r.article`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;const L=r.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,S=r.label`
  font-size: 12px;
`,N=r.div`
  display: flex;
  gap: 10px;
`,Y=r.div`
  height: 20px;
  line-height: 20px;
  font-size: 9.5px;
  color: #ff3d3d;
`,B=({label:i,mainText:u,subText:y,errorMessage:l,children:D})=>e.jsxs(j,{children:[e.jsxs("div",{children:[e.jsx(A,{children:u}),e.jsx(I,{children:y})]}),e.jsxs(L,{children:[e.jsx(S,{children:i}),e.jsx(N,{children:D}),e.jsx(Y,{children:l&&l.find(M=>M!=="")})]})]});B.__docgenInfo={description:"",methods:[],displayName:"NewCardInputSection",props:{label:{required:!0,tsType:{name:"string"},description:""},mainText:{required:!0,tsType:{name:"string"},description:""},subText:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const q={title:"Components/NewCardInputSection",component:B,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{label:"Label",mainText:"Main Text",subText:"Sub Text",errorMessage:["","","",""],children:[e.jsx(a,{maxLength:2,placeholder:"Enter text..."},"key")]}},n={args:{label:"카드 번호",mainText:"결제할 카드 번호를 입력해 주세요",subText:"본인 명의의 카드만 결제 가능합니다.",errorMessage:["Error message 1","Error message 2","Error message 3","Error message 4"],children:Array.from({length:4}).map((i,u)=>e.jsx(a,{maxLength:4,placeholder:"1234"},u))}},t={args:{label:"유효 기간",mainText:"카드 유효기간을 입력해 주세요",subText:"월/년도(MMYY)를 순서대로 입력해 주세요.",errorMessage:["Error message 1","Error message 2"],children:[e.jsx(a,{maxLength:2,placeholder:"MM"},"month"),e.jsx(a,{maxLength:2,placeholder:"YY"},"year")]}},o={args:{label:"소유자 이름",mainText:"카드 소유자 이름을 입력해 주세요",subText:"",errorMessage:["Error message 1"],children:[e.jsx(a,{maxLength:2,placeholder:"John Doe"},"month")]}};var m,p,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    mainText: 'Main Text',
    subText: 'Sub Text',
    errorMessage: ['', '', '', ''],
    children: [<Input key='key' maxLength={2} placeholder='Enter text...' />]
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var x,C,d;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: '카드 번호',
    mainText: '결제할 카드 번호를 입력해 주세요',
    subText: '본인 명의의 카드만 결제 가능합니다.',
    errorMessage: ['Error message 1', 'Error message 2', 'Error message 3', 'Error message 4'],
    children: Array.from({
      length: 4
    }).map((_, index) => <Input key={index} maxLength={4} placeholder='1234' />)
  }
}`,...(d=(C=n.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};var g,h,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: '유효 기간',
    mainText: '카드 유효기간을 입력해 주세요',
    subText: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    errorMessage: ['Error message 1', 'Error message 2'],
    children: [<Input key='month' maxLength={2} placeholder='MM' />, <Input key='year' maxLength={2} placeholder='YY' />]
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var E,b,T;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: '소유자 이름',
    mainText: '카드 소유자 이름을 입력해 주세요',
    subText: '',
    errorMessage: ['Error message 1'],
    children: [<Input key='month' maxLength={2} placeholder='John Doe' />]
  }
}`,...(T=(b=o.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const v=["Default","CardNumbers","CardExpiration","UserName"];export{t as CardExpiration,n as CardNumbers,s as Default,o as UserName,v as __namedExportsOrder,q as default};
