import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import {
  SpaceGrotesk_700Bold,
  SpaceGrotesk_800ExtraBold,
  SpaceGrotesk_900Black,
} from '@expo-google-fonts/space-grotesk';
import {
  Manrope_400Regular,
  Manrope_600SemiBold,
  Manrope_700Bold,
} from '@expo-google-fonts/manrope';
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import tw from './lib/tailwind';

import HomeScreen from './screens/HomeScreen';
import TrainingScreen from './screens/TrainingScreen';
import MealScreen from './screens/MealScreen';
import WorkoutScreen from './screens/WorkoutScreen';

const Tab = createBottomTabNavigator();

function TabBarIcon({ name, focused }) {
  const iconMap = {
    Home: '🏠',
    Training: '💪',
    Meal: '🥗',
    Workout: '📋',
  };
  return (
    <View style={tw`items-center justify-center pt-2`}>
      <Text style={tw`text-xl`}>{iconMap[name]}</Text>
      <Text style={tw`text-[10px] tracking-widest mt-1 font-bold ${focused ? 'text-primary-fixed' : 'text-white/40'}`}>
        {name.toUpperCase()}
      </Text>
    </View>
  );
}

export default function App() {
  useFonts({
    SpaceGrotesk: SpaceGrotesk_700Bold,
    SpaceGrotesk_800: SpaceGrotesk_800ExtraBold,
    SpaceGrotesk_900: SpaceGrotesk_900Black,
    Manrope: Manrope_400Regular,
    Manrope_600: Manrope_600SemiBold,
    Manrope_700: Manrope_700Bold,
    Inter: Inter_400Regular,
    Inter_600: Inter_600SemiBold,
    Inter_700: Inter_700Bold,
    Inter_900: Inter_900Black,
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: tw`absolute bottom-6 left-[4%] w-[92%] h-16 bg-[#131313]/90 rounded-full border-0 pb-0`,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => <TabBarIcon name={route.name} focused={focused} />,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Training" component={TrainingScreen} />
          <Tab.Screen name="Meal" component={MealScreen} />
          <Tab.Screen name="Workout" component={WorkoutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
