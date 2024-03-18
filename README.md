# PulseWire

Created by Ismael Enriquez Jr, Allen Ramirez

## 🚀 Mission statement

Our application, PulseWire, is for individuals who seek to stay informed and inspired by the world around them. It allows users to effortlessly access real-time news articles, blog posts, and curated book reviews from the New York Times, empowering them to dive deep into the latest news stories and discover captivating books recommended by critics. PulseWire provides users with a seamless experience to explore diverse perspectives, stay up-to-date with current events, and uncover compelling reads that resonate with their interests and passions.

## API

This application will use the New York Times API. Below are the documentation and specific endpoints we intend to use.

- Link to API documentation:

1. https://developer.nytimes.com/docs/top-stories-product/1/overview
2. https://developer.nytimes.com/docs/books-product/1/overview
3. https://developer.nytimes.com/docs/timeswire-product/1/overview

- https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
  - Article name: title
  - Image: multimedia array, which may contain image URLs
  - Section: section
  - Published date: published_date
- https://api.nytimes.com/svc/books/v3/reviews.json?author=${authorName}&api-key=${API_KEY}
  - book author
  - book title
  - publication
  - url
- https://api.nytimes.com/svc/news/v3//content/{source}/{section}.json?api-key=yourkey
  - Title
  - Publish date
  - Image: Multimedia
  - section
  - url

[This API Will require a API Key]

## 👩‍💻 MVP User Stories

The core features of the application include:

- Users can browse through the latest top stories from the New York Times API. They will be presented with a selection of articles covering a variety of topics such as world news, politics, business, technology, and more.
- Users can search by author to see all books: Users have the ability to search for books by a specific author. For each book, users can view details such as the title, author, publication date, summary, and cover image (if available). Users can click on a book to view its reviews.
- Users can search for real-time stories. They can filter stories based on three categories of interest, such as politics, sports, and entertainment. The application will display a list of approximately 50 latest stories matching the selected categories.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

- Users will need to log in to use this application
- Users will be able to choose between light and dark mode
- Users will be able to rate the article (like button will go up)

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**

**Day 1**

- [] Implement fetching and displaying of top stories from New York Times API - Due by end of day
- [] Design basic layout for displaying top stories - Due by end of day
- [] Implement search functionality by author for fetching books from New York Times API - Due by end of day
- [] Design layout for displaying books search results - Due by end of day
-

**Day 2**

- [] Implement fetching and displaying of real-time stories based on category from New York Times API - Due by end of day
- [] Design layout for displaying real-time stories - Due by end of day

**Day 3**

- [] Set up React Router for navigation between pages - Due by end of day
- [] Define routes for top stories, book search, and real-time stories - Due by end of day
- [] Test navigation between pages to ensure proper routing functionality - Due by end of day

**Day 4**

- [] Implement stretch features such as user authentication and light/dark mode - Due by end of day
- [] Implement styling Page 1 & 2 application - Due by end of day

**Day 5**

- [] Implement styling Page 3 & 4 application - Due by end of day
- [] Celebrate completion of MVP milestone! 🎉 - Due by end of day

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

[Wireframe for page 1]
![Alt text](./image/First%20Page.png)

[Wireframe for page 2]
![Alt text](./image/Second%20Page.png)

[Wireframe for page 3]

- Same Idea as page 1

[Wireframe for page 3]
![Alt text](./image/Login%20Page.png)
