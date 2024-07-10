import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Color from '../../Config/Color';
import Fonts from '../../Config/Fonts';
import CustomButton from '../../Component/CustomButton';
import Images from '../../assets/Images';
import Slider from '@react-native-community/slider';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const DistancePref = ({navigation}) => {
  const [value, setValue] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        padding: getStatusBarHeight() + 20,
        paddingHorizontal: 25,
      }}>
      <View
        style={{
          marginTop: 80,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: Color.grey,
        }}>
        <Text
          style={{
            fontFamily: Fonts.bold,
            fontSize: 17,
            color: Color.BlackColor,
            paddingHorizontal: 20,
            textAlign: 'center',
            marginTop: 20,
          }}>
          Define your Distance Preference
        </Text>
        {/* <Slider
          value={value}
          onValueChange={value => setValue(value)}
          style={{marginHorizontal: 30, marginVertical: 20}}
          minimumValue={1}
          maximumValue={100}
          minimumTrackTintColor={Color.BlueBackgound}
          maximumTrackTintColor={Color.BlueBackgound}
          thumbTintColor={Color.BlueBackgound}
          thumbTouchSize={{width: 40, height: 40}}
        /> */}
        <Slider
          style={{marginHorizontal: 25, marginVertical: 20}}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor={Color.BlueBackgound}
          maximumTrackTintColor={Color.BlueBackgound}
          thumbTintColor={Color.BlueBackgound}
          onValueChange={e => setValue(e)}
          thumbImage={require('../../assets/Icons/thumb.png')}
        />
        <Text
          style={{
            color: Color.BlueBackgound,
            textAlign: 'center',
            fontFamily: Fonts.Medium,
            marginBottom: 8,
          }}>
          {value.toFixed()} km
        </Text>
      </View>

      <CustomButton
        title={'Next'}
        style={{marginTop: 30, backgroundColor: Color.BlueBackgound}}
        textStyle={{fontFamily: Fonts.Medium, fontSize: 16}}
        onPress={() => navigation.navigate('PersonalDetail')}
      />
    </View>
  );
};

export default DistancePref;
