import React, {FunctionComponent, useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import RegularButton from '../../components/Button/RegularButton';
import {
  BLACK,
  LAVENDER,
  LIGHT_GRAYISH,
  PURPLE_A,
  WHITE,
} from '../../constants/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainContainer from '../../components/Container/MainContainer';
import LottieView from 'lottie-react-native';
import {height, width} from '../../assets/dimensions';

const OnBoarding: FunctionComponent = () => {
  const [scrollPage, setScrollPage] = useState(0);
  const onboardData = [
    {
      title: 'Track Every Expense',
      description:
        'Effortlessly monitor your spending with our intuitive tracking system. Stay in control of your finances, big or small.',
      imageURL: require('../../assets/LottieAnimation/Expense.json'),
    },
    {
      title: 'Simplify Your Finances',
      description:
        'Experience a hassle-free way to manage your expenses. Our app streamlines your financial records for easy tracking and analysis.',
      imageURL: require('../../assets/LottieAnimation/Saving.json'),
    },
    {
      title: 'Take Charge of Your Money',
      description:
        'Empower yourself by keeping tabs on your spending habits. Gain insights and make informed financial decisions effortlessly.',
      imageURL: require('../../assets/LottieAnimation/TakeControl.json'),
    },
  ];

  const handleScroll = (event: {
    nativeEvent: {contentOffset: {x: any}; layoutMeasurement: {width: any}};
  }) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const pageWidth = event.nativeEvent.layoutMeasurement.width;
    const page = Math.floor(xOffset / pageWidth);
    setScrollPage(page);
    console.log(scrollPage);
  };

  const styleIcon = {
    shadowOpacity: scrollPage === 0 ? 0.5 : 0,
    shadowOffset:
      scrollPage === 0 ? {height: 1, width: 1} : {height: 0, width: 0},
  };

  return (
    <MainContainer style={{backgroundColor: LIGHT_GRAYISH}}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={160}
        >
        {onboardData.map((item, index) => {
          return (
            <View key={index} style={styles.LOTTIEContainer}>
              <LottieView
                style={styles.Lottie}
                source={item.imageURL}
                autoPlay
                loop
              />
              <Text style={styles.Title}>{item.title}</Text>
              <Text style={styles.Description}>{item.description}</Text>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.IconContainer}>
        <Ionicons
          name="ellipse"
          size={scrollPage === 0 ? 15 : 12}
          color={scrollPage === 0 ? PURPLE_A : LAVENDER}
          style={{
            shadowOpacity: scrollPage === 0 ? 0.3 : 0,
            shadowColor: scrollPage === 0 ? BLACK : WHITE,
            shadowOffset:
              scrollPage === 0
                ? {
                    height: 1,
                    width: 1,
                  }
                : {
                    height: 0,
                    width: 0,
                  },
          }}
        />
        <Ionicons
          name="ellipse"
          size={scrollPage === 1 ? 15 : 12}
          color={scrollPage === 1 ? PURPLE_A : LAVENDER}
          style={{
            shadowOpacity: scrollPage === 1 ? 0.3 : 0,
            shadowColor: scrollPage === 1 ? BLACK : WHITE,
            shadowOffset:
              scrollPage === 1
                ? {
                    height: 1,
                    width: 1,
                  }
                : {
                    height: 0,
                    width: 0,
                  },
          }}
        />
        <Ionicons
          name="ellipse"
          size={scrollPage === 2 ? 15 : 12}
          color={scrollPage === 2 ? PURPLE_A : LAVENDER}
          style={{
            shadowOpacity: scrollPage === 2 ? 0.3 : 0,
            shadowColor: scrollPage === 2 ? BLACK : WHITE,
            shadowOffset:
              scrollPage === 2
                ? {
                    height: 1,
                    width: 1,
                  }
                : {
                    height: 0,
                    width: 0,
                  },
          }}
        />
      </View>

      <View style={styles.ButtonContainer}>
        <RegularButton
          style={{
            backgroundColor: PURPLE_A,
            marginTop: 20,
            marginHorizontal: 10,
          }}
          textStyle={{color: WHITE, fontWeight: '600'}}
          onPress={() => console.log('Signup')}>
          Signup
        </RegularButton>
        <RegularButton
          style={{
            backgroundColor: LAVENDER,
            marginTop: 20,
            marginHorizontal: 10,
          }}
          textStyle={{color: PURPLE_A, fontWeight: '600'}}
          onPress={() => console.log('Login')}>
          Login
        </RegularButton>
      </View>
    </MainContainer>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  LOTTIEContainer: {
    // flex:1,
    width: width,
    height: height * 0.7,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Lottie: {
    width: width * 0.9,
    height: width * 0.9,
  },
  Title: {
    fontSize: 25,
    fontWeight: '600',
  },
  Description: {
    fontSize: 16,
  },
  ButtonContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  IconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
});
