# SwasthyaChain - Blockchain-Based Healthcare Data Management

SwasthyaChain is a decentralized application (DApp) that leverages blockchain technology to securely store and manage patients' healthcare data. Built using **ReactJS**, **Node.js**, **IPFS**, **Metamask**, **Truffle Suite**, and the **Ethereum Network**, this project aims to provide a secure, transparent, and tamper-proof system for storing patient records. 

The platform offers personalized dashboards for **Doctors**, **Diagnostics**, and **Patients** to ensure streamlined access and management of sensitive health data.

## 📸 Screenshots

- **Patient Dashboard**
  ![Patient Dashboard](path-to-patient-dashboard-screenshot.png)
  
- **Doctor Dashboard**
  ![Doctor Dashboard](path-to-doctor-dashboard-screenshot.png)
  
- **Diagnostic Dashboard**
  ![Diagnostic Dashboard](path-to-diagnostic-dashboard-screenshot.png)

## 💡 Key Features

- **Secure Storage**: Patient records are stored on a decentralized network using **IPFS**.
- **Blockchain-Powered**: Uses **Ethereum** blockchain and **Smart Contracts** for data integrity and security.
- **Metamask Integration**: Metamask is used for user authentication and transaction management on the Ethereum network.
- **Personalized Dashboards**: Custom dashboards for doctors, diagnostic centers, and patients for managing and accessing data securely.
- **Transparency & Privacy**: Immutable data records ensuring transparency with encrypted patient data privacy.

## 🛠️ Technology Stack

### Frontend
- **ReactJS**: JavaScript library for building user interfaces.
- **Metamask**: Ethereum wallet integration for managing blockchain transactions.
  
### Backend
- **Node.js**: JavaScript runtime for building server-side logic.
- **Express.js**: Web application framework for Node.js.
  
### Blockchain
- **Ethereum**: Decentralized platform for deploying smart contracts.
- **Truffle Suite**: Development framework for Ethereum-based smart contracts.
- **IPFS (InterPlanetary File System)**: Decentralized storage system for storing patient records securely.

## 📂 Project Structure


    ├── client/               # React frontend
    │   ├── src/
    │   ├── public/
    │   └── package.json
    ├── contracts/            # Smart contracts for Ethereum blockchain
    ├── migrations/           # Deployment scripts for Truffle
    ├── test/                 # Test scripts for smart contracts
    ├── server/               # Node.js backend
    │   ├── routes/
    │   ├── models/
    │   ├── app.js
    │   └── package.json
    └── truffle-config.js     # Truffle suite configuration

## 🔧 Installation and Setup
Prerequisites
Ensure you have the following installed:

Node.js (version X.X.X)
Truffle Suite
Metamask Extension for your browser
Ganache (for local Ethereum blockchain development)
Steps

Clone the repository:

    git clone https://github.com/your-username/SwasthyaChain.git
    Install dependencies:

Navigate to both the client and server directories and run:

    npm install
    Run the local Ethereum blockchain (Ganache):

Open Ganache and start a new workspace. Make sure it runs on the same port as configured in your truffle-config.js.

Deploy smart contracts:

In the project root directory, run:

    truffle migrate --reset
    Start the backend server:
    
    cd server
    npm start
    
Run the React frontend:

In a new terminal, navigate to the client directory and run:

    npm start
    Connect Metamask:

Open Metamask and connect it to your local Ganache blockchain. Import accounts from Ganache for testing.

## 📜 Smart Contracts Overview
The SwasthyaChain platform is powered by smart contracts that manage access control and ensure the secure storage of medical records. The contracts are written in Solidity and deployed on the Ethereum network.

## Key Smart Contracts
PatientContract.sol: Manages patient data, permissions, and updates.
DoctorContract.sol: Grants doctors access to specific patient records.
DiagnosticContract.sol: Allows diagnostic centers to store and access test results for patients.


## 📈 Future Enhancements
Interoperability with other healthcare providers.
AI-powered diagnostics using patient data.
Tokenization for incentivizing data sharing.
Improved UI/UX for better user experience.

## 🛡️ Security
All patient data is stored in encrypted form on IPFS.
Only authorized doctors and diagnostic centers can access specific patient data based on permissions granted by the patient.

##📜 License
This project is licensed under the MIT License.

## 👨‍💻 Author
Prince Raj - GitHub Profile
Feel free to contribute to this project and suggest improvements!

## This README includes a detailed project description, installation steps, tech stack, and a basic structure
