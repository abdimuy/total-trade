import {StyleSheet, Text, View, VirtualizedList, TextInput} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import FocusAwareStatusBar from '../../../components/common/FocusAwareStatusBar/FocusAwareStatusBar';
import {PRIMARY_COLOR, TEXT_COLOR_TERTIARY} from '../../../contants/colors';
import SaleItem from '../../../components/modules/sales/SaleItem/SaleItem';
import salesStyles from './sales.styles';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import SaleDetails from '../../../components/modules/sales/SaleDetails/SaleDetails';

const Sales = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['99%'], []);
  const snapPointsModal = useMemo(() => ['25%', '50%'], []);

  const handleSheetChange = useCallback((index: any) => {
    console.log('handleSheetChange', index);
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSnapPress = useCallback(() => {
    sheetRef.current?.snapToIndex(0);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    [],
  );

  return (
    <View style={salesStyles.constainer}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={PRIMARY_COLOR}
        animated
      />
      <View style={salesStyles.header}>
        <Text style={salesStyles.headerTitle}>Ruta 12</Text>
        <View style={salesStyles.headerSearch}>
          <TextInput
            style={salesStyles.headerSearchInput}
            placeholder="Buscar"
            placeholderTextColor={TEXT_COLOR_TERTIARY}
            textAlignVertical="center"
          />
        </View>
      </View>
      <VirtualizedList
        style={salesStyles.list}
        data={Array.from({length: 40}, (_, i) => i)}
        renderItem={() => <SaleItem onPress={() => handleSnapPress()} />}
        keyExtractor={(item: any) => item.toString()}
        getItemCount={() => 40}
        ItemSeparatorComponent={() => (
          <View style={{height: 14, backgroundColor: 'transparent'}} />
        )}
        getItem={(data, index) => data[index]}
      />
      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        enablePanDownToClose
        backgroundStyle={{borderRadius: 60}}>
        <BottomSheetScrollView>
          {/* <Button
            onPress={handlePresentModalPress}
            title="Present Modal"
            color="black"
          /> */}
          <SaleDetails />
        </BottomSheetScrollView>
      </BottomSheet>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPointsModal}
            onChange={handleSheetChanges}
            backdropComponent={renderBackdrop}
            enableDismissOnClose>
            <View>
              <Text>Awesome 🎉</Text>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
});

export default Sales;
