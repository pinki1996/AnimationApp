import React from 'react'
import {motion} from "framer-motion"

function Mobile() {
  return (

    <motion.div initial ={{opacity:0}} animate={{opacity:0.8, color:"orange"}} transition={{duration:3}}>
        You are using this free online tool to generate random phone numbers. 
        You can use these when you want to promote something without using real data.
    </motion.div>

//     <motion.img src="https://images.moneycontrol.com/static-mcnews/2019/07/Xiaomi_Mi_A3.jpg" 
//     initial ={{opacity:0}} 
//     animate={{opacity:0.8}}
//     transition={{duration:3}}>

//     </motion.img>
  )
}

export default Mobile