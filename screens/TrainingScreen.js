import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from '../lib/tailwind';

export default function TrainingScreen() {
  return (
    <SafeAreaView style={tw`flex-1 bg-background`}>
      {/* TopAppBar */}
      <View style={tw`flex-row justify-between items-center px-6 py-4 bg-background z-50`}>
        <View style={tw`flex-row items-center gap-3`}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSjFmWWUlVyILAEhH6HuhzlYMu4joLwftY-Hxe6SDASbzq0Dd9gvUvdS72MhP5MoUqfxVb2IMxVqMkyBs2JUKGwRkU0b9KO0SAUJPTRvE6BUnUf78trxI_IBdqcTbf0dJpKyrqMo5al14qwOQM-bgi_UaSsT_p4Y4m3CwqTpKQAdsQB5dq86P68uKuoY8hviKmOLbEqp66qR_UIymuPEghtYrslGNhKMPRqkOKC1Cw8WeodB4bvP1b8gXOdg6sJ-S9z0NHVxYEI-w' }}
            style={tw`w-10 h-10 rounded-full border border-primary-fixed/20`}
          />
          <Text style={tw`font-headline font-black italic text-[#cafd00] text-2xl uppercase tracking-tighter`}>KINETIC</Text>
        </View>
        <TouchableOpacity>
          <Text style={tw`text-[#cafd00] text-xl`}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={tw`pb-32 px-6 pt-6 gap-10`}>
        {/* Header Section */}
        <View style={tw`mb-2`}>
          <Text style={tw`font-headline text-5xl font-black uppercase tracking-tight leading-none mb-2 text-on-surface`}>
            TRAINING <Text style={tw`text-primary-fixed`}>HUB</Text>
          </Text>
          <Text style={tw`text-on-surface-variant font-medium tracking-wide`}>ELITE PERFORMANCE STARTS HERE.</Text>
        </View>

        {/* Muscle Groups Bento Grid */}
        <View style={tw`mb-4`}>
          <View style={tw`flex-row justify-between items-end mb-6`}>
            <Text style={tw`font-headline text-xl font-bold uppercase tracking-widest text-on-surface`}>MUSCLE GROUPS</Text>
            <Text style={tw`text-primary-fixed font-label text-xs tracking-tighter`}>VIEW ALL</Text>
          </View>
          <View style={tw`flex-row flex-wrap justify-between`}>
            {[
              { title: 'CHEST', icon: '🏋️', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhnsR7Mrv1wVCQw253z6NgW27emWsd6YqhEq2CczCFO5kimxzNzLW7LSTuXI4LE8tiFPf14ZYOXwaclIiumRjN1SaA3jRjnhtzk9G6zPPSnk4vQDuFZTz3qF7vyXOynFQGSwqdF4l3b1tQ43nvp9D9-uo4dRmybofceIr-_WiuD5082dbruOd3Lg770zDzuNKqaKQPNIRluBxltdVMerR8dQYIIhbkNhjgRRAs8P5ka93By0uOyliYa6MI5zEk961-djXKNljFv94' },
              { title: 'BACK', icon: '🤲', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgAXgHwcqqYvIql7z6Zq-sSJLH4llH2oIe-dy6q4zhd-7Vhz-fgvUN7plWVf8flfX45RUgZhxdCMILrmZ7d-kW-Wilgxlk022lmKSSOy33nQArCogliLOPXdP_w6yqe5pW-yrF-NgwLx4ZCTEontNfLWvbOM8NA9KR6e6dDnDvhAabF0IAV2Oi4MJvH_VbYaT2trVKT-gpBMga5PHvTDv9rmB8ymZcODwP-BFoMbJFKrBG4HqR0YNmrpGsNSfhdKT95DddkMF5vgg' },
              { title: 'LEGS', icon: '🏃', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuIJO5024rSvIC6KzrwIYj5zFZvj2AgCItqxsNAQ2xP5jJ_8NjEN9J4ndhdjxvSOzqLzaMc_foU1VlFzODObc9A_44h1-YPGrynRUkDAxCxC4HTDYWusuddidHEhcTLv1ONApgKcIXI-zfMoWAXTTTzcyTkpQktQNya-rQ5MlgCEZC673XXN0kyKG8YbWyXGdQjlGKi1TJPq4fUtjBd2AozTZN29nB6WQWno-bfSubd717kbprWn25ycHP9XuB67OFZj_137jNRS4' },
              { title: 'ARMS', icon: '💪', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCovr6PUbOTTO7QE89UMGDSA4vuhMwSvWnS3To2eot9fQbk7Z0M4jheWfpmGdS4r4lLao-NCfCXuATiyMZJf5Xn4qbNOL1SA76OOvI2PJoABDbUqSIiisVuKMueW0_y1cpsmiVMl8MS139KyCGC-04TzgUdduSr04BZdR-3TqVuzbR9YMqPkYCHaR_ApvZ1hQovsOOWfpoK4uNbTwmllIlon46jLZ4ibBESCGqSv-zzBpRm10qX-dwMaTO8CN1eK4XxSBvEZPrvvO8' },
            ].map((item, i) => (
              <TouchableOpacity key={i} style={tw`w-[48%] aspect-square overflow-hidden rounded-xl bg-surface-container-low mb-4 relative`}>
                <Image source={{ uri: item.img }} style={tw`absolute inset-0 w-full h-full opacity-40`} />
                <View style={tw`absolute top-0 right-0 left-0 bottom-0 bg-black/40`} />
                <View style={tw`absolute bottom-4 left-4 z-20`}>
                  <Text style={tw`text-xl mb-1`}>{item.icon}</Text>
                  <Text style={tw`font-headline font-bold text-lg text-on-surface uppercase leading-none`}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Personalized Routines */}
        <View style={tw`mb-4`}>
          <View style={tw`flex-row items-center justify-between mb-6`}>
            <Text style={tw`font-headline text-xl font-bold uppercase tracking-widest text-on-surface`}>MY ROUTINES</Text>
            <TouchableOpacity style={tw`bg-primary-fixed px-4 py-2 rounded-full flex-row items-center gap-2`}>
              <Text style={tw`font-label text-[10px] font-black tracking-widest text-on-primary-fixed uppercase`}>+ ADD NEW ROUTINE</Text>
            </TouchableOpacity>
          </View>

          <View style={tw`gap-4`}>
            {[
              { day: 'MON', type: 'LEGS', title: 'Hypertrophy Quads', details: '8 Exercises • 75 Minutes', color: 'primary-fixed' },
              { day: 'WED', type: 'PUSH', title: 'Chest & Shoulder Pump', details: '6 Exercises • 50 Minutes', color: 'secondary-fixed' },
              { day: 'FRI', type: 'PULL', title: 'Back & Rear Delts', details: '10 Exercises • 90 Minutes', color: 'tertiary-fixed' },
              { day: 'SUN', type: 'REST', title: 'Active Recovery', details: 'Yoga & Mobility • 30 Minutes', color: 'outline-variant', opacity: 'opacity-40' },
            ].map((routine, i) => (
              <TouchableOpacity key={i} style={tw`bg-surface-container-low rounded-2xl p-5 flex-row items-center gap-6 border border-outline-variant/10 ${routine.opacity || ''}`}>
                <View style={tw`w-16 h-16 rounded-full border-2 border-${routine.color} flex-col items-center justify-center bg-surface-container-highest`}>
                  <Text style={tw`font-headline font-black text-xl leading-none text-on-surface`}>{routine.day}</Text>
                  <Text style={tw`font-label text-[8px] text-${routine.color}`}>{routine.type}</Text>
                </View>
                <View style={tw`flex-1`}>
                  <Text style={tw`font-headline font-bold text-xl uppercase tracking-tight text-on-surface`}>{routine.title}</Text>
                  <Text style={tw`text-on-surface-variant text-sm font-medium`}>{routine.details}</Text>
                </View>
                <View style={tw`w-10 h-10 rounded-full items-center justify-center bg-surface-container-highest border border-outline-variant/20`}>
                  <Text style={tw`text-${routine.color}`}>▶</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
