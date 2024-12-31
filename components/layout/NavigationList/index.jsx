import React from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../utils/colors';
import Typography from '../../typography/Typography';

const ListItem = ({ icon: Icon, title, onPress }) => (
  <TouchableHighlight underlayColor={colors.grayLight} onPress={onPress}>
    <View  style={styles.itemContainer}>

    <View style={styles.iconContainer}>
      <Icon />
    </View>
    <Typography variant='caption' color='black'>{title}</Typography>
    </View>
  </TouchableHighlight>
);

const NavigationList = ({ items }) => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    if (item.onPress) {
      item.onPress(); // Custom behavior if provided
    } else if (item.route) {
      navigation.navigate(item.route); // Navigate to the specified route
    }
  };

  const renderItem = ({ item }) => (
    <ListItem
      icon={item.icon}
      title={item.title}
      onPress={() => handlePress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: colors.whiteLight,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    marginRight: 16,
  },
  separator: {
    height: 1,
    backgroundColor: colors.gray,
  },
});

export default NavigationList;
