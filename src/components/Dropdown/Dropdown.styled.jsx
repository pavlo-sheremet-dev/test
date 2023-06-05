export const dropdownStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    width: 128,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 14,
    borderRadius: 10,
    backgroundColor: '#ebd8ff',
    borderColor: state.isFocused ? '#5cd3a8' : '#ebd8ff',
  }),
  container: baseStyles => ({
    ...baseStyles,
    color: '#373737',
    borderRadius: 10,
    boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);',
  }),
  placeholder: baseStyles => ({
    ...baseStyles,
    color: 'rgba(55, 55, 55, 0.3)',
    fontSize: 14,
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    color: '#373737',
    textTransform: 'uppercase',
    fontSize: 14,
    backgroundColor: state.isSelected ? '#5cd3a8' : '',
  }),
};
