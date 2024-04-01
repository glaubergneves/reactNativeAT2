import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainScreen from '../screens/MainScreen';
import EventsScreen from '../screens/EventsScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import AboutScreen from '../screens/AboutScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';
import AddEventScreen from '../screens/AddEventScreen';
import PhotoGalleryScreen from '../screens/PhotoGalleryScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="Events" component={EventsScreen} />
      <Drawer.Screen name="EventDetails" component={EventDetailsScreen} />
      <Drawer.Screen name="AddEvent" component={AddEventScreen} />
      <Drawer.Screen name="PhotoGallery" component={PhotoGalleryScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
