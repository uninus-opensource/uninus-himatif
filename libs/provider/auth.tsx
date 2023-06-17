"use client";
import { SessionProvider }  from "next-auth/react";
import { FC, ReactElement, PropsWithChildren } from "react";


export const AuthProvider: FC<PropsWithChildren> = ({
  children,
}): ReactElement => <SessionProvider>{children}</SessionProvider>

