---
slug: "/drylander"
id: "drylander"
title: "Drylander Winery"
---

## Project Summary

![Alt text goes here](../../static/Drylander.png "#width=450px;")

This freelance project was designed and built by myself in Summer 2019. Over the course of several months and many meetings with the winery owners, this website was born.

What began as a simple way to display information adn allow the public to contact the winery, quickly grew into an e-commerce site with a portal to allow administrators to edit the content and style of the site.

It's backend is hosted by GCP with a React front end.

---

## Admin Portal

![Alt text goes here](../../static/Drylander.png "#width=450px;")

The most difficult and most rewarding challenge for this project was building a portal for admins to edit the information on their site. All accounts are protected by Google OAuth which made implementing the security fairly hands off.

After logging in, the admin can click on any text or image to edit it. The sidebar that appears edits the information in realtime. As the user types in the textbox, the information is persisted to Google Firestore and a webhook on the front end pulls down the information without interruption.

---

## E-Commerce

![Alt text goes here](../../static/Drylander.png "#width=450px;")

The e-commerce on this site allows the admins to add new adn edit existing vintages that users can add to their cart and purchase now or at a later point.

The payment is routed through PayPal but everything else about theh shopping cart is built from scratch for this project.

Any items in the shopping cart are stored under an anonymous account in Firebase Firestore. This allows the user to close the site and return at a later point ot continue shopping or to checkout.

## Lazy Loaded Images

![Alt text goes here](../../static/Drylander.png "#width=450px;")

While it's easy to statically host images, allowing administrators to upload their own images to the site opens the door to large images that will take seconds to load since they can't be packaged with the website and must be downloaded on each unique page visit.

When an admin uploads an image, it drops the file into Firebase Storage. As soon as the image is uploaded, a Firebase Cloud Function is triggered that creates a thumbnail image that is stored along side the original.

When the site is loaded. It renders theh thumbnail only until the high resolution image has downloaded at which point they're swapped in place to give the viewer a fluid experience.
