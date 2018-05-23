import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

import styles from '../../styles/screens/Home/HotMarketsComponent';


class HotMarketsComponent extends Component {
    state = {  }
    render() {
        return (
            <View style={ styles.container }>
                 <Swiper
                    showsButtons={ false }
                    loop={ true }
                >
                    <View style={ styles.slideContainer }>
                        <View style={ styles.slideItem }>
                            <Text style={ styles.slideItem_Market }>Nhuan</Text>
                            <Text style={ styles.slideItem_Price }>Nhuan</Text>
                            <Text style={ styles.slideItem_Change }>Nhuan</Text>
                        </View>

                        <View style={ styles.slideItem }>
                            <Text>Nhuan</Text>
                        </View>

                        <View style={ styles.slideItem }>
                            <Text>Nhuan</Text>
                        </View>
                    </View>
                </Swiper>
            </View>
        );
    }
}

export default HotMarketsComponent;
