'use client';

import React, { useState, useEffect } from 'react'
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
  DataTableRow,
  DataTableHeader,
} from '@carbon/react';
import { RepoRowItemProps } from './index';

interface Props {
  rows: RepoRowItemProps[];
  headers: Array<DataTableHeader>;
}

const RepoTable = ({ rows, headers }: Props) => {
  const getRowDescription = (rowId: number) => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.description : '';
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, []);

  return mounted && (
    <DataTable
      rows={(rows as unknown) as Array<Omit<DataTableRow<any>, 'cells'>>}
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
                <TableExpandHeader/>
                {headers.map((header) => (
                  <TableHeader {...getHeaderProps({ header })} key={header.key}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <React.Fragment key={row.id}>
                  <TableExpandRow {...getRowProps({ row })}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableExpandRow>
                  <TableExpandedRow colSpan={headers.length + 1}>
                    <p>{getRowDescription((row.id as unknown) as number)}</p>
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
