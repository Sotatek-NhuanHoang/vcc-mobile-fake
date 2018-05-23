import React, { PureComponent } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
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


class BannerScreenComponent extends PureComponent {

    state = {
        currentSlideIndex: 1,
    };


    onSlideIndexChanged(currentSlideIndex) {
        this.setState({ currentSlideIndex });
    };


    render(){
        const { currentSlideIndex } = this.state;
        const { imageSources } = this.props;

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



const mapStateToProps = ({ homeScreen }) => ({
    imageSources: homeScreen.banner.imageSources,
});

export default connect(mapStateToProps)(BannerScreenComponent);

