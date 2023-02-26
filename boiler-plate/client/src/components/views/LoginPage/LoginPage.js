import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../../_actions/user_action';
function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
      event.preventDefault();

      let body = {
        email: Email,
        password: Password
      }

      dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    navigate("/");
                } else {
                    alert('Error˝')
                }
            })
  
    

  }

  return (
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onSubmit={onSubmitHandler}	
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      onChange={onEmailHandler}
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      onChange={onPasswordHandler}
      rules={[
        {
          required: true,
          message: 'Please input your password!',
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
      <Button type="primary" htmlType="submit" onSubmit={onSubmitHandler}>
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default LoginPage
