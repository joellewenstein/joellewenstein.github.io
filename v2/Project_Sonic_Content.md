# Project Sonic Content

h1 → Project
h2 → Section
h3 → Subproject


## Balancing Incentives (Quora, 2010)

**Context**
My first years at Quora were focused on maintaining product quality amidst the first wave of [explosive user growth](https://techcrunch.com/2010/12/03/quora/) in 2010. Alongside new techniques for maintaining quality and community, we were focused on defining the product’s core mechanics: What building blocks were needed to to achieve the vision of a platform where anyone in the world could share their knowledge?

We knew one obvious piece was missing: Anyone could ask another person to answer their question, but you had to know that person’s name and type it into a search box. 

{Show that search box, if it existed?}

This presented obvious limitations. Reading my personally asked questions from 2010 I was curious about [CPR](https://www.quora.com/Why-was-Stayin-Alive-chosen-as-the-rhythm-guideline-for-CPR), [airports](https://www.quora.com/How-do-airports-assign-flights-to-gates), and [rap lyrics](https://www.quora.com/What-is-the-juice-in-gin-and-juice) — yet I know very few cardiologists, pilots, or rappers. 

We had a different vision: Every question asker saw a list of qualified and active topic experts who could answer their question. And each topic expert got a steady stream of interesting questions in their domain of expertise. This vision presented conflicting incentives: A question asker wants their question answered by the best possible person, while a busy expert is interested in spending their limited attention on the best questions. 

Our challenge was to design an experience that balanced these two needs. 

**Role**

I worked as the designer on this project, with an engineer, product manager, and our CEO. Together we made all the product decisions, I created all the visual and interaction designs, and implemented those designs in Python (using [Quora’s web stack](https://www.quora.com/Quoras-Technical-Infrastructure-How-does-LiveNode-work)), CSS and Javascript. 


**Work**

As all good projects should, we started by articulating our goals, principles and constraints. Two obvious goals fell neatly out of the vision:


1. Generate new answers by making “matches” between questions and qualified experts
2. Keep the inbound rate of requests manageable for experts in popular topics

Given the scarcity of expert time, we wanted to be intentional about who got the limited access to their “answering slots.” So we added a third goal:


3. Our best users users should be rewarded for their contributions to the platform, in the form of access to the best experts for their questions. 

Armed with these goals, the team spent time rapidly exploring the possibility space, or (as one of my favorite descriptions of the design process calls it) the “expand” portion of a project:

{Expand / contract diagram}

This is one of my favorite phases of a project, quickly exploring the What If, without yet confronting the realities of engineering, time or tradeoffs. We considered a silent algorithm that routed questions to experts; a system of user roles and privileges where our best users “routed” questions to experts; Deploying our team of volunteer moderators to route questions. 

Ultimately we realized that the world has an existing system for rewarding good behavior and incentivizing contributions to a community: currency. We designed a virtual currency, called Credits, that was awarded to users for doing good things in the community (e.g. writing good answers), and spent on asking busy experts to answer a particular question. 

We arrived at this solution with consternation: a virtual currency sounded (and was!) a complex feature for platform we hoped would become widely used. It rang many designer alarm bells in my head, as I imagined the dark patterns pioneered by social games. These concerns were outweighed by the power and control a virtual currency provided: By changing prices and payouts (e.g. more credits awarded for answers in rare subjects; prices for asking increasing if an expert seems “burned out”) we could have precise control over the system’s dynamics. Our community was filled with intelligent people with significant technological fluency gave us confidence we could pull it off.

My design work began by thinking about the position this feature (“Ask to Answer”) should occupy. There were few equivalent mechanics on other products, so I considered what metaphor was most appropriate: Was this an action you could take on a question? A social feature that existed in an interpersonal space, like a “Share” button? 

{Make up a sketch here} 

I landed on a metaphor of “missing content.” Asking a qualified expert to answer was a core activity on Quora, literally helping to build the database of knowledge. Placing the A2A feature in the space where answers would eventually live, and the dotted line to suggest “missing” answers, conveyed that this act was nearly as important as actually writing an answer.

{Screenshot}

(In hindsight, I think this dotted line treatment was heavy-handed, and the same feeling could have been evoked with a lighter visual touch.) 

We had the basic decisions made: Each suggested price would have a “price” to ask them, and if a user had enough Credits, they could request an answer from that person. 

The next question was who to show in the suggestion list. Should a person see only people they can “afford” to ask with their currency, even if they are not the most expert? Would seeing qualified experts who were too “expensive” to ask feel aspirational or demoralizing? On questions of feeling, especially for a dynamic and personalized product like Quora, I find abstract discussion to be a difficult way to assess options. Instead, I worked with the engineer to build several versions of the suggestion algorithm, and we prototyped them with people in the company. It quickly became clear that seeing out-of-reach experts was confusing and insulting, so we decided to only suggest people you could afford to ask. 

The final design challenge was around integrating the Credits currency without overshadowing the core Ask to Answer interaction, in the same way prices are salient but not dominant in a shopping experience. I prototyped a number of button designs, some which focused exclusively on the verb “Ask” and others that integrated the concept of credit price. 

{Images of different button treatments?}

Ultimately I settled on a simple “Ask” button with the credits as a leading sentence. Credits were meant to be a light touch mode of rate limiting. If they worked, they would create good experiences for our best users. Because they were never intended to be a “game” that people focused on and earned, I elected to keep the focus of the interaction on the word “Ask.” Over time I hoped (and user research later confirmed) that users would begin to trust that their suggestions were the best people available to them, and ask those they were curious to hear from, without spending time agonizing over the prices. 


**Conclusion**

The Ask to Answer feature, anchored by the suggestion list, drove a huge amount of content creation (specifics are confidential to Quora). We also succeeded in protecting the time and attention of our scarcest resource: experienced and expert writers. We defined and tracked key metrics around answer rate and overall usage of our best writers, and found we were sending them an appropriate volume of questions. 

The Credits system became a little game within Quora for our most committed users. There were competitions and bragging around who had amassed the most credits, and whose price was the highest. Though we had not intended prices to directly indicate quality (rather it was supposed to be a blend of quality and availability), in hindsight the emergence of social signaling using this public metric was inevitable. 

One of the unexpected and fascinating benefits of having a virtual currency was seeing the emergent behavior of the community in how they used the currency: e.g. gifting it to new users as encouragement to join the community; informal “bounties” with promises to award credits to the best answer on a page; and more.  

The Ask to Answer feature and credits remained a critical part of Quora for 6+ years, until they were removed as part of a broader product simplification.



## 
## Reputation at Quora

**Context**

By 2016, Quora had grown into a vibrant and diverse community, with millions of users using the platform for education and entertainment. We kept observing one particular pattern: A previously-unknown person would start writing in a subject, gain a lot of attention and a reputation for excellence, then use that reputation for real-world gains (new jobs, introductions to people in their field, speaking offers, etc.) This pattern had emerged organically, without intentional investment, but we were excited enough about it that we wanted to do that investment, so we kicked off a year-long initiative to understand and improve this use case. 

**Role**

I was company’s DRI (“[directly responsible individual](https://www.youtube.com/watch?v=xCqKmhCBtJk)”) for this initiative, so it was my responsibility to demonstrate results, by defining key metrics for success, brainstorming and prioritizing projects, and overseeing the successful launch of projects in this space. I led the team of between 5 and 10 engineers, designers, and data scientists on these projects. In some cases, I was doing the design work myself (noted below); on others I was managing the work of other designers. 

This type of initiative was brand new for Quora — we’d organized our product team around key metrics rather than use cases. So I was something of a guinea pig, with responsibilities both to deliver actual results, and to give feedback to company leadership about this model of product development. 

**Work**

This idea of “reputation” felt like the [parabolic elephant](https://en.wikipedia.org/wiki/Blind_men_and_an_elephant): everyone had a different idea of what it meant, and how we might improve it. My first step was to have a series of conversations with stakeholders across the company, and develop better language for which problems we’d be solving and which we wouldn’t. This helped focus our team’s work, and built trust with others in the company about how this new type of team would be operating. 

{Some status whiteboard?}

We identified three key areas critical to reputation building, and made significant product investments in each: 

**(1) Displays of Expertise** — Reputation in the real world is often driven by titles bestowed by trusted organizations, e.g. “Professor of Astronomy at Cambridge.” Quora had long had a way of displaying a description of expertise next to an answer, with a freeform box that an author could write whatever they wanted. The freeform format, however, led to uses of humor and social signaling rather than earnest displays of expertise: In a subject like music, we more “Ringo was unappreciated” than “Have been writing a music blog since 2007.” This made sense given community dynamics of the platform: Amongst a trusted circle, it’s more fun to be silly than to earnestly brag. The prevalence of inside jokes, however, prevented a social norm it was acceptable to make strong claims of qualification. 

I’m a strong believer in the power of social modeling, and of good defaults. The project team knew that if the path of least resistance was displaying an earnest bio full of expertise, it would drive the social conventions towards demonstrations of expertise. The team built and shipped Credentials, that replaced the freeform text field with a structured experience that guided people to choose their experience from dropdown fields, rather than a freeform text box:

{Credentials + link to blog post} 

To measure our results, the team hand-categorized thousands of biographies from before and after the Credentials change, and found that Credentials significantly reduced the number of “joke” bios.

My role on this project was to oversee the work of our designer and two engineers, and to ensure it continued to be focused on our high-level goals. Because bio’s are so central to the platform, we ran the risk of solving multiple problems poorly, rather than a single problem well. I wasn’t involved in day-to-day decision making, I checked in with the team a few times a week to ensure that decisions were remaining focused on the primary goals of reputation, and that scope was continuously cut to launch a targeted solution to those problems. 

~~~ EDIT LINE ~~~

**(2) Speaking From Strength -** We conducted a series of user interviews with people with significant real world reputation, some of whom wrote actively on Quora and others who didn’t. Among many themes, we heard one thing repeatedly: It’s incredibly motivating to get the “perfect” question, the one that you feel put on earth to answer. This is doubly important if this question is in the domain in which you hope to be building reputation.

We took this feedback and brainstormed project ideas: A better way to sort and filter the millions of open questions within Quora; The ability to anonymously ask a question and ask it to yourself; Ultimately we decided the best solution was to let people publicly declare what subjects they wanted to write about. This concept of an “Ask Me Anything” exists on other platforms (most notably on Reddit) but we felt the Quora platform offered a unique opportunity: Any person should be allowed to use the feature (without the fame or scheduling requirements of https://www.reddit.com/r/iama), and distribution to people interested in your chosen topics. 

The feature we built was called Taking Questions, and allowed any user on Quora to specify what they wanted to answer about:


This session would send notifications to people interested in X, Y, Z [based on screenshot]

Designing this dialog was challenging, as we wanted to encourage a concise and descriptive freeform string, that elicited enough detail to mine for subject. We tried variants of the language and “Too long” feedback, testing each iteration with users to find what worked. 

[What else was hard about the project?]

**(3) Recognition From Desired Audience -** The third pillar of building a reputation is who you’re speaking to. An aspiring architect doesn’t much care if their writing on architecture is only seen and upvoted by magicians. Quora had historically focused on getting quality answers enough visibility to get positive reinforcement, but hadn’t spent explicitly focused on *who* was giving that feedback. For this project, we explicitly tried to get feedback from people whom the author would value recognition from.

Distribution on Quora happened via our home feed, which was powered by a machine learning algorithm. To affect who saw which answers, I spent time with our ML engineers to change the value function of the feed. This was a challenge for me: I didn’t have a strong understanding of how to affect an ML system, and so made my requests in a way that didn’t easily translate to the language of ML. My first attempts failed, either because they never got implemented, or they didn’t have the desired effect. 

We took a step back from the specific changes we wanted to make, and a group of company leaders tried to answer a more fundamental question: How should Product Designers express preferences about Machine Learning systems, in a way that was constructive and actionable? Together we agreed on a format where a Product Designer identified “Missed Outcomes” → Things we *expected* the system should have done, but it didn’t do. Then the engineer could investigate why this outcome happened, and propose solutions (with articulated tradeoffs).

Armed with this new communication tool, I made two things:

- A simple metric for “Successful Outcome”, which was roughly “Was a good answer seen by people in the author’s community?” 
- A list of answers written by people with high reputations but that weren’t seen by others in their community

This metric served both to create the “Missed Outcome” list, and as a success metric for the project. 

{Fake spreadsheet?}

Each “Missed Outcome” led to an investigation of why the algorithm hadn’t surfaced that answer. Changes to the algorithm were made, and A/B tested. We were able to make significant progress on the overall metric of Successful Outcomes (specific metrics are confidential to Quora.)

**Conclusion**

Being frank, I find it difficult to assess the overall success of this initiative. (Not what you’re supposed to say on a Portfolio, I know.) There were many clear successes in my year of working on this: The team developed new language to describe desired outcomes of using Quora; Each of the three pillars of Reputation resulted in significant product changes that were positive both in their direct goals, and in downstream benefits to other projects; The company developed new processes for cross-functional collaboration on Machine Learning, which was used by many future projects.

Despite these successes, I find myself unable to answer the question: “Is Quora a remarkably better place to build ones reputation than it was a year ago?” We had many discussions about what a successful reputation platform would mean: people could “get discovered,” and improve their lives via new relationships, jobs, speaking gigs, etc. But many of these took place off the platform, so we couldn’t easily track if our work led to more of it. 

{MORE}



## Design Management at Quora

I was the first Design Manager at Quora (after our Head of Design), and in that role worked on team process (design crits, hiring and interviewing, onboarding) and supported a team of Product Designers in their career growth and project execution. 

Each of the projects below was led by a designer on my team, and I supported their work in various ways:

{Context. Core design problem. How I supported}

New Answer Pages w. Nikki: https://blog.quora.com/New-Answer-Pages-Cleaner-Simpler-Easier-to-Share

Content Moderation w. Diana: https://blog.quora.com/Moderating-With-Care-at-Scale and https://blog.quora.com/Raising-the-quality-bar-improving-how-answers-are-collapsed-on-Quora

Safety w. Diana — https://blog.quora.com/New-Messaging-Settings

Question Highlights w. Jackson — https://blog.quora.com/Highlighting-what%E2%80%99s-important-about-questions

Most Viewed Writers w. Jackson — https://blog.quora.com/Most-Viewed-Writers

Topic FAQs w. Xinran — https://blog.quora.com/Introducing-Topic-FAQs

Knows About w. Abhinav — https://blog.quora.com/A-New-Section-of-Your-Quora-Profile-Knows-About

Zen Mode w. Jackson - https://productupdates.quora.com/Introducing-Zen-Mode-A-Distraction-Free-Writing-Experience

Ask Bar w. Lucy - https://blog.quora.com/A-new-way-to-ask-and-search

Question Page Redesign w. Jackson - https://productupdates.quora.com/A-New-Easier-to-Read-Question-Page

Question Downvoting with Kah Hong - https://productupdates.quora.com/New-Question-Downvoting-One-Simple-Way-to-Tell-Quora-That-a-Question-is-Bad

Redesign Topic Pages w. Xinran - https://productupdates.quora.com/A-New-Design-for-Topic-Pages

Hovercards with Ash - https://productupdates.quora.com/Improved-Profile-and-Topic-Hovercards

Profile Stats w. Jackson - https://productupdates.quora.com/Stats-on-Profile-Showing-Your-Reach

Reading List with Diana G - https://productupdates.quora.com/Introducing-Reading-List


## Understanding What Motivates Political Action — Amplify

**Context**

After leaving Quora, I looked for ways to use technology to empower the new progressive resistance to President Trump. I met the founders of Amplify, an app used by grassroots groups to coordinate taking actions. Early versions of the product had met with success: thousands of people each month were coordinating calling congress, organize community meetings, and send postcards to voters. I spent 6 months working on ways to improve the product and grow the userbase. 

On this project I worked directly with the engineering cofounder on all parts of the product development process: brainstorming feature ideas, building wireframes and high fidelity mockups, then implementing all designs in the React Native app. 

**Role**

**Work**

We took a hypothesis-driven approach towards adding new features. We first developed a theory for *why* the current app was working with the people that it was, then built and launched new features that would lead to growth if our hypothesis was right. (Though we would have preferred a more typical A/B testing approach, our userbase was both too small, and too dense of a network, for this to be a viable path.) 

For each hypothesis-driven feature, we looked for the fastest path towards launch, preferring to learn quickly from features even if they were unpolished or didn’t have full functionality. For each of the ideas discussed below, we spent only a few weeks each from ideation, concepting, building and launching. 

Our first hypothesis was that taking political action was often lonely and unrewarding, and that positive social reinforcement would make these actions more satisfying and thus more frequently taken. This seemed especially promising, as users of the app were all members of an offline local grassroots group (e.g. a local Indivisible chapter) so had existing social relationships, which we hoped meant that the feedback shared through the app would be especially compelling. The first version of the app was centered around the actions to be taken, with a secondary screen showing who had taken each action. Our first major project was reorganizing the app to make the feed of activity more prominent, and adding the necessary pieces to make the app feel social: profile photos to lend humanity to each person, and large Like buttons to encourage the positive reinforcement. 

{before and after of Amplify v2}

While this change increased the quantity and rate of Like’s, it didn’t lead to more actions being taken, nor to user growth.

Our next hypothesis was that taking action alone wasn’t interesting enough to prompt real social interactions. Rather, it would be the context for a person taking that action: their rationale and state of mind, and how they felt after taking the action. We hypothesized that people wanted a space to earnestly discuss having taken political action with likeminded people, and that existing social networks were either too toxic, or had too broad of an audience, to be this space. To test this hypothesis we allowed users to write about why they took an action, and other users could leave comments discussing their actions.

{Amplify comments} 

As with the first set of changes, though we saw good usage of this new features, it did not lead to the growth we were looking for.

Our next hypothesis was that the existing actions available were insufficient. Much of the app centered around calling elected officials, which could feel futile — a call wouldn’t lead to a clear outcome (e.g. a changed piece of legislation), and while Democrats were in the minority, it wasn’t clear what effect all these calls were having. We looked for other actions that individuals could take from their phones to make a clear political impact. 

As the midterms neared, we knew that voter registration and turnout would be critical, and that social pressure was an effective tool for increasing the typically-low midterm turnout. We built a feature that took a person’s address book, compared it to national voter records, and encouraged texts to be sent to friends who weren’t yet registered. Our hypothesis was that this action would be seen as more directly impactful, and would power the flywheel of Action → Social Reinforcement → More Action.

{Screenshot of voter contact feature}

Unfortunately this feature was not widely used, and soon after building it, we stopped doing active work on Amplify. 

**Conclusion**

I wrote a long essay on [my conclusions](https://medium.com/datadriveninvestor/where-is-the-killer-app-in-politics-b1655a0474ea) from working at Amplify. In short, I believe that the best experiences center around an action that people love to do repeatedly and frequently. Politics does not offer many of these actions (those that exist are slow, cyclical, and rarely offer clear results). The few actions that are impactful are socially delicate, and are very difficult to accelerate using technology. Amplify was an incredible opportunity to rapidly test hypotheses on a small and engaged community of activists, and ultimately helped demonstrate to me just how hard it is to build compelling digital experiences in this space. 



## Electoral Surveys at Hustle

**Context**

Hustle is a platform that lets organizations have SMS conversations with their supporters. The product is used largely by non-profits and political campaigns to power their advocacy work: Using the Hustle app, a volunteer for a political campaign can quickly text message 1000 supporters and invite them to a rally the next day, or to give a small donation. Each conversation is between two real people (a volunteer and a supporter), so each conversation is authentic and human (i.e. no bots). The product enables each volunteer to have multiple simultaneous conversations, and collect data on how each conversation went, which is critical date the organization uses for future initiatives (like voter turnout)

When I joined the company in the summer of 2018, the product was only able to capture binary responses: “Yes I’ll donate” or “No I won’t donate”. We heard consistently from our clients that this was limiting the effectiveness of their voter turnout work. This project had the goal of empowering more effective voter turnout. 

**Work**

The primary challenge of this project was to understand our clients’ existing turnout workflow, and thoughtfully choose which part to support.

We spent the first few weeks of this project interviewing clients from political campaigns, and political oriented non-profits, and built our own understanding of the workflow. It involved: 

1. Building a list of potential supporters, and exporting from their CRM (all campaigns use NGP Van, which served as the central hub for all voter contact across all channels)
2. Asking each potential supporter three questions, each with a defined set of answers
3. Importing those answers back into the CRM for future outreach

{Screenshot of the questions}

We also learned one very critical detail: We started this project in late July, expecting it would take a few months and be launched ahead of the election in November. From our interviews, we learned that the most critical information was actually collected in September! This let campaigns focus on their most committed supporters in the final weeks of the campaign. What we thought was a 3 month project turned into a 6 week project! 

Our new timeline was a useful forcing function to cut scope. Our user research had identified several critical gaps in our current product limiting its usefulness in voter turnout work. 

{Some whiteboard from VAN Surveys}

The existing process is tried-and-true over many election cycles, and was borne in an analog age. A campaigns asks three discrete questions, in the same order, with the same list of possible answers:

{ Shot of the voter questions }

Hustle’s product architecture didn’t fully capture this process in X ways:


1. Hustle let you ask one of 5 preformed questions (e.g. “Will you donate?”) but not defining a custom question (e.g. “Do you support Kamala Harris for Senate?”)
2. Hustle only allowed one question to be asked at a time, and did not support linking multiple questions together in a conditional tree 
3. Though Hustle does allow exporting data to external CRMs, it was time-consuming and error prone

Though we knew we only had time to close some of our product gaps, I like to feel what the “Fully Featured” version of a project will look like. This helps me build a feel for how the different changes relate to one another, often uncovers new ways of solving the problem that a targeted MVP does not, and generates ideas for future projects. 

I spent a few cycles building the “Ideal Voter Turnout Hustle,” with all the advanced functionalities that would best serve this use case. Though this product was very enticing (of course), it represented months of development time. 

Next I sat with the PM on the project and did a ruthless prioritization of the user needs. Working closely with our Client Success representatives, we understood that Hustle was one of many touchpoints in a campaign’s efforts to collect data on their voters. The most critical value we could provide was sending back the right data, in the format that was already being used in their CRM. To do this we needed to support [1] *Asking a Custom Question With Multiple Answers & [3] Error-Free Data Syncing.* 

Knowing these were our priorities, I cut down my product exploration to focus on only features critical to those goals. The changes necessary to support this change were:

A fast and error-proof way to connect a Hustle goal to CRM.

{Show before and after of survey question linking}

A UI for data collection that scaled elegantly from 2 through N answers.

{Show before and after}

For this data collection UI change, the primary concern was usability and understanding of the new “Answer Tray” at the bottom. My experience has always confirmed the famous Nielsen finding that [5 usability tests uncovers 75% of issues](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/), so despite moving very quickly on the project, I was able to get feedback very quickly: Using [UserTesting.com], along with an Invision Prototype, I was able to watch X people use the product in Y days, and quickly identify a key oversight in how I visually communicated that additional choices were available. 

With this feedback I was confident in the design, and I moved to supporting the execution and launch of the project.   


**Conclusion**

{look up how many VAN Survey goals were made}

