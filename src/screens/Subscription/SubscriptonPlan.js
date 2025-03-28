import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { Sizes } from '../../assests/style'
import AuthHeader from '../Auth/components/AuthHeader'
import PlanItem from './component/PlanItem'

const SubscriptonPlan = () => {
  return (
   <ImageBackground 
           source={require('../../assests/images/signinbackground.png')} 
           style={styles.background}
           resizeMode="cover"
         >
           {Header()}
           <FlatList
                ListHeaderComponent={
                    <>
                    {allPlans()}
                    </>
                }
                contentContainerStyle={{  flexGrow: 1, padding: Sizes.fixPadding, overflow: 'hidden' }}
                showsVerticalScrollIndicator={false}
                  
               
            />
          
          
      
       </ImageBackground>
  )
  function allPlans() {
    const subscriptionPlans = [
        {
          id: '1',
          title: 'Plan A',
          price: 'Free',
          isCurrent: true,
          features: [
            '1 Entry Per Day/250 Words',
            'Create 1 Group',
            'Setup 2 Cognitive Tests',
          ],
        },
        {
          id: '3',
          title: 'Plan B',
          price: '$5.99',
          isCurrent: false,
          discount: 'Save 10%',
          features: [
            '3 Entries Per Day/250 Words Each',
            'Create Multiple Groups',
            'Setup Multiple Cognitive Tests',
            'View Daily Log Insights',
          ],
        },
        
        {
          id: '4',
          title: 'Plan B',
          price: '$5.99',
          isCurrent: false,
          discount: 'Save 10%',
          features: [
            '3 Entries Per Day/250 Words Each',
            'Create Multiple Groups',
            'Setup Multiple Cognitive Tests',
            'View Daily Log Insights',
          ],
        },
        {
          id: '5',
          title: 'Plan B',
          price: '$5.99',
          isCurrent: false,
          discount: 'Save 10%',
          features: [
            '3 Entries Per Day/250 Words Each',
            'Create Multiple Groups',
            'Setup Multiple Cognitive Tests',
            'View Daily Log Insights',
          ],
        },
        {
          id: '6',
          title: 'Plan B',
          price: '$5.99',
          isCurrent: false,
          discount: 'Save 10%',
          features: [
            '3 Entries Per Day/250 Words Each',
            'Create Multiple Groups',
            'Setup Multiple Cognitive Tests',
            'View Daily Log Insights',
          ],
        }
      ];
      const renderPlanItem = useCallback(({ item }) => <PlanItem plan={item} />, []);
    return(
        <View>
               <FlatList
          data={subscriptionPlans}
          keyExtractor={(item) => item?.id}
          renderItem={renderPlanItem}
          contentContainerStyle={styles.listContainer}
          initialNumToRender={5} 
        />
        </View>
    )
  }
  function Header() {
    return(
        <View style={{marginTop:55}}>
        <AuthHeader title={'Subscription Plan'}/>
        </View>
    )
  }
}

export default SubscriptonPlan

const styles = StyleSheet.create({
    scrollContainer: {
                 flexGrow: 1,
                 padding: Sizes.fixPadding * 1.4
                },
                background:{ flex:1},
                listContainer: {
                   
        
                  },
})