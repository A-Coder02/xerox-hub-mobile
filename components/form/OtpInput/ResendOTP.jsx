import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Typography from '../../typography/Typography';

const ResendOTP = () => {
    const [timer, setTimer] = useState(0); // Initially, no countdown
    const [canResend, setCanResend] = useState(true); // Initially enabled to send OTP

    useEffect(() => {
        if (timer === 0) {
            setCanResend(true);
            return;
        }

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [timer]);

    const handleResendOTP = () => {
        if (canResend) {
            setTimer(120); // Start the 2-minute countdown
            setCanResend(false);
            console.log("OTP sent!");
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const getButtonText = () => {
        if (canResend && timer === 0) return "Send OTP again";
        if (!canResend && timer > 0) return `Please wait ${formatTime(timer)}`;
        if (canResend && timer === 0) return "Resend OTP";
    };

    return (
        <TouchableOpacity
            onPress={handleResendOTP}
            disabled={!canResend}
        >
            <Typography
                style={{ paddingBottom: 0, marginBottom: 32, textAlign: 'center', textDecoration: 'underline' }}
                variant="caption"
                color="grayDark"
            >
                {getButtonText()}
            </Typography>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    resendButtonText: { color: "#fff", fontWeight: "bold" },
});

export default ResendOTP;
