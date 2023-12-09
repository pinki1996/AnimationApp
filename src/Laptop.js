import React from 'react'
import {motion} from "framer-motion"

function Laptop() {
  return (
    <motion.div initial ={{opacity:0}} animate={{opacity:0.8, color:"blue"}} transition={{duration:3}}>Random Laptop Number online tool helps to 
        generate random fake laptop numbers. ... to teach students about number patterns, 
        probability, or data analysis.
        </motion.div>

        // <motion.img src="https://static5.depositphotos.com/1001759/463/i/600/depositphotos_4634746-stock-photo-red-heart-isolated-white-background.jpg" 
        // initial ={{opacity:0}} animate={{opacity:0.8, color:"blue"}} transition={{duration:3}}>
        // </motion.img>
  )
}

export default Laptop