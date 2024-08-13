import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
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
import Header from './components/Header'
import Product from './components/Product'

const App = () => {

  const products = [
    {
      name:'Samsung Mobile',
      color:'white',
      price:30000,
      image:'https://media.istockphoto.com/id/1840192421/photo/smartphone-template-with-blank-screen-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=Nnf-jxIKiC-uYc3LHL-KVxiRnGhnal-97adjzRSw-m4='
    },
    {
      name:'Apple Phone',
      color:'black',
      price:130000,
      image:'https://media.istockphoto.com/id/1840192421/photo/smartphone-template-with-blank-screen-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=Nnf-jxIKiC-uYc3LHL-KVxiRnGhnal-97adjzRSw-m4='
    },
    {
      name:'Nokia Mobile',
      color:'green',
      price:20000,
      image:'https://media.istockphoto.com/id/1840192421/photo/smartphone-template-with-blank-screen-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=Nnf-jxIKiC-uYc3LHL-KVxiRnGhnal-97adjzRSw-m4='
    }
  ]

  return (
    <View style={{ flex: 1 }}>
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

      <Header/>

      <ScrollView>
      {
        products.map((item)=><Product item={item}/>)
      }
      </ScrollView>

    </View>
  )
}

export default App