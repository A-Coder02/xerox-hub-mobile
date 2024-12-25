import React, { useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '../../components/form/TextField';
import FormikTextField from '../../components/form/TextField/FormikTextField';
import Layout from '../../components/layout/Layout';
import AppBar from '../../components/layout/AppBar';
import Button from '../../components/form/Button';

const FormikFormScreen = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = (values) => {
        console.log('Login Form Values:', values);
    };

    return (
        <Layout>
            <AppBar title={'Formik Form'} />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, values, handleChange, handleBlur, errors, touched }) => (
                    <View style={styles.container}>
                        <View style={{ gap: 16, flex: 1 }} >

                            <FormikTextField
                                label='Email'
                                name='email' />
                            <FormikTextField
                                label='Password'
                                name='password' />
                        </View>

                        <Button style={{ button: { marginTop: 'auto' } }} title="Login" onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
        </Layout>

    );
};

const styles = StyleSheet.create({
    container: {
        // paddingBottom: 16,
        flex: 1
    },
    field: {
        marginBottom: 16,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 8,
    },
});

export default FormikFormScreen;
