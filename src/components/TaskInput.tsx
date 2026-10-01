import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { colors, fontSize, radius, sizes, spacing } from '@/theme/tokens';

function PlusIcon() {
  return (
    <Svg
      width={sizes.plusIcon}
      height={sizes.plusIcon}
      viewBox="550 183 16 16"
      fill="none"
    >
      <Path
        d="M557.984 184.452C559.276 184.452 560.539 184.835 561.613 185.552C562.687 186.27 563.524 187.29 564.019 188.484C564.513 189.678 564.642 190.991 564.39 192.258C564.138 193.525 563.516 194.689 562.603 195.603C561.689 196.516 560.525 197.138 559.258 197.39C557.991 197.642 556.678 197.513 555.484 197.019C554.29 196.524 553.27 195.687 552.552 194.613C551.835 193.539 551.452 192.276 551.452 190.984C551.458 189.253 552.149 187.596 553.372 186.372C554.596 185.149 556.253 184.458 557.984 184.452ZM557.984 183C556.406 183.006 554.866 183.48 553.557 184.361C552.249 185.243 551.23 186.492 550.631 187.951C550.032 189.41 549.878 191.015 550.19 192.561C550.502 194.108 551.265 195.527 552.383 196.64C553.5 197.754 554.923 198.511 556.471 198.816C558.019 199.122 559.622 198.962 561.079 198.356C562.536 197.751 563.781 196.728 564.657 195.416C565.533 194.104 566 192.561 566 190.984C566 189.932 565.792 188.892 565.389 187.921C564.986 186.95 564.395 186.069 563.65 185.327C562.905 184.585 562.021 183.998 561.049 183.598C560.077 183.199 559.035 182.996 557.984 183Z"
        fill={colors.iconOnButton}
      />
      <Path
        d="M561.707 190.381H558.495V187.17H557.414V190.381H554.199V191.463H557.414V194.674H558.495V191.463H561.707V190.381Z"
        fill={colors.iconOnButton}
      />
    </Svg>
  );
}

export function TaskInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione algo a sua lista"
        placeholderTextColor={colors.placeholder}
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <PlusIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  /**
   * marginTop negativo de metade da altura do campo: e o que faz o bloco
   * ficar montado sobre a divisa entre o header e o corpo, como no Figma.
   */
  container: {
    flexDirection: 'row',
    gap: spacing.xs,
    paddingHorizontal: spacing.lg,
    marginTop: -sizes.field / 2,
  },
  input: {
    flex: 1,
    height: sizes.field,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: radius.field,
    color: colors.inputText,
    fontSize: fontSize.input,
  },
  button: {
    width: sizes.field,
    height: sizes.field,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonBackground,
    borderRadius: radius.field,
  },
});