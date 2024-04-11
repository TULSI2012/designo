# Frontend Mentor - Designo agency website solution

This is a solution to the [Designo agency website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size ✅
- See hover states for all interactive elements throughout the site ✅
- Receive an error message when the contact form is submitted if: ✅
  - The `Name`, `Email Address` or `Your Message` fields are empty should show "Can't be empty"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"
- **Bonus**: View actual locations on the locations page maps (we recommend [Leaflet JS](https://leafletjs.com/) for this)

### Screenshot

![](/public/screenshot.png)

### Links

- Solution URL: [https://github.com/JomersDev/designo](https://github.com/TULSI2012/designo)
- Live Site URL: [https://designo-jamesm.netlify.app](https://designo-jamesm.netlify.app)

## My process

### Built with

- React
- React Router
- React Hook Form
- Yup
- Tailwind CSS
- Mobile-first workflow

### What I learned

For this project I wanted to try out React Hook Form and Yup for easy form validation and setup. Using this package made the process of setting up a form in react so much more intuitive and easy to adjust. Please see my code below for the form schema I set up with Yup for this project. 

```jsx
const schema = yup.object().shape({
        name: yup.string().required("Can't be empty"),
        email: yup.string().email("Please use a valid email address").required("Can't be empty"),
        phone: yup.number().integer().notRequired().typeError('Please use a valid phone number'),
        message: yup.string().required("Can't be empty")
    })

    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    //include this on input fields and replace "name" with what your form input field is called ie "email", "phone" etc
    {...register("name")}
```

I Discovered the HTML picture tag and how it makes switching images for different screen sizes so much more intuitive and easy to implement. Please see my code below that automatically switches the image source when the screen size reaches the breakpoints of 768px and 1440px.

```HTML
    <picture>
        <source media="(min-width:1440px)" srcSet="/about/desktop/image-about-hero.jpg" />
        <source media="(min-width:768px)" srcSet="/about/tablet/image-about-hero.jpg" />
        <img src="/about/mobile/image-about-hero.jpg" className="w-full mb-8 md:rounded-t-2xl lg:rounded-l-none lg:rounded-r-2xl lg:mb-0"/>
    </picture>
```

### Continued development

I'd like to implement Leaflet JS and solve the bonus requirement for this project

### Useful resources

- [React Hook Form](https://react-hook-form.com/) - React form setup and validation
- [Yup](https://www.npmjs.com/package/yup) - Straighforward integration with react hook form - validation
- [Kevin Powell - Picture Tag](https://www.youtube.com/shorts/d9i68C628Nk) - Great YouTube short outlining how to use the HTML picture tag
- [Tailwind CSS](https://tailwindcss.com/docs/installation) - The tailwind docs are excellent and easy to understand
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - A must have extension when using Tailwind. Adds auto complete when writing tailwind classes and much more.


## Author

- Tulsi Kalola

