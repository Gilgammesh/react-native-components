import React, {FC, useContext, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageSourcePropType,
  Image,
  View,
  Dimensions,
  Text,
  Pressable,
  Animated,
} from 'react-native';
import Reanimated, {Extrapolate, interpolate, useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
import HeaderTitle from '../components/HeaderTitle';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import useAnimation from '../hooks/useAnimation';
import {RootStackNavigatorParams} from '../navigation/Navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {ThemeContext} from '../context/ThemeContext';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

type SlidesProps = StackScreenProps<RootStackNavigatorParams>;

const pageWidth = Dimensions.get('window').width;

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

const PaginationItem: FC<{
  index: number;
  length: number;
  animValue: Reanimated.SharedValue<number>;
}> = props => {
  const {animValue, index, length} = props;

  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

  const width = 12;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(animValue?.value, inputRange, outputRange, Extrapolate.CLAMP),
        },
      ],
    };
  }, [animValue, index, length]);

  return (
    <View style={[styles.paginationItem, {backgroundColor: colors.divider}]}>
      <Reanimated.View style={[styles.paginationDot, animStyle, {backgroundColor: colors.primary}]} />
    </View>
  );
};

const SlidesScreen = ({navigation}: SlidesProps) => {
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

  const [enableBtn, setEnableBtn] = useState<boolean>(false);
  const progressValue = useSharedValue<number>(0);

  const {opacity, fadeIn, fadeOut} = useAnimation();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle title="Slides Show" />
      <View style={styles.containerCarousel}>
        <Carousel
          loop
          pagingEnabled={true}
          snapEnabled={true}
          autoPlay={false}
          autoPlayInterval={1500}
          onProgressChange={(_, absoluteProgress) => {
            progressValue.value = absoluteProgress;
            if (absoluteProgress + 1 === items.length) {
              setEnableBtn(true);
              fadeIn(400);
            } else {
              setEnableBtn(false);
              fadeOut(400);
            }
          }}
          data={items}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Image style={styles.image} source={item.img} />
              <Text style={[styles.title, {color: colors.primary}]}>{item.title}</Text>
              <Text style={[styles.desc, {color: colors.text}]}>{item.desc}</Text>
            </View>
          )}
          width={pageWidth}
          height={550}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 10,
          }}
        />
        <View style={styles.footer}>
          <View style={styles.paginationCont}>
            {items.map((_, index) => {
              return <PaginationItem animValue={progressValue} index={index} key={index} length={items.length} />;
            })}
          </View>
          <Pressable onPress={() => navigation.navigate('HomeScreen')} disabled={!enableBtn}>
            <Animated.View style={[styles.btn, {opacity, backgroundColor: colors.primary}]}>
              <Text style={styles.btnText}>Entrar</Text>
              <Icon name="chevron-forward-outline" size={20} color="#fff" />
            </Animated.View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCarousel: {
    flex: 1,
    justifyContent: 'space-between',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: 320,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
    width: '100%',
    textAlign: 'left',
  },
  desc: {
    fontSize: 14,
    fontWeight: '500',
    width: '100%',
    textAlign: 'left',
    color: '#2525225',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  paginationCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
    alignSelf: 'center',
  },
  paginationItem: {
    width: 12,
    height: 12,
    borderRadius: 20,
    overflow: 'hidden',
    transform: [
      {
        rotateZ: '0deg',
      },
    ],
  },
  paginationDot: {
    flex: 1,
    borderRadius: 20,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  btnText: {
    color: '#fff',
  },
});

export default SlidesScreen;
