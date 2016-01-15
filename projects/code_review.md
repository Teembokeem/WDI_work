# A Format and Guide to WDI Code Reviews

Below are the objectives, guiding principles, and structure for in-person
code reviews in WDI. These code reviews can either be peer reviews or
instructor reviews.

**For more on code reviews, and the qualities of good code and bad code,
[see the lesson](/work/w10/d01/instructor/code_review.md).**

[The best practice, point-by-point guide for performing a code review,
either as an author or reviewer, is maintained by Thoughtbot.][tb]

#### Objectives

- **Ensure the feature is fully implemented according to the user story.**
- **Identify improvements that can be made to the feature.**
- **Find any defects or errors in the code.**
- **Identify improvements to the code (where it _smells_).**
- **Audit the code for stylistic problems.**
- **Ensure proper documentation of the codebase.**

#### Guiding Principles

1.  Fulfill the above objectives, and do nothing else.
2.  Follow the guides closely: **this one** *and* **[Thoughtbot's][tb]**.
3.  Treat everyone, their work, their ideas, and their time, with respect!
4.  Follow the prime directive of Agile retrospectives.

#### General Structure

1.  As a team, do a **Sprint Overview**:
  - Check Trello, see what's been done.
  - Identify a feature (or more) to review.
2.  **Review the feature**.
  - Follow the **steps for reviewing a feature** below.
  - Timebox the feature review to **15 minutes**!
  - Only make simple code changes inline: mostly add notes/comments
    or comments to the code.
3.  **Check the requisite documentation**, if any.
4.  **Record suggestions**:
    - changes or updates to the feature are to be submitted as
      **new user stories or bug reports** in Trello.
    - updates to the code, including refactoring, or changes to 
      documentation, are to be **assigned to team members** in Trello.

#### Steps for Feature Review

1. **Run the feature** (an Acceptance Test).
  - Attempt to break it. Make sure it is robust!
  - Note any problems with the UI/UX. Make sure it is usable!
  - Identify any major visual design problems; use wireframes or
    mockups to check against.
2. **Read the code.**
  - Run through the code in the exact order that it is run during
    the acceptance test.
  - If any code isn't understood, ask the author to explain it.
  - Identify and applaud good code (semantic, dry, small, well-commented).
  - Identify quality errors, known as "code smells."
  - Identify stylistic problems.
3. **Make suggestions:**
  - changes or updates to the feature.
  - updates to the code, including refactoring.
  - changes to the documentation.

<!-- LINKS -->

[tb]:     https://github.com/thoughtbot/guides/tree/master/code-review
