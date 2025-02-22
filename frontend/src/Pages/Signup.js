import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <section
      className="vh-100 bg-image"
      style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card shadow-lg" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Create an Account</h2>

                  <form>

                    {/* Name Field */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        placeholder="Your Name"
                        required
                      />
                      <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                    </div>

                    {/* Email Field */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        placeholder="Your Email"
                        required
                      />
                      <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                    </div>

                    {/* Password Field */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        required
                      />
                      <label className="form-label" htmlFor="form3Example4cg">Password</label>
                    </div>

                    {/* Repeat Password Field */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                        placeholder="Repeat Password"
                        required
                      />
                      <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                    </div>

                    {/* Terms of Service Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" id="form2Example3cg" required />
                      <label className="form-check-label" htmlFor="form2Example3cg">
                        I agree to all statements in <a href="#!" className="text-body"><u>Terms of Service</u></a>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body shadow"
                      >
                        Submit
                      </button>
                    </div>

                    {/* Login Redirect */}
                    <p className="text-center text-muted mt-5 mb-0">
                      Already have an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link>
                    </p>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
