import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Fonts from '../../Config/Fonts';
import Color from '../../Config/Color';
import CustomInput from '../../Component/CustomInput';
import CustomButton from '../../Component/CustomButton';
import Images from '../../assets/Images';

const {height, width} = Dimensions.get('window');

const SignIn = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: getStatusBarHeight() + 20,
      }}>
      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <View style={{flexDirection: 'row', marginTop: 60}}>
          <Text
            style={{
              fontFamily: Fonts.bold,
              fontSize: 25,
              color: Color.BlackColor,
            }}>
            Welcome Back
          </Text>
          <Text style={{fontSize: 25, paddingLeft: 5}}>👋</Text>
        </View>
        <Text
          style={{ 
            fontFamily: Fonts.Medium,
            fontSize: 14,
            color: Color.BlackColor,
            marginTop: 20,
          }}>
          Enter Phone
        </Text>
        <CustomInput placeholder={'+0123 4567 890'} />
        <CustomButton
          title={'Sign in'}
          style={{marginTop: 20, backgroundColor: Color.BlueBackgound}}
          onPress={() => navigation.navigate('OTP')}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontFamily: Fonts.regular,
              color: Color.grey,
              fontSize: 12,
            }}>
            Don't Have An Account
          </Text>
          <TouchableOpacity activeOpacity={0.8}
           onPress={() => navigation.navigate('SignUp')} >
            <Text
              style={{
                fontFamily: Fonts.regular,
                color: Color.BlueBackgound,
                fontSize: 12,
                textDecorationLine: 'underline',
                paddingLeft: 5,
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        style={{width: width, resizeMode: 'cover', flex: 1}}
        source={Images.PrimaryImage}
      />
    </View>
  );
};

export default SignIn;
