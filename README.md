# Javascript-Robotics-Demo

##PROGRAMS WE INSTALLED
**NodeJS** ([nodejs.org](http://nodejs.org/))
- Is a program you install on your machine
- It executes .js files locally on your computer by running "node {filename.js}" (without quotes or braces) in terminal/command line
- Comes with many packages built-in (listed here: [nodejs.org/api](http://nodejs.org/api))

**NPM** (Node Package Manager - [npmjs.com](http://npmjs.com/))
- Is a program you install on your machine
- is used to install additional libraries/packages/utilities (these words often used interchangably) to your project.
- is used by running "npm install {package-name}" (without quotes or braces)

##NPM PACKAGES WE USED
**ExpressJS** ([expressjs.com](http://expressjs.com/))
- is an NPM package installed in your project folder
- is used to serve resources to browser (images, html, css, etc)
- is used to accept, and respond to requests from the browser
- makes these resources available at [http://localhost:3000](http://localhost:3000/) by default

**Johnny Five** ([johnny-five.io](http://johnny-five.io/))
- is an NPM package installed in your project folder
- Is used to connect with AND interface with Arduino boards over USB

##WHAT WE DID
- Installed **NodeJS **and** NPM**  
- Installed **expressjs** and **johnny-five** packages using NPM  
- Created a **project** folder (files in here are considered the **back end** or **server side**)  
    - Created an **app.js**
        - Imported Johnny Five using **require**()
            - Created a **Board** object (connects to arduino)
            - Created a **Servo** object
        - Imported **expressjs** using **require**()
            - Created an **expressjs** server
            - Configured it to serve **static** resources from the **public** folder so we could view the html file in the browser at **[http://localhost:3000/index.html](http://localhost:3000/index.html)**
            - Added one API endpoint (/api/position/:position) that would call **Servo.to**(position) when it was hit
- Created a "**project/public**" folder (files in here are considered the **front end** or **client side**)  
    - Created an **index.html** file in our **project/public** folder
        - Imported **jQuery** using a &lt;**script**&gt; tag
        - Created a range **input**
        - Listened for **change** and **input** events from the range which would make a jQuery **$.get()** call to /api/endpoint/{rangeInputValue}
