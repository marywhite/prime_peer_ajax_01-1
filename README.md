# prime_peer_ajax_01
Oh hi! I didn't see you there.

In this challenge you will be reading through and interacting with Github's developer API.

## Useful links

jQuery Ajax documentation is [here](http://api.jquery.com/jquery.ajax/).

The API Docs are located [here](https://developer.github.com/v3/).

Postman for Chrome is located [here](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en).

Postman for Chrome as a packaged app is located [here](https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop?hl=en).

## Github!

Github, being as awesome as they are, fully support CORS requests! No hacks required.

## Assignment!!!

1. Display github username - login
2. link to github user page - html_url
3. display profile image - avatar_url
4. display some public info - location

5. search page
Read through the Github API Developer documentation. Using this documentation you need to construct an Ajax application page that will display one of your Github user's names (and a link to the user's Github page), profile images and some public information you've shared on Github.

Once you've got that working, modify the application to be a search page that will search all users and display the information detailed above for the searched user (or display a message when the user is not found). 

**Hint:** Be sure to leverage `encodeURI` just in case the user types something weird! 

*For this assignment, you are only accessing public information and should not need an API Key or to even authenticate.*

### Hard Mode

In addition to showing the user's information, also list of all of that user's public repository names (with links to them) and their descriptions.

### Pro Mode

Style your application page with Bootstrap, and be sure to optimize for mobile devices (shrink your browser and expand it back and forth to test this).
