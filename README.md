# Project Path

**Ideas Meeting Audience**

![Project path Mockup](docs/images/mockup-image.png)

## Table of Contents
- [Curriculum](#curriculum)
- [Purpose of the Project](#purpose-of-the-project)
- [UX Design and Visual Decisions](#ux-design-and-visual-decisions)
    - [Visual Design Choices](#visual-design-choices)
    - [Wireframes](#wireframes)
- [Project Management - Kanban Board](#project-management---kanban-board)
    - [Labels for the Tasks](#labels-for-the-tasks)
    - [Sprints](#sprints)
- [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks, Libraries, and Tools](#frameworks-libraries-and-tools)
    - [Authentication](#authentication)
    - [Deployment Tools](#deployment-tools)
    - [Development Tools](#development-tools)
    - [Version Information](#version-information)
- [Supported screens and browsers](#supported-screens-and-browsers)
- [Installation](#installation)
    - [Steps to Set Up](#steps-to-set-up)
- [Deployment](#deployment)
    - [Via Gitpod](#via-gitpod)
    - [Via Heroku](#via-heroku)
- [Features](#features)
- [Future Enhancements](#future-enhancements)
- [Structure](#structure)
    - [React Components](#react-components)
    - [Pages](#pages)
    - [Entity-Relationship Diagram (ERD)](#entity-relationship-diagram-erd)
- [Development Process](#development-process)
    - [Back-End development](#back-end-development)
    - [Front-End development](#front-end-development)
- [User Stories](#user-stories)
- [Bugs and Issues](#bugs-and-issues)
    - [Solved Bugs](#solved-bugs)
    - [Unsolved Bugs](#unsolved-bugs)
- [Testing](#testing)
    - [Code validation](#code-validation)
    - [Test Cases](#test-cases)

## Curriculum

The Social Platform for Architectural Inspiration and Collaboration

## Purpose of the Project

Project Path is a Full-Stack web application designed to help users showcase and share their portfolio projects. It provides an intuitive platform where users can create, organize, and manage their projects. The application leverages a React frontend for an engaging user experience and a REST API backend for reliable functionality. It enables seamless project sharing, collaboration, and visibility for personal and professional growth.

## UX Design and Visual Decisions

### Visual Design Choices
The following design decisions were made to ensure a clean, modern, and architectural aesthetic for the user interface of the project:

#### **Fonts**
- **Logo Font**: *Poppins* – Geometric and contemporary style, adding a modern touch while maintaining legibility.
- **Primary Font**: *Source Sans 3* – Clean and neutral look, ideal for body text and content-heavy sections.
- **Button Font**: *Work Sans* – Readable and geometric, maintaining a modern and clean appearance.
- **Navigation Font**: *Quicksand* – Friendly yet contemporary feel, maintaining legibility in the navigation menu.

#### **Colors**
The colour palette was chosen to give a minimalist and architectural feel with subtle contrasts:

- **Background Color**: #FFFFFF (White) – Clean and minimal.
- **Text Color**: #000000 (Black) – High contrast for readability.

#### **Button Colors**
- **General Button**: Default **#333** (Dark Grey), Hover **#4A7F7F** (Soft Teal), Active **#D57F32** (Muted Copper).
- **Follow Button**: Default **#4A7F7F** (Soft Teal), Hover **#ddd** (Light Grey).
- **Action Button**: Default **#D57F32** (Muted Copper), Hover **#dddddd** (Light Grey).
- **Delete Button**: Default **#7A5C5A** (Muted Burgundy), Hover **#dddddd** (Light Grey).

#### **Button Styles**
Simple, rounded buttons with neutral or accent colours for various actions, providing clear feedback on hover and active states.

#### **Additional Design Elements**
- **Box Shadows**: Subtle shadows are applied to containers, and the navbar to create depth. The navbar has a heavier shadow to stand out.
- **Rounded Corners**: Small 2px rounded corners are used for containers and form elements to maintain a modern and clean look.
- **Navbar Highlighting**: The active navbar item is highlighted with **#D57F32** (Muted Copper) to indicate the selected section.
- **Container Background**: Containers and the navbar have a soft background color of **#f8f8f8**, contributing to a light and minimal aesthetic.

### Wireframes
Wireframes were created to ensure the user interface is intuitive, clean, and architecturally cohesive. They outline the layout and visual hierarchy of key pages, such as the Dashboard and Login pages.

**Key Wireframe Screens:**

![Dashboard wireframe showing key navigation and user profile](docs/images/wireframes/wireframe-home-page-feed.png)  
*-**Dashboard**: Displays key navigation items, actions, and user profile.*

![Login page wireframe with input fields for email and password](docs/images/wireframes/wireframe-signin.png)  
*-**Login Page**: Simple form layout with essential input fields for authentication.*

![Notifications wireframe with options to mark as read or delete](docs/images/wireframes/wireframe-notifications.png)  
*-**Notifications**: List of notifications with read control and deletion.*

## Project Management - Kanban Board

![Agile Project - Kanban Board](docs/images/kanban.png)
*[Project Path - Kanban Board](https://github.com/users/houndhunger/projects/4)*

For efficient project management, a **Kanban Board** is used to track progress, manage tasks, and ensure the project stays on schedule.

The Kanban board includes the following columns:
- **Backlog**: Tasks that are yet to be planned or prioritized.
- **To Do**: Tasks that are planned but have not yet been started.
- **In Progress**: Tasks currently being worked on.
- **Done**: Completed tasks.

### Labels for the Tasks
- **Category Labels**
  - **Cat.: Content Discovery & Feed**: Tasks related to content discovery features, such as search and feed algorithms.
  - **Cat.: Interaction & Engagement**: Tasks that enhance user interaction and engagement, like comments or likes.
  - **Cat.: Navigation & Authentication**: Tasks related to user authentication, authorization, and overall navigation experience.
  - **Cat.: Portfolio Management**: Tasks associated with organizing, editing, and sharing portfolio projects.
  - **Cat.: Profile & Account Settings**: Tasks for user profiles and account settings.

- **Priority Labels**
  - **could-have**: Features that are nice to have but not essential for the project to function.
  - **must-have**: Critical features necessary for the core functionality of the application.
  - **should-have**: Important features that enhance usability but are not essential at launch.

- **Other used Labels**
  - **bug**: Identifies issues or bugs that need to be resolved.

### Sprints

The project is divided into **sprints** to ensure steady, incremental progress. Each sprint includes a set of tasks to be completed within a defined timeframe, allowing for regular reviews and adjustments. If a major task is not completed within the sprint, it is split and moved to the Backlog, where it can be prioritized for future sprints as needed.

## Technologies Used

### Languages
- **Python**: The core language used for backend logic in Django.
- **HTML5**: Used for structuring the web pages.
- **CSS3**: Used for styling the web pages and making them responsive.
- **JavaScript**: Used for interactive features and form validation.
- **React**: The JavaScript library used for building the frontend user interface.
- **JSX**: Syntax extension for JavaScript used in React components.
- **REST**: API architecture style used for communication between frontend and backend.

### Frameworks, Libraries, and Tools

#### Frontend Tech
- **React 17**: A JavaScript library for building user interfaces.
- **React Router DOM**: For handling client-side routing and navigation in React.
- **React Bootstrap**: For integrating Bootstrap components in React.
- **Axios**: For making API calls to the backend.
- **React Infinite Scroll Component**: For infinite scrolling functionality.
- **Bootstrap 4.6**: Frontend framework for responsive design and layout.
- **Web Vitals**: For measuring and optimizing the performance of the frontend application.

#### Backend Tech
- **Django 4.2**: The main web framework used to build the project.
- **Django Rest Framework (DRF)**: Used for building and exposing the REST API.
- **JWT (JSON Web Token)**: For managing user authentication and securing API endpoints.
- **PostgreSQL**: The database used for storing user and project data.
- **Gunicorn**: The Python WSGI HTTP server used for deployment.
- **Whitenoise**: For serving static files in production.

### Authentication
- **Django Allauth**: For user authentication, including registration, login, and email verification.

### Deployment tools
- **Heroku**: For hosting the live version of the application.
- **Cloudinary**: For managing static and media files in production.
- **Git**: Version control system for tracking changes in the project.
- **GitHub**: For hosting the project repository.
- **Google Fonts**: For custom fonts on the website.
- **Font Awesome**: For icons used in the navigation bar and footer.

### Development Tools
- **MSW (Mock Service Worker)**: For mocking API calls during frontend testing.
- **Jest & React Testing Library**: For unit and integration testing of React components.
- **ESLint**: For linting JavaScript code to maintain code quality.
- **Node**: 16.19.1
- **NPM**: 8.19.3

### Version Information
- **Django**: 4.2
- **React**: 17
- **Node**: 16.19.1

## Supported screens and browsers
The website was developed and tested on Google Chrome. It's working correctly for Small screen sizes, like Galaxy Fold, as well as for large screens.

![Responsive design](docs/images/responsive-design.png)
*Image was generated using this [techsini.com website](https://techsini.com/multi-mockup/index.php)*

## Installation

### Prerequisites
- **Python 3.8** 
- **Node.js 16.19.1** for frontend development
- **npm 8.19.3** for managing frontend dependencies
- **Django 4.2** 
- **PostgreSQL** or another supported database
- **Git** for version control

### Steps to Set Up
- **Clone the Repository**
 ```bash```
 git clone https://github.com/houndhunger/django-restaurant-web-and-booking.git
 cd django-restaurant-web-and-booking

## Deployment

The **Project Path** application can be hosted on a web server to provide online access. It is designed for easy integration into websites or platforms, allowing users to share and showcase their portfolio projects seamlessly.

### Via Gitpod

**Front End:**
1. Start by opening the project workspace in Gitpod.
2. Install Node.js version 16 using **nvm**:
 ```bash
     nvm install 16 && nvm use 16
 ```
3. Start the frontend development server using:
 ```bash
     npm start
 ```
4. Gitpod prompted me to open the website within its environment.
5. After making updates and saving them on Gitpod,
6. I refreshed the website to reflect the changes.

**Back end:** 
1. Start by opening the project workspace in Gitpod.
2. Set up a Python web server for the backend using the command:
 ```bash
   python3 manage.py runserver
 ```
3. Gitpod prompted me to open the website within its environment.
4. After making updates and saving them on Gitpod,
5. I refreshed the website to reflect the changes.

### Via Heroku

- **Front end**
  - The front-end repository is hosted at [Project Path - web app GitHub repository](https://github.com/houndhunger/project-path)
  - The front end is deployed to Heroku and is publicly accessible: [Project Path - front end app](https://project-path-3995bf441bd0.herokuapp.com/)

- **Back end**
  - The back-end repository is hosted at [DRF API - back-end GitHub repository](https://github.com/houndhunger/drf-api)
  - The back end is deployed to Heroku and is publicly accessible: [Project Path - DRF API - back end app](https://drf-api-dp-e6ac617a981a.herokuapp.com/)

To deploy the project, follow these steps:

1. Ensure that you have configured your environment variables in the Heroku dashboard.
2. Push your code to the Heroku remote repository: 

 ```bash
    git push
 ```
3. Deploy the app on Heroku either by manually deploying through the Heroku dashboard or by enabling automatic deployment for the main branch.

!!! KEEP UPDATING
## Features

- **Create & Edit Project Post:** Users can create and edit a project post, including essential details like title, description, title image & gallery.  
- **View Project Posts:** Users can browse through different project posts, view project details, and explore images uploaded by others.
- **Search for Projects & Users:** Users can search for projects by title, description or user name to easily find content related to their interests.  
- **Like a Project Post**: Users can like a project post to show appreciation and support for the content.  
- **Comment on Project Post:** Users can leave comments on project posts to engage with others and provide feedback.  
- **Follow/Unfollow Users:** Users can follow other users to receive updates on their new project posts, and unfollow them when desired.  
- **Edit Profile**: Users can update their profile information such as name, user image and password.  
- **Authentication:** Users can sign up, sign in, and maintain their session.
- **Password Management:** Users can update their passwords securely, with success or failure notifications displayed.  
- **Notifications System:** Users are notified about important activities such as project updates, comments, given likes to their project posts or when they are followed.

## Future Enhancements

- **Image Gallery for Projects:** Users can upload multiple images to a project post, offering a richer visual representation.
- **Text fileds length control:** Implement length constraints for fields such as bio and project description. Additionally, the project feed should display a shortened version of the project description if it exceeds two to three lines.
- **Email Notification:** Users will receive email notifications about key updates.
- **User Messages**: Users will be able to send and receive direct messages to communicate privately with others. This will foster more personal interactions and collaboration between users.
- **Comment on Comment & Notify:** Users will be able to reply to specific comments, creating threaded discussions. Additionally, notifications will alert users when someone replies to their comment, enhancing interaction and engagement.
- **Project Revisions:** Users can track and manage different versions or revisions of their project posts, ensuring that all changes are logged and can be viewed by other users. This feature is helpful for users who make frequent updates to their projects.
- **Tagging Projects:** Users can tag their project posts with relevant keywords to help others find similar content.
- **Project Bookmarking:** Users will be able to bookmark projects they are interested in for easy access later.
- **Cross-platform Integration:** The platform will support integration with other project management tools and social media platforms to increase visibility and engagement for project posts.

## Structure

### React Components:
- **Navigation Bar**
 The fully responsive navigation bar is present on all pages, providing links to Home, Menu, and other key sections like the user's Profile and Notifications. For signed-in users, the navigation bar also provides links to Create Post, Feed, Liked Posts, and Profile. The bar adapts based on whether a user is signed in or not, ensuring seamless navigation across devices.  

 ![Navigation bar on large screen](docs/images/components/navigation-bar-large-screen.png)
*Navigation bar on a large screen.*

 ![Navigation bar for screens less than 1200px](docs/images/components/navigation-bar-screen-lessthen1200.png)  
*Navigation bar for screens less than 1200px.*

 ![Navigation bar for screens less than 992px](docs/images/components/navigation-bar-screen-lessthen992.png)  
   *Navigation bar for screens less than 992px.*

 ![Navigation bar for screens less than 768px](docs/images/components/navigation-bar-screen-lessthen768.png)  
*Navigation bar for screens less than 768px.*

![Navigation bar with the menu open for screens less than 768px](docs/images/components/navigation-bar-screen-lessthen768-open.png)  
*Navigation bar with menu open for screens less than 768px.*

- **Most Followed - Popular Profiles**
 This component displays a list of the most followed profiles, giving users easy access to popular or influential accounts within the platform.

![Most followed profiles component](docs/images/components/Most-followed-profiles.png)

- **Search Bar**
 The search bar, Displayed on Posts Pages, allows users to easily find content by searching for specific posts, users, or keywords. It is conveniently placed to ensure quick access to the desired content.

![Search bar component](docs/images/components/search-bar.png)

- **More Dropdown**
 Available on the post pages, the "More Dropdown" provides users with options to edit or delete their own posts or comments. This functionality ensures that users have control over their content.

![More dropdown component](docs/images/components/more-dropdown.png)

- **Asset**
 A reusable component for displaying a spinner, image, or message, typically used for loading states or asset display.

- **Avatar**
 A component for displaying a user's profile image, with customizable size and optional text.

![Avatar](docs/images/components/avatar.png)

### Pages:
- **Add Project**
 A page dedicated to adding new posts or editing existing ones. Users can input title, description, and image and make necessary changes to previously created content.
 ![Add Project component](docs/images/components/add-project.png)

- **Post Page & Edit Form**
 A dedicated page for viewing individual posts. Users can add or edit their posts, comment, like, and interact with the post content.
!!! ADD IMAGE here

- **Posts - Home, Feed, and Liked**
 The **Home** page displays an overview of the most recent posts and serves as the main landing page for content discovery. The **Feed** page showcases posts from followed users in a dynamic feed, allowing users to see updates in real time, interact with posts, and engage with the community. The **Liked** page provides a dedicated space for viewing all posts the user has liked, offering easy access to the content they have shown interest in.
!!! ADD IMAGE here

- **Notifications**
 A page that displays notifications about recent interactions such as new likes, comments on posts, and follow activity. It keeps users informed about important actions related to their account.
 ![Notifications component](docs/images/components/notifications.png)

- **"PROFILE" page & Edit Form, Change username, Change password** 
 The "PROFILE" page allows users to view and edit their information, including changing their username and updating their password. Furthermore shows the sum count of own posts, followers, following, viewing and managing own posts.
 ![Profile 'More' dropdown menu](docs/images/components/more-dropdown-profile.png) 
    *The 'More' dropdown menu in the profile section.*

 ![Edit "PROFILE" page layout](docs/images/components/component-edit-profile.png) 
    *The page layout for editing a user's profile.*

 ![Change username page layout](docs/images/components/component-change-user-name.png) 
    *The page layout for changing a user's username.*

 ![Change password page layout](docs/images/components/component-change-password.png) 
    *The page layout for changing a user's password.*

- **SignIn & SiugUp Pages** 
 The Sign In and Sign Up pages allow users to authenticate their accounts by logging in or creating a new account. These pages facilitate seamless access to the platform's features, ensuring secure and efficient user onboarding.
 ![Sign in page](docs/images/pages/page-signin.png)
 ![Sign up page](docs/images/pages/page-signup.png)

- **Not Found Page** 
 This page appears when a user navigates to a broken or unavailable link.
 ![Not found page](docs/images/components/not-found-page.png)

### Entity-Relationship Diagram (ERD)
 - The following ERD outlines the relationships between models in the system:
 ![ERD](docs/images/erd.png)


## Development Process

### Back-End development
1. **Setup**: Initialized the project with Django REST Framework.
2. **Models, Views, Serializers**: Gradually developed resources for user profiles, posts, and comments.
3. **Post Like Feature**: Added functionality for liking posts (PostLike model, view, and serializer).
4. **Followers Feature**: Implemented a follow feature (Follow model, view, and serializer).
5. **Notifications**: Integrated notifications for likes and follows (Notification model and view).
6. **API Filtering**: Introduced API filtering for optimized querying.
7. **Database Setup**: Configured PostgreSQL for production and prepared deployment settings.
8. **Deployment**: Deployed the app to Heroku with secure production settings.

### Front-End development
1. **API Integration**: Connected the front-end with the back-end API using Axios for HTTP requests.
2. **Navigation Bar**: Built a responsive navigation bar (Sign In, Sign Up, Feed, and Profile).
3. **Post Creation**: Developed the Add Post page for posting user content.
4. **Post Details**: Created the PostPage component to display individual post details.
5. **Home Feed**: Built the Home Feed to display posts and the Liked Posts view.
6. **"PROFILE" page**: Designed the "PROFILE" page showing posts, followers, and following users.
7. **User Engagement**: Highlighted a "Most Followed Profiles" section for user engagement.
8. **User Interactions**: Integrated user interactions (like, comment, follow) with UI components.
9. **UI Enhancements**: Enhanced the UI for notifications and interaction prompts.

## User Stories

- **As a user, I want to register and sign in to access my account:**
  - **Problem:** Users need secure access to their personalized accounts.
  - **Action:** Implement sign-up and sign-in functionality with form validation.
  - **Outcome:** Users can securely register and sign in to their accounts.

| | | |
| :- | :- | :- |
| The user clicks on SIGN UP in the Navigation menu, which leads the user to the SIGN UP page. | User fills in name, password and confirmation password. Then click the Sign Up button. | User will be redirected SIGN IN page. |
| ![Sign Up Page](docs/images/pages/page-signup.png) | ![Filled Signup Page](docs/images/pages/page-signup-filled.png) | ![Sign In Page](docs/images/pages/page-signin.png) |
| User fills name and password. Then click the Sign In button. | User will be redirected to the Home page. |  |
| ![Filled Sign In Page](docs/images/pages/page-signin-filled.png) | ![Homepage](docs/images/pages/page-homepage-frank.png) | ![blank](docs/images/blank.png) |

- **As a user, I want to add posts to share content:**
  - **Problem:** Users need a way to create posts that display on their profile and in feeds.
  - **Action:** Develop an "Add Post" component where users can create posts with text and images.
  - **Outcome:** Users can successfully create posts and share content.

| | | |
| :- | :- | :- |
| The User clicks on ADD PROJECT in the Navigation menu, which forwards the user to the Project Post page. | User loads the image by clicking on the upload icon. | User fills in the Project Title and Project Description. |
| ![Add Project Page](docs/images/pages/page-addproject.png) | ![Add Project with Image](docs/images/pages/page-addproject-withimage.png) | ![Filled Add Project Page](docs/images/pages/page-addproject-filled.png) |
| The user submits the project by clicking create and is forwarded to Project Post which the user just created.  |  |  |
| ![Created Project Post](docs/images/pages/page-projectpost.png) | ![blank](docs/images/blank.png) | ![blank](docs/images/blank.png) |

- **As a user, I want to edit or delete my Project Post:**
  - **Problem:** Users need the ability to modify or remove their posts after they are created.
  - **Action:** Implement edit and delete functionality on each post to allow users to update or remove their content.
  - **Outcome:** Users can easily modify or delete their posts, ensuring content remains relevant and up to date.

| | | |
| :- | :- | :- |
| User from Project Post page clicks 3 dots to open More Dropdown offering Edit or Delete Project Post. | By clicking the pencil icon user is forwarded to the Project Post Edit page. | Edit corresponding fields and "submit" Project Post with changes by clicking the save button. |
| ![More Dropdown Options](docs/images/pages/page-projectpost-moredropdown.png) | ![Filled Add Project Page](docs/images/pages/page-addproject-filled.png) | ![Edited Project Post](docs/images/pages/page-addproject-edited.png) |
| User on Project Post page clicks 3 dots to open More Dropdown offering Edit or Delete Project Post. | By clicking the bin icon user is forwarded to the Page previusly visited. |  |
| ![More Dropdown Options](docs/images/pages/page-projectpost-moredropdown.png) | ![Homepage](docs/images/pages/page-homepage-frank2.png) | ![blank](docs/images/blank.png) |

- **As a user, I want to view and manage my profile:**
  - **Problem:** Users need a centralized page to view and edit their personal information and posts.
  - **Action:** Create a "PROFILE" page displaying user details, posts, followers, and following lists.
  - **Outcome:** Users can manage their profiles and view their activity.

| | | |
| :- | :- | :- |
| User clicks on PROFILE in Navigation Menu, which forwards user to user's "PROFILE" page. | User on "PROFILE" page clicks 3 dots to open More Dropdown further leading to pages. | Edit "PROFILE" page. |
| !["PROFILE" page](docs/images/pages/page-profile.png) | ![More Dropdown Options](docs/images/pages/page-profile-moredropdown.png) | ![Filled "PROFILE" page](docs/images/pages/page-profile-filled.png) |
| Change User Name Page. | Change Password page. |  |
| ![Change Username Page](docs/images/pages/page-profile-changeusername.png) | ![Change Password Page](docs/images/pages/page-profile-changepassword.png) | ![blank](docs/images/blank.png) |

- **As a user, I want to engage with posts through likes and comments:**
  - **Problem:** Users need interactive features to show appreciation and provide feedback.
  - **Action:** Add like and comment functionality to the Post Page and other feeds.
  - **Outcome:** Users can interact with content effectively.

| | | |
| :- | :- | :- |
| User Can find a Project of interest and like it by clicking the heart icon. | Or unlike it. | Or comment by clicking on the chat bubble icon, which forwards the user to Project Post. |
| ![Liked Post](docs/images/pages/pages-posts-like.png) | ![Unliked Post](docs/images/pages/pages-posts-unlike.png) | ![Comment Section](docs/images/pages/pages-post-coment.png) |
| At the bottom is the Comments section which can be filled and posted by clicking the post button. | User's comment will show on the bottom of the page. |  |
| ![Filled Comment Section](docs/images/pages/pages-post-coment-filled.png) | ![Submitted Comment](docs/images/pages/pages-post-coment-submitted.png) | ![blank](docs/images/blank.png) |

- **As a user, I want to be notified about users I follow and about activity on my posts:**
  - **Problem:** Users are not notified about activity from profiles they follow or on their posts.
  - **Action:** Implement a notification system for likes, comments, and follows.
  - **Outcome:** Users receive timely updates about relevant activities, improving engagement.

| | | |
| :- | :- | :- |
| User clicking on NOTIFICATIONS in Navigation Menu Views Notifications. | Unread notifications show as bold. All Notifications can be marked as read by clicking on the Mark All as Read button. | User can mark notification unread by clicking on it, or mark as read by clicking on it again |
| ![Notifications Page](docs/images/pages/page-notifications.png) | ![Mark All as Read Button](docs/images/pages/page-notifications-markallread.png) | ![Read Some Notifications](docs/images/pages/page-notifications-readsome.png) |
| User can delete read notifications by clicking on Delete All Read button |  |  |
| ![Delete All Read Button](docs/images/pages/page-notifications-deleteallread.png) | ![blank](docs/images/blank.png) | ![blank](docs/images/blank.png) |

## Bugs and Issues

### Solved Bugs

- **Post Like Issue**
  - **Problem**: Likes were not correctly counted for posts after the first like leading to inaccurate like counts.
  - **Solution**: Updated the like counting logic to handle multiple likes properly on the same post.

- **Follow Feature Bug**
  - **Problem**: Users were unable to unfollow others due to a database query error, which resulted in an unresponsive unfollow feature.
  - **Solution**: Corrected the database queries to resolve the unfollow action bug.

- **Profile Display Issue**
  - **Problem**: User profiles were not displaying accurate follower and following counts, causing inconsistencies in the profile view.
  - **Solution**: Fixed the data retrieval logic to ensure the correct number of followers and following were shown.

- **Responsive Layout Bug**
  - **Problem**: The site layout was not responsive on mobile devices, causing elements to overlap and become difficult to navigate.
  - **Solution**: Applied responsive design fixes to ensure that the layout adjusts properly across different screen sizes.

- **Notification model was missing user reference**
  - **Problem**: Only the user ID was being sent, causing the front end to lack the necessary user information to display notifications properly.
  - **Solution**: Sent the full user object in the notification model, allowing the front end to display notifications with the correct user details.

- **Post Submission Redirection Issue**
  - **Problem**: When a user submits a post or changes their password, the action is processed and updated, but the user is not redirected afterwards.
  - **Solution**: The issue originated in the backend, where the `signals.py` file for notifications incorrectly called the `user` instead of the `owner`.

- **Instead of the user who commented on the post, the owner of the post was showing in Notification**
  - **Problem:** The backend incorrectly referenced the `owner` of the post in the `signals.py` file for notifications instead of the commenting `user`.
  - **Solution:** Update the `signals.py` file to correctly reference the `user` who commented when creating notifications.

### Unsolved Bugs

- **Admin Styling Issue on Heroku Deployment**
  - **Problem**: Static files, including CSS for the admin panel, are uploaded to Cloudinary, were not being applied correctly after deploying the application to Heroku, causing the admin interface to appear unstyled.
  - **Solution**: Pending investigation and update to ensure static files are properly configured and served on Heroku for correct styling in the admin panel.

## Testing

### Code validation

**Front end**

- **CSS**: The following file has been validated and no errors were found when passing through the [Jigsaw validator](https://jigsaw.w3.org/css-validator/).

- **JavaScript - JSX**: The following file has been validated and no errors were found when passing through the [ESLint](https://eslint.org/).
  - [static/js/flatpickr.js](https://django-restaurant-web-and-book-565ecd4fe61b.herokuapp.com/static/js/flatpickr.js)
  - JavaScript follows the ES6+ standards with ESLint configuration enabled for the project.
  **Back end**
- **Python**: Code passes [pep8ci](https://pep8ci.herokuapp.com/)and [pylint](https://pypi.org/project/pylint/) validation with 100% success. Validated are following
  - **files:** admin.py, apps.py, models.py, serializers.py, serialziers.py, signals.py, urls.py, views.py
  - **folders:** followers, likes, notifications, posts, profiles

!!! Fill tables with images and text.

### Test Cases

#### Manual Testing

Here are the key manual tests performed using the Project Path web interface:

1. **Add a Project**
    - **Test:** Create a new project with valid data.
    - **Expected Result:** Project is added and visible in the project list.
    - **Steps:**

| | | |
| :- | :- | :- |
| 1. click on ADD PROJECT | 2. If fields are empty and the user clicks the "create" button, a warning message shows. | 3. Fill in relevant fields and "submit". |
| ![Add Project Page](docs/images/pages/page-addproject.png) | ![Add Project with Image](docs/images/pages/page-addproject-errors.png) | ![Filled Add Project Page](docs/images/pages/page-addproject-filled.png) |
| 4.  The user is forwarded to Project Post which was just created. |  |  |
| ![Created Project Post](docs/images/pages/page-projectpost.png) | ![blank](docs/images/blank.png) | ![blank](docs/images/blank.png) |

**Also tested in: User stories - As a user, I want to add posts to share content**
***

2. **Edit a Project**
    - **Test:** Edit an existing project.
    - **Expected Result:** Project details are updated successfully.
    - **Steps:**

| | | |
| :- | :- | :- |
| 1. On the Project Post page click 3 dots to open More Dropdown and then click the pencil icon for edit. | 2. Edit corresponding fields and "submit" the Project Post with changes by clicking the save button. | 3. The user is forwarded to Project Post viewing updates. |
| ![Project More Dropdown Options](docs/images/pages/page-projectpost-moredropdown.png) | ![Filled ADD PROJECT page](docs/images/pages/page-addproject-filled2.png) | ![Edited Project Post](docs/images/pages/page-projectpost-edited.png) |

**Also tested in: User stories - As a user, I want to edit or delete my Project Post**
***
  
3. **Delete a Project**
    - **Test:** Delete a project.
    - **Expected Result:** The Project is removed from the project list.
    - **Steps:**

| | | |
| :- | :- | :- |
| 1. On the Project Post page click 3 dots to open the More Dropdown and then click the bin icon for deletion. | 2. At the "PROFILE" page user can view that the Project post was deleted. |  |
| ![Project More Dropdown Options](docs/images/pages/page-projectpost-moredropdown.png) | ![Comment deleted](docs/images/pages/pages-post-coment-deleted.png) | ![blank](docs/images/blank.png) |

**Also tested in: User stories - As a user, I want to edit or delete my Project Post:**
***

4. **Post a Comment**
    - **Test:** Add a comment to a project.
    - **Expected Result:** Comment appears under the project.
    - **Steps:**
        1. Navigate to the project post.
        2. Enter a comment in the comment box.
        3. Click post.
        4. Verify the Comment appears under the Project postt.

**Also tested in: User stories - As a user, I want to engage with posts through likes and comments**
***

5. **Edit a Comment**
    - **Test:** Edit an existing comment.
    - **Expected Result:** Comment is updated successfully.
    - **Steps:**

| | | |
| :- | :- | :- |
| 1. Click Comment 3 dots to open the More Dropdown and then click the pen icon for edit. | 2. A comment is edited on the Project Post page. | 3. Click "cancel" to cancel edit. |
| ![Comment more dropdown](docs/images/pages/pages-post-coment-moredropdown.png) | ![Edit comment](docs/images/pages/pages-post-coment-editedit.png) | ![Cancel edit](docs/images/pages/pages-post-coment-editcancel.png) |
| 4. Click Comment 3 dots to open the More Dropdown and then click the "pen" icon for edit. | 5. Edit the Comment and click save. | 6. Verify the comment is updated. |
| ![Comment more dropdown](docs/images/pages/pages-post-coment-moredropdown.png) | ![Edit comment](docs/images/pages/pages-post-coment-editedit.png) | ![Save edit](docs/images/pages/pages-post-coment-editsave.png) |


6. **Delete a Comment**
    - **Test:** Remove a comment from a project.
    - **Expected Result:** Comment is removed.
    - **Steps:**

| | | |
| :- | :- | :- |
| 1. Click Comment 3 dots to open the More Dropdown and then click the bin icon for delete. | 2. Verify the comment is no longer visible. |  |
| ![Comment more dropdown](docs/images/pages/pages-post-coment-moredropdown.png) | ![Edit comment](docs/images/pages/pages-post-coment-editedit.png) | ![Cancel edit](docs/images/pages/pages-post-coment-editcancel.png) |
| 4. Click Comment 3 dots to open More Dropdown and then click the pen icon for edit. | 5. Edit the Comment and click save. | 6. Verify the comment is updated. |
| ![Comment more dropdown](docs/images/pages/pages-post-coment-moredropdown.png) | ![Edit comment](docs/images/pages/pages-post-coment-editedit.png) | ![Save edit](docs/images/pages/pages-post-coment-editsave.png) |

7. **Give and Remove Like**
    - **Test:** Like and unlike a project or comment.
    - **Expected Result:** Like is toggled on and off successfully.
    - **Steps:**

| | | |
| :- | :- | :- |
| 1. Click heart - Like on a project post. | 2. Click heart - Unlike to remove the like. |  |
| ![Liked Post](docs/images/pages/pages-posts-like.png) | ![Unliked Post](docs/images/pages/pages-posts-unlike.png) | ![blank](docs/images/blank.png) |
 
**Also tested in: User stories - As a user, I want to engage with posts through likes and comments:**
***

8. **Follow and Unfollow a User**
    - **Test:** Follow and unfollow a user.
    - **Expected Result:** User's follow status is toggled successfully.
    - **Steps:**

| | | |
| :- | :- | :- |
| 1. Click "follow" on "Most followed profiles". | 2. Verify the "followers" count increases. | 3. Click "unfollow" to remove the follow. |
| ![Follow](docs/images/pages/page-homepage-follow.png) | ![Verify follow](docs/images/pages/page-profile-follow1.png) | ![Unfollow](docs/images/pages/page-homepage-unfollow.png) |
| 4. Verify the "followers" count decreases. |  |  |
| ![Verify unfollow](docs/images/pages/page-profile-follow2.png) | ![blank](docs/images/blank.png) | ![blank](docs/images/blank.png) |


9. **View Notifications**
    - **Test:** View new and unread notifications.
    - **Expected Result:** Notifications are listed and correctly marked as unread.
    - **Steps:**
        1. Navigate to the NOTIFICATIONS page.

**Also tested in: User stories - As a user, I want to be notified about users I follow and about activity on my posts**
***

10. **Read and Unread Notifications**
    - **Test:** Mark notifications as read or unread.
    - **Expected Result:** Notifications can be toggled between read/unread states.
    - **Steps:**
        1. Click on a notification to mark it as read.
        2. Click on a read notification to mark it as unread.

**Also tested in: User stories - As a user, I want to be notified about users I follow and about activity on my posts**
***

11. **Delete Notifications**
    - **Test:** Delete a notification.
    - **Expected Result:** Notification is removed from the list.
    - **Steps:**
        1. Click the "Delete All Read" button.
        2. Verify the notification is no longer listed.

**Also tested in: User stories - As a user, I want to be notified about users I follow and about activity on my posts**
***

12. **Sign In - Existing User and "SIGN OUT"**
    - **Test:** Log in and log out with an existing user.
    - **Expected Result:** User can log in and out successfully.
    - **Steps:**

| | | |
| :- | :- | :- |
| 1. Enter invalid login credentials & "Sign In". | 2. Enter valid login credentials & "Sign In". | 3. Verify redirection to the dashboard. |
| ![Invalid Log In](docs/images/pages/page-signin-creditentials.png) | ![Valid Log In](docs/images/pages/page-signin-filled.png) | ![Home page](docs/images/pages/page-homepage-frank.png) |
| 4. Click "SIGN OUT" & Verify successful logout and be forwarded to the Home page and change in the Navigation menu. |  |  |
| ![Home page - SIGN OUT](docs/images/pages/page-signout.png) | ![blank](docs/images/blank.png) | ![blank](docs/images/blank.png) |

13. **Sign Up - New User**
    - **Test:** Register a new user.
    - **Expected Result:** User is created and redirected to the dashboard.
    - **Steps:**
        1. Fill in the registration form with valid details.
        2. Click "Sign Up".
        3. Verify the user is redirected to the dashboard.

| | | |
| :- | :- | :- |
| 1. Enter a username that exists & "Sign In". | 2. Enter a short password & "Sign In". | 3. Fill in the registration form with valid details & "Sign In". |
| ![Sign Up user exists](docs/images/pages/page-signup-userexists.png) | ![Password short & common](docs/images/pages/page-signup-shortandcommon.png) | ![Sign In Page](docs/images/pages/page-signin-filled.png) |
| 4. Click "SIGN OUT" & Verify successful logout and redirect to the Sign In page. |  |  |
| ![Home Page - Signed In](docs/images/pages/page-homepage-frank.png) | ![blank](docs/images/blank.png) | ![blank](docs/images/blank.png) |


14. **View and Edit Profile**
    - **Test:** View and edit user profile.
    - **Expected Result:** User profile can be viewed and edited successfully.
    - **Steps:**
        1. Navigate to the "PROFILE" page.
        2. Edit the profile details by clicking 3 dots to open More Dropdown and then clicking "edit profile".
        3. Change the image or Bio.
        4. Click save.
        5. Verify the updated details appear on the profile.

**Also tested in: User stories - As a user, I want to view and manage my profile:**
***

15. **Change Username**
 - **Test:** Change the username.
 - **Expected Result:** Username is updated successfully.
 - **Steps:**
 1. Navigate to the "PROFILE" page - 3 dots - "edit profile".
 2. Change the username. & click "save".
 3. Verify the username is updated on the profile.

| | | |
| :- | :- | :- |
| 1. Navigate to the "PROFILE" page - 3 dots - "change user name".  | 2.  Fill invalid username - with the space. | 3. Fill valid username and "save". |
| ![Change username](docs/images/pages/page-profile-changeusername2.png) | ![Change username error](docs/images/pages/page-profile-changeusername-error.png) | ![Change username valid](docs/images/pages/page-profile-changeusernameaftererror.png) |
| 4. Verify change was successful by being forwarded to the "PROFILE" page. |  |  |
| ![PROFILE page - new username](docs/images/pages/page-profile-changeusername-sucess.png) | ![blank](docs/images/blank.png) | ![blank](docs/images/blank.png) |

16. **Change Password**
    - **Test:** Change the user password.
    - **Expected Result:** Password is updated successfully.
    - **Steps:**

| | | |
| :- | :- | :- |
| 1. Navigate to the "PROFILE" page - 3 dots - "change password".  | 2.  Fill not matching passwords and receive a warning message. | 3. Fill in short passwords and receive a warning message. |
| ![Change password](docs/images/pages/page-profile-changepassword.png) | ![Change username error](docs/images/pages/page-profile-changepassword-didntmatch.png) | ![Change username valid](docs/images/pages/page-profile-changepassword-tooshort.png) |
| 4. Fill in new matching passwords & be forwarded to the "PROFILE" page.  | 5. To verify password "SIGN OUT" | 6. Enter credentials with a new password & "Sign In". |
| ![Home page - SIGN OUT](docs/images/pages/page-profile2.png) | ![Home page - SIGN OUT](docs/images/pages/page-signout.png) | ![Valid Log In](docs/images/pages/page-signin-filled.png) |
| 7. Verify redirection to the dashboard. |  |  |
| ![Home page](docs/images/pages/page-homepage-frank.png) |  |  |

## Credits

- **Mentor**: Thanks to my mentor for his guidance and support throughout the development of this project.
- **Code Institute Tutor Service**: Special thanks to the Code Institute Tutor Service for their assistance in difficult times and valuable feedback.
- **ChatGPT Service**: Appreciation to ChatGPT for providing helpful advice and code suggestions during the project development.
- **Family**: A heartfelt thank you to my wife, who lovingly took on all the household responsibilities, allowing me the time and focus to work on this project. Her constant support and understanding made this possible.

## License

This project is open-source and available under the MIT License. Feel free to fork, modify, and distribute the code for educational or commercial purposes.

---

Happy coding!