import React, { PureComponent } from 'react';
import { ScrollView, Text, View } from 'react-native';

import BannerScreenComponent from './BannerScreenComponent';
import HotMarketsComponent from './HotMarketsComponent';
import NavigationMenusComponent from './NavigationMenusComponent';

import styles from '../../styles/screens/Home/HomeScreen';


export class HomeScreen extends PureComponent {

    static navigationOptions = {
        title: 'VCC trading',
    };


    render() {
        return (
            <ScrollView style={ styles.container }>
                <View style={ styles.childComponent }>
                    <BannerScreenComponent />
                </View>

                <View style={ styles.childComponent }>
                    <HotMarketsComponent />
                </View>

                <View style={ styles.childComponent }>
                    <NavigationMenusComponent />
                </View>
            </ScrollView>
        );
    }
}


export default HomeScreen;
