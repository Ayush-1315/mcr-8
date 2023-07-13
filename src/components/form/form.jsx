import { useState } from "react";

import formCSS from "./form.module.css";

export const Form=({title,onSubmit})=>{
    const initialData={
        name:"",
        email:""
    }
    const initialVaidator={
        name:false,
        email:false
    }
    const [formData, setFormData] = useState({...initialData});
    const [formValidator,setFormValidator]=useState({...initialVaidator});
    const submitHandler=(e)=>{
        e.preventDefault();
        const sendData=Object.keys(formValidator).reduce((acc,curr)=>!formValidator[curr]?false:acc,true);
        if(typeof(onSubmit)==="function" && sendData){
            console.log(formData);
            onSubmit(formData);
            setFormData({...initialData});
            setFormValidator({...initialVaidator});
        }
        else{
            window.alert("Fill all details")
        }
    }
    const changeHandler=(type,value)=>{
        const val=value.trim();
        setFormData(prev=>({...prev,[type]:val}))
        setFormValidator(prev=>({...prev,[type]:val!==""}))
    }
    return (
      <div className={formCSS.container}>
        <form>
          <h2>{title}</h2>
          <label htmlFor="name" className={formCSS.label}>
            Name:
          </label>
          <input type="text" className={formCSS.textField} id="name" onChange={e=>changeHandler("name",e.target.value)} value={formData?.name}/>
          <label htmlFor="email" className={formCSS.label}>
            Email:
          </label>
          <input type="email" className={formCSS.textField} id="email" onChange={e=>changeHandler("email",e.target.value)} value={formData?.email}/>
          <p>* You have to make the payment at venue.</p>
          <button className={formCSS.submitBtn} onClick={submitHandler}>Submit</button>
        </form>
      </div>
    );   
}