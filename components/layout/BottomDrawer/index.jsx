import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
const BottomDrawer = forwardRef((props, ref) => {
    const bottomSheetRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false)

    // Memoized callbacks for internal use
    const handleSheetChanges = useCallback((index) => {
        console.log('Sheet changed to index:', index);
        if (index !== -1) {
            setIsOpen(true)
        }
        else {
            setIsOpen(false)
        }
    }, []);

    const handleOpen = useCallback(() => {
        setIsOpen(true)
        bottomSheetRef.current?.expand();
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false)
        bottomSheetRef.current?.close();
    }, []);

    const handleSnapToIndex = useCallback((index) => {
        setIsOpen(true)
        bottomSheetRef.current?.snapToIndex(index);
    }, []);

    const handleSnapToPosition = useCallback((position) => {
        setIsOpen(true)
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
            containerStyle={{ backgroundColor: isOpen ? '#8c8c8c4a' : null }}
            backgroundStyle={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
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
        display: 'none'
    },
    contentContainer: {
        flex: 1,
        padding: 36,
        alignItems: 'center',
    },
});

export default BottomDrawer;
