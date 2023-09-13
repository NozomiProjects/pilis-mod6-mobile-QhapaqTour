import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  innerContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    gap: 12,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    textAlign:'center',
    fontFamily: 'Manjari_700Bold'
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.secondary,
    textAlign:'center',
    fontFamily: 'Poppins_500Medium'
  },
  starContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center'
  },
  itemStart:{
    fontSize: 30,
    color: COLORS.primary,
  },
  commentInput: {
    borderColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    textAlignVertical: 'top',
    fontFamily: 'Poppins_400Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily: 'Poppins_600SemiBold'
  },
  itemBtn:{
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
});
