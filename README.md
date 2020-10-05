# X-Clacks-Middleware
[![Coverage Status](https://coveralls.io/repos/github/MatthewZito/x-clacks-middleware/badge.svg?branch=master)](https://coveralls.io/github/MatthewZito/x-clacks-middleware?branch=master)
[![npm version](https://badge.fury.io/js/x-clacks-middleware.svg)](https://badge.fury.io/js/x-clacks-middleware)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents

 - [Introduction](#intro) 
    - [Features](#feat)
 - [Installation + Usage](#usage)

## <a name="intro"></a> Introduction
X-Clacks-Middleware is an Express.js middleware package that adds the `x-clacks-overhead` header to your server responses. Simply register this middleware in your Express server, and [add your site](https://xclacksoverhead.org/dearheart/review) to the registry of those that "carry the signal"!

What is `X-Clacks-Overhead`?

From [the X-Clacks-Overhead website](https://xclacksoverhead.org/home/about):
"X-Clacks-Overhead is a non-standardised HTTP header based upon the fictional work of the late, great, Sir Terry Pratchett.

In Terry Pratchett's science-fantasy Discworld series, "The Clacks" is a network infrastructure of Semaphore Towers, that operate in a similar fashion to telegraph - named "Clacks" because of the clicking sound the system makes as signals send.

In Sir Terry's novel "Going Postal"...the inventor of the Clacks...lost his only son...and in order to keep the memory of his son alive, he transmitted his son's name as a special operational signal through the Clacks to forever preserve his memory."


### <a name="feat"></a> Features
![screenshot](https://github.com/MatthewZito/x-clacks-middleware/blob/master/documentation/header.png)

  - zero dependencies
  - plug n' play
  - randomizes the header values with one of any number of names

## <a name="usage"></a> Installation and Usage

Install the package in your repository:
```
npm i x-clacks-middleware
```

Register the middleware in your Express app. The default header value is 'Terry Pratchett'. You may elect to use the middleware option `names` to add one or multiple names to commemorate. 
```
app.use(setXClacksOverheadHeader({ 
    names: [
        "Yukio Mishima", 
        "Hermann Hesse", 
        "John Conway"
        ] 
    })
);
```

Options is an object with a `names` property, an Array of one or more strings. The header will randomly select one of the names for each response (assuming you've provided more than one name, of course) and prepend it with the `GNU` prefix, per the `x-clacks-overhead` standard.
