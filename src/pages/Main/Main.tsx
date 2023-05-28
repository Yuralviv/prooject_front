import { FC } from "react";

import { Box } from "../../components/box";


import { Table } from "../../components/table/table";
import { TableBody } from "../../components/table/tableBody";
import { TableCell } from "../../components/table/tableCell";
import { TableRow } from "../../components/table/tableRow";
import { TableHead } from "../../components/table/tableHead";
import { ExcelData } from "../../App";

const headerItems = [
    {
        id: 1,
        title: "firstname"
    },
    {
        id: 2,
        title: "lastname"
    },
    {
        id: 3,
        title: "email"
    },
    {
        id: 4,
        title: "phone"
    },
    {
        id: 5,
        title: "country"
    },
    {
        id: 6,
        title: "language"
    },
    {
        id: 7,
        title: "campaign"
    },
    {
        id: 8,
        title: "password"
    },
    {
        id: 9,
        title: "description"
    },
    {
        id: 10,
        title: "map_id"
    },
]

const Main: FC<{ data: ExcelData[] }> = ({ data }) => (
    <Box marginTop={5} maxWidth={1100}>
        <Table size="small">
            <TableHead>
                <TableRow>
                    {headerItems.map((item) => (
                        <TableCell key={item.id}>{item.title}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row: ExcelData, index: number) => (
                    <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        {Object.values(row).map((value: string | number, index: number) => (
                            <TableCell key={index} size="medium">{value.toString()}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Box>
);




export default Main;