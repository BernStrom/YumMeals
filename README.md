<p align="center">
  <a href="#calling-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#eyes-preview">Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-core-tech-stack">Tech Stack</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sparkles-main-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#camera_flash-screenshots">Screenshots</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license-">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#warning-disclaimer">Disclaimer</a>
</p>

<h1 align="center">
  🍉 <em>YumMeals</em>
</h1>

<div align="center">
  <img src="./assets/images/icon@3x.png" alt="App brand icon" />
</div>

<p align="center">Icons made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a></p>

<br />

## :calling: About

YumMeals is an online food ordering app that resembles a simpler version of similar modern large-scale apps such as [Uber Eats](https://www.ubereats.com/ 'Uber Eats') and [DoorDash](https://www.doordash.com/ 'DoorDash'). Core features include location searching with city names, which displays a list of restaurants found within the search results vicinity, along with user register/login authentication, a settings screen with customizable user avatar and the option to store restaurant(s) as favourites.

The app also comes with an ordering and payment feature which utilizes services from the Stripe API. Users can place orders from the restaurant menu and add them to the cart before checking out. The user interface for the payment input field, with a minimalist design, can be found alongside the cart summary for easy reference to the user's order summary during the checkout process.

The integrated Stripe payment service accepts any valid debit/ credit card. However, since this isn't a fully published production app, the payment feature is set to testing mode to mimic a real-life payment flow. For this, Stripe has provided a list of sample payment card details for testing purposes that users can use to make payments in this app.

_**Link to test card payment details provided by Stripe**_ 👉&nbsp; https://stripe.com/docs/testing#cards

## :eyes: Preview

[![runs with Expo Go](https://img.shields.io/badge/Runs%20with%20Expo%20Go-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/@bernn/YumMeals)

### :1234: Instructions to Preview (_iOS users, see note below_)

1. Head over to the Google Play Store and download the Expo Go app

   - Link: https://play.google.com/store/apps/details?id=host.exp.exponent

2. Open the [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent 'Expo Go') app or simply go to the [Expo website](https://expo.io/ 'Expo') and follow the instructions to register for an Expo account

   - Note: _**You will need an account on Expo in order to view the app!**_

3. After completing step 1 and 2 above, open your device camera and scan the provided QR code in the link below:

   - Link: https://expo.io/@bernn/YumMeals (_**Published version of app hosted on Expo**_)

4. After scanning the QR code, the Expo Go app will automatically load up the app

   - Note: _**If this is your first time opening the app, it might take a while to load up. Please be patient!**_

5. Enjoy! The app should be successfully loaded by now. Please feel free to play around and test out its features. If for any reason the app couldn't be loaded or any of the features are breaking, please report the issue at the link below.

   - Link: https://github.com/BernStrom/YumMeals/issues

### :bangbang: IMPORTANT! - _Note for iOS users_

Unfortunately, iOS users will not be able to preview the published app hosted on Expo. This issue is due to restrictions imposed by Apple and not by Expo itself.

Please refer to this Expo documentation link for further information on this restriction:

- Link: https://docs.expo.io/workflow/publishing/#on-ios-you-cant-share-your-published

Due to the nature of this project objective being an educational and experimental one in learning more about working with [React Native](https://reactnative.dev/ 'React Native') and the [Expo](https://expo.io/ 'Expo') framework in a production-like environment mimicking a professional workflow, this app isn't built for distributing officially to either the [Play Store](https://play.google.com/store 'Google Play Store') or the [App Store](https://www.apple.com/app-store/ 'App Store').

For this, please refer to the app screenshots below. A mixture of both screenshot pictures and GIFs is provided as an alternative for previewing the app.

## :gear: Core Tech Stack

👉&nbsp; [Project Architecture Diagram](https://lucid.app/lucidchart/invitations/accept/inv_6fab6816-4e33-4ab2-9039-1cab4f972b3d 'YumMeals App Architecture Diagram')

- :arrow_up_small:&nbsp; [Expo](https://expo.io/ 'Expo')
- :electron:&nbsp;[React Native](https://reactnative.dev/ 'React Native')
- :page_with_curl:&nbsp; [React Native Paper](https://callstack.github.io/react-native-paper/index.html 'React Native Paper')
- :link:&nbsp; [React Navigation](https://reactnavigation.org/ 'React Navigation')
- :performing_arts:&nbsp; [Styled Components](https://styled-components.com/ 'Styled Components')
- :fire:&nbsp; [Firebase Authentication & Cloud Functions](https://firebase.google.com/)
- :credit_card:&nbsp; [Stripe Payment API](https://stripe.com/docs/payments 'Stripe Payments')
- :world_map:&nbsp; [Google Places APIs](https://developers.google.com/maps/documentation/places/web-service/overview 'Google Places APIs')

## :sparkles: Main Features

- Register & Login authentication through email & password.
- Location search through cities around the world to discover restaurants.
- Customizable user avatar utilizing mobile device camera with user permissions.
- Online order placing and checkout, along with option for users to save restaurant(s) as their favourites.
- Payment processing and authentication through Stripe. (👉&nbsp;_**[List of test payment cards for this feature](https://stripe.com/docs/testing#cards 'Test card details by Stripe')**_)

## :camera_flash: Screenshots

<p>
    <img src="./assets/screenshots/app-preview-1.gif" width="250">
    <img src="./assets/screenshots/app-preview-map.png" width="250">
    <img src="./assets/screenshots/app-preview-2.gif" width="250">
    <img src="./assets/screenshots/app-preview-restaurant-menu.png" width="250">
    <img src="./assets/screenshots/app-preview-3.gif" width="250">
    <img src="./assets/screenshots/app-preview-user-settings.png" width="250">
</p>

## :memo: License <a aria-label="YumMeals is free to use" href="https://choosealicense.com/licenses/mit/" target="_blank"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-success.svg?style=flat-square&color=33CC12" target="_blank" /></a>

This project is under the terms of the MIT license. For more information, please refer to the license [documentation](LICENSE.md).

## :warning: Disclaimer

The contents of these pages are provided as an information guide only. While every effort is made in preparing the material for publication, no responsibility is accepted by or on behalf of the owner(s) for any errors, omissions or misleading statements on these pages or any site to which these pages connect. Although every effort is made to ensure the reliability of listed sites this cannot be taken as an endorsement of these sites.
