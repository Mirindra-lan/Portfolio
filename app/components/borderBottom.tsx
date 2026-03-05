import clsx from "clsx"

type BorderProps = {
    color?: boolean;
}

export default function BorderBottom({color}: BorderProps) {

    return <div className={
        clsx("relative left-0 -bottom-1 w-full bg-gradient-to-r from-transparent to-transparent rounded-full",
            color ? "via-gray-400 h-[1px]" : "via-cyan-400 h-[2px]"
        )
    }
    />
}