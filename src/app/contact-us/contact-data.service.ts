import { Injectable } from '@angular/core';

export interface HelpFaq {
  question: string;
  answer: string;
}

export interface HelpCategory {
  id: string;
  title: string;
  description: string;
  faqs: HelpFaq[];
}

@Injectable({
  providedIn: 'root',
})
export class HelpDataService {
  categories: HelpCategory[] = [
    {
      id: 'booking',
      title: 'Booking Issues',
      description:
        'Get complete assistance with car reservations, booking modifications, cancellations, extensions, pricing queries, and booking confirmation issues on Luxro.',
      faqs: [
        {
          question: 'How do I book a car on Luxro?',
          answer:
            'To book a car on Luxro, begin by opening the Luxro app or website.\n' +
            'Select your pickup location, travel dates, and preferred pickup time.\n' +
            'Browse available vehicles from the Fleet section based on your needs.\n' +
            'Review vehicle details such as pricing, features, and host ratings.\n' +
            'Proceed to checkout by entering the required personal and driver details.\n' +
            'Complete payment to instantly confirm your booking.',
        },
        {
          question: 'Can I modify or cancel my booking?',
          answer:
            'Yes, Luxro allows booking modifications and cancellations before the trip starts.\n' +
            'Go to the “My Bookings” section in your account dashboard.\n' +
            'Select the booking you want to modify or cancel.\n' +
            'Changes depend on vehicle availability and host approval.\n' +
            'Any applicable fees will be clearly displayed before confirmation.\n' +
            'Once confirmed, updates are reflected immediately.',
        },
        {
          question: 'Is there a cancellation fee?',
          answer:
            'Cancellation fees depend on how close the cancellation is to trip start time.\n' +
            'Early cancellations generally have low or zero fees.\n' +
            'Late cancellations may incur higher charges.\n' +
            'The exact fee is shown during the cancellation process.\n' +
            'This policy protects hosts from last-minute losses.\n' +
            'Always review cancellation terms before booking.',
        },
        {
          question: 'How do I know my booking is confirmed?',
          answer:
            'Your booking is confirmed once payment is successfully completed.\n' +
            'A confirmation email is sent to your registered email address.\n' +
            'You will also receive an in-app notification.\n' +
            'The booking appears under “Upcoming Trips.”\n' +
            'Host details are shared after confirmation.\n' +
            'You can access booking details anytime.',
        },
        {
          question: 'Can I book a car for someone else?',
          answer:
            'Yes, you can book a car on behalf of another person.\n' +
            'The actual driver’s information must be entered correctly.\n' +
            'Driver license and identity verification are mandatory.\n' +
            'All documents must be approved before the trip starts.\n' +
            'Unverified drivers are not allowed to drive.\n' +
            'This ensures safety and policy compliance.',
        },
        {
          question: 'What happens if the host cancels my booking?',
          answer:
            'If a host cancels, Luxro notifies you immediately.\n' +
            'Our support team helps find a similar replacement vehicle.\n' +
            'If no alternative is available, a full refund is issued.\n' +
            'Refunds go back to your original payment method.\n' +
            'Host reliability is closely monitored.\n' +
            'Your convenience is always prioritized.',
        },
        {
          question: 'Can I extend my booking?',
          answer:
            'You can request a booking extension from the app.\n' +
            'Extensions depend on vehicle availability.\n' +
            'Host approval is required for confirmation.\n' +
            'Updated pricing is calculated automatically.\n' +
            'Payment must be completed for the extension.\n' +
            'Once approved, the new end time is confirmed.',
        },
        {
          question: 'Why was my booking rejected?',
          answer:
            'Bookings may be rejected due to verification issues.\n' +
            'Vehicle availability conflicts may also apply.\n' +
            'Past policy violations can impact approval.\n' +
            'Hosts have discretion to reject requests.\n' +
            'You are notified immediately of rejection.\n' +
            'You may try booking another vehicle.',
        },
      ],
    },

    {
      id: 'emergency',
      title: 'Emergency Assistance',
      description:
        'Immediate support during emergencies such as accidents, vehicle breakdowns, theft, or medical situations during your Luxro trip.',
      faqs: [
        {
          question: 'What should I do in case of an accident?',
          answer:
            'Ensure your personal safety first and move to a safe location.\n' +
            'Turn on hazard lights to alert other vehicles.\n' +
            'Contact local authorities if legally required.\n' +
            'Document the accident with photos and notes.\n' +
            'Inform Luxro emergency support immediately.\n' +
            'Follow instructions provided by the support team.',
        },
        {
          question: 'What if the car breaks down during my trip?',
          answer:
            'Safely pull over and switch on hazard lights.\n' +
            'Do not attempt major repairs yourself.\n' +
            'Contact Luxro emergency support right away.\n' +
            'Roadside assistance will be arranged promptly.\n' +
            'A replacement vehicle may be provided if needed.\n' +
            'Your trip inconvenience will be minimized.',
        },
        {
          question: 'Is roadside assistance available 24/7?',
          answer:
            'Yes, roadside assistance is available 24/7.\n' +
            'Support is active throughout your rental period.\n' +
            'Request help using the emergency button in the app.\n' +
            'Assistance includes towing and minor repairs.\n' +
            'Response times depend on location.\n' +
            'This ensures peace of mind during your trip.',
        },
        {
          question: 'Who pays for accident damages?',
          answer:
            'Damage responsibility depends on insurance coverage.\n' +
            'An investigation is conducted after reporting.\n' +
            'Fault is determined based on evidence.\n' +
            'Insurance may cover partial or full costs.\n' +
            'Luxro assists with claims processing.\n' +
            'Transparency is maintained throughout.',
        },
        {
          question: 'What if I feel unsafe during my trip?',
          answer:
            'Contact Luxro support immediately if you feel unsafe.\n' +
            'Use the in-app emergency button.\n' +
            'Provide accurate details of the situation.\n' +
            'Our team will take immediate action.\n' +
            'This may include trip termination.\n' +
            'Your safety is our top priority.',
        },
        {
          question: 'What if the vehicle is stolen?',
          answer:
            'Report the theft to local authorities immediately.\n' +
            'File a police report without delay.\n' +
            'Notify Luxro support as soon as possible.\n' +
            'Share the police report details.\n' +
            'Follow instructions from our team.\n' +
            'Insurance procedures will apply.',
        },
        {
          question: 'Can I get medical help through Luxro?',
          answer:
            'Luxro can guide you to nearby medical services.\n' +
            'Emergency numbers can be shared if needed.\n' +
            'Medical expenses are not covered by Luxro.\n' +
            'Seek professional help immediately.\n' +
            'Do not delay emergency treatment.\n' +
            'Your health comes first.',
        },
        {
          question: 'How do I contact emergency support?',
          answer:
            'Use the emergency button in the Luxro app.\n' +
            'You may also call the emergency helpline.\n' +
            'Support is available 24/7.\n' +
            'Provide booking and location details.\n' +
            'Stay connected with the support team.\n' +
            'Help will be arranged promptly.',
        },
      ],
    },

    {
      id: 'payments-refunds',
      title: 'Payments & Refunds',
      description:
        'Information related to pricing, security deposits, accepted payment methods, failed transactions, and refund timelines.',
      faqs: [
        {
          question: 'What payment methods are accepted?',
          answer:
            'Luxro accepts major debit and credit cards.\n' +
            'Supported online payment methods are also available.\n' +
            'Payment options may vary by region.\n' +
            'All payments are processed securely.\n' +
            'Unsupported methods will be declined.\n' +
            'Check available options at checkout.',
        },
        {
          question: 'When will I receive my refund?',
          answer:
            'Refunds are initiated after cancellation approval.\n' +
            'Processing usually takes 5–7 business days.\n' +
            'Time may vary depending on your bank.\n' +
            'Refunds go to the original payment method.\n' +
            'You will receive a notification.\n' +
            'Contact support if delayed.',
        },
        {
          question: 'Is my payment information secure?',
          answer:
            'Yes, Luxro uses encrypted payment gateways.\n' +
            'Your card details are never stored.\n' +
            'Industry-standard security protocols are followed.\n' +
            'Transactions are monitored for fraud.\n' +
            'Your privacy is protected.\n' +
            'Shop with confidence.',
        },
        {
          question: 'Why did my payment fail?',
          answer:
            'Payment may fail due to bank issues.\n' +
            'Insufficient balance can cause failure.\n' +
            'Network problems may interrupt transactions.\n' +
            'Incorrect card details may be entered.\n' +
            'Try again or use another method.\n' +
            'Contact your bank if needed.',
        },
        {
          question: 'Is a security deposit required?',
          answer:
            'Some bookings require a refundable security deposit.\n' +
            'The amount depends on the vehicle.\n' +
            'Deposits are held during the trip.\n' +
            'Released after successful trip completion.\n' +
            'No damage must be reported.\n' +
            'Refund timelines vary by bank.',
        },
        {
          question: 'How do I view my payment history?',
          answer:
            'Log in to your Luxro account.\n' +
            'Go to the account dashboard.\n' +
            'Select the payments section.\n' +
            'View all past transactions.\n' +
            'Download receipts if needed.\n' +
            'Keep records for reference.',
        },
        {
          question: 'Can I get an invoice?',
          answer:
            'Yes, invoices are available after trip completion.\n' +
            'Access them from your booking history.\n' +
            'Invoices include full cost breakdown.\n' +
            'They can be downloaded anytime.\n' +
            'Useful for expense claims.\n' +
            'Contact support for issues.',
        },
        {
          question: 'What happens if I am charged incorrectly?',
          answer:
            'Contact Luxro support immediately.\n' +
            'Provide transaction and booking details.\n' +
            'Our team will investigate the issue.\n' +
            'Incorrect charges will be corrected.\n' +
            'Refunds are issued if applicable.\n' +
            'Transparency is ensured.',
        },
      ],
    },

    {
      id: 'account',
      title: 'Account & Profile',
      description:
        'Help with account registration, login issues, profile updates, identity verification, and security settings.',
      faqs: [
        {
          question: 'How do I update my profile details?',
          answer:
            'Log in to your Luxro account.\n' +
            'Go to the Account section.\n' +
            'Edit your personal information.\n' +
            'Save changes after updating.\n' +
            'Some details may require verification.\n' +
            'Updates apply immediately.',
        },
        {
          question: 'I forgot my password. What should I do?',
          answer:
            'Click on “Forgot Password” on login screen.\n' +
            'Enter your registered email or phone.\n' +
            'Follow the reset instructions sent.\n' +
            'Create a new secure password.\n' +
            'Avoid reusing old passwords.\n' +
            'Log in again after reset.',
        },
        {
          question: 'How do I verify my account?',
          answer:
            'Upload valid identification documents.\n' +
            'Ensure images are clear and readable.\n' +
            'Submit documents for review.\n' +
            'Verification may take some time.\n' +
            'You will be notified once approved.\n' +
            'Verified accounts enjoy full access.',
        },
        {
          question: 'Can I change my registered phone number?',
          answer:
            'Yes, phone numbers can be updated.\n' +
            'Go to account settings.\n' +
            'Enter the new phone number.\n' +
            'Verify with OTP.\n' +
            'Save changes.\n' +
            'Use updated number for login.',
        },
        {
          question: 'Why is my account suspended?',
          answer:
            'Accounts may be suspended for violations.\n' +
            'Incomplete verification may cause suspension.\n' +
            'Repeated cancellations can be a reason.\n' +
            'Security concerns may apply.\n' +
            'You will be notified of the reason.\n' +
            'Contact support for resolution.',
        },
        {
          question: 'How do I delete my account?',
          answer:
            'Contact Luxro support to request deletion.\n' +
            'Ensure no active bookings exist.\n' +
            'Outstanding payments must be cleared.\n' +
            'Deletion requests are reviewed.\n' +
            'Confirmation will be sent.\n' +
            'Data removal follows policy.',
        },
        {
          question: 'Can I have multiple accounts?',
          answer:
            'No, only one account per user is allowed.\n' +
            'Multiple accounts violate policy.\n' +
            'Duplicate accounts may be suspended.\n' +
            'Use a single verified account.\n' +
            'Contact support for account issues.\n' +
            'This ensures fair usage.',
        },
        {
          question: 'How do I enable two-factor authentication?',
          answer:
            'Go to security settings in your account.\n' +
            'Enable two-factor authentication.\n' +
            'Choose your preferred method.\n' +
            'Verify setup using OTP.\n' +
            'Save security settings.\n' +
            'Enjoy enhanced account security.',
        },
      ],
    },

    {
      id: 'host',
      title: 'Becoming a Host',
      description:
        'Guidance for car owners on listing vehicles, managing bookings, pricing, earnings, and host responsibilities.',
      faqs: [
        {
          question: 'How can I list my car on Luxro?',
          answer:
            'Visit the Host section on Luxro.\n' +
            'Submit your vehicle details.\n' +
            'Upload required documents.\n' +
            'Set availability and pricing.\n' +
            'Submit listing for review.\n' +
            'Once approved, your car goes live.',
        },
        {
          question: 'How do hosts earn money?',
          answer:
            'Hosts earn when their vehicle is rented.\n' +
            'Daily rental pricing applies.\n' +
            'Higher demand increases earnings.\n' +
            'Earnings are shown in dashboard.\n' +
            'No hidden deductions.\n' +
            'Transparent payout system.',
        },
        {
          question: 'Is there a registration fee?',
          answer:
            'No registration fee is required.\n' +
            'Listing vehicles is completely free.\n' +
            'No upfront charges apply.\n' +
            'Luxro earns via service fees.\n' +
            'Hosts pay nothing to join.\n' +
            'Start earning immediately.',
        },
        {
          question: 'How do I set rental prices?',
          answer:
            'Set prices through host dashboard.\n' +
            'Choose daily or custom pricing.\n' +
            'Adjust prices based on demand.\n' +
            'Review competitor pricing.\n' +
            'Save updated rates.\n' +
            'Prices apply instantly.',
        },
        {
          question: 'Is my car insured?',
          answer:
            'Yes, Luxro provides insurance during rentals.\n' +
            'Coverage applies only during active trips.\n' +
            'Terms depend on policy conditions.\n' +
            'Damage claims follow investigation.\n' +
            'Hosts are informed throughout.\n' +
            'Peace of mind assured.',
        },
        {
          question: 'Can I reject a booking request?',
          answer:
            'Yes, hosts can reject requests.\n' +
            'Valid reasons should apply.\n' +
            'Repeated rejections may affect ranking.\n' +
            'Timely responses are encouraged.\n' +
            'Guests are notified instantly.\n' +
            'Fair hosting is promoted.',
        },
        {
          question: 'When do hosts receive payouts?',
          answer:
            'Payouts are processed after trip completion.\n' +
            'Earnings appear in host wallet.\n' +
            'Transfer timelines vary by bank.\n' +
            'Minimum payout rules may apply.\n' +
            'Track earnings anytime.\n' +
            'Support available for issues.',
        },
        {
          question: 'What are host responsibilities?',
          answer:
            'Ensure vehicle safety and cleanliness.\n' +
            'Provide accurate listing details.\n' +
            'Maintain vehicle condition.\n' +
            'Respond to bookings promptly.\n' +
            'Follow Luxro policies.\n' +
            'Deliver great guest experience.',
        },
      ],
    },

    {
      id: 'vehicle',
      title: 'Vehicle Support',
      description:
        'Support related to vehicle usage, cleanliness, damages, fuel policy, and trip extensions.',
      faqs: [
        {
          question: 'What if the vehicle is not clean?',
          answer:
            'Report cleanliness issues immediately.\n' +
            'Use the app or contact support.\n' +
            'Upload photos if required.\n' +
            'Luxro will assess the issue.\n' +
            'Compensation may apply.\n' +
            'Do not proceed without reporting.',
        },
        {
          question: 'What if the vehicle is damaged?',
          answer:
            'Document damage with photos.\n' +
            'Inform Luxro support immediately.\n' +
            'Do not continue driving if unsafe.\n' +
            'An investigation will follow.\n' +
            'Insurance coverage may apply.\n' +
            'Follow support guidance.',
        },
        {
          question: 'Can I extend my trip duration?',
          answer:
            'Request extension from booking page.\n' +
            'Availability must be confirmed.\n' +
            'Host approval is required.\n' +
            'Additional charges apply.\n' +
            'Payment confirms extension.\n' +
            'Updated booking is shown.',
        },
        {
          question: 'What is the fuel policy?',
          answer:
            'Return vehicle with same fuel level.\n' +
            'Fuel level is noted at pickup.\n' +
            'Extra fuel costs may be charged.\n' +
            'No refunds for extra fuel.\n' +
            'Follow policy strictly.\n' +
            'Avoid disputes.',
        },
        {
          question: 'Can I take the car out of city?',
          answer:
            'Outstation trips must be allowed.\n' +
            'Check booking details carefully.\n' +
            'Unauthorized trips are prohibited.\n' +
            'Extra charges may apply.\n' +
            'Inform host if unsure.\n' +
            'Policy violations may occur.',
        },
        {
          question: 'Is smoking allowed in the vehicle?',
          answer:
            'Smoking is strictly prohibited.\n' +
            'This includes cigarettes and vaping.\n' +
            'Violation may incur penalties.\n' +
            'Cleaning fees may apply.\n' +
            'Hosts may report violations.\n' +
            'Respect vehicle rules.',
        },
        {
          question: 'Can I wash the vehicle?',
          answer:
            'Basic exterior cleaning is allowed.\n' +
            'Do not use harsh chemicals.\n' +
            'Interior detailing is not allowed.\n' +
            'Avoid unauthorized services.\n' +
            'Return vehicle as received.\n' +
            'Ask support if unsure.',
        },
        {
          question: 'What if I lose the car keys?',
          answer:
            'Inform Luxro support immediately.\n' +
            'Do not attempt forced entry.\n' +
            'Replacement costs may apply.\n' +
            'Host will be informed.\n' +
            'Follow provided instructions.\n' +
            'Delays may affect trip.',
        },
      ],
    },

    {
      id: 'careers',
      title: 'Careers at Luxro',
      description:
        'Explore job opportunities, internships, hiring process details, and career growth at Luxro.',
      faqs: [
        {
          question: 'How can I apply for a job at Luxro?',
          answer:
            'Visit the Luxro Careers page.\n' +
            'Browse open job positions.\n' +
            'Select a role matching your skills.\n' +
            'Submit your application online.\n' +
            'Attach required documents.\n' +
            'Wait for HR response.',
        },
        {
          question: 'Can freshers apply?',
          answer:
            'Yes, freshers are welcome.\n' +
            'Entry-level roles are available.\n' +
            'Internships are also offered.\n' +
            'Skills matter more than experience.\n' +
            'Learning opportunities are provided.\n' +
            'Apply through careers page.',
        },
        {
          question: 'Is remote work available?',
          answer:
            'Some roles offer remote options.\n' +
            'Others may be hybrid.\n' +
            'Availability depends on role.\n' +
            'Job description specifies details.\n' +
            'Discuss during interview.\n' +
            'Flexibility may apply.',
        },
        {
          question: 'What is the hiring process?',
          answer:
            'Hiring starts with application review.\n' +
            'Shortlisted candidates are contacted.\n' +
            'Interviews and assessments follow.\n' +
            'Final selection is made.\n' +
            'Offer letters are issued.\n' +
            'Onboarding begins after acceptance.',
        },
        {
          question: 'How long does hiring take?',
          answer:
            'Hiring usually takes 2–4 weeks.\n' +
            'Timelines vary by role.\n' +
            'Interview rounds affect duration.\n' +
            'HR keeps candidates informed.\n' +
            'Delays may occur occasionally.\n' +
            'Patience is appreciated.',
        },
        {
          question: 'Can I apply for multiple roles?',
          answer:
            'Yes, you can apply for multiple roles.\n' +
            'Ensure roles match your skills.\n' +
            'Each application is reviewed separately.\n' +
            'Avoid duplicate applications.\n' +
            'Quality applications matter.\n' +
            'Track status online.',
        },
        {
          question: 'Are internships paid?',
          answer:
            'Some internships are paid.\n' +
            'Payment depends on role.\n' +
            'Details are shared in listing.\n' +
            'Duration varies.\n' +
            'Learning is prioritized.\n' +
            'Apply early for opportunities.',
        },
        {
          question: 'How can I contact HR?',
          answer:
            'HR contact details are on Careers page.\n' +
            'Use official email channels.\n' +
            'Avoid unofficial contacts.\n' +
            'Mention job reference ID.\n' +
            'Expect response within few days.\n' +
            'Professional communication is advised.',
        },
      ],
    },
  ];

  getCategories(): HelpCategory[] {
    return this.categories;
  }

  private popularFaqs: HelpFaq[] = [
    {
      question: 'How do I cancel a booking on Luxro?',
      answer:
        'You can cancel your booking by navigating to the My Trips section in your Luxro account. Select the active booking you wish to cancel and confirm the cancellation before the trip start time. Any applicable cancellation charges will be shown before confirmation.',
    },
    {
      question: 'When and how will I receive my refund after cancellation?',
      answer:
        'Refunds are usually processed within 5–7 business days after a successful cancellation. The amount will be credited back to your original payment method, depending on your bank or payment provider.',
    },
    {
      question: 'What should I do immediately in case of an accident during my trip?',
      answer:
        'Ensure your personal safety first and seek medical help if required. Contact local authorities if necessary, then inform Luxro support immediately through the app or emergency helpline for further assistance.',
    },
    {
      question: 'How can I become a host and list my car on Luxro?',
      answer:
        'To become a Luxro host, visit the Host page and submit your vehicle details, ownership documents, and availability. Once approved, your car will be listed and ready to earn whenever it is booked.',
    },
    {
      question: 'Can freshers and interns apply for jobs at Luxro?',
      answer:
        'Yes, Luxro welcomes freshers and interns across multiple roles. Entry-level positions and internships are available in various departments, offering mentorship and real-world experience.',
    },
    {
      question: 'What documents are required to book a car on Luxro?',
      answer:
        'To book a car on Luxro, you must have a valid driving license and a verified Luxro account. Additional identity verification may be required depending on the vehicle and location.',
    },
    {
      question: 'Can I extend my trip after the booking has started?',
      answer:
        'Yes, trip extensions can be requested from the My Trips section while your booking is active. Extensions are subject to vehicle availability and host approval, and additional charges may apply.',
    },
  ];

  getPopularFaqs(): HelpFaq[] {
    return this.popularFaqs;
  }
}
