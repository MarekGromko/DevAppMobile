import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from './context/ThemeContext.js';
import AppNavigator from './navigation/AppNavigator.js';

export default function App() {
    return (
        <ThemeProvider>
            <AppNavigator />
        </ThemeProvider>
    );
}
