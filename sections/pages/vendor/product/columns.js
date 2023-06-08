import { createColumnHelper } from "@tanstack/react-table";
import {
  quantityCellRenderer,
  imageCellRender,
  productNameCellRender,
  statusCellRender,
  priceCellRender,
} from "./custom-cells";

const columnHelper = createColumnHelper();

export const COLUMNS = [
  columnHelper.accessor((row) => row.image, {
    header: "IMAGE",
    cell: imageCellRender,
    enableSorting: false,
  }),
  columnHelper.accessor("product_name", {
    header: "PRODUCT NAME",
    cell: productNameCellRender,
    enableSorting: false,
  }),
  columnHelper.accessor("quantity", {
    header: "QUANTITY",
    cell: quantityCellRenderer,
    enableSorting: false,
  }),
  columnHelper.accessor("price", {
    header: "PRICE ($)",
    cell: priceCellRender,
  }),
  columnHelper.accessor("status", {
    header: "STATUS",
    cell: statusCellRender,
    enableSorting: false,
  }),
  columnHelper.accessor("views", {
    header: "VIEWS",
  }),
  columnHelper.accessor("sales", {
    header: "SALES",
  }),
];
