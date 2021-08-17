import React from "react";
import "./App.css";
export default function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [country, setCountry] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  // react js form
  // Author: Jayson
  // Twitter: jay_b_jayson
  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}

      Accepted Terms: ${acceptedTerms}
    `);

    event.preventDefault();
  };

  return (
    <div className="container-fluid bg-dark text-light ">
      <form className="" id="form-overide" onSubmit={handleSubmit}>
        <h1 className="mt-5 text-center text-center "> Create Account </h1>{" "}
        <div className="form-group">
          <label>
            Email:
            <input
              name="email"
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>{" "}
        </div>
        <div className="form-group">
          <label>
            Password:
            <input
              name="password"
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>{" "}
        </div>{" "}
        {/* <label>
                    Country:
                    <select
                      name="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    >
                      <option key=""></option>
                      {countries.map((country) => (
                        <option key={country}>{country}</option>
                      ))}
                    </select>
                  </label>
             */}{" "}
        <div className="form-check">
          <label>
            <input
              className="form-check-input"
              name="acceptedTerms"
              type="checkbox"
              onChange={(e) => setAcceptedTerms(e.target.value)}
              required
            />
            I accept the terms of service{" "}
          </label>{" "}
        </div>{" "}
        <button className="btn btn-success p-2"> Submit </button>{" "}
      </form>{" "}
    </div>
  );
}
