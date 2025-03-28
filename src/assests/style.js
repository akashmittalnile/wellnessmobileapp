import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export { SCREEN_HEIGHT, SCREEN_WIDTH }

const fontScale = PixelRatio.getFontScale()
export const getFontSize = size => size / fontScale

export const Sizes = {
    fixPadding: SCREEN_HEIGHT * 0.02,
    fixHorizontalPadding: SCREEN_WIDTH*0.02
}
export const Colors = {
    primaryTheme: '#4285F4',
    secondryTheme: '#1C3B6E',
    textBlue: '#112544',
    lightblue:'#CCCCFF',
    linecolor:'#CCD2E3',
    white: '#fff',
    black: '#000',
    grayA: '#E9EDFF',
    grayB: '#adb5bd',
    grayC: '#E2DEDE',
    grayD: '#dee2e6',
    grayE: '#e9ecef',
    grayF: '#f8f9fa',
    grayDark: '#455A64',
    redA: '#e76f51',
    green: '#08D75F',
    redWellness: '#FC6054'
    
}
