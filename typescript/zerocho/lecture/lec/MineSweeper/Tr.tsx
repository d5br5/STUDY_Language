import React, { FC, useContext, memo } from "react";
import { TableContext } from "./MineSearch";
import Td from "./Td";
interface Props {
	rowIndex: number;
}

const Tr: FC<Props> = memo(({ rowIndex }) => {
	const { tableData } = useContext(TableContext);
	return (
		<tr>
			{tableData[0] &&
				tableData.map((td, i) => (
					<Td key={i} rowIndex={rowIndex} cellIndex={i} />
				))}
		</tr>
	);
});

export default Tr;
