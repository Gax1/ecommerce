# Components

- Header

  - Receives:
    - in what page it is
    - the number of items in the cart,
  - State: none,
  - Show:
    - title of the page
    - breadcrumb with the page where is it
    - the numbers of items in the cart in the right corner
    - link to principal page
  - User interactions:
    - click in the title to navigate to the principal page
    - click in the link to navigate

- Search bar

  - Receives:
    - a string
    - search state
  - State:
    - none
  - Show:
    - a text input
  - User interactions:
    - introduce text in the input and modify search state

- Item card:

  - Receives:
    - an item object
  - State:
    - nothing
  - Show:
    - item image
    - item brand
    - item Model
    - Price
  - User interactions:
    - none

- List page:

  - Receives:
    - an array of items
  - State:
    - search state
  - Show:
  - list of item cards
  - search bar
  - User interactions:
  - click on card to navigate to details page

- Image component:

  - Receives:
    - an item image
  - State:
    - none
  - Show:
    - item image
  - User Interactions:
    - none

- Details card:

  - Receives:
    - an item
  - State:
    - none
  - Show:
    - item brand, model, price, CPU, RAM, OS, screen resolution, batteries, camera, size, weight
  - User interactions:
    - none

- Button Add:

  - Receives:
    - onclick function
  - State:
    - none
  - Show:
    - a button
  - User interactions:
    - click on the button

- Actions component:

  - Receives:
    - item storage
    - item colors
    - item id
  - State:
    - storage capacity
    - wanted color
  - Show:
    - an Add Button
    - checkbox with options for select storage capacity
    - checkbox with options for select color
  - User interactions:
    - select storage capacity
    - select color
    - click on Add Button

- Details page:
  - Receives:
    - an item
  - State:
    - none
  - Show:
    - Details card
    - Image component
    - Actions component
  - User interactions:
    - none
