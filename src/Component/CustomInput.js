import {View, Text, TextInput, Dimensions} from 'react-native';
import React from 'react';
import Color from '../Config/Color';
import Fonts from '../Config/Fonts';

const {height, width} = Dimensions.get('window');
const CustomInput = ({placeholder}) => {
  return (
    <View>
      <TextInput
        style={{
          height: 45,
          width: width - 40,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: Color.grey,
          marginTop: 5,
          fontSize: 12,
          paddingHorizontal: 10,
          color: Color.BlackColor,
          fontFamily: Fonts.regular,
        }}
        placeholder={placeholder}
        placeholderTextColor={Color.grey}
      />
    </View>
  );
};

export default CustomInput;
