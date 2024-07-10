import {View, Text, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Fonts from '../../Config/Fonts';
import Color from '../../Config/Color';
import CustomInput from '../../Component/CustomInput';
import CustomButton from '../../Component/CustomButton';
import Images from '../../assets/Images';
import Modal from 'react-native-modal';

const {height, width} = Dimensions.get('window');
const SignUpEmail = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        paddingTop: getStatusBarHeight() + 20,
      }}>
      <Modal
        visible={visible}
        onBackdropPress={() => setVisible(false)}
        animationIn={'bounceIn'}
        style={{
          backgroundColor: Color.white,
          margin: 0,
          padding: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: width - 40,
            backgroundColor: Color.white,
            padding: 30,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: Color.grey,
          }}>
          <Text
            style={{
              fontFamily: Fonts.bold,
              color: Color.BlackColor,
              fontSize: 24,
              textAlign: 'center',
            }}>
            Welcome to Glimmer
          </Text>
          <Text
            style={{
              fontFamily: Fonts.regular,
              fontSize: 12,
              color: Color.grey,
              textAlign: 'center',
            }}>
            Please follow these house rules
          </Text>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{height: 10, width: 15}}
                source={Images.Tick}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: Color.BlackColor,
                  fontFamily: Fonts.Medium,
                  marginLeft: 15,
                }}>
                Be Yourself
              </Text>
            </View>

            <Text
              style={{
                fontFamily: Fonts.Medium,
                color: Color.grey,
                marginLeft: 30,
              }}>
              Make sure your photos, age and bio are true to who you are.
            </Text>
          </View>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{height: 10, width: 15}}
                source={Images.Tick}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: Color.BlackColor,
                  fontFamily: Fonts.Medium,
                  marginLeft: 15,
                }}>
                Stay Safe
              </Text>
            </View>

            <Text
              style={{
                fontFamily: Fonts.Medium,
                color: Color.grey,
                marginLeft: 30,
              }}>
              Don’t be too quick to give out personal information.{' '}
            </Text>
          </View>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{height: 10, width: 15}}
                source={Images.Tick}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: Color.BlackColor,
                  fontFamily: Fonts.Medium,
                  marginLeft: 15,
                }}>
                Play it Cool{' '}
              </Text>
            </View>

            <Text
              style={{
                fontFamily: Fonts.Medium,
                color: Color.grey,
                marginLeft: 30,
              }}>
              Respect others and treat them as you would like to be treated{' '}
            </Text>
          </View>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{height: 10, width: 15}}
                source={Images.Tick}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: Color.BlackColor,
                  fontFamily: Fonts.Medium,
                  marginLeft: 15,
                }}>
                Be Practice
              </Text>
            </View>

            <Text
              style={{
                fontFamily: Fonts.Medium,
                color: Color.grey,
                marginLeft: 30,
              }}>
              Always report bad behavior{' '}
            </Text>
          </View>
          <CustomButton
            style={{
              width: '100%',
              marginTop: 20,
              backgroundColor: Color.BlueBackgound,
            }}
            title={'I Agree'}
            textStyle={{fontFamily: Fonts.regular, fontSize: 16}}
            onPress={ () =>  { setVisible(false) ; navigation.navigate('DistancePref')}}
            
          />
        </View>
      </Modal>
      <View style={{marginTop: 60, paddingHorizontal: 20}}>
        <Text
          style={{
            fontFamily: Fonts.bold,
            color: Color.BlackColor,
            fontSize: 24,
          }}>
          Lets Get Started{' '}
        </Text>
        <Text
          style={{
            color: Color.BlackColor,
            fontFamily: Fonts.Medium,
            marginTop: 20,
          }}>
          Enter Email
        </Text>
        <CustomInput placeholder={'test@gmail.com'} />
        <CustomButton
          title={'Next'}
          style={{marginTop: 20, backgroundColor: Color.BlueBackgound}}
          onPress={() => setVisible(true)}
          on
        />
      </View>
      <Image
        source={Images.PrimaryImage}
        style={{flex: 1, width: width, resizeMode: 'cover'}}
      />
    </View>
  );
};

export default SignUpEmail;
