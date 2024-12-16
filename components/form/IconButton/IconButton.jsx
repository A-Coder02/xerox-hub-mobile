import React from 'react';
import { Text, StyleSheet, TouchableHighlight, View } from 'react-native';
import colors from '../../../utils/colors';

/**
 * Button component for styled buttons.
 * 
 * @param {Object} props - Component props.
 * @param {string} props.title - The text to display on the button.
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] - The button size.
 * @param {keyof typeof colors} [props.color='primary'] - Button background color (from predefined color palette).
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {() => void} props.onPress - Callback function for button press.
 */
const IconButton = ({
    size = 'medium',
    variant = 'contained',
    disabled = false,
    onPress = () => { },
    style = { button: {}, text: {} },
    icon: Icon = null
}) => {
    const { buttonStyle, iconStyle } = getSize(size, disabled);
    const variantStyle = getVariant(disabled ? "disabled" : variant)

    return (
        <TouchableHighlight
            underlayColor={variantStyle.underlayColor}
            style={[styles.button, variantStyle.button, buttonStyle, style.button]}
            onPress={onPress}
            disabled={disabled}
        >
            <View>
                {Icon ? <Icon color={variantStyle.icon.color} weight="light" size={iconStyle.size} /> : null}
            </View>
        </TouchableHighlight>
    );
};

export default IconButton;

/**
 * Helper function to determine styles.
 * 
 * @param {'small' | 'medium' | 'large'} size - The button size.
 * @param {keyof typeof colors} color - Button background color.
 * @param {boolean} disabled - Whether the button is disabled.
 * @returns {Object} - Button and text style objects.
 */
const getSize = (size) => {

    const sizes = {
        medium: {
            buttonStyle: { width: 32, height: 32, padding: 4, borderRadius: 8 },
            iconStyle: { size: 18 },
        },
        large: {
            buttonStyle: { width: 48,height: 48, padding: 8, borderRadius: 8 },
            iconStyle: { size: 32, },
        },
    };

    const { buttonStyle, iconStyle } = sizes[size] || sizes.medium;

    return {
        buttonStyle: { ...buttonStyle },
        iconStyle: { ...iconStyle, },
    };
};

const getVariant = variant => {
    // borderWidth and its color
    const variants = {
        contained: {
            button: { backgroundColor: colors.primary, borderColor: colors.primary },
            icon: { color: colors.white },
            underlayColor: colors.primaryDark
        },
        outlined: {
            button: { backgroundColor: colors.white, borderColor: colors.primary },
            icon: { color: colors.primary },
            underlayColor: colors.primaryLight
        },
        'outlined-dark': {
            button: { backgroundColor: colors.transparent, borderColor: colors.black },
            icon: { color: colors.black },
            underlayColor: colors.grayLight
        },
        text: {
            button: { backgroundColor: colors.transparent, borderColor: colors.transparent },
            icon: { color: colors.primary },
            underlayColor: colors.gray

        },
        disabled: {
            button: { backgroundColor: colors.grayLight, borderColor: colors.grayLight },
            icon: { color: colors.gray },
        },
    }

    const variantStyle = variants[variant] || variants.contained;
    return variantStyle
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        borderWidth: 1
    },
    text: {
        fontWeight: '500',
    },
});
