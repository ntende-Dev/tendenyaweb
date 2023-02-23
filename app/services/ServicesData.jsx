import {
  MdOutlineDesignServices,
  MdOutlineDeveloperMode,
  MdOutlineBrandingWatermark,
  MdOutlineOndemandVideo,
} from "react-icons/md";

export const Data = [
  {
    id: 1,
    service: "Branding & Logo Design",
    description:
      "We offer unique, professional and eye-catching logo designs that are representative of a brand's identity and values.",
    icon: <MdOutlineDesignServices className="ikon" />,
  },
  {
    id: 2,
    service: "Web & Mobile App Development",
    description:
      "We offer full-service solution for creating and maintaining custom websites that are attractive, functional, and user-friendly.",
    icon: <MdOutlineDeveloperMode className="ikon" />,
  },

  {
    id: 3,
    service: "UI/UX Design",
    description:
      "We offer UX/UI design services to improve the overall user experience of your website or app by creating interfaces that are both functional and aesthetically pleasing.",
    icon: <MdOutlineBrandingWatermark className="ikon" />,
  },

  {
    id: 4,
    service: "Video, Motion Graphics and Animation",
    description:
      "We help create, edit and produce promotional videos, explainer videos, and corporate videos. We also produce animated graphics for videos and commercials.",
    icon: <MdOutlineOndemandVideo className="ikon" />,
  },
];
