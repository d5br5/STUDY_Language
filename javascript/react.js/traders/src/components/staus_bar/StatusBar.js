import SortMethod from "./SortMethod";
import SearchResult from "./SearchResult";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin-top: 20px;
`;
function StatusBar() {
	return (
		<Container>
			<SearchResult />
			<SortMethod />
		</Container>
	);
}

export default StatusBar;
