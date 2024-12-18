import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchSvg(props) {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        // {...props}
        >
            <Path
                d="M7.25 12.5a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5zM10.963 10.962L14 14"
                stroke="#071731"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SearchSvg
