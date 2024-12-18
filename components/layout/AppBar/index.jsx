import React from 'react'
import { StyleSheet, View } from 'react-native'
import LeftArrowSvg from '../../../assets/icons/LeftArrowSvg'
import colors from '../../../utils/colors'
import Typography from '../../typography/Typography'

const AppBar = () => {
    return (
        <View style={styles.header}>
            <View style={styles.backButton}>
                <LeftArrowSvg />
            </View>
            <Typography color={colors.grayDark} variant="base">
                Choose Location
            </Typography>
        </View>
    )
}

export default AppBar;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    backButton: {
        backgroundColor: colors.grayDark,
        borderRadius: 100,
    },
},)