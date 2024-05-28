import type { Schema, Attribute } from '@strapi/strapi';

export interface PageHome extends Schema.Component {
  collectionName: 'components_page_homes';
  info: {
    displayName: 'home';
    icon: 'house';
    description: '';
  };
  attributes: {
    navbar: Attribute.Component<'page.navbar', true>;
  };
}

export interface PageNavbar extends Schema.Component {
  collectionName: 'components_page_navbars';
  info: {
    displayName: 'navbar';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    Recruiter: Attribute.RichText;
    Candidate: Attribute.RichText;
    Aboutus: Attribute.RichText;
    Contact: Attribute.RichText;
    login: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.home': PageHome;
      'page.navbar': PageNavbar;
    }
  }
}
