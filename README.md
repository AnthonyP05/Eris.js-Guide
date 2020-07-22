# Eris.js-Guide
An Eris.js Boilerplate with tons of Comments [![Discord](https://img.shields.io/discord/604134680517804033?color=blue&label=Chat&style=plastic)](https://discord.gg/WNQRVSj) [![Discord](https://img.shields.io/github/stars/Antoni05/Eris.js-Guide?color=blue&label=Stars&style=plastic)](https://github.com/Antoni05/Eris.js-Guide)

##Installation

1. [IDE](https://code.visualstudio.com/) - Visual Studio Code is a *free* open source IDE. Any IDE would work with what we're going to be doing in this guide, Ex: PhpStorm (Not Free), WebStorm (Not Free), or Atom. Once clicking the link, you will want to download the version for your platform, and complete the installation guide. 

1. [Node.js](https://nodejs.org/en/download/) - Node.js is a JavaScript runtime in which we will be utilizing in order to run the Discord bot. Follow the link and download your appropriate installer for your platform, and I recommend the latest (LTS) version. 
    1. (Windows:) By default, node should be inserted into your Environment Variables Path. If you open command prompt and typing **node** results in an error, follow these steps, otherwise ignore: First, search in the windows search bar **Environment Variables** and click *Edit the system environment variables*. Then, click *Environment Variables...* at the bottom of the prompt that it displays. Another prompt will popup, navigate to System Variables, and click the *Path* variable and click *Edit...* Click *New* and type in **C:\Program Files\nodejs\\** or wherever your nodejs directory is located.
    
1. [Bot Files](https://github.com/Antoni05/Eris.js-Guide/archive/master.zip) - If you have Github Desktop then you may use that to clone. Otherwise, download the zip then right click the folder in the directory that it's in and click *Extract All*. 
    1. Files can also be downloaded via Git Command Line using the following line: `git clone https://github.com/Antoni05/Eris.js-Guide.git`
    
##Dependencies
Before starting the bot, a few things are required. Dependencies being one of them. In its current state, **Eris.js-Guide** requires 2 depenedencies which can be installed in its directory by running the commands (In its directory): `npm install eris` & `npm install ascii-table`    
    
##Starting the Bot
In order to start the bot you will need to retrieve the token from the [Discord Developer Portal](https://discord.com/developers/applications). To do so, Follow these steps:
1. Click the link to go to the Discord Developer Portal.
1. Login and at the top right, Click **New Application**
1. Fill out the Name section and click **Create**
1. On the left side, click **Bot** then **Add Bot** and confirm
1. Fill out the name and either **Click to Reveal Token** or click **Copy** and paste into the directory Bot/Config/config.js token string.

Next, start the bot by running the following command: `node .` or `npm start` (either works in our case)

To invite the bot to your Guild (Server): Visit the [Developer Portal OAuth2 Bot](https://discord.com/developers/docs/topics/oauth2#bots) Website and scroll down to where the **URL Example** is displayed. URL Example: https://discord.com/api/oauth2/authorize?client_id=157730590492196864&scope=bot&permissions=1

Replace the Discord ID (157730590492196864) in the Url Example with the bot's Discord ID (Can be found in the Developer Portal Applications). 

##About the Bot
The **Eris.js Guide** contains a handler for commands that show in console which commands are being loaded and which are not, as well as a few utils that could be of use located at **Bot/Config/utils.js**.

##About the Owner
Hello! You can refer to me as Antoni, and I am a young person trying to achieve great things in the place we call Earth. I'm from America but I am Mexican and I really enjoy coding and learning new things everyday :) Currently still learning more about Javascript as well as beginning my journey with PHP, HTML, CSS, and Go.

If any issues occur, have any questions, or have any suggestions for this guide/boilerplate, you can contact me on discord. My discord is: `Antoni#2128` & my discord ID is `324338354982486017`

You may also join [my discord server](https://discord.gg/WNQRVSj) if you're having any issues and want easy access to me!

##Note
- If there is an error in the files, either what I commented or what I wrote, please contact me so that I may fix it. Thank you all ! 
- If you have any suggestions on what I should add to the bot in order to help others, let me know!







