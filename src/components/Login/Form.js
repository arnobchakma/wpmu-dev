import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const Form = (props) => {
    const {
        user,
        handleChange,
        handleSubmit,
        result,
        loading
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label> <br />
                <input type="text" className={user.email ? "form-control is-valid" : "form-control is-invalid"} onChange={handleChange} name="email" required />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label> <br />
                <input type="password" className={user.password ? "form-control is-valid" : "form-control is-invalid"} onChange={handleChange} name="password" required />
            </div>

            <div className="from-group">
                <div className="reminder">
                    <div>
                        <input type="checkbox" /> Remember Me
                    </div>
                    <div className="forgot-pass">
                        <Link to="#">Forgot Password?</Link>
                    </div>
                </div>
            </div>
            <div className="result">
                {
                    result.isLoggedIn
                        ? <p className="alert alert-success text-center">{result.message}</p>
                        : <p className="alert-warning text-center">{result.message}</p>
                }
            </div>

            <div className="form-group">
                <button type="submit">
                    {
                        loading ? <div className="spinner-border" role="status"></div> : "Submit"
                    }
                </button>
            </div>
        </form>
    );
};

export default Form;