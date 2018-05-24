import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from '../../variables';


export default ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkGray,
    },

    childComponent: {
        width: '100%',
        marginBottom: '6@ms',
    }
});
