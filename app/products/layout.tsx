import { ReactNode } from "react";


export default function ProductsLayout({children}: {children: ReactNode}) {
  return (
    <section>{children}</section>
  );
}
