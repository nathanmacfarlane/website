import { Grid } from "@material-ui/core";
import * as React from "react";
import { ProjectWrapper, ProjectImage } from "../../components/ProjectWrapper";
import image0 from "../../images/projects/drylander-0.png";
import image1 from "../../images/projects/drylander-1.png";
import image2 from "../../images/projects/drylander-2.png";
import { useIsMobile } from "../../hooks/useIsMobile";

const Project = () => {
  const isMobile = useIsMobile();

  return (
    <ProjectWrapper title="Drylander Winery">
      <h2>Project Summary</h2>
      <p>
        This freelance project was designed and built by myself in Summer 2019.
        Over the course of several months and many meetings with the winery
        owners, this website was born.
        <br />
        <br />
        What began as a simple way to display information adn allow the public
        to contact the winery, quickly grew into an e-commerce site with a
        portal to allow administrators to edit the content and style of the
        site.
        <br />
        <br />
        It's backend is hosted by GCP with a React front end.
      </p>

      <br />
      <br />

      <Grid container spacing={4}>
        <Grid item xs={isMobile ? 12 : 6}>
          <h2>Admin Portal</h2>
          The most difficult and most rewarding challenge for this project was
          building a portal for admins to edit the information on their site.
          All accounts are protected by Google OAuth which made implementing the
          security fairly hands off.
          <br />
          <br />
          After logging in, the admin can click on any text or image to edit it.
          The sidebar that appears edits the information in realtime. As the
          user types in the textbox, the information is persisted to Google
          Firestore and a webhook on the front end pulls down the information
          without interruption.
        </Grid>
        <Grid item xs={isMobile ? 12 : 6}>
          <ProjectImage src={image0} />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={4}>
        <Grid item xs={isMobile ? 12 : 6}>
          <h2>E-Commerce</h2>
          The e-commerce on this site allows the admins to add new adn edit
          existing vintages that users can add to their cart and purchase now or
          at a later point.
          <br />
          <br />
          The payment is routed through PayPal but everything else about theh
          shopping cart is built from scratch for this project.
          <br />
          <br />
          Any items in the shopping cart are stored under an anonymous account
          in Firebase Firestore. This allows the user to close the site and
          return at a later point ot continue shopping or to checkout.
        </Grid>
        <Grid item xs={isMobile ? 12 : 6}>
          <ProjectImage src={image1} />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={4}>
        <Grid item xs={isMobile ? 12 : 6}>
          <h2>Lazy Loaded Images</h2>
          While it's easy to statically host images, allowing administrators to
          upload their own images to the site opens the door to large images
          that will take seconds to load since they can't be packaged with the
          website and must be downloaded on each unique page visit.
          <br />
          <br />
          When an admin uploads an image, it drops the file into Firebase
          Storage. As soon as the image is uploaded, a Firebase Cloud Function
          is triggered that creates a thumbnail image that is stored along side
          the original.
          <br />
          <br />
          When the site is loaded. It renders theh thumbnail only until the high
          resolution image has downloaded at which point they're swapped in
          place to give the viewer a fluid experience.
        </Grid>
        <Grid item xs={isMobile ? 12 : 6}>
          <ProjectImage src={image2} />
        </Grid>
      </Grid>
    </ProjectWrapper>
  );
};

export default Project;
