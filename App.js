import React, { Component } from 'react'
import { View } from 'react-native'
import ReactState from './components/ReactState'
import ReactProps from './components/ReactProps'
import ReactTextInput from './components/ReactTextInput'
import ReactForm from './components/ReactForm'
import ReactList from './components/ReactList'
import ReactMapList from './components/ReactMapList'
import ReactGrid from './components/ReactGrid'
import ComponentLoopFlatList from './components/ComponentLoopFlatList'
import ReactSectionList from './components/ReactSectionList'
import ReactUseEffect from './hooks/ReactUseEffect'
import ReactUseEffect2 from './hooks/ReactUseEffect2'
import ShowHide from './hooks/ShowHide'
import UseEffectunmount from './hooks/UseEffectunmount'
import ReactResponsive from './components/ReactResponsive'
import ReactTouchableHighlight from './components/ReactTouchableHighlight'
import ReactRadioButton from './components/ReactRadioButton'
import ReactActivityIndicator from './components/ReactActivityIndicator'
import ReactModal from './components/ReactModal'
import ReactPressable from './components/ReactPressable'
import ReactStatusBar from './components/ReactStatusBar'
import ReactPlatform from './components/ReactPlatform'
import ReactWebview from './components/ReactWebview'
import ReactCustomModal from './components/ReactCustomModal'
import ReactStackNavigation from './components/ReactStackNavigation'
import ReactTabNavigation from './components/ReactTabNavigation'
import ReactApiCall from './components/ReactApiCall'
import ListApiCall from './components/ListApiCall'
import FlatListApiData from './components/FlatListApiData'
import CallJsonServerApi from './components/CallJsonServerApi'
import PostApiCall from './components/PostApiCall'
import InputFieldApi from './components/InputFieldApi'
import ReactFormValidation from './components/ReactFormValidation'
import DeleteListApiData from './components/DeleteListApiData'
import UpdateListApiData from './components/UpdateListApiData'
import PopulateDataInputField from './components/PopulateDataInputField'
import ReactSearchApi from './components/ReactSearchApi'
import ReactRef from './components/ReactRef'
import ReactAsyncStorage from './components/ReactAsyncStorage'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductWrapper from './components/ProductWrapper'
import UserList from './components/UserList'


const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <View style={{ flex: 1 }}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ProductWrapper} />
          <Stack.Screen name="User" component={UserList} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* <ReactState/> */}

      {/* <ReactProps /> */}

      {/* <ReactTextInput/> */}

      {/* <ReactForm/> */}

      {/* <ReactList/> */}

      {/* <ReactMapList/> */}

      {/* <ReactGrid/> */}

      {/* <ComponentLoopFlatList/> */}

      {/* <ReactSectionList /> */}

      {/* <ReactUseEffect/> */}

      {/* <ReactUseEffect2/> */}

      {/* <ShowHide/> */}

      {/* <UseEffectunmount/> */}

      {/* <ReactResponsive/> */}

      {/* <ReactTouchableHighlight/> */}

      {/* <ReactRadioButton/> */}

      {/* <ReactActivityIndicator/> */}

      {/* <ReactModal/> */}

      {/* <ReactPressable/> */}

      {/* <ReactStatusBar/> */}

      {/* <ReactPlatform/> */}

      {/* <ReactWebview/> */}

      {/* <ReactCustomModal/> */}

      {/* <ReactStackNavigation/> */}

      {/* <ReactTabNavigation/> */}

      {/* <ReactApiCall/> */}

      {/* <ListApiCall /> */}

      {/* <FlatListApiData/> */}

      {/* <CallJsonServerApi/> */}

      {/* <PostApiCall/> */}

      {/* <InputFieldApi/> */}

      {/* <ReactFormValidation/> */}

      {/* <DeleteListApiData/> */}

      {/* <UpdateListApiData/> */}

      {/* <PopulateDataInputField/> */}

      {/* <ReactSearchApi/> */}

      {/* <ReactRef/> */}

      {/* <ReactAsyncStorage/> */}

    </View>
  )
}

export default App