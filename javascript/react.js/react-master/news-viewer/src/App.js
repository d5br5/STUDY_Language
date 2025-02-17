import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { useState } from "react";
import { useCallback } from "react";

function App() {
	const [category, setCategory] = useState("all");
	const onSelect = useCallback((category) => setCategory(category), []);
	return (
		<>
			<Categories category={category} onSelect={onSelect} />
			<NewsList category={category} />
		</>
	);
}

export default App;
