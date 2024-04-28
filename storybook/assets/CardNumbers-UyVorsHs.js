import{j as t}from"./jsx-runtime-BnIj46N_.js";import{u as a}from"./styled-components.browser.esm-BDDUX98t.js";const o=a.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  div {
    width: 34px;
  }
`,N="•",u={MASTERCARD:{NAME:"MasterCard",MIN_NUMBER:51,MAX_NUMBER:55},VISA:{NAME:"Visa",MIN_NUMBER:40,MAX_NUMBER:49}},m=({cardNumbers:n})=>t.jsx(o,{children:n.map((e,s)=>{const r=e!==""&&!Number.isNaN(Number(e)),i=r?N.repeat(e.toString().length):null;return t.jsx("div",{children:s>1?i:r&&e},s)})});m.__docgenInfo={description:"",methods:[],displayName:"CardNumbers",props:{cardNumbers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};export{m as C,u as a};
