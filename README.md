# Eventify Event Platform

> Event platform built with the MERN stack & Redux.

<img src="./frontend/public/images/screens.png">

This project is part of my [MERN Stack Event Platform](https://www.eventify.com/mern-stack-event-platform) course. It is a full-featured event browsing and ticket purchasing platform with PayPal & credit/debit payment integrations. Experience it live at [Link]

This is the initial version of the app, offering event exploration, detailed views, and secure checkout processes.

- [Features](#features)
- [Usage](#usage)
  - [Env Variables](#env-variables)
  - [Install Dependencies (frontend & backend)](#install-dependencies-frontend--backend)
  - [Run](#run)
- [Build & Deploy](#build--deploy)
  - [Seed Database](#seed-database)

* [License](#license)

## Features

- Event listings with detailed pages
- User reviews and ratings for events
- Search functionality for events
- User profile with order history
- Admin event management
- Admin user management
- Admin Order details page
- Checkout process (ticket selection, payment method, etc)
- PayPal / credit card integration
- Database seeder (events & users)

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'your_secret'
PAYPAL_CLIENT_ID = your paypal client id
```

Change the JWT_SECRET to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample events and users as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@email.com (Admin)
123456

test@email.com (Customer)
123456
```