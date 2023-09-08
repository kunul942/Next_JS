import { CSSProperties, FC } from "react";

import { useRouter } from "next/router";

import Link from "next/link";

interface LinkTypeProp{
    text: string;
    href: string
};

const style: CSSProperties={
    color: '#0070f3',
    textDecoration:'underline',
};


export const ActiveLink: FC<LinkTypeProp> = ({ text, href } ) => {
    
    const { pathname } = useRouter();

    return (
        <Link 
            href={ href } 
            style={ pathname === href ? style : undefined }
        >
            { text }
        </Link>
    )
}
