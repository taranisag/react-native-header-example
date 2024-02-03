import React from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  Header,
  LargeHeader,
  ScalingView,
  ScrollViewWithHeaders,
} from '@codeherence/react-native-header';

const HeaderComponent = ({ showNavBar }) => (
  <Header
    ignoreTopSafeArea
    noBottomBorder
    showNavBar={showNavBar}
    headerCenterStyle={{
      backgroundColor: 'red', 
      height: 50,
      paddingVertical: 0,
      paddingHorizontal: 0,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'stretch', 
    }}
    headerCenter={<Text>HEADER</Text>}
  />
);

const LargeHeaderComponent = ({ scrollY }) => (
  <LargeHeader headerStyle={{
    height: 200, 
    backgroundColor: 'blue',
    paddingVertical: 0,
    paddingHorizontal: 0,
  }}>
    <ScalingView scrollY={scrollY}>
      <Text>LARGE HEADER</Text>
    </ScalingView>
  </LargeHeader>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{height: 100, backgroundColor: 'green'}}>
        <Text style={{paddingTop: 50}}>MAIN HADER</Text>
      </View>
      <ScrollViewWithHeaders
        ignoreLeftSafeArea
        ignoreRightSafeArea
        absoluteHeader
        HeaderComponent={HeaderComponent}
        LargeHeaderComponent={LargeHeaderComponent}
      >
        <View>
          {Array.from(Array(200).keys()).map((index) => <Text key={index}>Some body text...</Text>)}
        </View>
      </ScrollViewWithHeaders>
    </SafeAreaProvider>
  );
}
