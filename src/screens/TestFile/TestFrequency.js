import { Button, FlatList, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyStatusBar from '../../components/StatusBar'
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH, Sizes } from '../../assests/style'
import MainHeader from '../../components/MainHeader'
import MyText from '../../components/MyText'
import DatePicker from 'react-native-date-picker'
import ClockIcon from '../../assests/Svg/clockblack.svg'
import ResetPassModalLogo from '../../assests/Svg/resetpassmodal.svg'
import moment from 'moment'
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message'
import CustomButton from '../../components/CustomButton'


const TestFrequency = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [meridiem, setMeridiem] = useState(moment(date).format('A'));
   const [passModal,setPassModal] = useState(false)

  useEffect(() => {
    setMeridiem(moment(date).format('A'));
  }, [date]);

  return (
    <ImageBackground
      source={require('../../assests/images/signinbackground.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <MyStatusBar
        backgroundColor={Colors.primaryTheme}
        barStyle='light-content'
      />
      {Header()}
      <FlatList
        ListHeaderComponent={
          <>
            {timeFrequenctText()}
            {timeCategoryData()}
            {startTimeText()}
            {timepicker()}
            
            
          </>
        }
        contentContainerStyle={{ padding: Sizes.fixPadding }}
      />
      {nextBtn()}
      {resetModal()}
    </ImageBackground>
  )
  function resetModal() {
    return(
        <View>
        <Modal isVisible={passModal} onBackdropPress={() => setPassModal(false) }
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <View style={{backgroundColor:'white',borderTopLeftRadius:Sizes.fixPadding,borderTopRightRadius:Sizes.fixPadding}}>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: Sizes.fixPadding * 2 }}>
        <ResetPassModalLogo width={SCREEN_WIDTH * 0.7} height={SCREEN_HEIGHT * 0.22} />
      </View>
      <MyText title={`Test Added Successfully`} textStyle={{ color: '#505A61', fontSize: 20, textAlign: 'center', marginVertical: Sizes.fixHorizontalPadding }} />
      <CustomButton name={'Close'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.8, marginTop: Sizes.fixHorizontalPadding * 2,marginBottom:Sizes.fixPadding * 2 }} activeOpacity={0.6} onpress={() => {setPassModal(false); }} />
        </View>
<Toast/>
      </Modal>
      </View>
    )
  }
  function nextBtn() {
    return(
        <View style={{position:'absolute',bottom:50,alignSelf:'center'}}>
            <CustomButton name={'Continue'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding * 0.9,width:SCREEN_WIDTH * 0.9, }} activeOpacity={0.6} onpress={() => setPassModal(true)}/>
        </View>
    )
  }
  function timepicker() {
    return (
      <View style={styles.timePickerContainer}>
        <View style={styles.timeInputContainer}>
          <TextInput
            style={styles.timeInput}
            value={moment(date).format('hh:mm')}
            placeholder="HH:MM"
            editable={false}
          />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <ClockIcon/>
          </TouchableOpacity>
        </View>
        <View style={styles.meridiemContainer}>
          <TouchableOpacity style={[styles.meridiemButton, meridiem === 'AM' && styles.selectedMeridiem]}>
            <Text style={[styles.meridiemText, meridiem === 'AM' && styles.selectedMeridiemText]}>AM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.meridiemButton, meridiem === 'PM' && styles.selectedMeridiem]}>
            <Text style={[styles.meridiemText, meridiem === 'PM' && styles.selectedMeridiemText]}>PM</Text>
          </TouchableOpacity>
        </View>
        <DatePicker
          modal
          open={open}
          date={date}
          mode="time"
          onConfirm={(selectedDate) => {
            setOpen(false);
            setDate(selectedDate);
          }}
          onCancel={() => setOpen(false)}
        />
      </View>
    )
  }
function startTimeText() {
  return(
    <MyText title={'Start Time'} textStyle={{ fontSize: 14, color: '#112544' }} viewStyle={{ marginVertical: Sizes.fixPadding * 0.8 }} />
  )
}
  function timeCategoryData() {
    const options = [
      { id: "1", title: "Daily" },
      { id: "2", title: "Bi-Weekly" },
      { id: "3", title: "Weekly" },
      { id: "4", title: "More" },
    ];
    return (
      <View style={styles.container}>
        <FlatList
          data={options}
          horizontal
          keyExtractor={(item) => item?.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={{ width: 5 }}></View>}
          renderItem={({ item }) => {
            const isSelected = item?.id === selectedId;
            return (
              <TouchableOpacity
                style={[styles.item, isSelected && styles.selectedItem]}
                onPress={() => setSelectedId(item?.id)}
              >
                <Text style={[styles.text, isSelected && styles.selectedText]}>
                  {item?.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    )
  }
  function timeFrequenctText() {
    return (
      <MyText title={'Time & Frequency'} textStyle={{ fontSize: 14, color: '#112544' }} viewStyle={{ marginVertical: Sizes.fixPadding }} />
    )
  }
  function Header() {
    return (
      <View style={{}}>
        <MainHeader title={'Test Frequency'} />
      </View>
    )
  }
}

export default TestFrequency

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: {
    // paddingVertical: Sizes.fixHorizontalPadding,
    margin: - Sizes.fixPadding
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Sizes.fixPadding,
    paddingVertical: Sizes.fixPadding
  },
  item: {
    paddingVertical: Sizes.fixHorizontalPadding * 1.4,
    paddingHorizontal: Sizes.fixPadding * 1.6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.linecolor,
    // marginHorizontal: Sizes.fixHorizontalPadding * 0.5,

    backgroundColor: Colors.white,
  },
  selectedItem: {
    backgroundColor: Colors.green,
    borderWidth: 0
    // borderColor: "#4A90E2",
  },
  text: {
    color: Colors.textBlue,
    fontSize: 14,
    fontFamily: 'Poppins-Regular'
  },
  selectedText: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: 'Poppins-Regular'
  },
  timePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 10,
  },
  timeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.linecolor,
    borderRadius: 8,
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
  timeInput: {
    flex: 1,
    fontSize: 12,
    fontFamily:'Poppins-Regular',
    color:Colors.textBlue
  },
  meridiemContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
  },
  meridiemButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.linecolor,
  },
  selectedMeridiem: {
    backgroundColor: Colors.green,
  },
  meridiemText: {
    fontSize: 14,
    color: Colors.textBlue,
    fontFamily:'Poppins-Regular'
  },
  selectedMeridiemText: {
    color: Colors.white,
  }
})