import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyStatusBar from '../../components/StatusBar'
import { Colors, SCREEN_WIDTH, Sizes } from '../../assests/style'
import MainHeader from '../../components/MainHeader'
import MyTextinput from '../../components/MyTextinput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MyText from '../../components/MyText'
import WriteLogo from '../../assests/Svg/write.svg'
import MicroPhone from '../../assests/Svg/microphone.svg'
import Modal from 'react-native-modal';
import { connect } from 'react-redux'
import * as JounalActions from '../../redux/actions/JounalActions';
import { imagePicker, showToastMessage } from '../../utils/service'
import CustomButton from '../../components/CustomButton'
import RNFetchBlob from 'rn-fetch-blob'

const AddJournal = ({ dispatch, speechText, isListening }) => {
  const [journaltitle, setJournalTitle] = useState('')
  const [passModal, setPassModal] = useState(false)
  const [voiceValue, setVoiceValue] = useState('')
  const [imageData,setImageData] = useState([])
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");
console.log(imageData,'check',tags)


  useEffect(() => {
    setVoiceValue(speechText);
  }, [speechText]);
  useEffect(() => {
    return () => {
      dispatch(JounalActions.stopListening())
    };
  }, [dispatch]);

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
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true}
        extraScrollHeight={10}
        keyboardShouldPersistTaps="handled"
      >
        {jorunalTitle()}
        {multilineText()}
        {writeSpeakBox()}
        {chooseImageData()}
        {tagData()}
        {spaceBarText()}
        {submitJournalBtn()}
      </KeyboardAwareScrollView>
      {openSpeakModal()}
    </ImageBackground>
  )
  function submitJournalBtn() {
    const validation = () => {
          if (journaltitle === '') {
            showToastMessage({ message: 'Please enter your Journal Title.' });
          } else if (voiceValue === '') {
            showToastMessage({ message: 'Please enter your Notes.' });
          } else if (imageData.length === 0) {
            showToastMessage({ message: 'Please select Image.' });
          } else if (tags.length === 0) {
            showToastMessage({ message: 'Please select tags' });
          } else {
            const payload = [
              { name: 'title', data: journaltitle },
              { name: 'notes', data: voiceValue },
              // { name: 'tags[]', data: tags },
            ];
            if (Array.isArray(imageData) && imageData.length > 0) {
              imageData.forEach((image) => {
                  payload.push({
                      name: 'images[]',
                      filename: image.fileName || 'image.jpg',
                      type: image.type || 'image/jpeg',
                      data: RNFetchBlob.wrap(image.uri.replace('file://', '')),
                  });
              });
          }
          tags.forEach((tag) => {
            payload.push({ name: 'tags[]', data: tag });
        });
          console.log(payload,'check')
            dispatch(JounalActions.addJournal(payload));
          }
        };
    return(
      <CustomButton name={'Submit'} style={{backgroundColor:Colors.primaryTheme,padding:Sizes.fixPadding, width:SCREEN_WIDTH * 0.92,marginTop:Sizes.fixPadding}} activeOpacity={1}
      onpress={() => validation()}
      />
    )
  }
  function spaceBarText() {
    return(
      <MyText title={'Use SpaceBar To Convert Tag *'} textStyle={{fontSize:14,fontFamily:'Poppins-Regular',marginTop:Sizes.fixPadding * 0.6}}/>
    )
  }
  function tagData() {
    const handleInputChange = (text) => {
      if (text.endsWith(" ")) { 
        const trimmedText = text.trim();
        if (trimmedText.length > 0) {
          setTags([...tags, trimmedText]);
        }
        setInput("");
      } else {
        setInput(text);
      }
    };
    
      const removeTag = (index) => {
        setTags(tags.filter((_, i) => i !== index));
      };
    const renderItem = ({item,index}) => {
      return(
        <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{item}</Text>
            <TouchableOpacity onPress={() => removeTag(index)}
           style={{backgroundColor:Colors.white,height:25,width:25,justifyContent:'center',alignItems:'center',borderRadius:100,marginLeft:10}}
              >
              <Text style={styles.closeButton}> × </Text>
            </TouchableOpacity>
          </View>
      )
    }
    return(
      <View style={styles.container1}>
      <View style={styles.tagContainer}>
     
        <TextInput
          style={styles.input1}
          value={input}
          onChangeText={handleInputChange}
       
          placeholder="Type Search Criteria Tag Here..."
          autoCapitalize="none"
        />
      </View>
      {tags.length === 0 ? null : (  <View style={{borderWidth:1,padding:Sizes.fixPadding *0.7,borderColor:Colors.linecolor,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
        <FlatList 
        data={tags}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
         ItemSeparatorComponent={() => <View style={{width:5}}></View>}
              />
      </View>)}
    </View>
    )
  }
  function chooseImageData() {
    const onPicker = async type => {
      const response = await imagePicker({ type, multiple: true });
    
      if (response) {
         
        setImageData(response)
      }
  };
  const removeImage = (index) => {
    setImageData(imageData.filter((_, i) => i !== index))
  }
    return(
        <View style={{borderWidth:1,padding:Sizes.fixHorizontalPadding,borderStyle:'dashed',borderRadius:8,borderColor:'#1D364E',flexDirection:'row',alignItems:'center',marginTop:Sizes.fixPadding}}>
            <TouchableOpacity style={{backgroundColor:'#C4CBFF',flexDirection:'row',alignItems:'center',justifyContent:'center',padding:Sizes.fixHorizontalPadding ,borderRadius:10,paddingHorizontal:Sizes.fixPadding}}
             onPress={() => onPicker('gallary')}
            >
                <Image source={require('../../assests/images/galleryCamera/gallery.png')} />

                <MyText title={'Choose File'} textStyle={{fontSize:12,fontFamily:'Poppins-Regular',marginLeft:3}}/>
            </TouchableOpacity>
            {/* {
              imageData?.uri ? ( 
              <View style={{height: SCREEN_WIDTH * 0.15, width: SCREEN_WIDTH * 0.15,borderRadius:100,overflow:'hidden',borderWidth:1,borderColor:Colors.primaryTheme,marginLeft:10}}>
                <Image source={{ uri: imageData?.uri }} style={{ height: SCREEN_WIDTH * 0.15, width: SCREEN_WIDTH * 0.15 }} />
                </View>) : (  <MyText title={'No File Chosen'} textStyle={{fontSize:12,fontFamily:'Poppins-Regular',marginLeft:10}}/>)
                
            } */}
        {imageData.length > 0 ? (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginLeft: 10 }}>
    {imageData.map((image, index) => (
      <View 
        key={index} 
        style={{ 
          height: SCREEN_WIDTH * 0.15, 
          width: SCREEN_WIDTH * 0.15, 
          borderRadius: 100, 
          // overflow: 'hidden', 
          borderWidth: 1, 
          borderColor: Colors.primaryTheme, 
          marginLeft: index > 0 ? 5 : 0 ,
          position:'relative'
        }}
      >
       <TouchableOpacity 
          style={{ 
            position: 'absolute', 
            top: 2, 
            right: 1, 
            backgroundColor: Colors.primaryTheme, 
            borderRadius: 15, 
            zIndex: 10, 
            width: 20, 
            height: 20, 
            alignItems: 'center', 
            justifyContent: 'center' 
          }} 
          onPress={() => removeImage(index)}
        >
       <Text style={{color:'white',fontSize:13}}>X</Text>
        </TouchableOpacity>

        <Image source={{ uri: image.uri }} style={{ height: '100%', width: '100%',borderRadius:100 }} />
      </View>
    ))}
  </ScrollView>
) : (
  <MyText title={'No File Chosen'} textStyle={{ fontSize: 12, fontFamily: 'Poppins-Regular', marginLeft: 10 }} />
)}

          
        </View>
    )
  }
  function openSpeakModal() {
    const startrecording = () => {
      dispatch(JounalActions.startListening())
    }
    const stoprecording = () => {
      dispatch(JounalActions.stopListening())
    }
    return (
      <View>
        <Modal isVisible={passModal} onBackdropPress={() => setPassModal(false)}
          style={{ justifyContent: 'flex-end', margin: 0 }}
        >
          <View style={{ backgroundColor: 'white', borderTopLeftRadius: Sizes.fixPadding, borderTopRightRadius: Sizes.fixPadding, paddingVertical: Sizes.fixPadding * 2 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <MyText title={'Speak!!!'} textStyle={{ fontSize: 24, fontFamily: 'Poppins-Medium', color: Colors.textBlue }} />
              <MyText title={'Your Thoughts'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#B8B8B8' }} viewStyle={{ marginVertical: Sizes.fixHorizontalPadding * 0.5 }} />
            </View>
            <TouchableOpacity style={styles.micboxmodal}
              onPressIn={() => startrecording()}
              onPressOut={() => stoprecording()}
            >
              <MicroPhone height={SCREEN_WIDTH * 0.1} width={SCREEN_WIDTH * 0.1} />
            </TouchableOpacity>

            <MyText title={isListening ? 'Listening...' : 'Tap & Hold To Speak'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: Colors.textBlue }} viewStyle={{ alignSelf: 'center' }} />
          </View>


        </Modal>
      </View>
    )
  }
  function writeSpeakBox() {
    return (
      <View style={styles.wsbox}>
        <TouchableOpacity style={{ backgroundColor: Colors.primaryTheme, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: Sizes.fixHorizontalPadding, borderRadius: 5, paddingHorizontal: Sizes.fixPadding * 2 }}

        >
          <WriteLogo />
          <MyText title={'Write'} textStyle={{ fontSize: 14, fontFamily: 'Poppins-Medium', marginLeft: 7, color: Colors.white }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: Colors.green, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: Sizes.fixHorizontalPadding, borderRadius: 5, paddingHorizontal: Sizes.fixPadding * 2 }}
          onPress={() => setPassModal(true)}
        >
          <MicroPhone />
          <MyText title={'Speak'} textStyle={{ fontSize: 14, fontFamily: 'Poppins-Medium', marginLeft: 7, color: Colors.white }} />
        </TouchableOpacity>
      </View>
    )
  }
  function multilineText() {
    return (
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          value={voiceValue}
          placeholder="Type Your Message Here..."
          placeholderTextColor="#8F93A0"
          multiline
          onChangeText={(txt) => setVoiceValue(txt)}
        />
      </View>
    )
  }
  function jorunalTitle() {
    return (
      <MyTextinput placeholder="Journal Title" value={journaltitle} onChangeText={(txt) => setJournalTitle(txt)} />
    )
  }
  function Header() {
    return (
      <View style={{}}>
        <MainHeader title={'Add Journal'} />
      </View>
    )
  }
}
const mapStateToProps = state => ({
  isListening: state.journalReducer.isListening,
  speechText: state.journalReducer.speechText
});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(AddJournal);
// export default AddJournal

const styles = StyleSheet.create({
  background: { flex: 1 },
  scrollContainer: {
    flexGrow: 1,
    padding: Sizes.fixPadding
  },
  containerInput: {
    marginTop: Sizes.fixHorizontalPadding
  },
  input: {
    width: "100%",
    height: SCREEN_WIDTH * 0.35,
    borderWidth: 1,
    borderColor: '#CCCCFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: Sizes.fixPadding,
    backgroundColor: Colors.white,
    fontSize: 12,
    fontFamily: 'Poppins-Regular'
  },
  wsbox: {
    borderWidth: 1,
    borderColor: '#CCCCFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: Sizes.fixPadding * 0.5
  },
  micboxmodal: {
    height: SCREEN_WIDTH * 0.25,
    width: SCREEN_WIDTH * 0.25,
    borderRadius: 100,
    backgroundColor: Colors.green,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Sizes.fixHorizontalPadding
  },
  container1:{
    marginTop:Sizes.fixHorizontalPadding * 2
  },
  tagContainer: {
    borderWidth: 1,
    borderColor: Colors.linecolor,
    padding: 5,
    borderRadius: 5,
  },
  tag: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: Colors.primaryTheme,
   
    paddingVertical: 6,
    paddingHorizontal: Sizes.fixPadding,
    borderRadius: 10,
    // marginRight: 5,
    // marginBottom: 5,
  },
  tagText: {
    color: Colors.white,
    fontFamily:'Poppins-Medium',
    fontSize:14
  },
  closeButton: {
    color: Colors.primaryTheme,
    fontSize: 18,
    // marginLeft: 5,
  },
  input1: {
    flex: 1,
    minWidth: 50, 
    padding: 5,
  },
})