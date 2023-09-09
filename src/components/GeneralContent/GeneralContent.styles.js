import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/theme';

export const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    padding: 20,
    gap: 20
    // borderWidth: 1,
  },
  guideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  guideImage: {
    height: 60,
    width: 60,
    borderRadius: 100
  },
  guideName: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
  },
  itemRowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemLabel: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },
  itemLabelText: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
  },
  itemInfo: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: COLORS.secondary
  },


  buttonContainer: {
    width: '100%',
    marginTop: 150,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: COLORS.grey,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  priceValue: {
    fontSize: 30,
    fontFamily: 'Poppins_600SemiBold'
  },
  priceTag: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },
})