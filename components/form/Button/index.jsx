import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../../../utils/colors';

/**
 * Button component for styled buttons.
 * 
 * @param {Object} props - Component props.
 * @param {string} props.title - The text to display on the button.
 * @param {'mini' | 'small' | 'medium' | 'large'} [props.size='medium'] - The button size.
 * @param {keyof typeof colors} [props.color='primary'] - Button background color (from predefined color palette).
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {() => void} props.onPress - Callback function for button press.
 */
const Button = ({
    title,
    size = 'medium',
    color = 'primary',
    disabled = false,
    onPress = () => {}
}) => {
    const { buttonStyle, textStyle } = getSize(size, color, disabled);

    return (
        <TouchableHighlight
            underlayColor={colors.primaryDark}
            style={[styles.baseButton, buttonStyle]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[styles.baseText, textStyle]}>{title}</Text>
        </TouchableHighlight>
    );
};

export default Button;

/**
 * Helper function to determine styles.
 * 
 * @param {'mini' | 'small' | 'medium' | 'large'} size - The button size.
 * @param {keyof typeof colors} color - Button background color.
 * @param {boolean} disabled - Whether the button is disabled.
 * @returns {Object} - Button and text style objects.
 */
const getSize = (size, color, disabled) => {
    const backgroundColor = disabled ? colors.gray : colors[color] || colors.primary;

    const sizes = {
        mini: {
            buttonStyle: { paddingVertical: 12, paddingHorizontal: 8, borderRadius: 8 },
            textStyle: { fontSize: 12, fontWeight: 600  },
        },
        small: {
            buttonStyle: { paddingVertical: 16, paddingHorizontal: 24, borderRadius: 8 },
            textStyle: { fontSize: 14, fontWeight: 600  },
        },
        medium: {
            buttonStyle: { paddingVertical: 16, paddingHorizontal: 12, borderRadius: 8 },
            textStyle: { fontSize: 16, fontWeight: 600 },
        },
        large: {
            buttonStyle: { paddingVertical: 24, paddingHorizontal: 16, borderRadius: 30 },
            textStyle: { fontSize: 18, fontWeight: 600 },
        },
    };

    const { buttonStyle, textStyle } = sizes[size] || sizes.medium;

    return {
        buttonStyle: { ...buttonStyle, backgroundColor },
        textStyle: { ...textStyle, color: disabled ? colors.grayDark : colors.white, fontWeight: '500' },
    };
};

const styles = StyleSheet.create({
    baseButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    baseText: {
        fontWeight: '500',
    },
});
