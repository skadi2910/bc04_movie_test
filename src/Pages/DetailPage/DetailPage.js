import axios from "axios";
import React, { Component } from "react";
import { TOKEN_CYBERSOFT } from "../../utils/utils";

export default class DetailPage extends Component {
  state = {
    detail: null,
  };
  componentDidMount() {
    let { id } = this.props.match.params;
    console.log("id: ", id);
    axios({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    })
      .then((res) => {
        console.log("res: ", res);
        this.setState({ detail: res.data.content });
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }
  render() {
    console.log(this.state.detail);
    let { detail } = this.state;
    return (
      <div className="container">
        <h3 className="display-4 font-weight-bold">{detail?.tenPhim}</h3>
        <div className="d-flex ">
          <img src={detail?.hinhAnh} style={{ height: "500px" }} alt="#" />
          <p className="mx-3">{detail?.moTa}</p>
        </div>
      </div>
    );
  }
}
