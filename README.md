# FakeRunner
FakeRunner uses idevicelocation to send location information written to iOS device triggered by writing to Firestore

# System Requirement
- idevicelocation
- MacOS or Linux
- iOS device
  
# Getting started
1. Install module
   ```
   npm install
   ```

2. Edit config.json
    ```
    {
    "userId": "user is here",
    "udid": "device UDID here"
    }
    ```

3. Get sa-key.json   
   Get sa-key.json from Firebase Console and store it in the this root directory

4. Build
   ```
   npm run build
   ```

5. Run
   ```
   npm start
   ```