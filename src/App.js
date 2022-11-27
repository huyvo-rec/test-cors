import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      url: input,
    }

    const rawResponse = await fetch('https://is402main.azurewebsites.net/api/save-url?code=qnPIJsAIPUFIZfaZ0jiFyD8gIqrrLvrwXc67YXufSNECAzFulHi-FQ==', {
      // url: ,
      method: 'POST',
      // mode: 'no-cors',
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(data),
    });
    const content = await rawResponse.json();

    console.log(content);


    //   const res = await axios({
    //     url: "https://is402main.azurewebsites.net/api/save-url?code=qnPIJsAIPUFIZfaZ0jiFyD8gIqrrLvrwXc67YXufSNECAzFulHi-FQ==",
    //     method: 'POST',
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         'Content-Type': 'application/json; charset=utf-8',
    //     },
    //     withCredentials: false,
    //     data: JSON.stringify(data),
    // })
    // // document.querySelector("#decoded").innerHTML = text;
    // if (res) {
    //     console(res?.data)
    // }

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
      <form className="wrapper__form" target="_self" id="formElem1">
        <div className="form__item">
          <div className="form__item--input">
            <input type="text" required name="url" />
            <label>Link URL</label>
          </div>

        </div>

        <button type="submit" className="form__button--gradients"> Detect Hate Speech</button>

      </form>

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
