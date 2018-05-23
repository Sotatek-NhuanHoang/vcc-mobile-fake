import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';

import styles from '../../styles/screens/Home/BannerScreenComponent';


export const SlideIndexComponent = (props) => {
    const { slideIndex } = props;

    return (
        <View style={ styles.slideIndexContainer }>
            <Text style={ styles.slideIndexText }>
                { slideIndex }
            </Text>
        </View>
    );
};


export const ImageSlideComponent = (props) => {
    const { imageSource } = props;
    return <Image style={ styles.sliceImage } source={ imageSource } />
};


export default class BannerScreenComponent extends Component {

    state = {
        currentSlideIndex: 1,
        imageSources: [
            { uri: 'https://cmcsoft.com/image/data/up-anh/chain.jpg' },
            { uri: 'https://cmcsoft.com/image/data/up-anh/chain.jpg' },
            { uri: 'https://cmcsoft.com/image/data/up-anh/chain.jpg' },
            { uri: 'https://cmcsoft.com/image/data/up-anh/chain.jpg' }
        ],
    };


    onSlideIndexChanged(currentSlideIndex) {
        this.setState({ currentSlideIndex });
    };


    render(){
        const { imageSources, currentSlideIndex } = this.state;
        const SlicesComponent = imageSources.map((imageSource, index) => (
            <View>
                <ImageSlideComponent key={index} imageSource={imageSource} />
            </View>
        ));

        return (
            <View style={ styles.container }>
                {/* Swiper */}
                <Swiper
                    showsButtons={ false }
                    showsPagination={ false }
                    autoplay={ true }
                    autoplayTimeout={ 4 }
                    loop={ true }
                    onIndexChanged={(index) => this.onSlideIndexChanged(index + 1)}
                >
                    { SlicesComponent }
                </Swiper>


                {/* Show current slide index */}
                <SlideIndexComponent slideIndex={ currentSlideIndex } />
            </View>
        );
    };
}

