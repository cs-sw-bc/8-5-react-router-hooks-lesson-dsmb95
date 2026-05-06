import { View, Text, StyleSheet, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';


const planets = [
  { id: '1', name: 'Mercury', type: 'Terrestrial', distance: '77M km',  emoji: '⚫' },
  { id: '2', name: 'Venus',   type: 'Terrestrial', distance: '261M km', emoji: '🟡' },
  { id: '3', name: 'Earth',   type: 'Terrestrial', distance: '0 km',    emoji: '🌍' },
  { id: '4', name: 'Mars',    type: 'Terrestrial', distance: '225M km', emoji: '🔴' },
  { id: '5', name: 'Jupiter', type: 'Gas Giant',   distance: '628M km', emoji: '🟠' },
  { id: '6', name: 'Saturn',  type: 'Gas Giant',   distance: '1.2B km', emoji: '🪐' },
  { id: '7', name: 'Uranus',  type: 'Ice Giant',   distance: '2.6B km', emoji: '🔵' },
  { id: '8', name: 'Neptune', type: 'Ice Giant',   distance: '4.3B km', emoji: '💙' },
];

export default function PlanetsScreen({ navigation }) {
  const orientation = useDeviceOrientation();
  console.log(orientation);
  const { width, height } = useWindowDimensions();
  console.log(width, height)
  const columns = orientation == 'portrait' ? 1 : 2;
  const cardWidth = (width-48)/columns;
  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>🪐 Planets</Text>

      <FlatList
        data={planets}
        key={columns}
        numColumns={columns}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.card, {width: cardWidth}]}>
            <Text style={styles.cardEmoji}>{item.emoji}</Text>
            <View>
              <Text style={styles.cardName}>{item.name}</Text>
              <Text style={styles.cardSub}>{item.type} · {item.distance}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0a0a1a',
    padding: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 16,
    marginTop: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#14142b',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    gap: 16,
  },
  cardEmoji: {
    fontSize: 32,
  },
  cardName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  cardSub: {
    fontSize: 13,
    color: '#8888aa',
    marginTop: 2,
  },
});
