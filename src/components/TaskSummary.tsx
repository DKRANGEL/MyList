import { StyleSheet, Text, View } from 'react-native';

import { colors, fontSize, radius, spacing } from '@/theme/tokens';

type CounterProps = {
  label: string;
  value: number;
  color: string;
};

function Counter({ label, value, color }: CounterProps) {
  return (
    <View style={styles.counter}>
      <Text style={[styles.label, { color }]}>{label}</Text>

      <View style={styles.pill}>
        <Text style={styles.pillText}>{value}</Text>
      </View>
    </View>
  );
}

export function TaskSummary() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Counter label="Criadas" value={5} color={colors.cyan} />
        <Counter label="Concluídas" value={2} color={colors.blue} />
      </View>

      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl + spacing.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  label: {
    fontSize: fontSize.label,
    fontWeight: '700',
  },
  pill: {
    minWidth: 25,
    height: 19,
    paddingHorizontal: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.counterBackground,
    borderRadius: radius.pill,
  },
  pillText: {
    color: colors.counterText,
    fontSize: fontSize.counter,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginTop: spacing.lg,
  },
});