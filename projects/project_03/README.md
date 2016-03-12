# ![][ga-logo] Project #3: Build a Full-stack App as a Team

### Overview

You’ve already worked in small groups to accomplish various labs and 
exercises, but this time **we’re going to challenge you to work on a 
whole project with a small team.**

Not only will you be asked to **exercise additional creativity** in 
designing your own project, your instructors will partner you with other
classmates to architect, design, and collaboratively build an app of 
your own design.

While your last project taught you how to get started with Ruby, SQL, & 
Ruby on Rails, this project you'll be building something exciting with 
**Express & Mongo.** More importantly, you're going to be working with
**APIs**: both an API you produce (on the server-side) and consume (via
AJAX on the client-side), and also an outside API that you consume.

**This is meant to push you both technically and collaboratively.** 
It’s a lot harder to work in a team than to work by yourself, but that's
most likely you’re going to find yourself doing in your first 
development job after WDI, and **it's important to learn how to work 
together.**

> Make it work, and make it *sweet*.
> 
> — *[Tim Gunn][tg], slightly drunk in the afternoon…*

---

### Technical Requirements

Your team must:

- **Present an idea** to the instructors with a **deck**,
  covering the period of [project inception][inception], that includes 
  (**at least**):
  - the application name, slogan and elevator pitch,
  - your team members and their roles/goals,
  - the problem you are going to solve with your app,
  - the solution your app provides, and the 3 central values or benefits of it,
  - your product's MVP:
    - wireframes for the central interactions, and
    - an underlying data model,
    - a list of included technologies and third-party APIs consumed (if any)
      - this inlcudes the OAuth provider(s) your app will use for authentication
- **Document your app's RESTful API**.
- **Craft thoughtful user stories together**, as a team, and manage
  and distribute those user stories to team members based on skills and
  interests using **Trello**.
- **Manage team contributions and collaboration** using Git, GitHub and
  a standard team work-flow.
- **Present the app at the end of the sprint** as a team.
- **Perform a team-wide retro** and at least one **code-review** after
  the completion of the sprint.

Your app must:

- Use **MongoDB & Express** to CRUD your data.
- **Produce a RESTful API that exposes at least one model**.
- **Consume its own API using AJAX**.
- **Authenticate users using at least one OAuth provider**.
- **Restrict access to the Creation, Updating & Deletion of resource(s) 
  using an authorization middleware function**.
- Be **deployed online** using **Heroku**.

You do not need to, but may:

- Make a single-page app (SPA); you can have multiple views and EJS as
  necessary, due to technical constraints.
- Use Web Sockets; while you must use AJAX to dynamically generate
  HTML from a JSON API, you may or may not add a Web Socket interface.

---

### Necessary Deliverables

- A **[pitch deck][pitch-deck]**, delivered as a team to the
  instructors.
- A **working app, built by the whole team**, hosted somewhere on the 
  Internet.
- A client application **that consumes your own API**, hosted somewhere 
  on the Internet.
- A **link to your hosted, working app** in the URL section of your 
  Github repo.
- A **team Git repository hosted on Github**, with frequent commits from
  *every* team member dating back to the *very beginning* of the project.
- **A `README.md` file** with:
    - Explanations of the **technologies** used (including outside APIs).
    - A couple paragraphs about the **general approach you took**.
    - **Installation instructions** for the app.
    - Link to your **Trello**.
    - Links to your **planning docs**, including data models, wireframes,
      and your presentation deck.
    - Descriptions of any **unsolved problems** or **major hurdles** 
      your team had to overcome.

---

### Suggested Ways to Get Started

1.  **Identify roles** on the team, which may be (but are not limited to):
    
    - **Scrum Master**: the leader of the Agile processes (stand-ups, 
      retro) and manager of Trello.
    - **GitHub Manager**: the primary person for running Git and 
      managing code share for the whole team.
    - Presentation Manager: the primary speaker for the pitch deck, who
      runs and creates the presentation.
    - Documentation: the person in charge of the README, etc.
    - Designer: the person in charge of style. This person will also 
      have to *accept* pull requests with new features.
    - Database manager: this person will be in charge of creating and
      managing the models and datasets used in the process.

    You *don't have to fulfill any of these roles!* They are only there
    in case someone on the team *really* wants to "own" these things.
2.  **Read the docs for whatever technologies / frameworks / API’s you use**.
3.  **Be consistent with your code style.** You're working in teams, but 
    you're only making one app per team. Make sure it looks like a unified
    effort.
4.  **Commit early, commit often.** Don’t be afraid to break something 
    because you can always go back in time to a previous version.

---

### Potential Project Ideas

For this project, we want you to work with your team to build a creative
product that you actually think someone will want to use. We won't have 
time to do tons of customer research, but take some time to 
brainstorm. If you're struggling for ideas, the ones below could help 
get you started.

##### Bucketli.st

Besides finishing WDI, you surely have one or two things you'd love to 
do with your life. Let's get 'em on paper! You could integrate with a 
third-party location-based API to allow users to search for a location 
or venue to add to their bucket list items.

##### Survey App

Imagine sending out a survey to everyone in the class – what should we 
eat for lunch today? Or 1-5, how well did you understand what we just 
learned? It would be even more awesome if it were realtime, so you could
 see answers pouring in as they're submitted.

##### Hello, Comments

Imagine the benefits of having an API where you could embed comments 
into any website you want. They could even update in realtime if you 
wanted, so that you'd never have to refresh the page. CMS providers 
across the world could quit writing code from scratch and just embed 
your widget instead.

---

### Project Feedback + Evaluation

- **Project Workflow**: Did you complete the user stories, wireframes, 
  task tracking, and/or ERDs, as specified above? Did you use source 
  control as expected for the phase of the program you’re in (detailed 
  above)?

- **Problem Solving**: Are you able to defend why you implemented your 
  solution in a certain way? Can you demonstrated that you thought 
  through alternative implementations?

- **Technical Requirements**: Did you deliver a project that met all the
  technical requirements? Given what the class has covered so far, did 
  you build something that was reasonably complex?

- **Creativity**: Did you added a personal spin or creative element into
  your project submission? Did you deliver something of value to the end
   user (not just a login button and an index page)?

- **Code Quality**: Did you follow code style guidance and best 
  practices covered in class, such as spacing, modularity, and semantic 
  naming? Did you comment your code as your instructors as we have in 
  class?

- **Total**: Your instructors will give you a total score on your 
  project between:

    Score | Expectations
    ----- | ------------
    **0** | _Incomplete._
    **1** | _Does not meet expectations._
    **2** | _Meets expectactions, good job!_
    **3** | _Exceeds expectations, you wonderful creature, you!_

---

### Retros and Code-Reviews

Following the project sprint, all teams will participate in an internal
retro about the process of the project. This will produce a retro document.

The teams will also participate in one (or more) code reviews, during
project week and after, that focus on the code that's been written,
following standards and styles decided upon as a group.

<!-- LINKS -->

[ga-logo]:    https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png
[tg]:         http://25.media.tumblr.com/tumblr_m8vi5ze9sa1ql5yr7o1_400.gif
[pitch-deck]: https://pitchdeck.improvepresentation.com/what-is-a-pitch-deck
[inception]:  https://blog.pivotal.io/labs/labs/agile-inception_knowing-what-to-build-and-where-to-start
