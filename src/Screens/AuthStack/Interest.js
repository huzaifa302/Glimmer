import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Fonts from '../../Config/Fonts';
import Color from '../../Config/Color';

const {height, width} = Dimensions.get('window');

const Interest = () => {
  const [selectInterest, setSelectInterest] = useState([]);
  const [Input, setInput] = useState('');
  const [AllInterest, setAllInterest] = useState([
    {
      name: 'Fun and Games',
    },
    {
      name: 'Card Games',
    },
    {
      name: 'Fantasy',
    },
    {
      name: 'FootBall',
    },
    {
      name: 'Trivia',
    },
    {
      name: 'Game night',
    },
    {
      name: 'Video games',
    },
    {
      name: 'Puzzles',
    },
    {
      name: 'Amusement',
    },
    {
      name: 'Parks',
    },
    {
      name: 'Social Values',
    },
    {
      name: 'Animal rescue',
    },
    {
      name: 'Volunteering',
    },
    {
      name: 'Family',
    },
    {
      name: 'Climate change',
    },
    {
      name: 'Voter rights politics',
    },
    {
      name: 'Health and Lifestyle',
    },
    {
      name: 'working out',
    },
    {
      name: 'walking',
    },
    {
      name: 'meditation',
    },
  ]);

  //   const Interested = [];
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: Color.white}}
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
        Your Interest
      </Text>
      <Text
        style={{fontSize: 12, color: Color.grey, fontFamily: Fonts.regular}}>
        Select a few of your interests and let everyone know what you’re
        passionate about.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {AllInterest.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              if (selectInterest.includes(item?.name)) {
                const newSelected = selectInterest.filter(i => i != item.name);
                setSelectInterest(newSelected);
              } else {
                setSelectInterest([...selectInterest, item.name]);
              }
            }}
            style={{
              height: 45,
              paddingHorizontal: 20,
              backgroundColor: selectInterest.includes(item?.name)
                ? Color.BlueBackgound
                : Color.white,
              borderRadius: 15,
              margin: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: Color.grey,
            }}>
            <Text
              style={{
                color: selectInterest.includes(item?.name)
                  ? Color.white
                  : Color.BlackColor,
                fontFamily: Fonts.regular,
                fontSize: 14,
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          height: 45,
          borderWidth: 1,
          borderColor: Color.grey,
          width: width - 40,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <TextInput
          style={{
            //   height: 45,
            //   width: width - 40,
            paddingHorizontal: 10,

            fontFamily: Fonts.regular,
            fontSize: 12,
            color: Color.BlackColor,
          }}
          onChangeText={t => setInput(t)}
          placeholder="Enter Interest"
          placeholderTextColor={Color.grey}
        />
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          activeOpacity={0.8}
          onPress={() => {
            // return
            setAllInterest(
                [...AllInterest, 
                    {
                        name:Input
                    }
                ]);
          }}>
          <Text
            style={{
              fontSize: 13,
              fontFamily: Fonts.Medium,
              color: Color.BlueBackgound,
            }}>
            Add More
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Interest;
