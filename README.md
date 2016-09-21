Hingoot
=======


*hingoot(n)* Aberdonian slang. A hang out. A person who spends a lot of time out, maybe drunk.

A simple react app with material-ui to coordinate nightlife

it has no persistant store, and instead uses redux to hold a non-persistant server state.

Decision to do it this way made because, a ) practice using redux, and b) since no state must because
saved for more than 24 hours, persistance is not that important

Uses the Yelp api to return data from search query

enter location you are interested, you can click if you are going and click again to change your mind

you can see how many other users are also going.

for dev purposes you can bypass the requirement for facebook login in the options