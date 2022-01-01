import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import clayful from "clayful/client-js";
import axios from "axios";

clayful.config({
  client:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQ3MmJmNTRjYjRlZGI4ZjkwMTljOTk0YTU5ZTIwMTE3YWYyNzRkY2ZkY2RjODZiNDljZDZjYTU1MWMwYWRjYzUiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjQxMDE5MTg2LCJzdG9yZSI6IlNYNldZM0RCUThYNy5LSzg2OFBGUjVDWVMiLCJzdWIiOiJEQk5QMzhBREs3TFIifQ.8QSHD77JAeoywFmwrzScW7OzBom0vDPDwSNyX60egy4",
});

clayful.install("request", require("clayful/plugins/request-axios")(axios));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* History api를 이용하여 라우팅 처리를 할 수 있게 해줍니다. */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
