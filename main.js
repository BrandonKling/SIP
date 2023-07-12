//This is a SIP by Brandon Kling called "The Lighthouse"
//This is where we import libraries to use in our app
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Text,
  View,
  Pressable,
  ImageBackground,
  Image,
  Button,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Audio } from 'expo-av';

//App is what we thnk of as our main function where the program starts.
//Do not put code comments inside the return area or you will break your app.
//each screen is going to be a simple function
//home screen
function TitleScreen({ navigation }) {
  //This is the first page you see in my app
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/TheLighthouse.gif')}
        style={{ width: '100%', height: '100%' }}>
        <View>
          <View style={{}}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 50,
                fontWeight: 'bold',
              }}>
              {' '}
              {'\n\n\n\n\n\n'}The Lighthouse{' '}
            </Text>
            <Pressable onPress={() => navigation.navigate('First Page')}>
              <Text
                style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
                {'\n\n\n\n\n'} Press here to start{' '}
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
  //comments should be safe here.
}
function FirstPage({ navigation }) {
  //This is the first page of story
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('./assets/purplemoon.webp')}
        style={{ width: '100%', height: '100%' }}>
        <View>
          <View style={{}}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              {'\n'}The beginning...
              {'\n\n\n'}What makes a person normal? A stable job? A house with a
              white picket fence and a family? This all seemed boring to Morgan.
              Morgan was never satisfied by the standard things we are all
              spoon-fed to want and need as children. She always wanted more. As
              Morgan grew older, she realized that nobody could give her what
              she needed because she herself had no idea what would fill this
              void in her soul.{'\n'}
            </Text>
            <Pressable onPress={() => navigation.navigate('Second Page')}>
              <Text
                style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
                {'\n\n\n\n\n'} Continue...
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
  //comments should be safe here.
}
function SecondPage({ navigation }) {
  //This is the second page of story
  return (
    <ImageBackground
      source={require('./assets/differentpurplemoon.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            {'\n\n'}Once she was old enough, she decided to move away from the
            small town she had grown up in. Her dad had always told her how much
            he wanted to move to Washington and find some fishing town where he
            could live a simple life and work the docks. She grew up listening
            to his stories about the ocean and how it always soothed his soul.
            Morgan decided that following in her dad's footsteps could maybe
            answer some of her life questions and satiate her constant need for
            something more. He seemed happy with his life so why couldn’t she be
            as well?
          </Text>
          <Pressable onPress={() => navigation.navigate('Third Page')}>
            <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
              {'\n\n'} Continue...
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
  //comments should be safe here.
}
function ThirdPage({ navigation }) {
  //This is the third page of story
  return (
    <ImageBackground
      source={require('./assets/nightsky.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            {'\n\n\n'}Morgan packed the little things she needed like clothes
            and her iPad. She never needed much to travel with. She now had to
            select a coastal place in Washington to move to. She opened her
            Iphone and looked through the different cities she noticed a city
            called Vashon. As she read the name something started to swell in
            her mind...
            {'\n\n'}It was like a sinking pull towards the name...
          </Text>
          <Pressable
            onPress={() => navigation.navigate('Third Page Side Path 1')}>
            <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
              {'\n\n'} Press here to follow the feeling.
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Third Page Side Path 2')}>
            <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
              {'\n\n'} Press here to ignore the feeling.
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
  //comments should be safe here.
}
function ThirdPageSidePath1({ navigation }) {
  //This is the forth page of story
  return (
    <ImageBackground
      source={require('./assets/LightningOcean.gif')}
      style={{ width: '100%', height: '100%' }}>
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 40,
              fontWeight: 'bold',
            }}>
            {'\n\n\n'}Vashon...
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            {'\n\n'}A voice kept quietly repeating Vashon in my head. I have to
            go to this city. Even fiber of my being is pulled towards it now.
          </Text>
          <Pressable onPress={() => navigation.navigate('Forth Page')}>
            <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
              {'\n\n'} Push through the voices.
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
  //comments should be safe here.
}
function ThirdPageSidePath2({ navigation }) {
  //This is the forth page of story
  return (
    <ImageBackground
      source={require('./assets/desk.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            {'\n\n\n'}Morgan got a glass of water and took a drink to clear her
            mind. This always did the trick when she felt a headache coming
            along. She then recollected herself and settled on a city to move
            to. Vashon is the city she decided apon.
          </Text>
          <Pressable onPress={() => navigation.navigate('Forth Page')}>
            <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
              {'\n\n'} Continue...
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
  //comments should be safe here.
}
function ForthPage({ navigation }) {
  //This is the forth page of story
  return (
    <ImageBackground
      source={require('./assets/coastalview.webp')}
      style={{ width: '100%', height: '100%' }}>
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            {'\n\n\n'}Morgan set off to the airport to head to her new home and
            a new beginning. As Morgan’s plane descended toward Seattle, she
            noticed how dense the surrounding forest was. It seemed to go all
            the way to the ocean. The captain made an announcement over the
            intercom for everyone to look at the island city of Vashon. Once she
            laid eyes on the city Morgan felt the pull again.
          </Text>
          <Pressable
            onPress={() => navigation.navigate('Forth Page Side Path 1')}>
            <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
              {'\n\n'} Give into the feeling.
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Forth Page Side Path 2')}>
            <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
              {'\n\n'} Ignore the feeling.
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
  //comments should be safe here.
}
function ForthPageSidePath1({ navigation }) {
  //This is the forth page of story
  return (
    <ImageBackground
      source={require('./assets/LightningOcean.gif')}
      style={{ width: '100%', height: '100%' }}>
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            {'\n'}It caused her mind to go blank and fill with a weird sense of
            longing. It was a feeling she had never felt before. Morgan closed
            her eyes to try and get this feeling out of her head but as she did,
            she heard what sounded like a whisper. It did not sound like a word
            but more like a mumble. As she tried to listen to it she felt like
            someone was right beside her. Morgan quickly opened her eyes and
            there was no one near her. In fact, all the passengers had gotten
            off the plane and she could see the flight attendant coming toward
            her. Morgan thought to herself “How did I not notice us land? Did I
            fall asleep? I only closed my eyes for a moment”. The flight
            attendant asked if Morgan needed any help. Morgan felt uneasy and
            said, “No thank you”.
          </Text>
          <Pressable onPress={() => navigation.navigate('Fifth Page')}>
            <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
              {'\n\n'} Continue...
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
  //comments should be safe here.
}
function ForthPageSidePath2({ navigation }) {
  //This is the forth page of story
  return (
    <ImageBackground
      source={require('./assets/lookingthroughwindow.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            {'\n\n'}As the feeling took hold, Morgan took a drink of her water
            bottle and closed her eyes for second. The feeling slowly slipped
            away like a passing headache. The plane started to decend and then
            eventually landed. Everyone gathered their things and started to get
            off the plane one by one.
          </Text>
          <Pressable onPress={() => navigation.navigate('Fifth Page')}>
            <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
              {'\n\n'} Continue...
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
  //comments should be safe here.
}
function FifthPage({ navigation }) {
  //This is the fifth page of story
  return (
    <ImageBackground
      source={require('./assets/insideofplane.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            {'\n\n'}Morgan gathered her things and left the plane. She then
            proceeded to get a taxi to head to her new home. Morgan had already
            lined up a job and place to stay until she got on her feet. A local
            warehouse that stored fish and other sea-based deliveries needed an
            overnight person to watch things. They also offered her a place to
            live while she worked there. A small apartment on the upper floor of
            the warehouse.
          </Text>
          <Pressable onPress={() => navigation.navigate('Sixth Page')}>
            <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
              {'\n\n'} Continue...
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
  //comments should be safe here.
}
function SixthPage({ navigation }) {
  //This is the fifth page of story
  return (
    <ImageBackground
      source={require('./assets/oldwarehouse.jpeg')}
      style={{ width: '100%', height: '100%' }}>
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            {'\n\n'}As she arrived at the warehouse she noticed that it was
            ancient. Back in the day, the owners used to live inside to save
            money while holding and transporting goods. As Morgan approached the
            warehouse to finally meet the owner, she noticed how old and
            run-down it looked. It honestly looked like no one had used this
            place in years. It had broken windows and rusted metal sheeting
            along the walls. The smell of the ocean air was so pure and
            soothing. Which was a nice change for Morgan. Ultimately, this was
            to be a new experience, so she looked at everything through a
            positive lens.
          </Text>
          <Pressable onPress={() => navigation.navigate('Seventh Page')}>
            <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
              {'\n\n'} Continue...
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
  //comments should be safe here.
}
function SeventhPage({ navigation }) {
  //This is the fifth page of story
  return (
    <ImageBackground
      source={require('./assets/insideofplane.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            {'\n\n'}
          </Text>
          <Pressable onPress={() => navigation.navigate('Eighth Page')}>
            <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
              {'\n\n'} Continue...
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
  //comments should be safe here.
}
function EighthPage({ navigation }) {
  //This is the fifth page of story
  return (
    <ImageBackground
      source={require('./assets/insideofplane.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            {'\n\n'}
          </Text>
          <Pressable onPress={() => navigation.navigate('Fifth Page')}>
            <Text style={{ textAlign: 'center', fontSize: 21, color: 'white' }}>
              {'\n\n'} Continue...
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
  //comments should be safe here.
}

//create nav component
const Stack = createStackNavigator();

//This will take care of all our Navigation.
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Title">
        <Stack.Screen name="Title" component={TitleScreen} />
        <Stack.Screen name="First Page" component={FirstPage} />
        <Stack.Screen name="Second Page" component={SecondPage} />
        <Stack.Screen name="Third Page" component={ThirdPage} />
        <Stack.Screen
          name="Third Page Side Path 1"
          component={ThirdPageSidePath1}
        />
        <Stack.Screen
          name="Third Page Side Path 2"
          component={ThirdPageSidePath2}
        />
        <Stack.Screen name="Forth Page" component={ForthPage} />
        <Stack.Screen
          name="Forth Page Side Path 1"
          component={ForthPageSidePath1}
        />
        <Stack.Screen
          name="Forth Page Side Path 2"
          component={ForthPageSidePath2}
        />
        <Stack.Screen name="Fifth Page" component={FifthPage} />
        <Stack.Screen name="Sixth Page" component={SixthPage} />
        <Stack.Screen name="Seventh Page" component={SeventhPage} />
        <Stack.Screen name="Eighth Page" component={EighthPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
