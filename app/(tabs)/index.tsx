import { Image, StyleSheet, Platform, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MyTestModule from '@/modules/my-test-module/src/MyTestModule';


export default function HomeScreen() {
  const [platformName, setPlatformName] = useState<string | null>(null);
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
        <Text>{MyTestModule.hello()}</Text>
        <Text>{MyTestModule.sumita(3,498)}</Text>
          Bienvenido desde {Platform.OS.toUpperCase()}
        </ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">🧠 TurboModule dice:</ThemedText>
        <ThemedText>
          {platformName ?? 'Cargando...'}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 1: Probar</ThemedText>
        <ThemedText>
          Editá <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> y mirá los cambios.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 2: Explorá</ThemedText>
        <ThemedText>
          Tocá la pestaña Explore para aprender más.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
