// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // --- Existing ---
          home_title: "Welcome to our website",
          about_title: "About Us",
          services_title: "Our Services",
          explore_title: "Explore",
          future_title: "Future Plans",
          presence_title: "Our Presence",
          footer_text: "All rights reserved",

          // --- New (nested home section) ---
          home: {
            tagline: "India’s No.1 Poultry Trading Hub",
            subTagline: "Smart Trading • Secure Deals • Strong Network",
            heading: "Transforming Poultry Trading with Technology",
            subtext:
              "India’s first organized B2B platform for contract broiler trading – Connecting verified poultry traders.",
            registerText: "For getting latest updates, register yourself:",
            registerBtn: "Register Now",
          },
          about: {
            heading: "About Us",
            description:
              "Poultrywala by Ninjafarm is India’s first organized B2B digital marketplace for live broiler poultry trading. We connect contract poultry farming companies with verified poultry traders to enable seamless, secure, transparent, and reliable transactions.",
            features: {
              verified: "Verified Profiles",
              trading: "Real Time Trading",
              contracts: "Digital Contracts",
              rates: "Daily Rates",
              order: "Order Poultry",
            },
            imageAlt: "About Poultrywala",
          },
          explore: {
        title: "Explore Poultry Traders",
        subtitle: "Compare trusted suppliers, check today’s prices, and connect instantly.",
        whyUseTitle: "Why Use Explore?",
        whyUseText: "The Explore section gives you real-time prices from verified poultry traders. Compare suppliers, check ratings, and connect directly with confidence.",
        whyChooseTitle: "Why Choose Verified Traders?",
        
        card1Title: "Trust & Security",
        card1Desc: "Every trader is verified to ensure secure and reliable trading.",
        card2Title: "Fair Pricing",
        card2Desc: "Real-time market rates without hidden charges or middlemen.",
        card3Title: "Nationwide Network",
        card3Desc: "Connect with farmers and traders across multiple states in India.",
        card4Title: "Quality Checked",
        card4Desc: "Strict quality checks before every dispatch for healthy poultry.",
        card5Title: "Instant Connections",
        card5Desc: "Chat and connect instantly with verified suppliers & buyers.",
        card6Title: "Growth Opportunities",
        card6Desc: "Expand your poultry business by reaching thousands of buyers daily.",

        ctaTitle: "Be a Part of India’s Trusted Poultry Marketplace",
        ctaText: "Whether you are a supplier or a buyer, join our growing network and connect with verified partners today.",

        traderTitle: "Register as a Trader",
        traderText: "List your company, showcase daily prices, and reach thousands of buyers.",
        traderBtn: "Register as Trader",

        buyerTitle: "Register as a Buyer",
        buyerText: "Access verified traders, compare rates instantly, and connect directly.",
        buyerBtn: "Register as Buyer",

        verified1: "All traders are government-verified for authenticity.",
        verified2: "Transparent daily poultry prices updated in real-time.",
        verified3: "Direct farmer-to-buyer connections without middlemen.",
        verified4: "Secure payments with trusted partners.",
        verified5: "Fast & reliable delivery across India.",
        verified6: "Quality-controlled poultry before every dispatch."
      },
      services: {
        heroTitle: "Poultrywala – Connecting",
        heroHighlight: "Traders & Farmers",
        heroSubtitle: "Buy and sell broiler hens directly from trusted traders & farmers. Verified profiles, transparent rates & quality-controlled deliveries.",
        ourServices: "Our Services",
      
        card1Title: "Trading Platform",
        card1Desc: "Seamless connection between buyers & traders with verified profiles for trustworthy deals.",
      
        card2Title: "Quality Control",
        card2Desc: "Every batch checked for quality before delivery, ensuring only the best poultry reaches you.",
      
        card3Title: "Delivery Network",
        card3Desc: "Fast deliveries from nearest verified farms with real-time tracking.",
      
        networkTitle: "Farmers & Traders Network",
        networkText: "We connect buyers to thousands of farmers & traders across India. Find the nearest verified poultry source at transparent rates.",
        cities: ["Delhi", "Mumbai", "Lucknow", "Hyderabad", "Kolkata", "Jaipur", "Chennai", "Bengaluru"],
      
        ctaTitle: "Ready to Start Trading?",
        ctaText: "Join thousands of farmers & traders who trust Poultrywala for reliable poultry trading.",
        ctaBtn: "Register Now"
      },
      // ✅ Future Section (ReviewsSection)
      future_title: "Future of",
      future_highlight: "Poultry Trading",
      future_steps: {
        signUp: "Sign Up",
        verify: "Get Verified",
        connect: "Connect & Trade",
        track: "Track Deliveries"
      },
      future_reviews_count: "Reviews",
      future_highlight_name: "Aditya Sinha",
      future_highlight_review: "Poultrywala helped us double our trade efficiency.",
      future_highlight_info: "Verified Trader • Serving 10+ Cities",
      future_reviews: [
        { name: "Aditya Satisfaction", rating: "5.0" },
        { name: "Selena Ray", rating: "4.0" },
        { name: "Vikram Mishra", rating: "4.0" },
        { name: "Rahul Sharma", rating: "4.5" },
        { name: "Priya Verma", rating: "5.0" }
      ],
      presence_title: "10K+ Downloads on Android & iOS",
      presence_realtime: "Real Time Trading",
      presence_verified: "Verified Profiles",
      presence_online: "Online Profiles",
      presence_reviews: "All Reviews",
      presence_contracts: "Digital Contracts",

      registration_title: "Registration Form",
      registration_name: "Name",
      registration_phone: "10-digit number",
      registration_email: "Email",
      registration_state: "--Select State--",
      registration_city: "--Select City--",
      registration_role: "--Select Role--",
      registration_buyer: "Buyer",
      registration_seller: "Seller",
      registration_submit: "Submit",
      registration_submitting: "Submitting...",

      footer_contact_us: "Contact Us",
      footer_registered_office: "Registered Office:",
      footer_company_name: "Ninjafarm Services Private Limited",
      footer_address: "Registered Address – Amalner Dist Jalgaon, Maharashtra – 425401",
      footer_get_in_touch: "Get in Touch",
      footer_phone: "Phone",
      footer_email: "Email",
      footer_website: "Website",
      footer_enquiry_section: "Enquiry Section",
      footer_traders_contract: "For Traders and Contract Companies",
      footer_rights: "© 2025 Poultrywala | All Rights Reserved",

       
           navbar: {
             home: "Home",
             services: "Services",
             explore: "Explore"
           }
        

      
      

      

      

        },
      },
      hi: {
        translation: {
          home_title: "हमारी वेबसाइट पर आपका स्वागत है",
          about_title: "हमारे बारे में",
          services_title: "हमारी सेवाएँ",
          explore_title: "खोजें",
          future_title: "भविष्य की योजनाएँ",
          presence_title: "हमारी उपस्थिति",
          footer_text: "सभी अधिकार सुरक्षित",

          home: {
            tagline: "भारत का नं.1 पोल्ट्री ट्रेडिंग हब",
            subTagline: "स्मार्ट ट्रेडिंग • सुरक्षित डील्स • मजबूत नेटवर्क",
            heading: "तकनीक के साथ पोल्ट्री ट्रेडिंग में बदलाव",
            subtext:
              "भारत का पहला संगठित B2B प्लेटफॉर्म कॉन्ट्रैक्ट ब्रॉयलर ट्रेडिंग के लिए – सत्यापित पोल्ट्री व्यापारियों को जोड़ना।",
            registerText: "नवीनतम अपडेट पाने के लिए, पंजीकरण करें:",
            registerBtn: "अभी रजिस्टर करें",
          },
          about: {
            heading: "हमारे बारे में",
            description:
              "निंजाफार्म का पोल्ट्रीवाला भारत का पहला संगठित B2B डिजिटल मार्केटप्लेस है, जो लाइव ब्रॉयलर पोल्ट्री ट्रेडिंग के लिए है। हम कॉन्ट्रैक्ट पोल्ट्री फार्मिंग कंपनियों को सत्यापित पोल्ट्री व्यापारियों से जोड़ते हैं ताकि लेन-देन सहज, सुरक्षित, पारदर्शी और विश्वसनीय हों।",
            features: {
              verified: "सत्यापित प्रोफाइल",
              trading: "रियल टाइम ट्रेडिंग",
              contracts: "डिजिटल कॉन्ट्रैक्ट",
              rates: "डेली रेट्स",
              order: "पोल्ट्री ऑर्डर करें",
            },
            imageAlt: "पोल्ट्रीवाला के बारे में",
          },
          explore: {
        title: "पोल्ट्री व्यापारियों का अन्वेषण करें",
        subtitle: "विश्वसनीय सप्लायर्स की तुलना करें, आज की कीमतें देखें और तुरंत जुड़ें।",
        whyUseTitle: "Explore का उपयोग क्यों करें?",
        whyUseText: "Explore सेक्शन आपको सत्यापित पोल्ट्री व्यापारियों से रीयल-टाइम दाम देता है। सप्लायर्स की तुलना करें, रेटिंग देखें और आत्मविश्वास से सीधे जुड़ें।",
        whyChooseTitle: "सत्यापित व्यापारियों को क्यों चुनें?",

        card1Title: "भरोसा और सुरक्षा",
        card1Desc: "हर व्यापारी को सुरक्षित और विश्वसनीय ट्रेडिंग के लिए सत्यापित किया गया है।",
        card2Title: "उचित मूल्य",
        card2Desc: "रीयल-टाइम बाजार दरें, बिना किसी छुपे शुल्क या बिचौलियों के।",
        card3Title: "राष्ट्रीय नेटवर्क",
        card3Desc: "भारत के कई राज्यों में किसानों और व्यापारियों से जुड़ें।",
        card4Title: "गुणवत्ता जांच",
        card4Desc: "हर डिस्पैच से पहले सख्त गुणवत्ता जांच।",
        card5Title: "तुरंत कनेक्शन",
        card5Desc: "सत्यापित सप्लायर्स और खरीदारों से तुरंत जुड़ें।",
        card6Title: "विकास के अवसर",
        card6Desc: "हजारों खरीदारों तक पहुंचकर अपना पोल्ट्री बिजनेस बढ़ाएं।",

        ctaTitle: "भारत के विश्वसनीय पोल्ट्री मार्केटप्लेस का हिस्सा बनें",
        ctaText: "चाहे आप सप्लायर हों या खरीदार, हमारे बढ़ते नेटवर्क से जुड़ें और सत्यापित पार्टनर्स से जुड़ें।",

        traderTitle: "व्यापारी के रूप में रजिस्टर करें",
        traderText: "अपनी कंपनी लिस्ट करें, रोजाना कीमतें दिखाएं और हजारों खरीदारों तक पहुंचें।",
        traderBtn: "व्यापारी के रूप में रजिस्टर करें",

        buyerTitle: "खरीदार के रूप में रजिस्टर करें",
        buyerText: "सत्यापित व्यापारियों तक पहुंचें, तुरंत रेट्स की तुलना करें और सीधे जुड़ें।",
        buyerBtn: "खरीदार के रूप में रजिस्टर करें",

        verified1: "सभी व्यापारी प्रामाणिकता के लिए सरकारी रूप से सत्यापित हैं।",
        verified2: "रीयल-टाइम में अपडेटेड पारदर्शी दैनिक पोल्ट्री कीमतें।",
        verified3: "किसानों से सीधे खरीदारों तक, बिना बिचौलियों के।",
        verified4: "विश्वसनीय पार्टनर्स के साथ सुरक्षित भुगतान।",
        verified5: "भारत भर में तेज़ और भरोसेमंद डिलीवरी।",
        verified6: "हर डिस्पैच से पहले गुणवत्ता नियंत्रित पोल्ट्री।"
      },
      services: {
        heroTitle: "पोल्ट्रीवाला – जोड़ता है",
        heroHighlight: "व्यापारियों और किसानों को",
        heroSubtitle: "विश्वसनीय व्यापारियों और किसानों से सीधे ब्रॉयलर मुर्गियां खरीदें और बेचें। सत्यापित प्रोफाइल, पारदर्शी दरें और गुणवत्ता-नियंत्रित डिलीवरी।",
        ourServices: "हमारी सेवाएं",
      
        card1Title: "ट्रेडिंग प्लेटफ़ॉर्म",
        card1Desc: "खरीदारों और व्यापारियों के बीच निर्बाध कनेक्शन, भरोसेमंद सौदों के लिए सत्यापित प्रोफाइल।",
      
        card2Title: "गुणवत्ता नियंत्रण",
        card2Desc: "डिलीवरी से पहले हर खेप की गुणवत्ता की जाँच की जाती है ताकि केवल सर्वश्रेष्ठ पोल्ट्री ही आप तक पहुँचे।",
      
        card3Title: "डिलीवरी नेटवर्क",
        card3Desc: "निकटतम सत्यापित फ़ार्म से तेज़ डिलीवरी और रियल-टाइम ट्रैकिंग।",
      
        networkTitle: "किसानों और व्यापारियों का नेटवर्क",
        networkText: "हम पूरे भारत में हजारों किसानों और व्यापारियों से खरीदारों को जोड़ते हैं। पारदर्शी दरों पर निकटतम सत्यापित पोल्ट्री स्रोत खोजें।",
        cities: ["दिल्ली", "मुंबई", "लखनऊ", "हैदराबाद", "कोलकाता", "जयपुर", "चेन्नई", "बेंगलुरु"],
      
        ctaTitle: "क्या आप ट्रेडिंग शुरू करने के लिए तैयार हैं?",
        ctaText: "उन हजारों किसानों और व्यापारियों से जुड़ें जो पोल्ट्रीवाला पर भरोसा करते हैं।",
        ctaBtn: "अभी रजिस्टर करें"
      },
      future_title: "भविष्य",
      future_highlight: "पोल्ट्री व्यापार का",
      future_steps: {
        signUp: "साइन अप करें",
        verify: "सत्यापित हों",
        connect: "कनेक्ट करें और व्यापार करें",
        track: "डिलीवरी ट्रैक करें"
      },
      future_reviews_count: "समीक्षाएँ",
      future_highlight_name: "आदित्य सिन्हा",
      future_highlight_review: "पोल्ट्रीवाला ने हमारी व्यापार क्षमता को दोगुना कर दिया।",
      future_highlight_info: "सत्यापित व्यापारी • 10+ शहरों में सेवा",
      future_reviews: [
        { name: "आदित्य संतोष", rating: "5.0" },
        { name: "सेलेना रे", rating: "4.0" },
        { name: "विक्रम मिश्रा", rating: "4.0" },
        { name: "राहुल शर्मा", rating: "4.5" },
        { name: "प्रिया वर्मा", rating: "5.0" }
      ],
      presence_title: "10K+ डाउनलोड Android और iOS पर",
      presence_realtime: "रियल टाइम ट्रेडिंग",
      presence_verified: "वेरिफाइड प्रोफाइल",
      presence_online: "ऑनलाइन प्रोफाइल",
      presence_reviews: "सभी समीक्षाएँ",
      presence_contracts: "डिजिटल कॉन्ट्रैक्ट्स",

      registration_title: "पंजीकरण फॉर्म",
      registration_name: "नाम",
      registration_phone: "10 अंकों का मोबाइल नंबर",
      registration_email: "ईमेल",
      registration_state: "--राज्य चुनें--",
      registration_city: "--शहर चुनें--",
      registration_role: "--भूमिका चुनें--",
      registration_buyer: "खरीदार",
      registration_seller: "विक्रेता",
      registration_submit: "जमा करें",
      registration_submitting: "जमा हो रहा है...",

      footer_contact_us: "संपर्क करें",
      footer_registered_office: "पंजीकृत कार्यालय:",
      footer_company_name: "निंजाफार्म सर्विसेज प्राइवेट लिमिटेड",
      footer_address: "पंजीकृत पता – अमलनेर जिला जलगांव, महाराष्ट्र – 425401",
      footer_get_in_touch: "संपर्क में रहें",
      footer_phone: "फ़ोन",
      footer_email: "ईमेल",
      footer_website: "वेबसाइट",
      footer_enquiry_section: "पूछताछ अनुभाग",
      footer_traders_contract: "व्यापारियों और अनुबंध कंपनियों के लिए",
      footer_rights: "© 2025 पोल्ट्रीवाला | सर्वाधिकार सुरक्षित",

          navbar: {
            home: "होम",
            services: "सेवाएं",
            explore: "खोजें"
          }
       
      
      
      


        },
      },
      mr: {
        translation: {
          home_title: "आमच्या वेबसाइटवर आपले स्वागत आहे",
          about_title: "आमच्याबद्दल",
          services_title: "आमच्या सेवा",
          explore_title: "अन्वेषण करा",
          future_title: "भविष्य योजना",
          presence_title: "आमची उपस्थिती",
          footer_text: "सर्व हक्क राखीव",

          home: {
            tagline: "भारताचे नं.1 पोल्ट्री ट्रेडिंग हब",
            subTagline: "स्मार्ट ट्रेडिंग • सुरक्षित व्यवहार • मजबूत नेटवर्क",
            heading: "तंत्रज्ञानासह पोल्ट्री ट्रेडिंगमध्ये बदल",
            subtext:
              "भारताचे पहिले संघटित B2B प्लॅटफॉर्म कॉन्ट्रॅक्ट ब्रॉयलर ट्रेडिंगसाठी – प्रमाणित पोल्ट्री व्यापार्‍यांना जोडणारे.",
            registerText: "नवीनतम अपडेट मिळवण्यासाठी, नोंदणी करा:",
            registerBtn: "आत्ता नोंदणी करा",
          },
          about: {
            heading: "आमच्याबद्दल",
            description:
              "निंजाफार्मद्वारे पोल्ट्रीवाला हा भारताचा पहिला संघटित B2B डिजिटल मार्केटप्लेस आहे जो लाइव्ह ब्रॉयलर पोल्ट्री ट्रेडिंगसाठी आहे. आम्ही कॉन्ट्रॅक्ट पोल्ट्री फार्मिंग कंपन्यांना प्रमाणित पोल्ट्री व्यापाऱ्यांशी जोडतो ज्यामुळे व्यवहार सहज, सुरक्षित, पारदर्शक आणि विश्वसनीय होतात.",
            features: {
              verified: "सत्यापित प्रोफाइल",
              trading: "रिअल टाइम ट्रेडिंग",
              contracts: "डिजिटल कॉन्ट्रॅक्ट",
              rates: "दैनंदिन दर",
              order: "पोल्ट्री ऑर्डर करा",
            },
            imageAlt: "पोल्ट्रीवाला बद्दल",
          },
          explore: {
        title: "पोल्ट्री व्यापाऱ्यांचा शोध घ्या",
        subtitle: "विश्वसनीय पुरवठादारांची तुलना करा, आजचे दर पहा आणि त्वरित कनेक्ट व्हा.",
        whyUseTitle: "Explore का वापर करावा?",
        whyUseText: "Explore विभाग तुम्हाला सत्यापित पोल्ट्री व्यापाऱ्यांकडून रिअल-टाइम दर देतो. पुरवठादारांची तुलना करा, रेटिंग पहा आणि थेट कनेक्ट व्हा.",
        whyChooseTitle: "सत्यापित व्यापाऱ्यांना का निवडावे?",

        card1Title: "विश्वास आणि सुरक्षा",
        card1Desc: "प्रत्येक व्यापाऱ्याची सुरक्षित आणि विश्वासार्ह ट्रेडिंगसाठी पडताळणी केली आहे.",
        card2Title: "योग्य किंमत",
        card2Desc: "रिअल-टाइम बाजार दर, कोणतेही लपलेले शुल्क किंवा दलालांशिवाय.",
        card3Title: "राष्ट्रीय नेटवर्क",
        card3Desc: "भारतभरातील शेतकरी आणि व्यापाऱ्यांशी जोडा.",
        card4Title: "गुणवत्ता तपासणी",
        card4Desc: "प्रत्येक डिलिव्हरीपूर्वी कठोर गुणवत्ता तपासणी.",
        card5Title: "त्वरित संपर्क",
        card5Desc: "सत्यापित पुरवठादार आणि खरेदीदारांशी त्वरित जोडा.",
        card6Title: "विकासाची संधी",
        card6Desc: "हजारो खरेदीदारांपर्यंत पोहोचून तुमचा पोल्ट्री व्यवसाय वाढवा.",

        ctaTitle: "भारतातील विश्वसनीय पोल्ट्री मार्केटप्लेसचा भाग व्हा",
        ctaText: "तुम्ही पुरवठादार असाल किंवा खरेदीदार, आमच्या वाढत्या नेटवर्कशी जोडा.",

        traderTitle: "व्यापारी म्हणून नोंदणी करा",
        traderText: "तुमची कंपनी सूचीबद्ध करा, दररोजचे दर दाखवा आणि हजारो खरेदीदारांपर्यंत पोहोचा.",
        traderBtn: "व्यापारी म्हणून नोंदणी करा",

        buyerTitle: "खरेदीदार म्हणून नोंदणी करा",
        buyerText: "सत्यापित व्यापाऱ्यांपर्यंत पोहोचा, त्वरित दर तुलना करा आणि थेट जोडा.",
        buyerBtn: "खरेदीदार म्हणून नोंदणी करा",

        verified1: "सर्व व्यापारी सरकारकडून प्रमाणित आहेत.",
        verified2: "रिअल-टाइममध्ये अपडेट होणारे पारदर्शक दररोजचे पोल्ट्री दर.",
        verified3: "शेतकऱ्यांकडून थेट खरेदीदारांपर्यंत, कोणत्याही दलालांशिवाय.",
        verified4: "विश्वसनीय पार्टनर्ससोबत सुरक्षित पेमेंट.",
        verified5: "भारतभर जलद आणि विश्वासार्ह डिलिव्हरी.",
        verified6: "प्रत्येक डिलिव्हरीपूर्वी गुणवत्ता तपासलेली पोल्ट्री."
      },
      services: {
        heroTitle: "पोल्ट्रीवाला – जोडतो",
        heroHighlight: "व्यापारी आणि शेतकरी",
        heroSubtitle: "विश्वसनीय व्यापारी आणि शेतकऱ्यांकडून थेट ब्रॉयलर कोंबड्या खरेदी व विक्री करा. सत्यापित प्रोफाइल, पारदर्शक दर आणि गुणवत्ता नियंत्रित डिलिव्हरी.",
        ourServices: "आमच्या सेवा",
      
        card1Title: "ट्रेडिंग प्लॅटफॉर्म",
        card1Desc: "खरेदीदार आणि व्यापाऱ्यांमधील विश्वासार्ह सौद्यांसाठी सत्यापित प्रोफाइलसह अखंड कनेक्शन.",
      
        card2Title: "गुणवत्ता नियंत्रण",
        card2Desc: "डिलिव्हरीपूर्वी प्रत्येक खेप तपासली जाते जेणेकरून फक्त सर्वोत्तम पोल्ट्रीच तुमच्यापर्यंत पोहोचेल.",
      
        card3Title: "डिलिव्हरी नेटवर्क",
        card3Desc: "सर्वात जवळच्या सत्यापित शेतातून जलद डिलिव्हरी आणि रिअल-टाइम ट्रॅकिंग.",
      
        networkTitle: "शेतकरी आणि व्यापारी नेटवर्क",
        networkText: "आम्ही भारतातील हजारो शेतकरी आणि व्यापाऱ्यांशी खरेदीदारांना जोडतो. पारदर्शक दरात जवळचा सत्यापित पोल्ट्री स्रोत शोधा.",
        cities: ["दिल्ली", "मुंबई", "लखनऊ", "हैदराबाद", "कोलकाता", "जयपूर", "चेन्नई", "बेंगळुरू"],
      
        ctaTitle: "ट्रेडिंग सुरू करण्यास तयार आहात का?",
        ctaText: "हजारो शेतकरी आणि व्यापाऱ्यांमध्ये सामील व्हा जे पोल्ट्रीवालावर विश्वास ठेवतात.",
        ctaBtn: "आता नोंदणी करा"
      },
      future_title: "भविष्य",
       future_highlight: "पोल्ट्री व्यापाराचे",
       future_steps: {
         signUp: "साइन अप करा",
         verify: "सत्यापित व्हा",
         connect: "जोडा आणि व्यापार करा",
         track: "डिलिव्हरी ट्रॅक करा"
       },
       future_reviews_count: "पुनरावलोकने",
       future_highlight_name: "आदित्य सिन्हा",
       future_highlight_review: "पोल्ट्रीवाला मुळे आमची व्यापार क्षमता दुप्पट झाली.",
       future_highlight_info: "सत्यापित व्यापारी • 10+ शहरांत सेवा",
       future_reviews: [
         { name: "आदित्य समाधान", rating: "5.0" },
         { name: "सेलेना रे", rating: "4.0" },
         { name: "विक्रम मिश्रा", rating: "4.0" },
         { name: "राहुल शर्मा", rating: "4.5" },
         { name: "प्रिया वर्मा", rating: "5.0" }
       ],
       presence_title: "10K+ डाऊनलोड्स Android आणि iOS वर",
       presence_realtime: "रिअल टाइम ट्रेडिंग",
       presence_verified: "प्रमाणित प्रोफाइल",
       presence_online: "ऑनलाइन प्रोफाइल",
       presence_reviews: "सर्व पुनरावलोकने",
       presence_contracts: "डिजिटल करार",

       registration_title: "नोंदणी फॉर्म",
       registration_name: "नाव",
       registration_phone: "१० अंकी मोबाईल क्रमांक",
       registration_email: "ईमेल",
       registration_state: "--राज्य निवडा--",
       registration_city: "--शहर निवडा--",
       registration_role: "--भूमिका निवडा--",
       registration_buyer: "खरेदीदार",
       registration_seller: "विक्रेता",
       registration_submit: "सबमिट करा",
       registration_submitting: "सबमिट होत आहे...",

       footer_contact_us: "संपर्क साधा",
       footer_registered_office: "नोंदणीकृत कार्यालय:",
       footer_company_name: "निंजाफार्म सर्व्हिसेस प्रायव्हेट लिमिटेड",
       footer_address: "नोंदणीकृत पत्ता – अमळनेर जिल्हा जळगाव, महाराष्ट्र – 425401",
       footer_get_in_touch: "संपर्कात रहा",
       footer_phone: "फोन",
       footer_email: "ईमेल",
       footer_website: "वेबसाईट",
       footer_enquiry_section: "चौकशी विभाग",
       footer_traders_contract: "व्यापारी आणि करार कंपन्यांसाठी",
       footer_rights: "© 2025 पोल्ट्रीवाला | सर्व हक्क राखीव",

      
           navbar: {
             home: "मुख्यपृष्ठ",
             services: "सेवा",
             explore: "एक्सप्लोर करा"
           }
      
       
       


           

        },
      },
      ta: {
        translation: {
          home_title: "எங்கள் இணையதளத்திற்கு வரவேற்கிறோம்",
          about_title: "எங்களை பற்றி",
          services_title: "எங்கள் சேவைகள்",
          explore_title: "ஆராயுங்கள்",
          future_title: "எதிர்கால திட்டங்கள்",
          presence_title: "எங்கள் இருப்பிடம்",
          footer_text: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",

          home: {
            tagline: "இந்தியாவின் நம்பர்.1 கோழி வர்த்தக மையம்",
            subTagline: "ஸ்மார்ட் வர்த்தகம் • பாதுகாப்பான ஒப்பந்தங்கள் • வலுவான நெட்வொர்க்",
            heading: "தொழில்நுட்பத்துடன் கோழி வர்த்தகத்தை மாற்றுகிறது",
            subtext:
              "இந்தியாவின் முதல் ஒழுங்கமைக்கப்பட்ட B2B தளம் ஒப்பந்த ப்ராய்லர் வர்த்தகத்திற்காக – சரிபார்க்கப்பட்ட கோழி வர்த்தகர்களை இணைக்கும்.",
            registerText: "சமீபத்திய புதுப்பிப்புகளை பெற, பதிவு செய்யவும்:",
            registerBtn: "இப்போது பதிவு செய்யவும்",
          },
          about: {
            heading: "எங்களை பற்றி",
            description:
              "நிஞ்ஜாஃபார்ம் வழங்கும் Poultrywala என்பது இந்தியாவின் முதல் ஒழுங்கமைக்கப்பட்ட B2B டிஜிட்டல் சந்தையாகும், இது நேரடி ப்ராய்லர் கோழி வர்த்தகத்திற்காக உள்ளது. எங்களால் ஒப்பந்த கோழி பண்ணை நிறுவனங்கள் சரிபார்க்கப்பட்ட வர்த்தகர்களுடன் இணைக்கப்படுகின்றன, இதன் மூலம் பரிவர்த்தனைகள் தடையில்லாமல், பாதுகாப்பாக, வெளிப்படையாக, நம்பகமாக நடைபெறும்.",
            features: {
              verified: "சரிபார்க்கப்பட்ட ப்ரொஃபைல்கள்",
              trading: "உண்மைக் கால வர்த்தகம்",
              contracts: "டிஜிட்டல் ஒப்பந்தங்கள்",
              rates: "தினசரி விகிதங்கள்",
              order: "கோழி ஆர்டர் செய்யவும்",
            },
            imageAlt: "Poultrywala பற்றி",
          },
          explore: {
        title: "கோழி வியாபாரிகளை ஆராயுங்கள்",
        subtitle: "நம்பகமான சப்ளையர்களை ஒப்பிடுங்கள், இன்றைய விலைகளை சரிபார்க்கவும், உடனடியாக இணைக.",
        whyUseTitle: "Explore ஏன் பயன்படுத்த வேண்டும்?",
        whyUseText: "Explore பகுதி உங்களுக்கு சரிபார்க்கப்பட்ட கோழி வியாபாரிகளிடமிருந்து நேரடி விலைகளை வழங்குகிறது. சப்ளையர்களை ஒப்பிடுங்கள், மதிப்பீடுகளை சரிபார்க்கவும் மற்றும் நேரடியாக இணைக.",
        whyChooseTitle: "சரிபார்க்கப்பட்ட வியாபாரிகளை ஏன் தேர்வு செய்ய வேண்டும்?",

        card1Title: "நம்பிக்கை மற்றும் பாதுகாப்பு",
        card1Desc: "ஒவ்வொரு வியாபாரியும் பாதுகாப்பான மற்றும் நம்பகமான வர்த்தகத்திற்காக சரிபார்க்கப்பட்டவர்.",
        card2Title: "நியாயமான விலை",
        card2Desc: "மறைக்கப்பட்ட கட்டணங்கள் அல்லது நடுவிலாளிகளின்றி நேரடி சந்தை விலைகள்.",
        card3Title: "தேசிய நெட்வொர்க்",
        card3Desc: "இந்தியாவின் பல மாநிலங்களில் உள்ள விவசாயிகள் மற்றும் வியாபாரிகளுடன் இணைக.",
        card4Title: "தரச் சோதனை",
        card4Desc: "ஒவ்வொரு அனுப்புதலுக்கும் முன் கடுமையான தரச் சோதனை.",
        card5Title: "உடனடி இணைப்பு",
        card5Desc: "சரிபார்க்கப்பட்ட சப்ளையர்கள் மற்றும் வாங்குபவர்களுடன் உடனடியாக இணையுங்கள்.",
        card6Title: "வளர்ச்சி வாய்ப்புகள்",
        card6Desc: "ஆயிரக்கணக்கான வாங்குபவர்களை அடைந்து உங்கள் கோழி வணிகத்தை விரிவாக்குங்கள்.",

        ctaTitle: "இந்தியாவின் நம்பகமான கோழி சந்தையின் ஒரு பகுதியாகுங்கள்",
        ctaText: "நீங்கள் சப்ளையராக இருந்தாலும் அல்லது வாங்குபவராக இருந்தாலும், எங்கள் வளர்ந்து வரும் நெட்வொர்க்கில் இணையுங்கள்.",

        traderTitle: "வியாபாரியாக பதிவு செய்யுங்கள்",
        traderText: "உங்கள் நிறுவனத்தை பட்டியலிடுங்கள், தினசரி விலைகளை காட்டுங்கள் மற்றும் ஆயிரக்கணக்கான வாங்குபவர்களை அடையுங்கள்.",
        traderBtn: "வியாபாரியாக பதிவு செய்யுங்கள்",

        buyerTitle: "வாங்குபவராக பதிவு செய்யுங்கள்",
        buyerText: "சரிபார்க்கப்பட்ட வியாபாரிகளை அணுகவும், விலைகளை உடனடியாக ஒப்பிடுங்கள் மற்றும் நேரடியாக இணையுங்கள்.",
        buyerBtn: "வாங்குபவராக பதிவு செய்யுங்கள்",

        verified1: "அனைத்து வியாபாரிகளும் அரசால் சரிபார்க்கப்பட்டவர்கள்.",
        verified2: "உண்மையான நேரத்தில் புதுப்பிக்கப்படும் வெளிப்படையான தினசரி கோழி விலை.",
        verified3: "நடுவிலாளிகள் இன்றி விவசாயிகளிடமிருந்து நேரடியாக வாங்குபவர்களுக்கு.",
        verified4: "நம்பகமான கூட்டாளர்களுடன் பாதுகாப்பான கட்டணங்கள்.",
        verified5: "இந்திய முழுவதும் விரைவான மற்றும் நம்பகமான டெலிவரி.",
        verified6: "ஒவ்வொரு அனுப்புதலுக்கும் முன் தரக் கட்டுப்படுத்தப்பட்ட கோழி."
      },
      services: {
        heroTitle: "போல்ட்ரிவாலா – இணைக்கும்",
        heroHighlight: "வியாபாரிகள் மற்றும் விவசாயிகள்",
        heroSubtitle: "நம்பகமான வியாபாரிகள் மற்றும் விவசாயிகளிடமிருந்து நேரடியாக பிராய்லர் கோழிகளை வாங்கவும் விற்கவும். சரிபார்க்கப்பட்ட சுயவிவரங்கள், வெளிப்படையான விலை மற்றும் தரக் கட்டுப்பாட்டுடன் கூடிய விநியோகங்கள்.",
        ourServices: "எங்கள் சேவைகள்",
      
        card1Title: "வர்த்தக தளம்",
        card1Desc: "வாங்குபவர்கள் மற்றும் வியாபாரிகளுக்கு இடையிலான நம்பகமான ஒப்பந்தங்களுக்கு சரிபார்க்கப்பட்ட சுயவிவரங்களுடன் தளர்வான இணைப்பு.",
      
        card2Title: "தரக் கட்டுப்பாடு",
        card2Desc: "விநியோகத்திற்கு முன் ஒவ்வொரு தொகுதியும் பரிசோதிக்கப்படுகிறது, சிறந்த கோழி மட்டுமே உங்களை அடையுமாறு உறுதி செய்கிறது.",
      
        card3Title: "விநியோக வலைப்பின்னல்",
        card3Desc: "அருகிலுள்ள சரிபார்க்கப்பட்ட பண்ணைகளில் இருந்து விரைவான விநியோகங்கள் மற்றும் நேரடி கண்காணிப்பு.",
      
        networkTitle: "விவசாயிகள் மற்றும் வியாபாரிகள் வலைப்பின்னல்",
        networkText: "இந்தியாவில் ஆயிரக்கணக்கான விவசாயிகள் மற்றும் வியாபாரிகளுடன் வாங்குபவர்களை நாங்கள் இணைக்கிறோம். வெளிப்படையான விலைகளில் அருகிலுள்ள சரிபார்க்கப்பட்ட கோழி ஆதாரத்தை கண்டறியுங்கள்.",
        cities: ["டெல்லி", "மும்பை", "லக்னோ", "ஹைதராபாத்", "கொல்கத்தா", "ஜெய்ப்பூர்", "சென்னை", "பெங்களூரு"],
      
        ctaTitle: "வர்த்தகம் தொடங்க தயாரா?",
        ctaText: "நம்பகமான கோழி வர்த்தகத்திற்காக போல்ட்ரிவாலாவை நம்பும் ஆயிரக்கணக்கான விவசாயிகள் மற்றும் வியாபாரிகளில் சேரவும்.",
        ctaBtn: "இப்போது பதிவு செய்க"
      },
      future_title: "எதிர்காலம்",
       future_highlight: "கோழி வர்த்தகத்தின்",
       future_steps: {
         signUp: "பதிவு செய்யவும்",
         verify: "சரிபார்க்கப்படுக",
         connect: "இணைந்து வர்த்தகம் செய்யவும்",
         track: "டெலிவரி கண்காணிக்கவும்"
       },
       future_reviews_count: "விமர்சனங்கள்",
       future_highlight_name: "ஆதித்யா சின்ஹா",
       future_highlight_review: "போல்ட்ரிவாலா எங்கள் வியாபார திறனை இரட்டிப்பு செய்தது.",
       future_highlight_info: "சரிபார்க்கப்பட்ட வர்த்தகர் • 10+ நகரங்களில் சேவை",
       future_reviews: [
         { name: "ஆதித்யா திருப்தி", rating: "5.0" },
         { name: "செலினா ரே", rating: "4.0" },
         { name: "விக்ரம் மிஷ்ரா", rating: "4.0" },
         { name: "ராஹுல் ஷர்மா", rating: "4.5" },
         { name: "ப்ரியா வர்மா", rating: "5.0" }
       ],
       presence_title: "10K+ பதிவிறக்கங்கள் Android & iOS-இல்",
       presence_realtime: "உடனடி வர்த்தகம்",
       presence_verified: "சரிபார்க்கப்பட்ட சுயவிவரங்கள்",
       presence_online: "ஆன்லைன் சுயவிவரங்கள்",
       presence_reviews: "அனைத்து விமர்சனங்கள்",
       presence_contracts: "டிஜிட்டல் ஒப்பந்தங்கள்",


       registration_title: "பதிவு படிவம்",
       registration_name: "பெயர்",
       registration_phone: "10 இலக்க எண்",
       registration_email: "மின்னஞ்சல்",
       registration_state: "--மாநிலத்தை தேர்வுசெய்க--",
       registration_city: "--நகரத்தை தேர்வுசெய்க--",
       registration_role: "--பாத்திரத்தை தேர்வுசெய்க--",
       registration_buyer: "வாங்குபவர்",
       registration_seller: "விற்குபவர்",
       registration_submit: "சமர்ப்பிக்கவும்",
       registration_submitting: "சமர்ப்பிக்கப்பட்டு கொண்டிருக்கிறது...",

       footer_contact_us: "எங்களை தொடர்பு கொள்ள",
       footer_registered_office: "பதிவு செய்யப்பட்ட அலுவலகம்:",
       footer_company_name: "நிஞ்சாஃபார்ம் சர்வீசஸ் பிரைவேட் லிமிடெட்",
       footer_address: "பதிவு செய்யப்பட்ட முகவரி – அமல்னேர், ஜல்கான் மாவட்டம், மகாராஷ்டிரா – 425401",
       footer_get_in_touch: "தொடர்பில் இருங்கள்",
       footer_phone: "தொலைபேசி",
       footer_email: "மின்னஞ்சல்",
       footer_website: "இணையதளம்",
       footer_enquiry_section: "வினவல் பிரிவு",
       footer_traders_contract: "வர்த்தகர்கள் மற்றும் ஒப்பந்த நிறுவனங்களுக்கு",
       footer_rights: "© 2025 போல்ட்ரிவாலா | அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",


            navbar: {
              home: "முகப்பு",
              services: "சேவைகள்",
              explore: "ஆராய்க"
            }
       
       
       
       



        },
      },
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
