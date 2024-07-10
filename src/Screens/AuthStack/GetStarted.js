import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import React from 'react';
import Color from '../../Config/Color';
import fonts from '../../Config/Fonts';
import Fonts from '../../Config/Fonts';
import CustomButton from '../../Component/CustomButton';
import Images from '../../assets/Images';
import WelcomeBack from './SignIn';

const {height, width} = Dimensions.get('window');
const GetStarted = ({navigation}) => {
  return (
    <View style={{backgroundColor: Color.BlueBackgound, flex: 1}}>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: width / 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 23,
            fontFamily: Fonts.bold,
            color: Color.white,
            lineHeight: 35,
            textAlign: 'center',
          }}>
          The First Social & Dating App Where You Are Free To
          <Text
            style={{
              fontSize: 42,
              lineHeight: 42,
            }}>
            {' \n'}
            Be YourSelf
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: Fonts.regular,
            color: Color.white,
            textAlign: 'center',
            marginTop: 20,
          }}>
          A place where people with disabilities can be honest about the
          challenges they face - meet others like you today.
        </Text>
        <CustomButton
          style={{width: width / 1.5, marginTop: 25}}
          title={'Join Free'}
        />
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text
            style={{
              color: Color.white,
              fontSize: 12,
              fontFamily: Fonts.regular,
            }}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SignIn')}>
            <Text
              style={{
                color: Color.white,
                fontSize: 12,
                fontFamily: Fonts.regular,
                paddingLeft: 5,
                textDecorationLine: 'underline',
              }}>
              Click here
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

export default GetStarted;
