import {
  MdLocalFireDepartment,
  MdOfflineBolt,
  MdOnlinePrediction,
  MdStackedLineChart,
} from "react-icons/md";

const exploreRouterMenu = [
  {
    sectionId: "Movies",
    sectionLabel: "Explore Movies",
    sectionItems: [
      {
        path: "movie",
        label: "Popular",
      
        Icon: MdLocalFireDepartment,
      },
      {
        path: "movie",
        label: "Latest",
        
        Icon: MdOfflineBolt,
      },
      {
        path: "movie",
        label: "Upcoming",
        
        Icon: MdOnlinePrediction,
      },
    ],
  },
  {
    sectionId: "Shows",
    sectionLabel: "Explore TV Shows",
    sectionItems: [
      {
        path: "tv",
        label: "Popular",
      
        Icon: MdLocalFireDepartment,
      },
      {
        path: "tv",
        label: "Top Rated",
        
        Icon: MdStackedLineChart,
      },
    ],
  },
];

export default exploreRouterMenu;