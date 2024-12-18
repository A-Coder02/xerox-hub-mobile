import * as React from "react"
import Svg, { Path } from "react-native-svg"
import colors from "../../utils/colors"

function MapPinSvg(props) {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M3.5 14.5h9M8 8.5a2 2 0 100-4 2 2 0 000 4z"
                stroke={colors.primary}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M13 6.5c0 4.5-5 8-5 8s-5-3.5-5-8a5 5 0 1110 0v0z"
                stroke={colors.primary}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default MapPinSvg
