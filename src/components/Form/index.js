import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form = ({
  phone = false,
  resume = false,
  subscription = false,
  lookingFor = false,
  business = false,
}) => {
  const [state, handleSubmit] = useForm("manokkpp");


  if (state.succeeded) {
    return (
      <h3 className="text-orange my-5 py-3 text-center">
        Thanks for Contacting us!
      </h3>
    );
  }
  return (
    <form className={`contactForm`} onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-md-6 name">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="form-group col-md-6">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {phone && (
          <div className="form-group col-md-6 phone">
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Phone"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>
        )}
        {/* {resume && (
          <div className="form-group col-md-6 resume">
            <label>
              Upload your Resume
              <span
                className="fileName"
                style={{ marginLeft: "20px", color: "#000" }}
              ></span>
              <input
                type="file"
                name="upload"
                className="form-control"
                id="resume"
                required
              />
            </label>
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>
        )} */}
        {lookingFor && (
          <div className="form-group col-md-6 looking-for">
            <select
              className="form-control"
              id="lookingFor"
              name="lookingFor"
              required=""
            >
              <option value="" disabled="">
                What are you looking for?
              </option>
              <option>MERN Stack</option>
              <option>MEAN Stack</option>
              <option>WordPress</option>
              <option>React Js</option>
              <option>Angular</option>
              <option>Abgular + Node</option>
              <option>.Net</option>
              <option>Node Js</option>
              <option>Front End</option>
              <option>Back End</option>
              <option>PHP/Laravel</option>
              <option>Shopify</option>
              <option>Vue.js</option>
            </select>
            <ValidationError
              prefix="LookingFor"
              field="lookingFor"
              errors={state.errors}
            />
          </div>
        )}
        {business && (
          <div className="form-group col-12 business-project">
            <select
              className="form-control"
              id="businessProject"
              name="businessProject"
              required=""
            >
              <option value="" disabled="">
                Your business Project
              </option>
              <option>Web development </option>
              <option>App development</option>
              <option>Others </option>
            </select>
            <ValidationError
              prefix="BusinessProject"
              field="businessProject"
              errors={state.errors}
            />
          </div>
        )}

        <div className="form-group col-12">
          <textarea
            rows="5"
            className="form-control"
            placeholder="Message"
            id="message"
            name="message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        {subscription && (
          <div className="col-12 news">
            <p>
              Can we stay in touch? We'll drop industry insight and relevant
              news straight to your inbox. No spam!
            </p>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">Yes, please</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">No Thanks</label>
            </div>
          </div>
        )}

        <div className="col-12 mt-2 text-center">
          <button
            type="submit"
            disabled={state.submitting}
            className={`btn btn-primary`}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
