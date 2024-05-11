import {View, Text, Linking, TouchableOpacity} from 'react-native';
import React from 'react';
import saleDetailsStyles from './saleDetails.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PRIMARY_COLOR} from '../../../../contants/colors';

const SaleDetails = () => {
  const callNumber = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const sendWhatsapp = (phone: string) => {
    Linking.openURL('whatsapp://send?text=Mensaje de prueba&phone=' + phone);
  };

  return (
    <View style={saleDetailsStyles.container}>
      <View style={saleDetailsStyles.header}>
        <View style={saleDetailsStyles.mapImg}></View>
        <View style={saleDetailsStyles.titleContainer}>
          <Text style={saleDetailsStyles.title}>
            Aldrich Abdiel Cortero Gonzalez
          </Text>
          <Text style={saleDetailsStyles.textPrimary}>#3494</Text>
        </View>
      </View>

      <View style={saleDetailsStyles.personalInfo}>
        <View style={saleDetailsStyles.personalInfoItem}>
          <Text style={saleDetailsStyles.textTertiary}>Domicilio:</Text>
          <Text style={saleDetailsStyles.textSecondary}>
            Vicente Guerrero 2389 San Pedro Acoquiaco, Tehuacan, Puebla
          </Text>
        </View>
        <View style={saleDetailsStyles.personalInfoItem}>
          <Text style={saleDetailsStyles.textTertiary}>Fecha de venta:</Text>
          <Text style={saleDetailsStyles.textSecondary}>
            12 de septiembre de 2021
          </Text>
        </View>
        <View style={saleDetailsStyles.personalInfoItem}>
          <View style={saleDetailsStyles.telContainer}>
            <View style={saleDetailsStyles.telInfo}>
              <Text style={saleDetailsStyles.textTertiary}>Teléfono:</Text>
              <Text style={saleDetailsStyles.textSecondary}>2381863330</Text>
            </View>
            <View style={saleDetailsStyles.telActions}>
              <TouchableOpacity
                style={[
                  saleDetailsStyles.telButton,
                  saleDetailsStyles.telPhone,
                ]}
                onPress={() => callNumber('2381863330')}>
                <Icon name="phone" size={30} color={PRIMARY_COLOR} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  saleDetailsStyles.telButton,
                  saleDetailsStyles.telWhatsapp,
                ]}>
                <Icon
                  name="whatsapp"
                  size={30}
                  color="green"
                  onPress={() => sendWhatsapp('2381863330')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={saleDetailsStyles.results}>
        <View style={saleDetailsStyles.resultItem}>
          <View style={saleDetailsStyles.resultItemIconContainer}>
            <Icon name="money" size={24} color="white" />
          </View>
          <View>
            <Text style={saleDetailsStyles.textPrimaryInverse}>$6500</Text>
            <Text style={saleDetailsStyles.textTertiaryInverse}>Saldo</Text>
          </View>
        </View>
        <View style={saleDetailsStyles.resultItem}>
          <View style={saleDetailsStyles.resultItemIconContainer}>
            <Icon name="percent" size={24} color="white" />
          </View>
          <View>
            <Text style={saleDetailsStyles.textPrimaryInverse}>63%</Text>
            <Text style={saleDetailsStyles.textTertiaryInverse}>
              Porc. pagado
            </Text>
          </View>
        </View>
      </View>

      <View style={saleDetailsStyles.saleInfo}>
        <View style={saleDetailsStyles.personalInfoItem}>
          <Text style={saleDetailsStyles.textTertiary}>Vendedor:</Text>
          <Text style={saleDetailsStyles.textSecondary}>Aldrich Cortero</Text>
        </View>
      </View>
    </View>
  );
};

export default SaleDetails;
