import React, { useEffect, useState } from "react";

type registrationForm = {
  id: string;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  password: string;
  status: Boolean;
};

const RegForm = () => {
  // States for registration
  const [regData, setRegData] = useState<registrationForm>({
    id: "",
    email: "Email",
    username: "User name",
    firstname: "First name",
    lastname: "Last name",
    address1: "Address 1",
    address2: "Address 2",
    city: "City",
    state: "State",
    country: "Country",
    password: "Password",
    status: true,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("handleSubmit-->", regData);
  };

  return (
    <div>
      <div>
        <h1>User Registration</h1>
      </div>
      <form>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRegData({ ...regData, email: e.target.value });
          }}
          className="input"
          placeholder={regData.email}
          type="email"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRegData({ ...regData, username: e.target.value });
          }}
          className="input"
          placeholder={regData.username}
          type="text"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRegData({ ...regData, firstname: e.target.value });
          }}
          className="input"
          placeholder={regData.firstname}
          type="text"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRegData({ ...regData, lastname: e.target.value });
          }}
          className="input"
          placeholder={regData.lastname}
          type="text"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRegData({ ...regData, address1: e.target.value });
          }}
          className="input"
          placeholder={regData.address1}
          type="text"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRegData({ ...regData, address2: e.target.value });
          }}
          className="input"
          placeholder={regData.address2}
          type="text"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRegData({ ...regData, city: e.target.value });
          }}
          className="input"
          placeholder={regData.city}
          type="text"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRegData({ ...regData, state: e.target.value });
          }}
          className="input"
          placeholder={regData.state}
          type="text"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRegData({ ...regData, country: e.target.value });
          }}
          className="input"
          placeholder={regData.country}
          type="text"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRegData({ ...regData, password: e.target.value });
          }}
          className="input"
          placeholder={regData.password}
          type="password"
        />
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegForm;
