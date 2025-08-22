#!/usr/bin/env node
// NEAR Bot Installation Script

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import boxen from 'boxen';
import gradient from 'gradient-string';
import figlet from 'figlet';

console.clear();

// Show installation banner
const banner = figlet.textSync('NEAR BOT', {
  font: 'Big Money-sw',
  horizontalLayout: 'default',
  verticalLayout: 'default'
});

console.log(gradient.rainbow(banner));
console.log(boxen(
  chalk.cyan('🚀 NEAR Bot Installation & Setup'),
  {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'cyan'
  }
));

console.log(chalk.blue('\n📋 Checking system requirements...\n'));

// Check Node.js version
try {
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  
  if (majorVersion >= 18) {
    console.log(chalk.green(`✅ Node.js ${nodeVersion} - Compatible`));
  } else {
    console.log(chalk.red(`❌ Node.js ${nodeVersion} - Requires Node.js 18+`));
    console.log(chalk.yellow('Please upgrade Node.js to version 18 or higher'));
    process.exit(1);
  }
} catch (error) {
  console.log(chalk.red('❌ Could not determine Node.js version'));
  process.exit(1);
}

// Check if package.json exists
if (!fs.existsSync('package.json')) {
  console.log(chalk.red('❌ package.json not found'));
  console.log(chalk.yellow('Please run this script from the project directory'));
  process.exit(1);
}

console.log(chalk.green('✅ package.json found'));

// Install dependencies
console.log(chalk.blue('\n📦 Installing dependencies...\n'));

try {
  console.log(chalk.cyan('Running: npm install'));
  execSync('npm install', { stdio: 'inherit' });
  console.log(chalk.green('\n✅ Dependencies installed successfully'));
} catch (error) {
  console.log(chalk.red('\n❌ Failed to install dependencies'));
  console.log(chalk.yellow('Please check your internet connection and try again'));
  process.exit(1);
}

// Make bot.js executable
try {
  if (process.platform !== 'win32') {
    execSync('chmod +x bot.js');
    console.log(chalk.green('✅ Made bot.js executable'));
  }
} catch (error) {
  console.log(chalk.yellow('⚠️  Could not make bot.js executable (this is optional)'));
}

// Show success message
console.log(chalk.green('\n🎉 Installation completed successfully!'));
console.log(boxen(
  chalk.white('🚀 Quick Start:\n') +
  chalk.cyan('  node bot.js --interactive\n') +
  chalk.white('  node bot.js --ref=E9418U\n') +
  chalk.white('  npm run dev\n\n') +
  chalk.white('📖 For more options, see README.md'),
  {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green'
  }
));

console.log(chalk.blue('\n🔗 Useful Commands:'));
console.log(chalk.gray('  npm start          - Run with default settings'));
console.log(chalk.gray('  npm run dev        - Run in interactive mode'));
console.log(chalk.gray('  npm run test       - Run with test settings'));
console.log(chalk.gray('  node bot.js --help - Show help (if implemented)'));

console.log(chalk.yellow('\n⚠️  Remember to use this tool responsibly!'));
console.log(chalk.cyan('\nHappy NEAR botting! 🚀\n'));
