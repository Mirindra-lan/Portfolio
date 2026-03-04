import clsx from "clsx"

type BorderProps = {
    color?: string;
}

export default function BorderBottom({color}: BorderProps) {
    let colo = color ? "via-" + color + "-400" : ""

    return <div className={
        clsx("relative left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-transparent to-transparent rounded-full",
            colo ? colo : "via-cyan-400"
        )
    }
    />
}