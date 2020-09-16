import comp1 from '../Images/comp1.png'
import comp2 from '../Images/comp2.png'
import boats from '../Images/dave-hoefler-boats.jpg'
import stormroad from '../Images/dave-hoefler-stormroad.jpg'
import sunset from '../Images/dave-hoefler-sunset.jpg'

const HowItWorks = {
  aboutContentBlocks: [
    {
      title: "Searching with CDP",
      subtitle:"Transparency in your City",
      body: "Municipal law affects you far more than you might think. It governs bike lanes, police, local taxes, public transport, and more. With CDP it is easy to find the information you’re looking for, making it simpler to stay informed and hold your representatives accountable.",
      imageSrc:boats
    },
    {
      title: "Making City Councils More Accessible",
      subtitle:"A Searchable Archive",
      body: "CDP organizes city council meeting, legislation, and member information into a highly searchable and easy to use format. We take clunky and complicated government-provided data and transform it into a clean, usable archive of your city council’s actions.",
      imageSrc:stormroad
    },
    {
      title: "How CDP Works",
      subtitle:"Scraping Data and Serving Transcripts",
      body: "CDP was designed to plug into most city council public resources to make searching the data simpler. Over 8,000 cities across the United States store their council resources in a way compatible with simple setup of a CDP instance. After instance setup, CDP combs through recorded council meetings and creates searchable text transcripts.",
      imageSrc:sunset
    }
  ],
  howToUseItContentBlocks: [
    {
      title: "Multiple Search Types",
      subtitle:"Meetings, Legislation, or Council Members",
      body: "CDP can be used to find information relating to city council meetings, pieces of legislation, or members of the council. Start by typing in your keyword and selecting either legislation or meetings. Similar to a Google search, CDP will use the keyword(s) provided to return relevant content.",
      imageSrc:comp1
    },
    {
      title: "Find Information Faster with Filters",
      subtitle:"Customizing your search",
      body: "CDP works best when you use filters to refine your search results. Take advantage of the filters for each search type and use sorting options to customize your experience. Once you’ve found an interesting result, click on the item to get more details.",
      imageSrc:comp1
    },
    {
      title: "Transparent, Connected Information",
      subtitle:"How CDP Scrapes Data and Serves Transcripts",
      body: "From the full details page, you can follow on-page links to see how different meetings, pieces of legislation, and members of the city council are connected.",
      imageSrc:comp2
    }
  ],
  howToBringItToYourCityContentBlocks: [
    {
      title: "Connecting CDP to Your Local City Council",
      subtitle:"Available for over 8,000 cities across the USA",
      body: "CDP was designed to plug into most city council public resources to make searching the data simpler. In order to get access for your city, visit the project’s GitHub to learn more about setting up a new instance of CDP.",
      cardActionDestination: "https://github.com/CouncilDataProject",
      imageSrc:comp1
    },
  ],
  howToHelpContentBlocks: [
    {
      title: "Use Your Local CDP Instance",
      subtitle:"Shine a Light on your Local Council",
      body: "Council Data Project's purpose is to increase political accountability through transparency. The more citizens we have looking at their local councils, the more we can consider CDP a success.",
      imageSrc:comp1
    },
    {
      title: "Provide Feedback",
      subtitle:"A Process of Iterative Improvement",
      body: "CDP is not finished. We want to improve its capabilities to ensure its usefulness for years to come. A huge part of that is feedback from the community. If you want to help us, let us know what to work on next!",
      imageSrc:comp1
    },
    {
      title: "Get Involved",
      subtitle:"Grow Your Skills as a CDP Volunteer",
      body: "As an open-source, non-profit project, CDP can always use additional support from volunteers. CDP currently has needs for developers, designers, researchers, marketers, and any other role you think could add value. CDP loves working with people that are passionate about improving citizen access to information, so don’t hesitate to reach out!",
      imageSrc:comp1
    },
  ]
}

export { HowItWorks }