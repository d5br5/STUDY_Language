import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers";
import { UserState } from "./reducers/user";
import { logIn, logOut } from "./actions/user";

const App: FC = () => {
	const { isLoggingIn, data } = useSelector<RootState, UserState>(
		(state) => state.user
	);
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(logIn({ id: "dohkim", password: "1234" }));
	};

	const onLogout = () => {
		dispatch(logOut());
	};

	return (
		<div>
			{isLoggingIn ? (
				<div>로그인 중</div>
			) : data ? (
				<div>{data.nickname}</div>
			) : (
				"로그인 해주세요."
			)}
			{!data ? (
				<button onClick={onClick}>로그인</button>
			) : (
				<button onClick={onLogout}>로그아웃</button>
			)}
		</div>
	);
};

export default App;
