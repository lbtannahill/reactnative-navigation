import { MEALS } from "../data/dummy-data";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/Mealitem";

export default function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    const item = itemData.item;
    const MealItemProps = {
      title: item.title,
      imageURL: item.imageURL,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...MealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      >
        Meals Overview Screen - {catId}
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
