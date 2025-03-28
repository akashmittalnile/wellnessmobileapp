import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, SCREEN_WIDTH, Sizes } from '../../../assests/style';

const CognitiveTetsCard = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card} activeOpacity={0.8}>
        <View style={styles.circle}>
          <Text style={styles.shortText}>{item?.short}</Text>
        </View>
        <Text style={styles.title}>{item?.title}</Text>
      </TouchableOpacity>
    );
  };
export default CognitiveTetsCard

const styles = StyleSheet.create({
    card: {
        width: SCREEN_WIDTH * 0.287,
        backgroundColor: Colors.white,
        borderRadius: Sizes.fixHorizontalPadding,
        alignItems: "center",
        justifyContent: 'flex-start',

        marginHorizontal: Sizes.fixHorizontalPadding * 0.5,
        borderWidth:1,borderColor:Colors.linecolor
      },
      circle: {
        width: SCREEN_WIDTH * 0.13,
        height: SCREEN_WIDTH * 0.13,
        borderRadius: 100,
        backgroundColor: '#E9EDFF',
        alignItems: "center",
        justifyContent: "center",
        marginVertical: Sizes.fixHorizontalPadding * 0.7,
      },
      shortText: {
        fontSize: 18,
        fontWeight: 'Poppins-Medium',
        color: Colors.primaryTheme,
      },
      title: {
        fontSize: 13,
        fontWeight: 'Popins-Regular',
        textAlign: "center",
        color: Colors.black,
        paddingHorizontal:Sizes.fixHorizontalPadding,
        paddingBottom:Sizes.fixHorizontalPadding
      },
})