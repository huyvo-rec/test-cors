import logo from './logo.svg';
import './App.css';
import { useEffect, useInsertionEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState("");
  const [blobURL, setBlobURL] = useState("");
  const [loading, isLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      url: input,
    }

      // fetch('https://is402main.azurewebsites.net/api/save-url?code=qnPIJsAIPUFIZfaZ0jiFyD8gIqrrLvrwXc67YXufSNECAzFulHi-FQ==', {
      //   method: 'POST',
      //   headers: { "Content-type": "application/json; charset=UTF-8" },
      //   body: JSON.stringify(data),
      // }).then((res) => console.log(res.text()))
      // if (rawResponse.text()) {
      ;
    // setBlobURL(rawResponse.text());
    // const result = await fetch(`http://model.ndxcode.tk/predict?blob_url=${rawResponse.text()}`, {
    //   method: 'GET',
    //   headers: { "Content-type": "application/json; charset=UTF-8" }
    // }
    // );

    // }


    const res = await axios({
      url: "https://is402main.azurewebsites.net/api/save-url?code=qnPIJsAIPUFIZfaZ0jiFyD8gIqrrLvrwXc67YXufSNECAzFulHi-FQ==",
      method: 'POST',
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json; charset=utf-8',
      },
      withCredentials: false,
      data: JSON.stringify(data),
    })
    if (res) {
      setBlobURL(res.data);
    }
  }

  const onPredict = async (e) => {
    e.preventDefault();

    const res = await axios({
      url: `http://model.ndxcode.tk/predict?blob_url=${blobURL}`,
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
    if (res) {
      console.log(res?.data)
    }
  }


  return (
    <div className="wrapper">
      <div className="wrapper__welcome">
        <div className="wrapper__welcome--black">Enter a link youtube URL</div>

      </div>
      <form className="wrapper__form" target="_self" id="formElem">
        <div className="form__item">
          <div className="form__item--input">
            <input type="text" required name="url" value={input} onChange={(e) => { setInput(e.target.value) }} />
            <label>Link URL</label>
          </div>

        </div>

        <button className="form__button--gradients" onClick={onSubmit}>Submit</button>

      </form>
      {
        blobURL && blobURL !== "" &&
        <form className="wrapper__form" target="_self" name="formElem1">
          <div className="form__item">
            <div className="form__item--input">
              <input type="text" required name="blob_url" value={blobURL} readOnly />
              {/* <label>Link Blob</label> */}
            </div>
          </div>
          <button className="form__button--gradients" onClick={onPredict}> Detect Hate Speech</button>
        </form>
      }


      <table className="wrapper__table">
        {/* <colgroup>
          <col style="width: 80%;" />
          <col style="width: 20%;" />
        </colgroup> */}
        <thead>

          <tr>
            <th>Bình Luận</th>
            <th>Kết quả</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>Peter</td>
            <td>Griffin</td>
          </tr>
          <tr>
            <td>Lois</td>
            <td>Griffin</td>
          </tr>
        </tbody>
      </table>
      <div id="encoded"></div>

      <script src="./index.js"></script>
    </div>

  );
}

export default App;
