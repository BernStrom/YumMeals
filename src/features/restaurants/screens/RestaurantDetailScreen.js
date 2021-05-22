import React, { useState } from 'react';
import { List } from 'react-native-paper';

import { SafeArea } from '../../../components/SafeArea/SafeArea';
import { RestaurantInfoCard } from '../components/RestaurantInfoCard';

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <List.Accordion
        title="Breakfast"
        left={(props) => <List.Icon {...props} icon="food-croissant" />}
        expanded={breakfastExpanded}
        onPress={() => setBreakfastExpanded(!breakfastExpanded)}
      />
      <List.Accordion
        title="Lunch"
        left={(props) => <List.Icon {...props} icon="hamburger" />}
        expanded={lunchExpanded}
        onPress={() => setLunchExpanded(!lunchExpanded)}
      />
      <List.Accordion
        title="Dinner"
        left={(props) => <List.Icon {...props} icon="glass-cocktail" />}
        expanded={dinnerExpanded}
        onPress={() => setDinnerExpanded(!dinnerExpanded)}
      />
      <List.Accordion
        title="Drinks"
        left={(props) => <List.Icon {...props} icon="coffee" />}
        expanded={drinksExpanded}
        onPress={() => setDrinksExpanded(!drinksExpanded)}
      />
    </SafeArea>
  );
};
