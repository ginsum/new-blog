import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import { login } from "../firebase/auth";
import { userIdState } from "../recoil/atom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const setUserId = useSetRecoilState(userIdState);
  let navigate = useNavigate();

  const onClickSubmit = async () => {
    const userId = await login(email, password);
    console.log(userId, "sue");
    if (userId) {
      setUserId(userId);
      navigate("/");
    }
  };

  return (
    <div className="flex w-full h-screen container mx-auto py-3 justify-center">
      <div className="flex flex-col w-96">
        <div className="flex flex-col mb-2">
          <label>이메일</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={onClickSubmit}>로그인</button>
      </div>
    </div>
  );
};
export default Login;
