import React, { useEffect, useRef } from 'react';
import { Animated, PanResponder, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

let data = [];
for (let i = 0; i < 20; i += 1) data.push(i);

const leftButtons = ['btn1', 'btn2', 'btn3'];
const rightButtons = ['btn1', 'btn2'];
const btnWidth = 80;
const offset = [-btnWidth * rightButtons.length, btnWidth * leftButtons.length];

export default function CartProducts() {
    return (
        <ScrollView>
            {data.map(item => (
                <SwipableItem key={item} />
            ))}
        </ScrollView>
    )
}

function SwipableItem() {
    let panValue = { x: 0, y: 0 };
    let isOpenState = useRef(false).current;
    const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const itemTranslate = pan.x.interpolate({ inputRange: offset, outputRange: offset, extrapolate: 'clamp' });
    const translateLeftBtns = pan.x.interpolate({ inputRange: [-leftButtons.length * btnWidth, 0], outputRange: [-leftButtons.length * btnWidth, 0], extrapolate: 'clamp' });
    const translateRightBtns = pan.x.interpolate({ inputRange: [0, rightButtons.length * btnWidth], outputRange: [0, rightButtons.length * btnWidth], extrapolate: 'clamp' });
    useEffect(() => {
        pan.addListener(value => {
            panValue = value;
        });
    }, [])
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => false,
            onMoveShouldSetPanResponderCapture: (e, g) => Math.abs(g.dx) > 10,
            onMoveShouldSetPanResponder: (e, g) => false,
            onPanResponderGrant: () => {
                pan.setOffset({ x: panValue.x, y: panValue.y });
                pan.setValue({ x: 0, y: 0 });
            },
            onPanResponderMove: Animated.event([null, { dx: pan.x }], {
                useNativeDriver: false,
            }),
            onPanResponderRelease: (e, g) => {
                pan.flattenOffset();
                if (g.vx > 0.5 || g.dx > btnWidth * leftButtons.length / 2) {
                    if (isOpenState && g.dx > 0) {
                        reset();
                        return;
                    }
                    move(false);
                    return;
                }
                if (g.vx < -0.5 || g.dx < -btnWidth * rightButtons.length / 2) {
                    if (isOpenState && g.dx < 0) {
                        reset();
                        return;
                    }
                    move(true);
                    return;
                }
                reset()

            },
            onPanResponderTerminate: () => {
                reset();
            },
        }),
    ).current;
    const reset = () => {
        isOpenState = false;
        Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
            bounciness: 0
        }).start();
    }
    const move = (toLeft) => {
        isOpenState = true;
        Animated.spring(pan, {
            toValue: { x: toLeft ? -btnWidth * rightButtons.length : btnWidth * leftButtons.length, y: 0 },
            useNativeDriver: true,
            bounciness: 0
        }).start();
    }
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.btnContainer, { transform: [{ translateX: translateLeftBtns }], }]}>
                {leftButtons.map(btn => (
                    <TouchableOpacity onPress={reset} key={btn} style={[styles.btn, { backgroundColor: 'red' }]}>
                        <Text>{btn}</Text>
                    </TouchableOpacity>
                ))}
            </Animated.View>
            <Animated.View style={[styles.btnContainer, { transform: [{ translateX: translateRightBtns }], alignSelf: 'flex-end' }]}>
                {rightButtons.map(btn => (
                    <TouchableOpacity onPress={reset} key={btn} style={[styles.btn, { backgroundColor: 'orange' }]}>
                        <Text>{btn}</Text>
                    </TouchableOpacity>
                ))}
            </Animated.View>
            <Animated.View style={[styles.item, { transform: [{ translateX: itemTranslate }] }]} {...panResponder.panHandlers} >
                <Text style={styles.txt}>Swipe Left or Right</Text>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        marginBottom: 3,
    },
    item: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#aa3e82',
    },
    txt: {
        color: '#fff',
        letterSpacing: 1
    },
    btnContainer: {
        height: '100%',
        position: 'absolute',
        flexDirection: 'row'
    },
    btn: {
        height: '100%',
        width: btnWidth,
        backgroundColor: 'red',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})