# FakeRunner
FakeRunner uses idevicelocation to send location information written to iOS device triggered by writing to Firestore

# System Requirement
- idevicelocation
- Mac
- iOS device
  
# Getting started
1. Edit config.json

```
{
  "userId": "user is here",
  "udid": "device UDID here"
}
```

2. sa-key.json
   
   Get sa-key.json from Firebase Console and store it in the root directory

3. Build

   ```npm run build```

4. Run

   ```npm start```