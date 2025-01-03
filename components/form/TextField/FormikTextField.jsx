import React, { forwardRef } from 'react';
import { useField } from 'formik';
import { Text, View } from 'react-native';
import TextField from '.';
import Typography from '../../typography/Typography';

const FormikTextField = forwardRef(
    (
        {
            name,
            label,
            prefix,
            startIcon,
            endIcon,
            placeholderTextColor,
            autoFocus,
            style,
        },
        ref
    ) => {
        // useField returns [field, meta]
        const [field, meta] = useField(name);

        return (
            <View style={{ gap: 8 }} >
                <TextField
                    ref={ref} // Forward the ref to TextField
                    value={field.value}
                    onChange={field.onChange(name)}
                    label={label}
                    prefix={prefix}
                    startIcon={startIcon}
                    endIcon={endIcon}
                    placeholderTextColor={placeholderTextColor}
                    autoFocus={autoFocus}
                    style={style}
                />
                {meta.touched && meta.error && (
                    <Typography variant='caption' color='red' style={{ paddingLeft: 4 }}  >
                        {meta.error}
                    </Typography>
                )}
            </View>
        );
    }
);

export default FormikTextField;
