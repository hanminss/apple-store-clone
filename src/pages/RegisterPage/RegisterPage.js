import clayful from "clayful/client-js";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassowrdChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var Customer = clayful.Customer;

    var payload = {
      email: email,
      password: password,
    };

    // payload의 정보로 유저 등록하기
    Customer.createMe(payload, function (err, result) {
      if (err) {
        console.log(err.code);
      }

      var data = result.data;
      console.log(data);
    });
  };

  return (
    <div className="auth-wrapper">
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Apple Id"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          placeholder="암호"
          type="password"
          name="password"
          value={password}
          onChange={handlePassowrdChange}
        />
        <button type="submit">회원가입</button>
        <Link to="login" style={{ color: "gray", textDecoration: "none" }}>
          이미 Apple ID가 있다면? 지금 로그인.
        </Link>
      </form>
    </div>
  );
}

export default RegisterPage;
