import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const ProgressCircle = ({
  percentage,
  radius = 50,
  strokeWidth = 10,
  width = null, // Custom width
  height = null, // Custom height
  circleColor = '#4242DA', // Customizable circle color
  backgroundColor = '#4242DA', // Customizable background color
  textColor = '#333', // Customizable text color
  ProgressTextSize = 8,
  fontSize = 11
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate the progress value
    Animated.timing(animatedValue, {
      toValue: percentage,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animatedStrokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  const viewBoxSize = halfCircle * 2;

  return (
    <View
      style={[
        styles.container,
        { width: width || viewBoxSize, height: height || viewBoxSize },
      ]}
    >
      <Svg
        width={width || viewBoxSize}
        height={height || viewBoxSize}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      >
        {/* Background Circle */}
        <Circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <AnimatedCircle
          cx="50%"
          cy="50%"
          r={radius}
          stroke={circleColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={animatedStrokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>
      <Text style={[styles.percentageText, { color: textColor,textSize:ProgressTextSize,fontSize: fontSize, }]}>
        {Math.round(percentage)}%
      </Text>
    </View>
  );
};

// AnimatedCircle is required to animate SVG properties
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageText: {
    position: 'absolute',
    fontFamily: 'Poppins-Medium'
  },
});

export default ProgressCircle;
