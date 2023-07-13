import { useState } from "react";

import formCSS from "./form.module.css";

export const Form=({title,onSubmit})=>{
    const initialData={
        name:"",
        email:""
    }
    // eslint-disable-next-line
    const [formData, setFormData] = useState({...initialData});
    const submitHandler=(e)=>{
        e.preventDefault();
        onSubmit();
    }
    return (
      <div className={formCSS.container}>
        <form>
          <h2>{title}</h2>
          <label htmlFor="name" className={formCSS.label}>
            Name:
          </label>
          <input type="text" className={formCSS.textField} id="name"/>
          <label htmlFor="email" className={formCSS.label}>
            Email:
          </label>
          <input type="email" className={formCSS.textField} id="email"/>
          <p>* You have to make the payment at venue.</p>
          <button className={formCSS.submitBtn} onClick={submitHandler}>Submit</button>
        </form>
      </div>
    );   
}