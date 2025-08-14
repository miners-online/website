import React, { createContext, useState } from "react";

type Field = "username" | "primaryEmail" | "primaryPhone" | "name" | "avatar";

interface FieldEditContextType {
  field?: Field;
  isDialogOpen: boolean;
  openDialog: (field: Field) => void;
  closeDialog: () => void;
}

export const FieldEditContext = createContext<FieldEditContextType | undefined>(undefined);

export const FieldEditProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [field, setField] = useState<Field | undefined>(undefined);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (fieldName: Field) => {
    setField(fieldName);
    setIsDialogOpen(true);
    console.log(`Opening dialog for field: ${fieldName}`);
  };

  const closeDialog = () => {
    setField(undefined);
    setIsDialogOpen(false);
  };

  return (
    <FieldEditContext.Provider value={{ field, isDialogOpen, openDialog, closeDialog }}>
      {children}
    </FieldEditContext.Provider>
  );
};

export const useFieldEdit = () => {
  const context = React.useContext(FieldEditContext);
  if (!context) {
    throw new Error("useFieldEdit must be used within a FieldEditProvider");
  }
  return context;
};