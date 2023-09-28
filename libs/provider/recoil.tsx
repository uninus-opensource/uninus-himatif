import { FC, PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

export const RecoilProvider: FC<PropsWithChildren> = ({ children }) => <RecoilRoot>{children}</RecoilRoot>
