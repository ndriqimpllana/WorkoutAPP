import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import tw from './lib/tailwind';

// Imports for Screens (To be created)
import HomeScreen from './screens/HomeScreen';
import TrainingScreen from './screens/TrainingScreen';
import MealScreen from './screens/MealScreen';
import WorkoutScreen from './screens/WorkoutScreen';

const Tab = createBottomTabNavigator();

// Custom Tab Bar Icon logic would go here, maybe using an Icon library like vector-icons 
// Since we don't have Material Symbols installed natively, we will use basic text or emojis as placeholders for icons.
function TabBarIcon({ name, focused }) {
  const iconMap = {
    Home: "🏠",
    Training: "💪",
    Meal: "🥗",
    Profile: "👤"
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
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: tw`absolute bottom-6 left-[4%] w-[92%] h-16 bg-[#131313]/90 rounded-full border-0 pb-0`,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => <TabBarIcon name={route.name} focused={focused} />
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Training" component={TrainingScreen} />
          <Tab.Screen name="Meal" component={MealScreen} />
          <Tab.Screen name="Profile" component={WorkoutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
