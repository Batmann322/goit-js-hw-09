import"./assets/styles-7d5b969f.js";let e={email:"",message:""};const t=document.querySelector(".feedback-form"),s=t.querySelector('input[name="email"]'),l=t.querySelector('textarea[name="message"]');t.addEventListener("input",m=>{const{name:r,value:o}=m.target;e[r]=o.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});t.addEventListener("submit",m=>{if(m.preventDefault(),e.email.trim()===""||e.message.trim()===""){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},s.value="",l.value=""});const a=JSON.parse(localStorage.getItem("feedback-form-state"));a&&(s.value=a.email,l.value=a.message,e.email=a.email,e.message=a.message);
//# sourceMappingURL=commonHelpers2.js.map