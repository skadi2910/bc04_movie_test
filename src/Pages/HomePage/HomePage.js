import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { hideLongString, TOKEN_CYBERSOFT } from "../../utils/utils";

export default class HomePage extends Component {
  state = {
    movieList: [],
  };
  componentDidMount() {
    let userJson = localStorage.getItem("USER");
    if (!JSON.parse(userJson)) {
      window.location.href = "/login";
    }
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
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
            <p className="card-text">{hideLongString(movie.moTa, 80)}</p>
            <NavLink to={`/detail/${movie.maPhim}`} className="btn btn-primary">
              Xem Chi Tiết
            </NavLink>
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
