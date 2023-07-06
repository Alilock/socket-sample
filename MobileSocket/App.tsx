import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'

import Chat from './src/Chat';
import { socket } from './src/Socket';

const App = () => {



  return (
    <SafeAreaView>
      <Chat />
    </SafeAreaView>
  )
}

export default App