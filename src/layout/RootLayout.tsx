import { queryClient } from "@/app/query.client";
import { QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Outlet></Outlet>
        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools >
      </QueryClientProvider>
    </>
  );
};

export default RootLayout;
