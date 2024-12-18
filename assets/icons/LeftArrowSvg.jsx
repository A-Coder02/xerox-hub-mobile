import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function LeftArrowSvg(props) {
    return (
        <Svg
            width={44}
            height={44}
            viewBox="0 0 44 44"
            fill="#F8FAFC"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={44} height={44} rx={22} fill="#F8FAFC" />
            <Path
                d="M25.333 28.667L18.667 22l6.666-6.666"
                stroke="#071731"
                strokeWidth={1}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default LeftArrowSvg
    ``