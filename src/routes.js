// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import Courses from "layouts/pages/landing-pages/courses";
import Prices from "layouts/pages/landing-pages/prices";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import PresentationPage from "layouts/pages/presentation";

const routes = [
  {
    name: "Home",
      route: "/home",
      component: <PresentationPage />,
  },
  {
    name: "about us",
    route: "/pages/about-us",
    component: <AboutUs />,
  },
  {
    name: "Courses",
    route: "/pages/courses",
    component: <Courses />,
  },
  {
    name: "Price",
    route: "/pages/prices",
    component: <Prices />,
  },
  {
    name: "Contact Us",
    route: "/pages/contact-us",
    component: <ContactUs />,
  },

];

export default routes;
