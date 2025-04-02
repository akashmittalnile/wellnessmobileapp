
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Colors, SCREEN_WIDTH, Sizes } from '../../../assests/style';
import MyText from '../../../components/MyText';

const EmojiMoodSelector = ({emojidata}) => {
    const emojiMap = {
        '😌': 'Relaxed',
        '😢': 'Sad',
        '😃': 'Happy',
        '😡': 'Angry',
        '😍': 'Loving',
        '🤔': 'Thoughtful',
        '😴': 'Sleepy',
        '🤗': 'Excited',
        '😎': 'Cool',
        '😭': 'Crying',
        '😆': 'Laughing',
        '🤯': 'Mind Blown'
    };
   
    const emojis = Object.keys(emojiMap);
    const [selected, setSelected] = useState(null);

    return (
        <View style={styles.mainContainer}>
            {/* Upper Section with Title */}
            <View style={{ overflow: 'hidden', alignItems: 'center' }}>
                <Image source={require('../../../assests/images/upper.png')} style={{ resizeMode: 'cover', width: '100%' }} />
                <View style={{ position: 'absolute', top: Sizes.fixPadding * 2 }}>
                    <MyText title={'How Are You Feeling Today?'} textStyle={{ fontSize: 20, fontFamily: 'Poppins-Medium' }} />
                </View>
            </View>

            {/* Emoji Selection */}
            {/* <View style={styles.emojiContainer}>
                {emojis.map((emoji, index) => (
                    <TouchableOpacity key={index} onPress={() => setSelected(emoji)} style={[styles.emojiButton, selected === emoji && styles.selectedEmoji]}>
                        <Text style={[styles.emoji, selected === emoji && styles.selectedSizeEmoji]}>{emoji}</Text>
                    </TouchableOpacity>
                ))}
            </View> */}
                <FlatList
                data={emojis}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.emojiContainer}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setSelected(item)} style={[styles.emojiButton, selected === item && styles.selectedEmoji]}>
                        <Text style={[styles.emoji, selected === item && styles.selectedSizeEmoji]}>{item}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* Selected Mood Display */}
            
            {/* Lower Section */}
            <View style={{ overflow: 'hidden',justifyContent:'center', }}>
                <Image source={require('../../../assests/images/lower.png')} style={{ resizeMode: 'cover', width: '100%' }} />
            </View>
            <View style={{position:'absolute',bottom:Sizes.fixPadding * 1.5,alignSelf:'center'}}>
            {selected && (
                <View style={styles.selectedMoodContainer}>
                    <MyText title={emojiMap[selected]} textStyle={styles.selectedMoodText} />
                </View>
            )}

            </View>
        </View>
    );
};

export default EmojiMoodSelector;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.primaryTheme,
        borderWidth: 1,
        borderColor: Colors.linecolor,
        borderRadius: Sizes.fixHorizontalPadding,
        marginVertical: Sizes.fixHorizontalPadding,
        overflow: 'hidden',
      
    },
    emojiContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginVertical: 10,
        // width:'100%',
        alignSelf:'center'
    },
    emojiButton: {
        marginHorizontal: 10,
        padding: 10,
    },
    emoji: {
        fontSize: 25,
    },
    selectedSizeEmoji:{
        fontSize:40
    },
    selectedEmoji: {
        borderBottomWidth: 0,
        borderColor: 'white',
    },
    selectedMoodContainer: {
        // alignItems: 'center',
        // marginTop: 10,
    },
    selectedMoodText: {
        fontSize: 18,
        color: Colors.primaryTheme,
        fontFamily: 'Poppins-Medium',
    },
});
