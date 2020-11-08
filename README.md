# Whatsrupp Portfolio Website
[![whatsrupp](https://circleci.com/gh/whatsrupp/whatsrupp.com-v2.svg?style=svg)](https://app.circleci.com/pipelines/github/whatsrupp/whatsrupp.com-v2)

Like seemingly every other developer on the planet, I seem to churn out inane amounts of half finished scrappy side projects.  

Sometimes those projects reach some sort of completed state, and when I get the time, I whack them up here.

The end goal is to have a fun, highly interactive collection of projects that I can come back to in a bit of time to get that sweet sweet nostalgia buzz.

## Check it Out

If it's live - it's [here](https://www.nickrupp.co.uk/)!

## Technical


This website was built with React + Typescript. The only reason being that I used React for a couple of years at work and it's industry standard at the moment (Although lets see if Vue takes the lead...). 
I ended up using emotion for css-in-js styling, because I wanted to try something different to styled-components. But, really, I think I'll swap this back when I find time.
Testing is with jest and react-testing-library (Big Up Kent D). 
I'd really like to add a bit of visual regression testing which I think would help with the more interactive html canvas based game elements.

I'm a sucker for a bit of AWS hosting and infrastructure as code. So this all gets distributed on a cloudformed CloudFront distribution network. The static files are stored on an S3 bucket configured as web hosting repository.

Tracking and analytics were just whacked together with Google Analytics. It's fairly painless. I'M WATCHING.


#### Mock-Up
This was the mockup of the original website I made when I was applying for my first dev job. I'll leave it here just so I can see how much it's changed. Again, I think I get too nostalgic sometimes.

<img align="center" src="/docs/assets/mockup.png" alt="mock-up">



#### Local Set-Up

#### 1) Clone this repository

```
 $ cd /wherever/you/want/to/clone/whatsrupp.com-v2
 $ git clone https://github.com/whatsrupp/whatsrupp.com-v2
```


#### 2) Install dependencies with yarn

```
$ yarn
```

#### 3) Start the webpack-dev-server
```
$ yarn start
```
which will dynamically build the static files and serve them up at localhost:3000. Fun times.

**_If you made it this far, fair play to you... thanks for reading!_**

_Nick Rupp_