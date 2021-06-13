import React from 'react';
import './Form.css';

const Form = (props) => {
    const { handleCreateUser, handleChange, error, success, loading } = props;
    return (
        <form onSubmit={handleCreateUser}>
            <div className="form-group">
                <label htmlFor="email">Your name</label>
                <input type="text" className={error.name ? "form-control is-valid" : "form-control is-invalid"} placeholder="Your name" name="name" onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className={error.email ? "form-control is-valid" : "form-control is-invalid"} placeholder="Email address" name="email" onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Password</label>
                <input type="password" className={error.password ? "form-control is-valid" : "form-control is-invalid"} placeholder="Password" name="password" onChange={handleChange} required /> 
                <p>Minimum 8 character</p>
            </div>
            <div className="form-group">
                <label htmlFor="email">Confirm password</label>
                <input type="password" className={error.confirmPass ? "form-control is-valid" : "form-control is-invalid"} placeholder="Confirm Password" name="confirmPass" onChange={handleChange} required />
                <p>Minimum 8 character</p>
            </div>
            <div className="result">
                {
                    (success === true) 
                        ? <p className="alert alert-success text-center">Successfully Created ✔</p>
                        : <p className="alert-warning text-center">{success}</p>
                }
            </div>
            <div className="form-group">
                <button type="submit" value="submit">
                    {
                        loading 
                        ? <div class="spinner-border" role="status"></div> 
                        : "Next"
                    }
                </button>
            </div>
        </form>
    );
};

export default Form;