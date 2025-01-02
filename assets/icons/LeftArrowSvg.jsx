import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import colors from "../../utils/colors"

function LeftArrowSvg(props) {
    const fillColor = props.fillColor || '#F5F5F5'; 
    const strokeColor = props.strokeColor || colors.grayDark; 
    const rectanleColor = props.rectanleColor ||'#F5F5F5';

  
    return (
        <Svg
            width={44}
            height={44}
            viewBox="0 0 44 44"
            fill={fillColor}
            colors
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={44} height={44} rx={22} fill={rectanleColor} />
            <Path
                d="M25.333 28.667L18.667 22l6.666-6.666"
                stroke={strokeColor}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default LeftArrowSvg