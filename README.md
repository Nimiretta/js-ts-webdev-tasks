# SDC JavaScript/TypeScript Shop.co Website

Your team task is to implement Frontend and Backend for E-Commerce Website

[[_TOC_]]

## Frontend

### Technical Requirements

- Vite 5 https://vitejs.dev/
- TypeScript 5 https://www.typescriptlang.org/
- ESLint (with TS rules)
- Prettier
- HTML5 https://www.w3.org/TR/2011/WD-html5-20110405/
- CCS3/SCSS/SASS/Less or any other approach
  - if you are not using any CCS library, then it's a must to choose one CCS approach and follow it https://www.ianholden.co.uk/blog/css-architecture-bem-oocss-smacss-acss-and-why-we-need-it
- CSS libraries (with required JS/TS for some components like Modals, Tabs, Pagination, etc), possible choise:
  - Tailwind CSS https://tailwindcss.com/
  - Bulma https://bulma.io/
  - Bootstrap https://getbootstrap.com/
  - See more at https://github.com/troxler/awesome-css-frameworks
- Responsive design support. If you chose CSS library, then follow already defined screen widths there, if not then:
  - Mobile up to 600px
  - Desktop from 1024px
- Fonts
  - Rubik https://fonts.google.com/specimen/Rubik
  - Poppins https://fonts.google.com/specimen/Poppins
- Router, possible choise:
  - https://www.npmjs.com/package/navigo
  - https://npmjs.com/package/yourrouter
  - custom implementation
- Fetch API https://learn.javascript.ru/fetch-api or Axios https://axios-http.com/ for communication with Backend

### Design

Figma Design Link https://www.figma.com/file/Q0zYyVhjvTQMKg8tqtUPLB/E-commerce-Website-Template-(Freebie)-(Community)?type=design&node-id=0%3A1&mode=design&t=XmMnUq455lfxiTnI-1

Alternativly all screens could be found in `frontend/design` folder

### Pages

- Homepage
- Category Page
- Product Detail Page
- Cart
- Checkout
- Payment
- Order confirmation

#### Homepage

- URL `/`
- Shop now button scrolls to the Categories section
- Categories sections display all available categories
  - Backend call `GET /products/categories` https://dummyjson.com/docs/products#products-categories
  - Each category is displayed in rectangle with a title inside (words should be breaking as it is shown on the design)
- Click on any category opens "Category page" for the selected category: `/category/:categoryName`

#### Category Page

- URL: `category/:categoryName` where `categoryName` is the dynamic name of the selected category i.e. `category/skincare`, `category/laptops`
- All products related to the selected category should be displayed
  - Backend call to get products in the category `GET /products/category/:categoryName` https://dummyjson.com/docs/products#products-category
- Click on any product opens "Product Detail Page" for the selected product: `/product/:productId`
- Filters panel
  - Brand filters should contain all brands from the products inside category
  - Each brand is selectable
  - Selected brand is shown in bold font, unselected - in regular font
  - Price filter minimum value is 10$, maximum value is 2000$
  - Apply filter button should filter products on the right side and show only those which are satisfied filter params (brand and price)
  - Reset filter button should reload products in the selected category from Backend
  - On Mobile screen filters panel could be opened by clicking filter icons on the right side of the Category Name title
  - On Mobile screen filters panel could be closed by clicking on the cross icon on the right side on overflow or by clicking buttons Apply filter or Reset Filter

### Product Detail Page

- URL: `/product/:productId` where `productId` is the dynamic id of the product i.e. `product/17`, `product/5`
- Image gallery displays the first image as the main image and the rest three as the alternatives
  - Optional task: click on any alternative image swap active and that clicked image so the selected image is displaying as active image
- Add to cart should add selected amount of a product to the cart
  - if cart is not existed (no any items in the cart yet), then there is a need to add a new cart (Backend call https://dummyjson.com/docs/carts)
  - if cart is already existed (there are few items already),
    then there is a need to update a cart (Backend call https://dummyjson.com/docs/carts)

### Cart Page

- URL: `/cart/:cartId` where `cartId` is the dynamic id of the cart i.e. `cart/5`, `cart/1`
- `Go to checkout` button opens a new page `Checkout`

### Checkout Page

- URL: `/checkout/:cartId` where `cartId` is the dynamic id of the cart i.e. `cart/5`, `cart/1`
- Form should contain validation with the following rules:
  - `firstName` - type string, min length 3, max length 32
  - `lastName` - type string, min length 3, max length 32
  - `maidenName` - type string, min length 3, max length 32
  - `email` - type mail, standard validation for email address
  - `phone` - type string, but validation for mobile numbers (contains + as the first symbol, then numbers divided into groups separated by one space symbol), example of a valid number is `+63 739 292 7942`
  - `address` - type string, example `1745 T Street Southeast`
  - `city` - type string, example `Washington`
  - `postalCode` - type string, example `20020`
- If any of the fields is invalid, then input field should contain a red thin border, if valid then the border should be as on the provided design (light grey)
- `Go to Payment` button opens a new page `Payment`

### Payment Page

- URL: `/payment/:cartId` where `cartId` is the dynamic id of the cart i.e. `cart/5`, `cart/1`
- Form should contain validation with the following rules:
  - `cardNumber` - type string, min length 3, max length 32. Inside an input (on UI) should be displayed with a space symbol after each group of 4 digits and the last group consists of 5 digits or 4 digits (it depens on the cart provided) (examples: `5038 0955 2042 20685` (maestro) or `3586 0829 8252 6703` (jsb)). Inside the model (Backend, any inner objects) should be stored without any spaces (examples: `50380955204220685` or `3586082982526703`).
  - `cardExpire` - type string, first two numbers (with leading zeros for month less than 10), then a symbol `/`, then two numbers of year. Examples: `02/23`, `10/23`
  - `iban` - type string, first two characters are `A-Z` letters, then numbers and spaces. Example: `AT24 1095 9625 1434 9703`, `NO17 0695 2754 967`.
- If any of the fields is invalid, then input field should contain a red thin border, if valid then the border should be as on the provided design (light grey)
- `Place an order` button:
  - Delete an existing card by it cartId (Backend call https://dummyjson.com/docs/carts)
  - Opens a new page `Order Confirmation`

### Order Confirmation

- URL: `/confirmation`
- when a user appears on the page, set up a timer for 5 seconds. When the timer is finished, redirect a user to the `Homepage`

### Components

#### Header

- Click on logo opens `Homepage`
- Click on `cart` icon opens `Cart` page
  - If the cart is empty or not exists, display a message `Cart is empty` on `Cart` page (the same UI as on `Order Confirmation` page but different text inside)
  - otherwise display current cart

#### Subscribe banner

- Field to enter a email address
- Support validation for email input
- Click on `Subscribe to Newsletter` send mock Backend request with (setTimeout wrapped in Promise) and rerender component with a text `Success! You've subscribed to our newslatter.`

## Backend

Use https://dummyjson.com/docs

## Evaluation criteria - max 10 points

### Vite + TypeScript + ESLint + Prettier - 1 point

### Responsive design + Router + Redux - 2 point

### Render of pages (HTML, CSS, TS) - maximum 7 points

- Homepage <b>1 points</b>
- Category Page <b>1 points</b>
- Product Detail Page <b>1 points</b>
- Cart <b>1 points</b>
- Checkout <b>1 points</b>
- Payment <b>1 points</b>
- Order confirmation <b>1 points</b>
