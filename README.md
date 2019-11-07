# Website Hosting Service

## Description

A simple user interface for a website hosting company
A basic web server created using Express JS. It aims to give an example of routing and using node mailer as well as other modules.

### Screenshot

![](public/img/web-host-screenshot.jpg)

### Technologies

- Node.js
- Express JS
- JavaScript
- HTML
- CSS

## How to Use

### Installation

Run:

`npm install`

### Usage

To start the application run the following command in the root directory:

`node app`

To get the contact form to work edit the following code in `app.js`

```
auth: {
    user: "Enter your email address here",
    pass: "Enter your email password here"
}
```

and

```
from: "Name Surname <add email from auth here>",
to: "Enter the email address you want to send to here"
```

### Prerequisites

- Node.js installed on your system

## License

This project is licensed under the MIT License
