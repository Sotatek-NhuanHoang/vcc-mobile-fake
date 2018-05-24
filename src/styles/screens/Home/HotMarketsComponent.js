import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSize } from '../../variables';


const ComponentHeight = 80;

export default ScaledSheet.create({
    container: {
        height: `${ComponentHeight}@ms`,
        backgroundColor: Colors.gray,
    },

    paginationStyle: {
        bottom: '2@ms',
    },

    slideContainer: {
        flexDirection: 'row',
    },

    slideItem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '8@ms',
        paddingTop: '1@ms',
        paddingBottom: '1@ms',
    },

    slideItem_BorderRight: {
        borderRightWidth: 0.5,
        borderRightColor: Colors.lightGray,
    },

    slideItem_Market: {
        fontSize: FontSize.small,
        color: Colors.lightGray,
    },

    slideItem_Price: {
        fontSize: FontSize.h3,
        color: Colors.white,
    },

    slideItem_Change: {
        fontSize: FontSize.p,
        color: Colors.red,
    },

    slideItem_moreBtnText: {
        color: Colors.lightGray,
        fontSize: FontSize.h3,
        marginRight: '6@ms',
    },

    slideItem_moreBtnIcon: {
        color: Colors.lightGray,
        fontSize: FontSize.h2,
        paddingTop: '2@ms',
    },
});
