import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import React from "react";
import { TOKEN_CYBERSOFT } from "../../utils/utils";
export default function FormLogin() {
  const handleLogin = (dataLogin) => {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: dataLogin,
      headers: {
        TokenCyberSoft: TOKEN_CYBERSOFT,
      },
    })
      .then((res) => {
        console.log(res);
        message.success("Login success");
        localStorage.setItem("USER", res.data);
      })
      .catch((err) => {
        console.log(err);
        message.error("Error");
      });
  };

  const onFinish = (values) => {
    handleLogin(values);
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
