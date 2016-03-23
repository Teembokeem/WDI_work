# AngularJS - Morning Quiz

- This quiz should be completed individually - no collaboration please.
- Copy this quiz to your working directory so that you can type your answers right in this doc.
- Attempt to answer the questions on your own before resorting to googling or referencing lesson plans, notes, etc.
- Answer as many questions as you can in 20 minutes.
- It is recommended that you answer the easier questions first and those that require more thought after those.
- We will review the answers afterwards.

### Please answer the following questions:

1. What is the use case of AngularJS? **single page application rendering through data manipulation**

2. What type of Angular component is used as a "container" for other components? **module**

3. What is the name of the global object created by loading  Angular's script file? **angular**

4. What are directives and what do they do? **markers in html that transform the DOM**

5. What are the primary responsibilities of controller components? **provide us data, contain primary code for response to user events**

6. What are filter components used for? **take data in, process, transform, and return.**

7. What is the use case for using services? **services share data between controllers, directives, filters etc. through encapsulation paradigm**

8. What directive tells Angular which module to bootstrap our app with? **ng-app**

9. Name at least three different types of service components. **factory, provider, service, value, constant**

10. Explain two-way data binding. **allows us to manipulate data from and into the view and controller e.g. ng-model, ng-controller**

11. Write the line of code that defines a module named 'app' that depends on another module named 'ngResource'. **angular.module('app', ['ngResource'])**


12. What is the name of the method on the `angular` object that defines a controller? **.controller**

13. What does the expression "driven by data" mean in regards to an Angular app? **When we want our HTML/view to change dynamically (change text, add/remove DOM elements, etc.) we wchange data, nd the view will be automatically updated thanks to Angular's data binding directives.**

14. What directive enables two-way data binding? **ng-model**

15. What does this code do: `angular.module('myModule')` **instantiates our myModule**

16. What major concept/mechanism do Single Page Applications rely on to provide comprehensive functionality without full page refreshes? **client-side routing, client-side rendering + SPA**

17. What are the two main ways controllers are instantiated? **routing system, when it parses and sees ng-controller directive**

18. Which type of component, once instantiated, is persisted during the life of the app: controllers or services? **services**

19. What is the `$inject` property on the controller function used for? **defines a list of dependencies that willbe provided to a specified controller**

20. Directives can be designed to be used as HTML attributes, comments, classes and ______________. **element**
