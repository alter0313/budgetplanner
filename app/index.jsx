import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import services from '../utils/services'
import { useRouter } from 'expo-router'

const index = () => {
    const router = useRouter()
    const checkUserAuth = async()=>{
        const result = await services.getData('login')
        if(result!=='true'){
            router.replace('login')
        }
        console.log('result', result)
    }
   useEffect(()=>{
     checkUserAuth()

   },[])

  return (
   <SafeAreaView>
     <View>
      <Text>index</Text>
    </View>
   </SafeAreaView>
  )
}

export default index