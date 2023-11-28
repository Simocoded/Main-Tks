import image1 from '../../Images/bg1.jpg'
import image2 from '../../Images/bg2.jpg'
import image3 from '../../Images/bg3.jpg'
import image4 from '../../Images/bg4.jpg'

export const images = [image1, image2, image3, image4]

export const imageByIndex = (index) => images[index % images.length]



export const slideTexts = [
    "Welcome to TKS INVESTMENT",
    "Text for Slide 2",
    "Text for Slide 3",
    "Text for Slide 4",
    "Text for Slide 5",
  ];