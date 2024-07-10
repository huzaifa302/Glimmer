import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

// import icons from '../assets/icons';
import {useSelector} from 'react-redux';
import Color from '../Config/Color';
import Fonts from '../Config/Fonts';

const {width, height} = Dimensions.get('window');

const CustomDropDown = ({title, data, value, onValChange = () => {}}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View
      style={{
        width: width - 40,
        height: 45,
        paddingHorizontal: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        borderWidth: 1,
        borderColor: Color.grey,
        marginTop: 15,
        // backgroundColor: Colors.primary,
        // borderTopRightRadius: 15,
        // borderBottomLeftRadius: 15,
        // borderColor: isFocus ? Colors.primary : Colors.grey4E4E4E,
      }}>
      <Dropdown
        style={[{flex: 1}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={{
          color: Color.grey,
          fontFamily: Fonts.regular,
          fontSize: 12,
        }}
        itemTextStyle={[styles.itemTextStyle, {color: Color.white}]}
        iconStyle={styles.iconStyle}
        data={data}
        activeColor={'transparent'}
        maxHeight={300}
        containerStyle={{
          backgroundColor: Color.BlueBackgound,
          paddingHorizontal: 20,
          marginTop: 5,
          borderWidth: 0,
        //   borderBottomLeftRadius: 30,
        }}
        showsVerticalScrollIndicator={false}
        labelField="label"
        valueField="value"
        placeholder={title}
        // itemContainerStyle={{ backgroundColor: 'red', }}
        // fontFamily={Fonts.technorRegular}
        
        // searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          onValChange(item);
          setIsFocus(false);
        }}
        renderItem={item => {
          return (
            <Text
              style={{
                borderBottomWidth: data[data.length - 1] == item ? 0 : 1,
                borderColor: Color.white,
                padding: 12,
                fontFamily: Fonts.regular,
                fontSize: 12,
                color: Color.white
              }}>
              {item?.label}
            </Text>
            // <Text children={"Hello worl"} st/>
          );
        }}
        // renderLeftIcon={() => (
        //     <Image source={icons.plus}
        //         tintColor={isFocus ? 'blue' : 'black'}
        //         style={{ marginRight: 5, }}
        //     />
        // )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    backgroundColor: Color.BlueBackgound,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,

    fontSize: 12,
  },
  itemTextStyle: {
    color: Color.white,
    fontSize: 12,
    fontFamily: Fonts.regular,
  },
  placeholderStyle: {
    fontSize: 12,
    color: Color.grey,
    fontFamily: Fonts.regular,
  },
  selectedTextStyle: {
    fontSize: 12,
    color: Color.white,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    fontSize: 12,
  },
});
export default CustomDropDown;
