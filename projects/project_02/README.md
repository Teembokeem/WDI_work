# ![](../../assets/ga-icon-small.png) Project #2: Building Your First Full-stack Application

### Overview

This second project is your first foray into **building a full-stack 
application.** You'll be **building a Rails app,** which means you'll 
learn about what it takes to build a functional application from the 
ground up yourself.

**This is exciting!** It's a lot, but by the end of the week we will 
have given you the all of the tools needed to build your app.  Here's 
the best part - you get to decide what you want to build - as long as it
meets the technical requirements outlined below.

**You will be working individually for this project.** You'll be 
designing and coding the app yourself. Make sure you have time to run 
these ideas by your instructors to get their feedback before you dive 
too deep into user stories and wireframes! **Remember to keep things 
small and focus on mastering the fundamentals – scope/feature creep is 
the biggest pitfall for any project!**

---

### Technical Requirements

Your app must:

- **Have at _least_ 2 models** (more if they make sense) – one 
  representing someone using your application, and at least one more 
  that represents the main functional idea for your app.
- **Include sign up/log in functionality**, with authentication from 
  scratch (`has_secure_password`). Implement basic authorization by 
  restricting access to certain features, such as editing and deleting a
  resource, to an authenticated user.
- **Have complete RESTful routes** for at least one of your resources 
  with GET, POST, PUT/PATCH, and DELETE.
- Have **semantically clean HTML and CSS.**
- Be **deployed online** (Heroku) and accessible to the public.

---

### Necessary Deliverables

- A **working full-stack application, built by you**, hosted on Heroku.
- A ** git repository hosted on Github** for your app with frequent 
  commits dating back to the **very beginning** of your project. Commit
  early, commit often.
- A **link to your hosted working app** in the GitHub `README.md` file.
- Also in the `README.md` file:
	- Explanations of the technologies used.
	- Installation/startup instructions.
	- Unsolved problems, etc.
- A **Trello board** with:
	- **Wireframes of your app**.
	- **User Stories**, each moving from left to right in the following 
      three lists in your board: Ice Box, Current/MVP and Completed.
      Prioritize your user stories within the Ice Box with your "wish 
      list" stories at the bottom.

---

### Suggested Ways to Get Started

- **Plan with the end in mind.** Know where you want to go by planning 
  with Wireframes & User Stories, so you don't waste time building 
  things you don't need.
- **Test whatever libraries or gems you want to use.** Most of the 
  time, there is a tutorial that you can follow, but not always, and 
  learning to read documentation is crucial to your success as a 
  developer.
- **Model your data!** Get your data model (`ActiveRecord`) running
  first, independently of your implementation of User Stories. And write
  **seed data** for the development process!!

---

### Project Idea Guidance

Nearly all of the web applications you interact with on a daily basis
would do for this project: they are "full-stack" CRUD apps, that is.
Here is the general rule: if a website has users that log in, it is a
CRUD app.

#### Do Not Do

Easiest is to list applications that aren't CRUD apps:

- ***games***
- profile, text, portfolio, or presentational pages (only one you
  "posts data", not multiple "users")
- artistic sites that focus on rich interaction
- aggregators that get data not from users, but from other web services
  (like Yahoo)
- real-time interactive applications, like chat apps (Slack)

Finally, there are types of CRUD apps that don't do well as projects:

- CMSes: technically Content Mangement Systems, like WordPress, are CRUD
  apps, but they are very complex general-purpose frameworks for building
  specific CRUD apps. Don't create a CMS, create the app directly!
- storefronts: once again, these are technically CRUD apps. However,
  they involve complex use of web services that we will explore in the
  next project - save your effort for then!

#### Good Examples

So much of the Internet is CRUD apps!

- Social media:
  - Facebook
  - Twitter
  - Instagram
  - Tumblr
  - LinkedIn
  - Reddit
- Marketplaces:
  - EBay
  - Craigslist
  - Etsy
- Organizational, Business or ERP apps:
  - Todoist
  - Quicken
  - Salesforce
  - [Connect](http://www.getconnectapp.com)
- Services:
  - YouTube
  - Tinder
  - IMDB
  - StackOverflow
  - Uber
  - Yelp
  - FourSquare
  - Venmo

You can make a clone of any of these, or something that performs a
service like these, or something else entirely!

---

### Useful Resources

* **[Heroku](http://www.heroku.com)** _(for hosting your back-end)_
* **[Writing Good User Stories](http://www.mariaemerson.com/user-stories/)** _(for a few user story tips)_
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)** _(for more insight into wireframing)_

---

### Project Feedback & Evaluation

- **Project Workflow**: Did you complete the user stories, wireframes, 
  task tracking, and/or ERDs, as specified above? Did you use source 
  control as expected for the phase of the program you’re in (detailed 
  above)?
- **Technical Requirements**: Did you deliver a project that met all the
   technical requirements? Given what the class has covered so far, did 
   you build something that was reasonably complex?
- **Creativity**: Did you added a personal spin or creative element into
   your project submission? Did you deliver something of value to the 
   end user (not just a login button and an index page)?
- **Code Quality**: Did you follow code style guidance and best 
  practices covered in class, such as spacing, modularity, and semantic 
  naming? Did you comment your code as your instructors as we have in 
  class?
- **Deployment and Functionality**: Is your application deployed and 
  functional at a public URL? Is your application free of errors and 
  incomplete functionality?
- **Total**: Your instructors will give you a total score on your 
  project between:

    Score | Expectations
    ----- | ------------
    **0** | _Incomplete._
    **1** | _Does not meet expectations._
    **2** | _Meets expectactions, good job!_
    **3** | _Exceeds expectations, you wonderful creature, you!_

 This will serve as a helpful overall gauge of whether you met the 
 project goals, but **the more important scores are the individual 
 ones** above, which can help you identify where to focus your efforts 
 for the next project!
