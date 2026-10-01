import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

import { colors, fontSize, sizes, spacing } from '@/theme/tokens';

function LogoIcon() {
  return (
    <Svg
      width={sizes.logoIcon}
      height={sizes.logoIcon}
      viewBox="255 144 32 32"
      fill="none"
    >
      <Path
        d="M273.667 157.333H257.667V160H273.667V157.333ZM273.667 152H257.667V154.667H273.667V152ZM257.667 165.333H268.333V162.667H257.667V165.333ZM283.667 159.333L285.667 161.333L276.347 170.667L270.333 164.667L272.333 162.667L276.347 166.667L283.667 159.333Z"
        fill={colors.blue}
      />
      <Rect x="257.67" y="152" width="16" height="2.67" fill={colors.cyan} />
      <Rect x="257.67" y="157.34" width="16" height="2.67" fill={colors.cyan} />
      <Rect x="257.67" y="162.67" width="10.66" height="2.67" fill={colors.cyan} />
    </Svg>
  );
}

export function Logo() {
  return (
    <View style={styles.container}>
      <LogoIcon />
      <Text style={styles.wordmark}>
        <Text style={styles.my}>My</Text>
        <Text style={styles.list}>List</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  wordmark: {
    fontSize: fontSize.logo,
    fontWeight: '700',
  },
  my: {
    color: colors.cyan,
  },
  list: {
    color: colors.blue,
  },
});