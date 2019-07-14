const portfolioItems = {
  test: {
    name: "Test Project",
    company: "Quora",
    year: "1984",
    context:
      "Proin nec massa volutpat mauris placerat vulputate eget at libero. Suspendisse sit amet ullamcorper enim, eu semper tellus. Suspendisse facilisis sit amet arcu ut accumsan. Vivamus vel finibus nibh. Maecenas mollis, nisi vitae imperdiet maximus, metus tortor vulputate arcu, vel consequat elit massa sit amet nibh. Aenean at enim arcu. ",
    role:
      "In vel accumsan tortor. Suspendisse potenti. Aliquam mauris mi, pellentesque ac interdum sed, sagittis in est. Sed sagittis ac ligula non suscipit. Morbi non tortor sed urna ullamcorper fringilla ut a libero. Aenean feugiat quam vel nulla elementum, sit amet condimentum metus consectetur. Aenean eget feugiat sem.",
    work: [
      {
        queryKey: "astronaut",
        caption: "This is a caption"
      },
      {
        queryKey: "gatsbyIcon",
        caption: "This is a caption also"
      }
    ],
    results:
      "Suspendisse ornare nunc lectus, non tincidunt nunc scelerisque ac. Ut maximus vulputate tempus. Mauris at est sed metus eleifend cursus. Integer et lorem dapibus, congue massa quis, vestibulum augue. Duis mollis ipsum vitae nunc ornare, ac posuere ligula pharetra. Aliquam ultricies arcu non dolor mollis tristique."
  },

  quoraDesign: {
    link: "/portfolio/quoraDesign",
    name: "Design at Quora",
    company: "Quora",
    year: "2010 - 2014",
    context:
      "I joined Quora as the second product designer and 11th employee, and saw the company grow to over 200 employees and 200 million monthly unique users. As an IC designer I worked on several early and critical pieces of the platform, including the first system for matching open questions with experts, the first content moderation tools, the first full-text search, and hundreds of A/B tests to increase growth and engagement.",
    role:
      "For all design projects, I worked on product definition with a PM, designed all the UI and interactions, and implemented the front-end in Python, HTML, CSS and Javascript.",
    work: [
      {
        queryKey: "quoraDigest",
        caption:
          "I designed the first version of the Quora Digest, a weekly selection of personalized content. Over years of iteration and improvement, this product eventually drove a significant amount of Quora's weekly active users."
      },
      {
        queryKey: "quoraA2A",
        caption:
          "As the community grew, people needed a way to see others who could answer their questions. Working closely with an engineer, I helped plan the algorithm to recommend relevant experts, and designed the UI to show those suggestions along with metadata about their expertise and likelihood to answer. We also launched a currency system to rate limit requests."
      },
      {
        queryKey: "quoraSearch",
        caption:
          "Quora's search bar queried across multiple content types: questions, answers, topics and users. A search results page, added later, also queried answer text."
      },
      {
        queryKey: "quoraModeration",
        caption:
          "As content grew rapidly, Quora needed a quality control system in two parts: A user-facing Report feature, with a limited selection of options chosen to be simple and comprehensive; A backend queue for our paid moderators to rapidly and accurately evaluate reported content (not pictured here due to NDA)."
      }
    ]
  },

  quoraDesignManagement: {
    link: "/portfolio/quoraDesignManagement",
    name: "Design Management at Quora",
    company: "Quora",
    year: "2014 - 2017",
    context:
      "I was the second Design Manager at Quora, managing a team of product designers and UI engineers. I worked on team process (design critiques, hiring, interviewing, onboarding) and supported a team of Product Designers in their career growth and project execution. In my final year, I was the team lead for a cross-functional initiative to make Quora more useful for demonstrating professional reputatio and expertise.",
    role:
      "The projects below were led by a designer on my team. I offered guidance and critique on their work.",
    work: [
      {
        queryKey: "quoraQuestionHighlights",
        caption:
          "Writers have many choices for where to spend their limited attention, and we wanted to give them tools to understand if a question was 'important' enough to merit their time. Jackson imagined and built Question Highlights, showing a question's popularity and incentive to be answered. I helped Jackson construct A/B tests for different combinations of metadata, and balance those results against other product considerations."
      },
      {
        queryKey: "quoraTopicFAQs",
        caption:
          "With thousands of questions on each topic, it became hard to get an introduction or overview to a new area. Xinran worked on a large team building Topic FAQs, a community-edited list of common and frequently asked questions in a given topic. I worked with Xinran to think through the large product questions (e.g. 'What should count as a common question?'), the moderation rules for community-edited spaces, and the technical implementation of the list editor."
      },
      {
        queryKey: "quoraMostViewedWriters",
        caption:
          "Quora's most active writers devoted countless hours to sharing their knowledge on commonly-asked questions. We wanted to celebrate those achievements, and motivate others to do the same in their areas of expertise. Jackson led a project to create a leaderboard of writers called Most Viewed Writers, a list of writers in a topic area, ranked by the views on their answers. I supported Jackson as he and the team considered how to best incentivize the type of writing we wanted, and how to tailor the product's mechanics to achieve desired outcomes."
      },
      {
        queryKey: "quoraReadingList",
        caption:
          "With too much content to read in one sitting, our users were asking for a way to save an answer for later. Diana built Reading List which created a 'Read Later; button, and an easily-accessible feed of answers that had been marked to read. I worked with Diana on choosing the algorithm that powered this feed, and how to position the feature against other prominent actions on answers."
      },
      {
        queryKey: "quoraAnswerPages",
        caption:
          "We wanted writers to feel proud of their work, and have a dedicated page to share without the distraction of other answers to the same question. Nikki designed a clean & simple Answer Page that made a Quora answer feel like a blog post. I supported her by giving feedback on the visual details of this page, and entry points from other parts of the product."
      },
      {
        queryKey: "quoraZenMode",
        caption:
          "Writers spend many hours crafting their longest answers, and we wanted to give them a minimal canvas free of distractions. Jackson designed and implemented Zen Mode, a way to focus fully on writing. I gave feedback on interaction details, and helped understand and push through limitations of our front-end infrstraucture."
      },
      {
        queryKey: "quoraContentModeration",
        caption:
          "Scaling Quora's community required new moderation systems. Diana designed user-facing touchpoints to inform and educate violators for how they could improve. I supported her by helping develop Quora's overall approach to moderation (including an in-house team of content moderators), and in running user tests to shape the language and messaging strategy."
      },
      {
        queryKey: "quoraQuestionDownvoting",
        caption:
          "Quora's ranking algorithms depended on having some negative signal on problematic content. Kah Hong simplified a complex set of tools into one simple link called Question Downvote, which both collected ranking signal and empowered users to clean up their own experience. I helped Kah Hong consider the full landscape of ranking signal features on Quora, and how to position Downvoting within that landscape."
      },
      {
        queryKey: "quoraCredentials",
        caption:
          "Real-world reputation is often displayed using titles bestowed by trusted organizations, e.g. “Professor of Astronomy at Cambridge.” Quora had a way to display a title next to an answer, with a freeform box that an author could write whatever they wanted. The freeform format, however, led to uses of humor and social signaling rather than earnest displays of expertise: For instance, in a subject like music we saw more “Ringo was unappreciated” than “Have been writing a music blog since 2007.” To encourage more dispalys of experise, we leaned on the power of social modeling and good defaults. Jackson designed and built a feature called Credentials, which replaced the freeform text field with a structured form that guided people to choose their experience from dropdown fields."
      },
      {
        queryKey: "quoraTakingQuestions",
        caption:
          "In user interviews, we heard one thing repeatedly: It’s incredibly motivating to get the “perfect” question, the one that you feel put on earth to answer. The concept of an “Ask Me Anything” exists on other platforms (most notably on Reddit) but the topic graph on Quora gave us an opportunity to make AMAs that stayed limited to specific domains. The team built Taking Questions, a feature that allowed anyone to specify what they wanted to answer about, generating a public indication (and notifications) with a limited time window to increase scarcity and encourage question liquidity."
      }
    ]
  },

  retargeting: {
    link: "/portfolio/retargeting",
    name: "Retargeting at Hustle",
    company: "Hustle",
    year: "2019",
    context:
      "Our clients needed to link multiple SMS campaigns together, to have a sophisticated conversation across multiple steps in a journey, often with complex boolean targeting of certain groups, e.g. 'Message every donor to our campaign who has given over $100, lives in New Jersey, and hasn't yet been to an event'. Adding this functionality dramatically increased the power and sophistication of the platform, and so needed a UI to help make this new complexity approachable.",
    role:
      "I was the only designer on this project, working closely with a PM, 2 engineers, and client support team.",
    work: [
      {
        queryKey: "retargetingBoolean",
        caption:
          "The first interaction I built: a literal boolean query builder. I tested this internally with coworkers and confirmed my intuition that it was too complicated."
      },
      {
        queryKey: "retargetingLists",
        caption:
          "The second interaction: building four lists to Include and Exclude. User research showed this was too difficult to understand."
      },
      {
        queryKey: "retargetingFilters",
        caption:
          "The final and launched interaction: a series of filters that built up the final list of contacts. Each filter could have include or exclude parameters, across 3 different data types. User research confirmed this was powerful and easy to understand."
      }
    ],
    results:
      "A few weeks after launch, 36% of campaigns on Hustle used these new targeting features."
  },

  hustleDesignManagement: {
    link: "/portfolio/hustleDesignManagement",
    name: "Design Management at Hustle",
    company: "Hustle",
    year: "2018 - 2019",
    context:
      "I was the Head of Design at Hustle, managing the design and user research team. I supported the designers on my team through critiquing their work and supporting their careers. I also continued working directly on selected projects, to maintain the momentum of the team and stay close to the product and process.",
    work: [
      {
        queryKey: "hustleRedesign",
        caption:
          "After a frenetic 2018 spent adding new features, we took stock of the product in 2019 and saw that scaling had degraded our core navigation patterns. We redesigned the app, focusing on updating outdated brand colors and creating a header navigation pattern that accomodated four levels of page hierarchy. Below you can see the new site on top of the old design, examples of the header in different states, and a flyout to hide organizational complexity until needed. I worked closely with the designers on the team to set the vision and direction for the redesign, and project managed the work during the implementation phase."
      },
      {
        queryKey: "hustleVoices",
        caption:
          "User research revealed that when an SMS campaign was completed, sometimes to thousands of contacts, the organizers wondered 'What happened?' They were looking for easily scannable snippets of the most interesting conversations that took place. We developed an algorithm for surfacing these conversations, and designed the UI for seeing these 'Insights.' This project went through many iterations as we explored the possible applications of our technology, and learned more about user needs. I helped support Isabelle as she explored each path, and helped keep the project focused on the overall goal."
      },
      {
        queryKey: "hustleMLA",
        caption:
          "Our users often used Hustle to collect information, running surveys through SMS. This was especially important around election time, when organizers ask a specific series of questions to ensure a successful Get Out of the Vote initiative. I worked with our design, PM, and political team to understand these needs, and build a UI that allowed for sophisticated survey creation. A version of this UI was launched before the 2018 midterms and used thousands of times before election day."
      },
      {
        queryKey: "hustleActivityPage",
        caption:
          "Active organizations had dozens or hundreds of SMS campaigns running simultaneously. We received feedback that it was overwhelming to keep tabs on all these campaigns. The team developed and launched the Activity page, that showed concise summaries of each active goal, and highlighted those that had problems and needed special attention. This is now the landing page for organizations when they visit Hustle."
      },
      {
        queryKey: "hustleUseCases",
        caption:
          "Hustle served thousands of clients across politics, labor, non-profits, and commerical businesses. Though we knew there were similarities between these clients, we lacked a centralized framework for understanding our core use cases. I worked with our User Researcher and Head of Product to explore different ways of expressing our use cases, then validated the most promising frameworks with internal and external interviews. The result was new language to evaluate features and sales opportunities."
      }
    ]
  }
};

export default portfolioItems;
