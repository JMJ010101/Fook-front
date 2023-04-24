import React, { useState } from "react";
import {
  Button,
  Button2,
  Container,
  Form,
  Header,
  Input,
} from "./LoginFormSty";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Form>
        <Header>로그인</Header>
        <Input
          type="text"
          placeholder="Id"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
        <Link
          to="/signup"
          style={{ justifyContent: "center", marginTop: "10px" }}
        >
          <Button2 type="submit">Regist</Button2>
        </Link>
      </Form>
    </Container>
  );
};

export default LoginForm;
