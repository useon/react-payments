import{j as e}from"./jsx-runtime-BnIj46N_.js";import{u as a}from"./styled-components.browser.esm-BDDUX98t.js";import{C as N,a as n}from"./CardNumbers-UyVorsHs.js";import{C as h}from"./CardExpiration-Bxyko4Bm.js";import"./index-CsdIBAqE.js";const M=a.div`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background: ${({$cardBackground:r})=>r?E(r):"#333333"};
  box-shadow: 3px 3px 5px 0px #00000040;
  margin: auto;
`,E=r=>{switch(r){case"BC카드":return"#F04651";case"신한카드":return"#0046FF";case"카카오뱅크":return"#FFE600";case"현대카드":return"#000000";case"우리카드":return"#007BC8";case"롯데카드":return"#ED1C24";case"하나카드":return"#009490";case"국민카드":return"#6A6056";case"CVC":return"#D5D5D5";default:return"#333333"}},w=a.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 12px;
`,B=a.div`
  width: 36px;
  height: 22px;
  background: #ddcd78;
  border: 0.5px solid #ddcd781a;
  border-radius: 3px;
`,U=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 22px;
  background: #ffffff;
  border: 0.5px solid #0000001a;
  border-radius: 3px;

  img {
    width: 60%;
  }
`,I=a.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.16em;
  text-align: left;
  color: #ffffff;
  margin: 6px 17px;

  div {
    height: 20px;
  }
`;a.div`
  height: 24px;
  display: flex;
  justify-content: flex-end;
  margin-top: 84px;
  background-color: #cbba64;
`;a.span`
  margin-right: 16px;
  color: #ffffff;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-align: right;
`;const b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAiCAYAAAAUAipQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPbSURBVHgBxZnNbtNAEMf/u/5Iw5cSuIAEIkggAQI1IE6cwhMUiSMSTZ+gvAHhCShHTm0P3Nsrl5oLFy4tBzihpgIJxEcT0QrSxPYy45A0SZ3abkf0J7Vx7Mnaf8/O7O6swiFoYOJi77iI1gYEMC/Rb1M9xIHbVGkN14FCAfZkAF2lH1XoVCnGbNUAdXq8pS10li8Bzf3aNPMo+BYmwxBVJLSpFZacEMtqZv82eyQKY0GnYM+S6WP6KyADBmbBQqdWxPCbZ0FtjVkyoDaRqU1iwXVQS/LmvsJ+wJ0igznEv8mUGHrDZu4M/Kf8zV/EVGCwgOyCBmnSk8/lpvF0nMFYYT/hPOt6SQbqTkunXrTrJgfRNnMGM3HdM1YYiZqnS1UIcvyuD/dGiM5t+jIBMTj+SNytUXF61PCfp6oQJH/HR+5yCNUCnHd0wocY5JlSW2GF43bw/JAwEjUr2f2YiasB8tfD3QfZppuuQ5ryjsKTwRP9rviFlLtwRW+pjxsUHnRir3GXNIdJH3H306g4j/A6Ou6ddOA8gTB5GvXGYb+HOEEYZduISBh7SwnHFXuL42ocHG/qO0TheNuh4SS6P//7397qYX2GOKY76HeFkbcqEMY+axJtdAOiGZLh6R5nSP0NThmHmlnsxSqGsE4kC2O0cHdkOhpT2oG6CGH0ifS2nP7FMShrCu8yhLFPp/MWo/5AHNJU0vKjCT2sm14YknNMZkhUQWddiqRBuThyOCvWIYxp48jR3fWSLOF26oW56Ey/R7Ti1rBWIUywmV5YmCGDpsUorJLHWmsQxm+kF2ZOQhwTYk1TPaJpoDwIYmiB5H9NFmcm5HMyd8P8DLxoSmVRTQLCtD5YiTbyA000pfL4MxJWRHsZwtmx/UknZsfgEsThChZ/9tdj9Bg1CPP77XivBRfIY3mIwhW1XlmuL6yIzqJ0rO18tGJjjWMrFPYWx5ZjdstxQzUPC1TrEe6S229sGteGz/k36UFsiJJzUBmsVA0Jo/p7nbrkfclBmwfrrRWnH2/+NfkUrxSqo5XhPeU36pJrNGjfgqDnAhrXfr1ymsEV1MNzkKTJotxpLI5e0HHWXc/pe4IxV7c3Uemcxz06FpnpcEwpC5U4UUziKNqAM02lzhoOtMrmLq3mNI49L6LZ797tRUxTbaJ2sDa7dXs3xPP9dl5Sz31YoKEtJNpBqSTZUg3FIztvVNAoLJBePbUZbSEltAmP5oBekqAB+2w0aJvMR6tsI5gMoUvd+YPiHRWampmNDizvHHXlDE1G20pUjSsrjUltUCKhBcVTPYUm7Z1xUvBomlTP0uZf3cFFhkPxfLAAAAAASUVORK5CYII=",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAATCAYAAAAu2nXoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATbSURBVHgBlVhdbttGEJ5ZklIct6gC1Hb7VOWhQGK3sHqCKCeIb2D1Bs5bazmwilrpa3OCKCeIcoLIJ6iMxI7RvjBP9U+Kqg9B7Ejc6QwpUtzl6icfIHC5u7Pzs/NHYeXOb9XAo3swA5r04J+TvRfT1l1nUAThu9PdQ9faUOve4M3eW+OMaqtSXgq2CakGCDUErBDQAAhDXu7DyOte/PnTkZM/0wbLpQf2/OXx7rP8uw9X1wPvM+9tRPhAAW7xXNUmUoiwcre9c/mm+cTFrKT0PgI08nPaI3k/5LVtXmvl124Q3edHpuzqenufWeyI3Kxkti8es+I83IIgkvNuO/nf9F8iUM2eX/m2fXT5V7OfKTsIWwN+9sa/h19992udSD21lVaJME5lWaS6NRVeHu/FVkWkOuQUEFxdRbEAciOxoIlCM0EEfdf8l98/voea3PQ+iEdldMpeP3v9qHcdDH8QgY0FhKoIZ+9fufN4W9bycxqomyM0BCFmPjYwlJd9vlGcq2hMR/FlFKCi2IOcQDSNoFybBv3WgA/v2PP+jdJmgZmnG4V9Gn6X58p6W5gZBuI47MmzUhPD4Y4pHQwQ9f3z4ybK7/r98Ja8s4E6HulCvEo+YK9owDRYhvSn7dMe9jxNFm1sqcM8M95ZB1OZzt9p8tG4CR7ZR8du5UdiOHONNPTOTx710ncrxAqQfGBNyf7MuBw8NfHG1JOcNysYeR+PxsQZbLeQxGTTsVtlGRCVxKuFj+jMqAkB1St3D76BBWEnRSR4aO/Je+NUZcWV2dZ983Csp+OxC21ZZOHZ6eRm7MQjpSTNjk5jcrkpKwxX1w+ezlPakSvCs5NmB2ZckJp1ILthF0xpsiQVQFw7jXjkxNRKx0lMmsoiqMx4sTHRLEkTAbGRKN3ehymwc0WWY6xEtrCykY+FdB8EQTUmVBPFxgiH70dZ45HEpAmiJDmlOH/dfMJCtmAK2DNaqxsHf9hVIMkVEy8TeESdhIhC44zcvpnKvnu1K8nIcAso0abUNrvcSJZNE0HMfFSsfUrrQ3vu4qT5CyiScAjBARa2Fiz5xg0XcwX2sqRol6icN852Yxcxu6artnnauiEsNBpZM2Hj/NXeCy41tzVgAxxKo4JGKrCr3GjQnXR8XRoVDFq+6cft6icrKy1lsbblLDvB1GZiGqSXxUhJK1lIXEtL/hcyHucKMGWCxtrGwUv5lYf+cyiokNTbucoiKfsDoGrvyVtWEMeU5ebMMYQFcHb6s3Pfhw+j/+TpyBWQxG/+V0Cs7NSmIs98baNtFGsLWR+coqyiTbsfzrd7a+vt52zFio6gQ6DC0VVchuKayMo0HLxC8Yo4V2iqwqcCk3o/V9lYUICuXcBT5MvN5PBivMJo0nkl61hRnjwJvOVgwmkGDy+iHcuGclgIbqmrE3ZY+Zrr9mLKEhxO60G5D+45pguZOG0mxi3mNC9x8W5dnuw9S0JDG02MtKYXx80fXXTsjf9CzkNGCurzExRjWBp2nYLk+2ADdtxgLx35AS3WDvJHgdawE5cmcLem3B52Z5wQWu+1hW5Wup01/ngnNGPJc3wZyQ0Q6VZ+LgKdlRyp3VxGbpU+9+oQKWk8uJRglS03kHaSy0wfQR/Jp2b+DNJsMGU2DBcz/j1hl2hR7vNSczX4H/4mDn51miMwAAAAAElFTkSuQmCC",l=({cardInfo:r})=>{const g=()=>{const s=Math.floor(Number(r.cardNumbers[0])/100);return s>=n.MASTERCARD.MIN_NUMBER&&s<=n.MASTERCARD.MAX_NUMBER?b:s>=n.VISA.MIN_NUMBER&&s<=n.VISA.MAX_NUMBER?S:""};return e.jsxs(M,{$cardBackground:r.cardCompany,children:[e.jsxs(w,{children:[e.jsx(B,{}),e.jsx(U,{children:e.jsx("img",{src:g(),alt:""})})]}),e.jsxs(I,{children:[e.jsx(N,{cardNumbers:r.cardNumbers}),e.jsx(h,{month:r.cardExpiration[0],year:r.cardExpiration[1]}),e.jsx("div",{children:r.userName&&r.userName})]})]})};l.__docgenInfo={description:"",methods:[],displayName:"CardFrontPreview",props:{cardInfo:{required:!0,tsType:{name:"ICardInfo"},description:""}}};const D={title:"Components/CardPreview",component:l,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{cardInfo:{cardNumbers:["1234","5678","9012","3456"],cardCompany:"카카오뱅크",cardExpiration:["12","23"],userName:"John Doe",cvc:"123",password:"12"}}},o={args:{cardInfo:{cardNumbers:["5234","5678","9012","3456"],cardCompany:"BC카드",cardExpiration:["12","23"],userName:"MasterCard User",cvc:"123",password:"12"}}},c={args:{cardInfo:{cardNumbers:["4532","5678","9012","3456"],cardCompany:"신한카드",cardExpiration:["12","23"],userName:"Visa User",cvc:"123",password:"12"}}};var i,d,A;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    cardInfo: {
      cardNumbers: ['1234', '5678', '9012', '3456'],
      cardCompany: '카카오뱅크',
      cardExpiration: ['12', '23'],
      userName: 'John Doe',
      cvc: '123',
      password: '12'
    }
  }
}`,...(A=(d=t.parameters)==null?void 0:d.docs)==null?void 0:A.source}}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    cardInfo: {
      cardNumbers: ['5234', '5678', '9012', '3456'],
      cardCompany: 'BC카드',
      cardExpiration: ['12', '23'],
      userName: 'MasterCard User',
      cvc: '123',
      password: '12'
    }
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,C,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    cardInfo: {
      cardNumbers: ['4532', '5678', '9012', '3456'],
      cardCompany: '신한카드',
      cardExpiration: ['12', '23'],
      userName: 'Visa User',
      cvc: '123',
      password: '12'
    }
  }
}`,...(f=(C=c.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const G=["Default","MasterCard","Visa"];export{t as Default,o as MasterCard,c as Visa,G as __namedExportsOrder,D as default};
