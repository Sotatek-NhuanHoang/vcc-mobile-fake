import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from '../../variables';


const SliderHeight = 220;
const SlideIndexSize = 28;

export default ScaledSheet.create({
    container: {
        height: `${SliderHeight}@ms`,
        position: 'relative',
    },

    sliceImage: {
        width: '100%',
        height: `${SliderHeight}@ms`
    },

    slideIndexContainer: {
        position: 'absolute',
        bottom: '12@ms',
        left: '12@ms',
        backgroundColor: Colors.yellow,
        width: `${SlideIndexSize}@ms`,
        height: `${SlideIndexSize}@ms`,
        borderRadius: `${SlideIndexSize}@ms`,
    },

    slideIndexText: {
        color: Colors.black,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: `${SlideIndexSize}@ms`,
        fontSize: '14@ms'
    },
});
