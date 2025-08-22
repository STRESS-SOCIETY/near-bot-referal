# 🚀 NEAR Bot - Enhanced CLI Interface

A beautiful and robust command-line interface for creating NEAR Mobile accounts and redeeming referral codes with enhanced error handling, colorful output, and interactive features.

## ✨ Features

- 🎨 **Beautiful CLI Interface** - Colorful output with gradients, spinners, and progress indicators
- 🔄 **Robust Error Handling** - Automatic retries with exponential backoff
- 📊 **Real-time Progress** - Visual feedback for all operations
- 🎯 **Interactive Mode** - Guided setup with prompts and validation
- 🔍 **Smart Fallback** - Multiple RPC endpoints for reliability
- 💾 **Session Management** - Save and load account sessions
- 🎁 **Referral System** - Easy referral code redemption
- ✅ **Verification** - Blockchain verification of created accounts
- 🚀 **Bulk Account Creation** - Create multiple accounts simultaneously with progress tracking
- ⏱️ **Configurable Delays** - Customizable delays between account creation to avoid rate limits
- 📁 **Flexible Output** - Custom output file names for bulk results
- 📈 **Progress Tracking** - Real-time progress bar with ETA for bulk operations

## 🛠️ Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd near-bot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Make executable (optional)**
   ```bash
   chmod +x bot.js
   ```

## 🚀 Usage

### Basic Usage

```bash
# Create single account with default settings
node bot.js

# Create single account with custom referral code
node bot.js --ref=E9418U

# Create single account with custom prefix
node bot.js --prefix=my --ref=E9418U

# Create single account with specific handle
node bot.js --handle=myaccount.near --ref=E9418U
```

### Bulk Account Creation

```bash
# Create 10 accounts with default settings
node bot.js --bulk=10

# Create 20 accounts with custom referral code
node bot.js --bulk=20 --ref=E9418U

# Create 50 accounts with custom prefix and delay
node bot.js --bulk=50 --prefix=my --ref=E9418U --delay=3000

# Create 100 accounts with custom output file
node bot.js --bulk=100 --ref=E9418U --output=my_accounts.json

# Using npm scripts for bulk creation
npm run bulk      # Create 10 accounts
npm run bulk20    # Create 20 accounts with 3s delay
```

### Interactive Mode

```bash
# Launch interactive setup
node bot.js --interactive
# or
npm run dev
```

### Advanced Options

```bash
# Verbose output
node bot.js --verbose --ref=E9418U

# Custom prefix and referral
node bot.js --prefix=user --ref=MYREF123

# Specific handle (must end with .near)
node bot.js --handle=myusername.near --ref=E9418U
```

## 📋 Command Line Options

| Option | Description | Default |
|--------|-------------|---------|
| `--ref=<code>` | Referral code to redeem | `E9418U` |
| `--prefix=<text>` | Username prefix for auto-generation | `yl` |
| `--handle=<name.near>` | Specific handle to use | Auto-generate |
| `--bulk=<number>` | Number of accounts to create | `1` |
| `--delay=<ms>` | Delay between accounts in milliseconds | `2000` |
| `--output=<file>` | Output file for results | `bulk_accounts.json` |
| `--interactive` | Launch interactive mode | `false` |
| `--verbose` | Enable verbose logging | `false` |

## 🎯 Examples

### Example 1: Single Account Setup
```bash
node bot.js --ref=E9418U
```
Output:
```
🎯 Target Handle: yl-123456.near
✅ Handle yl-123456.near is available
🔑 Generating cryptographic keypair...
🌐 Creating relayer account...
🎁 Redeeming referral code...
🔍 Verifying account on blockchain...
🎉 Account created successfully!
```

### Example 2: Bulk Account Creation
```bash
node bot.js --bulk=10 --ref=E9418U
```
Output:
```
📋 Starting bulk NEAR account creation (10 accounts)...
Progress |████████████████████████████████████████| 100% | 10/10 accounts | ETA: 0s | Current: yl-789012.near
💾 Bulk results saved to: bulk_accounts.json
🎉 Bulk creation completed!
┌─────────────────────────────────────────┐
│ Total Requested: 10                     │
│ Successfully Created: 10                │
│ Failed: 0                               │
│ Output File: bulk_accounts.json         │
└─────────────────────────────────────────┘
```

### Example 3: Interactive Mode
```bash
node bot.js --interactive
```
The bot will guide you through:
- Username prefix selection
- Referral code input
- Bulk count selection
- Delay configuration
- Output file name
- Custom handle option (for single account)
- Validation and confirmation

### Example 4: Custom Handle
```bash
node bot.js --handle=myaccount.near --ref=E9418U
```

## 📁 Output Files

### Output Files

#### Single Account (session.json)
The bot creates a `session.json` file containing:
```json
{
  "handle": "yl-123456.near",
  "publicKey": "ed25519:...",
  "secretKey": "...",
  "relayerToken": "...",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "referralCode": "E9418U"
}
```

#### Bulk Accounts (bulk_accounts.json)
For bulk creation, the bot creates a comprehensive JSON file:
```json
{
  "totalRequested": 10,
  "totalCreated": 10,
  "totalFailed": 0,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "config": {
    "prefix": "yl",
    "refCode": "E9418U",
    "delay": 2000
  },
  "accounts": [
    {
      "handle": "yl-123456.near",
      "publicKey": "ed25519:...",
      "secretKey": "...",
      "relayerToken": "...",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "referralCode": "E9418U",
      "verified": true,
      "status": "VERIFIED"
    }
  ]
}
```

## 🔧 Configuration

The bot uses multiple RPC endpoints for reliability:
- `https://near.lava.build`
- `https://free.rpc.fastnear.com`
- `https://rpc.mainnet.near.org`

## 🛡️ Error Handling

The enhanced bot includes:
- **Automatic retries** with exponential backoff
- **Multiple RPC fallbacks** for network issues
- **Detailed error messages** with context
- **Graceful degradation** when services are unavailable
- **Input validation** to prevent invalid requests

## 🎨 CLI Features

### Visual Elements
- 🌈 **Gradient banners** with ASCII art
- ⚡ **Animated spinners** for operations
- 📊 **Progress bars** for long operations
- 🎯 **Color-coded status** (green=success, yellow=warning, red=error)
- 📦 **Boxed output** for important information

### Interactive Features
- ❓ **Guided prompts** with validation
- ✅ **Confirmation dialogs** for important actions
- 🔄 **Auto-retry** for failed operations
- 📝 **Input sanitization** and validation

## 🔍 Troubleshooting

### Common Issues

1. **Network Timeout**
   ```
   ❌ Error: Request timeout
   ```
   - The bot will automatically retry with different RPC endpoints
   - Check your internet connection

2. **Handle Already Taken**
   ```
   ⚠️ Handle myaccount.near is taken
   ```
   - Use `--interactive` mode to choose a different handle
   - Or let the bot auto-generate a new one

3. **Invalid Referral Code**
   ```
   ❌ Failed to redeem referral code
   ```
   - Verify the referral code is correct
   - Check if the code is still valid

### Debug Mode

Enable verbose logging:
```bash
node bot.js --verbose --ref=E9418U
```

## 📦 Dependencies

- **axios** - HTTP client with cookie support
- **tweetnacl** - Cryptography for key generation
- **chalk** - Terminal colors and styling
- **ora** - Elegant terminal spinners
- **inquirer** - Interactive command line interface
- **figlet** - ASCII art text
- **gradient-string** - Gradient text effects
- **boxen** - Box drawing for CLI

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 👨‍💻 Creator

**0xboomtu**
- 🐦 **X (Twitter):** [@0xboomtu](https://twitter.com/0xboomtu)
- 💻 **GitHub:** [weck25](https://github.com/weck25)
- 🚀 **NEAR Mobile Bot Creator**

---

## 💰 Support

If you find this tool helpful, consider supporting the creator:
- ⭐ Star this repository
- 🐦 Follow on Twitter: [@0xboomtu](https://twitter.com/0xboomtu)
- 💬 Share your feedback and suggestions

## 📄 License

MIT License - see LICENSE file for details

## ⚠️ Disclaimer

This tool is for educational and development purposes. Use responsibly and in accordance with NEAR's terms of service.

---

**Made with ❤️ for the NEAR community**
