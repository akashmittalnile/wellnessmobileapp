import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, SCREEN_WIDTH, Sizes } from '../../assests/style'
import MainHeader from '../../components/MainHeader'
import MyStatusBar from '../../components/StatusBar'
import MyText from '../../components/MyText'
import CloseCircle from '../../assests/Svg/close-circle.svg'
import TickCircle from '../../assests/Svg/tick-circle.svg'
import CustomButton from '../../components/CustomButton'

const TestShow = () => {
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
                        {imagePart()}
                        {testScoreTitle()}
                        {testScore()}
                        {rankitem()}
                        {correctWrongAnswer()}
                        {closeBtn()}
                    </>
                }
                contentContainerStyle={styles.flatListContent}
            />
        </ImageBackground>
    )
    function closeBtn() {
        return(
            <CustomButton name={'Close'} textStyle={{ fontSize: 18, fontFamily: 'Poppins-Medium' }} style={{ backgroundColor: Colors.primaryTheme, paddingVertical: Sizes.fixPadding  , marginTop: Sizes.fixPadding ,width:'100%' }} activeOpacity={0.6} />
        )
    }
    function correctWrongAnswer() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.answerContainer}>
                    <TickCircle />
                    <View style={styles.answerTextContainer}>
                        <MyText title={'Correct Answer'} textStyle={styles.correctAnswerText} />
                        <MyText title={'25'} textStyle={styles.answerCountText} />
                    </View>
                </View>
                <View style={styles.answerContainer}>
                    <CloseCircle />
                    <View style={styles.answerTextContainer}>
                        <MyText title={'Wrong Answer'} textStyle={styles.correctAnswerText} />
                        <MyText title={'25'} textStyle={styles.answerCountText} />
                    </View>
                </View>
            </View>
        )
    }
    function rankitem() {
        return (
            <View style={styles.rankStyle}>
                <MyText title={'1 st'} textStyle={styles.rankText} />
            </View>
        )
    }
    function testScore() {
        return (
            <View>
                <MyText title={'Memory Test'} textStyle={styles.memoryTestText} />
                <View style={styles.testScoreContainer}>
                    <MyText title={'25'} textStyle={styles.testScoreText} />
                    <MyText title={'/25'} textStyle={styles.testScoreTotalText} />
                </View>
            </View>
        )
    }
    function testScoreTitle() {
        return (
            <MyText title={'James John Test Score'} textStyle={styles.testScoreTitle} />
        )
    }
    function imagePart() {
        return (
            <View style={styles.imageContainer}>
                <Image source={require('../../assests/images/deleteImages/profileLogo.png')} style={styles.proImage} />
            </View>
        )
    }
    function Header() {
        return (
            <View>
                <MainHeader title={'Group A Test'} />
            </View>
        )
    }
}

export default TestShow

const styles = StyleSheet.create({
    background: { flex: 1 },
    flatListContent: { padding: Sizes.fixPadding },
    proImage: {
        height: SCREEN_WIDTH * 0.22,
        width: SCREEN_WIDTH * 0.22,
        resizeMode: 'cover'
    },
    imageContainer: {
        borderWidth: 6,
        height: SCREEN_WIDTH * 0.3,
        width: SCREEN_WIDTH * 0.3,
        alignSelf: 'center',
        borderRadius: 100,
        borderColor: '#5E4AF7',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Sizes.fixPadding
    },
    rankStyle: {
        height: SCREEN_WIDTH * 0.1,
        width: SCREEN_WIDTH * 0.1,
        backgroundColor: Colors.primaryTheme,
        borderRadius: 100,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: Sizes.fixHorizontalPadding
    },
    rankText: {
        fontSize: 12,
        color: Colors.white,
        textAlign: 'center'
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        gap: Sizes.fixHorizontalPadding,
        marginTop: Sizes.fixHorizontalPadding
    },
    answerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.linecolor,
        borderRadius: 10,
        paddingVertical: Sizes.fixPadding,
        flexGrow: 1,
        backgroundColor: Colors.white,
        paddingLeft: Sizes.fixHorizontalPadding
    },
    answerTextContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: Sizes.fixHorizontalPadding
    },
    correctAnswerText: {
        fontSize: 13,
        color: Colors.textBlue,
        fontFamily: 'Poppins-Regular'
    },
    answerCountText: {
        fontSize: 16,
        color: Colors.primaryTheme,
        fontFamily: 'Poppins-Regular'
    },
    memoryTestText: {
        fontSize: 15,
        color: Colors.green,
        textAlign: 'center'
    },
    testScoreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Sizes.fixHorizontalPadding
    },
    testScoreText: {
        fontSize: 30,
        color: Colors.green,
        textAlign: 'center'
    },
    testScoreTotalText: {
        fontSize: 30,
        color: Colors.textBlue,
        textAlign: 'center'
    },
    testScoreTitle: {
        fontSize: 20,
        color: '#0C092A',
        textAlign: 'center',
        marginVertical: Sizes.fixPadding
    }
})