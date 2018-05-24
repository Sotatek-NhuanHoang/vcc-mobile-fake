import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSize } from '../../variables';


export default ScaledSheet.create({
    container: {
        width: '100%',
        backgroundColor: Colors.gray,
        flexDirection: 'row',
        paddingTop: '8@ms',
        paddingBottom: '8@ms',
    },

    menuContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    menuIcon: {
        color: Colors.lightGray,
        fontSize: '22@ms',
        marginBottom: '5@ms',
    },

    menuText: {
        color: Colors.white,
        fontSize: FontSize.small,
    },
});
