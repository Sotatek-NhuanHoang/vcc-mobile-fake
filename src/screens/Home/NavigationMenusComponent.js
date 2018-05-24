import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../../styles/screens/Home/NavigationMenusComponent';


class NavigationMenusComponent extends PureComponent {

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.menuContainer }>
                    <TouchableOpacity style={ styles.menuContainer }>
                        <Icon name="gears" style={ styles.menuIcon } />
                        <Text style={ styles.menuText }>Support</Text>
                    </TouchableOpacity>
                </View>

                <View style={ styles.menuContainer }>
                    <TouchableOpacity style={ styles.menuContainer }>
                        <Icon name="credit-card" style={ styles.menuIcon } />
                        <Text style={ styles.menuText }>Favorites</Text>
                    </TouchableOpacity>
                </View>

                <View style={ styles.menuContainer }>
                    <TouchableOpacity style={ styles.menuContainer }>
                        <Icon name="briefcase" style={ styles.menuIcon } />
                        <Text style={ styles.menuText }>Deposit</Text>
                    </TouchableOpacity>
                </View>

                <View style={ styles.menuContainer }>
                    <TouchableOpacity style={ styles.menuContainer }>
                        <Icon name="fire-extinguisher" style={ styles.menuIcon } />
                        <Text style={ styles.menuText }>Withdrawal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


export default NavigationMenusComponent;
