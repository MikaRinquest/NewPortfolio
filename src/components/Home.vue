<template>
  <section>
    <div class="container">
      <h1>Hi, I'm</h1>
      <h2>
        <span class="typed-text">{{ typeValue }}</span
        ><!--The text that will be displayed-->
        <span class="blinking-cursor">|</span
        ><!--The line to simulate typing-->
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span
        ><!---->
      </h2>
    </div>
    <div></div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      typeValue: "", //This is the word that will be displayed in the browser
      typeStatus: false,
      displayTextArray: ["Mika Rinquest", "Aspiring Web Developer"], //The text that will be looping
      typingSpeed: 150, //The speed that each character will appear
      erasingSpeed: 150, //The speed that each character will disapper
      newTextDelay: 150, //How long the new word will take to start appearing
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },

  created() {
    //One of the lifecycle hooks, will basically run as you load the page
    setTimeout(this.typeText, this.newTextDelay + 200); //Will start the function to create the typing effect
  },

  methods: {
    typeText() {
      if (
        this.charIndex < // Checks the value charIndex
        this.displayTextArray[this.displayTextArrayIndex].length // Checks the length of the array
        //The above will only run if the value of charIndex is lower than the index of displayTextArray
        //To prevent the loop from crashing due to being equal value, we take the character length of the object that is being referenced in the
        //Example: displayTextArray = ['banana','apple','carrot'], charIndex = 0
        //Will be seen as if( 0 < 6 )
        //This is because banana has six characters
      ) {
        if (!this.typeStatus) this.typeStatus = true; //Checks to see if the target is false, then sets it to true
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex] //typeValue will be equal to whichever string the array is currently one
          .charAt(this.charIndex); // This creates the character breaking effect
        this.charIndex += 1; //This will add 1 to the value of charIndex
        setTimeout(this.typeText, this.typingSpeed); //States how long it will take for the character to pop up AND when to run this function again
      } else {
        //If charIndex is not less than displayTextArray length
        this.typeStatus = false; //Set typeStatus to be false
        setTimeout(this.eraseText, this.newTextDelay); //State how quickly the characters of a word must disapper AND when to start running the new word
      }
    },

    eraseText() {
      if (this.charIndex > 0) {
        //If the value of charIndex is more than 0, the below will run
        if (!this.typeStatus) this.typeStatus = true; //Checks to see if the target is false, then sets it to true
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1); //This will display the first character to the second last character in a string
        this.charIndex -= 1; //Subtract 1 from charIndex
        setTimeout(this.eraseText, this.erasingSpeed); //The function function will run again after x amount of time
      } else {
        // If charIndex is no longer greater than 0, the below will run
        this.typeStatus = false; // Sets typeStatus to false
        this.displayTextArrayIndex += 1; //Add 1 to displayTextArrayIndex
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          //Checks if displayTextArrayIndex is greater than or equal to displayTextArray's length
          this.displayTextArrayIndex = 0; //Sets displayTextArrayIndex to 0
        setTimeout(this.typeText, this.typeSpeed + 1000); //Restarts the loop from the beginning of the  array
      }
    },
  },
};
</script>

<style scoped>
/* Keyframes for the cursor blinking effect */
.blinking-cursor {
  font-size: 25px;
  color: black;
  animation: blink 1s step-end infinite;
  -webkit-animation: blink 1s step-end infinite; /*Ensure that the animation will run in these browsers(chrome and safari)*/
  -moz-animation: blink 1s step-end infinite; /*Ensure that the animation will run in these browsers(firefox)*/
  -ms-animation: blink 1s step-end infinite; /*Ensure that the animation will run in these browsers()*/
  -o-animation: blink 1s step-end infinite; /*Ensure that the animation will run in these browsers(Opera)*/
}

@keyframes blink {
  /*This is specifically for animation*/
  from,
  to {
    color: transparent;
    /* At the start of the animation, the color of the 'cursor' must be invisible */
    /* At the end of the animation, the color of the 'cursor' must be invisible */
  }
  50% {
    color: black;
    /* Once the animation is halfway finished, the cursor color must be black */
  }
}
</style>
