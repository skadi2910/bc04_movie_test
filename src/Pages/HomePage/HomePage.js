import axios from "axios";
import React, { Component } from "react";
import Header from "../../Components/Header/Header";

export default class HomePage extends Component {
  state = {
    movieList: [],
  };
  componentDidMount() {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMyIsIkhldEhhblN0cmluZyI6IjIwLzAxLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NDE3MjgwMDAwMCIsIm5iZiI6MTY0NTgwODQwMCwiZXhwIjoxNjc0MzIwNDAwfQ.8_aCoaa6rU0qnQpITJH8MZSFEBfvbj11eFJWuFsTYL8",
      },
    })
      .then((res) => {
        console.log(res);
        this.setState({ movieList: res.data.content });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  /**
   * {
    "maPhim": 9662,
    "tenPhim": "The Tomorrow War 2",
    "biDanh": "the-tomorrow-war-2",
    "trailer": "https://youtu.be/QPistcpGB8o",
    "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-tomorrow-war_gp01.png",
    "moTa": "Cuộc chiến tương lai (The Tomorrow War) là bộ phim hành động khoa học viễn tưởng chiến tranh của Mỹ, sản xuất năm 2021 do Chris McKay đạo diễn, phụ trách hình ảnh do David Ellison, Dana Goldberg, Don Granger, David S. Goyer, Jules Daly và Adam Kolbrenner sản xuất, với kịch bản được viết bởi Zach Dean. Dàn diễn viên của bộ phim dự kiến bao gồm Chris Pratt (nổi tiếng với vai Star-Lord trong Vệ binh dải Ngân hà), Yvonne Strahovski, J.K. Simmons, Betty Gilpin, Sam Richardson, Edwin Hodge, Jasmine Mathews, Ryan Kiera Armstrong và Keith Powers.",
    "maNhom": "GP01",
    "ngayKhoiChieu": "2022-08-21T17:04:08.723",
    "danhGia": 10,
    "hot": true,
    "dangChieu": false,
    "sapChieu": true
}
   */
  renderContent = () => {
    return this.state.movieList.map((movie) => {
      return (
        <div className="card col-3" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={movie.hinhAnh}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{movie.tenPhim}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <p>HomePage</p>

        <div className="row">{this.renderContent()}</div>
      </div>
    );
  }
}
