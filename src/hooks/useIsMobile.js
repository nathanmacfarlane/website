import { useBreakpoint } from "gatsby-plugin-breakpoints";

export const useIsMobile = () => {
  const breakpoints = useBreakpoint();

  return breakpoints.xs || breakpoints.sm;
};
