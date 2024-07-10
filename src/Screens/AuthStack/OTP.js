import {View, Text} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Fonts from '../../Config/Fonts';
import Color from '../../Config/Color';
import CustomInput from '../../Component/CustomInput';
import CustomButton from '../../Component/CustomButton';

const OTP = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: getStatusBarHeight() + 20,
        paddingHorizontal: 20,
      }}>
      <View style={{marginTop: 60}}>
        <Text
          style={{
            fontFamily: Fonts.bold,
            color: Color.BlackColor,
            fontSize: 24,
          }}>
          Enter OTP
        </Text>
        <CustomInput placeholder={'0000000'} />
        <CustomButton
          title={'Submit'}
          style={{marginTop: 20, backgroundColor: Color.BlueBackgound}}
        />
        <CustomButton
          title={'Resend Code'}
          style={{marginTop: 20, backgroundColor: Color.LightBlue}}
          textStyle={{color: Color.BlueBackgound}}
        />
      </View>
    </View>
  );
};

export default OTP;
