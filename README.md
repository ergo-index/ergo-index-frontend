# Ergo Index & Mutual Fund Platform (Frontend)
ErgoIndex is a non-custodial platform for pooling funds to invest in a portfolio of tokens on the Ergo blockchain.
The ultimate goal is for fund managers to be able to form portfolios containing tokens from a wide range of
blockchains. The website facilitates the creation of transactions and sends them to the network, but it never stores any user's private key.

# Setup
1. Create a test Firebase project (their free limits are very high, so you won't get charged -- you don't even need a credit card)
   1. Go to https://firebase.google.com/ and click "Get Started"
   2. Log in if necessary, and then click "Create a project"
   3. Follow the creation process (it's intuitive, and the settings aren't important)
   4. You will see your console in the Project Overview by default. From there, add a Web app by clicking the "</>" icon
   5. Pick any app nickname and register it
   6. On the "Add Firebase SDK" step, copy the `firebaseConfig` info
2. Create a file called `.env` in this project's root directory
3. Use your `firebaseConfig` info from the first step to fill in `.env` with the following:
```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=
```

# Coding Style
We use ESLint to enforce the airbnb style, so all you have to do is run `yarn lint` to check new code,
and `yarn lint:fix` to fix issues that can be resolved automatically.
Alternatively, point your IDE to our .eslintrc file for a smoother, more incremental coding process.
