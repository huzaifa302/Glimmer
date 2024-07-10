import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Fonts from '../../Config/Fonts';
import Color from '../../Config/Color';
import CustomInput from '../../Component/CustomInput';
import MyActionSheet from '../../Component/MyActionSheet';
import ActionSheet from 'react-native-actions-sheet';
import CustomDropDown from '../../Component/CustomDropDown';
import CustomButton from '../../Component/CustomButton';

const {width} = Dimensions.get('window');
const PersonalDetail = ({navigation}) => {
  const data = [
    {value: '1', label: 'Male'},
    {value: '2', label: 'Female'},
    {value: '3', label: 'Lesbian'},
  ];
  const [val, setVal] = useState(null);

  const dataSex = [
    {value: '1', label: 'Casual'},
    {value: '2', label: 'Wild'},
    {value: '3', label: 'Romantic'},
  ];
  const [valGoal, setValGoal] = useState(null);

  const dataGoal = [
    {value: '1', label: 'Time Pass'},
    {value: '2', label: 'Friendship'},
    {value: '3', label: 'Marriage'},
  ];
  const [valSex, setValSex] = useState(null);

  const dataDisability = [
    {value: '1', label: 'Blind'},
    {value: '2', label: 'Deaf'},
    {value: '3', label: 'Paralized'},
  ];
  const [valDisability, setValDisabiliy] = useState(null);

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      contentContainerStyle={{
        flexGrow: 1,
        padding: getStatusBarHeight() + 20,
        paddingHorizontal: 20,
      }}>
      <Text
        style={{
          fontFamily: Fonts.bold,
          fontSize: 24,
          color: Color.BlackColor,
          marginTop: 60,
        }}>
        Personal Info
      </Text>
      <Text style={{fontFamily: Fonts.Medium, color: Color.BlackColor}}>
        First Name
      </Text>
      <CustomInput placeholder={'John'} />
      <Text
        style={{
          fontFamily: Fonts.Medium,
          color: Color.BlackColor,
          marginTop: 10,
        }}>
        Last Name
      </Text>
      <CustomInput placeholder={'Walker'} />
      <Text
        style={{
          fontFamily: Fonts.Medium,
          color: Color.BlackColor,
          marginTop: 10,
        }}>
        Enter date of Birth
      </Text>
      <CustomInput placeholder={'9-May-2023'} />
      <Text
        style={{
          fontFamily: Fonts.Medium,
          color: Color.BlackColor,
          marginTop: 10,
        }}>
        Select your gender
      </Text>
      <CustomDropDown
        title={'Select Gender'}
        data={data}
        value={val}
        onValChange={item => {
          setVal(item?.value);
        }}
      />
      <Text
        style={{
          fontFamily: Fonts.Medium,
          color: Color.BlackColor,
          marginTop: 10,
        }}>
        Select your Sexual Orientation
      </Text>
      <CustomDropDown
        title={'Select Sexual Orientation'}
        data={dataSex}
        value={valSex}
        onValChange={item => {
          setValSex(item?.value);
        }}
      />
      <Text
        style={{
          fontFamily: Fonts.Medium,
          color: Color.BlackColor,
          marginTop: 10,
        }}>
        Select your Relationship Goal
      </Text>
      <CustomDropDown
        title={'Select your Relationship Goal'}
        data={dataGoal}
        value={valGoal}
        onValChange={item => {
          setValSex(item?.value);
        }}
      />
      <Text
        style={{
          fontFamily: Fonts.Medium,
          color: Color.BlackColor,
          marginTop: 10,
        }}>
        Choose Disability (if any)
      </Text>
      <CustomDropDown
        title={'Select your Disability'}
        data={dataDisability}
        value={valDisability}
        onValChange={item => {
          setValDisabiliy(item?.value);
        }}
      />
      <CustomButton
        title={'Next'}
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('Interest')}
      />
    </ScrollView>
  );
};

export default PersonalDetail;
