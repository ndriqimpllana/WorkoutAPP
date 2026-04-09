import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from '../lib/tailwind';

const COLORS = {
  'primary-fixed': '#cafd00',
  'secondary-fixed': '#00f4fe',
  'tertiary-fixed': '#ff9190',
};

export default function MealScreen() {
  return (
    <SafeAreaView style={tw`flex-1 bg-background`}>
      {/* TopAppBar */}
      <View style={tw`flex-row justify-between items-center px-6 py-4 bg-background z-40`}>
        <View style={tw`flex-row items-center gap-3`}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcgOmGxvi-59Piiw_iuVnOcX05aipFKl3dYw2RThCoAnbKrUlozb3Nvds9WTbkl2kseCjme7FBYL_H1o2SC-xCwhinKpC8jpYuV7m7OE8OWHt5bjbq-hEypcUQOByefD-N8WwdJtMV-H4NRqacEQFfsU-rCvJ_2AlwwW5fMnWllWkoByb3BqhY_74T5-_9yYdz4-GdL12DbDlBq0PINXQPwabpm91IuBP-iq_zonJqzkQ3P9hA6zJKS-LBDibf7ERK42IsyEnXDgw' }}
            style={tw`w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant/20`}
          />
          <Text style={tw`font-headline font-black italic text-[#cafd00] text-2xl uppercase tracking-tighter`}>KINETIC</Text>
        </View>
        <TouchableOpacity>
          <Text style={tw`text-white/70 text-xl`}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={tw`pb-32 px-6 pt-4 gap-8`}>
        {/* Daily Macro Breakdown */}
        <View style={tw`gap-4`}>
          <Text style={tw`font-headline font-bold text-3xl tracking-tighter uppercase text-white`}>Daily Intake</Text>
          <View style={tw`flex-row gap-4`}>
            {[
              { label: 'Protein', val: '120g', pct: '75%', color: 'primary-fixed' },
              { label: 'Carbs', val: '180g', pct: '55%', color: 'secondary-fixed' },
              { label: 'Fats', val: '45g', pct: '32%', color: 'tertiary-fixed' },
            ].map((macro, i) => (
              <View key={i} style={tw`flex-1 bg-surface-container-low p-4 rounded-xl items-center justify-center gap-3 relative overflow-hidden`}>
                <View style={[tw`w-16 h-16 rounded-full items-center justify-center`, { borderWidth: 4, borderColor: COLORS[macro.color] }]}>
                    <Text style={tw`font-headline font-bold text-xs text-on-surface`}>{macro.pct}</Text>
                </View>
                <View style={tw`items-center`}>
                  <Text style={tw`font-label text-xs tracking-widest text-on-surface-variant uppercase`}>{macro.label}</Text>
                  <Text style={[tw`font-headline font-bold`, { color: COLORS[macro.color] }]}>{macro.val}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Water Tracker */}
        <View style={tw`bg-surface-container p-6 rounded-2xl relative overflow-hidden`}>
          <Text style={tw`absolute top-0 right-0 p-8 text-9xl text-secondary-fixed opacity-10 leading-none`}>💧</Text>
          <View style={tw`flex-row justify-between items-center z-10 gap-6`}>
            <View style={tw`gap-1 flex-1`}>
              <Text style={tw`font-headline font-bold text-2xl tracking-tight text-secondary-fixed uppercase`}>Water Intake</Text>
              <Text style={tw`text-on-surface-variant text-sm`}>Target: 3,500ml</Text>
              <View style={tw`pt-4 flex-row items-baseline gap-1`}>
                <Text style={tw`font-headline font-black text-5xl text-white`}>2,250</Text>
                <Text style={tw`text-lg font-medium opacity-50 text-white`}>ML</Text>
              </View>
            </View>
            <View style={tw`gap-4 flex-1`}>
              <TouchableOpacity style={tw`w-full bg-secondary-fixed p-4 rounded-full flex-row items-center justify-center gap-2`}>
                <Text style={tw`text-on-secondary-fixed font-headline font-bold`}>+ LOG 250ML</Text>
              </TouchableOpacity>
              <View style={tw`gap-2`}>
                <View style={tw`flex-row justify-between`}>
                  <Text style={tw`font-label text-[10px] tracking-widest text-on-surface-variant uppercase`}>Weekly Progress</Text>
                  <Text style={tw`font-label text-[10px] tracking-widest text-on-surface-variant uppercase`}>65%</Text>
                </View>
                <View style={tw`h-2 bg-surface-container-highest rounded-full overflow-hidden`}>
                  <View style={tw`h-full bg-secondary-fixed w-[65%] rounded-full`} />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Scheduled Meals */}
        <View style={tw`gap-6`}>
          <View style={tw`flex-row justify-between items-end`}>
            <Text style={tw`font-headline font-bold text-3xl tracking-tighter uppercase text-white`}>Meal Plan</Text>
            <TouchableOpacity>
                <Text style={tw`text-primary-fixed font-label text-xs tracking-widest font-bold`}>VIEW ALL</Text>
            </TouchableOpacity>
          </View>
          
          <View style={tw`gap-4`}>
            {[
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOpWFgLv1IJWjCEfbTRFbclCUZp6wSNEiGaJ_xhKb7rTpo7Ob5wi254UfOVfP2vx_BQLOSQ2wxf0WKWFhSUajgkTneDye49qh7ZnvjXasBNC3mdUjG8jLB0yNRGv2GCeb_Pc2e-tLKe4rAL7uXyAolsEdnkxQLtKAyaRPLuYrT8R8X0DQVCcJS4Nq7lZ859b3N1bYwpqouNCprhyHYDacYss3Pbb4ZkDanteK5pmoPjpdOM-rVeSd_JuyZiELSM9hdOnlNIRGnaK0', time: '08:00 AM • BREAKFAST', title: 'Protein Power Bowl', stats: '420 kcal • 32g Protein • 12g Fats', color: 'primary-fixed', icon: '✅' },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTOwvjcMHIjAFXYhi3jJ4VtKspifpB_0VBLaBNQj4sW1Xr-jHgZrIOuVIzO071bAc0wzO1W0fzbI0C_5W06flcgiwx5ZQr0GzEVtgShGU5xmzNqUFlI2UaTkhbo4smahaCWy0RZBvfriOZxQ0sOekg2kTx1MPfx4nbVDBoTBnBe34vE3KNB8BkNqELpSeghLUow9d8A7FLDvTfNXvzZKW1Xwf3BwyQrHejtT6d1ZzzTqVUNM0jFdAiUVntVFCa1jSQeg0NaJa44V8', time: '01:30 PM • LUNCH', title: 'Zesty Quinoa Salad', stats: '580 kcal • 45g Protein • 65g Carbs', color: 'on-surface-variant', icon: '⚪' }
            ].map((meal, i) => (
              <TouchableOpacity key={i} style={tw`flex-row gap-4`}>
                <Image source={{ uri: meal.img }} style={tw`w-24 h-24 rounded-2xl bg-surface-container-highest border border-outline-variant/10`} />
                <View style={tw`flex-1 justify-center border-b border-surface-container-highest pb-4`}>
                  <View style={tw`flex-row justify-between items-start`}>
                    <Text style={[tw`font-label text-[10px] tracking-widest font-bold uppercase`, { color: COLORS[meal.color] ?? '#adaaaa' }]}>{meal.time}</Text>
                    <Text style={tw`text-on-surface-variant`}>{meal.icon}</Text>
                  </View>
                  <Text style={tw`font-headline font-bold text-xl text-white`}>{meal.title}</Text>
                  <Text style={tw`text-sm text-on-surface-variant`}>{meal.stats}</Text>
                </View>
              </TouchableOpacity>
            ))}

            {/* Asymmetric Snack Card */}
            <TouchableOpacity style={tw`bg-surface-container-high p-5 rounded-2xl flex-row items-center justify-between`}>
              <View style={tw`gap-1`}>
                <Text style={tw`font-label text-[10px] tracking-widest text-tertiary-fixed font-bold uppercase`}>04:45 PM • PRE-WORKOUT</Text>
                <Text style={tw`font-headline font-bold text-xl text-white`}>Greek Yogurt & Nuts</Text>
                <View style={tw`flex-row items-center gap-3 mt-2`}>
                  <View style={tw`flex-row items-center gap-1`}>
                    <View style={tw`w-2 h-2 rounded-full bg-primary-fixed`} />
                    <Text style={tw`font-label text-xs text-on-surface-variant`}>25G P</Text>
                  </View>
                  <View style={tw`flex-row items-center gap-1`}>
                    <View style={tw`w-2 h-2 rounded-full bg-secondary-fixed`} />
                    <Text style={tw`font-label text-xs text-on-surface-variant`}>15G C</Text>
                  </View>
                </View>
              </View>
              <View style={tw`w-16 h-16 rounded-full bg-[#1e0505] flex items-center justify-center`}>
                <Text style={tw`text-3xl`}>⚡</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
