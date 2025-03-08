import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const bannerData = [
    {
      id: "b1",
      title: "On The Mad Band",
      location: "Dallas, TX",
      image: require("./assets/events/banner1.png"),
    },
    {
      id: "b2",
      title: "Summer Fest",
      location: "Austin, TX",
      image: require("./assets/events/banner2.png"),
    },
    {
      id: "b3",
      title: "Night Vibes",
      location: "San Antonio, TX",
      image: require("./assets/events/banner3.png"),
    },
  ];

  const eventData = [
    {
      id: "1",
      category: "Upcoming Events",
      events: [
        {
          id: "e1",
          title: "We Luv The Social",
          attendees: 20,
          location: "36 Guild Street Dallas, TX",
          image: require("./assets/events/event1.png"),
        },
        {
          id: "e2",
          title: "BLACK TIES Ball",
          attendees: 10,
          location: "Radius Gallery - Santa Cruz, CA",
          image: require("./assets/events/event2.png"),
        },
      ],
    },
    {
      id: "2",
      category: "Featured Events",
      events: [
        {
          id: "e3",
          title: "March Madness",
          attendees: 20,
          location: "45 East Dallas, TX",
          image: require("./assets/events/event3.png"),
        },
        {
          id: "e4",
          title: "Beyonce Karaoke",
          attendees: 10,
          location: "56 Net Arena - Santa Cruz, CA",
          image: require("./assets/events/event4.png"),
        },
      ],
    },
    {
      id: "3",
      category: "Trending",
      events: [
        {
          id: "e5",
          title: "#1 Rooftop Day Party",
          attendees: 30,
          location: "73 Midlevel Dr, Dallas, TX",
          image: require("./assets/events/event5.png"),
        },
        {
          id: "e6",
          title: "Elevate Saturdays",
          attendees: 45,
          location: "Net Loft Gallery, Santa Cruz, CA",
          image: require("./assets/events/event6.png"),
        },
      ],
    },
    {
      id: "4",
      category: "Nearby You",
      events: [
        {
          id: "e7",
          title: "Rooftop Party",
          attendees: 25,
          location: "75 Central Dallas, TX",
          image: require("./assets/events/event7.png"),
        },
        {
          id: "e8",
          title: "Local Music Night",
          attendees: 15,
          location: "The Clubhouse, Dallas, TX",
          image: require("./assets/events/event8.png"),
        },
      ],
    },
    {
      id: "5",
      category: "Most Viewed",
      events: [
        {
          id: "e9",
          title: "BLACK TIES Ball",
          attendees: 50,
          location: "Radius Gallery - Santa Cruz, CA",
          image: require("./assets/events/event2.png"),
        },
        {
          id: "e10",
          title: "March Madness",
          attendees: 40,
          location: "45 East Dallas, TX",
          image: require("./assets/events/event3.png"),
        },
      ],
    },
  ];

  const liveEvents = [
    {
      id: "1",
      name: "Add Story",
      image: require("./assets/events/add-live.png"),
    },
    { id: "2", name: "El Kamcy", image: require("./assets/events/live1.png") },
    { id: "3", name: "Aisha", image: require("./assets/events/live2.png") },
    { id: "4", name: "Joyce", image: require("./assets/events/live3.png") },
  ];

  const renderEventCard = (event) => (
    <TouchableOpacity style={styles.eventCard}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>15</Text>
        <Text style={styles.monthText}>JUNE</Text>
      </View>
      <Image source={event.image} style={styles.eventImage} />
      <TouchableOpacity style={styles.saveIcon}>
        <Ionicons name="heart-outline" size={20} color="red" />
      </TouchableOpacity>
      <Text style={styles.eventTitle}>{event.title}</Text>
      <View style={styles.attendeesContainer}>
        <Image
          source={require("./assets/events/avatar1.png")}
          style={styles.attendeeAvatar}
        />
        <Image
          source={require("./assets/events/avatar2.png")}
          style={styles.attendeeAvatar}
        />
        <Image
          source={require("./assets/events/avatar3.png")}
          style={styles.attendeeAvatar}
        />
        <Text style={styles.attendeeCount}>+{event.attendees} Going</Text>
      </View>
      <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={16} color="#ccc" />
        <Text style={styles.locationText}>{event.location}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderEventSection = ({ item }) => (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{item.category}</Text>
        <TouchableOpacity>
          <Text style={styles.sectionLink}>All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={item.events}
        horizontal
        keyExtractor={(event) => event.id}
        renderItem={({ item: event }) => renderEventCard(event)}
      />
    </View>
  );

  const renderBanner = () => (
    <FlatList
      data={bannerData}
      horizontal
      keyExtractor={(event) => event.id}
      renderItem={({ item: event }) => (
        <TouchableOpacity style={styles.bannerCard}>
          <Image source={event.image} style={styles.bannerImage} />
          <Text style={styles.bannerTitle}>{event.title}</Text>
          <Text style={styles.bannerSubtitle}>{event.location}</Text>
        </TouchableOpacity>
      )}
    />
  );

  const allSections = [
    {
      key: "topSection",
      render: () => (
        <View>
          <View style={styles.header}>
            <Ionicons name="menu" size={28} color="white" />
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>Current Location</Text>
              <Text style={styles.locationCity}>Dallas, TX, USA</Text>
            </View>
            <View style={styles.headerIcons}>
              <Ionicons
                name="search"
                size={24}
                color="white"
                style={styles.headerIcon}
              />
              <Ionicons
                name="options-outline"
                size={24}
                color="white"
                style={styles.headerIcon}
              />
            </View>
          </View>
          <View style={styles.filterSection}>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Sports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Music</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Art</Text>
            </TouchableOpacity>
          </View>
        </View>
      ),
    },
    { key: "banner", render: renderBanner },
    {
      key: "liveEvents",
      render: () => (
        <View style={styles.liveEventsContainer}>
          <Text style={styles.liveEventsTitle}>Live Events</Text>
          <FlatList
            data={liveEvents}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.liveEventCard}>
                <Image source={item.image} style={styles.liveEventImage} />
                <Text style={styles.liveEventText}>{item.name}</Text>
              </View>
            )}
          />
        </View>
      ),
    },
    {
      key: "inviteSection",
      render: () => (
        <View style={styles.inviteContainer}>
          <Image
            source={require("./assets/events/invite_friends.png")}
            style={styles.inviteImage}
          />
        </View>
      ),
    },
    ...eventData.map((section) => ({
      key: section.id,
      render: () => renderEventSection({ item: section }),
    })),
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={allSections}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => item.render()}
      />

      {/* Footer Navigation */}
      <View style={styles.footerNavigation}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={24} color="white" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="event" size={24} color="white" />
          <Text style={styles.navText}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="map-outline" size={24} color="white" />
          <Text style={styles.navText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="white" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#1c1c1c",
  },
  locationContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  locationText: {
    color: "white",
    fontSize: 12,
  },
  locationCity: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  headerIcon: {
    marginHorizontal: 10,
  },
  filterSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  filterButton: {
    backgroundColor: "#36465D",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  filterText: {
    color: "white",
    fontSize: 14,
  },
  bannerContainer: {
    marginBottom: 20,
  },
  bannerCard: {
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  bannerImage: {
    width: 300,
    height: 150,
  },
  bannerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  bannerSubtitle: {
    color: "#ccc",
    fontSize: 12,
  },
  liveEventsContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  liveEventsTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  liveEventCard: {
    alignItems: "center",
    marginRight: 15,
  },
  liveEventImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  liveEventText: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
  sectionContainer: {
    marginVertical: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionLink: {
    color: "#1e90ff",
  },
  inviteContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  inviteImage: {
    width: "90%",
    height: undefined,
    aspectRatio: 2.5, // Adjust this to maintain the aspect ratio of the image
    borderRadius: 10,
  },
  eventCard: {
    backgroundColor: "#36465D",
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 200,
    minWidth: 200,
  },
  dateContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "black",
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
    alignItems: "center",
  },
  dateText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  monthText: {
    color: "white",
    fontSize: 10,
    textTransform: "uppercase",
  },
  eventImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  saveIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 5,
  },
  eventTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  attendeesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  attendeeAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: -8,
    borderWidth: 2,
    borderColor: "#36465D",
  },
  attendeeCount: {
    color: "white",
    fontSize: 12,
    marginLeft: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    color: "#ccc",
    fontSize: 12,
    marginLeft: 5,
  },
  footerNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
    paddingVertical: 10,
  },
  navText: {
    color: "white",
    fontSize: 12,
  },
});

export default HomeScreen;
