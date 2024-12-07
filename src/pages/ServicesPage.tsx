import { SimpleGrid } from '@mantine/core';
import { FooterSocial } from '@/components/FooterSocial/FooterSocial';
import Service from '@/components/Services/WebService';
import ServicesTitle from '@/components/ServicesTitle/ServicesTitle';
import laptopRocket from '../components/Services/laptop-rocket.svg';
import seoBro from '../components/Services/SEO-bro.svg';
import webApp from '../components/Services/web-app.png';
import classes from '../components/Services/Service.module.css';

export interface ServiceProps {
  title: string;
  info: string;
  detailTitle: string;
  detailContent: string;
  matters: string[];
  img: string;
  imgClass: string;
  bottomTitle: string;
  bottomContent: string;
  anchorId: string;
}
function ServicesPage() {
  const webServiceProps: ServiceProps = {
    anchorId: 'web-design',
    title: 'Web-Design: 5 Page Business Website',
    info: `Our 5 Page Business Website is fully customizable to meet your unique needs. While we
          recommend a structure that includes a home page, about page, services page, contact page,
          and a showcase or portfolio page, you have the flexibility to decide which pages best suit
          your business. Perfect for small businesses looking for a high-performing, tailored online
          presence.`,
    detailTitle: `Custom Code - NO Page Builders Or WordPress`,
    detailContent: `At El Dorado County Web Design, we take a different approach. Instead of relying on page
          builders or WordPress, we custom-write every line of code for your site. This ensures your
          website is lightning-fast, with no unnecessary bloat or wasted code slowing it down. Our
          handcrafted designs consistently achieve perfect scores on Google Page Speed Insights,
          providing your business with a secure, high-performing online presence that stands out
          from the competition.`,
    matters: [
      'Faster load times: Keeps visitors engaged',
      'Higher conversions: Turns more visitors into customers',
      'Better ad performance: Saves you money',
      'More secure: Protects your business',
      'Improved Google ranking: Drives more traffic',
      'Boosted local visibility: Attracts nearby customers',
    ],
    img: laptopRocket,
    imgClass: classes.image,
    bottomTitle: `Better Load Times Means Better Business`,
    bottomContent: `In today’s fiercely competitive online market, every second counts. Research
    shows that if your website takes longer than 3 seconds to load, you could lose up to 50% of
    your potential visitors—customers who are unwilling to wait. Our custom-coded websites are
    engineered to load instantly, giving your business the edge it needs to capture and convert
    more leads before your competition does. Don’t let slow load times cost you customers—choose
    speed, choose success.`,
  };
  const seoServiceProps: ServiceProps = {
    anchorId: 'seo',
    title: 'Seo Services: Dominate Search Rankings',
    info: `Our SEO service is designed to elevate your online presence and drive consistent,
          high-quality traffic to your website. Whether you’re targeting local customers or
          competing on a national scale, our tailored strategies ensure your business ranks at
          the top of search results. With a mix of on-page optimization, technical SEO, and
          authoritative backlinking, we provide everything your website needs to dominate search
          rankings and grow your bottom line.`,
    detailTitle: `Custom SEO Solutions for Your Business`,
    detailContent: `At El Dorado County Web Design, we go beyond generic SEO techniques. We
    start with a deep analysis of your business goals, competitors, and audience. Using this
    insight, we craft a personalized SEO strategy that delivers measurable results. From
    improving website structure to targeting high-value keywords, we handle everything to
    ensure your site ranks where it matters most—at the top.`,
    matters: [
      'Higher search rankings: Increase visibility and attract more customers',
      'Better local visibility: Dominate Google Maps and local searches',
      'Targeted traffic: Drive visitors ready to take action',
      'Enhanced user experience: Faster load times and mobile-friendly designs',
      'Increased credibility: Build trust with a strong online presence',
      'Long-term results: Sustainable traffic and revenue growth',
    ],
    img: seoBro,
    imgClass: classes.image2,
    bottomTitle: `Results That Speak for Themselves`,
    bottomContent: `SEO is more than just rankings—it’s about driving real results for your
    business. Our clients have seen dramatic increases in traffic, leads, and revenue through
    our data-driven strategies. Whether you’re looking to improve your local presence or expand
    nationally, our team will help you achieve your goals and stay ahead of the competition.
    Invest in SEO today and watch your business thrive.`,
  };

  const customWebApp: ServiceProps = {
    title: 'Custom Web Applications: Built to Scale Your Business',
    info: `Our Custom Web App Service is designed for businesses with unique needs that go
          beyond a simple website. Whether you're looking to manage operations, enhance
          customer experiences, or streamline workflows, we’ll build a tailored solution
          that meets your specific goals. Perfect for businesses ready to level up with
          robust, scalable, and secure web applications.`,
    detailTitle: `Why Choose a Custom Web Application?`,
    detailContent: `Off-the-shelf solutions often fall short when it comes to handling the
          unique needs of a growing business. At El Dorado County Web Design, we specialize
          in building web applications from the ground up, complete with backend systems
          designed to integrate seamlessly with your workflows. From advanced data handling
          to custom APIs, our solutions are built to handle complex business processes with
          ease.`,
    matters: [
      'Tailored solutions: Built specifically for your business needs',
      'Seamless integrations: Connect your tools, platforms, and systems',
      'Scalable architecture: Grows with your business, no matter how big',
      'Enhanced security: Protect sensitive data with cutting-edge solutions',
      'Improved efficiency: Automate tasks and save time for your team',
      'Custom APIs: Unlock endless possibilities with tailored functionality',
    ],
    img: webApp, // Replace with your actual image path
    imgClass: classes.image3,
    bottomTitle: `Built to Grow with Your Business`,
    bottomContent: `Your business deserves more than a one-size-fits-all solution. Our custom
          web applications are designed with scalability in mind, ensuring that your platform
          grows alongside your needs. Whether it’s handling larger datasets, adding new
          features, or scaling infrastructure, our applications are built to adapt. Let us
          create a web app that doesn’t just meet your needs today but prepares your business
          for the challenges of tomorrow.`,
    anchorId: 'web-app',
  };

  return (
    <>
      <ServicesTitle />
      <SimpleGrid cols={{ sm: 1, md: 2 }} verticalSpacing="lg" p="lg" spacing="lg">
        <Service {...webServiceProps} />
        <Service {...seoServiceProps} />
        <Service {...customWebApp} />
      </SimpleGrid>
      <FooterSocial />
    </>
  );
}

export default ServicesPage;
