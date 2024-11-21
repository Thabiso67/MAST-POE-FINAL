import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const HomeScreen = ({ navigation }: { navigation: any }) => (
  <View style={styles.container}>
    <Text style={styles.welcomeText}>Welcome to the Chef Christofell’s Menu!</Text>
    <Image style={styles.ImageSize} source={require('./img/Welcome.jpg')} />
    <Button title="Go to Starter Menu" onPress={() => navigation.navigate('StarterMenu')} />
    <Button title="Go to Main Menu" onPress={() => navigation.navigate('MainMenu')} />
    <Button title="Go to Dessert Menu" onPress={() => navigation.navigate('DessertMenu')} />
  </View>
);

const StarterMenuScreen = () => {
  const [starterDish, setStarterDish] = useState('');
  const [starterDescription, setStarterDescription] = useState('');
  const [starterPrice, setStarterPrice] = useState('');

  return (
    <><ScrollView>
      <Image style={styles.ImageSize}
      source={require('./img/Starter1.jpg')} /><Text style={styles.mainText}>Warm,
        spiced gingerbread served
        alongside a velvety tomato soup,
        creating a delightful balance of sweet and savory flavors.
        Price: R35.00</Text><Image style={styles.ImageSize}
          source={require('./img/Starter2.png')} /><Text style={styles.mainText}>Crispy,
            golden cheeseballs with a gooey,
            melted center, served as a delightful appetizer or snack,
            offering a burst of cheesy goodness in every bite.
            Price: R30.00</Text><Image style={styles.ImageSize}
              source={require('./img/Starter3.jpg')} /><Text style={styles.mainText}>Delicate
                smoked salmon paired with a creamy avocado blend,
                accented by thinly sliced carrots,
                offering a harmonious mix of smoky, creamy, and crisp textures in a refined,
                elegant dish.
                Price: R39.00</Text> </ScrollView>

        <ScrollView style={styles.menuContainer}>
        <Text style={styles.HeadingText}>Starter Menu</Text>
        <Text style={styles.Label}>Enter Starter Dish:</Text>
        <TextInput
          style={styles.InputBox}
          placeholder="Dish Name"
          value={starterDish}
          onChangeText={setStarterDish} />
        <Text style={styles.Label}>Enter Description:</Text>
        <TextInput
          style={styles.InputBox}
          placeholder="Description"
          value={starterDescription}
          onChangeText={setStarterDescription} />
        <Text style={styles.Label}>Enter Price:</Text>
        <TextInput
          style={styles.InputBox}
          placeholder="Price"
          value={starterPrice}
          onChangeText={setStarterPrice}
          keyboardType="numeric" />

        <Button title='Submit'
          onPress={() => {
            navigator.navigation('Starter', {
              MainDishSend: starterDish,
              MainDescriptionSend: starterDescription,
              MainPriceSend: starterPrice
            });
            console.log("Dish" + starterDish +
              "Description" + starterDescription + "Price" + starterPrice + " ");
          } } />
      </ScrollView></>
  );
};

function ViewStarter({ route }: { route: any }) {
  const { StarterDishSend, StarterDescriptionSend, StarterPriceSend }  = route.params;

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Name: {StarterDishSend} Surname: {StarterDescriptionSend} Price: {StarterPriceSend} </Text>
      </View>
  );
}

const MainMenuScreen = () => {
  const [mainDish, setMainDish] = useState('');
  const [mainDescription, setMainDescription] = useState('');
  const [mainPrice, setMainPrice] = useState('');

  return (

    <><ScrollView><Image style={styles.ImageSize}
      source={require('./img/Main1.jpg')} /><Text style={styles.mainText}>Al dente spaghetti tossed with tender broccoli,
        accompanied by spicy buffalo wings and crispy potato bites,
        creating a satisfying plate that combines hearty,
        vibrant flavors with a touch of indulgence.
        Price: R50.00</Text><Image style={styles.ImageSize}
          source={require('./img/Main2.jpg')} /><Text style={styles.mainText}>A juicy chicken burger,
            perfectly grilled and served on a toasted bun with fresh toppings,
            paired with thick, golden fries for a classic and satisfying meal.
            Price: R45.00</Text><Image style={styles.ImageSize}
              source={require('./img/Main3.jpg')} /><Text style={styles.mainText}>Crispy fried chicken served alongside creamy mashed potatoes,
                topped with a sprinkle of fresh greens for a touch of color and flavor,
                creating a comforting and well-rounded dish.
                Price: R40.00</Text> </ScrollView>

        <ScrollView style={styles.menuContainer}>
        <Text style={styles.HeadingText}>Main Menu</Text>
        <Text style={styles.Label}>Enter Main Dish:</Text>
        <TextInput
          style={styles.InputBox}
          placeholder="Dish Name"
          value={mainDish}
          onChangeText={setMainDish} />
        <Text style={styles.Label}>Enter Description:</Text>
        <TextInput
          style={styles.InputBox}
          placeholder="Description"
          value={mainDescription}
          onChangeText={setMainDescription} />
        <Text style={styles.Label}>Enter Price:</Text>
        <TextInput
          style={styles.InputBox}
          placeholder="Price"
          value={mainPrice}
          onChangeText={setMainPrice}
          keyboardType="numeric" />

        <Button title='Submit'
          onPress={() => {
            navigator.navigation('Main', {
              MainDishSend: mainDish,
              MainDescriptionSend: mainDescription,
              MainPriceSend: mainPrice
            });
            console.log("Dish" + mainDish +
              "Description" + mainDescription + "Price" + mainPrice + " ");
          } } />
      </ScrollView></>

  
  );
};

function ViewMain({ route }: { route: any }) {
  const { MainDishSend, MainDescriptionSend, MainPriceSend }  = route.params;

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Name: {MainDishSend} Surname: {MainDescriptionSend} Price: {MainPriceSend} </Text>
      </View>
  );
}


const DessertMenuScreen = () => {
  const [dessertDish, setDessertDish] = useState('');
  const [dessertDescription, setDessertDescription] = useState('');
  const [dessertPrice, setDessertPrice] = useState('');

  return (

    <><ScrollView>
      <Image style={styles.ImageSize}
        source={require('./img/Dessert.jpg')} /><Text style={styles.mainText}>A luscious blueberry pie with a golden,
          flaky crust,
          filled with sweet,
          juicy blueberries that burst with flavor in every bite.
          Price: R35.00</Text><Image style={styles.ImageSize}
            source={require('./img/Dessert2.jpg')} /><Text style={styles.mainText}>Rich, velvety chocolate cake drizzled with a decadent chocolate sauce,
              creating an indulgent dessert that satisfies every chocolate lover’s deepest cravings.
              Price: R35.00</Text><Image style={styles.ImageSize}
                source={require('./img/Dessert3.png')} /><Text style={styles.mainText}>Traditional malva pudding,
                  with its caramelized, spongy texture,
                  served warm and generously topped with a smooth,
                  creamy custard—a comforting South African dessert with a rich, sweet finish.
                  Price: R35.00</Text> </ScrollView>
                  
        <ScrollView style={styles.menuContainer}>
        <Text style={styles.HeadingText}>Dessert Menu</Text>
        <Text style={styles.Label}>Enter Dessert Dish:</Text>
        <TextInput
          style={styles.InputBox}
          placeholder="Dish Name"
          value={dessertDish}
          onChangeText={setDessertDish} />
        <Text style={styles.Label}>Enter Description:</Text>
        <TextInput
          style={styles.InputBox}
          placeholder="Description"
          value={dessertDescription}
          onChangeText={setDessertDescription} />
        <Text style={styles.Label}>Enter Price:</Text>
        <TextInput
          style={styles.InputBox}
          placeholder="Price"
          value={dessertPrice}
          onChangeText={setDessertPrice}
          keyboardType="numeric" />

        <Button title='Submit'
          onPress={() => {
            navigator.navigation('Dessert', {
              MainDishSend: dessertDish,
              MainDescriptionSend: dessertDescription,
              MainPriceSend: dessertPrice
            });
            console.log("Dish" + dessertDish +
              "Description" + dessertDescription + "Price" + dessertPrice + " ");

          } } />
      </ScrollView></>
  );
};

function ViewDessert({ route }: { route: any }) {
  const { DessertDishSend, DessertDescriptionSend, DessertPriceSend }  = route.params;

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Name: {DessertDishSend} Surname: {DessertDescriptionSend} Price: {DessertPriceSend} </Text>
      </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StarterMenu" component={StarterMenuScreen} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} />
        <Stack.Screen name="DessertMenu" component={DessertMenuScreen} />
        <Stack.Screen name="Starter" component={ViewStarter} />
        <Stack.Screen name="Main" component={ViewMain} />
        <Stack.Screen name="Dessert" component={ViewDessert} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  menuContainer: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },

mainText: {
paddingTop: 40,
color: 'red',
fontWeight: 'bold',
fontSize: 15,
textAlign: 'center',
},

  HeadingText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  Label: {
    fontSize: 16,
    marginVertical: 10,
  },
  InputBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  ImageSize: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});