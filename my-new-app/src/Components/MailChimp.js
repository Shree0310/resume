import { useState } from 'react';
import jsonp from 'jsonp';
import { REACT_APP_MAILCHIMP_U } from "../Utils/Constants";
import { REACT_APP_MAILCHIMP_ID } from "../Utils/Constants";

const MailChimp = ()=>{
    
    const [formValues, setFormValues] = useState({
        email: ""
    });
   

 const onSubmit = e => {
   e.preventDefault();
    setFormValues({
        email:""
    });
    
    alert("Thank you for joining!!");
   const url = `https://gmail.us7.list-manage.com/subscribe/post?u=${REACT_APP_MAILCHIMP_U}&id=${REACT_APP_MAILCHIMP_ID}`;
   jsonp(`${url}&EMAIL=${formValues.email}`, { param: 'c' }, (_,data) => {
    
    
   
   });
 };

 return (

   
        
   <div>
     <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img alt="my profile" className="outline outline-offset-2 outline-blue-500 mx-auto h-[150px] rounded-md w-auto px-10 py-4"
        src="https://shree0310.github.io/profile_pic/WhatsApp%20Image%202023-05-23%20at%2010.31.50%20AM.jpeg"/>
            <h2 className="mt-10 text-center font-bold text-2xl leading-9 tracking-tight dark:text-white text-gray-900">Join us!!</h2>
        </div>
    

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST" onSubmit={onSubmit}>
      <div>
        <label for="email" className="block text-sm font-medium leading-6 dark:text-white text-gray-900">Email Address</label>
        <div className="mt-2">
          <input id="mce-EMAIL" value={formValues.email} name="EMAIL" type="email" placeholder="Type your email..." autocomplete="email" required onChange={(e) => setFormValues({...formValues, email: e.target.value})} 
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 px-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </input>
        </div>
        
      </div>
      <div>
        <button type="submit"  className="flex w-full justify-center rounded-md
         bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm
          hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
           focus-visible:outline-indigo-600">Subscribe</button>
      </div>
    </form>
    </div>
   </div>
   </div>
 );
}

export default MailChimp;