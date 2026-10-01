import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { Logo } from '@/components/Logo';
import { TaskInput } from '@/components/TaskInput';
import { TaskSummary } from '@/components/TaskSummary';
import { colors, sizes } from '@/theme/tokens';

export default function Home() {
  return (
    <View style={styles.screen}>
      <StatusBar style="light" />

      {/*
        O header tem fundo proprio e cor diferente do corpo. O SafeAreaView
        fica dentro dele para que a area do notch herde o tom do header, e
        nao o do corpo.
      */}
      <View style={styles.header}>
        <SafeAreaView style={styles.headerContent}>
          <Logo />
        </SafeAreaView>
      </View>

      <TaskInput />
      <TaskSummary />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    height: sizes.headerHeight,
    backgroundColor: colors.headerBackground,
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});