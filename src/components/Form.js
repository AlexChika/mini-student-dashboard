import React from "react";
const Form = ({
  handleLoginDetails,
  type,
  setUserDetails,
  userDetails,
  signupOrLoginPage,
  alternative,
  loading,
}) => {
  return (
    <form onSubmit={handleLoginDetails}>
      <div className="formControl">
        <label htmlFor="email">
          <input
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            placeholder="Enter a correct email"
            type="email"
            // required
            value={userDetails.email}
            id="email"
          />
          <span>
            <img src={require("../Assets/gmail.png")} alt="email icon" />
          </span>
        </label>
      </div>
      <div className="formControl">
        <label htmlFor="password">
          <input
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                password: e.target.value,
              })
            }
            placeholder="Please enter correct password"
            type="text"
            value={userDetails.password}
            id="passsword"
            // required
          />
          <span>
            <img src={require("../Assets/key.png")} alt=" key icon" />
          </span>
        </label>
      </div>
      <div className="formControl">
        <button disabled={loading} className="mt30" type="submit">
          {type}
        </button>
      </div>
      <a onClick={signupOrLoginPage} className="detail">
        {alternative}
      </a>
    </form>
  );
};

export default Form;
