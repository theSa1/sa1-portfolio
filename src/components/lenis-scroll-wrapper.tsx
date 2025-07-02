import { ReactLenis } from "lenis/react";

export const LenisScrollWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ReactLenis root>{children}</ReactLenis>;
};
