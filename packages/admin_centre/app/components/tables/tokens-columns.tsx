"use client"
 
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react"

import { Button } from "~/components/ui/button";

import { DisplayableAPIToken } from "~/lib/models";

export const columns: ColumnDef<DisplayableAPIToken>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "clientName",
    header: "Owner"
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
  },
]