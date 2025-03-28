import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import SearchLogo1 from '../assests/Svg/search-normal1.svg'
import SearchLogo from '../assests/Svg/search-normal.svg'
import { Colors, Sizes } from '../assests/style'
const CustomSearchInput = ({
    style,
    svgLogo: SvgLogo = SearchLogo1,
    placeholder,
    value,
    onChangeText,
    onPress,
    showButton = false,
    
}) => {
    return (
        <View style={[styles.inputContainer, style]}>
            <View style={styles.searchInputContainer}>
                <SearchLogo />
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    style={styles.searchInput}
                    
                />
            </View>
            {showButton && (
                <TouchableOpacity style={styles.searchButton} onPress={onPress}>
                    <SvgLogo />
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 4,
        
    },
    searchInputContainer: {
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor:Colors.white,
        borderRadius: 5,
        padding: Sizes.fixHorizontalPadding,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 1,
        borderColor:Colors.linecolor,
        borderWidth:1

    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontFamily: 'Poppins-Regular',
        fontSize:12,
      
    },
    searchButton: {
        width: 55,
        height: 55,
        borderRadius: 5,
        backgroundColor: Colors.primaryTheme,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default CustomSearchInput