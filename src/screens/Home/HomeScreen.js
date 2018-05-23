import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import BannerScreenComponent from './BannerScreenComponent';
import HotMarketsComponent from './HotMarketsComponent';

import styles from '../../styles/screens/Home/HomeScreen';


export class HomeScreen extends Component {

    static navigationOptions = {
        title: 'VCC trading',
    };


    render() {
        return (
            <ScrollView style={ styles.container }>
                <BannerScreenComponent />
                <HotMarketsComponent/>
            </ScrollView>
        );
    }
}


export default HomeScreen;
