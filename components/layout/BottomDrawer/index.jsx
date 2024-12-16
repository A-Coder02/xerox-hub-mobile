import React, { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const BottomDrawer = forwardRef((props, ref) => {
    const bottomSheetRef = useRef(null);

    // Memoized callbacks for internal use
    const handleSheetChanges = useCallback((index) => {
        console.log('Sheet changed to index:', index);
    }, []);

    const handleOpen = useCallback(() => {
        bottomSheetRef.current?.expand();
    }, []);

    const handleClose = useCallback(() => {
        bottomSheetRef.current?.close();
    }, []);

    const handleSnapToIndex = useCallback((index) => {
        bottomSheetRef.current?.snapToIndex(index);
    }, []);

    const handleSnapToPosition = useCallback((position) => {
        bottomSheetRef.current?.snapToPosition(position);
    }, []);

    // Expose functions to parent via useImperativeHandle
    useImperativeHandle(ref, () => ({
        open: handleOpen,
        close: handleClose,
        snapToIndex: handleSnapToIndex,
        snapToPosition: handleSnapToPosition,
    }));

    return (
            <BottomSheet
                index={-1}
                handleIndicatorStyle={styles.handleIndicator}
                enablePanDownToClose
                snapPoints={[1, 500, '80%', '95%', '100%']}
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
            >
                <BottomSheetView style={styles.contentContainer}>
                   {props.children}
                </BottomSheetView>
            </BottomSheet>
    );
});

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },
    handleIndicator: {
        backgroundColor: 'red',
    },
    contentContainer: {
        flex: 1,
        padding: 36,
        alignItems: 'center',
    },
});

export default BottomDrawer;
