import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import MyStatusBar from '../../components/StatusBar'
import { Colors, Sizes } from '../../assests/style'
import MainHeader from '../../components/MainHeader'
import NotificationItem from './components/NotificationItem'

const Notification = () => {
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
    {notificationData()}
    </>
  }
  contentContainerStyle={{ padding:Sizes.fixPadding }}
/>

</ImageBackground>
  )
  function notificationData() {
    const notifications = [
        {
          id: "1",
        
          title: "Upgrade To Plan B",
          time: "12:03pm",
          badge: "Save 10%",
          badgeColor: "#22c55e",
        },
        {
          id: "2",
          badge: null,
          title: "Profile Updated Successfully",
          time: "12:03pm",
        },
        {
          id: "3",
          badge: null,
          title: "Password Changed Successfully",
          time: "12:03pm",
        },
      ];
      const renderItem = useCallback(({ item }) => <NotificationItem item={item} />, []);
      
    return(
        <View style={{}}>
       <FlatList
      data={notifications}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      initialNumToRender={5} 
      maxToRenderPerBatch={5} 
      windowSize={10} 
      removeClippedSubviews={true}
      updateCellsBatchingPeriod={50}
    />
        </View>
    )
  }
  function Header() {
    return(
        <View style={{}}>
            <MainHeader title={'Notification'}/>
        </View>
    )
  }
}

export default Notification

const styles = StyleSheet.create({
    background:{ flex:1},
})