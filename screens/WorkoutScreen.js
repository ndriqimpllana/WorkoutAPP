import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import tw from '../lib/tailwind';

export default function WorkoutScreen() {
  return (
    <SafeAreaView style={tw`flex-1 bg-background`}>
      {/* TopAppBar */}
      <View style={tw`flex-row justify-between items-center px-6 py-4 bg-background z-40`}>
        <View style={tw`flex-row items-center gap-3`}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZLvGh7rXgi8WKRP8fvnWnD4PbmJjrq8r7V0sYaU4Iwpa4hpXGrbsZRMeNcDoh6F3FMddvaVwMCgd425C48Ala0nsT7LdeKaxQyxKMKt5bBNBv2kRDJlVD3rm6WiXeWFOmotAYBj8CDiDya1GeGYiJ_EtxGQE0g5RWKbgTBkHMTbEnU2WMESi8qnGuWdQofOVVAJBp9vIRvlX_-PY1q0zNVm-M_J1qWzo_c_TMN2-ifMUu_Bi3yM7BenhPuThvIUwZ51pTWgVnu8M' }}
            style={tw`w-10 h-10 rounded-full bg-surface-container-highest border-2 border-primary-fixed`}
          />
          <Text style={tw`font-headline font-black italic text-[#cafd00] text-2xl uppercase tracking-tighter`}>KINETIC</Text>
        </View>
        <TouchableOpacity>
          <Text style={tw`text-[#cafd00] text-xl`}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={tw`pb-32 px-4 pt-6 gap-8`}>
        {/* Live Metrics Section */}
        <View style={tw`flex-row gap-4`}>
          <View style={tw`flex-1 bg-surface-container-low p-5 rounded-xl gap-1`}>
            <Text style={tw`font-label text-on-surface-variant text-[10px] uppercase tracking-widest`}>DURATION</Text>
            <View style={tw`flex-row items-baseline gap-1`}>
              <Text style={tw`font-headline text-3xl font-bold tracking-tighter text-on-surface`}>42:18</Text>
              <Text style={tw`text-secondary-fixed text-sm`}>⏱</Text>
            </View>
          </View>
          <View style={tw`flex-1 bg-surface-container-low p-5 rounded-xl gap-1`}>
            <Text style={tw`font-label text-on-surface-variant text-[10px] uppercase tracking-widest`}>TOTAL VOLUME</Text>
            <View style={tw`flex-row items-baseline gap-1`}>
              <Text style={tw`font-headline text-3xl font-bold tracking-tighter text-on-surface`}>4,250</Text>
              <Text style={tw`font-headline text-sm font-medium text-on-surface-variant`}>KG</Text>
            </View>
          </View>
        </View>

        {/* Workout Title & Active Header */}
        <View style={tw`flex-row items-end justify-between border-l-4 border-secondary-fixed pl-4`}>
          <View>
            <Text style={tw`font-label text-secondary-fixed text-[10px] font-black uppercase tracking-[0.2em] mb-1`}>CURRENT SESSION</Text>
            <Text style={tw`font-headline text-4xl font-extrabold tracking-tighter leading-none text-white`}>UPPER BODY</Text>
          </View>
          <View style={tw`flex-row items-center gap-2 px-3 py-1 bg-[#00696e] rounded-full`}>
            <View style={tw`w-2 h-2 rounded-full bg-secondary-fixed`} />
            <Text style={tw`font-label text-secondary-fixed text-[10px] font-bold`}>RECORDING</Text>
          </View>
        </View>

        {/* Rest Timer Card */}
        <View style={tw`bg-surface-container-high/80 p-6 rounded-2xl border-t border-l border-white/5 overflow-hidden`}>
          <Text style={tw`absolute top-0 right-0 p-4 text-8xl opacity-10 text-white`}>⏳</Text>
          <View style={tw`items-center z-10`}>
            <Text style={tw`font-label text-on-surface-variant text-[10px] font-bold uppercase tracking-[0.3em] mb-4`}>REST TIME</Text>
            <Text style={tw`font-headline text-6xl font-black tracking-tighter text-secondary-fixed`}>00:45</Text>
            <View style={tw`mt-4 flex-row gap-4 w-full`}>
              <TouchableOpacity style={tw`flex-1 bg-surface-container-highest py-3 rounded-lg items-center`}>
                <Text style={tw`font-label text-xs font-bold tracking-widest text-white`}>+30s</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`flex-1 bg-secondary-fixed py-3 rounded-lg items-center`}>
                <Text style={tw`text-on-secondary-fixed font-label text-xs font-bold tracking-widest`}>SKIP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Exercise List */}
        <View style={tw`gap-6`}>
          {/* Exercise 1 */}
          <View style={tw`bg-surface-container-low rounded-2xl overflow-hidden`}>
            <View style={tw`p-5 flex-row justify-between items-start`}>
              <View>
                <Text style={tw`font-headline text-xl font-bold tracking-tight text-white`}>Barbell Bench Press</Text>
                <Text style={tw`font-body text-xs text-on-surface-variant`}>Chest · Target 4 Sets of 8-10</Text>
              </View>
              <TouchableOpacity>
                <Text style={tw`text-on-surface-variant text-xl`}>⋯</Text>
              </TouchableOpacity>
            </View>
            <View style={tw`px-5 pb-5 gap-3`}>
              {/* Set Headers */}
              <View style={tw`flex-row w-full mb-1`}>
                <Text style={tw`w-[15%] text-center text-[10px] font-label font-black text-on-surface-variant tracking-widest uppercase`}>SET</Text>
                <Text style={tw`w-[35%] text-center text-[10px] font-label font-black text-on-surface-variant tracking-widest uppercase`}>WEIGHT (KG)</Text>
                <Text style={tw`w-[35%] text-center text-[10px] font-label font-black text-on-surface-variant tracking-widest uppercase`}>REPS</Text>
                <Text style={tw`w-[15%] text-center text-[10px] font-label font-black text-on-surface-variant tracking-widest uppercase`}>DONE</Text>
              </View>
              
              {/* Set 1 */}
              <View style={tw`flex-row items-center w-full bg-surface-container-highest p-2 rounded-lg`}>
                <Text style={tw`w-[15%] text-center font-headline font-bold text-on-surface-variant`}>1</Text>
                <TextInput style={tw`w-[35%] text-center text-secondary-fixed font-headline font-bold`} placeholderTextColor="#565555" placeholder="80" />
                <TextInput style={tw`w-[35%] text-center text-secondary-fixed font-headline font-bold`} placeholderTextColor="#565555" placeholder="10" />
                <View style={tw`w-[15%] items-center justify-center`}>
                  <View style={tw`w-5 h-5 rounded bg-secondary-fixed items-center justify-center`}><Text style={tw`text-black text-xs font-black`}>✓</Text></View>
                </View>
              </View>
              
              {/* Set 2 */}
              <View style={tw`flex-row items-center w-full bg-surface-container-highest p-2 rounded-lg`}>
                <Text style={tw`w-[15%] text-center font-headline font-bold text-on-surface`}>2</Text>
                <TextInput style={tw`w-[35%] text-center text-on-surface font-headline font-bold`} value="80" />
                <TextInput style={tw`w-[35%] text-center text-on-surface font-headline font-bold`} value="8" />
                <View style={tw`w-[15%] items-center justify-center`}>
                  <View style={tw`w-5 h-5 rounded border border-on-surface-variant`} />
                </View>
              </View>

              <TouchableOpacity style={tw`w-full py-2 bg-surface-container-highest/50 border border-dashed border-outline-variant/30 rounded-lg items-center mt-2`}>
                <Text style={tw`text-[10px] font-label font-bold tracking-widest text-on-surface-variant`}>+ ADD SET</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Finish Workout CTA */}
          <TouchableOpacity style={tw`w-full py-6 bg-primary-fixed rounded-2xl items-center`}>
            <Text style={tw`font-label text-on-primary-fixed text-[10px] font-black uppercase tracking-[0.4em] mb-1`}>SESSION COMPLETE</Text>
            <Text style={tw`font-headline text-2xl font-black text-on-primary-fixed tracking-tighter italic`}>FINISH WORKOUT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
