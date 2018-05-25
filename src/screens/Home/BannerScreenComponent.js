import React, { PureComponent } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import _ from 'lodash';

import { HOME_BANNER_CHANGE_CURRENT_SLIDE_INDEX } from '../../store/homeScreen';

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

    onSlideIndexChanged(currentSlideIndex) {
        this.props.changeSlideIndex(currentSlideIndex);
    };


    render(){
        const { imageSources, currentSlideIndex } = this.props;

        const SlicesComponent = _.map(imageSources, (imageSource, index) => (
            <View key={index}>
                <ImageSlideComponent imageSource={imageSource} />
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
    currentSlideIndex: homeScreen.banner.currentSlideIndex,
});

const mapDispatchToProps = (dispatch) => ({
    changeSlideIndex: (slideIndex) => {
        dispatch(HOME_BANNER_CHANGE_CURRENT_SLIDE_INDEX(slideIndex));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BannerScreenComponent);

