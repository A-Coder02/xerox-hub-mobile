import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableHighlight, View } from 'react-native';
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
    variant = 'contained',
    color = 'primary',
    disabled = false,
    onPress = () => { },
    style = { button: {}, text: {} },
    startIcon: StartIcon = null
}) => {
    const { buttonStyle, textStyle, iconStyle } = getSize(size, color, disabled);
    const variantStyle = getVariant(disabled ? "disabled" : variant)
    return (
        <TouchableHighlight
            underlayColor={variantStyle.underlayColor}
            style={[styles.button, variantStyle.button, buttonStyle, style.button]}
            onPress={onPress}
            disabled={disabled}
        >
            <View style={{
                flexDirection: 'row', alignItems: 'center',
                gap: buttonStyle.gap
            }} >
                {StartIcon && (
                    <View style={styles.startIconContainer}>
                        <StartIcon
                            color={variantStyle.icon.color}
                            {...{
                                width: iconStyle.width,
                                height: iconStyle.width,
                            }} />
                    </View>
                )}
                <Text style={[styles.text, variantStyle.text, textStyle, style.text]}>{title}</Text>
            </View>
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
const getSize = (size) => {

    const sizes = {
        mini: {
            buttonStyle: { paddingVertical: 8, paddingHorizontal: 8, borderRadius: 8, gap: 4 },
            textStyle: { fontSize: 12, fontWeight: 600 },
            iconStyle: { width: 14, height: 14 }

        },
        small: {
            buttonStyle: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8, gap: 4 },
            textStyle: { fontSize: 14, fontWeight: 600 },
            iconStyle: { width: 18, height: 18 }

        },
        medium: {
            buttonStyle: { paddingVertical: 12, paddingHorizontal: 12, borderRadius: 8, gap: 8 },
            textStyle: { fontSize: 16, fontWeight: 600 },
            iconStyle: { width: 18, height: 18 }

        },
        large: {
            buttonStyle: { height: 70, paddingVertical: 22, paddingHorizontal: 48, borderRadius: 32, gap: 12 },
            textStyle: { fontSize: 18, fontWeight: 600 },
            iconStyle: { width: 32, height: 32 }

        },
    };

    const { buttonStyle, textStyle, iconStyle } = sizes[size] || sizes.medium;

    return {
        buttonStyle: { ...buttonStyle },
        textStyle: { ...textStyle, fontWeight: '500' },
        iconStyle
    };
};

const getVariant = variant => {
    // borderWidth and its color
    const variants = {
        contained: {
            button: { backgroundColor: colors.primary, borderColor: colors.primary },
            text: { color: colors.white },
            underlayColor: colors.primaryDark,
            icon: {
                color: colors.white,
            }
        },
        outlined: {
            button: { backgroundColor: colors.white, borderColor: colors.primary },
            text: { color: colors.primary },
            underlayColor: colors.primaryLight,
            icon: {
                color: colors.primary,
            }
        },
        'outlined-dark': {
            button: { backgroundColor: colors.transparent, borderColor: colors.black },
            text: { color: colors.black },
            underlayColor: colors.grayLight,
            icon: {
                color: colors.black,
            }
        },
        text: {
            button: { backgroundColor: colors.transparent, borderColor: colors.transparent },
            text: { color: colors.primary },
            underlayColor: colors.gray,
            icon: {
                color: colors.primary,
            }
        },
        disabled: {
            button: { backgroundColor: colors.grayLight, borderColor: colors.grayLight },
            text: { color: colors.gray },
            icon: {
                color: colors.grayLight,
            }
        },
    }

    const variantStyle = variants[variant] || variants.contained;
    return variantStyle
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        // justifyContent: 'center',
        marginVertical: 5,
        borderWidth: 1,
        minWidth: 64,
        flexDirection: 'row',
    },
    text: {
        fontWeight: '500',
        flex: 1,
        textAlign: 'center'
    },
    startIconContainer: {
        // backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
