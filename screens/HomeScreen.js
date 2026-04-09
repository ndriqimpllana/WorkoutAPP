import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from '../lib/tailwind';

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`flex-1 bg-background`}>
      {/* TopAppBar */}
      <View style={tw`flex-row justify-between items-center px-6 py-4 bg-background z-50`}>
        <View style={tw`flex-row items-center gap-3`}>
          <View style={tw`w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed`}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnmgmbINIihMbu6eNY9OtVHZ_hTGe41L95L0gRauvJFwzQDjEU6oMwvXiMTuzlU3csiIOwWMzwpaLNC5eX1pcOOhjcayTIJcy5pMzd71e7lg58OLXUSDMprI2a29XjZ-y63V_ip2bjt4tf1F7aGesRgdY_vHsjcMsHKgIyuyVHYZFUAOgMwuXGghDMGWHEE-dIwAidFsX65a78z7iM7biMCPim1kzMiPFvtNCk4IZ3io_YeNe7fNHiEAuU4SUf4t2PNDw8aVv6TsM' }}
              style={tw`w-full h-full`}
            />
          </View>
        </View>
        <Text style={tw`font-headline font-black italic text-[#cafd00] text-2xl uppercase tracking-tighter`}>KINETIC</Text>
        <TouchableOpacity>
          <Text style={tw`text-white/70 text-xl`}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={tw`pb-32 px-6 pt-6 gap-10`}>
        {/* Featured: Today's Health News */}
        <View>
          <View style={tw`flex-row justify-between items-end mb-6`}>
            <Text style={tw`font-headline text-2xl font-bold uppercase tracking-tighter text-on-surface`}>TODAY'S HEALTH NEWS</Text>
            <Text style={tw`font-label text-[10px] tracking-widest text-primary-fixed font-black`}>LATEST UPDATES</Text>
          </View>
          <View style={tw`h-[500px] flex-col gap-4`}>
            {/* Main Article */}
            <TouchableOpacity style={tw`flex-2 relative rounded-xl overflow-hidden`}>
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATtmCr5T369M-3ke9EekfU-0nkX-eiTzke42RNIyScV-HmmGUlbb3Gm2DKxJDwOKa0qJfV6ek4ifziNDap_iad9ChXSjejXtmD-8KyRV7X-DqfEZIU1rCVDwKcQVwl179CVrUhul-YdG1DYKYgdD2J8MSA0zhgjPae_4o-IT2FrfRTgDn775B2a8W-IDsZvZy7Ah4snDPpxcvqUoq1LTBvTbCXm-1cq3zgKalCd1neOyqWTng58N4w-G14C3EOGQsk0406o3_Djps' }}
                style={tw`absolute top-0 right-0 left-0 bottom-0 w-full h-full`}
              />
              <View style={tw`absolute top-0 right-0 left-0 bottom-0 bg-black/40`} />
              <View style={tw`absolute bottom-6 left-6 right-6`}>
                <View style={tw`bg-primary-fixed self-start px-2 py-1 rounded-sm mb-3`}>
                    <Text style={tw`text-on-primary-fixed font-label text-[10px] font-black`}>PERFORMANCE</Text>
                </View>
                <Text style={tw`font-headline text-2xl font-bold text-on-surface leading-tight uppercase`}>High-Intensity Interval Training</Text>
                <Text style={tw`text-on-surface-variant text-sm mt-2`} numberOfLines={2}>New studies confirm that specific HIIT ratios can boost cellular longevity by 14%...</Text>
              </View>
            </TouchableOpacity>

            <View style={tw`flex-1 flex-row gap-4`}>
                {/* Sub Article 1 */}
                <TouchableOpacity style={tw`flex-1 relative rounded-xl overflow-hidden`}>
                <Image 
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsn44_I4F6ANsXrWxitquuVkquHx-QDeYzTYmPnIVAbQAvZpEumcuw1LjkUsXFZ7k_nvHB4K01JRCUbQoAtR5qmesxM15LSNkXHQ1UkFJwkF1sU4RcPfcCrVaaTeAup9uKJNxc7zFILbfx3Ecl0m96SP9Oh9YwEbkSBNAXhCeKtayWI5i4RdmEBbFsuafvLppe4X5FWz-y9LcME9lZXxvqRQvoVh_KwXA7Lthn9xmt-d3MyFeDhcUcr-B_NcYK3pwgAV1ScF-oz4A' }}
                    style={tw`absolute top-0 right-0 left-0 bottom-0 w-full h-full`}
                />
                <View style={tw`absolute top-0 right-0 left-0 bottom-0 bg-black/50`} />
                <View style={tw`absolute bottom-4 left-4 right-4`}>
                    <Text style={tw`text-secondary-fixed font-label text-[10px] font-black tracking-widest mb-1`}>RECOVERY</Text>
                    <Text style={tw`font-headline text-lg font-bold uppercase text-on-surface`} numberOfLines={1}>Sleep or Stretching?</Text>
                </View>
                </TouchableOpacity>

                {/* Sub Article 2 */}
                <TouchableOpacity style={tw`flex-1 relative rounded-xl overflow-hidden bg-surface-container-highest`}>
                <Image 
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgxV8Z_3D4ivbWBdQUVXBzIXq5uzNbNb0RzfNoeOXSzurUOrYP5T0M9BziQr_x_wQXE_EqPsOI6DKYjEID9z1L0550bXsIuI1qMhD-mZSn11_GZIJA7UA2s4P9cdVLauR9gEDsfa9rhBZ8J_SOeRD_bOhmFqFSnpQ3SzkY66u1IoFQRCHp1Biy3WJrVNl2xq3qAnW-l5kV5aa7FMMzT2iGZwUonx6ARdiDw3iMj7W3kxaOXNSYQhuZCuRp27yB_DGI9lr9F7FIFZE' }}
                    style={tw`absolute top-0 right-0 left-0 bottom-0 w-full h-full opacity-60`}
                />
                <View style={tw`absolute inset-0 flex-col justify-end p-4 z-10`}>
                    <Text style={tw`text-tertiary-fixed font-label text-[10px] font-black tracking-widest mb-1`}>NUTRITION</Text>
                    <Text style={tw`font-headline text-lg font-bold uppercase text-on-surface`}>Biohacking Breakfast</Text>
                </View>
                </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Dietary Plans */}
        <View style={tw`-mx-6 px-6`}>
          <View style={tw`flex-row items-center justify-between mb-4`}>
            <Text style={tw`font-headline text-2xl font-bold uppercase tracking-tighter text-on-surface`}>DIETARY PLANS</Text>
            <TouchableOpacity>
                <Text style={tw`text-on-surface-variant font-label text-xs tracking-widest uppercase`}>Explore All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={tw`gap-6 pr-6 pb-4`}>
            {[
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOcLRpdnkCVS7mlUWsKJ7aZ6u6acReqX8JEwme1InE6ZFN7gAUucAxoxjEBc3KMMGAgQyy6vAzvCEflDN39ye_GBHjdEjSfj74yueha28EUZuiQOc732dm8v2rbnML5UqPE3mntNr29MF8bWE-mB0QVZ5bJs_1MsIdr1UMjXEhRP9cRC8U74TKeIByXod-XjYSSUQMGFrgD4MU0n-9KTX2fhZQPLtMLLb1V92y_2IlpUAhHHv0zGjrQ5taVhBtbj9PIfbW5I09-tM', title: 'Lean Shred Protocol', desc: 'Optimized protein cycles for fat loss.', cal: '2,400 CAL', duration: '8 WEEKS' },
              { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9RLLGtR5nSfHNWqWk7-6biirCZuqTREP_4CmQ-UpSCm1PghTEHFop8iW88qNceaPSXbX6G6mL9-ch2bao_FZNVGxFsFWQ845IbMXeEEW3CvCpKtqZ3hTED2diwzNS_f5TMjI1m3TtxCAn1dmHCTc2TfQfetmWZAECRqWjo2fUc7nm3O2PEGjJbTh957APZmgDrPCZ-6lEpU-F161AinuVlwftvLRtLfDPddt34bWnjYC7aCFymad_EnYWy2Keay8Q9IxMptUwFNM', title: 'Hypertrophy Fuel', desc: 'Caloric surplus for muscle growth.', cal: '3,200 CAL', duration: '12 WEEKS' }
            ].map((plan, i) => (
              <TouchableOpacity key={i} style={tw`w-[280px] bg-surface-container-low rounded-2xl overflow-hidden`}>
                <View style={tw`h-40 relative`}>
                  <Image source={{ uri: plan.img }} style={tw`w-full h-full`} />
                  <View style={tw`absolute top-4 left-4 bg-background/80 px-3 py-1 rounded-full border border-white/10`}>
                    <Text style={tw`font-label text-[10px] font-bold text-secondary-fixed`}>{plan.duration}</Text>
                  </View>
                </View>
                <View style={tw`p-5`}>
                  <Text style={tw`font-headline text-lg font-bold uppercase mb-1 text-on-surface`}>{plan.title}</Text>
                  <Text style={tw`text-on-surface-variant text-xs mb-4`}>{plan.desc}</Text>
                  <View style={tw`flex-row justify-between items-center`}>
                    <Text style={tw`font-label text-sm font-black text-on-surface`}>{plan.cal}</Text>
                    <View style={tw`w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center`}>
                      <Text style={tw`text-primary-fixed font-bold`}>→</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Feed of Articles */}
        <View style={tw`gap-6`}>
            <View style={tw`border-l-4 border-primary-fixed pl-4`}>
                <Text style={tw`font-headline text-2xl font-bold uppercase tracking-tighter text-on-surface`}>TRENDING & FEED</Text>
            </View>

            {[
                { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU1BCVe4wJFpmrTCuIYeslZcWE4x6Yl6j9N8k6W3j16XTOBhtoA4tQZnkJSViZs0Vzx316PTEME_B0gaggIMBbTt0BxsWTFNOGujz98TtpQTgELQHO14CjFf4ga_rMgqdJkyQMoe6Qvc6CK2NlVCaV8YhLtdOK3O0UqwtzJrBzPpZlskCUChZFZa1slQ4n4nTNH-BUsZlVbRLQgMe1eIoEDiEc3QlAhcLIDURJmKN7IQL7rL6xCi0cCYngRmgs3WH1w8wn2z4CwGE', category: 'Trends', color: 'text-tertiary-fixed', title: 'Wearable Tech: Why Your Heart Rate Variability Matters', time: '4 MIN READ', author: 'KINETIC LABS' },
                { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIJOEI62RFiOWvTGE7f-ZigteVD-0tZ8gyyKHs-y4l5ZWAqiEZctGR5DvzRr5nrxV_UnoOEnkyhqRO6hXGS_R-Fm90CjxTXCZH6Vwo5ysObJf0iu--Gg1mFasammoIPNsXQpbqmqrn3eCGFIoJayyDAxUO8uOYXF3C75bGx4iGapZxADQdSZG4qvn5Zh3lDSdOlKDD4D2h4tde9_7WnPInHskWxTFoTPRVsFJr_QrPC7aSWhiBMUQLlQS9acEJouJPX_21jrNDeIY', category: 'Nutrition', color: 'text-secondary-fixed', title: 'Intermittent Fasting: 16/8 vs Warrior Method', time: '6 MIN READ', author: 'DR. MILLER' }
            ].map((article, i) => (
                <TouchableOpacity key={i} style={tw`flex-row gap-4 p-4 bg-surface-container-high rounded-xl`}>
                    <View style={tw`w-24 h-24 rounded-lg overflow-hidden`}>
                        <Image source={{ uri: article.img }} style={tw`w-full h-full`} />
                    </View>
                    <View style={tw`flex-1 flex-col justify-between py-1`}>
                        <View>
                            <Text style={tw`text-[10px] font-label font-black ${article.color} tracking-[0.2em] uppercase`}>{article.category}</Text>
                            <Text style={tw`font-headline text-base font-bold uppercase leading-tight mt-1 text-on-surface`}>{article.title}</Text>
                        </View>
                        <View style={tw`flex-row items-center gap-3`}>
                            <Text style={tw`text-on-surface-variant text-[10px] font-label`}>{article.time}</Text>
                            <View style={tw`w-1 h-1 rounded-full bg-outline-variant`} />
                            <Text style={tw`text-on-surface-variant text-[10px] font-label`}>BY {article.author}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>

        {/* CTA */}
        <View style={tw`bg-primary-fixed p-8 rounded-3xl mt-6 items-center overflow-hidden`}>
            <Text style={tw`font-headline text-4xl font-black italic uppercase leading-none mb-4 text-on-primary-fixed text-center`}>UNLEASH YOUR LIMITS</Text>
            <Text style={tw`font-body font-bold text-sm mb-6 max-w-[200px] text-center opacity-80 uppercase tracking-widest text-on-primary-fixed`}>Premium Personalized Coaching Now Open</Text>
            <TouchableOpacity style={tw`bg-black px-8 py-4 rounded-full`}>
                <Text style={tw`text-white font-label text-xs font-black tracking-widest uppercase`}>UPGRADE NOW</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
