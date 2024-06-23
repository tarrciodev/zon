"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

type SearchParamsResponse = {
    setQueryParams: (name: string, value: string) => void;
    removeQueryParams: (name: string) => void;
    searchParams: any;
    pathname: any;
};

export function useQuerySetter<SearchParamsResponse>() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const masterParams = new URLSearchParams(searchParams);

    function setQueryParams(name: string, value: string) {
        masterParams.set(name, value);
        replace(`${pathname}?${masterParams.toString()}`);
    }

    function removeQueryParams(name: string) {
        masterParams.delete(name);
        replace(`${pathname}?${masterParams.toString()}`);
    }

    return {
        setQueryParams,
        removeQueryParams,
        searchParams,
        masterParams,
        pathname,
    };
}
