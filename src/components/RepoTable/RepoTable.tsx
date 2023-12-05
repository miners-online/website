import React from 'react';
import {
	DataTable,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableExpandHeader,
	TableHeader,
	TableBody,
	TableExpandRow,
	TableCell,
	TableExpandedRow,
	type DataTableRow,
	type DataTableHeader,
} from '@carbon/react';

interface Props {
	rows: Omit<DataTableRow<any[]>, "cells">[];
	headers: DataTableHeader[];
}

const RepoTable = ({ rows, headers }: Props) => {
	return (
		<DataTable
		rows={rows}
		headers={headers}
		render={({
			rows,
			headers,
			getHeaderProps,
			getRowProps,
			getTableProps,
		}) => (
			<TableContainer
			title="Miners Online Repositories"
			description="A collection of public Miners Online repositories."
			>
			<Table {...getTableProps()}>
				<TableHead>
				<TableRow>
					<TableExpandHeader aria-controls="repo_row_header" />
					{headers.map((header) => (
					<TableHeader key={header.key} id={"repo_row_header"} {...getHeaderProps({ header })}>
						{header.header}
					</TableHeader>
					))}
				</TableRow>
				</TableHead>
				<TableBody>
				{rows.map((row) => (
					<React.Fragment key={row.id}>
						<TableExpandRow aria-controls={"repo_row_"+row.id} {...getRowProps({ row })}>
							{row.cells.map((cell) => (
								<TableCell key={cell.id}>{cell.value}</TableCell>
							))}
						</TableExpandRow>
						<TableExpandedRow id={"repo_row_"+row.id} colSpan={headers.length + 1}>
							<p>Row description</p>
						</TableExpandedRow>
					</React.Fragment>
				))}
				</TableBody>
			</Table>
			</TableContainer>
		)}
		/>
	);
};

export default RepoTable;
	