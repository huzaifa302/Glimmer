import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Color from '../Config/Color';

const {width} = Dimensions.get('window');
const CustomButton = ({title, onPress = () => {}, style, textStyle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        {
          height: 64,
          width: width - 45,
          backgroundColor: Color.Themegreen,
          justifyContent: 'center',
          borderRadius: 40,
        },
        style,
      ]}>
      <Text
        style={[
          {fontSize: 16, color: Color.white, textAlign: 'center'},
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
