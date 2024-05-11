import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import saleItemStyles from './saleItem.styles';
import {PRIMARY_COLOR} from '../../../../contants/colors';
import ProgressBar from '../../../common/ProgressBar/ProgressBar';
import {CheckIcon, Icon} from '@gluestack-ui/themed';

const SaleItem = ({onPress = () => {}}: {onPress?: Function}) => {
  return (
    <TouchableOpacity style={saleItemStyles.container} onPress={e => onPress()}>
      <View style={saleItemStyles.details}>
        <View style={saleItemStyles.iconContainer}>
          <Icon as={CheckIcon} color="green" />
        </View>

        <View style={saleItemStyles.labels}>
          <Text style={saleItemStyles.name}>
            <Text style={saleItemStyles.number}>1298</Text> Antonio Juarez
            Pacheco
          </Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={saleItemStyles.address}>
            Privada Vicente Guerrero 12, San Pedro Acoquiaco, Tehuacan, Puebla,
            Mexico
          </Text>
        </View>
      </View>

      <View style={saleItemStyles.progressContainer}>
        <ProgressBar
          backgroundColor="lightgray"
          backgroudColorFilled={PRIMARY_COLOR}
          value={50}
          height={10}
          width="100%"
          borderRadius={5}
        />
        <View style={saleItemStyles.progressDetails}>
          <Text style={saleItemStyles.prograssCant}>$800</Text>
          <Text style={saleItemStyles.prograssCant}>$6,500</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SaleItem;
