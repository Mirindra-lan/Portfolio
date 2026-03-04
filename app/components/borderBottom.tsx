type BorderProps = {
    color?: String;
}

export default function BorderBottom({color}: BorderProps) {
    return <div className={`relative
    left-0 -bottom-1
    w-full h-[2px]
    bg-gradient-to-r from-transparent via-${color ? color : "cyan"}-400 to-transparent
    rounded-full
    `}
    />
}