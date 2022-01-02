import clayful from "clayful/client-js";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated } = useContext(AuthContext);

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
    Customer.authenticate(payload, function (err, result) {
      if (err) {
        console.log(err.code);
        return err;
      }
      var data = result.data;
      localStorage.setItem("customerUid", data.customer);
      localStorage.setItem("accessToken", data.token);
      navigate("/");
      isAuthenticated();
    });
  };

  return (
    <div className="pageWrapper">
      <div className="auth-wrapper">
        <h1>로그인</h1>
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
          <p>
            Apple ID는 iTunes, App Store, iCloud에 로그인할 때 사용하는 이메일
            주소입니다.
          </p>
          <button type="submit">로그인</button>
          <Link
            to="/register"
            style={{ color: "gray", textDecoration: "none" }}
          >
            Apple ID가 없으신가요? 지금 생성.
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
