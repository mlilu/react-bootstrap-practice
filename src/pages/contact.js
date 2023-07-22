import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Page</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Enter your email address{" "}
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Enter message here{" "}
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Add email to mailing list{" "}
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
