import React from "react";

const useTogle = () => {
  const [open, setOpen] = React.useState(false);
  const isOpen = () => setOpen(true);
  const isClosed = () => setOpen(false);
  const toggle = () => setOpen(!open);
  return { open, isClosed, isOpen, toggle };
};

export default useTogle;
