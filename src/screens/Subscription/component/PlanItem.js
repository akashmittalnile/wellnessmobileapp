import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, SCREEN_WIDTH, Sizes } from '../../../assests/style';
import PlansSubscritionLogo from '../../../assests/Svg/planssubsc.svg'
import Tick from '../../../assests/Svg/tick.svg'

const PlanItem = memo(({ plan }) => {
  return (
    <View style={styles.planContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:Sizes.fixPadding}}>
            <View style={{backgroundColor:Colors.primaryTheme,padding:Sizes.fixHorizontalPadding ,justifyContent:'center',alignItems:'center',borderRadius:5}}> 
      <Text style={styles.planTitle}>{plan?.title}</Text>
            </View>
        <PlansSubscritionLogo width={SCREEN_WIDTH * 0.1} height={SCREEN_WIDTH * 0.1}/>
        </View>
      <Text style={styles.planPrice}>{plan?.price}</Text>
      {plan?.isCurrent && <Text style={styles.currentPlanText}>Current Plan</Text>}
      {plan?.discount && <Text style={styles.discountText}>{plan?.discount}</Text>}

      <View style={{borderWidth:0.4,borderColor:'#1D364E',marginVertical:Sizes.fixPadding}}>

      </View>

      {plan?.features.map((feature, index) => {
        return(
            <View  key={feature?.id} style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                <Tick width={SCREEN_WIDTH * 0.06} height={SCREEN_WIDTH * 0.06}/>
        <Text style={styles.featureText}>{feature}</Text>
        </View>
      )})}
    </View>
  );
});

export default PlanItem;

const styles = StyleSheet.create({
  planContainer: {
    backgroundColor: Colors.white,
    borderWidth:1,
    borderColor:Colors.lightblue,
    padding: Sizes.fixPadding,
    borderRadius: 10,
    marginBottom: Sizes.fixHorizontalPadding * 2,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  planTitle: {
    fontSize: 14.7,
    fontFamily:'Poppins-Medium',
    color: Colors.white,
  
  },
  planPrice: {
    fontSize: 50,
    fontWeight: 'Poppins-Medium',
    color: Colors.green,
  },
  currentPlanText: {
    color: Colors.green,
    fontWeight: 'Poppins-Medium',
    fontSizes:14.77,
    marginBottom: Sizes.fixHorizontalPadding,
  },
  discountText: {
    backgroundColor: Colors.green,
    color: Colors.white,
    padding: Sizes.fixHorizontalPadding,
    alignSelf: 'flex-start',
    borderRadius: 5,
    marginTop: 5,
    fontSize: 12,
    fontFamily:'Poppins-Medium'
  },
  featureText: {
    fontSize: 14.77,
    color: '#1D364E',
    fontFamily:'Poppins-Regular',
    marginVertical: 5,
    marginLeft:5
  },
});
