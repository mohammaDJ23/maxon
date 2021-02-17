import icon1 from "../../assets/images/icon-1.png";
import icon2 from "../../assets/images/icon-2.png";
import icon3 from "../../assets/images/icon-3.png";
import icon4 from "../../assets/images/icon-4.png";
import flower from "../../assets/images/flower.png";
import fish from "../../assets/images/fish.png";
import man from "../../assets/images/man.png";
import hat from "../../assets/images/hat.png";
import bag from "../../assets/images/bag.png";
import shirt from "../../assets/images/shirt.png";
import cup from "../../assets/images/cup.png";
import deborahParkes from "../../assets/images/deborahParkes.png";
import kathrynPatrick from "../../assets/images/kathrynPatrick.png";
import wendyFrazier from "../../assets/images/wendyFrazier.png";
import newsOne from "../../assets/images/newsOne.png";
import newsTwo from "../../assets/images/newsTwo.png";
import newsThree from "../../assets/images/newsThree.png";
import comment from "../../assets/images/comment.png";
import like from "../../assets/images/like.png";
import locationIcon from "../../assets/images/locationIcon.png";
import phoneIcon from "../../assets/images/phoneIcon.png";
import emailIcon from "../../assets/images/emailIcon.png";
import logoOne from "../../assets/images/logo-1.png";
import logoTwo from "../../assets/images/logo-2.png";
import logoThree from "../../assets/images/logo-3.png";
import logoFour from "../../assets/images/logo-4.png";
import instaFeedOne from "../../assets/images/insta-feed-1.png";
import instaFeedTwo from "../../assets/images/insta-feed-2.png";
import instaFeedThree from "../../assets/images/insta-feed-3.png";
import instaFeedFour from "../../assets/images/insta-feed-4.png";
import instaFeedFive from "../../assets/images/insta-feed-5.png";
import instaFeedSix from "../../assets/images/insta-feed-6.png";
import address from "../../assets/images/address.png";
import phone from "../../assets/images/phone.png";
import email from "../../assets/images/email.png";
import * as actionType from "../actions/actionType";
import utility from "../../share/utility";

const initialState = {
  specialFeatures: {
    uniqueDesign: {
      image: icon1,
      backgroundColor: "#ffeee2",
      title: "Unique Design",
      summary:
        "Bring creature let Fish to grass under the given a void from deep form greater and days give upon day light likeness.",
    },
    standardQuality: {
      image: icon2,
      backgroundColor: "#e6dcff",
      title: "Standard Quality",
      summary:
        "Bring creature let Fish to grass under the given a void from deep form greater and days give upon day light likeness.",
    },
    secureService: {
      image: icon3,
      backgroundColor: "#caf6ff",
      title: "Secure Service",
      summary:
        "Bring creature let Fish to grass under the given a void from deep form greater and days give upon day light likeness.",
    },
    support: {
      image: icon4,
      backgroundColor: "#ffe9f3",
      title: "24/7 Support",
      summary:
        "Bring creature let Fish to grass under the given a void from deep form greater and days give upon day light likeness.",
    },
  },
  clientWorkExperience: {
    abstractDesign: {
      image: flower,
      texts: {
        title: "ABSTRACT DESIGN",
        textBold: "For You beast you herb whales she would two you are",
        pallidText:
          "Seasons let creeping seasons was green a tree called bring created Shall made whales very green may above dominion seed. Day won out. Doesn creeping can called she very. Beast creeping. air secod without, good shall two forth a stars every have won't seed be forth Tree fruitful may May light that thating",
        learnMore: "LEARN MORE",
      },
      direction: "right",
    },
    digitalDesign: {
      image: fish,
      texts: {
        title: "DIGITAL DESIGN",
        textBold: "Green earth him and us whose bring us behold whales",
        pallidText:
          "Seasons let creeping seasons was green a tree called bring created Shall made whales very green may above dominion seed. Day won out. Doesn creeping can called she very. Beast creeping. air secod without, good shall two forth a stars every have won't seed be forth Tree fruitful may May light that thating",
        learnMore: "LEARN MORE",
      },
      direction: "left",
    },
    graphicDesign: {
      image: man,
      texts: {
        title: "GRAPHIC DESIGN",
        textBold: "Saw to fill that the beast Water winged so fruitful tree",
        pallidText:
          "Seasons let creeping seasons was green a tree called bring created Shall made whales very green may above dominion seed. Day won out. Doesn creeping can called she very. Beast creeping. air secod without, good shall two forth a stars every have won't seed be forth Tree fruitful may May light that thating",
        learnMore: "LEARN MORE",
      },
      direction: "right",
    },
  },
  works: {
    satisfiedClient: {
      image: hat,
      number: 92,
      title: "SATISFIED CLIENT",
    },
    totalProjects: {
      image: bag,
      number: 85,
      title: "TOTAL PROJECT",
    },
    workCop: {
      image: shirt,
      number: 67,
      title: "WORK COMPLETED",
    },
    workCopl: {
      image: cup,
      number: 85,
      title: "WORK COMPLETED",
    },
  },
  teamMembers: {
    deborahParkes: {
      image: deborahParkes,
      title: "Deborah Parkes",
      job: "software developer",
      community: ["facebook", "twitter", "skype"],
    },
    kathrynPatrick: {
      image: kathrynPatrick,
      title: "Kathryn Patrick",
      job: "software developer",
      community: ["facebook", "twitter", "skype"],
    },
    wendyFrazier: {
      image: wendyFrazier,
      title: "Wendy Frazier",
      job: "software developer",
      community: ["facebook", "twitter", "skype"],
    },
  },
  latestNews: {
    newsOne: {
      image: newsOne,
      icons: [comment, like],
      design: ["DESIGN", "JULY 15, 2019"],
      title: "Make dry it is saying earth lights great brought",
      cmAndLi: ["4 COMMENTS", "15 LIKE"],
    },
    newsTwo: {
      image: newsTwo,
      icons: [comment, like],
      design: ["DESIGN", "JULY 15, 2019"],
      title: "Make dry it is saying earth lights great brought",
      cmAndLi: ["4 COMMENTS", "15 LIKE"],
    },
    newsThree: {
      image: newsThree,
      icons: [comment, like],
      design: ["DESIGN", "JULY 15, 2019"],
      title: "Make dry it is saying earth lights great brought",
      cmAndLi: ["4 COMMENTS", "15 LIKE"],
    },
  },
  contactUs: {
    inputs: {
      nameInput: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Full Name",
        },
        validation: {
          required: true,
          minLength: 6,
        },
        value: "",
        valid: false,
        touch: false,
      },
      phoneInput: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Phone",
        },
        validation: {
          required: true,
          minLength: 6,
          isNumber: true,
        },
        value: "",
        valid: false,
        touch: false,
      },
      emailInput: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email",
        },
        validation: {
          required: true,
          minLength: 6,
          isEmail: true,
        },
        value: "",
        valid: false,
        touch: false,
      },
      commentInput: {
        elementType: "textarea",
        elementConfig: {
          type: "textarea",
          placeholder: "Your Message",
        },
        validation: {},
        value: "",
        valid: "",
        touch: "",
      },
    },
    locationInformation: {
      location: {
        icon: locationIcon,
        title: "123 Main Street, 310 USA 12345",
      },
      phone: {
        icon: phoneIcon,
        title: "+ 01 - 190 - 2258 - 2658",
      },
      email: {
        icon: emailIcon,
        title: "Examp@creativeagn.com",
      },
    },
  },
  logos: {
    logoOne,
    logoTwo,
    logoThree,
    logoFour,
  },
  footerWidget: {
    about: {
      title: "MAXON",
      info: [
        "Evening creature waters unto fill deep man given divided whales man kind Winged open us and there to multiply land evening under",
      ],
      images: [],
      icons: [],
    },
    ourService: {
      title: "Our Service",
      info: [
        "Frontend Developing, Graphic Design, Software Developing, Digital Marketing, Wordpress Developing",
      ],
      images: [],
      icons: [],
    },
    instagramFeed: {
      title: "Instagram feed",
      info: [],
      images: [
        instaFeedOne,
        instaFeedTwo,
        instaFeedThree,
        instaFeedFour,
        instaFeedFive,
        instaFeedSix,
      ],
      icons: [],
    },
    contactInfo: {
      title: "Contact Info",
      info: [
        "67 Sasha Cove,67 Sasha Cove Eest, Andrewburgh, ML11 DB innings West pink city",
        "+02 639 4982 2698 - 2",
        "info@themeies.com",
      ],
      images: [],
      icons: [address, phone, email],
    },
  },
};

const validation = (value, rule) => {
  let isValid = true;

  if (rule.required) {
    isValid = value.trim().toLowerCase() !== "" && isValid;
  }

  if (rule.minLength) {
    isValid = value.length >= rule.minLength && isValid;
  }

  if (rule.isNumber) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  if (rule.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};

const validationHandler = (state, action) => {
  const secFour = utility(state.contactUs.inputs[action.inputNames], {
    value: action.value,
    touch: true,
    valid: validation(
      action.value,
      state.contactUs.inputs[action.inputNames].validation
    ),
  });

  const secThree = utility(state.contactUs.inputs, {
    [action.inputNames]: secFour,
  });

  const secTwo = utility(state.contactUs, { inputs: secThree });
  return utility(state, { contactUs: secTwo });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FORM_VALIDATION:
      return validationHandler(state, action);
    default:
      return state;
  }
};

export default reducer;
