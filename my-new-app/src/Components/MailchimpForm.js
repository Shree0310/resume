// import React, { useEffect } from "react";
// import MailchimpSubscribe from "react-mailchimp-subscribe";
// import { REACT_APP_MAILCHIMP_U } from "../Utils/Constants";
// import { REACT_APP_MAILCHIMP_ID } from "../Utils/Constants";
// import InputField from "../../ui/InputField/InputField";
// import {useState} from 'react';
// import { useGHStContext } from '../../../utils/ContextProvider';






// const CustomForm = ({status, message, onValidated})=>{

//     const [email, setEmail] = useState('');
//     const {modalOpen, setModalOpen} = useGHStContext();

//     useEffect(()=>{
//         if(status === "success") clearFields();
//         if(modalOpen && status === "success") clearFields();
//     }, [status, modalOpen])

//     const clearFields = ()=>{
//         setEmail('');
//     }


//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         email &&
//         email.indexOf("@")>-1 &&
//         onValidated({
//             EMAIL:email,
//         });
//     }
    
//     return (
//         <div>
//             <form className="mc__form" onSubmit={(e)=>handleSubmit(e)}>
//                 <h3 className="mc__title">
//                     {status === "success"
//                         ? "Success!"
//                         : "Join us"}
//                 </h3>

//                 {status === "sending" && (
//                     <div className="alert--sending">
//                         sending...
//                     </div>
//                 )}
//                 {status === "error" && (
//                     <div className="alert--error"
//                          dangerouslySetInnerHTML={{__html:message}}/>
//                 )}
//                 {status === "success" && (
//                     <div
//                     className="alert--success"
//                     dangerouslySetInnerHTML={{__html:message}}/>
//                 )}

//                 {status !== "success" ? (
//                    <div className="mc__field-container">
//                         <InputField
//                         label="Email"
//                         onChangeHandler={setEmail}
//                         type="email"
//                         value={email}
//                         placeholder="your@email.com"
//                         isRequired
//                         />
//                     </div>
//                 ) : null}

//                 {status === "success" ? 
//                     <button onClick={()=> setModalOpen(false)}
//                     className="self-center">
//                         Close
//                     </button>: <InputField 
//                     label="subscribe"
//                     type="submit"
//                     formValues ={[email]}/>
//                 }
                
                
//             </form>
//         </div>
        
//     );

// };

// const MailchimpForm = props=>{

//     const postUrl = `https://gmail.us7.list-manage.com/subscribe/post?u=${REACT_APP_MAILCHIMP_U}&id=${REACT_APP_MAILCHIMP_ID}`;


//     return (
//         <div>
//             <MailchimpSubscribe
//             url={postUrl}
//             render={(subscribe, status, message)=>(
//                     <CustomForm
//                         status={status}
//                         message ={message}
//                         onValidated={formData => subscribe(formData)}
//                     />
//                 )}
//             />
//         </div>
//     );
// }

// export default MailchimpForm;