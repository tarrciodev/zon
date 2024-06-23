import clsx from "clsx";
import { Loader } from "lucide-react";
import React, { ComponentProps } from "react";

interface ILoading extends ComponentProps<"span"> {}

export function Loading(props: ILoading) {
    return (
        <span {...props}>
            <Loader className='animate-spin' />
        </span>
    );
}
