import { useState } from "react";

import formCSS from "./form.module.css";

export const Form=({title})=>{
    const [formData, setFormData] = useState();
    return (
      <div className={formCSS.container}>
        <form>
          <h2>{title}</h2>
          <label htmlFor="" className={formCSS.label}>
            Label{" "}
          </label>
          <input type="text" className={formCSS.textField} />
          <button className={formCSS.submitBtn}>Submit</button>
        </form>
      </div>
    );   
}