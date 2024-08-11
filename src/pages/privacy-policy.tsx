import React, { FC } from 'react';

import { Typography } from 'shadcn/typography';
import { Badge } from 'shadcn/badge';
import SiteSeo from 'components/seo';
import { HeadFC, PageProps } from 'gatsby';

const PrivacyPolicyPage: FC<PageProps> = () => (
  <main>
    <section className='container [&_li]:list-inside [&_li]:list-disc [&_h3]:mt-6 [&_h3]:mb-3'>
      <div className='text-center mb-3'>
        <Badge variant='outline'>Privacy policy</Badge>
        <Typography>privacy policy</Typography>
      </div>

      <p>
        This Privacy Policy describes Our policies and procedures on the collection, use and
        disclosure of Your information when You use the Service and tells You about Your privacy
        rights and how the law protects You. We use Your Personal data to provide and improve the
        Service. By using the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy.
      </p>

      <Typography variant='tertiary'>Collecting and Using Your Personal Data</Typography>
      <p>
        While using Our Service, We may ask You to provide Us with certain personally identifiable
        information that can be used to contact or identify You. Personally identifiable information
        may include, but is not limited to:
      </p>
      <ul>
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Address, State, Province, ZIP/Postal code, City</li>
        <li>Usage Data</li>
      </ul>

      <Typography variant='tertiary'>Usage Data</Typography>
      <p>
        Usage Data is collected automatically when using the Service. Usage Data may include
        information such as Your Device's Internet Protocol address (e.g. IP address), browser type,
        browser version, the pages of our Service that You visit, the time and date of Your visit,
        the time spent on those pages, unique device identifiers and other diagnostic data. When You
        access the Service by or through a mobile device, We may collect certain information
        automatically, including, but not limited to, the type of mobile device You use, Your mobile
        device unique ID, the IP address of Your mobile device, Your mobile operating system, the
        type of mobile Internet browser You use, unique device identifiers and other diagnostic
        data. We may also collect information that Your browser sends whenever You visit our Service
        or when You access the Service by or through a mobile device.
      </p>

      <Typography variant='tertiary'>Retention of Your Personal Data</Typography>
      <p>
        The Company will retain Your Personal Data only for as long as is necessary for the purposes
        set out in this Privacy Policy. We will retain and use Your Personal Data to the extent
        necessary to comply with our legal obligations (for example, if we are required to retain
        your data to comply with applicable laws), resolve disputes, and enforce our legal
        agreements and policies. The Company will also retain Usage Data for internal analysis
        purposes. Usage Data is generally retained for a shorter period of time, except when this
        data is used to strengthen the security or to improve the functionality of Our Service, or
        We are legally obligated to retain this data for longer time periods
      </p>

      <Typography variant='tertiary'>Delete Your Personal Data</Typography>
      <p>
        Our Service may give You the ability to delete certain information about You from within the
        Service. You may update, amend, or delete Your information at any time by signing in to Your
        Account, if you have one, and visiting the account settings section that. allows you to
        manage Your personal information. You may also contact Us to request access to, correct, or
        delete any personal information that You have. provided to Us. Please note, however, that We
        may need to retain certain information when we have a legal obligation or lawful basis to do
        so.
      </p>

      <Typography variant='tertiary'>Law enforcement</Typography>
      <p>
        Under certain circumstances, the Company may be required to disclose Your Personal Data if
        required to do so by law or in response to valid requests by public authorities (e.g. a
        court or a government agency).
      </p>

      <Typography variant='tertiary'>Other legal requirements</Typography>
      <p>
        The Company may disclose Your Personal Data in the good faith belief that such action is
        necessary to:
      </p>
      <ul>
        <li>Comply with a legal obligation</li>
        <li>Protect and defend the rights or property of the Company</li>
        <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
        <li>Protect the personal safety of Users of the Service or the public</li>
        <li>Protect against legal liability</li>
      </ul>
    </section>
  </main>
);

export default PrivacyPolicyPage;

export const Head: HeadFC = () => <SiteSeo title='Privacy Policy' />;
