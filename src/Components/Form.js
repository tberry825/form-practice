//Import the necessary modules from React, including the useState hook.
import { useState } from "react";
import "../App.css";

//Define a functional component named Form.
function Form() {
    //Initialize the component state using the useState hook. formData is an object that holds the form data, and setFormData is a function used to update the state.
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    //Define a function handleChange that updates the form data when input values change. It uses the spread operator (...) to create a copy of the previous state and update the specific field (name or email) based on the input element's name attribute.
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData,  [name]: value });
    };

    //Define a function handleSubmit that prevents the default form submission behavior and logs the form data to the console. In a real-world scenario, you would typically send this data to a server or perform further actions.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData, "Form submitted")
    }

    //Render a form with three input fields (for first name, last name, and email) and a submit button. Each input field is associated with its corresponding handleChange function, and the form is associated with the handleSubmit function on submission.
    return (
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
            <div className="inputWrapper">
                <label>First Name:</label>
                    <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    />
            </div>
            <div className="inputWrapper">
                <label>Last Name:</label>
                    <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    />
            </div>
            <div className="inputWrapper">
                <label>Email:</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    />
            </div>
            <br />
                <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  //Export the Form component to make it available for use in other parts of your application.
  export default Form;