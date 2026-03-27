import { useTheme } from "next-themes";

export default function Logo() {
    const isdark = useTheme().theme === "dark";
    return <img alt='logo' src={isdark ? "/logo-dark.svg" : "/logo.svg"} className='h-8' />
}